/* eslint-disable array-callback-return */

import Label from '../../components/UI/atoms/label/Label'
import Tbody from '../../components/UI/molecules/table/tbody/Tbody'
import Thead from '../../components/UI/molecules/table/thead/Thead'
import Tabla from '../../components/UI/organisms/table/Tabla'
import styles from '../../components/templates/logsToken/LogsToken.module.scss'
import { useEffect, useState } from 'react'
import { apiLogCreate } from '../api'
import { get } from 'local-storage'
import { SET_SEMESTERCODE, SET_TEACHERCODE } from '../../consts/storageConst'
import Loader from '../../components/UI/atoms/loader/Loader'
import moment from 'moment'
import dynamic from 'next/dynamic'
import Swal from 'sweetalert2'

const TableDinamic = dynamic(
  () => import('../../components/UI/molecules/tableDinamic/Table'),
  {
    ssr: false,
  }
)

const LogsCreacion = () => {
  const [Loading, setloading] = useState(false)
  const [listTokenActive, setlistTokenActive] = useState<any>([])
  const [listTokenGenerat, setlistTokenGenerat] = useState<any>([])
  const UserCode =
    get(SET_TEACHERCODE) === null ? 'N00011885' : get(SET_TEACHERCODE)
  const SemesterCode =
    get(SET_SEMESTERCODE) === null || get(SET_SEMESTERCODE) === '' ? '2022-1' : get(SET_SEMESTERCODE)

  const COLUMNS_RECOVERY = [
    { label: 'Fecha Solicitud', field: 'DateSolicitud', sort: 'asc' },
    { label: 'Hora Solicitud', field: 'HourSolic', sort: 'asc' },
    { label: 'Activo', field: 'state', sort: 'asc' },
  ]

  const ApilistTokenActive = async (
    userCode: any,
    semesterCode: any,
    limitState: any
  ) => {
    const response = await apiLogCreate.listTokenActive(
      userCode,
      semesterCode,
      limitState
    )
    return response
  }

  const ApilistTokenGenerat = async (userCode: any, semesterCode: any) => {
    const response = await apiLogCreate.listTokenGenerate(
      userCode,
      semesterCode
    )
    return response
  }

  // apis

  const FormatedValueTokenActive = (value: any) => {
    if (value !== undefined) {
      const date = new Date(value)
      return `${moment(date).format('DD-MM-YYYY')}, ${convertTimeto24(
        moment(date).format('HH:mm')
      )}`
    } else {
      return 'DD-MM-YYYY'
    }
  }

  const FormatedTokenGeneratData = (obj: any, state: any) => {
    const row = obj.map((item: any) => {
      const date = new Date(item.date)
      item.DateSolicitud = moment(date).format('DD-MM-YYYY')
      item.HourSolic = convertTimeto24(moment(date).format('HH:mm'))
      item.state = item.state === false ? 'No' : 'Si'
      return item
    })
    state(row)
  }

  // formateos

  const convertTimeto24 = (time: any) => {
    const response = time.split('.')
    if (time !== '') {
      if (parseInt(response[0]) >= 12) return `${response[0]} pm`
      else return `${response[0]} am`
    }
    return ''
  }

  const ViewMessage = (StateMessage: any) => {
    switch (StateMessage) {
      case 0:
        return Swal.fire({
          title: 'Portal de Docentes',
          text: `No se encontro logs de tokens activos para este usuario.`,
          icon: 'warning',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK',
        })
      default:
        break
    }
  }

  // metodos

  useEffect(() => {
    const Load = async () => {
      setloading(true)
      const TokenActiveData = await ApilistTokenActive(
        UserCode,
        SemesterCode,
        1
      )
      setlistTokenActive(TokenActiveData[0])
      const TokenGeneratData = await ApilistTokenGenerat(UserCode, SemesterCode)
      console.log("TokenGeneratData",TokenGeneratData)
      if (TokenGeneratData.length !== 0)
        FormatedTokenGeneratData(TokenGeneratData, setlistTokenGenerat)
      else ViewMessage(0)
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
            Logs Token de Notas
          </Label>
        </div>

        <hr />

        <div className={styles.tabla}>
          <Tabla>
            <Thead>
              <th
                scope="col"
                colSpan={2}
              >
                TOKEN ACTIVO Semestre {listTokenActive?.semesterCode}
              </th>
            </Thead>
            <Tbody>
              <tr>
                <td>Fecha Solicitud</td>
                <td>{FormatedValueTokenActive(listTokenActive?.date)}</td>
              </tr>
            </Tbody>
          </Tabla>
        </div>

        <div className={styles.subtitle}>
          <span>
            Lista de Token Generados Semestre {listTokenActive?.semesterCode}
          </span>
        </div>

        <div className={styles.tabla}>
          <TableDinamic
            columns={COLUMNS_RECOVERY}
            listData={listTokenGenerat}
          />
        </div>
      </div>
    </div>
  )
}

export default LogsCreacion
