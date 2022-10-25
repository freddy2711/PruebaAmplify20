import axiosfetchPublic from "../../../config/axios"

const API = { 
    tutorials: async (traCode: any) => {
        const URL = `/tutorias/tutorials/${traCode}`
        const result: any = await axiosfetchPublic(URL)
        return result.data
    },
    TeacherNotesStudentTutorin: async (clasCode:any,semCode:any) => {
        const URL = `/tutorias/TeacherNotesStudentTutorin/${clasCode}/${semCode}`
        const result: any = await axiosfetchPublic(URL)
        return result.data
    },
    StudentTutoring: async (codAlu: any) => {
        const URL = `/tutorias/StudentTutoring/${codAlu}`
        const result: any = await axiosfetchPublic(URL)
        return result.data
    },
    EmployeeLogin: async (userName: any) => {
        const URL = `/tutorias/EmployeeLogin/${userName}`
        const result: any = await axiosfetchPublic(URL)
        return result.data
    }
 }

 export default API