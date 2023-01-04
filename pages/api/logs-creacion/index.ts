import axiosfetchPublic from '../../../config/axios'
import { catchingErrorApi } from '../../../helpers/helpers'

const API = {
  listTokenActive: async (
    userCode: any,
    semesterCode: any,
    limitState: any
  ) => {
    try {
      const URL = `/logs-creacion/listTokenActive/${userCode}/${semesterCode}/${limitState}`
      const result: any = await axiosfetchPublic(URL)
      return result.data
    } catch (error) {
      catchingErrorApi(error)
    }
  },
  listTokenGenerate: async (userCode: any, semesterCode: any) => {
    try {
      const URL = `/logs-creacion/listTokenGenerate/${userCode}/${semesterCode}`
      const result: any = await axiosfetchPublic(URL)
      return result.data
    } catch (error) {
      catchingErrorApi(error)
    }
  },
}

export default API
