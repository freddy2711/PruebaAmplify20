import { useEffect, useState, Fragment } from 'react'
import Button from '../../../components/UI/atoms/button/Button'
import Label from '../../../components/UI/atoms/label/Label'
import Tbody from '../../../components/UI/molecules/table/tbody/Tbody'
import Thead from '../../../components/UI/molecules/table/thead/Thead'
import Tabla from '../../../components/UI/organisms/table/Tabla'
import Loader from '../../../components/UI/atoms/loader/Loader'
import styles from '../../../components/templates/asistencia/registrar/RegistroAsistencia.module.scss'
import dynamic from 'next/dynamic'
import { get, set } from 'local-storage'
import Swal from 'sweetalert2'
import moment from 'moment'
import Router from 'next/router'
import { apiAsistencia, apiSolicitud } from './../../../pages/api'
import {
  CierreDeSesionExitoso,
  enviarSolicitud,
} from './../../../helpers/asistenciaHelpers'

import {
  TEACHERCODE,
  CLASS_SELECTED_SOL_MARCACION,
  CONTROL_CLASE_ID,
  ASISTENCIA,
  DUENO_SESSION,
  VALIDAR,
  COMENTARIO,
  // DATOS DE PRUEBA
  SET_DUENO_SESSION,
  CONTROL_CLASE_ESTADO,
  TIPO_ASISTENCIA,
  REGSOL,
  NO_CLOSE,
} from './../../../consts/storageConst'
import Select from '../../../components/UI/atoms/select/Select'

const Alerta = dynamic(
  () => import('../../../components/UI/atoms/alert/Alerts'),
  {
    ssr: false,
  }
)

const AsistenciaSolicitud = ({ ip }: any) => {
  const [datos, setdatos] = useState<any>([])
  const [teacherId, setTeacherId] = useState('')
  const [Loading, setloading] = useState(false)
  const [btnTomarAsistencia, setBtnTomarAsistencia] = useState(true)
  const [motivo, setMotivo] = useState('')

  const DUENO: any = get(DUENO_SESSION)

  const noClose =
    get(NO_CLOSE) === '' ||
    get(NO_CLOSE) === null ||
    get(NO_CLOSE) === undefined
      ? 0
      : get(NO_CLOSE)

  // state para habilitar y deshabilitar botones
  const [disabledBtns, setDisabledBtns] = useState({
    btnActivar: false,
    btnFinSesion: true,
    btnRegresar: false,
  })

  // state para mostrar u ocultar botones
  const [showBtns, setShowBtns] = useState({
    btnActivar: true,
    btnFinSesion: false,
    btnRegresar: false,
  })

  const formatHora = (valor: string) => {
    console.log('valor', valor)
    const dateSplit = valor.split('T')
    const date = `${dateSplit[0]} ${dateSplit[1]}`
    console.log(date)
    const hora = moment(date, 'YYYY-MM-DDTHH:mm:ss').format('HH:mm')
    return hora
  }

  useEffect(() => {
		setloading(true)
		
		if (noClose === 1) { 
			setMotivo('Regularizar marcación de clase abierta')
		}
		 

    const consultaApi = async () => {
      if (get(CLASS_SELECTED_SOL_MARCACION) !== null) {
        const item: any = JSON.parse(get(CLASS_SELECTED_SOL_MARCACION))

        try {
          const { data }: any = await apiSolicitud.detailClass(item)
          const teacherCode: any = get(TEACHERCODE)
          setTeacherId(teacherCode)

          const datos = data.detail

          console.log(item)
          console.log(datos)

          datos[0].hoursIni = formatHora(datos[0].hoursIni)
          datos[0].hoursEnd = formatHora(datos[0].hoursEnd)

          setdatos(datos)
        } catch (error) {
          console.log(error)
          setloading(false)
        }
      }
    }

    consultaApi()

    const validaciones = async () => {
      const obj: any = get(CLASS_SELECTED_SOL_MARCACION)
      const item = JSON.parse(obj)

      const ctlClassIDLocal = get(CONTROL_CLASE_ID)

      const ControlClaseID: any =
        ctlClassIDLocal === '' || ctlClassIDLocal === undefined
          ? 0
          : ctlClassIDLocal

      const Asistencia: string = get(ASISTENCIA)

      if (parseInt(Asistencia) === 1) {
        if (item.CoclTypeTeacher === 'A') {
          setDisabledBtns({
            btnActivar: true,
            btnFinSesion: true,
            btnRegresar: false,
          })

          Swal.fire({
            title: 'Portal de Docentes',
            text: `Los docentes auxiliares no pueden registrar asistencia de alumnos. Ud. solo podrá marcar el término de su sesión de clase.`,
            icon: 'warning',
            showCancelButton: false,
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'OK',
          })
        } else {
          setDisabledBtns({
            btnActivar: false,
            btnFinSesion: false,
            btnRegresar: false,
          })
        }
      }

      if (DUENO !== SET_DUENO_SESSION) {
        Swal.fire({
          title: 'Portal de Docentes',
          text: `Las sesiones de clase solo pueden ser modificadas por el docente ${DUENO}`,
          icon: 'warning',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK',
        })

        // TODO: Deshabilitar todos los botones
        //! deshabilitar todos los botones
        /*
          btnActivar.Enabled = False
          btnFinSesion.Enabled = False
          btnRegresar.Enabled = False
          btnGuardar.Enabled = False
          btnCancelar.Enabled = False
        */
      } else {
        // TODO: Deshabilitar todos los botones menos Regresar
        /*
          btnActivar.Enabled = False
          btnFinSesion.Enabled = False
          btnRegresar.Enabled = true
          btnGuardar.Enabled = False
          btnCancelar.Enabled = False
        */
      }

      let valasistencias

      try {
        const aula = item.ClassRoomCode ? item.ClassRoomCode : 'null'
        const fecha = moment(item.HoursDate, 'DD-MM-YYYY').format('YYYY-MM-DD')

        const { data }: any = await apiSolicitud.cheAsisAlum(
          aula,
          ControlClaseID,
          fecha
        )

        valasistencias = data
      } catch (error) {
        console.log(error)
      }

      if (parseInt(valasistencias) === 0) {
        // ? then activa boton enviar asistencia (habilita)
        /*
        btnActivar.Enabled = True
        btnActivar.Visible = True
        btnFinSesion.Enabled = False
        btnFinSesion.Visible = False
        */

        setDisabledBtns({
          btnActivar: false,
          btnFinSesion: true,
          btnRegresar: true,
        })

        setShowBtns({
          btnActivar: true,
          btnFinSesion: false,
          btnRegresar: false,
        })
      }

      let PemitirCerrarSesionSinAsistenciaEstudiante

      try {
        const { data }: any = await apiAsistencia.getClaseDetalle(
          item.ClaCode,
          'CIERRE_SIN_ASIST'
        )

        PemitirCerrarSesionSinAsistenciaEstudiante = data
      } catch (error) {
        console.log(error)
      }

      if (parseInt(PemitirCerrarSesionSinAsistenciaEstudiante) === 1) {
        setBtnTomarAsistencia(false)
        // btnActivar.Text = "Enviar Solicitud"
      } else {
        Swal.fire({
          title: 'Portal de Docentes',
          text: `El sistema ha detectado que aun no registra la asistencia de los estudiantes`,
          icon: 'warning',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK',
        })
      }

      setloading(false)
    }

    validaciones()
  }, [])

  const btnFin = async (ControlClaseID: string, ClaCode: string) => {
    const cierreExito = await CierreDeSesionExitoso()
    if (cierreExito) {
      await enviarSolicitud(ControlClaseID, ClaCode)
      set(VALIDAR, '1')
    }
    window.location.href = '/solicitud-de-marcacion'
  }

  const handleTomarAsistencia = async () => {
    setloading(true)
    console.log('handleTomarAsistencia')

    set(TIPO_ASISTENCIA, REGSOL)

    const {
      CoclNrDay,
      HoursDate,
      ClaCode,
      ClassRoomCode,
      FechahoursIni,
      FechahoursEnd,
      hoursIni,
      hoursEnd,
      CoclTypeTeacher,
    } = datos[0]

    if (motivo === '') {
      setDisabledBtns({
        btnActivar: false,
        btnFinSesion: false,
        btnRegresar: true,
      })

      Swal.fire({
        title: 'Portal de Docentes',
        text: `Debe seleccionar un motivo para poder regularizar su marcación`,
        icon: 'warning',
        showCancelButton: false,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'OK',
      })
      setloading(false)
      return
    }

    set(COMENTARIO, motivo)

    const item = {
      teacherCode: `${teacherId}`,
      nrodia: CoclNrDay,
      date: moment(HoursDate, 'DD/MM/YYYY').format('YYYY-MM-DD'),
      classCode: ClaCode,
      classroom: ClassRoomCode,
      user: DUENO,
      beginning: hoursIni.replace('T', ' '),
      finish: hoursEnd.replace('T', ' '),
    }

    console.log(item)

    let dataGSDSV

    try {
      const resp: any = await apiSolicitud.getSesionesDocenteSolicitarValidar(
        item
      )

      console.log(resp)

      dataGSDSV = resp.data
      console.log('dataGSDSV', dataGSDSV)
    } catch (error) {
      console.log(error)
    }

    if (dataGSDSV.length > 0) {
      const ControlClaseID = dataGSDSV[0].ClaseId

      set(CONTROL_CLASE_ID, ControlClaseID)

      const sControlClaseEstado = get(CONTROL_CLASE_ESTADO)

      if (sControlClaseEstado === 'A') {
        const resp: any = await apiSolicitud.sesionesAsistenciaSolicitarValidar(
          ControlClaseID,
          ClaCode
        )

        console.log(resp.data.detail)

        const rows = resp.data.detail

        if (rows > 0) {
          // actualiza sesion abierta solicitud
          try {
            const item = {
              classId: ControlClaseID,
              nrodia: CoclNrDay,
              classroomCode: ClassRoomCode,
              updateUser: null,
              classBeginning: FechahoursIni.replace('T', ' '),
              classFinish: FechahoursEnd.replace('T', ' '),
              observations: motivo,
            }

            const resp = await apiSolicitud.actualizaSesionAbiertaSolicitud(
              item
            )

            console.log(resp)
          } catch (error) {
            console.log(error)
          }

          // termina la sesion pa_TERMINA_SESION_SOLICITUD
          try {
            const resp = await apiSolicitud.endSesion(
              ControlClaseID,
              DUENO,
              '1'
            )

            console.log(resp)
          } catch (error) {
            console.log(error)
          }

          await enviarSolicitud(ControlClaseID, ClaCode)
          set(VALIDAR, '1')

          Router.push('/solicitud-de-marcacion')
        } else {
          // actualizaSesionAbierta_Solicitud
          console.log('NO PERMITE --- else row == 0')

          try {
            const item = {
              classId: ControlClaseID,
              nrodia: CoclNrDay,
              classroomCode: ClassRoomCode,
              updateUser: null,
              classBeginning: FechahoursIni.replace('T', ' '),
              classFinish: FechahoursEnd.replace('T', ' '),
              observations: motivo,
            }

            const resp = await apiSolicitud.actualizaSesionAbiertaSolicitud(
              item
            )
            console.log(resp)
          } catch (error) {
            console.log(error)
          }

          // if() permitir cerrar sesion sin asistencia estudiante
          // termina la sesion pa_TERMINA_SESION_SOLICITUD

          let PemitirCerrarSesionSinAsistenciaEstudiante

          try {
            const { data }: any = await apiAsistencia.getClaseDetalle(
              ClaCode,
              'CIERRE_SIN_ASIST'
            )

            PemitirCerrarSesionSinAsistenciaEstudiante = data
          } catch (error) {
            console.log(error)
          }

          if (parseInt(PemitirCerrarSesionSinAsistenciaEstudiante) === 1) {
            try {
              const resp = await apiSolicitud.endSesion(
                ControlClaseID,
                DUENO,
                '1'
              )
              console.log(resp)
            } catch (error) {
              console.log(error)
            }

            // enviaSolicitud()

            set(VALIDAR, '1')

            Router.push('/solicitud-de-marcacion')
          } else {
            Router.push('/solicitud-de-marcacion/TomarAsistencia')
          }
        }
      }
    } else {
      let PemitirCerrarSesionSinAsistenciaEstudiante

      try {
        const { data }: any = await apiAsistencia.getClaseDetalle(
          ClaCode,
          'CIERRE_SIN_ASIST'
        )

        PemitirCerrarSesionSinAsistenciaEstudiante = data
      } catch (error) {
        console.log(error)
      }

      console.log(
        '---PemitirCerrarSesionSinAsistenciaEstudiante---',
        PemitirCerrarSesionSinAsistenciaEstudiante
      )

      if (parseInt(PemitirCerrarSesionSinAsistenciaEstudiante) === 1) {
        // TODO: getInsertaSesion_Solicitud

        try {
          const item = {
            classCode: ClaCode,
            traCode: teacherId,
            nrodia: CoclNrDay,
            classroomCode: ClassRoomCode,
            teacherType: CoclTypeTeacher,
            date: moment(HoursDate, 'DD/MM/YYYY').format('YYYY-MM-DD'),
            typeClass: 'S',
            createUser: DUENO,
            observations: motivo,
            starCclass: FechahoursIni.replace('T', ' '),
            endClass: FechahoursEnd.replace('T', ' '),
            ip,
          }

          console.log('----iteeeeem-insertar------------', item)

          const resp = await apiSolicitud.insertar(item)

          console.log('---- response de insertar ----', resp)

          set(CONTROL_CLASE_ID, resp)

          console.log(resp)
        } catch (error) {
          console.log(error)
        }

        const ControlClaseID: string = get(CONTROL_CLASE_ID)

        btnFin(ControlClaseID, ClaCode)
      } else {
        try {
          const item = {
            classCode: ClaCode,
            traCode: teacherId,
            nrodia: CoclNrDay,
            classroomCode: ClassRoomCode,
            teacherType: CoclTypeTeacher,
            date: moment(HoursDate, 'DD/MM/YYYY').format('YYYY-MM-DD'),
            typeClass: 'S',
            createUser: DUENO,
            observations: motivo,
            starCclass: FechahoursIni.replace('T', ' '),
            endClass: FechahoursEnd.replace('T', ' '),
            ip,
          }

          console.log('---- iteeem insert  ----', item)

          const resp = await apiSolicitud.insertar(item)

          set(CONTROL_CLASE_ID, resp.data)

          console.log(resp)
        } catch (error) {
          console.log(error)
        }

        Router.push('/asistencia')
      }
    }

    setloading(false)
  }

  const handleMotivo = (e: any) => {
    setMotivo(e.target.value)
  }

  return (
    <div className={styles.contenido}>
      <Loader loading={Loading} />
      <div className={styles.content}>
        <div className={styles.titulo}>
          <Label classname="text-warning h5 mt-3 mb-3">
            Registro de asistencia
          </Label>
        </div>
        <hr />

        <div className={styles.alertaContent}>
          <Alerta
            classname="w-100"
            variant="info"
          >
            <p className="mb-0">
              <b>Nota:</b> &nbsp;Por defecto todos los estudiantes no registran
              ningún estado de asistencia (Asistencia = N). Sólo cuando haya
              registrado la asistencia de los estudiantes se procederá a enviar
              la solicitud.
            </p>
          </Alerta>
        </div>

        <hr />

        <div className={styles.tablaRA}>
          <Tabla classname="tablaRA">
            <Thead>
              <th
                scope="col"
                colSpan={2}
              >
                DATOS DE LA SESIÓN DE CLASE
              </th>
            </Thead>
            <Tbody>
              {datos.map((item: any, index: number) => (
                <Fragment key={index}>
                  <tr>
                    <td className="w-50">Sede</td>
                    <td>{item.SedCode}</td>
                  </tr>
                  <tr>
                    <td>Nombre del curso</td>
                    <td>{item.CurName}</td>
                  </tr>
                  <tr>
                    <td>Clase</td>
                    <td>{item.ClaCode}</td>
                  </tr>
                  <tr>
                    <td>Dueño de la sesión de clase</td>
                    <td>{teacherId}</td>
                  </tr>
                  <tr>
                    <td>Tipo de docente</td>
                    <td>{item.CoclTypeTeacher}</td>
                  </tr>
                  <tr>
                    <td>Tope de faltas</td>
                    <td> </td>
                  </tr>
                  <tr>
                    <td>Fecha y hora de inicio</td>
                    <td>{item.hoursIni}</td>
                  </tr>
                  <tr>
                    <td>Fecha y hora de término</td>
                    <td>{item.hoursEnd}</td>
                  </tr>
                  <tr>
                    <td>Tipo de sesión</td>
                    <td> </td>
                  </tr>
                  <tr>
                    <td>Motivo</td>
                    <td>
                      <Select
                        id="motivo"
                        classname="w-75"
                        onChange={(e: any) => handleMotivo(e)}
                        defaultValue={
                          noClose === 1
                            ? 'Regularizar marcación de clase abierta'
                            : ''
                        }
                        disabled={noClose === 1}
                      >
                        <option value="">Seleccione un motivo</option>
                        <option value="Bloqueo de cuenta de usuario">
                          Bloqueo de cuenta de usuario
                        </option>
                        <option value="Docente nuevo, no contaba con accesos">
                          Docente nuevo, no contaba con accesos
                        </option>
                        <option value="Problemas técnicos del equipo">
                          Problemas técnicos del equipo
                        </option>
                        <option value="Clases fuera de campo">
                          Clases fuera de campo
                        </option>
                        <option value="No estaba programada la clase en el sistema">
                          No estaba programada la clase en el sistema
                        </option>
                        <option value="No había fluido eléctrico">
                          No había fluido eléctrico
                        </option>
                        <option value="Problemas de conectividad">
                          Problemas de conectividad
                        </option>
                        <option value="Regularizar marcación de clase abierta">
                          Regularizar marcación de clase abierta
                        </option>
                      </Select>
                    </td>
                  </tr>
                </Fragment>
              ))}
            </Tbody>
          </Tabla>
        </div>

        <div className={styles.botones}>
          <div>
            {showBtns.btnActivar && (
              <Button
                type="button"
                classname="mx-2"
                variant="primary"
                onclick={handleTomarAsistencia}
                disabled={disabledBtns.btnActivar}
              >
                {btnTomarAsistencia ? 'Tomar asistencia' : 'Enviar Solicitud'}
              </Button>
            )}

            {showBtns.btnFinSesion && (
              <Button
                type="button"
                classname="mx-2"
                variant="primary"
                onclick={handleTomarAsistencia}
                disabled={disabledBtns.btnFinSesion}
              >
                Fin Sesion
              </Button>
            )}

            {showBtns.btnRegresar && (
              <Button
                type="button"
                classname="mx-2"
                variant="secondary"
                onclick={() => {}}
                disabled={disabledBtns.btnRegresar}
              >
                Regresar
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

AsistenciaSolicitud.title = 'Registro de asistencia - Portal Docentes'

export default AsistenciaSolicitud

export async function getServerSideProps({ req }: any) {
  console.log(req.headers)
  const ip = req.headers['x-real-ip'] || req.connection.remoteAddress

  return {
    props: {
      ip,
    },
  }
}
