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
  LOADEXTRA_ADJUNTO_END,
} from '../types'

type Action = {
  type: string
  payload?: any
}

const initialState = {
  infoExtra: {},
  error: null,
  loading: false,
}

export default function (state: any = initialState, action: Action) {
  switch (action.type) {
    case LOADEXTRA:
      return {
        ...state,
        loading: true,
      }
    case LOAD_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      }
    case OBTENER_PAISES:
      return {
        ...state,
        infoExtra: {
          ...state.infoExtra,
          paises: action.payload,
        },
      }
    case OBTENER_ESTADO_CIVIL:
      return {
        ...state,
        infoExtra: {
          ...state.infoExtra,
          estadoCivil: action.payload,
        },
      }
    case OBTENER_TIPO_DOC:
      return {
        ...state,
        infoExtra: {
          ...state.infoExtra,
          tipoDoc: action.payload,
        },
      }
    case OBTENER_UBIGEO:
      return {
        ...state,
        infoExtra: {
          ...state.infoExtra,
          ubigeo: action.payload,
        },
      }
    case OBTENER_EVALUADOR_EVALUADO:
      return {
        ...state,
        infoExtra: {
          ...state.infoExtra,
          evaluadorEvaluado: action.payload,
        },
      }
    case OBTENER_ESTADO_ESTUDIO:
      return {
        ...state,
        infoExtra: {
          ...state.infoExtra,
          estadoEstudio: action.payload,
        },
      }
    case OBTENER_INSTITUCION:
      return {
        ...state,
        infoExtra: {
          ...state.infoExtra,
          institucion: action.payload,
        },
      }
    case OBTENER_INDUSTRIA:
      return {
        ...state,
        infoExtra: {
          ...state.infoExtra,
          industria: action.payload,
        },
      }
    case OBTENER_AREA_PUESTO:
      return {
        ...state,
        infoExtra: {
          ...state.infoExtra,
          areaPuesto: action.payload,
        },
      }
    case OBTENER_TIPO_DEDICACION_DOCENTE:
      return {
        ...state,
        infoExtra: {
          ...state.infoExtra,
          tipoDedicacionDocente: action.payload,
        },
      }
    case OBTENER_CLASIFICACION_CARRERA:
      return {
        ...state,
        infoExtra: {
          ...state.infoExtra,
          clasificacionCarrera: action.payload,
        },
      }
    case OBTENER_NIVEL_ACADEMICO:
      return {
        ...state,
        infoExtra: {
          ...state.infoExtra,
          nivelAcademico: action.payload,
        },
      }
    case OBTENER_ESTUDIO:
      return {
        ...state,
        infoExtra: {
          ...state.infoExtra,
          estudio: action.payload,
        },
      }
    case OBTENER_PERSONA_CONOCIMIENTO:
      return {
        ...state,
        infoExtra: {
          ...state.infoExtra,
          conocimientos: action.payload,
        },
      }
    case OBTENER_IDIOMAS:
      return {
        ...state,
        infoExtra: {
          ...state.infoExtra,
          idiomas: action.payload,
        },
      }
    case OBTENER_PERSONA_IDIOMAS:
      return {
        ...state,
        infoExtra: {
          ...state.infoExtra,
          idiomasPersona: action.payload,
        },
      }
    case OBTENER_REFERENCIA_LABORAL:
      return {
        ...state,
        infoExtra: {
          ...state.infoExtra,
          referenciaLaboral: action.payload,
        },
      }
    case OBTENER_TIPO_ADJUNTO:
      return {
        ...state,
        infoExtra: {
          ...state.infoExtra,
          tipoAdjunto: action.payload,
        },
      }
    case END:
      return {
        ...state,
        loading: false,
      }
    case LOADEXTRA_ESTUDIOS:
      return {
        ...state,
        loadingExtraEstudios: false,
      }
    case LOADEXTRA_ESTUDIOS_END:
      return {
        ...state,
        loadingExtraEstudios: true,
        loading: false,
      }
    case LOADEXTRA_IDIOMAS:
      return {
        ...state,
        loadingExtraIdiomas: false,
      }
    case LOADEXTRA_IDIOMAS_END:
      return {
        ...state,
        loadingExtraIdiomas: true,
        loading: false,
      }
    case LOADEXTRA_ADJUNTO:
      return {
        ...state,
        loadingExtraAdjunto: false,
      }
    case LOADEXTRA_ADJUNTO_END:
      return {
        ...state,
        loadingExtraAdjunto: true,
        loading: false,
      }
    default:
      return state
  }
}
