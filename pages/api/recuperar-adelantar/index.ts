import axiosfetchPublic from '../../../config/axios'
import { catchingErrorApi } from '../../../helpers/helpers'

const API = {
  listGetRecovery: async (teacherCode: any, pend: any) => {
    try {
      const URL = `/recuperar-adelantar/list/${teacherCode}/${pend}`
      const result: any = await axiosfetchPublic(URL)
      return result.data
    } catch (error) {
      catchingErrorApi(error)
    }
  },
  listTeacherCourses: async (teacherCode: any) => {
    try {
      const URL = `/recuperar-adelantar/listTeacherCourses/${teacherCode}`
      const result: any = await axiosfetchPublic(URL)
      return result.data
    } catch (error) {
      catchingErrorApi(error)
    }
  },
  listDateHoliday: async (sedeCode: any) => {
    try {
      const URL = `/recuperar-adelantar/listDateHoliday/${sedeCode}`
      const result: any = await axiosfetchPublic(URL)
      return result.data
    } catch (error) {
      catchingErrorApi(error)
    }
  },
  listClassDate: async (
    classCode: string,
    teacherCode: string,
    action: string
  ) => {
    try {
      const URL = `/recuperar-adelantar/listClassDate/${classCode}/${teacherCode}/${action}`
      const result: any = await axiosfetchPublic(URL)
      return result.data
    } catch (error) {
      catchingErrorApi(error)
    }
  },
  listLaboratories: async () => {
    try {
      const URL = `/recuperar-adelantar/listLaboratories`
      const result: any = await axiosfetchPublic(URL)
      return result.data
    } catch (error) {
      catchingErrorApi(error)
    }
  },
  ScheduleSessions: async (
    action: string,
    classCode: string,
    semesterCode: string,
    date: string,
    teacherCode: string
  ) => {
    try {
      const obj = {
        action,
        classCode,
        semesterCode,
        date,
        teacherCode,
      }

      const URL = `/recuperar-adelantar/ScheduleSessions/`
      const result: any = await axiosfetchPublic.post(URL, { obj })
      return result.data
    } catch (error) {
      catchingErrorApi(error)
    }
  },
  ClasEnabled: async (
    classroom: string,
    sedeCode: string,
    date: string,
    hours: string,
    quantity: string
  ) => {
    try {
      const URL = `/recuperar-adelantar/ClasEnabled/${classroom}/${sedeCode}/${date}/${hours}/${quantity}`
      const result: any = await axiosfetchPublic(URL)
      return result.data
    } catch (error) {
      catchingErrorApi(error)
    }
  },
  ClasEnabledEdit: async (
    classroom: string,
    sedeCode: string,
    date: string,
    hours: string,
    quantity: string
  ) => {
    try {
      const URL = `/recuperar-adelantar/ClasEnabledEdit/${classroom}/${sedeCode}/${date}/${hours}/${quantity}`
      const result: any = await axiosfetchPublic(URL)
      return result.data
    } catch (error) {
      catchingErrorApi(error)
    }
  },
  AttendanceRecoverys: async (
    classCode: any,
    teacherCode: any,
    classDate: any,
    dateRequired: any,
    codeHour: any,
    nroHours: any,
    classRoomCode: any,
    user: any,
    host: any,
    hourIdProgInitial: any,
    hourIdProgFinal: any,
    type: any,
    path: any
  ) => {
    try {
      const obj = {
        classCode,
        teacherCode,
        classDate,
        dateRequired,
        codeHour,
        nroHours,
        classRoomCode,
        user,
        host,
        hourIdProgInitial,
        hourIdProgFinal,
        type,
        path,
      }
      const URL = `/recuperar-adelantar/AttendanceRecoverys/`
      const result: any = await axiosfetchPublic.post(URL, { obj })
      return result
    } catch (error) {
      catchingErrorApi(error)
    }
  },
  ClassRecuperation: async (idRecuperation: any) => {
    try {
      const URL = `/recuperar-adelantar/ClassRecuperation/${idRecuperation}`
      const result: any = await axiosfetchPublic(URL)
      return result.data
    } catch (error) {
      catchingErrorApi(error)
    }
  },
  AttendanceRecoverysPUT: async (
    recoveryId: any,
    classDate: any,
    dateRequired: any,
    codeHour: any,
    nroHours: any,
    classRoomCode: any,
    user: any,
    host: any,
    type: any,
    path: any
  ) => {
    try {
      const obj = {
        recoveryId,
        classDate,
        dateRequired,
        codeHour,
        nroHours,
        classRoomCode,
        user,
        host,
        type,
        path,
      }
      const URL = `/recuperar-adelantar/AttendanceRecoverysPUT/`
      const result: any = await axiosfetchPublic.put(URL, { obj })
      return result
    } catch (error) {
      catchingErrorApi(error)
    }
  },
  DeleteRecovery: async (recoveryId: any) => {
    try {
      const URL = `/recuperar-adelantar/DeleteRecovery/${recoveryId}`
      const result: any = await axiosfetchPublic.delete(URL)
      return result
    } catch (error) {
      catchingErrorApi(error)
    }
  },
  GetTeacherUser: async (userName: any) => {
    try {
      const URL = `/recuperar-adelantar/GetTeacherUser/${userName}`
      const result: any = await axiosfetchPublic(URL)
      return result.data
    } catch (error) {
      catchingErrorApi(error)
    }
  },
  GetClassTeachers: async (Classcode: any) => {
    try {
      const URL = `/recuperar-adelantar/GetClassTeachers/${Classcode}`
      const result: any = await axiosfetchPublic(URL)
      return result.data
    } catch (error) {
      catchingErrorApi(error)
    }
  },
  GetTeacher: async (code: any) => {
    try {
      const URL = `/recuperar-adelantar/GetTeacher/${code}`
      const result: any = await axiosfetchPublic(URL)
      return result.data
    } catch (error) {
      catchingErrorApi(error)
    }
  },
  email: async (emailJson: any) => {
    const URL = `/recuperar-adelantar/email`
    const result = await axiosfetchPublic.post(URL, emailJson)
    return result
  },
  GetRateCampusCode: async (raceCode: any, campusCode: any) => {
    try {
      const URL = `/recuperar-adelantar/GetRateCampusCode/${raceCode}/${campusCode}`
      const result: any = await axiosfetchPublic(URL)
      return result.data
    } catch (error) {
      catchingErrorApi(error)
    }
  },
  GetProcessUser: async (carrCode: any, sedeCode: any) => {
    try {
      const URL = `/recuperar-adelantar/GetProcessUser/${carrCode}/${sedeCode}`
      const result: any = await axiosfetchPublic(URL)
      return result.data
    } catch (error) {
      catchingErrorApi(error)
    }
  },
}

export default API
