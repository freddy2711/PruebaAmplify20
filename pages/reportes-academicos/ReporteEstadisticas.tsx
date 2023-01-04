import { get, remove } from 'local-storage'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import styles from '../../components/templates/reportes/ReportesAcademicos/ReporteClase/ReporteClase.module.scss'
import Alerta from '../../components/UI/atoms/alert/Alerts'
import Label from '../../components/UI/atoms/label/Label'
import Loader from '../../components/UI/atoms/loader/Loader'
import ReportButtons from '../../components/UI/molecules/reports/AcademicReport/ReportButtons/reportButtons'
import {
  CLASEID_REPORTES,
  LST_SELECTED_COURSE,
  SET_DATA_DOCENTE,
  SET_IMG_BASE64,
  USER_SESSION,
} from '../../consts/storageConst'
import { catchingErrorFront } from '../../helpers/helpers'
import GeneratePdf from '../../hooks/react-pdf/DownloadPDF'
import { apiReportesAcademicos } from '../api'

const TableDinamic = dynamic(
  () => import('../../components/UI/molecules/tableDinamic/Table'),
  {
    ssr: false,
  }
)

type SelectedCourse = {
  CurCodigo: string
  CurNombre: string
  ClaCodigo: string
  CarNombre: string
  SedCodigo: string
  SemCodigo: string
  TipoDoc: string
  ClaseFull: string
  ClaTopeFaltas: number
  CarCodigo: string
  ClaTipo: string
  AplicaCompetencia: string
  ClaMetodoEducativo: string
}

const ReporteEstadisticas = () => {
  const [Loading, setloading] = useState(false)
  const [TeacherCoursesData, setTeacherCoursesData] = useState<SelectedCourse>({
    CurCodigo: '',
    CurNombre: '',
    ClaCodigo: '',
    CarNombre: '',
    SedCodigo: '',
    SemCodigo: '',
    TipoDoc: '',
    ClaseFull: '',
    ClaTopeFaltas: 0,
    CarCodigo: '',
    ClaTipo: '',
    AplicaCompetencia: '',
    ClaMetodoEducativo: '',
  })

  const [ClassStatisticsData, setClassStatisticsData] = useState<any>([])

  const lstCoursesTeacher: any = JSON.parse(get(LST_SELECTED_COURSE))
  const userId = get(USER_SESSION)
  const nameXLS = `RptClases_${TeacherCoursesData.ClaCodigo}.csv`
  const DocenteSection: any = get(SET_DATA_DOCENTE)
  const imgBase64: any = get(SET_IMG_BASE64)

  const COLUMNS_CLASSSTATISTICS = [
    { label: 'Sede', field: 'Sedode', sort: 'asc' },
    { label: 'Clase', field: 'ClaCode', sort: 'asc' },
    { label: 'Curso', field: 'CurCode', sort: 'asc' },
    { label: 'Carrera', field: 'CarName', sort: 'asc' },
    { label: 'Matric.', field: 'Enrolled', sort: 'asc' },
    { label: 'Habil.', field: 'Enabled', sort: 'asc' },
    { label: '% Habil.', field: 'PorcEnabled', sort: 'asc' },
    { label: 'Inhab.', field: 'Disabled', sort: 'asc' },
    { label: '% Inhab.', field: 'PorcDisabled', sort: 'asc' },
    { label: 'Ret.', field: 'Retired', sort: 'asc' },
    { label: '% Ret.', field: 'PorcRetired', sort: 'asc' },
    { label: 'Nota Mín.', field: 'MinAverage', sort: 'asc' },
    { label: 'Nota Máx.', field: 'MaxAverage', sort: 'asc' },
    { label: 'Nota Prom.', field: 'AvgAverage', sort: 'asc' },
    { label: 'Nota Desv.', field: 'StdevAverage', sort: 'asc' },
    { label: 'Aprob.', field: 'Approved', sort: 'asc' },
    { label: '% Aprob.', field: 'PorcApproved', sort: 'asc' },
    { label: 'Desap.', field: 'Disapproved', sort: 'asc' },
    { label: '% Desap.', field: 'PorcDisapproved', sort: 'asc' },
  ]

  const COLUMNS = [
    { label: 'Sede', field: 'Sedode', key: 'Sedode', sort: 'asc' },
    { label: 'Clase', field: 'ClaCode', key: 'ClaCode', sort: 'asc' },
    { label: 'Curso', field: 'CurCode', key: 'CurCode', sort: 'asc' },
    { label: 'Carrera', field: 'CarName', key: 'CarName', sort: 'asc' },
    { label: 'Matric.', field: 'Enrolled', key: 'Enrolled', sort: 'asc' },
    { label: 'Habil.', field: 'Enabled', key: 'Enabled', sort: 'asc' },
    {
      label: '% Habil.',
      field: 'PorcEnabled',
      key: 'PorcEnabled',
      sort: 'asc',
    },
    { label: 'Inhab.', field: 'Disabled', key: 'Disabled', sort: 'asc' },
    {
      label: '% Inhab.',
      field: 'PorcDisabled',
      key: 'PorcDisabled',
      sort: 'asc',
    },
    { label: 'Ret.', field: 'Retired', key: 'Retired', sort: 'asc' },
    { label: '% Ret.', field: 'PorcRetired', key: 'PorcRetired', sort: 'asc' },
    { label: 'Nota Mín.', field: 'MinAverage', key: 'MinAverage', sort: 'asc' },
    { label: 'Nota Máx.', field: 'MaxAverage', key: 'MaxAverage', sort: 'asc' },
    {
      label: 'Nota Prom.',
      field: 'AvgAverage',
      key: 'AvgAverage',
      sort: 'asc',
    },
    {
      label: 'Nota Desv.',
      field: 'StdevAverage',
      key: 'StdevAverage',
      sort: 'asc',
    },
    { label: 'Aprob.', field: 'Approved', key: 'Approved', sort: 'asc' },
    {
      label: '% Aprob.',
      field: 'PorcApproved',
      key: 'PorcApproved',
      sort: 'asc',
    },
    { label: 'Desap.', field: 'Disapproved', key: 'Disapproved', sort: 'asc' },
    {
      label: '% Desap.',
      field: 'PorcDisapproved',
      key: 'PorcDisapproved',
      sort: 'asc',
    },
  ]

  const FormData = (Data: []) => {
    const dataArray = Data?.map((_: any) => {
      return [
        _.Sedode,
        _.ClaCode,
        _.CurCode,
        _.CarName,
        _.Enrolled,
        _.Enabled,
        _.PorcEnabled,
        _.Disabled,
        _.PorcDisabled,
        _.Retired,
        _.PorcRetired,
        _.MinAverage,
        _.MaxAverage,
        _.AvgAverage,
        _.StdevAverage,
        _.Approved,
        _.PorcApproved,
        _.Disapproved,
        _.PorcDisapproved,
      ]
    })

    return dataArray
  }

  const COLUMNS_PDF = [
    [
      'Sede',
      'Clase',
      'Curso',
      'Carrera',
      'Matric',
      'Habil',
      '% Habil.',
      'Inhab.',
      '% Inhab.',
      'Ret.',
      '% Ret.',
      'Nota Mín.',
      'Nota Máx.',
      'Nota Prom.',
      'Nota Desv.',
      'Aprob',
      '% Aprob.',
      'Desap.',
      '% Desap.',
    ],
  ]

  const ApiClassStatistics = async (TraCode: any) => {
    const response = await apiReportesAcademicos.listClassStatistics(
      '%',
      TraCode,
      '%',
      '%'
    )
    return response
  }

  const CallReportPDF = async () => {
    setloading(true)
    const obj = {
      head: COLUMNS_PDF,
      body: FormData(ClassStatisticsData),
      name: `RptClases_${TeacherCoursesData.ClaCodigo}.pdf`,
      Information: TeacherCoursesData,
      Docente:
        DocenteSection?.lastName +
        ' ' +
        DocenteSection?.middleLastName +
        ', ' +
        DocenteSection?.name,
      NameRepote: 'Clases: Resultados y Estadísticas',
      RouteImage: imgBase64,
    }
    GeneratePdf(obj)
    setloading(false)
  }

  const ToReturn = () => {
    remove(CLASEID_REPORTES)
    remove(LST_SELECTED_COURSE)
    window.location.href = '/reportes-academicos'
  }

  useEffect(() => {
    const Load = async () => {
      setloading(true)
      setTeacherCoursesData({
        CurCodigo: lstCoursesTeacher.CurCodigo,
        CurNombre: lstCoursesTeacher.CurNombre,
        ClaCodigo: lstCoursesTeacher.ClaCodigo,
        CarNombre: lstCoursesTeacher.CarNombre,
        SedCodigo: lstCoursesTeacher.SedCodigo,
        SemCodigo: lstCoursesTeacher.SemCodigo,
        TipoDoc: lstCoursesTeacher.TipoDoc,
        ClaseFull: lstCoursesTeacher.ClaseFull,
        ClaTopeFaltas: lstCoursesTeacher.ClaTopeFaltas,
        CarCodigo: lstCoursesTeacher.CarCodigo,
        ClaTipo: lstCoursesTeacher.ClaTipo,
        AplicaCompetencia: lstCoursesTeacher.AplicaCompetencia,
        ClaMetodoEducativo: lstCoursesTeacher.ClaMetodoEducativo,
      })
      try {
        const response = await ApiClassStatistics(userId)
        setClassStatisticsData(response)
      } catch (error:any) {
        catchingErrorFront(error.message)
        setloading(false)
      }

      setloading(false)
    }
    Load()
  }, [])

  return (
    <div>
      <div className={styles.contenido}>
        <input
          id="imgBase64"
          type="hidden"
        />
        <Loader loading={Loading} />
        <div className={styles.content}>
          <div className={styles.titulo}>
            <Label classname="text-warning h5 mt-3 mb-3">
              Clases: Resultados y Estadísticas
            </Label>
          </div>
          <hr />
          <div className={styles.alertaContent}>
            <Alerta
              classname="w-100"
              variant="info"
            >
              <p className="mb-0">
                En el cálculo del promedio general de la clase (Nota Prom.), así
                como la desviación estándar (Nota Desv.), se incluyen a los
                alumnos con nota igual a cero.
              </p>
            </Alerta>
          </div>

          <div className={`${styles.botones} m-3`}>
            <ReportButtons
              callReportPDF={CallReportPDF}
              data={ClassStatisticsData}
              COLUMNS={COLUMNS}
              nameXLS={nameXLS}
              callReportToReturn={ToReturn}
            />
          </div>
          <div className={styles.tabla}>
            <TableDinamic
              columns={COLUMNS_CLASSSTATISTICS}
              listData={ClassStatisticsData}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

ReporteEstadisticas.title = 'Reporte de Estadísticas - Portal Docentes'
export default ReporteEstadisticas
