import { axiosCreate } from '../../../config/axios'
import type { NextApiRequest, NextApiResponse } from 'next'
import { apiPath } from '../../../consts/path'
import { objecApi } from '../../../consts/storageConst'
import { AxiosInstance } from 'axios'
type Data = {}
const WorkerTeacher = objecApi.WorkerTeacher

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { params }: any = req.query
  switch (params[0]) {
    case 'sustitutory': {
      const apiCall: AxiosInstance = axiosCreate(WorkerTeacher)
      const URL = apiPath.descansoTeacher.PATH_GetSemesterSustitutory(
        params[1],
        params[2]
      )
      try {
        const { data } = await apiCall(URL)
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
      const apiCall: AxiosInstance = axiosCreate(WorkerTeacher)
      const URL = apiPath.descansoTeacher.PATH_GetSemesterTuesday(
        params[1],
        params[2]
      )
      try {
        const { data } = await apiCall(URL)
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
      const apiCall: AxiosInstance = axiosCreate(WorkerTeacher)
      const URL = apiPath.descansoTeacher.PATH_GetSemesterThursday(
        params[1],
        params[2],
        params[3]
      )
      try {
        const { data } = await apiCall(URL)
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
      const apiCall: AxiosInstance = axiosCreate(WorkerTeacher)
      const URL = apiPath.descansoTeacher.PATH_GetTeacherBreak(params[1])
      try {
        const { data } = await apiCall(URL)
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
      const apiCall: AxiosInstance = axiosCreate(WorkerTeacher)
      const URL = apiPath.descansoTeacher.PATH_GetRequestWorker(
        params[1],
        params[2]
      )
      try {
        const { data } = await apiCall(URL)
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
      const apiCall: AxiosInstance = axiosCreate(WorkerTeacher)
      const URL = apiPath.descansoTeacher.PATH_GetSendEmail(params[1])
      try {
        const { data } = await apiCall(URL)
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
      const apiCall: AxiosInstance = axiosCreate(WorkerTeacher)
      const Request = req.body
      const URL = apiPath.descansoTeacher.PATH_Put_UpdateDateWorker
      try {
        const { data } = await apiCall.put(URL, Request)
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
      const apiCall: AxiosInstance = axiosCreate(WorkerTeacher)
      const Request = req.body
      const URL = apiPath.descansoTeacher.PATH_Post_SaveTempTableWorkerTeacher
      try {
        const { data } = await apiCall.post(URL, Request)
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
      const apiCall: AxiosInstance = axiosCreate(WorkerTeacher)
      const Request = req.body
      const URL =
        apiPath.descansoTeacher.PATH_Post_RegisterRequestsWorkerTeacher
      try {
        const { data } = await apiCall.post(URL, Request)
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
