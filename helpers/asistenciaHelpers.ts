import { get } from 'local-storage'
import Swal from 'sweetalert2'
import { apiAsistencia } from './../pages/api'

import {
  CONTROL_CLASE_ID,
  TIPO_DOCENTE,
  CLASE_ID,
  RECUPERACION_ID,
  COMENTARIO,
  CONTROL_CLASE_FECHA,
  DUENO_SESSION,
  TIPO_CLASE,
} from './../consts/storageConst'

const CierreDeSesionExitoso = async () => {
  let sTipoClase, iRecuperacionID, esOk
  const DUENO: string = get(DUENO_SESSION)
  const sUserName: string = DUENO
  const sTipoDocente = get(TIPO_DOCENTE)
  const sCodClase: string = get(CLASE_ID)
  const comentario = '1'
  iRecuperacionID = get(RECUPERACION_ID)
  const controlClaseId: string = get(CONTROL_CLASE_ID)

  const afc = await apiAsistencia.AsistenciaEnFechasControl(controlClaseId)

  const puedecerrar = await apiAsistencia.puedeCerrar(controlClaseId)

  const permitir = await apiAsistencia.getClaseDetalle(
    sCodClase,
    'CIERRE_SIN_ASIST'
  )

  console.log('PERMITIRRRRR____: ', permitir)
  console.log('PUEDEEEE____: ', puedecerrar)
  console.log('AFC____:', afc)

  if (sTipoDocente !== 'A') {
    if (!afc) {
      if (permitir && puedecerrar) {
        await apiAsistencia.terminaSesionSolicitud(
          controlClaseId,
          sUserName,
          comentario
        )
        esOk = true
      } else {
        Swal.fire({
          title: 'Portal de Docentes',
          text: `Antes de cerrar la sesión debe registrar la asistencia de alumnos`,
          icon: 'warning',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK',
        })
      }
    } else {
      await apiAsistencia.terminaSesionSolicitud(
        controlClaseId,
        sUserName,
        comentario
      )
      esOk = true
    }
  } else {
    await apiAsistencia.terminaSesionSolicitud(
      controlClaseId,
      sUserName,
      comentario
    )
    esOk = true
  }

  if (sTipoClase === 'R') {
    iRecuperacionID = get(RECUPERACION_ID)

    const obj: any = {
      recoveryId: iRecuperacionID,
      states: 'E',
      user: sUserName,
    }

    await apiAsistencia.actualizaRecuperacionEstado(obj)
  }

  return esOk
}

const enviarSolicitud = async (iControlClase: string, classId: string) => {
  const DUENO: string = get(DUENO_SESSION)
  try {
    const correos = await apiAsistencia.listarCorreo_Solicitud(
      iControlClase,
      classId
    )

    const teacherData = await apiAsistencia.trabajador(DUENO)

    const listaCorreos = correos.data

    const { lastName, middleLastName, name, email } = teacherData.data

    const motivo = get(COMENTARIO)

    const fecha = get(CONTROL_CLASE_FECHA)

    const bodyText = `
          <div>
          <p>Estimado(s) Señor(es):</p>
          <br/>
          <p>Les informamos que se ingresado una nueva Solicitud de Marcación a través del Portal Docente.</p>
          <br/>
          <p>A continuación detallamos los datos de la solicitud:</p>
          <br/>
          <p>Docente : ${name} ${lastName} ${middleLastName} </p>
          <p>Clase No Marcada : ${classId}</p>
          <p>Fecha : ${fecha}</p>
          <p>Motivo : ${motivo}</p>
          </div>
        `

    const emailJson = {
      EmailList: [listaCorreos],
      DisplayName: 'UPN Docentes',
      Subject: 'Portal Docentes - Ingreso de Solicitud de Marcación',
      IsHtml: true,
      ReplyToList: [email],
      AttachmentB64: null,
      AttachmentName: null,
      NotificationType: 1,
      EmailListCC: null,
      EmailListBCC: null,
      Queue: true,
      Body: bodyText,
    }

    const result: any = await apiAsistencia.email(emailJson)

    console.log('emailResp', result)

    if (result === 'OK' || result === '200') {
      return true
    }
  } catch (error) {
    console.log(error)
  }
}

const CierreSesionAsistencia = async () => {
  const sTipoClase = get(TIPO_CLASE)
  const sTipoDocente = get(TIPO_DOCENTE)
  const sCodClase: string = get(CLASE_ID)
  const controlClaseId: string = get(CONTROL_CLASE_ID)
  const DUENO: string = get(DUENO_SESSION)
  const sUserName: string = DUENO

  let esOk

  const iRecuperacionID = get(RECUPERACION_ID)

  // clase fuera campus
  // const campus = await apiAsistencia.campus(sCodClase)

  // console.log('CAMMMPUUUSSS__', campus)

  if (sTipoDocente !== 'A') {
    const afc = await apiAsistencia.AsistenciaEnFechasControl(controlClaseId)

    const puedecerrar = await apiAsistencia.puedeCerrar(controlClaseId)

    const permitir = await apiAsistencia.getClaseDetalle(
      sCodClase,
      'CIERRE_SIN_ASIST'
    )

    if (!afc) {
      if (permitir && puedecerrar) {
        const resp: any = await apiAsistencia.terminaSesion(
          controlClaseId,
          sUserName
        )
        console.log('terminaSesion__', resp.data.Status)
        const status = resp.data.Status

        if (status) {
          esOk = true
        } else {
          esOk = false
        }
      } else {
        esOk = false
        Swal.fire({
          title: 'Portal de Docentes',
          text: `Antes de cerrar la sesión debe registrar la asistencia de alumnos.`,
          icon: 'warning',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK',
        })
      }
    } else {
      const resp: any = await apiAsistencia.terminaSesion(
        controlClaseId,
        sUserName
      )
      console.log('terminaSesion__', resp.data.Status)

      const status = resp.data.Status

      if (status) {
        esOk = true
      } else {
        esOk = false
      }
    }
  } else {
    const resp: any = await apiAsistencia.terminaSesion(
      controlClaseId,
      sUserName
    )
    console.log('terminaSesion__', resp.data.Status)

    const status = resp.data.Status

    if (status) {
      esOk = true
    } else {
      esOk = false
    }
  }

  if (sTipoClase === 'R') {
    const item = {
      recoveryId: iRecuperacionID,
      states: 'E',
      user: DUENO,
    }

    const resp: any = await apiAsistencia.actualizaRecuperacionEstado(item)
    console.log('actualizaRecuperacionEstado__', resp)
  }

  return esOk
}

export { CierreDeSesionExitoso, enviarSolicitud, CierreSesionAsistencia }