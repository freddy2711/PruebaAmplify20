import Anchor from '../../components/UI/atoms/anchor/Anchor'
import Label from '../../components/UI/atoms/label/Label'
import styles from '../../components/templates/sesiones/anteriores/Anteriores.module.scss'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import Loader from '../../components/UI/atoms/loader/Loader'
import Swal from 'sweetalert2'
import Button from '../../components/UI/atoms/button/Button'
import moment from 'moment'
import Select from '../../components/UI/atoms/select/Select'
import { remove, set, get } from 'local-storage'
import {
  ASISTENCIA,
  CONTROL_CLASE_ID,
  DESABLEDSESSIONACLOSE,
  LST_COURSES_TEACHER,
  RECUPERACION_ID,
  SEMESTERID,
  TIPO_DOCENTE,
  USER_SESSION,
} from '../../consts/storageConst'
import { apiPreviousSessions } from './../api'
import { catchingErrorFront } from '../../helpers/helpers'

const Alerta = dynamic(() => import('../../components/UI/atoms/alert/Alerts'), {
  ssr: false,
})

const TableDinamic = dynamic(
  () => import('../../components/UI/molecules/tableDinamic/Table'),
  {
    ssr: false,
  }
)

type Selected = {
  ClaCodigo: string
  CurNombre: string
}

type PeriodPayDate = {
  dateIni: string
  dateEnd: string
}

type CoursesBySelected = {
  TipoDoc: string
}

const Index = () => {
  const [dataListCourses, setDataListCourses] = useState([])
  const [dataListSessions, setListSessions] = useState([])
  const [dataPeriodPayment, setdataPeriodPayment] = useState([])
  const [dataSelected, setDataSelected] = useState<Selected>({
    ClaCodigo: '',
    CurNombre: '',
  })
  const [PeriodDate, setPeriodDate] = useState<PeriodPayDate>({
    dateIni: '',
    dateEnd: '',
  })
  const [Loading, setloading] = useState(false)
  const [ViewSessions, setViewSessions] = useState(false)
  const [CoursesByTeacherSelected, setCoursesByTeacherSelected] =
    useState<CoursesBySelected>({ TipoDoc: '' })
  const UserID: any = get(USER_SESSION)

  const COLUMNS_COURSES_TEACHER = [
    { label: 'Seleccionar clase', field: 'select', sort: 'asc' },
    { label: 'Semestre', field: 'SemCodigo', sort: 'asc' },
    { label: 'Sede', field: 'SedCodigo', sort: 'asc' },
    { label: 'Clase', field: 'ClaCodigo', sort: 'asc' },
    { label: 'Tipo Doc.', field: 'TipoDoc', sort: 'asc' },
    { label: 'Cód. curso', field: 'CurCodigo', sort: 'asc' },
    { label: 'Nombre del curso', field: 'CurNombre', sort: 'asc' },
    { label: 'Carrera', field: 'CarNombre', sort: 'asc' },
  ]

  const COLUMNS_SESIONS_CLASS = [
    { label: 'Asistencias', field: 'select', sort: 'asc' },
    { label: 'Dueño', field: 'Docente', sort: 'asc' },
    { label: 'Fecha', field: 'ControlFecha', sort: 'asc' },
    { label: 'Tipo de sesión', field: 'ControlTClase', sort: 'asc' },
    { label: 'Fecha y hora de inicio', field: 'ControlInicio', sort: 'asc' },
    { label: 'Fecha y hora de término', field: 'ControlTermino', sort: 'asc' },
    { label: 'Horas Contabilizadas', field: 'MinE', sort: 'asc' },
    { label: 'Cierre de sesión', field: 'TipoCierre', sort: 'asc' },
    { label: 'Estado', field: 'ControlEstate', sort: 'asc' },
  ]

  // Colums

  const consultaApi = async () => {
    const result: any = await apiPreviousSessions.listCoursesByTeacher(UserID)
    formatedDataCoursesByTeacher(result, setDataListCourses)
    return result
  }

  const GetPeriodPayment = async () => {
    const obj = {
      action: 'get_periodopago',
      idPeriodPay: '0',
    }
    const result: any = await apiPreviousSessions.listPeriodPayment(
      obj.action,
      obj.idPeriodPay
    )
    setdataPeriodPayment(result)
    return result
  }

  const GetperiodPayDateApi = async () => {
    const result: any = await apiPreviousSessions.listPeriodPayDate()
    setPeriodDate({ dateIni: result.dateIni, dateEnd: result.dateEnd })
    return result
  }

  const GetSessionsApi = async (
    classCode: any,
    accion: any,
    paymentPeriodId: any,
    StateMessage: any
  ) => {
    setloading(true)
    try {
      const result: any = await apiPreviousSessions.listSessionsByClass(
        classCode,
        accion,
        paymentPeriodId
      )
      PreviousSessionValidator(result, classCode, StateMessage)
    } catch (error: any) {
      catchingErrorFront(error.message)
      setloading(false)
    }

    setloading(false)
  }

  // Apis

  const formatedDataCoursesByTeacher = (obj: any, setstate: any) => {
    const rows = obj.map((item: any, index: number) => ({
      ...item,
      select: (
        <Anchor
          href=""
          onClick={(e) => handleClickRowCoursesByTeacher(e, item)}
          classname="text-decoration-none text-center w-100 d-block"
        >
          seleccionar
        </Anchor>
      ),
    }))

    setstate(rows)
  }

  const formatedDataSessionsByClass = (obj: any, setstate: any) => {
    const items = obj.map((item: any) => {
      const ControlFecha = new Date(item.ControlFecha)
      const ControlInicio = new Date(item.ControlInicio)
      const ControlTermino = new Date(item.ControlTermino)
      item.ControlFecha =
        item.ControlFecha === ''
          ? ''
          : moment(ControlFecha).format('DD/MM/YYYY')
      item.ControlInicio =
        item.ControlInicio === ''
          ? ''
          : moment(ControlInicio).format('DD/MM/YYYY HH:mm:ss')
      item.ControlTermino =
        item.ControlTermino === ''
          ? ''
          : moment(ControlTermino).format('DD/MM/YYYY HH:mm:ss')
      return item
    })

    const rows = items.map((item: any) => ({
      ...item,
      select: (
        <Anchor
          href=""
          onClick={(e) => handleClickRowSessionsByClass(e, item)}
          classname="text-decoration-none text-center w-100 d-block"
        >
          Ver asistencias
        </Anchor>
      ),
    }))
    setstate(rows)
  }

  // Formater

  const ValidateOpennedSession = async (lstData: any) => {
    setloading(true)
    const result: any = await apiPreviousSessions.OpennedSession(
      lstData.ControlId
    )
    if (result.Status) set(ASISTENCIA, 1)
    else set(ASISTENCIA, 0)
    set(CONTROL_CLASE_ID, lstData.ControlId)
    set(RECUPERACION_ID, 0)
    set(TIPO_DOCENTE, CoursesByTeacherSelected.TipoDoc)
    setloading(false)
    window.location.href = '/asistencia/resumen-asistencia'
  }

  // validate

  const PreviousSessionValidator = async (
    Rows: any,
    classCode: any,
    StateMessage: any
  ) => {
    if (Rows.length === 0) {
      ViewMessage(classCode, StateMessage)
      setListSessions([])
    } else {
      setViewSessions(true)
      formatedDataSessionsByClass(Rows, setListSessions)
    }
  }

  const PreviousView = async () => {
    setloading(true)
    remove(LST_COURSES_TEACHER)
    setViewSessions(false)
    await consultaApi()
    setloading(false)
  }

  const ViewMessage = (classCode: any, StateMessage: any) => {
    switch (StateMessage) {
      case 0:
        return Swal.fire({
          title: 'Portal de Docentes',
          text: `No existen sesiones anteriores para la clase ${classCode}.`,
          icon: 'warning',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK',
        })
      case 1:
        return Swal.fire({
          title: 'No hay datos',
          text: `No hay datos para la clase ${classCode}.`,
          icon: 'warning',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK',
        })
      case 2:
        return Swal.fire({
          title: 'Seleccione',
          text: `Seleccione una sesión de clase.`,
          icon: 'warning',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK',
        })
      default:
        break
    }
  }

  // funtions

  const handleClickRowCoursesByTeacher = (e: any, item: any) => {
    e.preventDefault()
    set(SEMESTERID, item.SemCodigo)
    set(DESABLEDSESSIONACLOSE, true)
    setCoursesByTeacherSelected({ TipoDoc: item.TipoDoc })
    GetSessionsApi(item.ClaCodigo, 'get_todasclases', null, 0)
    setDataSelected({ ClaCodigo: item.ClaCodigo, CurNombre: item.CurNombre })
  }

  const handleClickRowSessionsByClass = (e: any, item: any) => {
    e.preventDefault()
    item.ControlId = item.ControlId === '' ? 0 : item.ControlId
    if (parseInt(item.ControlId) === 0) ViewMessage(0, 2)
    else ValidateOpennedSession(item)
  }

  const handleSelectedChange = (e: any) => {
    if (e.target.value === '0') {
      GetSessionsApi(dataSelected.ClaCodigo, 'get_todasclases', -1, 2)
    } else {
      GetSessionsApi(dataSelected.ClaCodigo, 'get_fechapago', e.target.value, 1)
    }
  }

  // metodos

  useEffect(() => {
    const Load = async () => {
      setloading(true)
      try {
        await consultaApi()
        GetPeriodPayment()
        GetperiodPayDateApi()
      } catch (error: any) {
        catchingErrorFront(error.message)
        setloading(false)
      }

      setloading(false)
    }

    Load()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className={styles.contenido}>
      <Loader loading={Loading} />
      <div className={styles.content}>
        <div className={styles.titulo}>
          <Label classname="text-warning h5 mt-3 mb-3">
            Sesiones Anteriores
          </Label>
        </div>
        <hr />

        <div className={styles.alertaContent}>
          <Alerta
            classname="w-100"
            variant="info"
          >
            <p className="mb-0">
              <b>Nota:</b> &nbsp;
              {ViewSessions === false
                ? 'Seleccione una clase para ver sus sesiones programadas.'
                : 'Seleccione una sesión clase para ver sus integrantes.'}
            </p>
          </Alerta>
        </div>
        {ViewSessions === false ? (
          <>
            <hr />
            <div className={styles.tabla}>
              <TableDinamic
                columns={COLUMNS_COURSES_TEACHER}
                listData={dataListCourses}
              />
            </div>
            <div>
              <small>
                <strong>Tipo docente: (P)</strong> Principal /{' '}
                <strong>(S)</strong> Sustituto / <strong>(A)</strong> Auxiliar
              </small>
            </div>
          </>
        ) : (
          <>
            <div>
              <Button
                type="button"
                classname="mb-3"
                variant="secondary"
                onclick={PreviousView}
              >
                Regresar
              </Button>
            </div>

            <div className="row mb-3">
              <span className="col-sm-12 col-md-6 d-block d-md-inline">
                <strong>Sesión:</strong> CLASE {dataSelected.ClaCodigo} -{' '}
                {dataSelected.CurNombre}.
              </span>
              <span className="col-sm-12 col-md-6 d-block d-md-inline">
                <strong>Periodo de Pago:</strong> Del {PeriodDate.dateIni} al{' '}
                {PeriodDate.dateEnd}
              </span>
            </div>
            <div className="col-sm-12 col-md-2">
              <Select
                id="formato"
                classname="secondary"
                name="formato"
                onChange={handleSelectedChange}
              >
                <option value={0}>Todas mis sesiones</option>
                {dataPeriodPayment.map((x: any, r: any) => {
                  return (
                    <option
                      key={r + 1}
                      value={x?.idPeriodPay}
                    >
                      {x?.datePay}
                    </option>
                  )
                })}
              </Select>
            </div>
            <div className={styles.tabla}>
              <TableDinamic
                columns={COLUMNS_SESIONS_CLASS}
                listData={dataListSessions}
              />
            </div>
          </>
        )}
      </div>
    </div>
  )
}

Index.title = 'Sesiones Anteriores - Portal Docentes'
export default Index
