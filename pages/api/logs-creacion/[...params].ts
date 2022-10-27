import { NextApiRequest, NextApiResponse } from 'next'
import { axiosfetchPrivate } from '../../../config/axios'
import { apiPath } from '../../../consts/path'

type Data = {}

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { params }: any = req.query

  switch (params[0]) {
    case 'listTokenActive':
      try {
        const URL = apiPath.LogsTokenNotes.PATH_GetTokenActive(
          params[1],
          params[2],
          params[3]
        )
        const { data } = await axiosfetchPrivate(URL)
        const result = data.detail
        res.status(200).json(result)
      } catch (error) {
        console.log(error)
      }
      break
    case 'listTokenGenerate':
      try {
        const URL = apiPath.LogsTokenNotes.PATH_GetTokenGenerate(
          params[1],
          params[2]
        )
        const { data } = await axiosfetchPrivate(URL)
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
