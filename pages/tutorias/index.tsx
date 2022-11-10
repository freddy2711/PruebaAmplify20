import { useState, useEffect } from 'react'
import Label from '../../components/UI/atoms/label/Label'
import Loader from '../../components/UI/atoms/loader/Loader'
import styles from '../../components/templates/tutorias/tutorias.module.scss'
import dynamic from 'next/dynamic'
import { get } from 'local-storage'
import { SET_DUENO_SESSION, SET_TEACHERCODE } from '../../consts/storageConst'
import { apiTutorias } from '../api'
import Swal from 'sweetalert2'

const TableDinamic = dynamic(
  () => import('../../components/UI/molecules/tableDinamic/Table'),
  {
    ssr: false,
  }
)

const ADM_TUTORIAL = [
  { label: 'Seleccione', field: 'select', sort: 'asc' },
  { label: 'SEDE', field: 'sedCode', sort: 'asc' },
  { label: 'CLASE', field: 'claCode', sort: 'asc' },
  { label: 'SEMESTRE', field: 'semCode', sort: 'asc' },
  { label: 'DOCENTE', field: 'nameFull', sort: 'asc' },
]

const ALUMNOS = [
  { label: 'Seleccionar', field: 'select', sort: 'asc' },
  { label: 'CODIGO', field: 'aluCode', sort: 'asc' },
  { label: 'NOMBRE', field: 'aluName', sort: 'asc' },
  { label: 'CORREO', field: 'aluEmail', sort: 'asc' },
  { label: 'TEL.FIJO', field: 'aluTeleFijo', sort: 'asc' },
  { label: 'TEL.APODERADO', field: 'aluPadTelefijo', sort: 'asc' },
]

const NOTES = [
  { label: 'CLASE', field: 'ClaCode', sort: 'asc' },
  { label: 'CURSO', field: 'CurCode', sort: 'asc' },
  { label: 'DOCENTE', field: 'teacher', sort: 'asc' },
  { label: 'VEZ', field: 'MadeNroVeces', sort: 'asc' },
  { label: 'T1', field: 'T1', sort: 'asc' },
  { label: 'T2', field: 'T2', sort: 'asc' },
  { label: 'T3', field: 'T3', sort: 'asc' },
  { label: 'T4', field: 'T4', sort: 'asc' },
  { label: 'T5', field: 'T5', sort: 'asc' },
  { label: 'PT', field: 'AlnoPromedioT', sort: 'asc' },
  { label: 'EP', field: 'Ep', sort: 'asc' },
  { label: 'EF', field: 'Ef', sort: 'asc' },
  { label: 'RE', field: 'Re', sort: 'asc' },
  { label: 'PF', field: 'AlnoPromedio', sort: 'asc' },
  { label: 'TOPE', field: 'TopeFaltas', sort: 'asc' },
  { label: 'FALTAS', field: 'Faltas', sort: 'asc' },
  { label: 'EST', field: 'MadeEstado', sort: 'asc' },
]

const index = () => {
  const [Loading, setLoading] = useState(false)
  const [TutoriasData, setTutoriasData] = useState<any>([])
  const [TeacherNotesStudentTutori, setTeacherNotesStudentTutori] =
    useState<any>([])
  const [StudentTutoring, setStudentTutoring] = useState<any>([])
  const DUENOSESSION =
    get(SET_DUENO_SESSION) === null ? 'RVI' : get(SET_DUENO_SESSION)
  const USER =
    get(SET_TEACHERCODE) === null ? 'N00011885' : get(SET_TEACHERCODE)

  const ApiTutorias = async (traCode: any) => {
    const response = await apiTutorias.tutorials(traCode)
    return response
  }

  const ApiStudentTutoring = async (codAlu: any) => {
    const response = await apiTutorias.StudentTutoring(codAlu)
    return response
  }

  const ApiTeacherNotesStudentTutorin = async (clasCode: any, semCode: any) => {
    const response = await apiTutorias.TeacherNotesStudentTutorin(
      clasCode,
      semCode
    )
    return response
  }

  const ApiEmployeeLogin = async (userName: any) => {
    const response = await apiTutorias.EmployeeLogin(userName)
    return response
  }

  // apis

  const formatedData = (obj: any, setstate: any) => {
    const rows = obj.map((item: any) => ({
      ...item,
      select: (
        <p
          style={{ cursor: 'pointer', color: '#D24726', fontWeight: 'bold' }}
          onClick={() => handleClickRow(item)}
          className="text-decoration-none text-center w-100 d-block"
        >
          seleccionar
        </p>
      ),
    }))

    setstate(rows)
  }

  const formatedDataTeacherNotesStudentTutorin = (obj: any, setstate: any) => {
    const rows = obj.map((item: any) => ({
      ...item,
      select: (
        <p
          style={{ cursor: 'pointer', color: '#D24726', fontWeight: 'bold' }}
          onClick={() => handleClickRowTeacherNotesStudentTutorin(item)}
          className="text-decoration-none text-center w-100 d-block"
        >
          seleccionar
        </p>
      ),
    }))

    setstate(rows)
  }

  // forms

  const handleClickRow = async (item: any) => {
    setLoading(true)
    const response = await ApiTeacherNotesStudentTutorin(
      item.claCode,
      item.semCode
    )
    setTeacherNotesStudentTutori([])
    setStudentTutoring([])
    if (response.length <= 0) ViewMessage(0)
    else
      formatedDataTeacherNotesStudentTutorin(
        response,
        setTeacherNotesStudentTutori
      )
    setLoading(false)
  }

  const handleClickRowTeacherNotesStudentTutorin = async (item: any) => {
    setLoading(true)
    const response = await ApiStudentTutoring(item.aluCode)
    setStudentTutoring([])

    if (response.length <= 0) ViewMessage(1)
    else setStudentTutoring(response)
    setLoading(false)
  }

  //

  const ViewMessage = (IdMessage: number) => {
    switch (IdMessage) {
      case 0:
        return Swal.fire({
          title: 'Portal de Docentes',
          text: `No se enecontro datos de alumnos con esa clase`,
          icon: 'warning',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK',
        })
      case 1:
        return Swal.fire({
          title: 'Portal de Docentes',
          text: `No se enecontro datos de alumno con ese codigo de alumno`,
          icon: 'warning',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK',
        })
      case 2:
        return Swal.fire({
          title: 'Portal de Docentes',
          text: `No se enecontro datos de tutoria`,
          icon: 'warning',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK',
        })
      default:
        break
    }
  }

  useEffect(() => {
    const Load = async () => {
      setLoading(true)
      const result = await ApiTutorias(USER)
      if (result.length <= 0) ViewMessage(2)
      else formatedData(result, setTutoriasData)

      const user = await ApiEmployeeLogin(DUENOSESSION)
      setLoading(false)
    }
    Load()
  }, [])

  return (
    <div className={styles.contenido}>
      <Loader loading={Loading} />
      <div className={styles.content}>
        <div className={styles.titulo}>
          <Label classname="text-warning h5 mt-3 mb-3">
            Administración de Tutoría
          </Label>
        </div>
        <hr />
        <div className={styles.tablaCenter}>
          <TableDinamic
            columns={ADM_TUTORIAL}
            listData={TutoriasData}
          />
        </div>
        <div className={styles.titulo}>
          <Label classname="text-warning h5 mt-3 mb-3">Alumnos</Label>
        </div>
        <hr />

        {TeacherNotesStudentTutori.length > 0 ? (
          <div className={styles.tablaCenter}>
            <TableDinamic
              columns={ALUMNOS}
              listData={TeacherNotesStudentTutori}
            />
          </div>
        ) : null}

        <div className={styles.titulo}>
          <Label classname="text-warning h5 mt-3 mb-3">Notas</Label>
        </div>
        <hr />
        {StudentTutoring.length > 0 ? (
          <div className={styles.tablaCenter}>
            <TableDinamic
              columns={NOTES}
              listData={StudentTutoring}
            />
          </div>
        ) : null}
      </div>
    </div>
  )
}

index.title = 'Tutoría - Portal Docentes'
export default index
