import axiosfetchPublic from "../../../config/axios"


const API = {
        listDocumentsTeacher: async () => {
            const URL = `/documentos-manuales/DocumentsTeacher`
            const result: any = await axiosfetchPublic(URL)
            return result.data
        },
        DownloadDocumentsAWSS3: async (rutaUrl:any) => {
            const obj = {
                rutaUrl
            }
            const URL = `/documentos-manuales/DownloadDocumentsAWSS3/`
            const result: any = await axiosfetchPublic.post(URL,{obj})
            return result.data
        },
        listManualsTeacher: async () => {
            const URL = `/documentos-manuales/ManualsTeacher`
            const result: any = await axiosfetchPublic(URL)
            return result.data
        },
}

export default API