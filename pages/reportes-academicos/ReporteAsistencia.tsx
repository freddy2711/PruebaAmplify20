import Tbody from "../../components/UI/molecules/table/tbody/Tbody"
import Thead from "../../components/UI/molecules/table/thead/Thead"
import Tabla from "../../components/UI/organisms/table/Tabla"
import styles from "../../components/templates/reports/AcademicReports/AttendanceReport/AttendanceReport.module.scss"
import Label from "../../components/UI/atoms/label/Label"
import { useEffect, useState } from "react"
import { apiReportesAcademicos } from "../api"
import { get, remove } from "local-storage"
import { CLASEID_REPORTES, LST_SELECTED_COURSE, SET_DATA_DOCENTE, SET_IMG_BASE64 } from "../../consts/storageConst"
import ReportButtons from '../../components/UI/molecules/reports/AcademicReport/ReportButtons/reportButtons'
import Router from "next/router"
import dynamic from 'next/dynamic'
import Modal from 'react-bootstrap/Modal';
import Loader from "../../components/UI/atoms/loader/Loader"
import GeneratePdf from "../../hooks/react-pdf/DownloadPDF"

const TableDinamic = dynamic(
  () => import('../../components/UI/molecules/tableDinamic/Table'),
  {
    ssr: false,
  }
)

type SelectedCourse = {
  CurCodigo:string,
  CurNombre:string,
  ClaCodigo:string,
  CarNombre:string,
  SedCodigo:string,
  SemCodigo:string,
  TipoDoc:string,
  ClaseFull:string,
  ClaTopeFaltas:number,
  CarCodigo:string,
  ClaTipo:string,
  AplicaCompetencia:string,
  ClaMetodoEducativo:string,
}

const ReporteAsistencia = () => {
  const [Loading, setloading] = useState(false)
  const [TeacherCoursesData,setTeacherCoursesData] = useState<SelectedCourse>({
    CurCodigo:"",
    CurNombre:"",
    ClaCodigo:"",
    CarNombre:"",
    SedCodigo:"",
    SemCodigo:"",
    TipoDoc:"",
    ClaseFull:"",
    ClaTopeFaltas:0,
    CarCodigo:"",
    ClaTipo:"",
    AplicaCompetencia:"",
    ClaMetodoEducativo:"",
  })
  const [ClassAttendanceData,setClassAttendanceData] = useState<any>([])
  const [show, setShow] = useState(false);
  const [ImgSelected, setImgSelected] = useState("");
  const lstCoursesTeacher:any = JSON.parse(get(LST_SELECTED_COURSE))
  const ClassCode = get(CLASEID_REPORTES)
  const DocenteSection:any = get(SET_DATA_DOCENTE)
  const nameXLS = `RptAsistencia_${TeacherCoursesData.ClaCodigo}.csv`
  const imgBase64: any = get(SET_IMG_BASE64)

  const COLUMNS_ATTENDANCE = [
    { label: 'Código', field: 'studentId', sort: 'asc' },
    { label: 'Nombres', field: 'fullName', sort: 'asc' },
    { label: ' ', field: 'Image', sort: 'asc' },
    { label: 'Carrera', field: 'carrName', sort: 'asc' },
    { label: 'Ciclo', field: 'cicle', sort: 'asc' },
    { label: 'Número Vez', field: 'cantVeces', sort: 'asc' },
    { label: 'Nro Faltas', field: 'faults', sort: 'asc' },
    { label: 'Estado', field: 'state', sort: 'asc' },
    { label: 'Fecha Inhabilitación', field: 'endHabilitaded', sort: 'asc' },
    { label: 'Fecha Retiro', field: 'retire', sort: 'asc' },
]

const COLUMNS = [
  { label: 'Código', field: 'studentId',key: 'studentId', sort: 'asc' },
  { label: 'Nombres', field: 'fullName',key: 'fullName', sort: 'asc' },
   { label: 'Carrera', field: 'carrName',key: 'carrName', sort: 'asc' },
  { label: 'Ciclo', field: 'cicle',key: 'cicle', sort: 'asc' },
  { label: 'Número Vez', field: 'cantVeces',key: 'cantVeces', sort: 'asc' },
  { label: 'Nro Faltas', field: 'faults',key: 'faults', sort: 'asc' },
  { label: 'Estado', field: 'state',key: 'state', sort: 'asc' },
  { label: 'Fecha Inhabilitación', field: 'endHabilitaded',key: 'endHabilitaded', sort: 'asc' },
  { label: 'Fecha Retiro', field: 'retire',key: 'retire', sort: 'asc' },
]

const COLUMNS_PDF = [
  [
    'Código',
    'Apellidos y Nombres',
    'Carrera',
    'Ciclo',
    'Vez',
    'Faltas',
    'Estado',
    'F.Retiro',
    'F.Inhab',
  ],
]

  const ApiClassAttendance = async (classCode:any) => {
    const response = await apiReportesAcademicos.listClassAttendance(classCode);
    return response
  }

//   const APILogo = async (classCode:any,parameterCode:any) => {
//     const response = await apiReportesAcademicos.listDetailClass(classCode,parameterCode);
//     return response
// }

  const ToReturn = () => {
    remove(CLASEID_REPORTES)
    remove(LST_SELECTED_COURSE)
    Router.push('/reportes-academicos')
  }

  const handleClose = () => setShow(false);
  const handleShow = (Img:any) => {
    setShow(true)
    setImgSelected(Img) 
  };

  const formatedDataClassAttendance = (obj: any, setstate: any) => {
    const rows = obj.map((item: any, index: number) => ({
      ...item,
      Image: (
        <img onClick={() => handleShow(item.image)} src={item.image} alt="Foto de alumnos" width={20} height={20} />
      ),
    }))

    setstate(rows)
  }

  const FormData = (Data:[]) => {
    const dataArray = Data?.map((_: any) => {
        return [
          _.studentId,
          _.fullName,
          _.carrName,
          _.cicle,
          _.cantVeces,
          _.faults,
          _.state,
          _.retire,
          _.endHabilitaded,
        ]
      })

    return dataArray
}

  const CallReportPDF = async () => {
    setloading(true)
    console.log("route",imgBase64)
    // const LogoUrl = await APILogo(TeacherCoursesData.ClaCodigo,"LOGOUPN")
    const obj = {
      head: COLUMNS_PDF,
      body: FormData(ClassAttendanceData),
      name: `RptAsistencia_${TeacherCoursesData.ClaCodigo}.pdf`,
      Information: TeacherCoursesData,
      Docente: DocenteSection.lastName + " " + DocenteSection.middleLastName + ", " + DocenteSection.name,
      NameRepote:'Asistencia',
      RouteImage:imgBase64
    }
    GeneratePdf(obj)
    setloading(false)
  }

  useEffect(()=> {
    const Load = async () => {
      setloading(true)
      setTeacherCoursesData({
        CurCodigo:lstCoursesTeacher.CurCodigo,
        CurNombre:lstCoursesTeacher.CurNombre,
        ClaCodigo:lstCoursesTeacher.ClaCodigo,
        CarNombre:lstCoursesTeacher.CarNombre,
        SedCodigo:lstCoursesTeacher.SedCodigo,
        SemCodigo:lstCoursesTeacher.SemCodigo,
        TipoDoc:lstCoursesTeacher.TipoDoc,
        ClaseFull:lstCoursesTeacher.ClaseFull,
        ClaTopeFaltas:lstCoursesTeacher.ClaTopeFaltas,
        CarCodigo:lstCoursesTeacher.CarCodigo,
        ClaTipo:lstCoursesTeacher.ClaTipo,
        AplicaCompetencia:lstCoursesTeacher.AplicaCompetencia,
        ClaMetodoEducativo:lstCoursesTeacher.ClaMetodoEducativo,
      })
      const response = await ApiClassAttendance(ClassCode)
      formatedDataClassAttendance(response,setClassAttendanceData)
      setloading(false)
    }
    Load()
  },[])

    return(
      <div className={styles.contenido}>
         <input
        id="imgBase64"
        type="hidden"
      />
        <Loader loading={Loading} />
        <div className={styles.content}>
          <div className={styles.titulo}>
            <Label classname="text-warning h5 mt-3 mb-3">
              Reporte de asistencia por clase
            </Label>
          </div>
          <hr />
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Foto del Estudiante</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img style={{width:'100%',height:'100%'}} src={ImgSelected} alt="Foto del estudante" />
            </Modal.Body>
          </Modal>
          <div className={styles.tablaDetalle}>
            <Tabla classname="tablaRA">
              <Thead>
              </Thead>
              <Tbody>
                <tr>
                  <td style={{ fontWeight: 'bold' }}>DATOS DE LA CLASE</td>
                  <td></td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 'bold' }}>Semestre</td>
                  <td>{ TeacherCoursesData !== undefined ? TeacherCoursesData.SemCodigo : ""}</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 'bold' }}>Sede</td>
                  <td>{TeacherCoursesData !== undefined ? TeacherCoursesData.SedCodigo : ""}</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 'bold' }}>Carrera</td>
                  <td>{TeacherCoursesData !== undefined ? TeacherCoursesData.CarNombre : ""}</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 'bold' }}>Código del curso</td>
                  <td>{TeacherCoursesData !== undefined ? TeacherCoursesData.CurCodigo : ""}</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 'bold' }}>Nombre del curso</td>
                  <td>{TeacherCoursesData !== undefined ? TeacherCoursesData.CurNombre : ""}</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 'bold' }}>Clase</td>
                  <td>{TeacherCoursesData !== undefined ? TeacherCoursesData.ClaCodigo : ""}</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 'bold' }}>Tope faltas</td>
                  <td>{TeacherCoursesData !== undefined ? TeacherCoursesData.ClaTopeFaltas : 0}</td>
                </tr>
               
              </Tbody>
            </Tabla>
          </div>
          <div className={`${styles.botones} m-3`}>
            <ReportButtons
              callReportPDF={CallReportPDF}
              data={ClassAttendanceData}
              COLUMNS={COLUMNS}
              nameXLS={nameXLS}
              callReportToReturn={ToReturn}
            />
          </div>
          <div className={styles.tabla}>
            <TableDinamic
                columns={COLUMNS_ATTENDANCE}
                listData={ClassAttendanceData} />
            </div>
        </div>
      </div>
    )
}

ReporteAsistencia.title = 'Reporte de Asistencia - Portal Docentes'
export default ReporteAsistencia