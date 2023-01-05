/* eslint-disable camelcase */
import Router from 'next/router'
import { useEffect, useState } from 'react'
import Alerta from '../../components/UI/atoms/alert/Alerts'
import Button from '../../components/UI/atoms/button/Button'
import Label from '../../components/UI/atoms/label/Label'
import Tbody from '../../components/UI/molecules/table/tbody/Tbody'
import Thead from '../../components/UI/molecules/table/thead/Thead'
import Tabla from '../../components/UI/organisms/table/Tabla'
import styles from '../../components/templates/asistencia/registrar/RegistroAsistencia.module.scss'
import { apiRegister } from '../api/index'
import Loader from '../../components/UI/atoms/loader/Loader'
import { get } from 'local-storage'
import { RECOVERSELECT, convertStringToDate } from './../../consts/storageConst'

const RegistroAsistencia = () => {
  const initialStateTEacher = [
    {
      ConClassDate: '',
      ConClassTypeClass: '',
      ConClassCode: '',
      CourseCode: '',
      CourseName: '',
      SedCode: '',
      ConClassInitial: '',
      AbsenceLimit: 0,
      ConClassId: 0,
      ConClassTeacherType: '',
      Owner: '',
    },
  ]

  const initialStateSummary = [
    {
      Asistentes: 0,
      Faltantes: 0,
      Habilitados: 0,
      Matriculados: 0,
    },
  ]

  const [teacher, setControlTeacher] = useState(initialStateTEacher)
  const [summary, setSummaryTeacher] = useState(initialStateSummary)
  const [tAsisten, setTAsisten] = useState(true)
  const [vAsisten, setVAsisten] = useState(true)
  const [Loading, setloading] = useState(false)
  const dataRecover: any = get(RECOVERSELECT)

  const fetchControl = async (obj: any) => {
    const resp = await apiRegister.ByControl(obj)
    resp[0]?.SedCode === undefined ? setTAsisten(true) : setTAsisten(false)
    resp[0]?.SedCode === undefined ? setVAsisten(true) : setVAsisten(false)
    setControlTeacher(resp)
  }

  const fetchSummary = async (code: any) => {
    const resp = await apiRegister.AttendanceSummary(code)
    setSummaryTeacher(resp)
    setloading(false)
  }

  useEffect(() => {
    console.log('dataRecover', dataRecover)

    setloading(true)
    const obj = {
      code: dataRecover?.recuperationId,
      time: 0,
    }
    fetchControl(obj)
    fetchSummary(dataRecover?.recuperationId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const regresar = () => {
    setloading(true)
    Router.back()
  }
  const callVerAsistencias = () => {
    setloading(true)
    Router.push('./ver-asistencia')
  }
  const callTomarAsistencias = () => {
    setloading(true)
    Router.push('./ver-asistencia')
  }
  return (
    <div className={styles.contenido}>
      <Loader loading={Loading} />
      <div className={styles.content}>
        <div className={styles.titulo}>
          <Label classname="text-warning h5 mt-3 mb-3">
            Registro de asistencia
          </Label>
        </div>
        <hr />

        <div className={styles.alertaContent}>
          <Alerta
            classname="w-100"
            variant="info"
          >
            <p className="mb-0">
              <b>Nota:</b> &nbsp;Por defecto todos los alumnos no registran
              ningún estado de asistencia <b>(Asistencia = N)</b>. En listados
              grandes, ir grabando cada cierto tiempo.
            </p>
          </Alerta>
        </div>

        <div className={styles.btnTextContent}>
          <div>
            <Button
              type="button"
              classname="mb-2"
              variant="secondary"
              onclick={() => regresar()}
            >
              Regresar
            </Button>
          </div>
          <div>
            <strong>
              <span>Resumen de asistencia</span>
            </strong>
          </div>
          <div>
            <small>
              <strong>
                <span
                  className={styles.spacingAsisten}
                >{`Matriculados : ${summary[0]?.Matriculados}`}</span>
                <span
                  className={styles.spacingAsisten}
                >{`Habilitados : ${summary[0]?.Habilitados}`}</span>
                <span
                  className={styles.spacingAsisten}
                >{`Asistentes : ${summary[0]?.Asistentes} `}</span>
                <span
                  className={styles.spacingAsisten}
                >{`Tardanzas : ${summary[0]?.Asistentes} `}</span>
                <span
                  className={styles.spacingAsisten}
                >{`Faltas : ${summary[0]?.Faltantes} `}</span>
              </strong>
            </small>
          </div>
        </div>

        <hr />

        <div className={styles.tablaRA}>
          <Tabla>
            <Thead>
              <th
                scope="col"
                colSpan={2}
              >
                DATOS DE LA SESIÓN DE CLASE
              </th>
            </Thead>
            {teacher[0]?.SedCode === undefined ? (
              <Tbody>
                <tr className={styles.tBodyCenter}>
                  No se encontro Registro . . .
                </tr>
              </Tbody>
            ) : (
              <Tbody>
                <tr>
                  <td style={{ fontWeight: 'bold' }}>Sede</td>
                  <td>{teacher[0]?.SedCode}</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 'bold' }}>Código de curso</td>
                  <td>{teacher[0]?.CourseCode}</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 'bold' }}>Nombre del curso</td>
                  <td>{teacher[0]?.CourseName}</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 'bold' }}>Clase</td>
                  <td>{teacher[0]?.ConClassCode}</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 'bold' }}>
                    Dueño de la sesión de clase
                  </td>
                  <td>{teacher[0]?.Owner}</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 'bold' }}>Tipo de docente</td>
                  <td>{teacher[0]?.ConClassTypeClass}</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 'bold' }}>Tope faltas</td>
                  <td>{teacher[0]?.AbsenceLimit}</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 'bold' }}>Fecha y hora de inicio</td>
                  <td>{convertStringToDate(teacher[0]?.ConClassInitial)}</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 'bold' }}>
                    Fecha y hora de término
                  </td>
                  <td>{convertStringToDate(teacher[0]?.ConClassDate)}</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 'bold' }}>Tipo de sesión</td>
                  <td>{teacher[0]?.ConClassTypeClass}</td>
                </tr>
              </Tbody>
            )}
          </Tabla>
        </div>

        <div className={styles.botones}>
          <div>
            <Button
              type="button"
              classname=""
              variant="primary"
              disabled={tAsisten}
              onclick={() => callTomarAsistencias()}
            >
              Tomar asistencia
            </Button>
          </div>
          <div>
            <Button
              type="button"
              classname=""
              variant="secondary"
              disabled={true}
            >
              Cerrar sesión de clase
            </Button>
          </div>
          <div>
            <Button
              type="button"
              classname=""
              variant="secondary"
              disabled={vAsisten}
              onclick={() => callVerAsistencias()}
            >
              Ver Asistencia
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegistroAsistencia

/* export async function getServerSideProps(context: any) {
  // const { query } = context

  // const { codeTeacher, hourDay } = query
  // const dataRecover2 = get('recoverSelect')
  // console.log('context', context)

  try {
    // const control = await axiosfetchPrivate(
    //   `TeacherAttendance/GetControlClass/54619/0`
    // )

    // const summaryTeacher = await axiosfetchPrivate(
    //   `TeacherAttendance/GetAttendanceSummarySession/4468090`
    // )

    return {
      props: {
        // control: control.data.detail,
        // summary: summaryTeacher.data.detail,
        // dataRecover2: dataRecover2,
      },
    }
  } catch (error: any) {
    console.log(error)
    const msg = error.response.data.message
      return {
        props: { data: { msg, status: error.response.status } },
      }
  }
} */
