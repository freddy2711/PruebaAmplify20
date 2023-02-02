/* eslint-disable react-hooks/exhaustive-deps */
import Router from 'next/router'
import Alerta from '../../components/UI/atoms/alert/Alerts'
import Label from '../../components/UI/atoms/label/Label'
import Button from '../../components/UI/atoms/button/Button'
import styles from './../../components/templates/default/Default.module.scss'
import Loader from '../../components/UI/atoms/loader/Loader'
import getAlert from '../../hooks/jspdf/alertify'
import { apiSeccionOpen, apiHome, apiLogin } from './../api/index'
import { useContext, useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { set, remove, get } from 'local-storage'
import {
  SET_SEMESTERCODE,
  convertStringToDate,
  convertStringToDateTime,
  timeDiffCalc,
  AddMin,
  CONTROL_CLASE_ID,
  ASISTENCIA,
  RECUPERACION_ID,
  TITLE_EMERG,
  MSM_NO_ENUENTRA,
  TIPO_DOCENTE,
  MSM_TENGA_PRESENTE,
  MSM_REGISTRO_ASISTENCIA,
  MSM_REGISTRO_BIOMETRICO,
  MSM_NO_EXISTE_HORARIO,
  MSM_SE_SUPERA_PLAZO,
  CIERRE_SIN_ASIST,
  FECHA_SECCION_NOW,
  ACCESO_MARC_CLAS_DOC,
  MSM_SESION_FIN,
  SET_FECHA_ORIGEN,
  SET_DATA_DOCENTE,
  SET_RECOVER_SELECT,
  SET_DT_ASISTENCE,
  TIPO_ASISTENCIA,
  REGASI,
  renderizaImageBase64,
  CLASE_ID,
  callErrorValid,
  convertStringToDay,
  RECUPERATION_ID,
  USER_SESSION,
  TOKEN,
  SET_SEMESTERCRONOLOGICO,
  DUENO_SESSION,
} from './../../consts/storageConst'

// import { useCookies } from 'react-cookie'
import { apiPath } from '../../consts/path'
import { redirectRouter } from '../../helpers/routerRedirect'
import UserContext from '../../Context/userContext'

const TableDinamic = dynamic(
  () => import('../../components/UI/molecules/tableDinamic/Table'),
  {
    ssr: false,
  }
)

const COLUMNS = [
  { label: 'Seleccionar clase', field: 'Iniciar', sort: 'asc' },
  { label: 'Sede', field: 'SedeCode', sort: 'asc' },
  { label: 'Semestre', field: 'SemesterCode', sort: 'asc' },
  { label: 'Cód. curso', field: 'cursoCode', sort: 'asc' },
  { label: 'Curso', field: 'cursoName', sort: 'asc' },
  { label: 'Clase', field: 'ClassCodigo', sort: 'asc' },
  { label: 'Hora de Inicio', field: 'hourIni', sort: 'asc' },
  { label: 'Hora Final', field: 'hourEnd', sort: 'asc' },
  { label: 'Carrera', field: 'CarreraName', sort: 'asc' },
  { label: 'Tipo doc.', field: 'cileCode', sort: 'asc' },
]
const COLUMNS2 = [
  { label: 'Click', field: 'Iniciar', sort: 'asc' },
  { label: 'Nro. solicitud', field: 'solRecuperationId', sort: 'asc' },
  { label: 'Sede', field: 'sedeCode', sort: 'asc' },
  { label: 'Semestre', field: 'semesterCode', sort: 'asc' },
  { label: 'Cód. curso', field: 'cursoCode', sort: 'asc' },
  { label: 'Curso', field: 'cursoName', sort: 'asc' },
  { label: 'Clase', field: 'classCode', sort: 'asc' },
  { label: 'Fecha Perdida', field: 'recuperationDateLost', sort: 'asc' },
  { label: 'Hora de Inicio', field: 'hourIni', sort: 'asc' },
  { label: 'Hora Final', field: 'hourEnd', sort: 'asc' },
  { label: 'Carrera', field: 'carreraName', sort: 'asc' },
  { label: 'Tipo doc.', field: 'typeTeacher', sort: 'asc' },
]

let codeUser = ''
const Index = (props: any) => {
  const initialStateByDay = [
    {
      CarreraName: '',
      classCode: '',
      SedeCode: '',
      SemesterCode: '',
      aulaCode: '',
      bdOrigen: '',
      cileCode: '',
      cursoCode: '',
      cursoName: '',
      hourEnd: '',
      hourIni: '',
      hourMinutes: '',
    },
  ]

  const initialStateRecover = [
    {
      recuperationId: 0,
      solRecuperationId: '',
      sedeCode: '',
      semesterCode: '',
      classCode: '',
      typeTeacher: '',
      cursoCode: '',
      cursoName: '',
      carreraName: '',
      recuperationDateLost: '',
      hourIni: '',
      hourEnd: '',
      semCronoCodigo: '',
      indicador: '',
    },
  ]
  const EsAutenticacionBiometrico = null
  // const cookie = useCookies([''])

  const [datosByDay, setDatosByDay] = useState(initialStateByDay)
  const [Loading, setloading] = useState(true)
  const dateNow = convertStringToDate(new Date())
  const [datosRecover, setDatosRecover] = useState(initialStateRecover)
  // const [couplingTemp, setCoupling] = useState({})
  const day = convertStringToDay(new Date())
  const [data, setDataTemp] = useState({
    codeUser: '',
    hourDay: '',
    dataUser: { userName: '' },
    Url: `${apiPath.home.PATH_GetDatosUsuario}${codeUser}`,
    byDay: '',
    recover: {},
    competence: {},
    // coupling: {},
    dateNow,
    day,
    semester: {},
  })
  const [competence, setCompetence] = useState([])

  let iControlClase = '-1'

  const { setUser } = useContext(UserContext)

  const callApiLogin = async (codeTeacher: any, day: any) => {
    // const codeTeacher = 'N00011885'
    codeUser = codeTeacher
    // try {
    const byDayTemp = await apiLogin.ScheduleSession(codeTeacher, day)
    if (callErrorValid(byDayTemp, setloading) === undefined) return

    const dataUserTemp = await apiLogin.DatosUsuario(codeTeacher)
    if (callErrorValid(dataUserTemp, setloading) === undefined) return
    const semesterTemp: any = await apiLogin.TokenCoupling(codeTeacher)
    if (callErrorValid(semesterTemp, setloading) === undefined) return
    set(SET_SEMESTERCODE, semesterTemp[0]?.semesterCode)

    const dataUser2 = dataUserTemp.map((item: any) => ({
      ...item,
      day,
    }))

    const competenceTemp: any = await apiLogin.PendingTeachingCompetence(
      codeTeacher
    )
    if (callErrorValid(competenceTemp, setloading) === undefined) return
    setCompetence(competenceTemp)
    const recoverTemp = await apiLogin.ScheduleRequeperation(
      codeTeacher,
      dateNow
    )
    if (callErrorValid(recoverTemp, setloading) === undefined) return
    const data: any = {
      codeUser: codeTeacher,
      dataUser: dataUser2[0],
      // cookies,
      Url: `${apiPath.home.PATH_GetDatosUsuario}${codeTeacher}`,
      byDay: byDayTemp,
      // recover: recover?.data,
      competence: competenceTemp,
      // coupling: coupling?.data,
      dateNow,
      day,
      semester: semesterTemp === undefined ? [] : semesterTemp,
    }
    await set(SET_SEMESTERCODE, semesterTemp[0]?.semesterCode)
    await set(SET_SEMESTERCRONOLOGICO, semesterTemp[0]?.semesterCode)
    await set(SET_DATA_DOCENTE, dataUser2[0])
    const datateacher: any = dataUser2[0]
    set(DUENO_SESSION, datateacher.userName)
    setUser(dataUser2[0])

    setDataTemp(data)

    if (competence.length > 0) {
      getAlert({
        title: TITLE_EMERG,
        text: MSM_TENGA_PRESENTE(competence?.length),
        confirmButtonText: `Ok`,
      })
    }
    const rows = byDayTemp.map((item: any) => ({
      ...item,
      Iniciar: LinkButton(item, 1),
      hourIni: convertStringToDateTime(item.hourIni),
      hourEnd: convertStringToDateTime(item.hourEnd),
    }))

    setDatosByDay(rows)
    const rows2 = recoverTemp.map((item: any) => ({
      ...item,
      Iniciar: LinkButton(item, 2),
      hourIni: convertStringToDateTime(item.hourIni),
      hourEnd: convertStringToDateTime(item.hourEnd),
      recuperationDateLost: convertStringToDate(item.recuperationDateLost),
    }))
    setDatosRecover(rows2)
    setloading(false)
  }

  // const InserToken = async (obj: any) => {
  //   await apiTokens.ByTokenInsertState(obj)
  //   set(TOKEN_IN, true)
  //   window.location.reload()
  // }

  const callApiLoginSeccion = () => {
    const codeteacher =
      props.data === null || props.data === undefined
        ? get(USER_SESSION) === null || get(USER_SESSION) === undefined
          ? null
          : get(USER_SESSION)
        : props.data

    const token =
      props.tk === null || props.tk === undefined
        ? get(TOKEN) === null || get(TOKEN) === undefined
          ? null
          : get(TOKEN)
        : props.tk

    set(USER_SESSION, codeteacher)
    set(TOKEN, token)

    setTimeout(async () => {
      // console.log('DUENO_SESSION', codeteacher)
      if (codeteacher === undefined) {
        return callApiLoginSeccion()
      } else if (codeteacher === null) {
        return callApiLoginSeccion()
      } else {        
        return callApiLogin(codeteacher, day)
      }
    }, 2000)
  }
  useEffect(() => {
    // if (props.data === null) {
    //   const codeteacher = get(USER_SESSION)
    //   if (
    //     codeteacher === null ||
    //     codeteacher === undefined ||
    //     codeteacher === ''
    //   ) {
    //     window.location.href = `${process.env.NEXT_PUBLIC_SERVER_URL_ENTIDADES}${process.env.NEXT_PUBLIC_SERVER_URL_REDIRECT}`
    //   }
    // } else {
    //   if (
    //     props.tk !== undefined ||
    //     (props.tk !== null && props.data !== null) ||
    //     props.data !== undefined
    //   ) {
    //     if (
    //       get(TOKEN_IN) === null ||
    //       get(TOKEN_IN) === false ||
    //       get(TOKEN_IN) === undefined
    //     ) {
    //       const obj = {
    //         token: props.tk,
    //         userCode: props.data,
    //         classCode: props.data,
    //       }

    //       InserToken(obj)
    //     }
    //   }
    // }

    //
    renderizaImageBase64(
      process.env.NEXT_PUBLIC_VERSION_LOGO,
      450,
      197,
      'imgBase64'
    )

    // remove(SET_DATA_DOCENTE)

    remove(SET_RECOVER_SELECT)

    setloading(false)
    callApiLoginSeccion()

    // if (data.error !== undefined) {
    //   const result = getAlert({
    //     title: TITLE_ERROR,
    //     text: `${data.error.statusText} / status Error : ${data.error.status}`,
    //     confirmButtonText: `Ok`,
    //   })
    //   result.then((response) => {
    //     if (response) location.reload()
    //   })
    //   return
    // }
    // if (data.coupling.errorType !== undefined) {
    //   const result = getAlert({
    //     title: TITLE_ERROR,
    //     text: `${data.coupling.errorType} / status Error : ${data.coupling.errorMessage}`,
    //     confirmButtonText: `Ok`,
    //   })
    //   result.then((response) => {
    //     if (response) location.reload()
    //   })
    //   return
    // }

    // if Session("ValRegNo"){
    //   if Session("ValRegNo") = 2 {
    //     ShowMessageAlert("Lo sentimos, por mantenimiento el registro de notas sólo se puede acceder dentro del campus UPN.")
    //   }
    // }else{
    //   if gvProgramadas.Rows.Count = 0 {
    //     lblTipoDocente.Visible = False
    //     ShowMessageAlert("No se encontraron sesiones programadas para el día de hoy o la sesión de clase ya fue iniciada.")
    //   }
    // }else{
    //     lblTipoDocente.Visible = True
    //     if gvRecuperacion.Rows.Count > 0 {
    //       lblRecuperacion.Visible = True
    //     }
    // }
    // getAlert(obj)
    // setDatosByDay(data.byDay.detail)
    // const getApiPublic = async () => {
    //   const resp = await axiosfetchPublic('/forToday/list/N00011107/3')
    //   console.log(resp)
    // }
    // getApiPublic()
  }, [])
  const LinkButton = (row: any, _grid: number) => {
    return (
      <Button
        type="button"
        onclick={() => validRedirect(row, _grid)}
        classname="text-decoration-none text-warning"
      >
        Iniciar sesión
      </Button>
    )
  }
  const validRedirect = async (row: any, grid: number) => {
    const res = await redirectRouter('', setloading)
    if (res) return
    setloading(true)
    let classCode = null
    let teacherType = null
    if (row?.ClassCodigo !== undefined) {
      classCode = row.ClassCodigo
      teacherType = row.cileCode
    } else {
      classCode = row.classCode
      teacherType = row.typeTeacher
    }
    set(TIPO_ASISTENCIA, REGASI)
    set(CLASE_ID, classCode)
    const rs = await fetchClassShedule(classCode)
    if (callErrorValid(rs, setloading) === undefined) return
    if (!rs) {
      const rsIp = await fetchVerificaIPPermitido(row.ip)
      if (callErrorValid(rsIp, setloading) === undefined) return
      const rsVe = await fetchVerificaClaseWAo(classCode)
      if (callErrorValid(rsVe, setloading) === undefined) return
      if (!rsIp || !rsVe) {
        setloading(false)
        return getAlert({
          title: TITLE_EMERG,
          text: MSM_REGISTRO_ASISTENCIA,
          confirmButtonText: `Ok`,
        })
      }
    }
    if (!rs) {
      const dataBio = await fetchExclusionDocenteBiometrico(codeUser)
      if (callErrorValid(dataBio, setloading) === undefined) return
      if (dataBio?.length === 0) {
        const dataStuden = await fetchLogoutWithoutStudent(
          ACCESO_MARC_CLAS_DOC,
          classCode
        )
        if (callErrorValid(dataStuden, setloading) === undefined) return
        if (dataStuden?.length === 0) {
          if (EsAutenticacionBiometrico != null) {
            if (!EsAutenticacionBiometrico) {
              setloading(false)
              return getAlert({
                title: TITLE_EMERG,
                text: MSM_REGISTRO_BIOMETRICO,
                confirmButtonText: `Ok`,
              })
            }
          }
        }
      }
    }
    const objCheck: any = {
      classCode,
      teacherCode: codeUser,
      hourPerDay: day,
      hourDate: `${SET_FECHA_ORIGEN} ${convertStringToDateTime(new Date())}`,
      flag: 0,
      initialHour: `${SET_FECHA_ORIGEN} ${convertStringToDateTime(
        row.hourIni
      )}`,
    }
    const objContr2 = {
      teacherCode: codeUser,
      classCode,
      date: dateNow,
      initialHour: row.hourIni,
      finalHour: row.hourEnd,
      classroom: 0,
    }
    const objTime = {
      flag: 0,
      recoveryId: row.recuperationId,
      date: `${dateNow} ${convertStringToDateTime(new Date())}`,
      dateHour: `${SET_FECHA_ORIGEN} ${convertStringToDateTime(new Date())}`,
    }
    let rs2 = null
    let classroom: number = 0
    if (grid === 1) {
      rs2 = await fetchClassCheckPerson(objCheck)
      if (callErrorValid(rs2, setloading) === undefined) return
      set(RECUPERACION_ID, -1)
      set(TIPO_DOCENTE, row.cileCode)

      classroom = rs2[0]?.ClassroomCode
    } else if (grid === 2) {
      rs2 = await fetchClassCheckPersonTime(objTime)
      if (callErrorValid(rs2, setloading) === undefined) return
      set(RECUPERACION_ID, row.recuperationId)
      row.recuperationId = rs2[0]?.RecoveryId
      set(TIPO_DOCENTE, row.typeTeacher)
      classroom = rs2[0]?.ClassRoom
    }

    if (rs2?.length > 0) {
      const request = {
        teacherCode: codeUser,
        classCode,
        date: dateNow,
        initialHour: row.hourIni,
        finalHour: row.hourEnd,
        classroom,
      }
      const rs3 = await fetchSeccionOpen(request)
      if (callErrorValid(rs3, setloading) === undefined) return
      if (rs3.iControlClase === undefined) {
        rs3.iControlClase = '0'
      }
      iControlClase = rs3.iControlClase
      objContr2.classroom = classroom
    } else if (grid === 2) {
      const objTime2 = {
        flag: 1,
        recoveryId: row.recuperationId,
        date: `${dateNow} ${convertStringToDateTime(new Date())}`,
        dateHour: `${SET_FECHA_ORIGEN} ${convertStringToDateTime(new Date())}`,
      }
      const rsCheck = await fetchClassCheckPersonTime(objTime2)
      if (callErrorValid(rsCheck, setloading) === undefined) return
      if (rsCheck.length > 0) {
        objContr2.classroom = rsCheck[0].ClassRoom
        const rs4 = await fetchSessionExists(objContr2)
        if (callErrorValid(rs4, setloading) === undefined) return
        iControlClase = rs4.iControlClase
      } else {
        setloading(false)
        return getAlert({
          title: TITLE_EMERG,
          text: MSM_NO_EXISTE_HORARIO,
          confirmButtonText: `Ok`,
        })
      }
    }
    const diff = timeDiffCalc(row.hourIni, row.hourEnd) / row.hourMinutes
    const minmax = AddMin(row.hourIni, 30)

    if (iControlClase === '0') {
      const rs4 = await fetchSessionExists(objContr2)
      if (callErrorValid(rs4, setloading) === undefined) return
      if (rs4.iControlClase === '') {
        rs4.iControlClase = 0
      }
      if (rs4.length > 0) {
        setloading(false)
        return getAlert({
          title: TITLE_EMERG,
          text: MSM_SESION_FIN,
          confirmButtonText: `Ok`,
        })
      } else {
        if (row.hourMinutes === '45' || diff <= 2) {
          if (dateNow >= minmax) {
            setloading(false)
            return getAlert({
              title: TITLE_EMERG,
              text: MSM_SE_SUPERA_PLAZO,
              confirmButtonText: `Ok`,
            })
          }
        }
        iControlClase = '0'
        const objPerson: any = {
          classCode,
          teacherCode: codeUser,
          teacherType,
          date: dateNow,
          sessionType: 'N',
          username: data?.dataUser?.userName,
          initialHour: row.hourIni,
          finalHour: row.hourEnd,
          classRoom: classroom,
          ip: '::1',
        }

        const rs5 = await fetchClassCheckSeccion(objPerson)
        if (callErrorValid(rs5, setloading) === undefined) return
        iControlClase = rs5?.UpdateId

        set(CONTROL_CLASE_ID, Number(iControlClase))
        set(ASISTENCIA, '1')
        const rs6 = !fetchLogoutWithoutStudentClose(CIERRE_SIN_ASIST, classCode)
        if (callErrorValid(rs6, setloading) === undefined) return
        if (!rs6) {
          const dtSesionClaseAbierta = {
            control_clase_id: iControlClase,
            classCode,
            codeUser,
            date: dateNow,
            hourIni: row.hourIni,
            hourFin: row.hourEnd,
            asistencia: 0,
          }
          set(SET_DT_ASISTENCE, dtSesionClaseAbierta)
        }
      }
    } else {
      set(CONTROL_CLASE_ID, Number(iControlClase))
      set(ASISTENCIA, '1')
    }
    if (grid === 2) {
      if (iControlClase === '0') {
        set(CONTROL_CLASE_ID, Number(row.solRecuperationId))
      } else {
        set(CONTROL_CLASE_ID, Number(iControlClase))
      }
      set(RECUPERATION_ID, Number(row.recuperationId))
    }
    if (iControlClase > '0') {
      linkRedirect(row)
    } else {
      setloading(false)
      return getAlert({
        title: TITLE_EMERG,
        text: MSM_NO_ENUENTRA,
        confirmButtonText: `Ok`,
      })
    }
  }

  const linkRedirect = async (row: any) => {
    set(SET_RECOVER_SELECT, row)
    Router.push('./asistencia/resumen-asistencia')
  }

  const fetchSessionExists = async (obj: any) => {
    return apiHome.BySessionExists(obj)
  }

  const fetchLogoutWithoutStudent = async (
    parCode: string,
    classCode: string
  ) => {
    return apiHome.ByLogoutWithoutStudent(classCode, parCode)
  }

  const fetchLogoutWithoutStudentClose = async (
    parCode: string,
    classCode: string
  ) => {
    let permitir = false
    const result = await apiHome.ByLogoutWithoutStudent(classCode, parCode)
    if (result.length > 0) {
      if (result[0].ParameterValue === '1') {
        permitir = true
      }
    }
    return permitir
  }

  const fetchExclusionDocenteBiometrico = async (codeUsers: string) => {
    return apiHome.ByDocenteBiometrico(codeUsers, 1)
  }

  const fetchVerificaIPPermitido = async (AnyIP: string) => {
    return apiHome.ByVerificaIP(AnyIP, 0)
  }
  const fetchVerificaClaseWAo = async (classCode: string) => {
    return apiHome.ByVerificaClass(classCode)
  }
  const fetchClassCheckSeccion = async (obj: string) => {
    return apiHome.ByClassCheckSeccion(obj)
  }

  const fetchClassCheckPerson = async (obj: string) => {
    return apiHome.ByClassCheckPerson(obj)
  }

  const fetchClassCheckPersonTime = async (obj: any) => {
    return apiHome.ByClassCheckPersonTime(obj)
  }

  const fetchClassShedule = async (classCode: string) => {
    const rs = await apiHome.ByClassShedule(classCode)
    return rs
  }

  const fetchSeccionOpen = async (obj: any) => {
    return await apiSeccionOpen.ByTeacherSeccionOpen(obj)
  }

  const callSeccionOpen = () => {
    setloading(true)
    Router.push('./sesiones-abiertas')
  }

  const callEnviarNotas = () => {
    setloading(true)
    Router.push('./enviar-notas')
  }
  return (
    <div className={styles.contenido}>
      <Loader loading={Loading} />
      <div className={styles.content}>
        <div className={styles.titulo}>
          <Label classname="text-warning h5 mt-3 mb-3">Página Principal</Label>
        </div>
        <hr />

        <div className={styles.alertContent}>
          <Alerta
            classname="w-100"
            variant="info"
          >
            <p className="mb-0">
              <b>Nota:</b> Tenga en cuenta que una vez iniciada la sesión de
              clase esta únicamente estará visible en la sección{' '}
              <Button
                type="button"
                onclick={() => callSeccionOpen()}
                classname="text-primary"
              >
                Sesiones Abiertas.
              </Button>
            </p>
          </Alerta>
        </div>

        <div className={styles.contentButonTitle}>
          <div>
            <h2>COMANEI 2018</h2>
            <div>
              <Button
                type="button"
                variant="info"
                size="medium"
                classname="text-white"
              >
                Ver conferencia en vivo
              </Button>
            </div>
          </div>

          <div>
            <strong>
              <span>
                <h5>{FECHA_SECCION_NOW}</h5>
              </span>
            </strong>
          </div>
        </div>

        <div className={styles.tablas}>
          <TableDinamic
            columns={COLUMNS}
            listData={datosByDay}
          />
        </div>

        <div>
          <strong>
            <span>
              <h5>Clases por recuperar</h5>
            </span>
          </strong>
        </div>

        <div className={styles.tablas}>
          <TableDinamic
            columns={COLUMNS2}
            listData={datosRecover}
          />
        </div>

        <div className={`${styles.comment} mt-3`}>
          <small>
            <span id="cphSite_lblTipoDocente">
              <strong>Tipo docente: (P)</strong> Principal /{' '}
              <strong>(S)</strong> Sustituto / <strong>(A)</strong> Auxiliar
            </span>
          </small>
          <small>
            <div className="mb-2">
              <p className="m-0">
                ¿Tiene sesiones de clase abiertas y necesita finalizarlas?
              </p>
              <Button
                type="button"
                onclick={() => callSeccionOpen()}
                classname="text-decoration-none text-warning"
              >
                Finalizar mis sesiones de clase abiertas.
              </Button>
            </div>
            <div className="mb-2">
              <p className="m-0">
                ¿Ingresó TODAS sus notas y desea ENVIARLAS a Secretaría
                Académica?
              </p>
              <Button
                type="button"
                onclick={() => callEnviarNotas()}
                classname="text-decoration-none text-warning"
              >
                Enviar mis notas a Secretaría Académica.
              </Button>
            </div>
            <p className="">
              Mayor información en los manuales de la opción Ayuda del sistema.
            </p>
          </small>
        </div>
      </div>
    </div>
  )
}

Index.getInitialProps = async ({ res, query }: any) => {
  const data = await null
  const p1 = query.u
  let tk = query.tk

  if (tk === undefined) {
    return {
      data,
      p1,
      tk,
    }
  } else {
    // eslint-disable-next-line no-var, n/no-deprecated-api
    var b = new Buffer(query.u, 'base64')
    const response = b.toString()
    //
    const rs: any = query.tk.split('.')[1]
    // eslint-disable-next-line n/no-deprecated-api
    const t = new Buffer(rs, 'base64').toString()
    const newRS: any = JSON.parse(t)
    tk = newRS.jti

    const data = await response

    if (response !== undefined || response !== null || response !== '') {
      return {
        data,
        p1,
        tk,
      }
    } else {
      return {
        data: null,
        p1,
        tk,
      }
    }
  }
}

export default Index
