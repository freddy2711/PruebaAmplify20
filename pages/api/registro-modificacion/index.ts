import axiosfetchPublic from '../../../config/axios'
import { catchingErrorApi } from '../../../helpers/helpers'

const API = {
  listSolicitudes: async (teacherCode: any) => {
    try {
      const URL = `/registro-modificacion/listSolicitud/${teacherCode}`
      const result: any = await axiosfetchPublic(URL)
      return result.data
    } catch (error) {
      catchingErrorApi(error)
    }
  },
  listCoursesByTeacher: async (UserID: any) => {
    try {
      const URL = `/registro-modificacion/list/${UserID}`
      const result: any = await axiosfetchPublic(URL)
      return result.data
    } catch (error) {
      catchingErrorApi(error)
    }
  },
  notesClass: async (classCode: string) => {
    try {
      const URL = `/registro-modificacion/notesClass/${classCode}`
      const result: any = await axiosfetchPublic(URL)

      console.log(result)

      if (result.status === true) {
        console.log('status', result?.status)
      }
      return result.data
    } catch (error) {
      console.log(error)
      catchingErrorApi(error)
    }
  },
  listStudent: async (classCode: string, noteId: string) => {
    try {
      const URL = `/registro-modificacion/listStudent/${classCode}/${noteId}`
      const result: any = await axiosfetchPublic(URL)

      console.log(result)

      if (result.status === true) {
        console.log('status', result?.status)
      }
      return result.data
    } catch (error) {
      console.log(error)
      catchingErrorApi(error)
    }
  },
  cancelar: async (requestId: string) => {
    try {
      const URL = `/registro-modificacion/cancelar/${requestId}`
      const result: any = await axiosfetchPublic(URL)

      console.log(result)

      if (result.status === true) {
        console.log('status', result?.status)
      }
      return result.data
    } catch (error) {
      console.log(error)
      catchingErrorApi(error)
    }
  },
  register: async (item: any) => {
    try {
      const URL = `/registro-modificacion/register`
      const result: any = await axiosfetchPublic.post(URL, item)
      return result.data
    } catch (error) {
      catchingErrorApi(error)
    }
  },
  validationNotes: async (item: any) => {
    try {
      const URL = `/registro-modificacion/validationNotes`
      const result: any = await axiosfetchPublic.post(URL, item)
      if (result.status === true) {
        console.log('status', result?.status)
      }
      return result.data
    } catch (error) {
      console.log(error)
      catchingErrorApi(error)
    }
  },
  validationPlazo: async (
    classCode: string,
    carCode: string,
    semCode: string,
    sedCode: string,
    noteId: string
  ) => {
    try {
      const URL = `/registro-modificacion/validationPlazo/${classCode}/${carCode}/${semCode}/${sedCode}/${noteId}`
      const result: any = await axiosfetchPublic(URL)
      if (result.status === true) {
        console.log('status', result?.status)
      }
      return result.data
    } catch (error) {
      console.log(error)
      catchingErrorApi(error)
    }
  },
  email: async (emailJson: any) => {
    const URL = `/registro-modificacion/email`
    try {
      const result = await axiosfetchPublic.post(URL, emailJson)
      return result
    } catch (error) {
      catchingErrorApi(error)
    }
  },
  detalles: async (requestId: string) => {
    try {
      const URL = `/registro-modificacion/detalles/${requestId}`
      const result: any = await axiosfetchPublic(URL)

      console.log(result)

      if (result.status === true) {
        console.log('status', result?.status)
      }
      return result.data
    } catch (error) {
      console.log(error)
      catchingErrorApi(error)
    }
  },
  emailCC: async (classCode: string) => {
    const URL = `/registro-modificacion/emailCC/${classCode}`
    try {
      const result = await axiosfetchPublic(URL)
      return result.data
    } catch (error) {
      catchingErrorApi(error)
    }
  },
  emailDAS: async (sedCode: string) => {
    const URL = `/registro-modificacion/emailDAS/${sedCode}`
    try {
      const result = await axiosfetchPublic(URL)
      return result.data
    } catch (error) {
      catchingErrorApi(error)
    }
  },
}

export default API
