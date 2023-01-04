import axiosfetchPublic from '../../../config/axios'
import { catchingErrorApi } from '../../../helpers/helpers'

const API = {
  listCourseTeacher: async (teacherCode: any) => {
    try {
      const URL = `/reportes-academicos/list/${teacherCode}`
      const result: any = await axiosfetchPublic(URL)
      return result.data
    } catch (error) {
      catchingErrorApi(error)
    }
  },
  listTutoria: async (teacherCode: any) => {
    try {
      const URL = `/reportes-academicos/listTutoria/${teacherCode}`
      const result: any = await axiosfetchPublic(URL)
      return result.data
    } catch (error) {
      catchingErrorApi(error)
    }
  },
  listClassAttendance: async (classCode: any) => {
    try {
      const URL = `/reportes-academicos/listClassAttendance/${classCode}`
      const result: any = await axiosfetchPublic(URL)
      return result.data
    } catch (error) {
      catchingErrorApi(error)
    }
  },
  listNotes: async (classCode: any) => {
    try {
      const URL = `/reportes-academicos/listNotes/${classCode}`
      const result: any = await axiosfetchPublic(URL)
      return result.data
    } catch (error) {
      catchingErrorApi(error)
    }
  },
  listClassStatistics: async (
    classCode: any,
    TraCode: any,
    CarCode: any,
    DepCode: any
  ) => {
    try {
      const obj = {
        classCode,
        TraCode,
        CarCode,
        DepCode,
      }
      const URL = `/reportes-academicos/listClassStatistics/`
      const result: any = await axiosfetchPublic.post(URL, { obj })
      return result.data
    } catch (error) {
      catchingErrorApi(error)
    }
  },
  listCompetenceGeneralByClass: async (classCode: any) => {
    try {
      const URL = `/reportes-academicos/listCompetenceGeneralByClass/${classCode}`
      const result: any = await axiosfetchPublic(URL)
      return result.data
    } catch (error) {
      catchingErrorApi(error)
    }
  },
  listCompetenceSchedule: async (classId: any, noteId: any) => {
    try {
      const URL = `/reportes-academicos/listCompetenceSchedule/${classId}/${noteId}`
      const result: any = await axiosfetchPublic(URL)
      return result.data
    } catch (error) {
      catchingErrorApi(error)
    }
  },
  listDetailClass: async (classCode: any, parameterCode: any) => {
    try {
      const URL = `/reportes-academicos/listDetailClass/${classCode}/${parameterCode}`
      const result: any = await axiosfetchPublic(URL)
      return result.data
    } catch (error) {
      catchingErrorApi(error)
    }
  },
}

export default API
