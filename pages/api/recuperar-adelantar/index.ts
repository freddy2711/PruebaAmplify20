import axiosfetchPublic from '../../../config/axios'

const API = {
  listGetRecovery: async (teacherCode: any, pend: any) => {
    const URL = `/recuperar-adelantar/list/${teacherCode}/${pend}`
    const result: any = await axiosfetchPublic(URL)
    return result.data
  },
  listTeacherCourses: async (teacherCode: any) => {
    const URL = `/recuperar-adelantar/listTeacherCourses/${teacherCode}`
    const result: any = await axiosfetchPublic(URL)
    return result.data
  },
  listDateHoliday: async (sedeCode: any) => {
    const URL = `/recuperar-adelantar/listDateHoliday/${sedeCode}`
    const result: any = await axiosfetchPublic(URL)
    return result.data
  },
  listClassDate: async (
    classCode: string,
    teacherCode: string,
    action: string
  ) => {
    const URL = `/recuperar-adelantar/listClassDate/${classCode}/${teacherCode}/${action}`
    const result: any = await axiosfetchPublic(URL)
    return result.data
  },
  listLaboratories: async () => {
    const URL = `/recuperar-adelantar/listLaboratories`
    const result: any = await axiosfetchPublic(URL)
    return result.data
  },
  ScheduleSessions: async (
    action: string,
    classCode: string,
    semesterCode: string,
    date: string,
    teacherCode: string
  ) => {
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
  },
  ClasEnabled: async (
    classCode: string,
    sedeCode: string,
    date: string,
    hours: string,
    quantity: string
  ) => {
    const URL = `/recuperar-adelantar/ClasEnabled/${classCode}/${sedeCode}/${date}/${hours}/${quantity}`
    const result: any = await axiosfetchPublic(URL)
    return result.data
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
  },
  ClassRecuperation: async (idRecuperation: any) => {
    const URL = `/recuperar-adelantar/ClassRecuperation/${idRecuperation}`
    const result: any = await axiosfetchPublic(URL)
    return result.data
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
  },
  DeleteRecovery: async (recoveryId: any) => {
    const URL = `/recuperar-adelantar/DeleteRecovery/${recoveryId}`
    const result: any = await axiosfetchPublic.delete(URL)
    return result
  },
  GetTeacherUser: async (userName: any) => {
    const URL = `/recuperar-adelantar/GetTeacherUser/${userName}`
    const result: any = await axiosfetchPublic(URL)
    return result.data
  },
  GetClassTeachers: async (Classcode: any) => {
    const URL = `/recuperar-adelantar/GetClassTeachers/${Classcode}`
    const result: any = await axiosfetchPublic(URL)
    return result.data
  },
  GetTeacher: async (code: any) => {
    const URL = `/recuperar-adelantar/GetTeacher/${code}`
    const result: any = await axiosfetchPublic(URL)
    return result.data
  },
  email: async (emailJson: any) => {
    const URL = `/recuperar-adelantar/email`
    const result = await axiosfetchPublic.post(URL, emailJson)
    return result
  },
  GetRateCampusCode: async (raceCode: any, campusCode: any) => {
    const URL = `/recuperar-adelantar/GetRateCampusCode/${raceCode}/${campusCode}`
    const result: any = await axiosfetchPublic(URL)
    return result.data
  },
}

export default API
