import { axiosCreate } from '../../../config/axios'
import type { NextApiRequest, NextApiResponse } from 'next'
import { apiPath } from '../../../consts/path'
import { objecApi } from '../../../consts/storageConst'
import { AxiosInstance } from 'axios'
type Data = {}
const Teacher = objecApi.Teacher
const TeacherAttendance = objecApi.TeacherAttendance
const ClassShedule = objecApi.ClassShedule
const Utility = objecApi.Utility

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { params }: any = req.query
  switch (params[0]) {
    case 'shedule': {
      const apiCall: AxiosInstance = axiosCreate(ClassShedule)
      const URL = apiPath.home.PATH_GetTeachingTimeReport(params[1])
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
    case 'ip': {
      const apiCall: AxiosInstance = axiosCreate(Utility)
      const URL = apiPath.home.PATH_GetAllowLogout(params[1], params[2])
      console.log('URL', URL)
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
    case 'Without': {
      const apiCall: AxiosInstance = axiosCreate(TeacherAttendance)
      const URL = apiPath.home.PATH_GetDocenteBiometric(params[1], params[2])
      console.log('URL', URL)
      try {
        const { data } = await apiCall(URL)
        const result = data.detail
        if (result !== undefined) {
          res.status(200).json(result)
        } else {
          res.status(500).json({ error: 'failed to load data' })
        }
      } catch (error) {
        console.log(error)
      }
      break
    }
    case 'classCode': {
      const apiCall: AxiosInstance = axiosCreate(ClassShedule)
      const URL = apiPath.home.PATH_GetCodeandClass(params[1], params[2])
      console.log('URL', URL)
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
    case 'biometrico': {
      const apiCall: AxiosInstance = axiosCreate(TeacherAttendance)
      const URL = apiPath.home.PATH_GetAllowLogoutWithoutStudent(
        params[1],
        params[2]
      )
      console.log('URL', URL)
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
    case 'verficar': {
      const apiCall: AxiosInstance = axiosCreate(ClassShedule)
      const URL = apiPath.home.PATH_GetCheckClass(params[1])
      console.log('URL', URL)
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
    case 'person': {
      const apiCall: AxiosInstance = axiosCreate(ClassShedule)
      const Request = req.body
      const URL = apiPath.home.PATH_PostCheckPerson
      console.log('URL', URL)

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
    case 'time': {
      const apiCall: AxiosInstance = axiosCreate(TeacherAttendance)
      const Request = req.body
      const URL = apiPath.home.PATH_PostCheckPersonTime
      console.log('URL', URL)

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
    case 'exists': {
      const apiCall: AxiosInstance = axiosCreate(ClassShedule)
      const Request = req.body
      const URL = apiPath.home.PATH_GetSessionExists
      console.log('URL', URL)

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
    case 'seccion': {
      const apiCall: AxiosInstance = axiosCreate(ClassShedule)
      const Request = req.body
      const URL = apiPath.home.PATH_PostSessions
      console.log('URL', URL)

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
