import axiosfetchPublic from '../../../config/axios'

const API = {
  listResultTeacherEvaluation: async (teacherCode: any) => {
    const URL = `/reportes-evaluacion-docente/listResultTeacherEvaluation/${teacherCode}`
    const result: any = await axiosfetchPublic(URL)
    return result.data
  },
  lstSedesUPN: async () => {
    const URL = `/reportes-evaluacion-docente/lstSedesUPN`
    const result: any = await axiosfetchPublic(URL)
    return result.data
  },
  lsttDocumentsAWSS3: async (periodo: any, name: any) => {
    const URL = `/reportes-evaluacion-docente/lsttDocumentsAWSS3/${periodo}/${name}`
    const result: any = await axiosfetchPublic(URL)
    return result.data
  },
  DownloadDocumentsAWSS3: async (rutaUrl: any) => {
    const obj = {
      rutaUrl,
    }
    const URL = `/reportes-evaluacion-docente/DownloadDocumentsAWSS3/`
    const result: any = await axiosfetchPublic.post(URL, { obj })
    return result.data
  },
}

export default API
