import axiosfetchPublic from '../../../config/axios'
import { catchingErrorApi } from '../../../helpers/helpers'

const API = {
  listHeadquartersBanners: async (exclude: any) => {
    try {
      const URL = `/disponibilidad-horario/HeadquartersBanners/${exclude}`
      const result: any = await axiosfetchPublic(URL)
      return result.data
    } catch (error) {
      catchingErrorApi(error)
    }
  },
  listSemesterUnitBusinessCode: async (CodeHeadquarters: any) => {
    try {
      const URL = `/disponibilidad-horario/SemesterUnitBusinessCode/${CodeHeadquarters}`
      const result: any = await axiosfetchPublic(URL)
      return result.data
    } catch (error) {
      catchingErrorApi(error)
    }
  },
  listTeacherAvailability: async (action: any, user: any, day: any) => {
    try {
      const URL = `/disponibilidad-horario/TeacherAvailability/${action}/${user}/${day}`
      const result: any = await axiosfetchPublic(URL)
      return result.data
    } catch (error) {
      catchingErrorApi(error)
    }
  },
  CrudAvailability: async (item: any) => {
    try {
      const URL = `/disponibilidad-horario/CrudAvailability/`
      const result: any = await axiosfetchPublic.post(URL, item)
      return result.data
    } catch (error) {
      catchingErrorApi(error)
    }
  },
}

export default API
