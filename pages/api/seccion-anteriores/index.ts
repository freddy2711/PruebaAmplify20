import axiosfetchPublic from '../../../config/axios'

const API = {
      listCoursesByTeacher: async (UserID: any) => {
        const URL = `/seccion-anteriores/list/${UserID}`
        const result: any = await axiosfetchPublic(URL)
        return result.data
      },
      listSessionsByClass: async (classCode:any,accion:any,paymentPeriodId:any) => {
        const URL = `/seccion-anteriores/SessionsByClass/list/${classCode}/${accion}/${paymentPeriodId}`
        const result: any = await axiosfetchPublic(URL)
        return result.data
      },
      listPeriodPayDate: async () => {
        const URL = `/seccion-anteriores/PeriodPayDate/list/`
        const result: any = await axiosfetchPublic(URL)
        return result.data
      },
      listPeriodPayment: async (action:any,idPeriodPay:any) => {
        const URL = `/seccion-anteriores/PeriodPayment/list/${action}/${idPeriodPay}`
        const result: any = await axiosfetchPublic(URL)
        return result.data
      },
      OpennedSession: async (classControlId: string) => {
          const URL = `/seccion-anteriores/OpennedSession/`
          const result:any = await axiosfetchPublic.post(URL, {classControlId})
          return result.data
      },
  }
  
  export default API