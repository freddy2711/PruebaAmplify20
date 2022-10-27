/* eslint-disable react/jsx-key */
import Alerta from '../../components/UI/atoms/alert/Alerts'
import Label from '../../components/UI/atoms/label/Label'
import styles from '../../components/templates/reports/Report.module.scss'
import Tbody from '../../components/UI/molecules/table/tbody/Tbody'
import Thead from '../../components/UI/molecules/table/thead/Thead'
import Tabla from '../../components/UI/organisms/table/Tabla'
import { Fragment, useEffect, useState } from 'react'
import { apiReportesAcademicos } from '../api'
import Loader from '../../components/UI/atoms/loader/Loader'
import Swal from 'sweetalert2'
import { set } from 'local-storage'
import {
  CLASEID_REPORTES,
  LST_SELECTED_COURSE,
} from '../../consts/storageConst'
import Router from 'next/router'

const index = () => {
  const [Loading, setloading] = useState(false)
  const [TeacherCoursesData, setTeacherCoursesData] = useState<any>([])
  const [TeacherTutoriaData, setTeacherTutoriaData] = useState<any>([])
  const [ViewPanelTutoria, setViewPanelTutoria] = useState(false)
  const [ViewPanelCourses, setViewPanelCourses] = useState(true)
  const [active, setActive] = useState()
  const teacherCodeVal = 'N00011885'

  const ApiTeacherCorses = async () => {
    const response = await apiReportesAcademicos.listCourseTeacher(
      teacherCodeVal
    )
    setTeacherCoursesData(response)
    return response
  }

  const ApiTeacherTutoria = async () => {
    const response = await apiReportesAcademicos.listTutoria(teacherCodeVal)
    setTeacherTutoriaData(response)
    return response
  }

  // apis

  const ValidateLoad = (CountCorses: number, Counttutorships: number) => {
    if (CountCorses === 0 && Counttutorships === 0) {
      ViewMessage(0)
      setViewPanelTutoria(false)
      setViewPanelCourses(false)
    } else if (CountCorses === 0 && Counttutorships > 0) {
      setViewPanelTutoria(true)
      setViewPanelCourses(false)
    } else if (CountCorses > 0 && Counttutorships === 0) {
      setViewPanelTutoria(false)
      setViewPanelCourses(true)
    }
  }

  // validate

  const lstTeacherCourses = () =>
    Object.entries(TeacherCoursesData).map(([key, x]: any) => {
      return (
        <Fragment key={Math.random()}>
          <tr
            key={key}
            onClick={() => setActiveRow(key)}
            className={key === active ? styles.ClickTabla : undefined}
          >
            <td
              onClick={() => SendData(x)}
              className={styles.ClickText}
              key={Math.random()}
            >
              Selecionar
            </td>
            <td key={Math.random()}>{x.SedCodigo}</td>
            <td key={Math.random()}>{x.SedCodigo}</td>
            <td key={Math.random()}>{x.ClaCodigo}</td>
            <td key={Math.random()}>{x.TipoDoc}</td>
            <td key={Math.random()}>{x.CurCodigo}</td>
            <td key={Math.random()}>{x.CurNombre}</td>
            <td key={Math.random()}>{x.CarNombre}</td>
            <td key={Math.random()}>{x.AplicaCompetencia}</td>
          </tr>
          {key === active ? bloqueLinks(x) : null}
        </Fragment>
      )
    })

  const lstTutoria = () =>
    Object.entries(TeacherTutoriaData).map(([key, x]: any) => {
      return (
        <Fragment key={Math.random()}>
          <tr
            key={key}
            onClick={() => setActiveRow(key)}
            className={key === active ? styles.ClickTabla : undefined}
          >
            <td
              onClick={() => SendData(x)}
              className={styles.ClickText}
              key={Math.random()}
            >
              Selecionar
            </td>
            <td key={Math.random()}>{x.SedCodigo}</td>
            <td key={Math.random()}>{x.SedCodigo}</td>
            <td key={Math.random()}>{x.ClaCodigo}</td>
            <td key={Math.random()}>{x.CurCodigo}</td>
            <td key={Math.random()}>{x.CurNombre}</td>
            <td key={Math.random()}>{x.CarNombre}</td>
          </tr>
          {key === active ? bloqueLinks(x) : null}
        </Fragment>
      )
    })

  const SendData = (item: any) => {
    set(LST_SELECTED_COURSE, JSON.stringify(item))
  }

  const bloqueLinks = (Data: any) => (
    <tr key={Math.random()}>
      <td colSpan={8}>
        <div>
          <a
            onClick={() => ReportAsiste(Data)}
            className={styles.ClickTextEnlace}
            key={Math.random()}
            href="#"
          >
            Reporte de asistencia
          </a>
          <a
            onClick={() => ReportNotas(Data)}
            className={styles.ClickTextEnlace}
            key={Math.random()}
            href="#"
          >
            Reporte de notas
          </a>
          <a
            onClick={() => ReportResultEsta(Data)}
            className={styles.ClickTextEnlace}
            key={Math.random()}
            href="#"
          >
            Clases: Resultados y Estadísticas
          </a>
          <a
            onClick={() => ReportCompetencias(Data)}
            className={styles.ClickTextEnlace}
            key={Math.random()}
            href="#"
          >
            Reporte de evaluación de competencias
          </a>
        </div>
      </td>
    </tr>
  )

  const ViewMessage = (IdMessage: number) => {
    switch (IdMessage) {
      case 0:
        return Swal.fire({
          title: 'Portal de Docentes',
          text: `No se encontraron clases asignadas`,
          icon: 'warning',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK',
        })
      case 1:
        return Swal.fire({
          title: 'Portal de Docentes',
          text: `Seleccione una clase`,
          icon: 'warning',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK',
        })
      default:
        break
    }
  }

  const setActiveRow = (id: any) => {
    setActive(id)
  }

  const ReportAsiste = (data: any) => {
    if (data.ClaCodigo === '') {
      ViewMessage(1)
    } else {
      set(CLASEID_REPORTES, data.ClaCodigo)
    }
    Router.push('/reportes-academicos/ReporteAsistencia')
  }

  const ReportNotas = (data: any) => {
    if (data.ClaCodigo === '') {
      ViewMessage(1)
    } else {
      set(CLASEID_REPORTES, data.ClaCodigo)
    }
    Router.push('/reportes-academicos/ReporteNotas')
  }

  const ReportResultEsta = (data: any) => {
    if (data.ClaCodigo === '') {
      ViewMessage(1)
    } else {
      set(CLASEID_REPORTES, data.ClaCodigo)
    }
    Router.push('/reportes-academicos/ReporteEstadisticas')
  }

  const ReportCompetencias = (data: any) => {
    if (data.ClaCodigo === '') {
      ViewMessage(1)
    } else {
      set(CLASEID_REPORTES, data.ClaCodigo)
    }
    Router.push('/reportes-academicos/ReporteCompetencias')
  }

  // funciones

  useEffect(() => {
    const Load = async () => {
      setloading(true)
      const CountCorses = await ApiTeacherCorses()
      const CountTutorships = await ApiTeacherTutoria()
      ValidateLoad(CountCorses.length, CountTutorships.length)
      setloading(false)
    }

    Load()
  }, [])

  return (
    <div className={styles.contenido}>
      <Loader loading={Loading} />
      <div className={styles.content}>
        <div className={styles.titulo}>
          <Label classname="text-warning h5 mt-3 mb-3">Reportes</Label>
        </div>
        <hr />

        <div className={styles.alertaContent}>
          <Alerta
            classname="w-100"
            variant="info"
          >
            <p className="mb-0">
              Para poder visualizar los reportes, primero debe seleccionar una
              clase, haciendo click en el botón {'"Seleccionar"'} ubicado en la
              columna izquierda de los resultados mostrados.
            </p>
          </Alerta>
        </div>

        <hr />

        {ViewPanelCourses === true ? (
          <>
            <div className={styles.tabla}>
              <Tabla>
                <Thead>
                  <th scope="col">Seleccionar clase</th>
                  <th scope="col">Semestre</th>
                  <th scope="col">Sede</th>
                  <th scope="col">Clase</th>
                  <th scope="col">Tipo Doc.</th>
                  <th scope="col">Cód. curso</th>
                  <th scope="col">Nombre del curso</th>
                  <th scope="col">Carrera</th>
                  <th scope="col">Aplica Evaluación de Competencias</th>
                </Thead>
                <Tbody>
                  {TeacherCoursesData.length > 0 ? (
                    lstTeacherCourses()
                  ) : (
                    <tr key={Math.random()}>
                      <td key={Math.random()}>vacio</td>
                    </tr>
                  )}
                </Tbody>
              </Tabla>
            </div>

            <br />
          </>
        ) : null}

        {ViewPanelTutoria === true ? (
          <>
            <div className={styles.titulo}>
              <Label classname="text-warning h5 mt-3 mb-3">
                Clases asignadas por tutoría
              </Label>
            </div>

            <div className={styles.tabla}>
              <Tabla>
                <Thead>
                  <th scope="col">Seleccionar clase</th>
                  <th scope="col">Semestre</th>
                  <th scope="col">Sede</th>
                  <th scope="col">Clase</th>
                  <th scope="col">Cód. curso</th>
                  <th scope="col">Nombre del curso</th>
                  <th scope="col">Carrera</th>
                </Thead>
                <Tbody>
                  {TeacherTutoriaData.length > 0 ? (
                    lstTutoria()
                  ) : (
                    <tr key={Math.random()}>
                      <td key={Math.random()}>vacio</td>
                    </tr>
                  )}
                </Tbody>
              </Tabla>
            </div>
          </>
        ) : null}

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

index.title = 'Reportes - Portal Docentes'
export default index
