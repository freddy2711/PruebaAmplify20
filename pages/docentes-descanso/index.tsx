/* eslint-disable no-useless-return */
// import Router from 'next/router'
import { useEffect, useState } from 'react'
import Router from 'next/router'
import Label from '../../components/UI/atoms/label/Label'
import Input from '../../components/UI/atoms/input/Input'
import Button from '../../components/UI/atoms/button/Button'
import styles from '../../components/templates/docenteDescanso/Descanso.module.scss'
// import { get } from 'local-storage'
import Loader from '../../components/UI/atoms/loader/Loader'
import { apiDescanso } from '../api/index'
import dynamic from 'next/dynamic'
import {
  callErrorValid,
  convertStringToDate,
  SET_DESCANSO_SELECT,
  SET_DESCANSO_SOLICITUD,
  SET_TEACHER_BREAK,
  // SET_DATA_DOCENTE,
  // SET_IMG_BASE64,
} from '../../consts/storageConst'
import 'moment/locale/es'
import { set } from 'local-storage'

const TableDinamic = dynamic(
  () => import('../../components/UI/molecules/tableDinamic/Table'),
  {
    ssr: false,
  }
)

const COLUMNS = [
  { label: 'Nro Solicitud', field: 'numberSolicite', sort: 'asc' },
  { label: 'Fecha', field: 'dateSolicite', sort: 'asc' },
  { label: 'Estado', field: 'state', sort: 'asc' },
  { label: 'Aprobado Por', field: 'objapprover.idTeacher', sort: 'asc' },
]
const dateTeacherContext = {
  nameTeacher: '',
  codeSemester: '',
  startSemester: '',
  endSemester: '',
}

const DescansoDocente = () => {
  const [Loading, setloading] = useState(false)
  const [listsSolicitud, setListsSolicitud] = useState([])
  const [dateTeacher, setDateTeacher] = useState(dateTeacherContext)

  const dateNow = convertStringToDate(new Date())
  const ValidService = async () => {
    const codeUser: string = 'N00180912'
    const rs3: any = await apiDescanso.TeacherBreak(codeUser)
    if (callErrorValid(rs3, setloading) === undefined) return
    setDateTeacher(rs3[0])
    set(SET_TEACHER_BREAK, rs3[0])

    const obj2: any = {
      codeTeacher: rs3[0].codeTeacher,
      codeSemester: rs3[0].idSemester,
      idSemester: rs3[0].idSemester,
      datetramit: dateNow,
    }
    set(SET_DESCANSO_SELECT, obj2)
    const rs4: any = await apiDescanso.RequestWorker(obj2)
    if (callErrorValid(rs4, setloading) === undefined) return
    setListsSolicitud(rs4)
    set(SET_DESCANSO_SOLICITUD, rs4)
  }

  useEffect(() => {
    ValidService()
  }, [])

  const handleActualiza = () => {
    Router.push('./docentes-descanso/descansoactualiza')
  }

  return (
    <div className={styles.contenido}>
      <Loader loading={Loading} />
      <div className={styles.content}>
        <div className={styles.titulo}>
          <Label classname="text-warning h5 mt-3 mb-3">
            Registro de día de descanso - Docente Virtual
          </Label>
        </div>
        <hr />

        <div className="col-12 row mt-3">
          <div className="col-md-6 ">
            <Label>Docente :</Label>
            <Input
              id="txtnameTeacher"
              name="txtnameTeacher"
              type="text"
              placeholder="Docente"
              value={dateTeacher?.nameTeacher}
              classname={styles.centerInput}
              disabled={true}
            />
          </div>
          <div className="col-md-6 ">
            <Label>Semestre :</Label>
            <Input
              id="txtcodeSemester"
              name="txtcodeSemester"
              type="text"
              placeholder="Semestre"
              value={dateTeacher?.codeSemester}
              classname={styles.centerInput}
              disabled={true}
            />
          </div>
        </div>
        <div className="col-12 row mt-3">
          <div className="col-md-6 mb-3">
            <Label>Fecha Inicio :</Label>
            <Input
              id="txtstartSemester"
              name="txtstartSemester"
              type="text"
              placeholder="Fecha Inicio "
              value={dateTeacher?.startSemester}
              classname={styles.centerInput}
              disabled={true}
            />
          </div>
          <div className="col-md-6">
            <Label>Fecha Fin :</Label>
            <Input
              id="txtendSemester"
              name="txtendSemester"
              type="text"
              placeholder="Fecha Fin"
              value={dateTeacher?.endSemester}
              classname={styles.centerInput}
              disabled={true}
            />
          </div>
        </div>
        <div className="col-6 row mt-3 mb-3">
          <div className="form-group  col-md-6 mb-3">
            <Button
              type="button"
              variant="info"
              onclick={() => handleActualiza()}
            >
              Actualiza día de descanso.
            </Button>
          </div>
        </div>

        <div className="col-6 row mb-1">
          <div className="form-group  col-md-6">
            Estado de solicitudes enviadas:
          </div>
        </div>
        <hr />

        <div className={styles.tablaCenter}>
          <TableDinamic
            columns={COLUMNS}
            listData={listsSolicitud}
          />
        </div>
      </div>
    </div>
  )
}

DescansoDocente.title = 'Descanso Docente'

export default DescansoDocente
