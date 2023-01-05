import { useEffect, useState } from 'react'
import styles from '../../components/templates/asistencia/registrar/RegistroAsistencia.module.scss'
import Label from '../../components/UI/atoms/label/Label'
import Alerta from '../../components/UI/atoms/alert/Alerts'
import Button from '../../components/UI/atoms/button/Button'
import Tabla from '../../components/UI/organisms/table/Tabla'
import Thead from '../../components/UI/molecules/table/thead/Thead'
import Tbody from '../../components/UI/molecules/table/tbody/Tbody'
import { get, remove, set } from 'local-storage'
import Swal from 'sweetalert2'
import Loader from '../../components/UI/atoms/loader/Loader'
import { apiAsistencia, apiSeccionOpen } from './../api'
import Router from 'next/router'
import moment from 'moment'
import 'moment/locale/es'
import { CierreSesionAsistencia } from '../../helpers/asistenciaHelpers'

import {
  ASISTENCIA,
  DATA_RESUMEN_SELECTED,
  DUENO_SESSION,
  TIPO_ASISTENCIA,
  VERASI,
  CONTROL_CLASE_ID,
  TIPO_DOCENTE,
  RECUPERATION_ID,
  REGASI,
  TIPO_CLASE,
  DESABLEDSESSIONACLOSE,
  TITLE_EMERG,
} from '../../consts/storageConst'
import getAlert from '../../hooks/jspdf/alertify'

type initialStateSummary = {
  Asistentes: number
  Faltantes: number
  Habilitados: number
  Matriculados: number
}

const Asistencia = () => {
  const [summary, setSummaryTeacher] = useState<initialStateSummary>({
    Asistentes: 0,
    Faltantes: 0,
    Habilitados: 0,
    Matriculados: 0,
  })

  const [btnDisable, setbtnDisable] = useState({
    btnVerAssistencia: false,
    btnregresar: false,
    btnTakeAsistence: false,
    btnCloseSesion: false,
  })

  const [Loading, setloading] = useState(false)

  const formatDate = (fecha: string) => {
    if (fecha !== undefined || fecha === null) {
      const dateSplit = fecha.split('T')
      const date = `${dateSplit[0]} ${dateSplit[1]}`
      const dateConvert = moment(date).format('DD/MM/YYYY HH:mm')
      return dateConvert
    } else {
      return fecha
    }
  }

  const initialStateDetalle = {
    AbsenceLimit: 0,
    ConClassCode: '',
    ConClasFinal: '',
    ConClassId: 0,
    ConClassInitial: '',
    ConClassTeacherType: '',
    ConClassTypeClass: '',
    CourseCode: '',
    CourseName: '',
    Owner: '',
    SedCode: '',
  }

  const [detail, setDetail] = useState(initialStateDetalle)

  const DUENO: any = get(DUENO_SESSION)
  const dataClassSelected: any = JSON.parse(get(DATA_RESUMEN_SELECTED))
  const ControlClaseID: any =
    get(CONTROL_CLASE_ID) && get(CONTROL_CLASE_ID) !== ''
      ? get(CONTROL_CLASE_ID)
      : 0
  const iAsistencia: any = get(ASISTENCIA)
  const TipoDoc = get(TIPO_DOCENTE)
  const recuperationId: any =
    get(RECUPERATION_ID) && get(RECUPERATION_ID) !== ''
      ? get(RECUPERATION_ID)
      : 0

  const SessioCloseDesabled: any =
    get(DESABLEDSESSIONACLOSE) !== '' ? get(DESABLEDSESSIONACLOSE) : false

  const consultaApi = async () => {
    try {
      const ListAttendanceSummarySession: any =
        await apiAsistencia.listAttendanceSessionSummary(ControlClaseID)
      setSummaryTeacher({
        Asistentes: ListAttendanceSummarySession.Asistentes,
        Faltantes: ListAttendanceSummarySession.Faltantes,
        Habilitados: ListAttendanceSummarySession.Habilitados,
        Matriculados: ListAttendanceSummarySession.Matriculados,
      })
    } catch (error) {
      console.log(error)
    }
  }

  const permitirCerrarSesionSinAsistencia = async (ClaCode: string) => {
    try {
      const { data }: any = await apiAsistencia.getClaseDetalle(
        ClaCode,
        'CIERRE_SIN_ASIST'
      )

      return data
    } catch (error) {
      console.log(error)
    }
  }

  const getDetallesResumen = async (
    classControlId: string,
    recoveryId: string
  ) => {
    try {
      const resp = await apiSeccionOpen.getDetallesResumen(
        classControlId,
        recoveryId
      )
      return resp.detail[0]
    } catch (error) {
      console.log(error)
    }
  }

  const handleSelectedChange = () => {
    removeStorage()
    Router.back()
  }

  const PreLoad = async () => {
    setloading(true)
    const detail: any = await getDetallesResumen(ControlClaseID, recuperationId)
    if (detail === undefined) {
      // Swal.fire({
      //   title: 'Portal de Docentes',
      //   text: `Ocurrio un error. No se encuentran los detalles de la clase.`,
      //   icon: 'warning',
      //   showCancelButton: false,
      //   confirmButtonColor: '#3085d6',
      //   confirmButtonText: 'OK',
      // })
      const result = getAlert({
        title: TITLE_EMERG,
        text: `Ocurrio un error. No se encuentran los detalles de la clase.`,
        confirmButtonText: `Ok`,
      })
      setloading(false)
      result.then((response) => {
        Router.back()
      })
      return
    }

    detail.ConClassInitial = formatDate(detail.ConClassInitial)
    detail.ConClasFinal = formatDate(detail.ConClasFinal)

    // dataClassSelected.ControlId =
    //   dataClassSelected.ControlId === '' ? 0 : dataClassSelected.ControlId

    if (parseInt(ControlClaseID) === 0) {
      return Router.push('/sesiones-anteriores')
    }

    if (parseInt(iAsistencia) === 1) {
      if (TipoDoc === 'A') {
        const Owner = detail.Owner
        if (Owner !== DUENO) {
          ViewMessage(1)
          setbtnDisable({
            ...btnDisable,
            btnregresar: false,
            btnTakeAsistence: true,
            btnCloseSesion: true,
          })
        } else {
          setbtnDisable({
            ...btnDisable,
            btnregresar: false,
            btnTakeAsistence: false,
            btnCloseSesion: false,
          })
        }

        ViewMessage(0)
        setbtnDisable({
          ...btnDisable,
          btnTakeAsistence: true,
          btnCloseSesion: true,
        })
      } else {
        setbtnDisable({
          ...btnDisable,
          btnTakeAsistence: false,
          btnCloseSesion: false,
        })
      }
    } else {
      ViewMessage(2)
      setbtnDisable({
        ...btnDisable,
        btnTakeAsistence: true,
        btnCloseSesion: true,
      })
    }
    const permitir: any = await permitirCerrarSesionSinAsistencia(
      detail.ConClassCode
    )
    console.log('Permitir', permitir)

    if (permitir === '1') {
      setbtnDisable({
        ...btnDisable,
        btnTakeAsistence: true,
      })
    }

    consultaApi()

    set(TIPO_CLASE, detail.ConClassTypeClass)

    setDetail(detail)
    setloading(false)
  }

  useEffect(() => {
    console.log(dataClassSelected)
    PreLoad()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const ViewMessage = (StateMessage: any) => {
    switch (StateMessage) {
      case 0:
        return Swal.fire({
          title: 'Portal de Docentes',
          text: `Los docentes auxiliares no pueden registrar asistencia de alumnos. Ud. solo podrá marcar al término de su sesión de clase.`,
          icon: 'warning',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK',
        })
      case 1:
        return Swal.fire({
          title: 'Portal de Docentes',
          text: `Las sesiones de clase solo pueden ser modificadas por el docente ${DUENO}`,
          icon: 'warning',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK',
        })
      case 2:
        return Swal.fire({
          title: 'Portal de Docentes',
          text: `La sesión de clase ha finalizado.`,
          icon: 'warning',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK',
        })
      default:
        break
    }
  }

  const seeAttendance = () => {
    set(CONTROL_CLASE_ID, ControlClaseID)
    set(TIPO_ASISTENCIA, VERASI)
    removeStorage()
    Router.push('/asistencia')
  }

  const takeAssistance = () => {
    setloading(true)
    set(CONTROL_CLASE_ID, ControlClaseID)
    set(TIPO_ASISTENCIA, REGASI)
    Router.push('/asistencia')
  }

  const CierreSesion = async () => {
    setloading(true)
    console.log('___CIERREEE_SESION___')
    set(TIPO_CLASE, detail.ConClassTypeClass)

    const resp = await CierreSesionAsistencia()

    if (resp) {
      Swal.fire({
        title: 'Portal de Docentes',
        text: `Se cerro la sesión con exito.`,
        icon: 'warning',
        showCancelButton: false,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'OK',
      })
      setloading(false)
      window.history.go(-1)
    } else {
      setloading(false)
    }
  }

  const removeStorage = () => {
    remove(DATA_RESUMEN_SELECTED)
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
              <b>Nota:</b> &nbsp;Por defecto todos los alumnos no registran
              ningún estado de asistencia <b>(Asistencia = N)</b>. En listados
              grandes, ir grabando cada cierto tiempo.
            </p>
          </Alerta>
        </div>
        <div className={styles.btnTextContent}>
          <div>
            <Button
              type="button"
              classname="mb-2"
              variant="secondary"
              onclick={handleSelectedChange}
              disabled={btnDisable.btnregresar}
            >
              Regresar
            </Button>
          </div>
          <div>
            <strong>
              <span>Resumen de asistencia</span>
            </strong>
          </div>
          <br />
          <div>
            <small>
              <strong>
                <span
                  className={styles.spacingAsisten}
                >{`Matriculados : ${summary.Matriculados}`}</span>
                <span
                  className={styles.spacingAsisten}
                >{`Habilitados : ${summary.Habilitados}`}</span>
                <span
                  className={styles.spacingAsisten}
                >{`Asistentes : ${summary.Asistentes} `}</span>
                <span
                  className={styles.spacingAsisten}
                >{`Faltas : ${summary.Faltantes} `}</span>
              </strong>
            </small>
          </div>
        </div>
        <hr />
        <div
          className={styles.tablaRA}
          style={{ textAlign: 'left' }}
        >
          <Tabla classname={styles.tablaRA}>
            <Thead>
              <th
                scope="col"
                colSpan={2}
              >
                DATOS DE LA SESIÓN DE CLASE
              </th>
            </Thead>
            <Tbody>
              <tr>
                <td style={{ fontWeight: 'bold' }}>Sede</td>
                <td>{detail.SedCode}</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold' }}>Código de curso</td>
                <td>{detail.CourseCode}</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold' }}>Nombre del curso</td>
                <td>{detail.CourseName}</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold' }}>Clase</td>
                <td>{detail.ConClassCode}</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold' }}>
                  Dueño de la sesión de clase
                </td>
                <td>{detail.Owner}</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold' }}>Tipo de docente</td>
                <td>{detail.ConClassTeacherType}</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold' }}>Tope faltas</td>
                <td>{detail.AbsenceLimit}</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold' }}>Fecha y hora de inicio</td>
                <td>{detail.ConClassInitial}</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold' }}>Fecha y hora de término</td>
                <td>{detail.ConClasFinal}</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold' }}>Tipo de sesión</td>
                <td>{detail.ConClassTypeClass}</td>
              </tr>
            </Tbody>
          </Tabla>
        </div>
        <div className={styles.botones}>
          <div>
            <Button
              type="button"
              classname=""
              variant="primary"
              disabled={btnDisable.btnTakeAsistence}
              onclick={() => takeAssistance()}
            >
              Tomar asistencia
            </Button>
          </div>
          <div>
            <Button
              type="button"
              classname=""
              variant="secondary"
              onclick={CierreSesion}
              disabled={btnDisable.btnCloseSesion || SessioCloseDesabled}
            >
              Cerrar sesión de clase
            </Button>
          </div>
          <div>
            <Button
              type="button"
              classname=""
              variant="secondary"
              onclick={seeAttendance}
              disabled={btnDisable.btnVerAssistencia}
            >
              Ver Asistencia
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

Asistencia.title = 'Asistencia - Portal Docentes'

export default Asistencia
