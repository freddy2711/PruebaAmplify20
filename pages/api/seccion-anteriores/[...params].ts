import { axiosCreate } from '../../../config/axios'
import type { NextApiRequest, NextApiResponse } from 'next'
import { apiPath } from '../../../consts/path'
import { objecApi } from '../../../consts/storageConst'
import { AxiosInstance } from 'axios'
import { genError } from '../../../helpers/helpers'

type Data = {}
const ClassShedule = objecApi.ClassShedule
const TeacherAttendance = objecApi.TeacherAttendance
const Utility = objecApi.Utility

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { params }: any = req.query

  switch (params[0]) {
    case 'list': {
      try {
        const apiCall: AxiosInstance = axiosCreate(ClassShedule)
        // const URL = apiPath.seccionAnteriores.PATH_GetTeachersCorses(params[1])
        const URL = apiPath.competence.PATH_List(params[1])
        const { data } = await apiCall(URL)
        const result = data.detail
        res.status(200).json(result)
      } catch (error) {
        genError(res, error, 'SA001')
      }
      break
    }
    case 'SessionsByClass': {
      try {
        const apiCall: AxiosInstance = axiosCreate(TeacherAttendance)
        const URL = apiPath.seccionAnteriores.PATH_GetSessionsByClass(
          params[2],
          params[3],
          params[4]
        )
        const { data }: any = await apiCall(URL)
        const result = data.detail
        res.status(200).json(result)
      } catch (error) {
        genError(res, error, 'SA002')
      }
      break
    }
    case 'PeriodPayDate': {
      try {
        const apiCall: AxiosInstance = axiosCreate(Utility)
        const URL = apiPath.seccionAnteriores.PATH_GetPeriodPayDate
        const { data } = await apiCall(URL)
        const result = data.detail
        res.status(200).json(result)
      } catch (error) {
        genError(res, error, 'SA003')
      }
      break
    }
    case 'PeriodPayment': {
      try {
        const apiCall: AxiosInstance = axiosCreate(Utility)
        const URL = apiPath.seccionAnteriores.PATH_GetPeriodPayment(
          params[2],
          params[3]
        )
        const { data } = await apiCall(URL)
        const result = data.detail
        res.status(200).json(result)
      } catch (error) {
        genError(res, error, 'SA004')
      }
      break
    }
    case 'OpennedSession': {
      const apiCall: AxiosInstance = axiosCreate(TeacherAttendance)
      const { classControlId } = req.body
      const URL = apiPath.seccionAnteriores.PATH_PostOpennedSession
      try {
        const { data } = await apiCall.post(URL, { classControlId })
        const result = data.detail
        res.status(200).json(result)
      } catch (error) {
        genError(res, error, 'SA005')
      }
      break
    }
  }
}

export default handler
