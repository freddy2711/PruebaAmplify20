import axiosfetchPublic from "../../../config/axios"

const API = {
        listHeadquartersBanners: async (exclude: any) => {
            const URL = `/disponibilidad-horario/HeadquartersBanners/${exclude}`
            const result: any = await axiosfetchPublic(URL)
            return result.data
        },
        listSemesterUnitBusinessCode: async (CodeHeadquarters: any) => {
            const URL = `/disponibilidad-horario/SemesterUnitBusinessCode/${CodeHeadquarters}`
            const result: any = await axiosfetchPublic(URL)
            return result.data
        },
        listTeacherAvailability: async (action:any,user:any,day:any) => {
            const URL = `/disponibilidad-horario/TeacherAvailability/${action}/${user}/${day}`
            const result: any = await axiosfetchPublic(URL)
            return result.data
        },
        CrudAvailability: async (item:any) => {
            const URL = `/disponibilidad-horario/CrudAvailability/`
            const result: any = await axiosfetchPublic.post(URL,item)
            return result.data
        }
}

export default API