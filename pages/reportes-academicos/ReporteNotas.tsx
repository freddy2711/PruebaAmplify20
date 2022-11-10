import Tbody from '../../components/UI/molecules/table/tbody/Tbody'
import Thead from '../../components/UI/molecules/table/thead/Thead'
import Tabla from '../../components/UI/organisms/table/Tabla'
import styles from '../../components/templates/reports/AcademicReports/NotesReport/NotesReport.module.scss'
import Label from '../../components/UI/atoms/label/Label'
import { useEffect, useState } from 'react'
import { apiReportesAcademicos } from '../api'
import { get, remove } from 'local-storage'
import {
  CLASEID_REPORTES,
  LST_SELECTED_COURSE,
  SET_DATA_DOCENTE,
  SET_IMG_BASE64,
} from '../../consts/storageConst'
import ReportButtons from '../../components/UI/molecules/reports/AcademicReport/ReportButtons/reportButtons'
import Router from 'next/router'
import dynamic from 'next/dynamic'
import Modal from 'react-bootstrap/Modal'
import Loader from '../../components/UI/atoms/loader/Loader'
import GeneratePdf from '../../hooks/react-pdf/DownloadPDF'

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

const ReporteNotas = () => {
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
  const [NotesData, setNotesData] = useState<any>([])
  const [show, setShow] = useState(false)
  const [ImgSelected, setImgSelected] = useState('')
  const lstCoursesTeacher: any = JSON.parse(get(LST_SELECTED_COURSE))
  const ClassCode = get(CLASEID_REPORTES)
  const DocenteSection: any = get(SET_DATA_DOCENTE)
  const nameXLS = `RptNotas_${TeacherCoursesData.ClaCodigo}.csv`
  const imgBase64: any = get(SET_IMG_BASE64)

  const COLUMNS_NOTES = [
    { label: 'Código', field: 'AluCod', sort: 'asc' },
    { label: 'Nombre del alumno', field: 'AluNameFull', sort: 'asc' },
    { label: ' ', field: 'Image', sort: 'asc' },
    { label: 'Carrera', field: 'CarName', sort: 'asc' },
    { label: 'Ciclo', field: 'MadeCiclo', sort: 'asc' },
    { label: 'Veces', field: 'MadeNroVeces', sort: 'asc' },
    { label: 'T1', field: 'T1', sort: 'asc' },
    { label: 'T2', field: 'T2', sort: 'asc' },
    { label: 'T3', field: 'T3', sort: 'asc' },
    { label: 'T4', field: 'T4', sort: 'asc' },
    { label: 'T5', field: 'T5', sort: 'asc' },
    { label: 'PT', field: 'AlnoPromedioT', sort: 'asc' },
    { label: 'EP', field: 'EP', sort: 'asc' },
    { label: 'EF', field: 'EF', sort: 'asc' },
    { label: 'RE', field: 'RE', sort: 'asc' },
    { label: 'T_RE', field: 'T_RE', sort: 'asc' },
    { label: 'PF', field: 'AlnoPromedio', sort: 'asc' },
    { label: 'Est', field: 'MadeEstado', sort: 'asc' },
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
    { label: 'T1', field: 'T1', key: 'T1', sort: 'asc' },
    { label: 'T2', field: 'T2', key: 'T2', sort: 'asc' },
    { label: 'T3', field: 'T3', key: 'T3', sort: 'asc' },
    { label: 'T4', field: 'T4', key: 'T4', sort: 'asc' },
    { label: 'T5', field: 'T5', key: 'T5', sort: 'asc' },
    { label: 'PT', field: 'AlnoPromedioT', key: 'AlnoPromedioT', sort: 'asc' },
    { label: 'EP', field: 'EP', key: 'EP', sort: 'asc' },
    { label: 'EF', field: 'EF', key: 'EF', sort: 'asc' },
    { label: 'RE', field: 'RE', key: 'RE', sort: 'asc' },
    { label: 'T_RE', field: 'T_RE', key: 'T_RE', sort: 'asc' },
    { label: 'PF', field: 'AlnoPromedio', key: 'AlnoPromedio', sort: 'asc' },
    { label: 'Est', field: 'MadeEstado', key: 'MadeEstado', sort: 'asc' },
  ]

  const COLUMNS_PDF = [
    [
      'Código',
      'Apellidos y nombreS',
      'Carrera',
      'Ciclo',
      'Vez',
      'T1',
      'T2',
      'T3',
      'T4',
      'T5',
      'PT',
      'EP',
      'EF',
      'RE',
      'T_RE',
      'PF',
      'Est',
    ],
  ]

  const ApiNotes = async (classCode: any) => {
    const response = await apiReportesAcademicos.listNotes(classCode)
    return response
  }

  const ToReturn = () => {
    remove(CLASEID_REPORTES)
    remove(LST_SELECTED_COURSE)
    Router.push('/reportes-academicos')
  }

  const handleClose = () => setShow(false)
  const handleShow = (Img: any) => {
    setShow(true)
    setImgSelected(Img)
  }

  const formatedDataNotes = (obj: any, setstate: any) => {
    const rows = obj.map((item: any, index: number) => ({
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

    setstate(rows)
  }

  const FormData = (Data: []) => {
    const dataArray = Data?.map((_: any) => {
      return [
        _.AluCod,
        _.AluNameFull,
        _.CarName,
        _.MadeCiclo,
        _.MadeNroVeces,
        _.T1,
        _.T2,
        _.T3,
        _.T4,
        _.T5,
        _.AlnoPromedioT,
        _.EP,
        _.EF,
        _.RE,
        _.T_RE,
        _.AlnoPromedio,
        _.MadeEstado,
      ]
    })

    return dataArray
  }

  const CallReportPDF = async () => {
    setloading(true)
    const obj = {
      head: COLUMNS_PDF,
      body: FormData(NotesData),
      name: `RptNotas_${TeacherCoursesData.ClaCodigo}.pdf`,
      Information: TeacherCoursesData,
      Docente:
        DocenteSection.lastName +
        ' ' +
        DocenteSection.middleLastName +
        ', ' +
        DocenteSection.name,
      NameRepote: 'Notas',
      RouteImage: imgBase64,
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
      const response = await ApiNotes(ClassCode)
      formatedDataNotes(response, setNotesData)
      setloading(false)
    }
    Load()
  }, [])

  return (
    <div className={styles.contenido}>
          <input
        id="imgBase64"
        type="hidden"
      />
      <Loader loading={Loading} />
      <div className={styles.content}>
        <div className={styles.titulo}>
          <Label classname="text-warning h5 mt-3 mb-3">
            Reporte de notas por clase
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
        <div className={`${styles.botones} m-3`}>
          <ReportButtons
            callReportPDF={CallReportPDF}
            data={NotesData}
            COLUMNS={COLUMNS}
            nameXLS={nameXLS}
            callReportToReturn={ToReturn}
          />
        </div>
        <div className={styles.tabla}>
          <TableDinamic
            columns={COLUMNS_NOTES}
            listData={NotesData}
          />
        </div>
      </div>
    </div>
  )
}

ReporteNotas.title = 'Reporte de Notas- Portal Docentes'
export default ReporteNotas
