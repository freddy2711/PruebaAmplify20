import { apiDatosPersonales } from './../../pages/api'
// import Swal from 'sweetalert2'

import {
  LOADOTRO,
  SAVE_PERSONA,
  // SAVE_EXPERIENCIA_LABORAL,
  SAVE_ESTUDIO,
  SAVE_PERSONA_CONOCIMIENTO,
  SAVE_PERSONA_IDIOMA,
  SAVE_REFERENCIA_LABORAL,
  SAVE_PERSONA_ADJUNTO,
  CONFIRMACION_GUARDAR,
  SAVE_PERSONA_ERROR,
  // SAVE_EXPERIENCIA_LABORAL_ERROR,
  SAVE_ESTUDIO_ERROR,
  SAVE_PERSONA_CONOCIMIENTO_ERROR,
  SAVE_PERSONA_IDIOMA_ERROR,
  SAVE_REFERENCIA_LABORAL_ERROR,
  SAVE_PERSONA_ADJUNTO_ERROR,
  CONFIRMACION_GUARDAR_ERROR,
  OBTENER_INSTITUCION_PAIS,
  OBTENER_INSTITUCION_PAIS_ERROR,
} from '../types'

export function savePersona(datos: any) {
  return async (dispatch: any) => {
    dispatch(Load())

    try {
      const resp: any = await apiDatosPersonales.personaGuardar(datos)
      console.log(resp.data.detail)
      dispatch(savePersonaExito(resp.data.detail))
    } catch (error) {
      console.log(error)
      dispatch(savePersonaError(true))
    }
  }
}

/* export function saveExpLab(datos: any) {
  return async (dispatch: any) => {
    dispatch(Load())

    try {
      const resp: any = await apiDatosPersonales.experienciaLaboralGuardar(
        datos
      )
      console.log(resp.data)
      const status = resp.data.detail.status
      if (status === true) {
        Swal.fire({
          title: 'Portal de Docentes',
          text: `Los Datos se guardaron correctamente.`,
          icon: 'success',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK',
        })

        return status
      } else {
        Swal.fire({
          title: 'Portal de Docentes',
          text: `Ocurrio un error inesperado.`,
          icon: 'warning',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK',
        })
      }

      dispatch(saveExpLabExito(datos))
    } catch (error) {
      console.log(error)
      dispatch(saveExpLabError(true))
    }
  }
}
 */
/* export function EditForm(datos: any) {
  return async (dispatch: any) => {
    dispatch(saveExpLabEdit(datos))
  }
} */

/* export function EditFormEstudio(datos: any) {
  return async (dispatch: any) => {
    dispatch(saveEstudioEdit(datos))
  }
} */

export function saveEstudios(datos: any) {
  return async (dispatch: any) => {
    dispatch(Load())

    try {
      const resp: any = await apiDatosPersonales.estudioGuardar(datos)
      console.log(resp.data.detail)
      dispatch(saveEstudioExito(resp.data.detail))
    } catch (error) {
      console.log(error)
      dispatch(saveEstudioError(true))
    }
  }
}

export function savePersonaConocimiento(datos: any) {
  return async (dispatch: any) => {
    dispatch(Load())

    try {
      const resp: any = await apiDatosPersonales.personaConocimientoGuardar(
        datos
      )
      console.log('AQUII_EL_ERROR', resp)
      dispatch(savePersonaConocimientoExito(resp.data.detail))
    } catch (error) {
      console.log(error)
      dispatch(savePersonaConocimientoError(true))
    }
  }
}

export function savePersonaIdioma(datos: any) {
  return async (dispatch: any) => {
    dispatch(Load())

    try {
      const resp: any = await apiDatosPersonales.personaIdiomaGuardar(datos)
      console.log(resp.data.detail)
      dispatch(savePersonaIdiomaExito(resp.data.detail))
    } catch (error) {
      console.log(error)
      dispatch(savePersonaIdiomaError(true))
    }
  }
}

export function saveReferenciaLaboral(datos: any) {
  return async (dispatch: any) => {
    dispatch(Load())

    try {
      const resp: any = await apiDatosPersonales.referenciaLaboralGuardar(datos)
      console.log(resp.data.detail)
      dispatch(saveReferenciaLaboralExito(resp.data.detail))
    } catch (error) {
      console.log(error)
      dispatch(saveReferenciaLaboralError(true))
    }
  }
}

export function savePersonaAdjunto(datos: any) {
  return async (dispatch: any) => {
    dispatch(Load())

    try {
      const resp: any = await apiDatosPersonales.personaAdjuntoGuardar(datos)
      console.log(resp.data.detail)
      dispatch(savePersonaAdjuntoExito(resp.data.detail))
    } catch (error) {
      console.log(error)
      dispatch(savePersonaAdjuntoError(true))
    }
  }
}

export function saveConfirmacion(datos: any) {
  return async (dispatch: any) => {
    dispatch(Load())

    try {
      const resp: any = await apiDatosPersonales.confirmacionGuardar(datos)
      console.log(resp.data.detail)
      dispatch(saveConfirmacionExito(resp.data.detail))
    } catch (error) {
      console.log(error)
      dispatch(saveConfirmacionError(true))
    }
  }
}

export function paisInstitucion(datos: any) {
  return async (dispatch: any) => {
    dispatch(Load())

    try {
      const resp: any = await apiDatosPersonales.Institucion(datos)
      await dispatch(savePaisInstitucionExito(resp.data))
      return resp.data
    } catch (error) {
      console.log(error)
      dispatch(savePaisInstitucionError(true))
    }
  }
}

const Load = () => ({
  type: LOADOTRO,
})

const savePersonaExito = (payload: any) => ({
  type: SAVE_PERSONA,
  payload,
})

const savePersonaError = (payload: any) => ({
  type: SAVE_PERSONA_ERROR,
  payload,
})

const saveEstudioExito = (payload: any) => ({
  type: SAVE_ESTUDIO,
  payload,
})

const saveEstudioError = (payload: any) => ({
  type: SAVE_ESTUDIO_ERROR,
  payload,
})

const savePersonaConocimientoExito = (payload: any) => ({
  type: SAVE_PERSONA_CONOCIMIENTO,
  payload,
})

const savePersonaConocimientoError = (payload: any) => ({
  type: SAVE_PERSONA_CONOCIMIENTO_ERROR,
  payload,
})

const savePersonaIdiomaExito = (payload: any) => ({
  type: SAVE_PERSONA_IDIOMA,
  payload,
})

const savePersonaIdiomaError = (payload: any) => ({
  type: SAVE_PERSONA_IDIOMA_ERROR,
  payload,
})

const saveReferenciaLaboralExito = (payload: any) => ({
  type: SAVE_REFERENCIA_LABORAL,
  payload,
})

const saveReferenciaLaboralError = (payload: any) => ({
  type: SAVE_REFERENCIA_LABORAL_ERROR,
  payload,
})

const savePersonaAdjuntoExito = (payload: any) => ({
  type: SAVE_PERSONA_ADJUNTO,
  payload,
})

const savePersonaAdjuntoError = (payload: any) => ({
  type: SAVE_PERSONA_ADJUNTO_ERROR,
  payload,
})

const saveConfirmacionExito = (payload: any) => ({
  type: CONFIRMACION_GUARDAR,
  payload,
})

const saveConfirmacionError = (payload: any) => ({
  type: CONFIRMACION_GUARDAR_ERROR,
  payload,
})

const savePaisInstitucionExito = (payload: any) => ({
  type: OBTENER_INSTITUCION_PAIS,
  payload,
})

const savePaisInstitucionError = (payload: any) => ({
  type: OBTENER_INSTITUCION_PAIS_ERROR,
  payload,
})
