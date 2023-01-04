import axiosfetchPublic from '../../../config/axios'
import { catchingErrorApi } from '../../../helpers/helpers'

const API = {
  listDocumentsTeacher: async () => {
    try {
      const URL = `/documentos-manuales/DocumentsTeacher`
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
      const URL = `/documentos-manuales/DownloadDocumentsAWSS3/`
      const result: any = await axiosfetchPublic.post(URL, { obj })
      return result.data
    } catch (error) {
      catchingErrorApi(error)
    }
  },
  listManualsTeacher: async () => {
    try {
      const URL = `/documentos-manuales/ManualsTeacher`
      const result: any = await axiosfetchPublic(URL)
      return result.data
    } catch (error) {
      catchingErrorApi(error)
    }
  },
}

export default API
