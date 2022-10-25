import axiosfetchPublic from "../../../config/axios"


const API = {

    listCourseTeacher: async (teacherCode: any) => {
        const URL = `/reportes-academicos/list/${teacherCode}`
        const result: any = await axiosfetchPublic(URL)
        return result.data
      },
    listTutoria: async (teacherCode: any) => {
        const URL = `/reportes-academicos/listTutoria/${teacherCode}`
        const result: any = await axiosfetchPublic(URL)
        return result.data
      },
    listClassAttendance: async (classCode: any) => {
      const URL = `/reportes-academicos/listClassAttendance/${classCode}`
      const result: any = await axiosfetchPublic(URL)
      return result.data
    },
    listNotes: async (classCode: any) => {
      const URL = `/reportes-academicos/listNotes/${classCode}`
      const result: any = await axiosfetchPublic(URL)
      return result.data
    },
    listClassStatistics: async (classCode:any,TraCode:any,CarCode:any,DepCode:any) => {
      const obj = {
        classCode,
        TraCode,
        CarCode,
        DepCode
      }
      const URL = `/reportes-academicos/listClassStatistics/`
      const result: any = await axiosfetchPublic.post(URL,{obj})
      return result.data
    },
    listCompetenceGeneralByClass: async (classCode:any) => {
      const URL = `/reportes-academicos/listCompetenceGeneralByClass/${classCode}`
      const result: any = await axiosfetchPublic(URL)
      return result.data
    },
    listCompetenceSchedule: async (classId:any,noteId:any) => {
      const URL = `/reportes-academicos/listCompetenceSchedule/${classId}/${noteId}`
      const result: any = await axiosfetchPublic(URL)
      return result.data
    },
    listDetailClass: async (classCode:any,parameterCode:any) => {
      const URL = `/reportes-academicos/listDetailClass/${classCode}/${parameterCode}`
      const result: any = await axiosfetchPublic(URL)
      return result.data
    },
}

export default API