import { AxiosInstance } from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'
import { axiosCreate } from '../../../config/axios'
import { apiPath } from '../../../consts/path'
import { objecApi } from '../../../consts/storageConst'

type Data = {}
const Utility = objecApi.Utility
const Teacher = objecApi.Teacher

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { params }: any = req.query

  switch (params[0]) {
    case 'HeadquartersBanners':
      try {
        const apiCall: AxiosInstance = axiosCreate(Utility)
        const URL = apiPath.disponibilidadHorario.PATH_GetHeadquartersBanners(
          params[1]
        )
        const { data } = await apiCall(URL)
        const result = data.detail
        res.status(200).json(result)
      } catch (error) {
        console.log(error)
      }
      break
    case 'SemesterUnitBusinessCode':
      try {
        const apiCall: AxiosInstance = axiosCreate(Teacher)
        const URL =
          apiPath.disponibilidadHorario.PATH_GetSemesterUnitBusinessCode(
            params[1]
          )
        const { data } = await apiCall(URL)
        const result = data.detail
        res.status(200).json(result)
      } catch (error) {
        console.log(error)
      }
      break
    case 'TeacherAvailability':
      try {
        const apiCall: AxiosInstance = axiosCreate(Teacher)
        const URL = apiPath.disponibilidadHorario.PATH_GetTeacherAvailability(
          params[1],
          params[2],
          params[3]
        )
        const { data } = await apiCall(URL)
        const result = data.detail
        res.status(200).json(result)
      } catch (error) {
        console.log(error)
      }
      break
    case 'CrudAvailability':
      try {
        const apiCall: AxiosInstance = axiosCreate(Teacher)
        const item = req.body
        const URL = apiPath.disponibilidadHorario.PATH_PostCrudAvailability
        const { data } = await apiCall.post(URL, item)
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
