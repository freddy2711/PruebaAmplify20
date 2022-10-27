/* eslint-disable array-callback-return */
/* eslint-disable no-undef */
import { get, remove } from 'local-storage'
import dynamic from 'next/dynamic'
import Router from 'next/router'
import { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap'
import styles from '../../components/templates/reports/AcademicReports/CompetenciesReport/CompetenciesReport.module.scss'
import Label from '../../components/UI/atoms/label/Label'
import Loader from '../../components/UI/atoms/loader/Loader'
import Select from '../../components/UI/atoms/select/Select'
import ReportButtons from '../../components/UI/molecules/reports/AcademicReport/ReportButtons/reportButtons'
import Tbody from '../../components/UI/molecules/table/tbody/Tbody'
import Thead from '../../components/UI/molecules/table/thead/Thead'
import Tabla from '../../components/UI/organisms/table/Tabla'
import {
  CLASEID_REPORTES,
  LST_SELECTED_COURSE,
  SET_DATA_DOCENTE,
} from '../../consts/storageConst'
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

const ReporteCompetencias = () => {
  const [Loading, setloading] = useState(false)
  const [ViewTable, setViewTable] = useState(false)
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
  const [lstCompetenceGeneralByClass, setlstCompetenceGeneralByClass] =
    useState<any>([])
  const [GeneralData, setGeneralData] = useState<any>([])
  const [show, setShow] = useState(false)
  const [ImgSelected, setImgSelected] = useState('')
  const lstCoursesTeacher: any = JSON.parse(get(LST_SELECTED_COURSE))
  const ClassCode = get(CLASEID_REPORTES)
  const nameXLS = `RptEvaluación_${TeacherCoursesData.ClaCodigo}.csv`
  const DocenteSection: any = get(SET_DATA_DOCENTE)

  const ApiCompetenceGeneralByClass = async (classCode: any) => {
    const response = await apiReportesAcademicos.listCompetenceGeneralByClass(
      classCode
    )
    return response
  }

  const ApiNotes = async (classCode: any) => {
    const response = await apiReportesAcademicos.listNotes(classCode)
    return response
  }

  const APILogo = async (classCode: any, parameterCode: any) => {
    const response = await apiReportesAcademicos.listDetailClass(
      classCode,
      parameterCode
    )
    return response
  }

  const ApiCompetenceSchedule = async (classId: any, noteId: any) => {
    const response = await apiReportesAcademicos.listCompetenceSchedule(
      classId,
      noteId
    )
    return response
  }

  const handleClose = () => setShow(false)

  const handleShow = (Img: any) => {
    setShow(true)
    setImgSelected(Img)
  }

  const formatedDataNotes = (
    objNotas: any,
    objCompetenceSchedule: any,
    setstate: any
  ) => {
    const output: any = []

    const rows = objNotas.map((item: any) => ({
      ...item,
      Image: (
        <img
          onClick={() => handleShow(item.image)}
          src={item.image}
          alt="Foto de alumnos"
          width={20}
          height={20}
        />
      ),
    }))

    const FormatedCompetenceSchedule = objCompetenceSchedule.map(
      (item: any) => {
        item.notaPorcentual =
          item.notaPorcentual === '' ? '' : item.notaPorcentual
        item.notaVigesima = item.notaVigesima === '' ? '' : item.notaVigesima
        item.EstadoEvaluacion =
          item.notaPorcentual === '' ? 'Pendiente' : 'Completo'
        return item
      }
    )

    rows.forEach((e: any, x: any) => {
      output.push({
        ...e,
        notaPorcentual: FormatedCompetenceSchedule[x].notaPorcentual,
        notaVigesima: FormatedCompetenceSchedule[x].notaVigesima,
        EstadoEvaluacion: FormatedCompetenceSchedule[x].EstadoEvaluacion,
      })
    })

    setstate(output)
  }

  const handleSelectedChange = async (
    event: React.FormEvent<HTMLInputElement>
  ) => {
    const response = (event.target as HTMLInputElement).value

    if (response !== '0') {
      setloading(true)
      const resultNotes = await ApiNotes(ClassCode)
      const resultCompetenceSchedule = await ApiCompetenceSchedule(
        ClassCode,
        response
      )
      formatedDataNotes(resultNotes, resultCompetenceSchedule, setGeneralData)
      setViewTable(true)
      setloading(false)
    } else {
      setViewTable(false)
      setGeneralData([])
    }
  }

  const COLUMNS_DATA = [
    { label: 'Código', field: 'AluCod', sort: 'asc' },
    { label: 'Nombre del alumno', field: 'AluNameFull', sort: 'asc' },
    { label: ' ', field: 'Image', sort: 'asc' },
    { label: 'Carrera', field: 'CarName', sort: 'asc' },
    { label: 'Ciclo', field: 'MadeCiclo', sort: 'asc' },
    { label: 'Veces', field: 'MadeNroVeces', sort: 'asc' },
    { label: 'Porcentaje', field: 'notaPorcentual', sort: 'asc' },
    { label: 'Nota', field: 'notaVigesima', sort: 'asc' },
    { label: 'Estado de Matricula', field: 'MadeEstado', sort: 'asc' },
    { label: 'Estado de Evaluación', field: 'EstadoEvaluacion', sort: 'asc' },
  ]

  const COLUMNS = [
    { label: 'Código', field: 'AluCod', key: 'AluCod', sort: 'asc' },
    {
      label: 'Nombre del alumno',
      field: 'AluNameFull',
      key: 'AluNameFull',
      sort: 'asc',
    },
    { label: 'Carrera', field: 'CarName', key: 'CarName', sort: 'asc' },
    { label: 'Ciclo', field: 'MadeCiclo', key: 'MadeCiclo', sort: 'asc' },
    { label: 'Veces', field: 'MadeNroVeces', key: 'MadeNroVeces', sort: 'asc' },
    {
      label: 'Porcentaje',
      field: 'notaPorcentual',
      key: 'notaPorcentual',
      sort: 'asc',
    },
    { label: 'Nota', field: 'notaVigesima', key: 'notaVigesima', sort: 'asc' },
    {
      label: 'Estado de Matricula',
      field: 'MadeEstado',
      key: 'MadeEstado',
      sort: 'asc',
    },
    {
      label: 'Estado de Evaluación',
      field: 'EstadoEvaluacion',
      key: 'EstadoEvaluacion',
      sort: 'asc',
    },
  ]

  const FormData = (Data: []) => {
    const dataArray = Data?.map((_: any) => {
      return [
        _.AluCod,
        _.AluNameFull,
        _.CarName,
        _.MadeCiclo,
        _.MadeNroVeces,
        _.notaPorcentual,
        _.notaVigesima,
        _.MadeEstado,
        _.EstadoEvaluacion,
      ]
    })

    return dataArray
  }

  const COLUMNS_PDF = [
    [
      'Código',
      'Apellidos y nombreS',
      'Carrera',
      'Ciclo',
      'Vez',
      'Porcentaje',
      'Nota',
      'Estado de Matricula',
      'Estado de Evaluación',
    ],
  ]

  const ToReturn = () => {
    remove(CLASEID_REPORTES)
    remove(LST_SELECTED_COURSE)
    Router.push('/reportes-academicos')
  }

  const CallReportPDF = async () => {
    setloading(true)
    const LogoUrl = await APILogo(TeacherCoursesData.ClaCodigo, 'LOGOUPN')
    const obj = {
      head: COLUMNS_PDF,
      body: FormData(GeneralData),
      name: `RptEvaluación_${TeacherCoursesData.ClaCodigo}.pdf`,
      Information: TeacherCoursesData,
      Docente:
        DocenteSection.lastName +
        ' ' +
        DocenteSection.middleLastName +
        ', ' +
        DocenteSection.name,
      NameRepote: 'evaluación de competencias',
      RouteImage: LogoUrl[0].ParameterValue,
    }
    GeneratePdf(obj)
    setloading(false)
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
      const response = await ApiCompetenceGeneralByClass(ClassCode)
      setlstCompetenceGeneralByClass(response)
      setloading(false)
    }
    Load()
  }, [])

  return (
    <div className={styles.contenido}>
      <Loader loading={Loading} />
      <div className={styles.content}>
        <div className={styles.titulo}>
          <Label classname="text-warning h5 mt-3 mb-3">
            Reporte de Evaluación de competencias por clase
          </Label>
        </div>
        <hr />
        <Modal
          show={show}
          onHide={handleClose}
        >
          <Modal.Header closeButton>
            <Modal.Title>Foto del Estudiante</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              style={{ width: '100%', height: '100%' }}
              src={ImgSelected}
              alt="Foto del estudante"
            />
          </Modal.Body>
        </Modal>
        <div className={styles.tablaDetalle}>
          <Tabla classname="tablaRA">
            <Thead></Thead>
            <Tbody>
              <tr>
                <td style={{ fontWeight: 'bold' }}>DATOS DE LA CLASE</td>
                <td></td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold' }}>Semestre</td>
                <td>
                  {TeacherCoursesData !== undefined
                    ? TeacherCoursesData.SemCodigo
                    : ''}
                </td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold' }}>Sede</td>
                <td>
                  {TeacherCoursesData !== undefined
                    ? TeacherCoursesData.SedCodigo
                    : ''}
                </td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold' }}>Carrera</td>
                <td>
                  {TeacherCoursesData !== undefined
                    ? TeacherCoursesData.CarNombre
                    : ''}
                </td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold' }}>Código del curso</td>
                <td>
                  {TeacherCoursesData !== undefined
                    ? TeacherCoursesData.CurCodigo
                    : ''}
                </td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold' }}>Nombre del curso</td>
                <td>
                  {TeacherCoursesData !== undefined
                    ? TeacherCoursesData.CurNombre
                    : ''}
                </td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold' }}>Clase</td>
                <td>
                  {TeacherCoursesData !== undefined
                    ? TeacherCoursesData.ClaCodigo
                    : ''}
                </td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold' }}>Tope faltas</td>
                <td>
                  {TeacherCoursesData !== undefined
                    ? TeacherCoursesData.ClaTopeFaltas
                    : 0}
                </td>
              </tr>
            </Tbody>
          </Tabla>
        </div>

        <div className={styles.viewContenListBtns}>
          <div className={`${styles.botones} m-3`}>
            <ReportButtons
              width="40%"
              callReportPDF={CallReportPDF}
              data={GeneralData}
              COLUMNS={COLUMNS}
              nameXLS={nameXLS}
              callReportToReturn={ToReturn}
            />
          </div>
          <div className={styles.viewListConten}>
            <div>
              <p style={{ margin: '0', whiteSpace: 'nowrap' }}>
                Seleccionar Competencia:
              </p>
            </div>
            <div>
              <Select
                id="formato"
                classname="primary"
                name="formato"
                onChange={handleSelectedChange}
              >
                {lstCompetenceGeneralByClass.length > 0 ? (
                  lstCompetenceGeneralByClass.map((x: any) => (
                    <option
                      key={x.CompetenceId}
                      value={x.CompetenceId}
                    >
                      {x.CompetenceTitle}
                    </option>
                  ))
                ) : (
                  <option value={0}>Seleccione</option>
                )}
              </Select>
            </div>
          </div>
        </div>

        {ViewTable === true ? (
          <div className={styles.tabla}>
            <TableDinamic
              columns={COLUMNS_DATA}
              listData={GeneralData}
            />
          </div>
        ) : null}
      </div>
    </div>
  )
}

ReporteCompetencias.title =
  'Reporte de Evaluación de Competencias - Portal Docentes'
export default ReporteCompetencias
