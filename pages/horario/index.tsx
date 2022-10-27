import { useEffect, useState } from 'react'
import styles from '../../components/templates/horario/horario.module.scss'
import HorarioButtons from '../../components/UI/molecules/horario/horarioButtons/HorarioButtons'
import Loader from '../../components/UI/atoms/loader/Loader'
// import autoTable from 'jspdf-autotable'
import GeneratePdf from '../../hooks/jspdf/GeneratePdf'
import { get } from 'local-storage'
import {
  SET_DATA_DOCENTE,
  convertStringToDate,
  convertStringToDateTime,
  SET_IMG_BASE64,
} from '../../consts/storageConst'

import { apiHorario } from '../api/'

import dynamic from 'next/dynamic'
const TableDinamic = dynamic(
  () => import('../../components/UI/molecules/tableDinamic/Table'),
  {
    ssr: false,
  }
)

const COLUMNS = [
  {
    label: 'Rango de horas',
    field: 'HorDescription',
    key: 'HorDescription',
    sort: 'asc',
  },
  { label: 'Lunes', field: 'Lunes', key: 'Lunes', sort: 'asc' },
  { label: 'Martes', field: 'Martes', key: 'Martes', sort: 'asc' },
  { label: 'Miércoles', field: 'Miercoles', key: 'Miercoles', sort: 'asc' },
  { label: 'Jueves', field: 'Jueves', key: 'Jueves', sort: 'asc' },
  { label: 'Viernes', field: 'Viernes', key: 'Viernes', sort: 'asc' },
  { label: 'Sábado', field: 'Sabado', key: 'Sabado', sort: 'asc' },
  { label: 'Domingo', field: 'Domingo', key: 'Domingo', sort: 'asc' },
]
const COLUMNS2 = [
  [
    'Rango de horas',
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado',
    'Domingo',
  ],
]
// const date = new Date()
const Horario = () => {
  const [horarios, setHorarios] = useState([])
  const [horariosArray, setHorariosArray] = useState([])
  const [radioSelect, setRadioSelect] = useState({ r1: true, r2: false })
  const [Loading, setloading] = useState(true)
  const dataUser: any = get(SET_DATA_DOCENTE)
  const imgBase64: any = get(SET_IMG_BASE64)
  const nameXLS = `Horario__${dataUser?.userName}.csv`
  const dateTimeNow = `${convertStringToDate(
    new Date()
  )} ${convertStringToDateTime(new Date())}`
  useEffect(() => {
    const obj = {
      teacherCode: dataUser?.code,
      isEpec: 0,
    }
    fetchteachingTime(obj)
  }, [])
  const radioActive = (e: any) => {
    if (radioSelect.r1) {
      setRadioSelect({ r1: false, r2: true })
    } else {
      setRadioSelect({ r1: true, r2: false })
    }
    setloading(true)
    const obj = {
      teacherCode: dataUser?.code,
      isEpec: e.target.id === 'default_1' ? 0 : 1,
    }
    const promise = apiHorario.teachingTime(obj)
    promise.then((res) => {
      CallActualizaPDFData(res)
      setHorarios(res)
      setloading(false)
    })
  }

  const fetchteachingTime = (obj: any) => {
    const promise = apiHorario.teachingTime(obj)
    promise.then((res) => {
      setHorarios(res)
      setloading(false)
      CallActualizaPDFData(res)
      return res
    })
  }
  const CallActualizaPDFData = async (dataPDF: any) => {
    const dataArray: any = dataPDF.map((_: any) => {
      return [
        _.HorDescription,
        _.Lunes,
        _.Martes,
        _.Miercoles,
        _.Jueves,
        _.Viernes,
        _.Sabado,
        _.Domingo,
      ]
    })
    setHorariosArray(dataArray)
  }

  const CallReportPDF = () => {
    const obj = {
      head: COLUMNS2,
      body: horariosArray,
      imgBase64,
      fecha: dateTimeNow,
      dataUser,
      name: `Horario__${dataUser?.userName}.pdf`,
    }
    GeneratePdf(obj)
  }

  return (
    <div className={styles.contenido}>
      <input
        id="imgBase64"
        type="hidden"
      />
      <Loader loading={Loading} />
      <div className={styles.content}>
        <div className={styles.titulo}>
          <h5 className="text-warning">Horario de Clases</h5>
        </div>
        <hr />
        <div className={`${styles.botones} m-3`}>
          <HorarioButtons
            callReportPDF={CallReportPDF}
            radioActive={radioActive}
            radioSelect={radioSelect}
            horarios={horarios}
            COLUMNS={COLUMNS}
            nameXLS={nameXLS}
            // handleSelectedChange={handleSelectedChange}
          />
        </div>
        <hr className="m-0" />
        <div className={styles.tabla}>
          <TableDinamic
            columns={COLUMNS}
            listData={horarios}
          />
        </div>
      </div>
    </div>
  )
}

export default Horario
