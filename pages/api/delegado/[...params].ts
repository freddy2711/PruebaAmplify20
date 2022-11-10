import { axiosCreate } from '../../../config/axios'
import type { NextApiRequest, NextApiResponse } from 'next'
import { apiPath } from '../../../consts/path'
import { objecApi } from '../../../consts/storageConst'
import { AxiosInstance } from 'axios'
import { genError } from '../../../helpers/helpers'

type Data = {}

const { TeacherAttendance, Attendance, ClassShedule } = objecApi

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { params }: any = req.query

  switch (params[0]) {
    case 'delegateList': {
      const URL = apiPath.delegado.PATH_delegateList(params[1])
      try {
				const apiCall:AxiosInstance = axiosCreate(Attendance)
        const { data } = await apiCall(URL)
        const result = data.detail
        res.status(200).json(result)
      } catch (error) {
        genError(res,error,'DE001')
      }
      break
    }
    case 'list': {
      // const URL = `/TeacherAttendance/Delegate/${params[1]}/class/`
      const URL = apiPath.delegado.Path_Delegate(params[1])
      try {
				const apiCall: AxiosInstance = axiosCreate(TeacherAttendance)
        const { data } = await apiCall(URL)
        const result = data.detail
        res.status(200).json(result)
      } catch (error) {
        genError(res,error,'DE002')
      }
      break
    }
    case 'create': {
      const { classCode, xmlData } = req.body
      // const URL = `/ClassSchedule/PostRegisterDelegate`
      const URL = apiPath.delegado.Path_PostRegisterDelegate
      try {
				const apiCall: AxiosInstance = axiosCreate(ClassShedule)
        const { data } = await apiCall.post(URL, {
          classCode,
          xmlData,
        })
        const result = data.detail
        res.status(200).json(result)
      } catch (error) {
        genError(res,error,'DE003')
      }
      break
    }
    case 'delete': {
      const { classCode, xmlData } = req.body
      const URL = apiPath.delegado.Path_PostRegisterDelegate
      try {
				const apiCall: AxiosInstance = axiosCreate(ClassShedule)
        const { data } = await apiCall.post(URL, {
          classCode,
          xmlData,
        })
        const result = data.detail
        res.status(200).json(result)
      } catch (error) {
        genError(res,error,'DE004')
      }
      break
    }
  }
}

export default handler
