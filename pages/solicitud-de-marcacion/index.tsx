import { useState, useEffect } from 'react'
import Router from 'next/router'
import Anchor from '../../components/UI/atoms/anchor/Anchor'
import Label from '../../components/UI/atoms/label/Label'
import SolMarcaButtons from '../../components/UI/molecules/solMarcaButtons/SolMarcaButtons'
import styles from '../../components/templates/solicitudMarcacion/solMarcacion.module.scss'
import Loader from '../../components/UI/atoms/loader/Loader'
import moment from 'moment'
import 'moment/locale/es'
import dynamic from 'next/dynamic'
import { get, set } from 'local-storage'
import { apiSolicitud } from './../../pages/api'
// import Swal from 'sweetalert2'

import {
  TEACHERCODE,
  CLASS_SELECTED_SOL_MARCACION,
  LIST_SESION_SOL,
  DUENO_SESSION,
  ASISTENCIA,
  CONTROL_CLASE_ESTADO,
  CONTROL_CLASE_ID,
  TIPO_DOCENTE,
  RECUPERACION_ID,
  CLASE_ID,
  CONTROL_CLASE_AULA,
  CONTROL_CLASE_NRODIA,
  CONTROL_CLASE_FECHA,
  CONTROL_CLASE_FECHAHORA_INICIO,
  CONTROL_CLASE_FECHAHORA_FIN,
  SET_TEACHERCODE,
  NO_CLOSE,
} from './../../consts/storageConst'

const TableDinamic = dynamic(
  () => import('../../components/UI/molecules/tableDinamic/Table'),
  {
    ssr: false,
  }
)

const Alerta = dynamic(() => import('../../components/UI/atoms/alert/Alerts'), {
  ssr: false,
})

const SolicitudMarcacion = () => {
  moment.locale('es')
  const [datosNoInit, setDatosNoInit] = useState([])
  const [datosNoClose, setDatosNoClose] = useState([])
  const [datosPendientes, setDatosPendientes] = useState([])
  const [Loading, setloading] = useState(false)
  const [opcion, setOpcion] = useState<number>(1)

  const handleClickRow = (e: any, item: any, tipo: string) => {
    e.preventDefault()

    let sFecha, sClase, sAula, sNroDia, sTipoDoc

    item.teacherCode = get(TEACHERCODE)

    item.teacherUser = get(DUENO_SESSION)

    switch (tipo) {
      case 'noinit':
        sClase = item.ClaCode
        sAula = item.ClassRoomCode
        sNroDia = item.CoclNrDay
        sTipoDoc = item.CoclTypeTeacher
        sFecha = item.HoursDate

        set(CONTROL_CLASE_ESTADO, '')
        set(CONTROL_CLASE_FECHAHORA_INICIO, item.FechahoursIni)
        set(CONTROL_CLASE_FECHAHORA_FIN, item.FechahoursEnd)

        break
      case 'noClose':
        sClase = item.ClaCode
        sAula = item.ClassRoomCode
        sNroDia = item.CoclNrDay
        sTipoDoc = item.CoclTypeTeacher
        sFecha = item.HoursDate
        set(CONTROL_CLASE_ESTADO, 'A')
        set(CONTROL_CLASE_FECHAHORA_INICIO, item.FechahoursIni)
        set(CONTROL_CLASE_FECHAHORA_FIN, item.FechahoursEnd)
        set(NO_CLOSE, 1)
        break
      /*       case 'pending':
        break */
      default:
        sClase = ''
        sAula = ''
        sNroDia = ''
        sTipoDoc = ''
        sFecha = ''
        break
    }
    set(TIPO_DOCENTE, sTipoDoc)
    set(CONTROL_CLASE_NRODIA, sNroDia)
    set(RECUPERACION_ID, -1)
    set(CLASE_ID, sClase)
    set(CONTROL_CLASE_AULA, sAula)
    set(CONTROL_CLASE_FECHA, sFecha)
    set(ASISTENCIA, 1)
    set(CLASS_SELECTED_SOL_MARCACION, JSON.stringify(item))

    Router.push('/solicitud-de-marcacion/AsistenciaSolicitud')
  }

  const formatedData = (obj: any, setstate: any, tipo: string) => {
    console.log(obj)

    let items = obj.map((item: any) => {
      const dateSplit = item.hoursIni.split('T')
      const date = `${dateSplit[0]} ${dateSplit[1]}`
      const hora = moment(date).format('HH:mm')
      item.hoursIni = hora
      return item
    })

    items = obj.map((item: any) => {
      const dateSplit = item.hoursEnd.split('T')
      const date = `${dateSplit[0]} ${dateSplit[1]}`
      const hora = moment(date).format('HH:mm')
      item.hoursEnd = hora
      return item
    })

    const rows = items.map((item: any) => ({
      ...item,
      select: (
        <Anchor
          href=""
          onClick={(e) => handleClickRow(e, item, tipo)}
          classname="text-decoration-none text-center w-100 d-block"
        >
          Seleccionar
        </Anchor>
      ),
    }))

    setstate(rows)
  }

  useEffect(() => {
    setloading(true)

    set(TEACHERCODE, SET_TEACHERCODE)
    set(DUENO_SESSION, 'RVI')

    const teacherCode = SET_TEACHERCODE

    set(TEACHERCODE, teacherCode)
    set(CONTROL_CLASE_ID, '')

    const consultaApi = async () => {
      try {
        const respApi: any = await apiSolicitud.listSesionesSolicitud(
          teacherCode
        )

        const { noinit, noClose, pending } = respApi.data

        set(LIST_SESION_SOL, JSON.stringify(respApi.data))

        console.log('NOINIT', noinit)

        formatedData(noinit, setDatosNoInit, 'noinit')
        formatedData(noClose, setDatosNoClose, 'noClose')
        formatedData(pending, setDatosPendientes, 'pending')

        setloading(false)
      } catch (error) {
        console.log(error)
        setloading(false)
      }
    }
    consultaApi()
  }, [])

  const COLUMNS_SESIONES = [
    { label: 'Seleccionar clase', field: 'select', sort: 'asc' },
    { label: 'Sede', field: 'SedCode', sort: 'asc' },
    { label: 'Semestre', field: 'SemCode', sort: 'asc' },
    { label: 'Clase', field: 'ClaCode', sort: 'asc' },
    { label: 'Aula', field: 'ClassRoomCode', sort: 'asc' },
    { label: 'Carrera', field: 'CarName', sort: 'asc' },
    { label: 'Curso', field: 'CurName', sort: 'asc' },
    { label: 'Fecha', field: 'HoursDate', sort: 'asc' },
    { label: 'Nro Día', field: 'CoclNrDay', sort: 'asc' },
    { label: 'Día', field: 'HourDayWeek', sort: 'asc' },
    { label: 'Hora de Inicio', field: 'hoursIni', sort: 'asc' },
    { label: 'Hora Final', field: 'hoursEnd', sort: 'asc' },
    { label: 'Tipo Docente', field: 'CoclTypeTeacher', sort: 'asc' },
  ]

  const COLUMNS_PENDIENTES = [
    { label: 'Seleccionar clase', field: 'select', sort: 'asc' },
    { label: 'Sede', field: 'SedCode', sort: 'asc' },
    { label: 'Semestre', field: 'SemCode', sort: 'asc' },
    { label: 'Clase', field: 'ClaCode', sort: 'asc' },
    { label: 'Aula', field: 'ClassRoomCode', sort: 'asc' },
    { label: 'Carrera', field: 'CarName', sort: 'asc' },
    { label: 'Curso', field: 'CurName', sort: 'asc' },
    { label: 'Fecha', field: 'HoursDate', sort: 'asc' },
    { label: 'Nro Día', field: 'CoclNrDay', sort: 'asc' },
    { label: 'Día', field: 'HourDayWeek', sort: 'asc' },
    { label: 'Hora de Inicio', field: 'hoursIni', sort: 'asc' },
    { label: 'Hora Final', field: 'hoursEnd', sort: 'asc' },
    { label: 'Tipo Docente', field: 'CoclTypeTeacher', sort: 'asc' },
  ]

  return (
    <div className={styles.contenido}>
      <Loader loading={Loading} />
      <div className={styles.content}>
        <div className={styles.titulo}>
          <Label classname="text-warning h5 mt-3 mb-3">
            Solicitud de Marcación
          </Label>
        </div>
        <hr />

        <div className={styles.alertaContent}>
          <Alerta
            classname="w-100"
            variant="info"
          >
            <div className="mb-0">
              <b>Nota:</b>
              <br />
              <ul>
                <li>
                  Usted sólo podrá registrar una solicitud de marcación para
                  aquellas sesiones de clase que{' '}
                  <b>no pudo iniciar y/o cerrar en los últimos 7 días.</b>
                </li>
                <li>
                  Una vez registrada la solicitud de marcación, esta se enviará
                  a los Coordinadores y Directores de carrera para su{' '}
                  <b>aprobación.</b>
                </li>
                <li>
                  Usted podrá hacer seguimiento a las solicitudes de marcación
                  enviadas, en la opción <b>Estado de Solicitudes.</b>
                </li>
                <li>
                  Usted podrá visualizar las sesiones de clase aprobadas en la
                  sección{' '}
                  <b>
                    <Anchor
                      href="/"
                      classname="text-info text-decoration-none"
                    >
                      Sesiones Anteriores.
                    </Anchor>
                  </b>
                </li>
              </ul>
            </div>
          </Alerta>
        </div>

        <div className={styles.rowButtons}>
          <SolMarcaButtons setOpcion={setOpcion} />
        </div>

        <hr />

        <div className={styles.tablaCenter}>
          {opcion === 1 && (
            <TableDinamic
              columns={COLUMNS_SESIONES}
              listData={datosNoInit}
            />
          )}
          {opcion === 2 && (
            <TableDinamic
              columns={COLUMNS_SESIONES}
              listData={datosNoClose}
            />
          )}

          {opcion === 3 && (
            <TableDinamic
              columns={COLUMNS_PENDIENTES}
              listData={datosPendientes}
            />
          )}
        </div>
      </div>
    </div>
  )
}

SolicitudMarcacion.title = 'Solicitud de Marcacion'

export default SolicitudMarcacion
