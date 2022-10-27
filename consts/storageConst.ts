import axios from 'axios'
import { set } from 'local-storage'
import { axiosfetchPrivateEmail } from '../config/axios'
import getAlert from '../hooks/jspdf/alertify'

/* eslint-disable prefer-regex-literals */
export const TEACHERCODE = 'teacherCode'
export const USER_SESSION = 'userSesion'
export const DUENO_SESSION = 'dueno_session'
export const NAME_SESSION = 'name_session'

// ** CONSTATES PARA STORAGE SOLICITUD MARCACION
export const CLASS_SELECTED_SOL_MARCACION = 'classSelectedSolMar'
export const LIST_SESION_SOL = 'listSesionsSolicitud'
export const ASISTENCIA = 'asistencia'
export const CONTROL_CLASE_ID = 'controlClaseId'
export const CONTROL_CLASE_ESTADO = 'ControlClaseEstado'
export const CONTROL_CLASE_AULA = 'ControlClaseAula'
export const CONTROL_CLASE_NRODIA = 'ControlClaseNroDia'
export const CONTROL_CLASE_FECHA = 'ControlClaseFecha'
export const VALIDAR = 'Validar'
export const TIPO_DOCENTE = 'TipoDocente'
export const RECUPERACION_ID = 'RecuperacionID'
export const CLASE_ID = 'ClaseID'
export const CONTROL_CLASE_FECHAHORA_INICIO = 'ControlClaseFechaHoraInicio'
export const CONTROL_CLASE_FECHAHORA_FIN = 'ControlClaseFechaHoraFin'
export const COMENTARIO = 'Comentario'

// ** CONSTATES PARA STORAGE HOME
export const SET_DT_AULTA = 'dtAula'
export const SET_DATA_DOCENTE = 'dataDocente'
export const SET_RECOVER_SELECT = 'recoverSelect'
export const SET_DT_ASISTENCE = 'dtAsistencia'

// ** CONSTANTES DE PRUEBA PARA DATOS DE USUARIO
export const SET_DUENO_SESSION = 'RVI'
export const SET_TEACHERCODE = 'N00011885'

// ** CONSTATES DE SESIONES ANTERIORES PARA STORAGE DE ASISTENCIA  - JD
export const LST_COURSES_TEACHER = 'teacherAsistence'
export const LST_SESIONS_CLASS = 'classAsistence'
export const LST_DATA_ASSISTENCE = 'lstDataAssistence'
export const SEMESTERID = 'semesterId'
export const DESABLEDSESSIONACLOSE = 'desabledClose'

// ** CONSTATES DE RECUPERAR Y ADELANTAR CLASES  - JD
export const LST_RECOVERY_SELECTED = 'lstRecoverySelected'

// ** CONSTANTES PARA ASISTENCIA
export const TIPO_ASISTENCIA = 'tipoAsistencia'
export const REGSOL = 'registroSolicitud'
export const REGASI = 'registroAsistencia'
export const VERASI = 'verAsistencia'
export const TIPO_CLASE = 'sTipoClase'
export const NO_CLOSE = 'noClose'

// ** CONSTANTES PARA SESIONES ABIERTAS
export const RECOVERSELECT = 'recoverSelect'

// ** CONSTANTES PARA DESCANSO DOCENTE
export const SET_DESCANSO_SELECT = 'descansoSelect'
export const SET_DESCANSO_SOLICITUD = 'descansoListWorker'
export const SET_TEACHER_BREAK = 'teacherBreak'
export const SET_EMAIL_SUPPOT_UPN = 'jsalazardj22@gmail.com'

export const MSM_INFO_DESCANSO =
  'No se puede registrar la solicitud, tiene solicitudes pendientes de aprobación o ha llegado al límite de solicitudes.'
export const MSM_SEND_SOLICITUD =
  'Su solicitud se ha enviado para ser revisada.'

// ** CONSTANTES PARA NOTAS
export const SET_NOTES_SELECT = 'selectNotes'

export const SET_NOTES_RE = 'RE'
export const SET_NOTES_CA = 'CA'
export const SET_NOTES_PDF = {
  TITLE: 'CONSTANCIA DE ENVÍO DE NOTAS A SECRETARÍA ACADÉMICA',
  SUBTITLE: 'DATOS DE LA CLASE',
  campus: 'Sede :',
  semester: 'Semestre :',
  race: 'Carrera :',
  code: 'Código del Curso :',
  namegrade: 'Nombre del Curso :',
  teacher: 'Docente :',
  date: 'Fecha y hora de envío :',
  SUBTITLE1: 'Sede :',
  emailUPN: 'javierdj22@gmail.com',
  titleEmail: (
    sede: any,
    semestre: any,
    sClase: any,
    curso: any,
    docente: any
  ) =>
    `UPN - Constancia de envío de notas a SA - Sede ${sede} - Semestre ${semestre} - Clase ${sClase} - Curso ${curso} - Docente ${docente}`,
  titleTable: [
    'Nº',
    'Alumno',
    'T1',
    'T2',
    'T3',
    'T4',
    'T5',
    'PT',
    'EP',
    'EF',
    'RE',
    'PRO',
    'EST',
  ],
}
// ** CONSTANTES PARA MENSAJE EMERGENTES
export const buttons = { ok: `Ok`, acept: `Aceptar`, cancel: `Cancel` }
export const TITLE_EMERG = 'Portal de Docentes'
export const TITLE_ERROR = 'Notificación de Error'

export const MSM_NO_ENUENTRA = `No se encuentra en el horario establecido para iniciar la sesión de clase.`
export const MSM_LO_SENTIMOS =
  'Lo sentimos, por mantenimiento el registro de notas sólo se puede acceder dentro del campus UPN.'
export const MSM_NO_SESIONES =
  'No se encontraron sesiones programadas para el día de hoy o la sesión de clase ya fue iniciada.'
export const MSM_TENGA_PRESENTE = (competence: number) =>
  `Tenga presente que tiene ${competence} clases con estudiantes pendientes por evaluar.`
export const MSM_INFO_NOTAS = `Realice el envío de notas a Secretaría Académica al finalizar el semestre, primero debe haber ingresado todas sus notas.`
export const MSM_SEND_NOTAS = `No se pudo enviar el correo debido a que no se pudo extraer el detalle de las notas.`
export const MSM_SEND_CLASE = `No se pudo enviar el correo debido a que no se pudo extraer el detalle de la clase.`
export const MSM_SEND_EMAIL = (destinatarios: string) =>
  `Se envió correctamente el correo de constancia con las notas en un archivo adjunto a los correos: ${destinatarios}.`
export const MSM_REGISTRO_ASISTENCIA = `El registro de asistencia sólo se puede hacer dentro del campus UPN.`
export const MSM_ENVIAR_NOTAS = (classCode: number) =>
  `Está a punto de enviar las notas de la clase ${classCode} a Secretaría Académica. Las notas enviadas ya no podrán modificarse, ¿Desea continuar con el envío?`
export const MSM_REGISTRO_BIOMETRICO = `El registro de inicio de sesión de clase sólo se puede realizar desde el biométrico!`
export const MSM_NO_EXISTE_HORARIO = `No existe horario para iniciar la sesión de recuperación en este momento.`
export const MSM_SE_SUPERA_PLAZO = `Se ha superado el plazo de 30 minutos para iniciar la sesión de clase`
export const MSM_SE_ACTIVA_REGISTRO =
  'No se puede activar el registro de notas por que la fecha ya caducó o no ha sido registrada. Comuníquese con la dirección de la carrera.'
export const MSM_SESION_FIN = `La sesión ya fue finalizada.`
export const MSM_TOKEN_OK = 'Token Correcto'
export const MSM_TOKEN_NO = 'Token Incorrecto'
export const MSM_SELECCIONADO_VIRTUAL =
  'Ha seleccionado una clase virtual, recuerde que el ingreso de notas se debe efectuar desde Cursos Virtuales.'
export const MSM_REGISTRO_OK =
  'El registro de notas se ha guardado correctamente.'
// ** CONSTANTES PARA MENSAJE CORREO
export const MSM_GENERA_TOKEN = 'Generación de Token para cambio de Notas!'

// ** CONSTANTES PARA OCULTAR Y MOSTRAR CORREO
export const MSM_VISIBLE_NONE = 'none'
export const SET_IMG_BASE64 = ''
export const MSM_VISIBLE_BLOCK = 'block'
// ** CONSTANTES PARA HOME SECCIONES
export const ACCESO_MARC_CLAS_DOC = `ACCESO_MARC_CLAS_DOC`
export const CIERRE_SIN_ASIST = `CIERRE_SIN_ASIST`
export const MSM_NOTAS_MAIL_ERROR =
  'No tiene asignado un correo UPN valido, porfavor contactarse con HelpDesk.'
export const MSM_NOTAS_SELECCIONADA =
  'Las notas de la clase seleccionada ya han sido enviadas a Secretaría Académica.'
export const MSM_NOTAS_CLASE_VIRTUAL =
  'Ha seleccionado una clase virtual, recuerde que el ingreso de notas se debe efectuar desde Cursos Virtuales.'
export const MSM_NOTAS_MAIL_OK = (email: string) =>
  `Se creó su nuevo Token para su registro de notas. Se envió el token a su correo " ${email}.`
// ** RESUMEN ASISTENCIA
export const DATA_RESUMEN_SELECTED = 'dataResumenSelected'
export const RECUPERATION_ID = 'RecuperacionID'
// ASISTENCIA

// ** CONSTANTES DE HOME - JS
export const callErrorValid = (result: any, setloading: any) => {
  const error = result?.error
  if (error !== undefined) {
    if (error.status !== 200) {
      setloading(false)
      getAlert({
        title: `${TITLE_ERROR} - ${
          error.statusText?.status !== undefined
            ? error.statusText?.status
            : error.status
        }`,
        html: `${
          error.statusText?.message !== undefined
            ? error.statusText?.message
            : error.statusText
        }<br/><br/>${convertStringToDate(error.date)} 
          ${convertStringToDateTime(error.date)}`,
        confirmButtonText: `Ok`,
      })
      return undefined
    }
  }
  return result
}
export const ErrorMessageClient = async (error: any, state: any) => {
  const status = error?.response?.status
  const statusText = error?.response?.data?.error
  const url = error?.response?.config?.url
  const date = error?.response?.headers?.date
  const data = error?.response?.headers?.data
  const obj = {
    codeTeacher: '',
    status,
    statusText,
    date,
    url,
    data,
  }
  if (state) {
    SendEmailServer(obj)
  }
  return {
    status,
    statusText,
    date,
    url,
  }
}

export const SendEmailServer = async (obj: any) => {
  const msj = `<center>
  <div aling="center" style="color:red;font-weight:700">
    <div>
      <span style="color:#000;font-weight:700">Url : </span>${obj.url}
    </div>
    <div>
      <span style="color:#000;font-weight:700">Date : </span>${obj.date}
    </div>
    <div>
      <span style="color:#000;font-weight:700">Data : </span>${obj.data}
    </div>
    <div>
      <span style="color:#000;font-weight:700">Status : </span>${obj.status}
    </div>
    <div>
      <span style="color:#000;font-weight:700">Status Message : </span>${obj.statusText}
    </div>
  </div>
  </center>`
  const sendMail = emailJson('javierdj22@gmail.com', obj.codeTeacher, msj)
  if (obj.status !== 200) {
    axiosfetchPrivateEmail.post(`/`, sendMail)
  }
}

export const emailJson = (email: any, codeTeacher: any, msj: any) => {
  return {
    // EmailList: [respEmail],
    EmailList: [email],
    DisplayName: 'UPN Docentes',
    Subject: `Notificación de ERRORES - Portal Docentes - ${codeTeacher} `,
    IsHtml: true,
    // ReplyToList: [respEmail.emailUPN],
    ReplyToList: [email],
    AttachmentB64: null,
    AttachmentName: null,
    NotificationType: 1,
    EmailListCC: null,
    EmailListBCC: null,
    Queue: true,
    Body: setBodyEmail(msj),
  }
}
export const setBodyEmail = (message: any) => {
  return `<table width='100%' align='center'  border='0' cellpadding='20'>
  <tr><td>
  ${message}
  </td></tr>
  </table>`
}
export const SET_SEMESTERCODE = ''
export const SET_FECHA_ORIGEN = '12/30/1899'

// ** CONSTANTES EVALUACION DE COMPETENCIAS
export const CLASS_SELECTED_EC = 'claseSeleccionadaEc'
export const CB_COMPETENCE = 'cbo_competence'

// ** CONSTANTES PARA SOPORTE VIRTUAL
export const CONSULTA_DATA = 'CONSULTA_DATA'

// ** CONSTANTES PARA REPORTES
export const CLASEID_REPORTES = 'ClaseIdReporte'
export const LST_SELECTED_COURSE = 'lstCoursesTeacher'

export const convertStringToDate = (data: any) => {
  const date = new Date(data)
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
    2,
    '0'
  )}-${String(date.getDate()).padStart(2, '0')}`
}
export const convertStringToDay = (data: any) => {
  const date = new Date(data)
  return String(date.getDay())
}

export const AddMin = (data: any, Minute: number) => {
  const date = new Date(data)
  const MinuteNow = Number(date.getMinutes() + Minute)
  let MinuteNowS = String(date.getMinutes())
  let HourNow = String(date.getHours())
  if (MinuteNow === 60) {
    HourNow = String(date.getHours() + 1)
    if (Number(HourNow) < 10) {
      HourNow = String(`0${HourNow}`)
    }
    MinuteNowS = '00'
  }
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
    2,
    '0'
  )}-${String(date.getDate()).padStart(2, '0')} ${String(HourNow)}:${String(
    MinuteNowS
  )}:${String(date.getUTCSeconds())}`
}
export const timeDiffCalc = (dateNow: any, dateFuture: any) => {
  const newYear1 = new Date(dateNow)
  const newYear2 = new Date(dateFuture)

  let dif = Number(newYear2) - Number(newYear1)
  dif = Math.round(dif / 1000 / 60)
  return dif
}

export const convertStringToDateTime = (data: any) => {
  const date = new Date(data)
  return date.toLocaleTimeString()
}
export const eventToken = (data: any, options: any) => {
  const date = new Date(data)
  const hora = date.toLocaleTimeString('en-IT', { hour12: true })
  return `Se generó envío de token a su correo el día ${date.toLocaleDateString(
    'es-ES',
    options
  )}, ${hora}`
}

export const event: any = new Date()
export const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}

export const FECHA_SECCION_NOW = `Sesiones programadas para HOY ${event.toLocaleDateString(
  'es-ES',
  options
)}`
export const changeRegExp = (result: any) => {
  result = result.split('.')[0]
  const regex = new RegExp('^[0-9-]*$', 'i')
  return regex.test(result)
}

export const getBase64Image = (
  src: any,
  height: any,
  width: any,
  callback: any,
  outputFormat: any
) => {
  const img = new Image()
  img.crossOrigin = 'Anonymous'
  img.onload = () => {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    canvas.height = height
    canvas.width = width
    ctx?.drawImage(img, 0, 0, width, height)
    const dataURL: string = canvas.toDataURL(outputFormat)
    callback(dataURL)
  }
  img.src = src
  if (img.complete || img.complete === undefined) {
    img.src =
      'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=='
    img.src = src
  }
}

export const renderizaImageBase64 = (
  url: any,
  width: any,
  height: any,
  repository: any
) => {
  getBase64Image(
    url,
    height,
    width,
    function (dataUrl: any) {
      set(SET_IMG_BASE64, dataUrl)
      // const imgBase64: any = document.getElementById(repository)
      // imgBase64.value = dataUrl
    },
    null
  )
}

export const callRedimencionValid = (repository: any) => {
  setTimeout(() => {
    const imgBase64: any = document.getElementById(repository)
    if (imgBase64.value !== '') {
      set(SET_IMG_BASE64, imgBase64.value)
    } else {
      callRedimencionValid(repository)
    }
  }, 2000)
}

export const objToken = async () => {
  let SERVER_INFO = null
  const config = {
    withCredentials: true,
  }
  if (process.env.NODE_ENV !== 'production') {
    const url = 'http://localhost:53041/weblogin/Handlers/SessionHandler.ashx'
    const response = await axios(url, config)
    if (!response) {
      SERVER_INFO = {
        error: true,
      }

      return SERVER_INFO
    }

    SERVER_INFO = await JSON.stringify(response)
    return SERVER_INFO
  } else {
    SERVER_INFO = {
      // token_aws: 'pF9TWLFZi89XDBHkdZCKpaOK6WCK2u181tP1YUf0',
      url_aws: 'https://apiupn-dev.upn.edu.pe/gestor-academico/',
      usuario: '0', // Valor es usado en desarrollo
    }
    return SERVER_INFO
  }
}

// ** CONSTANTES DE CARGA DE EXÁMENES
export const SET_DATAS_SELEC_COURSES_TEACHER_CE = 'SelectCoursesTeacher_CE'
