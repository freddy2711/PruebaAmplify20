import { useState, useEffect } from 'react'
import Loader from '../../../components/UI/atoms/loader/Loader'
import Label from '../../../components/UI/atoms/label/Label'
import Anchor from '../../../components/UI/atoms/anchor/Anchor'
import styles from './../../../components/templates/sesiones/anteriores/Anteriores.module.scss'
import Button from '../../../components/UI/atoms/button/Button'
import dynamic from 'next/dynamic'
import { set } from 'local-storage'
import { axiosCreate } from '../../../config/axios'
import { AxiosInstance } from 'axios'
import { apiPath } from '../../../consts/path'
import { redirectRouter } from '../../../helpers/routerRedirect'

import {
	objecApi,
  CLASS_SELECTED_SM,
} from '../../../consts/storageConst'


const TableDinamic = dynamic(
  () => import('../../../components/UI/molecules/tableDinamic/Table'),
  {
    ssr: false,
  }
)

type Selected = {
  ClaCodigo: string
  CurNombre: string
}


const Index = ({ data }: any) => {
  console.log('DATADESSR', data)

  const [Loading, setloading] = useState(true)

  // eslint-disable-next-line no-unused-vars
  const [dataSelected, setDataSelected] = useState<Selected>({
    ClaCodigo: '',
    CurNombre: '',
  })

  const [dataListCourses, setDataListCourses] = useState([])


  const handleClickRowCoursesByTeacher = (e: any, item: any) => {
    e.preventDefault()
    setloading(true)
    set(CLASS_SELECTED_SM, item)
    setDataSelected({ ClaCodigo: item.ClaCodigo, CurNombre: item.CurNombre })
		redirectRouter(`/solicitud-de-modificacion/registrar-solicitud/${item.ClaCodigo}`, setloading)
    // setloading(false)
  }

  const formatedDataCoursesByTeacher = (obj: any, setstate: any) => {
    const rows = obj.map((item: any) => ({
      ...item,
      select: (
        <Anchor
          // href={`/solicitud-de-modificacion/registrar-solicitud/${item.ClaCodigo}`}
					href='!#'
          onClick={(e) => handleClickRowCoursesByTeacher(e, item)}
          classname="text-decoration-none text-center w-100 d-block"
        >
          seleccionar
        </Anchor>
      ),
    }))

    setstate(rows)
  }

  const consultaApi = async (data: any) => {
    // const result: any = await apiRegistroModificacion.listCoursesByTeacher(UserID)
    formatedDataCoursesByTeacher(data, setDataListCourses)
    // return result
  }

  // const dataInit: any = []

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

  useEffect(() => {
    const Load = async () => {
      setloading(true)
      await consultaApi(data)
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
            Solicitud de modificación de notas - Seleccionar clase
          </Label>
        </div>
        <hr />

        <div className={styles.tabla}>
          <TableDinamic
            columns={COLUMNS}
            listData={dataListCourses}
          />
        </div>

        <div className={styles.botones}>
          <div>
            <Button
              type="button"
              classname=""
              variant="secondary"
              onclick={() => (location.href = `/solicitud-de-modificacion`)}
              disabled={false}
            >
              Atras
            </Button>
          </div>
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

export default Index

export async function getServerSideProps(context: any) {
  const { query } = context

  console.log('QUERTY', query)

  const { idTeacher } = query

  const { ClassShedule } = objecApi

  try {
    const apiCall: AxiosInstance = axiosCreate(ClassShedule)
    const URL =
      apiPath.registroModificacionNotas.PATH_GetTeachersCorses(idTeacher)
    const { data } = await apiCall(URL)
    const result = data.detail

    return {
      props: {
        data: result,
      },
    }
  } catch (error: any) {
    console.log(error)
    const msg = error?.response?.data?.message
    return {
      props: { data: JSON.stringify({ msg, status: error.response?.status }) },
    }
  }
}
