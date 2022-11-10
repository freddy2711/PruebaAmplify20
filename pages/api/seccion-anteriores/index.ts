import axiosfetchPublic from '../../../config/axios'
import { catchingErrorApi } from '../../../helpers/helpers'

const API = {
  listCoursesByTeacher: async (UserID: any) => {
		try {
    const URL = `/seccion-anteriores/list/${UserID}`
    const result: any = await axiosfetchPublic(URL)
    return result.data
		    } catch (error) {
      catchingErrorApi(error)
    }
  },
  listSessionsByClass: async (
    classCode: any,
    accion: any,
    paymentPeriodId: any
  ) => {
		try {
    const URL = `/seccion-anteriores/SessionsByClass/list/${classCode}/${accion}/${paymentPeriodId}`
    const result: any = await axiosfetchPublic(URL)
    return result.data
		    } catch (error) {
      catchingErrorApi(error)
    }
  },
  listPeriodPayDate: async () => {
		try {
    const URL = `/seccion-anteriores/PeriodPayDate/list`
    const result: any = await axiosfetchPublic(URL)
    return result.data
		    } catch (error) {
      catchingErrorApi(error)
    }
  },
  listPeriodPayment: async (action: any, idPeriodPay: any) => {
		try {
    const URL = `/seccion-anteriores/PeriodPayment/list/${action}/${idPeriodPay}`
    const result: any = await axiosfetchPublic(URL)
    return result.data
		    } catch (error) {
      catchingErrorApi(error)
    }
  },
  OpennedSession: async (classControlId: string) => {
		try {
    const URL = `/seccion-anteriores/OpennedSession`
    const result: any = await axiosfetchPublic.post(URL, { classControlId })
    return result.data
		    } catch (error) {
      catchingErrorApi(error)
    }
  },
}

export default API
