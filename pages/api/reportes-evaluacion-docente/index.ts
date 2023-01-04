import axiosfetchPublic from '../../../config/axios'
import { catchingErrorApi } from '../../../helpers/helpers'

const API = {
  listResultTeacherEvaluation: async (teacherCode: any) => {
    try {
      const URL = `/reportes-evaluacion-docente/listResultTeacherEvaluation/${teacherCode}`
      const result: any = await axiosfetchPublic(URL)
      return result.data
    } catch (error) {
      catchingErrorApi(error)
    }
  },
  lstSedesUPN: async () => {
    try {
      const URL = `/reportes-evaluacion-docente/lstSedesUPN`
      const result: any = await axiosfetchPublic(URL)
      return result.data
    } catch (error) {
      catchingErrorApi(error)
    }
  },
  lsttDocumentsAWSS3: async (periodo: any, name: any) => {
    try {
      const URL = `/reportes-evaluacion-docente/lsttDocumentsAWSS3/${periodo}/${name}`
      const result: any = await axiosfetchPublic(URL)
      return result.data
    } catch (error) {
      catchingErrorApi(error)
    }
  },
  DownloadDocumentsAWSS3: async (rutaUrl: any) => {
    try {
      const obj = {
        rutaUrl,
      }
      const URL = `/reportes-evaluacion-docente/DownloadDocumentsAWSS3/`
      const result: any = await axiosfetchPublic.post(URL, { obj })
      return result.data
    } catch (error) {
      catchingErrorApi(error)
    }
  },
}

export default API
