import axiosfetchPublic from '../../../config/axios'
import { catchingErrorApi } from '../../../helpers/helpers'

const API = {
  listSesionesSolicitud: async (teacherCode: string) => {
    try {
      const URL = `/solicitud-de-marcacion/list/${teacherCode}`
      const result = await axiosfetchPublic(URL)
      return result
    } catch (error) {
      catchingErrorApi(error)
    }
  },
  detailClass: async (item: any) => {
    try {
      const URL = `/solicitud-de-marcacion/detailClass`
      const result = await axiosfetchPublic.post(URL, item)
      return result
    } catch (error) {
      catchingErrorApi(error)
    }
  },
  cheAsisAlum: async (
    aula: string | null,
    ctrlClassId: string,
    fecha: string
  ) => {

    try {
      const URL = `/solicitud-de-marcacion/chequeAsisAlum/${aula}/${ctrlClassId}/${fecha}`
      const result = await axiosfetchPublic(URL)
      return result
    } catch (error) {
      catchingErrorApi(error)
    }
  },
  getSesionesDocenteSolicitarValidar: async (item: any) => {
    try {
      const URL = `/solicitud-de-marcacion/getSesionesDocenteSolicitarValidar`
      const result = await axiosfetchPublic.post(URL, item)
      return result
    } catch (error) {
      catchingErrorApi(error)
    }
  },
  sesionesAsistenciaSolicitarValidar: async (
    classId: string,
    classCode: string
  ) => {
    try {
      const URL = `/solicitud-de-marcacion/sesionesAsistenciaSolicitarValidar/${classId}/${classCode}`
      const result = await axiosfetchPublic(URL)
      return result
    } catch (error) {
      catchingErrorApi(error)
    }
  },
  actualizaSesionAbiertaSolicitud: async (item: any) => {
    try {
      const URL = `/solicitud-de-marcacion/actualizaSesionAbiertaSolicitud`
      const result = await axiosfetchPublic.post(URL, item)
      return result
    } catch (error) {
      catchingErrorApi(error)
    }
  },
  endSesion: async (
    iControlClase: string,
    user: string,
    observation: string
  ) => {
    const URL = `/solicitud-de-marcacion/endSesion/${iControlClase}/${user}/${observation}`
    const result = await axiosfetchPublic(URL)
    return result
  },
  insertar: async (item: any) => {
    const URL = `/solicitud-de-marcacion/insertar`
    const result = await axiosfetchPublic.post(URL, item)
    return result
  },
}

export default API
