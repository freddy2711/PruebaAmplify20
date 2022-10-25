import { NextApiRequest, NextApiResponse } from "next"
import { axiosfetchPrivate } from "../../../config/axios"
import { apiPath } from "../../../consts/path"


type Data = {}

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    const { params } = req.query

    switch (params[0]) {
        case 'AssessmentTeacher':
            try {
                const URL = apiPath.evaluacionDocente.PATH_GetAssessmentTeacher
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
                const URL = apiPath.evaluacionDocente.PATH_GetDownloadDocumentsAWSS3
                const {data}  = await axiosfetchPrivate.post(URL,obj)
                const result = data.detail
                res.status(200).json(result)
                } catch (error) {
                console.log(error)
                }
            break;
    
        default:
            break;
    }
}

export default handler