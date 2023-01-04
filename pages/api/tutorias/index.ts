import axiosfetchPublic from '../../../config/axios'
import { catchingErrorApi } from '../../../helpers/helpers'

const API = {
  tutorials: async (traCode: any) => {
    try {
      const URL = `/tutorias/tutorials/${traCode}`
      const result: any = await axiosfetchPublic(URL)
      return result.data
    } catch (error) {
      catchingErrorApi(error)
    }
  },
  TeacherNotesStudentTutorin: async (clasCode: any, semCode: any) => {
    try {
      const URL = `/tutorias/TeacherNotesStudentTutorin/${clasCode}/${semCode}`
      const result: any = await axiosfetchPublic(URL)
      return result.data
    } catch (error) {
      catchingErrorApi(error)
    }
  },
  StudentTutoring: async (codAlu: any) => {
    try {
      const URL = `/tutorias/StudentTutoring/${codAlu}`
      const result: any = await axiosfetchPublic(URL)
      return result.data
    } catch (error) {
      catchingErrorApi(error)
    }
  },
  EmployeeLogin: async (userName: any) => {
    try {
      const URL = `/tutorias/EmployeeLogin/${userName}`
      const result: any = await axiosfetchPublic(URL)
      return result.data
    } catch (error) {
      catchingErrorApi(error)
    }
  },
}

export default API
