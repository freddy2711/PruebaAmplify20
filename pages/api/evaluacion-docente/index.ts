import axiosfetchPublic from '../../../config/axios'

const API = {
  listAssessmentTeacher: async () => {
    const URL = `/evaluacion-docente/AssessmentTeacher`
    const result: any = await axiosfetchPublic(URL)
    return result.data
  },
  DownloadDocumentsAWSS3: async (rutaUrl: any) => {
    const obj = {
      rutaUrl,
    }
    const URL = `/evaluacion-docente/DownloadDocumentsAWSS3/`
    const result: any = await axiosfetchPublic.post(URL, { obj })
    return result.data
  },
}

export default API
