import { NextApiRequest, NextApiResponse } from 'next'
import { axiosfetchPrivate } from '../../../config/axios'
import { apiPath } from '../../../consts/path'

type Data = {}

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { params } = req.query

  switch (params[0]) {
    case 'tutorials': {
      const URL = apiPath.reporteTutorias.PATH_GetTutoriasTeacher(params[1])
      try {
        const { data } = await axiosfetchPrivate(URL)
        const result = data.detail
        res.status(200).json(result)
      } catch (error) {
        console.log(error)
      }
      break
    }
    case 'TeacherNotesStudentTutorin': {
      const URL = apiPath.reporteTutorias.PATH_GetTeacherNotesStudentTutoring(
        params[1],
        params[2]
      )
      try {
        const { data } = await axiosfetchPrivate(URL)
        const result = data.detail
        res.status(200).json(result)
      } catch (error) {
        console.log(error)
      }
      break
    }
    case 'StudentTutoring': {
      const URL = apiPath.reporteTutorias.PATH_GetNotesStudentTutoring(
        params[1]
      )
      try {
        const { data } = await axiosfetchPrivate(URL)
        const result = data.detail
        res.status(200).json(result)
      } catch (error) {
        console.log(error)
      }
      break
    }
    case 'EmployeeLogin': {
      const URL = apiPath.reporteTutorias.PATH_GetEmployeeLogin(params[1])
      try {
        const { data } = await axiosfetchPrivate(URL)
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
