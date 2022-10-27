import dynamic from 'next/dynamic'
import { useState, useEffect } from 'react'
import Label from '../../../components/UI/atoms/label/Label'
import Loader from '../../../components/UI/atoms/loader/Loader'
import styles from '../../../components/templates/cargaExamenes/resumen-examenes/ResumenExamenes.module.scss'
import Button from '../../../components/UI/atoms/button/Button'
import Tabla from '../../../components/UI/organisms/table/Tabla'
import Thead from '../../../components/UI/molecules/table/thead/Thead'
import Tbody from '../../../components/UI/molecules/table/tbody/Tbody'
import { apiCargaExamenes } from '../../api'
import {
  SET_DATAS_SELEC_COURSES_TEACHER_CE,
  SET_TEACHERCODE,
} from '../../../consts/storageConst'
import { get, remove } from 'local-storage'
import Router from 'next/router'

const TableDinamic = dynamic(
  () => import('../../../components/UI/molecules/tableDinamic/Table'),
  {
    ssr: false,
  }
)

const index = () => {
  const [Loading, setloading] = useState(false)
  const [DataCoursesByTeacher, setDataCoursesByTeacher] = useState<any>([])
  const [DataLoadedExams, setDataLoadedExams] = useState<any>([])
  const UserID =
    get(SET_TEACHERCODE) === null ? 'N00011885' : get(SET_TEACHERCODE)
  const DataSelect: any = JSON.parse(get(SET_DATAS_SELEC_COURSES_TEACHER_CE))

  const COLUMNS = [
    { label: 'CLASE', field: 's_cla_code', sort: 'asc' },
    { label: 'NOTA', field: 's_not_description', sort: 'asc' },
    { label: 'EXAMEN', field: 's_exam_type', sort: 'asc' },
    { label: 'CANT. IMPRIMIR', field: 's_print_quantity', sort: 'asc' },
    { label: 'ESTADO', field: 'status', sort: 'asc' },
    { label: 'ARCHIVO', field: 's_original_file_name', sort: 'asc' },
    { label: 'FECHA CARGADA', field: 'audit_date_creation', sort: 'asc' },
    { label: 'FECHA IMPRESIÓN', field: 'date', sort: 'asc' },
  ]

  const LoadedExamsApi = async () => {
    console.log('Valores', UserID, DataSelect.ClaCodigo)
    const result: any = await apiCargaExamenes.listLoadedExams(
      UserID,
      DataSelect.ClaCodigo
    )
    return result
  }

  const returClick = () => {
    remove(SET_DATAS_SELEC_COURSES_TEACHER_CE)
    // Router.push("/carga-examenes")
    window.location.href = `/carga-examenes`
  }

  const nextClick = () => {
    Router.push('/carga-examenes/resumen-examenes/enviar-examenes')
  }

  useEffect(() => {
    const Load = async () => {
      setloading(true)
      setDataCoursesByTeacher(DataSelect)
      const result = await LoadedExamsApi()
      setDataLoadedExams(result)
      console.log('result', result)
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
            Cargando exámen para la clase:{' '}
            {DataSelect !== undefined ? DataCoursesByTeacher?.ClaCodigo : ''}
          </Label>
        </div>

        <hr />

        <div className={styles.rowButtons}>
          <Button
            type="button"
            classname={styles.styleBtn}
            variant="secondary"
            onclick={returClick}
          >
            Regresar
          </Button>

          <Button
            type="button"
            classname={styles.styleBtn}
            variant="primary"
            onclick={nextClick}
          >
            Nueva Solicitud
          </Button>
        </div>

        <div style={{ textAlign: 'left' }}>
          <Tabla>
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
                <td style={{ fontWeight: 'bold' }}>Semestre</td>
                <td>
                  {DataSelect !== undefined
                    ? DataCoursesByTeacher?.SemCodigo
                    : ''}
                </td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold' }}>Sede</td>
                <td>
                  {DataSelect !== undefined
                    ? DataCoursesByTeacher?.SedCodigo
                    : ''}
                </td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold' }}>Carrera</td>
                <td>
                  {DataSelect !== undefined
                    ? DataCoursesByTeacher?.CarNombre
                    : ''}
                </td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold' }}>Cóigo del curso</td>
                <td>
                  {DataSelect !== undefined
                    ? DataCoursesByTeacher?.CurCodigo
                    : ''}
                </td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold' }}>Nombre del curso</td>
                <td>
                  {DataSelect !== undefined
                    ? DataCoursesByTeacher?.CurNombre
                    : ''}
                </td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold' }}>Clase</td>
                <td>
                  {DataSelect !== undefined
                    ? DataCoursesByTeacher?.ClaCodigo
                    : ''}
                </td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold' }}>Tope faltas</td>
                <td>
                  {DataSelect !== undefined
                    ? DataCoursesByTeacher?.ClaTopeFaltas
                    : ''}
                </td>
              </tr>
            </Tbody>
          </Tabla>
        </div>

        <div className={styles.tabla}>
          <TableDinamic
            columns={COLUMNS}
            listData={DataLoadedExams}
          />
        </div>
      </div>
    </div>
  )
}

export default index
