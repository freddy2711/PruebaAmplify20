import axiosfetchPublic from '../../../config/axios'
import { ErrorMessageClient } from '../../../consts/storageConst'

const API = {
  BySeccionOpen: async (codeUser: any) => {
    try {
      const URL = `/sesiones-abiertas/open/${codeUser}`
      const result: any = await axiosfetchPublic(URL)
      if (result?.status === true) {
        console.log('status', result?.status)
      }
      return result.data
    } catch (err) {
      const error = await ErrorMessageClient(err, false)
      return { error }
    }
  },
  ByTeacherSeccionOpen: async (Data: string) => {
    try {
      const URL = `/sesiones-abiertas/teacher`
      const result: any = await axiosfetchPublic.post(URL, Data)
      if (result.status === true) {
        console.log('status', result?.status)
      }
      return result.data
    } catch (err) {
      const error = await ErrorMessageClient(err, false)
      return { error }
    }
  },
  OpennedSession: async (classControlId: string) => {
    try {
      const URL = `/sesiones-abiertas/OpennedSession/`
      const result: any = await axiosfetchPublic.post(URL, { classControlId })
      if (result?.status === true) {
        console.log('status', result?.status)
      }
      return result.data
    } catch (err) {
      const error = await ErrorMessageClient(err, false)
      return { error }
    }
  },
  getDetallesResumen: async (classControlId: string, recoveryId: string) => {
    try {
      const URL = `/sesiones-abiertas/getDetallesResumen/${classControlId}/${recoveryId}`
			console.log(URL)
      const result: any = await axiosfetchPublic(URL)
      if (result.status === true) {
        console.log('status', result?.status)
      }
      return result.data
    } catch (err) {
      const error = await ErrorMessageClient(err, false)
      return { error }
    }
  },
}

export default API
