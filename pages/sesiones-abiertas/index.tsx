import Router from 'next/router'
import { useEffect, useState } from 'react'
import Anchor from '../../components/UI/atoms/anchor/Anchor'
import Label from '../../components/UI/atoms/label/Label'
import Button from '../../components/UI/atoms/button/Button'
import styles from '../../components/templates/sesiones/abiertas/Abiertas.module.scss'
import { get, set } from 'local-storage'
import Loader from '../../components/UI/atoms/loader/Loader'
import { apiSeccionOpen } from '../api/index'
import dynamic from 'next/dynamic'
import {
  DATA_RESUMEN_SELECTED,
  ASISTENCIA,
  CONTROL_CLASE_ID,
  CLASE_ID,
  TIPO_DOCENTE,
  DUENO_SESSION,
  USER_SESSION,
  SET_DATA_DOCENTE,
} from './../../consts/storageConst'
import moment from 'moment'
import 'moment/locale/es'

const TableDinamic = dynamic(
  () => import('../../components/UI/molecules/tableDinamic/Table'),
  {
    ssr: false,
  }
)

const Alerta = dynamic(() => import('../../components/UI/atoms/alert/Alerts'), {
  ssr: false,
})

const COLUMNS = [
  { label: 'Seleccionar clase', field: 'Iniciar', sort: 'asc' },
  { label: 'Clase', field: 'classCode', sort: 'asc' },
  { label: 'Curso', field: 'codeGrade', sort: 'asc' },
  { label: 'Carrera', field: 'nameRace', sort: 'asc' },
  { label: 'Tipo doc.', field: 'typeTeacher', sort: 'asc' },
  { label: 'Tipo de sesión', field: 'typeClass', sort: 'asc' },
  { label: 'Fecha/Hora de inicio', field: 'classInit', sort: 'asc' },
  { label: 'Fecha/Hora de término', field: 'classEnd', sort: 'asc' },
]

const SesionesAbiertas = () => {
  const initialStateSeccionOpen = [
    {
      classControl: 0,
      classCode: 0,
      coclDate: 0,
      typeClass: 0,
      classInit: 0,
      classEnd: 0,
      codeGrade: 0,
      nameRace: 0,
      typeTeacher: 0,
      nameTeacher: 0,
      classInit_Out: 0,
      classEnd_Out: 0,
    },
  ]

  const [seccionOpen, setSeccionOpen] = useState(initialStateSeccionOpen)
  const [Loading, setloading] = useState(false)
  // const dataRecover: any = get('dataUser')
  const DUENO: any = get(SET_DATA_DOCENTE)
  const User = DUENO?.userName

  const formatDate = (fecha: string) => {
    const dateSplit = fecha.split('T')
    const date = `${dateSplit[0]} ${dateSplit[1]}`
    const dateConvert = moment(date).format('DD/MM/YYYY HH:mm')

    return dateConvert
  }

  const fetchSeccionOpen = async (codeUser: any) => {
    try {
      const resp = await apiSeccionOpen.BySeccionOpen(codeUser)

      console.log(resp)

      const rows = resp?.map((item: any) => ({
        ...item,
        classInit:
          item.classInit !== null && typeof item.classInit !== 'object'
            ? formatDate(item.classInit)
            : 0,
        classEnd:
          item.classEnd !== null && typeof item.classEnd !== 'object'
            ? formatDate(item.classEnd)
            : 0,
        Iniciar: LinkButton(item),
        // hourIni: convertStringToDateTime(item.hourIni),
        // hourEnd: convertStringToDateTime(item.hourEnd),
      }))

      setSeccionOpen(rows)
      setloading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    setloading(true)
    fetchSeccionOpen(get(USER_SESSION))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const LinkButton = (row: any) => {
    return (
      <Button
        type="button"
        onclick={() => linkRedirect(row)}
        classname="text-decoration-none text-warning"
      >
        Registrar asistencia
      </Button>
    )
  }

  const linkRedirect = async (row: any) => {
    setloading(true)
    set(DATA_RESUMEN_SELECTED, JSON.stringify(row))
    console.log(row)
    const { Status }: any = await apiSeccionOpen.OpennedSession(
      row.classControl
    )
    console.log(Status)
    if (Status) {
      set(ASISTENCIA, 1)
    } else {
      set(ASISTENCIA, 0)
    }

    set(DUENO_SESSION, User)
    set(CONTROL_CLASE_ID, row.classControl)
    set(CLASE_ID, row.classCode)
    set(TIPO_DOCENTE, row.typeTeacher)

    Router.push('/asistencia/resumen-asistencia')
  }

  return (
    <div className={styles.contenido}>
      <Loader loading={Loading} />
      <div className={styles.content}>
        <div className={styles.titulo}>
          <Label classname="text-warning h5 mt-3 mb-3">Sesiones Abiertas</Label>
        </div>
        <hr />

        <div className={styles.alertaContent}>
          <Alerta
            classname="w-100"
            variant="info"
          >
            <p className="mb-0">
              <b>Nota:</b> &nbsp; Las clases abiertas tendrán 15 minutos
              adicionales sobre la hora programada para que puedan ser cerradas
              con normalidad, de lo contrario tendrá que regularizarla, desde la
              sección &nbsp;
              <b>
                <Anchor
                  href="/solicitud-de-marcacion"
                  classname="text-info text-decoration-none"
                >
                  Solicitud de Marcación.
                </Anchor>
              </b>
            </p>
          </Alerta>
        </div>

        <hr />

        <div className={styles.tablaCenter}>
          <TableDinamic
            columns={COLUMNS}
            listData={seccionOpen}
          />
        </div>
      </div>
    </div>
  )
}

SesionesAbiertas.title = 'Sesiones Abiertas'

export default SesionesAbiertas
