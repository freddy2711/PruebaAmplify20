import { NextApiRequest, NextApiResponse } from 'next'
import { axiosfetchPrivate } from '../../../config/axios'
import { apiPath } from '../../../consts/path'

type Data = {}

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { params }: any = req.query

  switch (params[0]) {
    case 'list':
      try {
        const URL = apiPath.reportesAcademicos.PATH_GetTeacherCourses(params[1])
        const { data } = await axiosfetchPrivate(URL)
        const result = data.detail
        res.status(200).json(result)
      } catch (error) {
        console.log(error)
      }
      break
    case 'listTutoria':
      try {
        const URL = apiPath.reportesAcademicos.PATH_GetTeacherTutoria(params[1])
        const { data } = await axiosfetchPrivate(URL)
        const result = data.detail
        res.status(200).json(result)
      } catch (error) {
        console.log(error)
      }
      break
    case 'listClassAttendance':
      try {
        const URL = apiPath.reportesAcademicos.PATH_GetClassAttendance(
          params[1]
        )
        const { data } = await axiosfetchPrivate(URL)
        const result = data.detail
        res.status(200).json(result)
      } catch (error) {
        console.log(error)
      }
      break
    case 'listNotes':
      try {
        const URL = apiPath.reportesAcademicos.PATH_GetNotes(params[1])
        const { data } = await axiosfetchPrivate(URL)
        const result = data.detail
        res.status(200).json(result)
      } catch (error) {
        console.log(error)
      }
      break
    case 'listClassStatistics':
      try {
        const { obj } = req.body
        const URL = apiPath.reportesAcademicos.PATH_PostClassStatistics
        const { data } = await axiosfetchPrivate.post(URL, obj)
        const result = data.detail
        res.status(200).json(result)
      } catch (error) {
        console.log(error)
      }
      break
    case 'listCompetenceGeneralByClass':
      try {
        const URL = apiPath.reportesAcademicos.PATH_GetCompetenceGeneralByClass(
          params[1]
        )
        const { data } = await axiosfetchPrivate(URL)
        const result = data.detail
        res.status(200).json(result)
      } catch (error) {
        console.log(error)
      }
      break
    case 'listCompetenceSchedule':
      try {
        const URL = apiPath.reportesAcademicos.PATH_GetCompetenceSchedule(
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
    case 'listDetailClass':
      try {
        const URL = apiPath.reportesAcademicos.PATH_GetDetailClass(
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
