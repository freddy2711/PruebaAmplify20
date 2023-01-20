/* eslint-disable react-hooks/exhaustive-deps */
import Label from '../../components/UI/atoms/label/Label'
import RecuperarButtons from '../../components/UI/molecules/recuperarButtons/RecuperarButtons'
import styles from '../../components/templates/recuperarAdelantar/recuperar/Recuperar.module.scss'
import { useEffect, useState } from 'react'
import { apiRecuperarAdelantar } from '../api'
import moment from 'moment'
import Loader from '../../components/UI/atoms/loader/Loader'
import dynamic from 'next/dynamic'
import { get, set } from 'local-storage'
import { LST_RECOVERY_SELECTED, USER_SESSION } from '../../consts/storageConst'
import { redirectRouter } from '../../helpers/routerRedirect'
import { catchingErrorFront } from '../../helpers/helpers'

const TableDinamic = dynamic(
  () => import('../../components/UI/molecules/tableDinamic/Table'),
  {
    ssr: false,
  }
)

const Recuperar = () => {
  const [dataListRecovery, setdataListRecovery] = useState([])
  const [Loading, setloading] = useState(false)
  const [Clicked, setClicked] = useState(false)
  const teacherCode = get(USER_SESSION)
  const pend = '0'

  const COLUMNS_RECOVERY = [
    { label: 'Editar', field: 'select', sort: 'asc' },
    { label: 'Número', field: 'Numero', sort: 'asc' },
    { label: 'Sede', field: 'SedCodigo', sort: 'asc' },
    { label: 'Semestre', field: 'SemCodigo', sort: 'asc' },
    { label: 'Clase', field: 'ClaCodigo', sort: 'asc' },
    { label: 'Curso', field: 'CurCodigo', sort: 'asc' },
    { label: 'Carrera', field: 'CarNombre', sort: 'asc' },
    { label: 'Fecha perdida', field: 'RecFechaPerdida', sort: 'asc' },
    { label: 'Fecha recuperación', field: 'RecFechaRecuperacion', sort: 'asc' },
    { label: 'Horas', field: 'Horas', sort: 'asc' },
    { label: 'Estado', field: 'RecEstado', sort: 'asc' },
    { label: 'Cod Reserva Ubooking', field: 'BookingId', sort: 'asc' },
  ]

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const GetApiRecovery = async (teacherCode: any, pend: any) => {
    try {
      setloading(true)
      const ListRecovery: any = await apiRecuperarAdelantar.listGetRecovery(
        teacherCode,
        pend
      )
      formatedDataRecovery(ListRecovery, setdataListRecovery)
      setloading(false)
    } catch (error: any) {
      catchingErrorFront(error.message)
      setloading(false)
    }
  }

  const formatedDataRecovery = (obj: any, setstate: any) => {
    const items = obj.map((item: any) => {
      const RecFechaPerdida = new Date(item.RecFechaPerdida)
      let RecFechaRecuperacion: any = item.RecFechaRecuperacion
      RecFechaRecuperacion = RecFechaRecuperacion.split('-')
      item.RecFechaRecuperacion =
        RecFechaRecuperacion[0] +
        '-' +
        RecFechaRecuperacion[1] +
        '-' +
        RecFechaRecuperacion[2]
      item.RecFechaPerdida = moment(RecFechaPerdida).format('DD-MM-YYYY')
      return item
    })

    const rows = items.map((item: any, index: number) => ({
      ...item,
      select: (
        <a
          key={index}
          rel="noreferrer"
          className="text-decoration-none text-center w-100 d-block"
          style={{ cursor: 'pointer' }}
          onClick={() => RowSeletec(item)}
        >
          Editar
        </a>
      ),
    }))
    setstate(rows)
  }

  const getdata = () => {
    if (Clicked === false) GetApiRecovery(teacherCode, '1')
    else GetApiRecovery(teacherCode, pend)
  }

  const RowSeletec = (Data: any) => {
    set(LST_RECOVERY_SELECTED, JSON.stringify(Data))
    redirectRouter('/recuperar-adelantar/editar', setloading)
  }

  const BTNAddNew = () => {
    redirectRouter('/recuperar-adelantar/registrar', setloading)
  }

  useEffect(() => {
    const Load = async () => {
      try {
        await GetApiRecovery(teacherCode, pend)
      } catch (error: any) {
        catchingErrorFront(error.message)
        setloading(false)
      }
    }
    Load()
  }, [])

  return (
    <div className={styles.contenido}>
      <Loader loading={Loading} />
      <div className={styles.content}>
        <div className={styles.titulo}>
          <Label classname="text-warning h5 mt-3 mb-3">
            Recuperar/Adelantar clases
          </Label>
        </div>

        <hr />

        <div className={styles.botones}>
          <RecuperarButtons
            btnOnclick={BTNAddNew}
            onChange={() => setClicked(!Clicked)}
            onclickcheck={getdata}
          />
        </div>

        <hr />

        <div className={styles.tabla}>
          <TableDinamic
            columns={COLUMNS_RECOVERY}
            listData={dataListRecovery}
          />
        </div>

        <div>
          <small>
            <strong>Tipo docente: (P)</strong> Principal / <strong>(S)</strong>{' '}
            Sustituto / <strong>(A)</strong> Auxiliar
          </small>
          <br />
          <small>
            <strong>Estado solicitud: (I)</strong> Solicitada /{' '}
            <strong>(P)</strong> Programada / <strong>(A)</strong> Anulada /{' '}
            <strong>(E)</strong> Ejecutada
          </small>
        </div>
      </div>
    </div>
  )
}

Recuperar.title = 'Recuperar/Adelantar clases - Portal Docentes'
export default Recuperar
