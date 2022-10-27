import { axiosfetchPrivate } from '../../../config/axios'
import type { NextApiRequest, NextApiResponse } from 'next'
import { apiPath } from '../../../consts/path'

type Data = {}

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { params }: any = req.query

  switch (params[0]) {
    case 'list': {
      try {
        const URL = apiPath.seccionAnteriores.PATH_GetTeachersCorses(params[1])
        const { data } = await axiosfetchPrivate(URL)
        const result = data.detail
        res.status(200).json(result)
      } catch (error) {
        console.log(error)
      }
      break
    }
    case 'SessionsByClass': {
      try {
        const URL = apiPath.seccionAnteriores.PATH_GetSessionsByClass(
          params[2],
          params[3],
          params[4]
        )
        const { data } = await axiosfetchPrivate(URL)

        const result = data.detail
        res.status(200).json(result)
      } catch (error) {
        console.log(error)
      }
      break
    }
    case 'PeriodPayDate': {
      try {
        const URL = apiPath.seccionAnteriores.PATH_GetPeriodPayDate
        const { data } = await axiosfetchPrivate(URL)

        const result = data.detail
        res.status(200).json(result)
      } catch (error) {
        console.log(error)
      }
      break
    }
    case 'PeriodPayment': {
      try {
        const URL = apiPath.seccionAnteriores.PATH_GetPeriodPayment(
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
    }
    case 'OpennedSession': {
      const { classControlId } = req.body
      const URL = apiPath.seccionAnteriores.PATH_PostOpennedSession
      try {
        const { data } = await axiosfetchPrivate.post(URL, { classControlId })
        const result = data.detail
        res.status(200).json(result)
      } catch (error) {
        console.log(error)
      }
      break
    }
  }
}

export default handler
