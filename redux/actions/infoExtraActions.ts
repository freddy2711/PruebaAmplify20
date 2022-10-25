import { apiDatosPersonales } from './../../pages/api'

import {
  LOADEXTRA,
  END,
  LOAD_ERROR,
  OBTENER_PAISES,
  OBTENER_ESTADO_CIVIL,
  OBTENER_TIPO_DOC,
  OBTENER_UBIGEO,
  OBTENER_EVALUADOR_EVALUADO,
  OBTENER_ESTADO_ESTUDIO,
  OBTENER_INSTITUCION,
  OBTENER_INDUSTRIA,
  OBTENER_AREA_PUESTO,
  OBTENER_TIPO_DEDICACION_DOCENTE,
  OBTENER_EXPERIENCIA_LABORAL,
  OBTENER_CLASIFICACION_CARRERA,
  OBTENER_NIVEL_ACADEMICO,
  OBTENER_ESTUDIO,
  OBTENER_PERSONA_CONOCIMIENTO,
  OBTENER_IDIOMAS,
  OBTENER_PERSONA_IDIOMAS,
  OBTENER_REFERENCIA_LABORAL,
  OBTENER_TIPO_ADJUNTO,
  LOADEXTRA_ESTUDIOS,
  LOADEXTRA_ESTUDIOS_END,
	LOADEXTRA_IDIOMAS,
	LOADEXTRA_IDIOMAS_END,
	LOADEXTRA_ADJUNTO,
	LOADEXTRA_ADJUNTO_END
	// OBTENER_ADJUNTO,
} from '../types'

export function loadInfoExtra() {
  return async (dispatch: any) => {
    dispatch(Load())

    try {
      const respPais: any = await apiDatosPersonales.pais()
      dispatch(getPaises(respPais.data))

      const respTipoDoc: any = await apiDatosPersonales.tipoDocumento()
      dispatch(getTipoDoc(respTipoDoc.data))

      const respEstadoCivil: any = await apiDatosPersonales.estadoCivil()
      dispatch(getEstadoCivil(respEstadoCivil.data))

      Promise.all([respPais, respTipoDoc, respEstadoCivil]).then(
        (resp: any) => {
          dispatch(End())
          return true
        }
      )
    } catch (error) {
      console.log(error)
      dispatch(LoadError(true))
      return false
    }
  }
}

export function loadInfoExtraEstudios() {
  return async (dispatch: any) => {
    dispatch(LoadexEstudios())

    try {
      const respNivelAcademico: any = await apiDatosPersonales.nivelAcademico()
      dispatch(getNivelAcademico(respNivelAcademico.data))

      const respEstadoEstudio: any = await apiDatosPersonales.estadoEstudio()
      dispatch(getEstadoEstudio(respEstadoEstudio.data))

      const respClaCarr: any = await apiDatosPersonales.clasificacionCarrera()
      dispatch(getClasificacionCarrera(respClaCarr.data))

      Promise.all([respNivelAcademico, respEstadoEstudio, respClaCarr]).then(
        (resp: any) => {
          dispatch(LoadexEstudiosEnd())
          return true
        }
      )
    } catch (error) {
      console.log(error)
      dispatch(LoadError(true))
      return false
    }
  }
}

export function loadInfoExtraIdiomas() {
  return async (dispatch: any) => {
    dispatch(LoadexIdiomas())

    try {
			const respIdiomas: any = await apiDatosPersonales.idioma()
      dispatch(getIdiomas(respIdiomas.data))
			dispatch(LoadexIdiomasEnd())

		} catch (error) {
      console.log(error)
      dispatch(LoadError(true))
      return false
    }
  }
}

export function loadInfoExtraAdjunto() {
  return async (dispatch: any) => {
    dispatch(LoadexAjunto())

    try {
			const respTipoAdjunto: any = await apiDatosPersonales.tipoAdjunto()
      dispatch(getTipoAdjunto(respTipoAdjunto.data))
			dispatch(LoadexAdjuntoEnd())

		} catch (error) {
      console.log(error)
      dispatch(LoadError(true))
      return false
    }
  }
}

export function getIndustry() {
  return async (dispatch: any) => {
    try {
      const respInd: any = await apiDatosPersonales.Industria()
      dispatch(getIndustria(respInd.data))
    } catch (error) {
      dispatch(LoadError(true))
      return false
    }
  }
}

export function getAreaPuestoAction() {
  return async (dispatch: any) => {
    try {
      const respAreaPuesto: any = await apiDatosPersonales.AreaPuesto()
      dispatch(getAreaPuesto(respAreaPuesto.data))
    } catch (error) {
      dispatch(LoadError(true))
      return false
    }
  }
}

export function getInstituciones() {
  return async (dispatch: any) => {
    try {
      const respInst: any = await apiDatosPersonales.Institucion()
      dispatch(getInstitucion(respInst.data))
    } catch (error) {
      dispatch(LoadError(true))
      return false
    }
  }
}

export function getNivelesAcademicos() {
  return async (dispatch: any) => {
    try {
      const respNivelAcademico: any = await apiDatosPersonales.nivelAcademico()
      dispatch(getNivelAcademico(respNivelAcademico.data))
    } catch (error) {
      dispatch(LoadError(true))
      return false
    }
  }
}

export function getEstadoEstudios() {
  return async (dispatch: any) => {
    try {
      const respEstadoEstudio: any = await apiDatosPersonales.estadoEstudio()
      dispatch(getEstadoEstudio(respEstadoEstudio.data))
    } catch (error) {
      dispatch(LoadError(true))
      return false
    }
  }
}

export function getClasificacionCarreras() {
  return async (dispatch: any) => {
    try {
      const respClaCarr: any = await apiDatosPersonales.clasificacionCarrera()
      dispatch(getClasificacionCarrera(respClaCarr.data))
    } catch (error) {
      dispatch(LoadError(true))
      return false
    }
  }
}

export function loadInfoExtrasNO(datos: any) {
  return async (dispatch: any) => {
    dispatch(Load())

    try {
      const respPais: any = await apiDatosPersonales.pais()
      /* console.log(respPais) */
      dispatch(getPaises(respPais.data))

      const respInst: any = await apiDatosPersonales.Institucion()
      /* console.log(respInst.data) */
      dispatch(getInstitucion(respInst.data))

      const respInd: any = await apiDatosPersonales.Industria()
      /* 		console.log(respInd.data) */
      dispatch(getIndustria(respInd.data))

      const respAreaPuesto: any = await apiDatosPersonales.AreaPuesto()
      /* console.log(respAreaPuesto.data) */
      dispatch(getAreaPuesto(respAreaPuesto.data))

      const respTipoDedDoc: any =
        await apiDatosPersonales.tipoDedicacionDocente()
      /* console.log(respTipoDedDoc.data) */
      dispatch(getTipoDedicacionDocente(respTipoDedDoc.data))

      const respExpLab: any =
        await apiDatosPersonales.experienciaLaboralObtener(datos.idPersona)
      /* console.log(respExpLab.data) */
      dispatch(getExperienciaLaboral(respExpLab.data))

      const respClaCarr: any = await apiDatosPersonales.clasificacionCarrera()
      /* console.log(respClaCarr.data) */
      dispatch(getClasificacionCarrera(respClaCarr.data))

      const respNivelAcademico: any = await apiDatosPersonales.nivelAcademico()
      /* console.log(respNivelAcademico.data) */
      dispatch(getNivelAcademico(respNivelAcademico.data))

      const respEstadoEstudio: any = await apiDatosPersonales.estadoEstudio()
      /* console.log(respEstadoEstudio.data) */
      dispatch(getEstadoEstudio(respEstadoEstudio.data))

      const respEstudio: any = await apiDatosPersonales.estudio(datos.idPersona)
      /* console.log(respEstudio.data) */
      dispatch(getEstudio(respEstudio.data))

      const respPersonaConocimientos: any =
        await apiDatosPersonales.personaConocimientoObtener(datos.idPersona)
      /* console.log(respPersonaConocimientos.data)  */
      dispatch(getPersonaConocimiento(respPersonaConocimientos.data))

      const respIdiomas: any = await apiDatosPersonales.idioma()
      /* console.log(respIdiomas.data)  */
      dispatch(getIdiomas(respIdiomas.data))

      const respPersonaIdiomas: any = await apiDatosPersonales.personaIdioma(
        datos.idPersona
      )
      /* console.log(respPersonaIdiomas.data)  */
      dispatch(getPersonaIdiomas(respPersonaIdiomas.data))

      const respRefLab: any = await apiDatosPersonales.referenciaLaboral(
        datos.idPersona
      )
      /* console.log(respRefLab.data)  */
      dispatch(getReferenciaLaboral(respRefLab.data))

      const respTipoAdjunto: any = await apiDatosPersonales.tipoAdjunto()
      /* console.log(respTipoAdjunto.data)  */
      dispatch(getTipoAdjunto(respTipoAdjunto.data))

      const respEstadoCivil: any = await apiDatosPersonales.estadoCivil()
      /* console.log(respEstadoCivil.data)  */
      dispatch(getEstadoCivil(respEstadoCivil.data))

      const respTipoDoc: any = await apiDatosPersonales.tipoDocumento()
      /* console.log(respTipoDoc.data)  */
      dispatch(getTipoDoc(respTipoDoc.data))

      const respUbigeo: any = await apiDatosPersonales.Ubigeo()
      /* console.log(respUbigeo.data)  */
      dispatch(getUbigeo(respUbigeo.data))

      const respEvaluadorEvaluado: any =
        await apiDatosPersonales.EvaluadorEvaluado(datos.idPersona)
      /* console.log(respEvaluadorEvaluado.data)  */
      dispatch(getEvaluadorEvaluado(respEvaluadorEvaluado.data))

      Promise.all([
        respPais,
        respInst,
        respInd,
        respAreaPuesto,
        respTipoDedDoc,
        respExpLab,
        respClaCarr,
        respNivelAcademico,
        respEstadoEstudio,
        respEstudio,
        respPersonaConocimientos,
        respIdiomas,
        respPersonaIdiomas,
        respRefLab,
        respTipoAdjunto,
        respEstadoCivil,
        respTipoDoc,
        respUbigeo,
        respEvaluadorEvaluado,
      ]).then((resp: any) => {
        dispatch(End())
        return true
      })
    } catch (error) {
      console.log(error)
      dispatch(LoadError(true))
      return false
    }
  }
}

const Load = () => ({
  type: LOADEXTRA,
})

const LoadexEstudios = () => ({
  type: LOADEXTRA_ESTUDIOS,
})

const LoadexEstudiosEnd = () => ({
  type: LOADEXTRA_ESTUDIOS_END,
})

const LoadexIdiomas = () => ({
  type: LOADEXTRA_IDIOMAS,
})

const LoadexAjunto = () => ({
  type: LOADEXTRA_ADJUNTO,
})

const LoadexIdiomasEnd = () => ({
  type: LOADEXTRA_IDIOMAS_END,
})

const LoadexAdjuntoEnd = () => ({
  type: LOADEXTRA_ADJUNTO_END,
})

const End = () => ({
  type: END,
})

const LoadError = (payload: any) => ({
  type: LOAD_ERROR,
  payload,
})

const getPaises = (payload: any) => ({
  type: OBTENER_PAISES,
  payload,
})

const getInstitucion = (payload: any) => ({
  type: OBTENER_INSTITUCION,
  payload,
})

const getIndustria = (payload: any) => ({
  type: OBTENER_INDUSTRIA,
  payload,
})

const getAreaPuesto = (payload: any) => ({
  type: OBTENER_AREA_PUESTO,
  payload,
})

const getTipoDedicacionDocente = (payload: any) => ({
  type: OBTENER_TIPO_DEDICACION_DOCENTE,
  payload,
})

const getExperienciaLaboral = (payload: any) => ({
  type: OBTENER_EXPERIENCIA_LABORAL,
  payload,
})

const getClasificacionCarrera = (payload: any) => ({
  type: OBTENER_CLASIFICACION_CARRERA,
  payload,
})

const getNivelAcademico = (payload: any) => ({
  type: OBTENER_NIVEL_ACADEMICO,
  payload,
})

const getEstadoEstudio = (payload: any) => ({
  type: OBTENER_ESTADO_ESTUDIO,
  payload,
})

const getEstudio = (payload: any) => ({
  type: OBTENER_ESTUDIO,
  payload,
})

const getPersonaConocimiento = (payload: any) => ({
  type: OBTENER_PERSONA_CONOCIMIENTO,
  payload,
})

const getIdiomas = (payload: any) => ({
  type: OBTENER_IDIOMAS,
  payload,
})

/* const getAdjunto = (payload: any) => ({
  type: OBTENER_ADJUNTO,
  payload,
}) */

const getPersonaIdiomas = (payload: any) => ({
  type: OBTENER_PERSONA_IDIOMAS,
  payload,
})

const getReferenciaLaboral = (payload: any) => ({
  type: OBTENER_REFERENCIA_LABORAL,
  payload,
})

const getTipoAdjunto = (payload: any) => ({
  type: OBTENER_TIPO_ADJUNTO,
  payload,
})

const getEstadoCivil = (payload: any) => ({
  type: OBTENER_ESTADO_CIVIL,
  payload,
})

const getTipoDoc = (payload: any) => ({
  type: OBTENER_TIPO_DOC,
  payload,
})

const getUbigeo = (payload: any) => ({
  type: OBTENER_UBIGEO,
  payload,
})

const getEvaluadorEvaluado = (payload: any) => ({
  type: OBTENER_EVALUADOR_EVALUADO,
  payload,
})
