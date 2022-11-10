import { axiosCreate } from '../../../config/axios'
import type { NextApiRequest, NextApiResponse } from 'next'
import { apiPath } from '../../../consts/path'
import { objecApi } from '../../../consts/storageConst'
import { AxiosInstance } from 'axios'
type Data = {}
const Note = objecApi.Note
const Teacher = objecApi.Teacher

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { params }: any = req.query

  switch (params[0]) {
    case 'exist': {
      const apiCall: AxiosInstance = axiosCreate(Note)
      const URL = apiPath.Notes.PATH_GetNoteExistClass(params[1])
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
    case 'class': {
      const apiCall: AxiosInstance = axiosCreate(Note)
      const URL = apiPath.Notes.PATH_GetNoteClass(params[1])
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
    case 'state': {
      const apiCall: AxiosInstance = axiosCreate(Note)
      const URL = apiPath.Notes.PATH_GetNoteStateClass(params[1])
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
    case 'student': {
      const apiCall: AxiosInstance = axiosCreate(Note)
      const URL = apiPath.Notes.PATH_GetNoteStudentClass(params[1], params[2])
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
    case 'semesterControl': {
      const apiCall: AxiosInstance = axiosCreate(Note)
      const URL = apiPath.Notes.PATH_GetNoteSemesterControl(
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
    case 'semester': {
      const apiCall: AxiosInstance = axiosCreate(Note)
      const URL = apiPath.Notes.PATH_GetNoteSemester(params[1])
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
    case 'send': {
      const apiCall: AxiosInstance = axiosCreate(Note)
      const URL = apiPath.Notes.PATH_GetNoteSendClass(params[1])
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
    case 'validate': {
      const apiCall: AxiosInstance = axiosCreate(Note)
      const URL = apiPath.Notes.PATH_GetNoteValidate(params[1], params[2])
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
    case 'control': {
      const apiCall: AxiosInstance = axiosCreate(Note)
      const URL = apiPath.Notes.PATH_GetNoteControl(
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
    case 'classGroup': {
      const apiCall: AxiosInstance = axiosCreate(Note)
      const URL = apiPath.Notes.PATH_GetNoteGroupClass(params[1])
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
    case 'detail': {
      const apiCall: AxiosInstance = axiosCreate(Note)
      const URL = apiPath.Notes.PATH_GetNoteDetail(params[1], params[2])
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
    case 'average': {
      const apiCall: AxiosInstance = axiosCreate(Note)
      const URL = apiPath.Notes.PATH_GetNoteAverage(params[1])
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
    case 'postclassGroup': {
      const apiCall: AxiosInstance = axiosCreate(Note)
      const Request = req.body
      const URL = apiPath.Notes.PATH_PostNoteGroupClass
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
    case 'email': {
      const apiCall: AxiosInstance = axiosCreate(Teacher)
      const URL = apiPath.Notes.PATH_GetNoteEmail(params[1])
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
    case 'postState': {
      const apiCall: AxiosInstance = axiosCreate(Note)
      const Request = req.body
      const URL = apiPath.Notes.PATH_PostNoteStateClass
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
    case 'putState': {
      const apiCall: AxiosInstance = axiosCreate(Note)
      const Request = req.body
      const URL = apiPath.Notes.PATH_PutNoteStateClass
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
    case 'postUpload': {
      const apiCall: AxiosInstance = axiosCreate(Note)
      const Request = req.body
      const URL = apiPath.Notes.PATH_PostUpload
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
