import { AxiosInstance } from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'
import { axiosCreate } from '../../../config/axios'
import { apiPath } from '../../../consts/path'
import { objecApi } from '../../../consts/storageConst'
import { genError } from '../../../helpers/helpers'

type Data = {}
const Token = objecApi.Token

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { params }: any = req.query

  switch (params[0]) {
    case 'listTokenActive':
      try {
        const apiCall: AxiosInstance = axiosCreate(Token)
        const URL = apiPath.LogsTokenNotes.PATH_GetTokenActive(
          params[1],
          params[2],
          params[3]
        )
        const { data } = await apiCall(URL)
        const result = data.detail
        res.status(200).json(result)
      } catch (error) {
        genError(res, error, 'LC001')
      }
      break
    case 'listTokenGenerate':
      try {
        const apiCall: AxiosInstance = axiosCreate(Token)
        const URL = apiPath.LogsTokenNotes.PATH_GetTokenGenerate(
          params[1],
          params[2]
        )
        const { data } = await apiCall(URL)
        const result = data.detail
        res.status(200).json(result)
      } catch (error) {
        genError(res, error, 'LC002')
      }
      break
    default:
      break
  }
}

export default handler
