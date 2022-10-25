import { useState, useEffect } from 'react'
import Router from 'next/router'
import Alerta from '../../components/UI/atoms/alert/Alerts'
import Anchor from '../../components/UI/atoms/anchor/Anchor'
import Label from '../../components/UI/atoms/label/Label'
import styles from '../../components/templates/evaluacionComp/EvaluacionComp.module.scss'
import dynamic from 'next/dynamic'
import { apiCompetence } from '../api'
import {
  TEACHERCODE,
  CLASS_SELECTED_EC,
  CB_COMPETENCE,
} from '../../consts/storageConst'
import { get, set } from 'local-storage'
import Loader from '../../components/UI/atoms/loader/Loader'
import Swal from 'sweetalert2'

const TableDinamic = dynamic(
  () => import('../../components/UI/molecules/tableDinamic/Table'),
  {
    ssr: false,
  }
)

const COLUMNS = [
  { label: 'Evaluar', field: 'select', sort: 'asc' },
  { label: 'Semestre', field: 'SemCodigo', sort: 'asc' },
  { label: 'Sede', field: 'SedCodigo', sort: 'asc' },
  { label: 'Clase', field: 'ClaCodigo', sort: 'asc' },
  { label: 'Tipo doc.', field: 'TipoDoc', sort: 'asc' },
  { label: 'Cód. curso', field: 'CurCodigo', sort: 'asc' },
  { label: 'Nombre del curso', field: 'CurNombre', sort: 'asc' },
  { label: 'Carrera', field: 'CarNombre', sort: 'asc' },
  { label: 'TIPO CLASE', field: 'ClaTipo', sort: 'asc' },
]

const EvaluacionComp = () => {
  const handleClickRow = async (e: any, item: any) => {
    e.preventDefault()
    setloading(true)
    console.log(item)
    set(CLASS_SELECTED_EC, JSON.stringify(item))

    try {
      const resp = await apiCompetence.comp_by_class(item.ClaCodigo)
      console.log('ouh_', resp)
      if (resp.length > 1) {
        set(CB_COMPETENCE, JSON.stringify(resp))
        Router.push('/evaluacion-de-competencias/evaluar')
      } else {
        Swal.fire({
          title: 'Portal de Docentes',
          text: `No hay competencias configuradas para la clase seleccionada.`,
          icon: 'warning',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK',
        })
      }
    } catch (error) {
      console.log(error)
    }

    setloading(false)
  }

  const [Loading, setloading] = useState(false)

  const initialState: any = [
    {
      select: '',
      SemCodigo: '',
      SedCodigo: '',
      ClaCodigo: '',
      TipoDoc: '',
      CurCodigo: '',
      CurNombre: '',
      CarNombre: '',
      ClaTipo: '',
    },
  ]

  const [listEvalua, setListEvalua] = useState(initialState)

  useEffect(() => {
    const techarCode: any = get(TEACHERCODE)

    const getList = async () => {
      setloading(true)
      try {
        const resp: any = await apiCompetence.list(techarCode)
        const items = resp.data

        const List = items.map((item: any, index: number) => {
          item.select = (
            <Anchor
              href="/evaluacion-de-competencias/evaluar"
              classname="text-decoration-none text-center w-100 d-block"
              onClick={(e) => handleClickRow(e, item)}
            >
              Evaluar
            </Anchor>
          )

          return item
        })

        setListEvalua(List)
      } catch (error) {
        console.log(error)
      }
      setloading(false)
    }

    getList()
  }, [])

  return (
    <div className={styles.contenido}>
      <Loader loading={Loading} />
      <div className={styles.content}>
        <div className={styles.titulo}>
          <Label classname="text-warning h5 mt-3 mb-3">
            Evaluación de Competencias
          </Label>
        </div>
        <hr />

        <div className={styles.alertaContent}>
          <Alerta
            classname="w-100"
            variant="info"
          >
            <p className="mb-0">
              <b>Nota:</b> &nbsp;Seleccione una clase para evaluar competencias.
            </p>
          </Alerta>
        </div>

        <hr />

        <div className={styles.tabla}>
          <TableDinamic
            columns={COLUMNS}
            listData={listEvalua}
          />
        </div>

        <div>
          <small>
            <strong>Tipo docente: (P)</strong> Principal / <strong>(S)</strong>{' '}
            Sustituto / <strong>(A)</strong> Auxiliar
          </small>
          <br />
          <small>
            <strong>Tipo Clase: (PR)</strong> Presencial / <strong>(VT)</strong>{' '}
            Virtual
          </small>
        </div>
      </div>
    </div>
  )
}

export default EvaluacionComp
