import axiosfetchPublic from '../../../config/axios'
import { catchingErrorApi } from '../../../helpers/helpers'

const API = {
  listInit: async (teacherCode: string) => {
    try {
      const URL = `/delegado/delegateList/${teacherCode}`
      const result = await axiosfetchPublic(URL)
      return result
    } catch (error) {
      catchingErrorApi(error)
    }
  },
  listByClass: async (classCode: string) => {
    try {
      const URL = `/delegado/list/${classCode}`
      const result = await axiosfetchPublic(URL)
      return result
    } catch (error) {
      catchingErrorApi(error)
    }
  },
  createDelegate: async (classCode: string, xmlData: string) => {
    try {
      const URL = `/delegado/create/`
      const result = await axiosfetchPublic.post(URL, { classCode, xmlData })
      return result.data
    } catch (error) {
      catchingErrorApi(error)
    }
  },
  deleteDelegate: async (classCode: string, xmlData: string) => {
    try {
      const URL = `/delegado/delete/`
      const result = await axiosfetchPublic.post(URL, { classCode, xmlData })
      return result.data
    } catch (error) {
      catchingErrorApi(error)
    }
  },
}

export default API
