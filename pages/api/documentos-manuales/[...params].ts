import { AxiosInstance } from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'
import { axiosCreate } from '../../../config/axios'
import { apiPath } from '../../../consts/path'
import { objecApi } from '../../../consts/storageConst'

type Data = {}
const Utility = objecApi.Utility

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { params }: any = req.query

  switch (params[0]) {
    case 'DocumentsTeacher':
      try {
        const apiCall: AxiosInstance = axiosCreate(Utility)
        const URL = apiPath.documentosManuales.PATH_GetDocumentsTeacher
        const { data } = await apiCall(URL)
        const result = data.detail
        res.status(200).json(result)
      } catch (error) {
        console.log(error)
      }
      break
    case 'DownloadDocumentsAWSS3':
      try {
        const apiCall: AxiosInstance = axiosCreate(Utility)
        const { obj } = req.body
        const URL = apiPath.documentosManuales.PATH_GetDownloadDocumentsAWSS3
        const { data } = await apiCall.post(URL, obj)
        const result = data.detail
        res.status(200).json(result)
      } catch (error) {
        console.log(error)
      }
      break
    case 'ManualsTeacher':
      try {
        const apiCall: AxiosInstance = axiosCreate(Utility)
        const URL = apiPath.documentosManuales.PATH_GetManualsTeacher
        const { data } = await apiCall(URL)
        const result = data.detail
        res.status(200).json(result)
      } catch (error) {
        console.log(error)
      }
      break
    default:
      break
  }
}

export default handler
