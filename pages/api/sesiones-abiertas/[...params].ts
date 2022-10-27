import { axiosfetchPrivate } from '../../../config/axios'
import type { NextApiRequest, NextApiResponse } from 'next'
import { apiPath } from '../../../consts/path'

type Data = {}

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { params }:any = req.query

  switch (params[0]) {
    case 'open': {
      const URL = apiPath.sectionOpen.PATH_Open(params[1])
      console.log('URL', URL)

      try {
        const { data } = await axiosfetchPrivate(URL)
        const result = data.detail
        if (result !== undefined) {
          res.status(200).json(result)
        } else {
          res.status(500).json({ error: 'failed to load data' })
        }
      } catch (error) {
        res.status(500).json({ error })
      }
      break
    }
    case 'teacher': {
      const Request = req.body
      const URL = apiPath.sectionOpen.PATH_Teacher
      try {
        const { data } = await axiosfetchPrivate.post(URL, Request)
        const result = data.detail
        if (result !== undefined) {
          res.status(200).json(result)
        } else {
          res.status(500).json({ error: 'failed to load data' })
        }
      } catch (error) {
        res.status(500).json({ error })
      }
      break
    }
    case 'OpennedSession': {
      const { classControlId } = req.body
      const URL = apiPath.sectionOpen.PATH_PostOpennedSession
      try {
        const { data } = await axiosfetchPrivate.post(URL, { classControlId })
        const result = data.detail
        if (result !== undefined) {
          res.status(200).json(result)
        } else {
          res.status(500).json({ error: 'failed to load data' })
        }
      } catch (error) {
        res.status(500).json({ error })
      }
      break
    }
    case 'getDetallesResumen': {
      try {
        const URL = apiPath.asistencia.PATH_GetDetallesResumen(
          params[1],
          params[2]
        )
        const { data }: any = await axiosfetchPrivate(URL)
        const result = data
        if (result !== undefined) {
          res.status(200).json(result)
        } else {
          res.status(500).json({ error: 'failed to load data' })
        }
      } catch (error) {
        res.status(500).json({ error })
      }
    }
  }
}

export default handler
