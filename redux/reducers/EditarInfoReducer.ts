import {
  EDIT_EXPERIENCIA_LABORAL,
  CLEAR_EDIT,
  EDIT_ESTUDIO,
  EDIT_CONOCIMIENTOS,
  EDIT_IDIOMAS,
  EDIT_REFLAB,
} from '../types'

type Action = {
  type: string
  payload?: any
}

const initialState = {
  editExpLap: {},
  editEstudio: {},
  editConocimientos: {},
  editIdioma: {},
  editRefLab: {},
  error: null,
  loading: false,
}

export default function (state: any = initialState, action: Action) {
  switch (action.type) {
    case EDIT_EXPERIENCIA_LABORAL:
      return {
        ...state,
        loading: false,
        editExpLap: action.payload,
      }
    case CLEAR_EDIT:
      return {
        ...state,
        loading: false,
        editExpLap: {},
        editEstudio: {},
      }
    case EDIT_ESTUDIO:
      return {
        ...state,
        loading: false,
        editEstudio: action.payload,
      }
    case EDIT_CONOCIMIENTOS:
      return {
        ...state,
        loading: false,
        editConocimientos: action.payload,
      }
    case EDIT_IDIOMAS:
      return {
        ...state,
        loading: false,
        editIdioma: action.payload,
      }
    case EDIT_REFLAB:
      return {
        ...state,
        loading: false,
        editRefLab: action.payload,
      }
    default:
      return state
  }
}
