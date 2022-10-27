import {
  LOAD_EDIT,
  EDIT_EXPERIENCIA_LABORAL,
  CLEAR_EDIT,
  EDIT_ESTUDIO,
  EDIT_CONOCIMIENTOS,
  EDIT_IDIOMAS,
  EDIT_REFLAB,
} from '../types'

export function EditFormEstudio(datos: any) {
  return async (dispatch: any) => {
    dispatch(Load())
    dispatch(saveEstudioEdit(datos))
  }
}

export function EditForm(datos: any) {
  return async (dispatch: any) => {
    dispatch(Load())
    dispatch(saveExpLabEdit(datos))
  }
}

//
export function EditFormCono(datos: any) {
  return async (dispatch: any) => {
    dispatch(Load())
    dispatch(saveConocimientosEdit(datos))
  }
}

//
export function EditFormIdiomas(datos: any) {
  return async (dispatch: any) => {
    dispatch(Load())
    dispatch(saveIdiomasEdit(datos))
  }
}

// saveRefLabEdit
export function EditFormRefLab(datos: any) {
  return async (dispatch: any) => {
    dispatch(Load())
    dispatch(saveRefLabEdit(datos))
  }
}

export function ClearEdit() {
  return async (dispatch: any) => {
    dispatch(clear())
  }
}

const Load = () => ({
  type: LOAD_EDIT,
})

const clear = () => ({
  type: CLEAR_EDIT,
})

const saveExpLabEdit = (payload: any) => ({
  type: EDIT_EXPERIENCIA_LABORAL,
  payload,
})

const saveEstudioEdit = (payload: any) => ({
  type: EDIT_ESTUDIO,
  payload,
})

const saveConocimientosEdit = (payload: any) => ({
  type: EDIT_CONOCIMIENTOS,
  payload,
})

const saveIdiomasEdit = (payload: any) => ({
  type: EDIT_IDIOMAS,
  payload,
})

// EDIT_REFLAB
const saveRefLabEdit = (payload: any) => ({
  type: EDIT_REFLAB,
  payload,
})
