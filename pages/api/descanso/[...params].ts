import { axiosfetchPrivate } from '../../../config/axios'
import type { NextApiRequest, NextApiResponse } from 'next'
import { apiPath } from '../../../consts/path'
type Data = {}

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { params }: any = req.query
  switch (params[0]) {
    case 'sustitutory': {
      const URL = apiPath.descansoTeacher.PATH_GetSemesterSustitutory(
        params[1],
        params[2]
      )
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
    case 'tuesday': {
      const URL = apiPath.descansoTeacher.PATH_GetSemesterTuesday(
        params[1],
        params[2]
      )
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
    case 'thursday': {
      const URL = apiPath.descansoTeacher.PATH_GetSemesterThursday(
        params[1],
        params[2],
        params[3]
      )
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
    case 'break': {
      const URL = apiPath.descansoTeacher.PATH_GetTeacherBreak(params[1])
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
    case 'worker': {
      const URL = apiPath.descansoTeacher.PATH_GetRequestWorker(
        params[1],
        params[2]
      )
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
    case 'email': {
      const URL = apiPath.descansoTeacher.PATH_GetSendEmail(params[1])
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
    case 'update': {
      const Request = req.body
      const URL = apiPath.descansoTeacher.PATH_Put_UpdateDateWorker
      try {
        const { data } = await axiosfetchPrivate.put(URL, Request)
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
    case 'save': {
      const Request = req.body
      const URL = apiPath.descansoTeacher.PATH_Post_SaveTempTableWorkerTeacher
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
    case 'register': {
      const Request = req.body
      const URL =
        apiPath.descansoTeacher.PATH_Post_RegisterRequestsWorkerTeacher
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
  }
}

export default handler
