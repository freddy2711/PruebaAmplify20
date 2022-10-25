import { NextApiRequest, NextApiResponse } from "next"
import { axiosfetchPrivate, axiosfetchPrivateSedesUPN } from "../../../config/axios"
import { apiPath } from "../../../consts/path"

type Data = {}

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {

    const { params } = req.query

    switch (params[0]) {
        case 'listResultTeacherEvaluation':
            try {
                const URL = apiPath.reportesEvaluacion.PATH_GetResultTeacherEvaluation(params[1])
                const { data } = await axiosfetchPrivate(URL)
                const result = data.detail
                res.status(200).json(result)
              } catch (error) {
                console.log(error)
              }
            break;
        case 'lstSedesUPN':
            try {
                const url = `/core-catalog/sede/sedes`
                const {data} = await axiosfetchPrivateSedesUPN(url)
                const result = data.detail
                res.status(200).json(result)
                } catch (error) {
                console.log(error)
                }
            break;
        case 'lsttDocumentsAWSS3':
            try {
                const URL = apiPath.reportesEvaluacion.PATH_GetDocumentsAWSS3(params[1],params[2])
                const { data } = await axiosfetchPrivate(URL)
                const result = data.detail
                res.status(200).json(result)
                } catch (error) {
                console.log(error)
                }
            break;
        case 'DownloadDocumentsAWSS3':
            try {
                const {obj} = req.body
                const URL = apiPath.reportesEvaluacion.PATH_GetDownloadDocumentsAWSS3
                const {data}  = await axiosfetchPrivate.post(URL,obj)
                const result = data.detail
                res.status(200).json(result)
                } catch (error) {
                console.log(error)
                }
            break;
    }


}

export default handler