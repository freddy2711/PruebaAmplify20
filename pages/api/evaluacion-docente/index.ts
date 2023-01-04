import axiosfetchPublic from '../../../config/axios'
import { catchingErrorApi } from '../../../helpers/helpers'

const API = {
  listAssessmentTeacher: async () => {
    try {
      const URL = `/evaluacion-docente/AssessmentTeacher`
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
      const URL = `/evaluacion-docente/DownloadDocumentsAWSS3/`
      const result: any = await axiosfetchPublic.post(URL, { obj })
      return result.data
    } catch (error) {
      catchingErrorApi(error)
    }
  },
}

export default API
