import { useEffect, useState } from 'react'
import Router from 'next/router'
import Button from '../../components/UI/atoms/button/Button'
import Label from '../../components/UI/atoms/label/Label'
import styles from '../../components/templates/ingresoNotas/IngresoNotas.module.scss'
import dynamic from 'next/dynamic'
import Loader from '../../components/UI/atoms/loader/Loader'
// import getAlert from '../../hooks/jspdf/alertify'
import { set, get, remove } from 'local-storage'
import { apiNotes } from '../api/index'
import {
  callErrorValid,
  // TITLE_EMERG,
  // MSM_NOTAS_MAIL_ERROR,
  // MSM_NOTAS_MAIL_OK,
  SET_DATA_DOCENTE,
  SET_NOTES_SELECT,
  // SET_SEMESTERCODE,
  // convertStringToDateTime,
  // convertStringToDate,
} from '../../consts/storageConst'

const TableDinamic = dynamic(
  () => import('../../components/UI/molecules/tableDinamic/Table'),
  {
    ssr: false,
  }
)
// const Alerta = dynamic(() => import('../../components/UI/atoms/alert/Alerts'), {
//   ssr: false,
// })

const COLUMNS = [
  { label: 'Seleccionar clase', field: 'Seleccionar', sort: 'asc' },
  { label: 'Semestre', field: 'semestCode', sort: 'asc' },
  { label: 'Sede', field: 'sedeCode', sort: 'asc' },
  { label: 'Clase', field: 'classCode', sort: 'asc' },
  { label: 'Tipo doc.', field: 'typeDoc', sort: 'asc' },
  { label: 'Cód. curso', field: 'curCode', sort: 'asc' },
  { label: 'Nombre del curso', field: 'curName', sort: 'asc' },
  { label: 'Carrera', field: 'raceName', sort: 'asc' },
  { label: 'Tipo Clase', field: 'send', sort: 'asc' },
]
const EnviarNotas = () => {
  const [Loading, setloading] = useState(true)
  const dataUser: any = get(SET_DATA_DOCENTE)
  const [listCourse, setlistCourse] = useState([])

  useEffect(() => {
    console.log('dataUser', dataUser)

    remove(SET_NOTES_SELECT)
    fecthNotesSendClass(dataUser?.code)
  }, [])

  const LinkButton = (row: any) => {
    return (
      <Button
        type="button"
        onclick={() => linkRedirect(row)}
        classname="text-decoration-none text-warning"
      >
        Enviar notas
      </Button>
    )
  }

  const linkRedirect = async (row: any) => {
    set(SET_NOTES_SELECT, row)
    Router.push('./enviar-notas/envnotassel')
  }

  const fecthNotesSendClass = async (codeUser: any) => {
    const result = await apiNotes.ByNotesSendClass(codeUser)
    if (callErrorValid(result, setloading) === undefined) return
    const rows = result.map((item: any) => ({
      ...item,
      Seleccionar: LinkButton(item),
    }))
    setlistCourse(rows)
    setloading(false)
  }
  return (
    <div className={styles.contenido}>
      <Loader loading={Loading} />
      <div className={styles.content}>
        <div className={styles.titulo}>
          <Label classname="text-warning h5 mt-3 mb-3">
            Envío de notas a Secretaría Académica
          </Label>
        </div>

        <hr />

        <div className={styles.tabla}>
          <TableDinamic
            columns={COLUMNS}
            listData={listCourse}
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

export default EnviarNotas
