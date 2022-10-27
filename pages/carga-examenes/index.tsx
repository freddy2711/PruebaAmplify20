import Label from '../../components/UI/atoms/label/Label'
import Loader from '../../components/UI/atoms/loader/Loader'
import styles from '../../components/templates/cargaExamenes/CargaExamenes.module.scss'
import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { apiCargaExamenes } from '../api'
import {
  SET_DATAS_SELEC_COURSES_TEACHER_CE,
  SET_TEACHERCODE,
} from '../../consts/storageConst'
import { get, set } from 'local-storage'
import Swal from 'sweetalert2'
import Router from 'next/router'

const Alerta = dynamic(() => import('../../components/UI/atoms/alert/Alerts'), {
  ssr: false,
})

const TableDinamic = dynamic(
  () => import('../../components/UI/molecules/tableDinamic/Table'),
  {
    ssr: false,
  }
)

const index = () => {
  const [Loading, setloading] = useState(false)
  const [dataListCourses, setDataListCourses] = useState([])
  const UserID =
    get(SET_TEACHERCODE) === null ? 'N00011885' : get(SET_TEACHERCODE)

  const COLUMNS = [
    { label: 'Seleccionar clase', field: 'select', sort: 'asc' },
    { label: 'Semestre', field: 'SemCodigo', sort: 'asc' },
    { label: 'Sede', field: 'SedCodigo', sort: 'asc' },
    { label: 'Clase', field: 'ClaCodigo', sort: 'asc' },
    { label: 'Tipo Doc.', field: 'TipoDoc', sort: 'asc' },
    { label: 'Cód. curso', field: 'CurCodigo', sort: 'asc' },
    { label: 'Nombre del curso', field: 'CurNombre', sort: 'asc' },
    { label: 'Carrera', field: 'CarNombre', sort: 'asc' },
  ]

  const consultaApi = async () => {
    const result: any = await apiCargaExamenes.listCoursesByTeacher(UserID)
    if (result.length === 0) ViewMessage(0)
    return result
  }

  // api

  const formatedDataCoursesByTeacher = (obj: any, setstate: any) => {
    const rows = obj.map((item: any, index: number) => ({
      ...item,
      select: (
        <a
          key={index}
          rel="noreferrer"
          className="text-decoration-none text-center w-100 d-block"
          style={{ cursor: 'pointer' }}
          onClick={() => ClickUploadExamen(item)}
        >
          Cargar Examen
        </a>
      ),
    }))

    setstate(rows)
  }

  // formateo

  const ClickUploadExamen = (item: any) => {
    if (item.length === 0) {
      ViewMessage(1)
    } else {
      set(SET_DATAS_SELEC_COURSES_TEACHER_CE, JSON.stringify(item))
      Router.push('/carga-examenes/resumen-examenes')
    }
  }

  const ViewMessage = (StateMessage: any) => {
    switch (StateMessage) {
      case 0:
        return Swal.fire({
          title: 'Portal de Docentes',
          text: `No se encontraron clases asignadas a Ud.`,
          icon: 'warning',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK',
        })
      case 1:
        return Swal.fire({
          title: 'Portal de Docentes',
          text: `Seleccione una clase`,
          icon: 'warning',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK',
        })
      default:
        break
    }
  }

  // funciones

  useEffect(() => {
    const Load = async () => {
      setloading(true)
      const result = await consultaApi()
      formatedDataCoursesByTeacher(result, setDataListCourses)
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
            Carga de archivo para examen
          </Label>
        </div>
        <hr />

        <div className={styles.alertaContent}>
          <Alerta
            classname="w-100"
            variant="info"
          >
            <b>Nota:</b> &nbsp; Seleccione una clase para la carga de exámen.
          </Alerta>
        </div>
        <div className={styles.tabla}>
          <TableDinamic
            columns={COLUMNS}
            listData={dataListCourses}
          />
        </div>

        <div>
          <small>
            <strong>Tipo docente: (P)</strong> Principal / <strong>(S)</strong>{' '}
            Sustituto / <strong>(A)</strong> Auxiliar
          </small>
        </div>
      </div>
    </div>
  )
}

export default index
