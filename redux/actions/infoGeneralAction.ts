import { apiDatosPersonales } from './../../pages/api'
import Swal from 'sweetalert2'

import {
  CARGAR_INFO_GENERAL,
  // AGREGAR_FOTO,
  CARGAR_INFO_GENERAL_EXITO,
  CARGAR_INFO_GENERAL_ERROR,
  INIT_SAVE_CONTACT,
  SAVE_CONTACT_ERROR,
  SAVE_CONTACT_EXITO,
  DELETE_EXPERIENCIA_LABORAL,
  LOAD_DELETE_EXPLAB,
  DELETE_EXPERIENCIA_LABORAL_ERROR,
  SAVE_EXPERIENCIA_LABORAL,
  SAVE_EXPERIENCIA_LABORAL_ERROR,
  LOADSAVE,
  ENDSAVE,
  OBTENER_EXPERIENCIA_LABORAL,
  LOAD_DELETE_ESTUDIO,
  DELETE_ESTUDIO,
  DELETE_ESTUDIO_ERROR,
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
  LOAD_ADJUNTO,
  OBTENER_ADJUNTO_SAVE,
  SAVE_ADJUNTO,
  END_SAVE_ADJUNTO,
  SAVE_ADJUNTO_ERROR,
  // CARGAR_PROGRESO_ERROR
} from '../types'

export function loadProgress(id: any) {
  return async (dispatch: any) => {
    try {
      const { data }: any = await apiDatosPersonales.EvaluadorEvaluado(id)
      console.log(data.detail)
      dispatch(cargarProgreso(data.detail))
    } catch (error) {
      console.log(error)
      dispatch(cargarDataError(true))
    }
  }
}
// cargar info
export function loadInfoGeneral(datos: any) {
  return async (dispatch: any) => {
    dispatch(cargarData())
		
    try {

			console.log(datos);
      const { data }: any = await apiDatosPersonales.personaObtener(datos.user)
      console.log(data)

      const eva: any = await apiDatosPersonales.EvaluadorEvaluado(
        data.idPersona
      )
      const progreso = eva.data[0]
      console.log(progreso)
      dispatch(cargarProgreso(progreso))

      dispatch(cargarDataExito(data))
    } catch (error) {
      console.log(error)
      dispatch(cargarDataError(true))
    }
  }
}

export function saveContacto(datos: any) {
  return async (dispatch: any) => {
    dispatch(initSaveContact())

    try {
      const resp: any = await apiDatosPersonales.personaGuardar(datos)
      console.log(resp.data)
      if (resp.data.status === true) {
        const eva: any = await apiDatosPersonales.EvaluadorEvaluado(
          datos.idPersona
        )
        const progreso = eva.data[0]
        console.log(progreso)
        dispatch(cargarProgreso(progreso))

        dispatch(saveContactExito(datos))

        Swal.fire({
          title: 'Portal de Docentes',
          text: `Datos de contacto se guardaron correctamente.`,
          icon: 'success',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK',
        })
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
    } catch (error) {
      console.log(error)
      dispatch(saveContactError(true))
      Swal.fire({
        title: 'Portal de Docentes',
        text: `Ocurrio un error inesperado.`,
        icon: 'warning',
        showCancelButton: false,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'OK',
      })
      return false
    }
  }
}

export function saveExpLab(datos: any) {
  return async (dispatch: any) => {
    dispatch(LoadSave(true))

    try {
      const resp: any = await apiDatosPersonales.experienciaLaboralGuardar(
        datos
      )
      console.log(resp.data)
      const status = resp.data.status
      if (status === true) {
        Swal.fire({
          title: 'Portal de Docentes',
          text: `Los Datos se guardaron correctamente.`,
          icon: 'success',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK',
        })
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

      const { data }: any = await apiDatosPersonales.experienciaLaboralObtener(
        datos.IdPersona
      )
      console.log(Object.values(data))
      dispatch(getExpLab(Object.values(data)))

      dispatch(saveExpLabExito())
      dispatch(endSave(false))

      const eva: any = await apiDatosPersonales.EvaluadorEvaluado(
        datos.IdPersona
      )
      const progreso = eva.data[0]
      console.log(progreso)
      dispatch(cargarProgreso(progreso))
      // return respuesta
    } catch (error) {
      console.log(error)
      dispatch(saveExpLabError(true))
    }
  }
}

export function saveEstudiosAction(datos: any) {
  return async (dispatch: any) => {
    dispatch(LoadSaveEstudy(true))

    try {
      const resp: any = await apiDatosPersonales.estudioGuardar(datos)
      console.log(resp.data)
      const status = resp.data.detail.status
      if (status === true) {
        Swal.fire({
          title: 'Estudios',
          text: `Los Datos se guardaron correctamente.`,
          icon: 'success',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK',
        })
      } else {
        Swal.fire({
          title: 'Estudios',
          text: `Ocurrio un error inesperado.`,
          icon: 'warning',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK',
        })
      }

      const { data }: any = await apiDatosPersonales.estudio(datos.IdPersona)
      console.log(Object.values(data))
      dispatch(getObtenerEstudios(Object.values(data)))

      dispatch(saveEstudio())
      dispatch(endSaveEstudio(false))

      const eva: any = await apiDatosPersonales.EvaluadorEvaluado(
        datos.IdPersona
      )
      const progreso = eva.data[0]
      console.log(progreso)
      dispatch(cargarProgreso(progreso))
    } catch (error) {
      console.log(error)
      dispatch(saveEstudioError(true))
    }
  }
}

export function saveIdiomasAction(datos: any) {
  return async (dispatch: any) => {
    dispatch(LoadSaveIdioma(true))

    try {
      const resp: any = await apiDatosPersonales.personaIdiomaGuardar(datos)
      console.log(resp.data)
      const status = resp.data.status
      if (status === true) {
        Swal.fire({
          title: 'Idiomas',
          text: `Los Datos se guardaron correctamente.`,
          icon: 'success',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK',
        })
      } else {
        Swal.fire({
          title: 'Idiomas',
          text: `Ocurrio un error inesperado.`,
          icon: 'warning',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK',
        })
      }

      const { data }: any = await apiDatosPersonales.personaIdioma(
        datos.IdPersona
      )
      console.log(Object.values(data))
      dispatch(getObtenerIdiomasPersona(Object.values(data)))

      dispatch(saveIdioma())
      dispatch(endSaveIdioma(false))

      const eva: any = await apiDatosPersonales.EvaluadorEvaluado(
        datos.IdPersona
      )
      const progreso = eva.data[0]
      console.log(progreso)
      dispatch(cargarProgreso(progreso))
    } catch (error) {
      console.log(error)
      dispatch(saveIdiomaError(true))
    }
  }
}

export function saveAdjuntoAction(datos: any) {
  return async (dispatch: any) => {
    dispatch(LoadSaveAdjunto(true))

    try {
      const resp: any = await apiDatosPersonales.personaAdjuntoGuardar(datos)
      console.log(resp.data)
      const status = resp.data.status
      if (status === true) {
        Swal.fire({
          title: 'Adjunto',
          text: `Los Datos se guardaron correctamente.`,
          icon: 'success',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK',
        })
      } else {
        Swal.fire({
          title: 'Adjunto',
          text: `Ocurrio un error inesperado.`,
          icon: 'warning',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK',
        })
      }

      const { data }: any = await apiDatosPersonales.personaAdjunto(
        datos.IdPersona
      )
      console.log(Object.values(data))
      dispatch(getObtenerAdjuntoPersona(Object.values(data)))

      dispatch(saveAdjunto())
      dispatch(endSaveAdjunto(false))

      const eva: any = await apiDatosPersonales.EvaluadorEvaluado(
        datos.IdPersona
      )
      const progreso = eva.data[0]
      dispatch(cargarProgreso(progreso))
    } catch (error) {
      console.log(error)
      dispatch(saveAdjuntoError(true))
    }
  }
}

// LoadSaveRefLab
export function saveRefLabAction(datos: any) {
  return async (dispatch: any) => {
    dispatch(LoadSaveRefLab(true))

    try {
      const resp: any = await apiDatosPersonales.referenciaLaboralGuardar(datos)
      console.log(resp.data)
      const status = resp.data.status
      if (status === true) {
        Swal.fire({
          title: 'Referencia Laboral',
          text: `Los Datos se guardaron correctamente.`,
          icon: 'success',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK',
        })
      } else {
        Swal.fire({
          title: 'Referencia Laboral',
          text: `Ocurrio un error inesperado.`,
          icon: 'warning',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK',
        })
      }

      const { data }: any = await apiDatosPersonales.referenciaLaboral(
        datos.IdPersona
      )
      console.log(Object.values(data))
      dispatch(getObtenerRefLabPersona(Object.values(data)))

      dispatch(saveRefLab())
      dispatch(endSaveRefLab(false))

      const eva: any = await apiDatosPersonales.EvaluadorEvaluado(
        datos.IdPersona
      )
      const progreso = eva.data[0]
      console.log(progreso)
      dispatch(cargarProgreso(progreso))
    } catch (error) {
      console.log(error)
      dispatch(saveRefLabError(true))
    }
  }
}

export function saveConoAction(datos: any) {
  return async (dispatch: any) => {
    dispatch(LoadSaveCono(true))

    try {
      const resp: any = await apiDatosPersonales.personaConocimientoGuardar(
        datos
      )
      console.log(resp.data)
      const status = resp.data.status
      if (status === true) {
        Swal.fire({
          title: 'Conocimientos',
          text: `Los Datos se guardaron correctamente.`,
          icon: 'success',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK',
        })
      } else {
        Swal.fire({
          title: 'Conocimientos',
          text: `Ocurrio un error inesperado.`,
          icon: 'warning',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK',
        })
      }

      const { data }: any = await apiDatosPersonales.personaConocimientoObtener(
        datos.IdPersona
      )
      console.log(Object.values(data))
      dispatch(getObtenerConos(Object.values(data)))

      dispatch(saveCono())
      dispatch(endSaveCono(false))

      const eva: any = await apiDatosPersonales.EvaluadorEvaluado(
        datos.IdPersona
      )
      const progreso = eva.data[0]
      console.log(progreso)
      dispatch(cargarProgreso(progreso))
    } catch (error) {
      console.log(error)
      dispatch(saveConoError(true))
    }
  }
}

export function deleteExpLab(datos: any) {
  return async (dispatch: any) => {
    dispatch(LoadDelete())

    try {
      const resp: any = await apiDatosPersonales.experienciaLaboralGuardar(
        datos
      )
      console.log(resp.data)
      const status = resp.data.detail.status
      if (status === true) {
        Swal.fire({
          title: 'Experiencia Laboral',
          text: `Los datos fueron eliminados correctamente.`,
          icon: 'success',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK',
        })
      } else {
        Swal.fire({
          title: 'Experiencia Laboral',
          text: `Ocurrio un error inesperado.`,
          icon: 'warning',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK',
        })
      }

      dispatch(deleteExpLabExito(datos.idExperienciaLaboral))

      const eva: any = await apiDatosPersonales.EvaluadorEvaluado(
        datos.IdPersona
      )
      const progreso = eva.data[0]
      console.log(progreso)
      dispatch(cargarProgreso(progreso))
    } catch (error) {
      console.log(error)
      dispatch(deleteExpLabError(true))
    }
  }
}

export function deleteEstudio(datos: any) {
  return async (dispatch: any) => {
    dispatch(LoadDeleteEstudio())

    try {
      const resp: any = await apiDatosPersonales.estudioGuardar(datos)
      console.log(resp.data)
      const status = resp.data.status
      if (status === true) {
        Swal.fire({
          title: 'Estudios',
          text: `Los datos fueron eliminados correctamente.`,
          icon: 'success',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK',
        })
      } else {
        Swal.fire({
          title: 'Estudios',
          text: `Ocurrio un error inesperado.`,
          icon: 'warning',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK',
        })
      }

      dispatch(deleteEstudioAction(datos.idEstudio))

      const eva: any = await apiDatosPersonales.EvaluadorEvaluado(
        datos.IdPersona
      )
      const progreso = eva.data[0]
      console.log(progreso)
      dispatch(cargarProgreso(progreso))
    } catch (error) {
      console.log(error)
      dispatch(deleteEstudioError(true))
    }
  }
}

export function deleteConocimiento(datos: any) {
  return async (dispatch: any) => {
    dispatch(LoadDeleteConocimiento())

    try {
      const resp: any = await apiDatosPersonales.personaConocimientoGuardar(
        datos
      )
      console.log(resp.data)
      const status = resp.data.status
      if (status === true) {
        Swal.fire({
          title: 'Conocimientos',
          text: `Los datos fueron eliminados correctamente.`,
          icon: 'success',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK',
        })
      } else {
        Swal.fire({
          title: 'Conocimientos',
          text: `Ocurrio un error inesperado.`,
          icon: 'warning',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK',
        })
      }

      dispatch(deleteConocimientoAction(datos.idPersonaConocimiento))

      const eva: any = await apiDatosPersonales.EvaluadorEvaluado(
        datos.IdPersona
      )
      const progreso = eva.data[0]
      console.log(progreso)
      dispatch(cargarProgreso(progreso))
    } catch (error) {
      console.log(error)
      dispatch(deleteConocimientoError(true))
    }
  }
}

export function deleteIdiomas(datos: any) {
  return async (dispatch: any) => {
    dispatch(LoadDeleteIdioma())

    try {
      const resp: any = await apiDatosPersonales.personaIdiomaGuardar(datos)
      console.log(resp.data)
      const status = resp.data.status
      if (status === true) {
        Swal.fire({
          title: 'Idiomas',
          text: `Los datos fueron eliminados correctamente.`,
          icon: 'success',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK',
        })
      } else {
        Swal.fire({
          title: 'Idiomas',
          text: `Ocurrio un error inesperado.`,
          icon: 'warning',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK',
        })
      }

      dispatch(deleteIdiomaAction(datos.idPersonaIdioma))

      const eva: any = await apiDatosPersonales.EvaluadorEvaluado(
        datos.IdPersona
      )
      const progreso = eva.data[0]
      console.log(progreso)
      dispatch(cargarProgreso(progreso))
    } catch (error) {
      console.log(error)
      dispatch(deleteIdiomaError(true))
    }
  }
}

export function deleteRefLab(datos: any) {
  return async (dispatch: any) => {
    dispatch(LoadDeleteRefLab())

    try {
      const resp: any = await apiDatosPersonales.referenciaLaboralGuardar(datos)
      console.log(resp.data)
      const status = resp.data.status
      if (status === true) {
        Swal.fire({
          title: 'Referencia Laboral',
          text: `Los datos fueron eliminados correctamente.`,
          icon: 'success',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK',
        })
      } else {
        Swal.fire({
          title: 'Referencia Laboral',
          text: `Ocurrio un error inesperado.`,
          icon: 'warning',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK',
        })
      }

      dispatch(deleteRefLabAction(datos.idPersonaIdioma))

      const eva: any = await apiDatosPersonales.EvaluadorEvaluado(
        datos.IdPersona
      )
      const progreso = eva.data[0]
      console.log(progreso)
      dispatch(cargarProgreso(progreso))
    } catch (error) {
      console.log(error)
      dispatch(deleteRefLabError(true))
    }
  }
}

export function deleteDocs(datos: any) {
  return async (dispatch: any) => {
    dispatch(LoadDeleteDocs())

    try {
      const resp: any = await apiDatosPersonales.personaAdjuntoGuardar(datos)
      console.log(resp.data)
      const status = resp.data.status
      if (status === true) {
        Swal.fire({
          title: 'Documentos Adjuntos',
          text: `Los datos fueron eliminados correctamente.`,
          icon: 'success',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK',
        })
      } else {
        Swal.fire({
          title: 'Documentos Adjuntos',
          text: `Ocurrio un error inesperado.`,
          icon: 'warning',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK',
        })
      }

      dispatch(deleteDocsAction(datos.idPersonaIdioma))

      const eva: any = await apiDatosPersonales.EvaluadorEvaluado(
        datos.IdPersona
      )
      const progreso = eva.data[0]
      console.log(progreso)
      dispatch(cargarProgreso(progreso))
    } catch (error) {
      console.log(error)
      dispatch(deleteDocsError(true))
    }
  }
}

const LoadSave = (payload: any) => ({
  type: LOADSAVE,
  payload,
})

const endSave = (payload: any) => ({
  type: ENDSAVE,
  payload,
})

const initSaveContact = () => ({
  type: INIT_SAVE_CONTACT,
})

const saveContactExito = (payload: any) => ({
  type: SAVE_CONTACT_EXITO,
  payload,
})

const saveContactError = (payload: any) => ({
  type: SAVE_CONTACT_ERROR,
  payload,
})

const cargarData = () => ({
  type: CARGAR_INFO_GENERAL,
})

const cargarDataExito = (payload: any) => ({
  type: CARGAR_INFO_GENERAL_EXITO,
  payload,
})

const cargarDataError = (payload: any) => ({
  type: CARGAR_INFO_GENERAL_ERROR,
  payload,
})

/* const saveEditEL = (payload: any) => ({ 
	type: SAVE_EDIT_EL,
	payload
}) */

/* const addFoto = () => ({
  type: AGREGAR_FOTO,
}) */

const LoadDelete = () => ({
  type: LOAD_DELETE_EXPLAB,
})

const LoadDeleteEstudio = () => ({
  type: LOAD_DELETE_ESTUDIO,
})

const deleteExpLabError = (payload: any) => ({
  type: DELETE_EXPERIENCIA_LABORAL_ERROR,
  payload,
})

const deleteEstudioError = (payload: any) => ({
  type: DELETE_ESTUDIO_ERROR,
  payload,
})

const deleteExpLabExito = (payload: any) => ({
  type: DELETE_EXPERIENCIA_LABORAL,
  payload,
})

const deleteEstudioAction = (payload: any) => ({
  type: DELETE_ESTUDIO,
  payload,
})

const saveExpLabExito = () => ({
  type: SAVE_EXPERIENCIA_LABORAL,
})

const saveExpLabError = (payload: any) => ({
  type: SAVE_EXPERIENCIA_LABORAL_ERROR,
  payload,
})

const getExpLab = (payload: any) => ({
  type: OBTENER_EXPERIENCIA_LABORAL,
  payload,
})

const LoadDeleteConocimiento = () => ({
  type: LOAD_DELETE_CONOCIMIENTO,
})

const deleteConocimientoAction = (payload: any) => ({
  type: DELETE_CONOCIMIENTO,
  payload,
})

const deleteConocimientoError = (payload: any) => ({
  type: DELETE_CONOCIMIENTO_ERROR,
  payload,
})

const LoadDeleteIdioma = () => ({
  type: LOAD_DELETE_IDIOMA,
})

const deleteIdiomaAction = (payload: any) => ({
  type: DELETE_IDIOMA,
  payload,
})

const deleteIdiomaError = (payload: any) => ({
  type: DELETE_IDIOMA_ERROR,
  payload,
})

const LoadDeleteRefLab = () => ({
  type: LOAD_DELETE_REFLAB,
})

const deleteRefLabAction = (payload: any) => ({
  type: DELETE_REFLAB,
  payload,
})

const deleteRefLabError = (payload: any) => ({
  type: DELETE_REFLAB_ERROR,
  payload,
})

const LoadDeleteDocs = () => ({
  type: LOAD_DELETE_DOCS,
})

const deleteDocsAction = (payload: any) => ({
  type: DELETE_DOCS,
  payload,
})

const deleteDocsError = (payload: any) => ({
  type: DELETE_DOCS_ERROR,
  payload,
})

const LoadSaveEstudy = (payload: any) => ({
  type: LOAD_ESTUDIOS,
  payload,
})

const LoadSaveIdioma = (payload: any) => ({
  type: LOAD_IDIOMAS,
  payload,
})

const LoadSaveRefLab = (payload: any) => ({
  type: LOAD_REFLAB,
  payload,
})

const LoadSaveCono = (payload: any) => ({
  type: LOAD_CONOCIMIENTOS,
  payload,
})

const getObtenerEstudios = (payload: any) => ({
  type: OBTENER_ESTUDIOS,
  payload,
})

const getObtenerIdiomasPersona = (payload: any) => ({
  type: OBTENER_IDIOMAS_SAVE,
  payload,
})

//
const getObtenerRefLabPersona = (payload: any) => ({
  type: OBTENER_REFLAB_SAVE,
  payload,
})

const getObtenerConos = (payload: any) => ({
  type: OBTENER_CONOCIMIENTOS,
  payload,
})

const saveEstudio = () => ({
  type: SAVE_ESTUDIO,
})

const saveIdioma = () => ({
  type: SAVE_IDIOMAS,
})

//
const saveRefLab = () => ({
  type: SAVE_REFLAB,
})

const saveCono = () => ({
  type: SAVE_CONOCIMIENTO,
})

const endSaveEstudio = (payload: any) => ({
  type: END_SAVE,
  payload,
})

const endSaveIdioma = (payload: any) => ({
  type: END_SAVE_IDIOMAS,
  payload,
})

// END_SAVE_REFLAB
const endSaveRefLab = (payload: any) => ({
  type: END_SAVE_REFLAB,
  payload,
})

const endSaveCono = (payload: any) => ({
  type: END_SAVE_CONOCIMIENTO,
  payload,
})

const saveEstudioError = (payload: any) => ({
  type: SAVE_ESTUDIO_ERROR,
  payload,
})

const saveIdiomaError = (payload: any) => ({
  type: SAVE_IDIOMAS_ERROR,
  payload,
})

const saveRefLabError = (payload: any) => ({
  type: SAVE_REFLAB_ERROR,
  payload,
})

const saveConoError = (payload: any) => ({
  type: SAVE_CONOCIMIENTO_ERROR,
  payload,
})

const cargarProgreso = (payload: any) => ({
  type: CARGAR_PROGRESO,
  payload,
})

/* const cargarProgresoError = (payload: any) => ({
  type: CARGAR_PROGRESO_ERROR,
  payload,
}) */

const LoadSaveAdjunto = (payload: any) => ({
  type: LOAD_ADJUNTO,
  payload,
})

const getObtenerAdjuntoPersona = (payload: any) => ({
  type: OBTENER_ADJUNTO_SAVE,
  payload,
})

const saveAdjunto = () => ({
  type: SAVE_ADJUNTO,
})

const endSaveAdjunto = (payload: any) => ({
  type: END_SAVE_ADJUNTO,
  payload,
})

const saveAdjuntoError = (payload: any) => ({
  type: SAVE_ADJUNTO_ERROR,
  payload,
})
