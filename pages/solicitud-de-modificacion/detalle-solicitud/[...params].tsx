import { useState, useEffect, useReducer } from 'react'
import React from 'react'
import Tabla from '../../../components/UI/organisms/table/Tabla'
import Thead from '../../../components/UI/molecules/table/thead/Thead'
import Tbody from '../../../components/UI/molecules/table/tbody/Tbody'
import Button from '../../../components/UI/atoms/button/Button'
import Loader from '../../../components/UI/atoms/loader/Loader'
import Label from '../../../components/UI/atoms/label/Label'
import styles from '../../../components/templates/sesiones/anteriores/Anteriores.module.scss'
import dynamic from 'next/dynamic'
import ViewInput from '../../../components/UI/molecules/recuperarAdelantarClases/viewInput/ViewInput'
// import Anchor from '../../../components/UI/atoms/anchor/Anchor'
import Select from '../../../components/UI/atoms/select/Select'
import { apiRegistroModificacion } from '../../api'
import { remove, set, get } from 'local-storage'
import { apiPath } from '../../../consts/path'
import { axiosCreate } from '../../../config/axios'
import { AxiosInstance } from 'axios'
import { objecApi } from '../../../consts/storageConst'
import Swal from 'sweetalert2'

const { Note, ClassShedule } = objecApi

import { USER_SESSION } from '../../../consts/storageConst'

interface detailClass {
  AplicaCompetencia: string
  CarCodigo: string
  CarNombre: string
  ClaCodigo: string
  ClaMetodoEducativo: string
  ClaTipo: string
  ClaTopeFaltas: string
  ClaseFull: string
  CurCodigo: string
  CurNombre: string
  SedCodigo: string
  SemCodigo: string
  TipoDoc: string
}

interface alumns {
  CodeAlu: string
  AluPaterno: string
  AluMaterno: string
  AluNames: string
  Career: string
  NroEnrollment: string
  NotePrevious: string
  NoteChange: string
  Reason: string
  ObservationTeacher: string
  State: string
}

const TableDinamic = dynamic(
  () => import('../../../components/UI/molecules/tableDinamic/Table'),
  {
    ssr: false,
  }
)

const index = ({ data }: any) => {
  console.log('DATA_SSR', data)

  const dataInit = {
    CodeAlu: 'N00041207',
    AluPaterno: 'AGREDA',
    AluMaterno: 'PIMENTEL',
    AluNames: 'FIORELLA VICTORIA',
    Career: 'Adm. y Gestión Comercial',
    NroEnrollment: '1',
    NotePrevious: '10',
    NoteChange: '15',
    ObservationTeacher: 'okok',
    Reason: 'Error en calificación de examen',
    State: 'PEN',
  }

  const [Loading, setloading] = useState(false)
  const [dataList, setDataList] = useState<alumns[]>([dataInit])
  const [detailClass, setDetailClass] = useState<detailClass>()

  const COLUMNS = [
    { label: 'Código ', field: 'CodeAlu', sort: 'asc', width: 100 },
    { label: 'Ap. Paterno', field: 'AluPaterno', sort: 'asc', width: 100 },
    { label: 'Ap. Materno', field: 'AluMaterno', sort: 'asc', width: 100 },
    { label: 'Nombres', field: 'AluNames', sort: 'asc', width: 100 },
    { label: 'Carrera', field: 'Career', sort: 'asc', width: 100 },
    // { label: 'Nro. matrícula', field: 'NroEnrollment', sort: 'asc' },
    { label: 'Nota anterior', field: 'NotePrevious', sort: 'asc', width: 120 },
    { label: 'Nota Modificada', field: 'NoteChange', sort: 'asc', width: 120 },
    { label: 'Motivo', field: 'Reason', sort: 'asc', width: 120 },
    {
      label: 'Observación',
      field: 'ObservationTeacher',
      sort: 'asc',
      width: 120,
    },
  ]

  const estados = (estado: string) => {
    switch (estado.toUpperCase()) {
      case 'PEN':
        return (
          <Label classname="badge bg-warning text-white text-decoration-none me-1">
            Pendiente
          </Label>
        )
        break
      case 'PRO':
        return (
          <Label classname="badge bg-success text-white text-decoration-none me-1">
            Procesado
          </Label>
        )
        break
      case 'CAN':
        return (
          <Label classname="badge bg-secondary text-white text-decoration-none me-1">
            Cancelado
          </Label>
        )
        break
      case 'DES':
        return (
          <Label classname="badge bg-danger text-white text-decoration-none me-1">
            Desaprobado
          </Label>
        )
        break
      case 'NOAP':
        return (
          <Label classname="badge bg-default text-dark text-decoration-none me-1">
            No Aplica
          </Label>
        )
        break
      default:
        return (
          <Label classname="badge bg-warning text-white text-decoration-none me-1">
            Pendiente
          </Label>
        )
        break
    }
  }

  useEffect(() => {
    setDataList(data.result)
    setDetailClass(data.clase)
  }, [])

  return (
    <div className={styles.contenido}>
      <Loader loading={Loading} />
      <div className={styles.content}>
        <div className={styles.titulo}>
          <Label classname="text-warning h5 mt-3 mb-3">
            Detalle de solicitud de modificación de notas nro: {data.RequestId}
          </Label>
        </div>

        <hr />

        <div>
          <Button
            type="button"
            classname="mb-3"
            variant="secondary"
            onclick={() => {
              location.href = `/solicitud-de-modificacion`
            }}
          >
            Regresar
          </Button>
        </div>

        <hr />

        <div
          className={styles.tablaRA}
          style={{ textAlign: 'left' }}
        >
          <Tabla classname={styles.tabla}>
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
                <td>{detailClass?.SemCodigo}</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold' }}>Sede</td>
                <td>{detailClass?.SedCodigo}</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold' }}>Carrera</td>
                <td>{detailClass?.CarNombre}</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold' }}>Código de curso</td>
                <td>{detailClass?.CurCodigo}</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold' }}>Nombre del curso</td>
                <td>{detailClass?.CurNombre}</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold' }}>Clase</td>
                <td>{detailClass?.ClaCodigo}</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold' }}>Tipo de clase</td>
                <td>{detailClass?.ClaTipo}</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold' }}>Estado de la Solicitud</td>
                <td>{estados(dataList[0]?.State)}</td>
              </tr>
            </Tbody>
          </Tabla>
        </div>

        <hr />

        <div className="m-auto text-center">
          <label className="text-dark text-regular h5 mt-2 mb-2 text-center m-auto">
            Listado de Alumnos
          </label>
        </div>

        <hr />

        <div
          className={styles.tabla}
          id="tablaDinamica"
        >
          <TableDinamic
            columns={COLUMNS}
            listData={dataList}
          />
        </div>
      </div>
    </div>
  )
}

export default index

export async function getServerSideProps(context: any) {
  const { query } = context

  //   console.log('QUERTY', query)

  const { params } = query

  try {
    const apiCall2: AxiosInstance = axiosCreate(ClassShedule)
    const URL2 = apiPath.registroModificacionNotas.PATH_GetTeachersCorses(
      params[1]
    )
    const data2 = await apiCall2(URL2)
    const resultClase = data2.data.detail.filter(
      (item: any) => item.ClaCodigo === params[2]
    )

    // const detail: any = await getDetallesResumen(ControlClaseID, recuperationId)
    const apiCall: AxiosInstance = axiosCreate(Note)
    const URL = apiPath.registroModificacionNotas.PATH_detail(params[0])
    const { data } = await apiCall(URL)
    const result = data.detail
    console.log('PARAMS_DETAIL_', result)

    return {
      props: {
        data: { result, RequestId: params[0], clase: resultClase[0] },
      },
    }
  } catch (error: any) {
    //   console.log(error)
    const msg = error?.response?.data?.message
    return {
      props: { data: JSON.stringify({ msg, status: error.response?.status }) },
    }
  }
}
