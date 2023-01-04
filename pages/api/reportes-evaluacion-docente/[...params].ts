import { AxiosInstance } from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'
import { axiosCreate, axiosfetchPrivateSedesUPN } from '../../../config/axios'
import { apiPath } from '../../../consts/path'
import { objecApi } from '../../../consts/storageConst'
import { genError } from '../../../helpers/helpers'

type Data = {}
const Teacher = objecApi.Teacher
const Utility = objecApi.Utility

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { params }: any = req.query

  switch (params[0]) {
    case 'listResultTeacherEvaluation':
      try {
        const apiCall: AxiosInstance = axiosCreate(Teacher)
        const URL = apiPath.reportesEvaluacion.PATH_GetResultTeacherEvaluation(
          params[1]
        )
        const { data } = await apiCall(URL)
        const result = data.detail
        res.status(200).json(result)
      } catch (error) {
        genError(res, error, 'RED001')
      }
      break
    case 'lstSedesUPN':
      try {
        const url = `/core-catalog/sede/sedes`
        const { data } = await axiosfetchPrivateSedesUPN(url)
        const result = data.detail
        res.status(200).json(result)
      } catch (error) {
        genError(res, error, 'RED002')
      }
      break
    case 'lsttDocumentsAWSS3':
      try {
        const apiCall: AxiosInstance = axiosCreate(Utility)
        const URL = apiPath.reportesEvaluacion.PATH_GetDocumentsAWSS3(
          params[1],
          params[2]
        )
        const { data } = await apiCall(URL)
        const result = data.detail
        res.status(200).json(result)
      } catch (error) {
        genError(res, error, 'RED003')
      }
      break
    case 'DownloadDocumentsAWSS3':
      try {
        const apiCall: AxiosInstance = axiosCreate(Utility)
        const { obj } = req.body
        const URL = apiPath.reportesEvaluacion.PATH_GetDownloadDocumentsAWSS3
        const { data } = await apiCall.post(URL, obj)
        const result = data.detail
        res.status(200).json(result)
      } catch (error) {
        genError(res, error, 'RED004')
      }
      break
  }
}

export default handler
