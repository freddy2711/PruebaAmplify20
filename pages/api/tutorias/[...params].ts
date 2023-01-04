import { AxiosInstance } from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'
import { axiosCreate } from '../../../config/axios'
import { apiPath } from '../../../consts/path'
import { objecApi } from '../../../consts/storageConst'
import { genError } from '../../../helpers/helpers'

type Data = {}
const Teacher = objecApi.Teacher
const Note = objecApi.Note

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { params }: any = req.query

  switch (params[0]) {
    case 'tutorials': {
      const apiCall: AxiosInstance = axiosCreate(Teacher)
      const URL = apiPath.reporteTutorias.PATH_GetTutoriasTeacher(params[1])
      try {
        const { data } = await apiCall(URL)
        const result = data.detail
        res.status(200).json(result)
      } catch (error) {
        genError(res, error, 'T001')
      }
      break
    }
    case 'TeacherNotesStudentTutorin': {
      const apiCall: AxiosInstance = axiosCreate(Teacher)
      const URL = apiPath.reporteTutorias.PATH_GetTeacherNotesStudentTutoring(
        params[1],
        params[2]
      )
      try {
        const { data } = await apiCall(URL)
        const result = data.detail
        res.status(200).json(result)
      } catch (error) {
        genError(res, error, 'T002')
      }
      break
    }
    case 'StudentTutoring': {
      const URL = apiPath.reporteTutorias.PATH_GetNotesStudentTutoring(
        params[1]
      )
      try {
        const apiCall: AxiosInstance = axiosCreate(Note)
        const { data } = await apiCall(URL)
        const result = data.detail
        res.status(200).json(result)
      } catch (error) {
        genError(res, error, 'T003')
      }
      break
    }
    case 'EmployeeLogin': {
      const apiCall: AxiosInstance = axiosCreate(Teacher)
      const URL = apiPath.reporteTutorias.PATH_GetEmployeeLogin(params[1])
      try {
        const { data } = await apiCall(URL)
        const result = data.detail

        res.status(200).json(result)
      } catch (error) {
        genError(res, error, 'T004')
      }
      break
    }
  }
}

export default handler
