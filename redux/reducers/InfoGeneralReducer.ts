import {
  CARGAR_INFO_GENERAL,
  CARGAR_INFO_GENERAL_EXITO,
  AGREGAR_FOTO,
  CARGAR_INFO_GENERAL_ERROR,
  INIT_SAVE_CONTACT,
  SAVE_CONTACT_ERROR,
  SAVE_CONTACT_EXITO,
  LOAD_DELETE_EXPLAB,
  DELETE_EXPERIENCIA_LABORAL_ERROR,
  DELETE_EXPERIENCIA_LABORAL,
  LOADSAVE,
  SAVE_EXPERIENCIA_LABORAL,
  ENDSAVE,
  OBTENER_EXPERIENCIA_LABORAL,
  DELETE_ESTUDIO_ERROR,
  LOAD_DELETE_ESTUDIO,
  DELETE_ESTUDIO,
  LOAD_DELETE_CONOCIMIENTO,
  DELETE_CONOCIMIENTO,
  DELETE_CONOCIMIENTO_ERROR,
  LOAD_DELETE_IDIOMA,
  DELETE_IDIOMA,
  DELETE_IDIOMA_ERROR,
  LOAD_DELETE_REFLAB,
  DELETE_REFLAB,
  DELETE_REFLAB_ERROR,
  LOAD_DELETE_DOCS,
  DELETE_DOCS,
  DELETE_DOCS_ERROR,
  LOAD_ESTUDIOS,
  OBTENER_ESTUDIOS,
  SAVE_ESTUDIO,
  END_SAVE,
  SAVE_ESTUDIO_ERROR,
  LOAD_CONOCIMIENTOS,
  OBTENER_CONOCIMIENTOS,
  SAVE_CONOCIMIENTO,
  END_SAVE_CONOCIMIENTO,
  SAVE_CONOCIMIENTO_ERROR,
  LOAD_IDIOMAS,
  OBTENER_IDIOMAS_SAVE,
  SAVE_IDIOMAS,
  END_SAVE_IDIOMAS,
  SAVE_IDIOMAS_ERROR,
  LOAD_REFLAB,
  OBTENER_REFLAB_SAVE,
  SAVE_REFLAB,
  END_SAVE_REFLAB,
  SAVE_REFLAB_ERROR,
  CARGAR_PROGRESO,
  CARGAR_PROGRESO_ERROR,
  LOAD_ADJUNTO,
  OBTENER_ADJUNTO_SAVE,
  SAVE_ADJUNTO,
  END_SAVE_ADJUNTO,
  SAVE_ADJUNTO_ERROR,
} from '../types'

// cada reducer tiene su propio state
type Action = {
  type: string
  payload?: any
}

const initialState = {
  infoGeneral: {},
  progress: {},
  error: null,
  loading: false,
}

export default function (state: any = initialState, action: Action) {
  switch (action.type) {
    case CARGAR_PROGRESO:
      return {
        ...state,
        progress: action.payload,
      }
    case INIT_SAVE_CONTACT:
    case CARGAR_INFO_GENERAL:
    case LOADSAVE:
      return {
        ...state,
        loading: true,
        saving: true,
      }
    case CARGAR_INFO_GENERAL_EXITO:
      return {
        ...state,
        loading: false,
        infoGeneral: action.payload,
      }
    case AGREGAR_FOTO:
      return {
        ...state,
        loading: true,
      }
    case CARGAR_INFO_GENERAL_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      }
    case SAVE_CONTACT_EXITO:
      return {
        ...state,
        loading: false,
        infoGeneral: {
          ...state.infoGeneral,
          celular1: action.payload.celular1,
          email: action.payload.email,
        },
      }
    case SAVE_CONTACT_ERROR:
      return {
        ...state,
        error: action.payload,
      }
    case LOAD_DELETE_IDIOMA:
    case LOAD_DELETE_ESTUDIO:
    case LOAD_DELETE_EXPLAB:
    case LOAD_DELETE_CONOCIMIENTO:
    case LOAD_DELETE_REFLAB:
    case LOAD_DELETE_DOCS:
    case LOAD_ESTUDIOS:
    case LOAD_CONOCIMIENTOS:
    case LOAD_IDIOMAS:
    case LOAD_REFLAB:
    case LOAD_ADJUNTO:
      return {
        ...state,
        loading: true,
      }
    case DELETE_CONOCIMIENTO_ERROR:
    case DELETE_ESTUDIO_ERROR:
    case DELETE_EXPERIENCIA_LABORAL_ERROR:
    case DELETE_IDIOMA_ERROR:
    case DELETE_REFLAB_ERROR:
    case DELETE_DOCS_ERROR:
    case SAVE_ESTUDIO_ERROR:
    case SAVE_CONOCIMIENTO_ERROR:
    case SAVE_IDIOMAS_ERROR:
    case SAVE_REFLAB_ERROR:
    case CARGAR_PROGRESO_ERROR:
    case SAVE_ADJUNTO_ERROR:
      return {
        ...state,
        error: action.payload,
      }
    case DELETE_EXPERIENCIA_LABORAL:
      return {
        ...state,
        loading: false,
        infoGeneral: {
          ...state.infoGeneral,
          ExperienciasLaborales: [
            ...state.infoGeneral.ExperienciasLaborales.filter(
              (item: any) => item.idExperienciaLaboral !== action.payload
            ),
          ],
        },
      }
    case DELETE_ESTUDIO: {
      return {
        ...state,
        loading: false,
        infoGeneral: {
          ...state.infoGeneral,
          Estudios: [
            ...state.infoGeneral.Estudios.filter(
              (item: any) => item.idEstudio !== action.payload
            ),
          ],
        },
      }
    }
    case DELETE_CONOCIMIENTO: {
      return {
        ...state,
        loading: false,
        infoGeneral: {
          ...state.infoGeneral,
          Conocimientos: [
            ...state.infoGeneral.Conocimientos.filter(
              (item: any) => item.idPersonaConocimiento !== action.payload
            ),
          ],
        },
      }
    }
    case DELETE_IDIOMA: {
      return {
        ...state,
        loading: false,
        infoGeneral: {
          ...state.infoGeneral,
          Idiomas: [
            ...state.infoGeneral.Idiomas.filter(
              (item: any) => item.idPersonaIdioma !== action.payload
            ),
          ],
        },
      }
    }
    case DELETE_REFLAB: {
      return {
        ...state,
        loading: false,
        infoGeneral: {
          ...state.infoGeneral,
          ReferenciasLaborales: [
            ...state.infoGeneral.ReferenciasLaborales.filter(
              (item: any) => item.idReferenciaLaboral !== action.payload
            ),
          ],
        },
      }
    }
    case DELETE_DOCS: {
      return {
        ...state,
        loading: false,
        infoGeneral: {
          ...state.infoGeneral,
          Adjuntos: [
            ...state.infoGeneral.Adjuntos.filter(
              (item: any) => item.idPersonaAdjunto !== action.payload
            ),
          ],
        },
      }
    }
    case SAVE_ADJUNTO:
    case SAVE_REFLAB:
    case SAVE_IDIOMAS:
    case SAVE_CONOCIMIENTO:
    case SAVE_ESTUDIO:
    case SAVE_EXPERIENCIA_LABORAL:
      return {
        ...state,
        loading: false,
        /* infoGeneral: {
          ...state.infoGeneral,
          ExperienciasLaborales: [
            ...state.infoGeneral.ExperienciasLaborales, 
						action.payload
          ],
        }, */
      }
    case END_SAVE_CONOCIMIENTO:
    case ENDSAVE: {
      return {
        ...state,
        saving: false,
      }
    }
    case OBTENER_EXPERIENCIA_LABORAL:
      return {
        ...state,
        loading: true,
        infoGeneral: {
          ...state.infoGeneral,
          ExperienciasLaborales: [...Object.values(action.payload)],
        },
      }
    case OBTENER_ESTUDIOS:
      return {
        ...state,
        loading: true,
        infoGeneral: {
          ...state.infoGeneral,
          Estudios: [...Object.values(action.payload)],
        },
      }
    case OBTENER_IDIOMAS_SAVE:
      return {
        ...state,
        loading: true,
        infoGeneral: {
          ...state.infoGeneral,
          Idiomas: [...Object.values(action.payload)],
        },
      }
    case OBTENER_REFLAB_SAVE:
      return {
        ...state,
        loading: true,
        infoGeneral: {
          ...state.infoGeneral,
          ReferenciasLaborales: [...Object.values(action.payload)],
        },
      }
    case OBTENER_ADJUNTO_SAVE:
      return {
        ...state,
        loading: true,
        infoGeneral: {
          ...state.infoGeneral,
          Adjuntos: [...Object.values(action.payload)],
        },
      }
    case OBTENER_CONOCIMIENTOS:
      return {
        ...state,
        loading: true,
        infoGeneral: {
          ...state.infoGeneral,
          Conocimientos: [...Object.values(action.payload)],
        },
      }
    case END_SAVE_ADJUNTO:
    case END_SAVE_REFLAB:
    case END_SAVE_IDIOMAS:
    case END_SAVE: {
      return {
        ...state,
        saving: false,
      }
    }
    default:
      return state
  }
}
