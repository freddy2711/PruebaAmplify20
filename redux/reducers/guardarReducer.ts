import {
  // LOAD,
  SAVE_PERSONA,
  SAVE_ESTUDIO,
  SAVE_PERSONA_CONOCIMIENTO,
  SAVE_PERSONA_IDIOMA,
  SAVE_REFERENCIA_LABORAL,
  SAVE_PERSONA_ADJUNTO,
  CONFIRMACION_GUARDAR,
  SAVE_PERSONA_ERROR,
  SAVE_EXPERIENCIA_LABORAL_ERROR,
  SAVE_ESTUDIO_ERROR,
  SAVE_PERSONA_CONOCIMIENTO_ERROR,
  SAVE_PERSONA_IDIOMA_ERROR,
  SAVE_REFERENCIA_LABORAL_ERROR,
  SAVE_PERSONA_ADJUNTO_ERROR,
  CONFIRMACION_GUARDAR_ERROR,
  OBTENER_INSTITUCION_PAIS,
  OBTENER_INSTITUCION_PAIS_ERROR,
} from '../types'

type Action = {
  type: string
  payload?: any
}

const initialState = {
  infoGuardar: {},
  error: null,
  loading: false,
}

export default function (state: any = initialState, action: Action) {
  switch (action.type) {
    /* 		case LOAD:
			return {
        ...state,
        loading: true,
			} */
    case SAVE_PERSONA:
      return {
        ...state,
        loading: false,
        infoGuardar: {
          ...state.infoGuardar,
          savePersona: action.payload,
        },
      }
    case SAVE_PERSONA_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case SAVE_EXPERIENCIA_LABORAL_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case SAVE_ESTUDIO:
      return {
        ...state,
        loading: false,
        infoGuardar: {
          ...state.infoGuardar,
          saveEstudio: action.payload,
        },
      }
    case SAVE_ESTUDIO_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case SAVE_PERSONA_CONOCIMIENTO:
      return {
        ...state,
        loading: false,
        infoGuardar: {
          ...state.infoGuardar,
          savePersonaConocimiento: action.payload,
        },
      }
    case SAVE_PERSONA_CONOCIMIENTO_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case SAVE_PERSONA_IDIOMA:
      return {
        ...state,
        loading: false,
        infoGuardar: {
          ...state.infoGuardar,
          savePersonaIdioma: action.payload,
        },
      }
    case SAVE_PERSONA_IDIOMA_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case SAVE_REFERENCIA_LABORAL:
      return {
        ...state,
        loading: false,
        infoGuardar: {
          ...state.infoGuardar,
          saveReferenciaLaboral: action.payload,
        },
      }
    case SAVE_REFERENCIA_LABORAL_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case SAVE_PERSONA_ADJUNTO:
      return {
        ...state,
        loading: false,
        infoGuardar: {
          ...state.infoGuardar,
          savePersonaAdjunto: action.payload,
        },
      }
    case SAVE_PERSONA_ADJUNTO_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case CONFIRMACION_GUARDAR:
      return {
        ...state,
        loading: false,
        infoGuardar: {
          ...state.infoGuardar,
          saveConfirmacion: action.payload,
        },
      }
    case CONFIRMACION_GUARDAR_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }

    case OBTENER_INSTITUCION_PAIS:
      return {
        ...state,
        loading: false,
        infoGuardar: {
          institucionPais: action.payload,
        },
      }
    case OBTENER_INSTITUCION_PAIS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }

    default:
      return state
  }
}
