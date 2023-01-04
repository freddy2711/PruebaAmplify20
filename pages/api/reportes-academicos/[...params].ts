import { AxiosInstance } from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'
import { axiosCreate } from '../../../config/axios'
import { apiPath } from '../../../consts/path'
import { objecApi } from '../../../consts/storageConst'
import { genError } from '../../../helpers/helpers'

type Data = {}
const Attendance = objecApi.Attendance
const ClassShedule = objecApi.ClassShedule
const Competence = objecApi.Competence
const Note = objecApi.Note

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { params }: any = req.query

  switch (params[0]) {
    case 'list':
      try {
        const apiCall: AxiosInstance = axiosCreate(ClassShedule)
        const URL = apiPath.reportesAcademicos.PATH_GetTeacherCourses(params[1])
        const { data } = await apiCall(URL)
        const result = data.detail
        res.status(200).json(result)
      } catch (error) {
        genError(res, error, 'RA001')
      }
      break
    case 'listTutoria':
      try {
        const apiCall: AxiosInstance = axiosCreate(ClassShedule)
        const URL = apiPath.reportesAcademicos.PATH_GetTeacherTutoria(params[1])
        const { data } = await apiCall(URL)
        const result = data.detail
        res.status(200).json(result)
      } catch (error) {
        genError(res, error, 'RA002')
      }
      break
    case 'listClassAttendance':
      try {
        const apiCall: AxiosInstance = axiosCreate(Attendance)
        const URL = apiPath.reportesAcademicos.PATH_GetClassAttendance(
          params[1]
        )
        const { data } = await apiCall(URL)
        const result = data.detail
        res.status(200).json(result)
      } catch (error) {
        genError(res, error, 'RA003')
      }
      break
    case 'listNotes':
      try {
        const apiCall: AxiosInstance = axiosCreate(Note)
        const URL = apiPath.reportesAcademicos.PATH_GetNotes(params[1])
        const { data } = await apiCall(URL)
        const result = data.detail
        res.status(200).json(result)
      } catch (error) {
        genError(res, error, 'RA004')
      }
      break
    case 'listClassStatistics':
      try {
        const apiCall: AxiosInstance = axiosCreate(Note)
        const { obj } = req.body
        const URL = apiPath.reportesAcademicos.PATH_PostClassStatistics
        const { data } = await apiCall.post(URL, obj)
        const result = data.detail
        res.status(200).json(result)
      } catch (error) {
        genError(res, error, 'RA005')
      }
      break
    case 'listCompetenceGeneralByClass':
      try {
        const apiCall: AxiosInstance = axiosCreate(Competence)
        const URL = apiPath.reportesAcademicos.PATH_GetCompetenceGeneralByClass(
          params[1]
        )
        const { data } = await apiCall(URL)
        const result = data.detail
        res.status(200).json(result)
      } catch (error) {
        genError(res, error, 'RA006')
      }
      break
    case 'listCompetenceSchedule':
      try {
        const apiCall: AxiosInstance = axiosCreate(Competence)
        const URL = apiPath.reportesAcademicos.PATH_GetCompetenceSchedule(
          params[1],
          params[2]
        )
        const { data } = await apiCall(URL)
        const result = data.detail
        res.status(200).json(result)
      } catch (error) {
        genError(res, error, 'RA007')
      }
      break
    case 'listDetailClass':
      try {
        const apiCall: AxiosInstance = axiosCreate(ClassShedule)
        const URL = apiPath.reportesAcademicos.PATH_GetDetailClass(
          params[1],
          params[2]
        )
        const { data } = await apiCall(URL)
        const result = data.detail
        res.status(200).json(result)
      } catch (error) {
        genError(res, error, 'RA008')
      }
      break
    default:
      break
  }
}

export default handler
