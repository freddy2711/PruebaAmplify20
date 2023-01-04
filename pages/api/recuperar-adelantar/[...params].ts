import { axiosCreate, axiosfetchPrivateEmail } from '../../../config/axios'
import type { NextApiRequest, NextApiResponse } from 'next'
import { apiPath } from '../../../consts/path'
import { objecApi } from '../../../consts/storageConst'
import { AxiosInstance } from 'axios'
import { genError } from '../../../helpers/helpers'

type Data = {}
const ClassShedule = objecApi.ClassShedule
const Utility = objecApi.Utility
const Teacher = objecApi.Teacher
const TeacherAttendance = objecApi.TeacherAttendance
const Attendance = objecApi.Attendance

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { params }: any = req.query

  switch (params[0]) {
    case 'list': {
      try {
        const apiCall: AxiosInstance = axiosCreate(ClassShedule)
        const URL = apiPath.recuperarAdelantarClases.PATH_GetTeachersRecoverys(
          params[1],
          params[2]
        )
        const { data } = await apiCall(URL)
        const result = data.detail
        res.status(200).json(result)
      } catch (error) {
        genError(res, error, 'RA001')
      }
      break
    }
    case 'listTeacherCourses': {
      try {
        const apiCall: AxiosInstance = axiosCreate(ClassShedule)
        const URL = apiPath.recuperarAdelantarClases.PATH_GetTeacherCourses(
          params[1]
        )
        const { data } = await apiCall(URL)
        const result = data.detail
        res.status(200).json(result)
      } catch (error) {
        genError(res, error, 'RA002')
      }
      break
    }
    case 'listDateHoliday': {
      try {
        const apiCall: AxiosInstance = axiosCreate(Utility)
        const URL = apiPath.recuperarAdelantarClases.PATH_GetHolyday(params[1])
        const { data } = await apiCall(URL)
        const result = data.detail
        res.status(200).json(result)
      } catch (error) {
        genError(res, error, 'RA003')
      }
      break
    }
    case 'listClassDate': {
      try {
        const apiCall: AxiosInstance = axiosCreate(ClassShedule)
        const URL = apiPath.recuperarAdelantarClases.PATH_GetClassDate(
          params[1],
          params[2],
          params[3]
        )
        const { data } = await apiCall(URL)
        const result = data.detail
        res.status(200).json(result)
      } catch (error) {
        genError(res, error, 'RA004')
      }
      break
    }
    case 'listLaboratories': {
      try {
        const apiCall: AxiosInstance = axiosCreate(ClassShedule)
        const URL = apiPath.recuperarAdelantarClases.PATH_GetLaboratories
        const { data } = await apiCall(URL)
        const result = data.detail
        res.status(200).json(result)
      } catch (error) {
        genError(res, error, 'RA005')
      }
      break
    }
    case 'ScheduleSessions': {
      try {
        const apiCall: AxiosInstance = axiosCreate(ClassShedule)
        const { obj } = req.body
        const URL = apiPath.recuperarAdelantarClases.PATH_PostScheduleSessions
        const { data } = await apiCall.post(URL, obj)
        const result = data.detail
        res.status(200).json(result)
      } catch (error) {
        genError(res, error, 'RA006')
      }
      break
    }
    case 'ClasEnabled': {
      try {
        const apiCall: AxiosInstance = axiosCreate(ClassShedule)
        const URL = apiPath.recuperarAdelantarClases.PATH_GetClasEnabled(
          params[5] === undefined ? '' : params[5],
          params[1],
          params[2],
          params[3],
          params[4]
        )
        const { data } = await apiCall(URL)
        const result = data.detail
        res.status(200).json(result)
      } catch (error) {
        genError(res, error, 'RA007')
      }
      break
    }
    case 'ClasEnabledEdit': {
      try {
        const apiCall: AxiosInstance = axiosCreate(ClassShedule)
        const URL = apiPath.recuperarAdelantarClases.PATH_GetClasEnabled(
          params[1],
          params[2],
          params[3],
          params[4],
          params[5]
        )
        const { data } = await apiCall(URL)
        const result = data.detail
        res.status(200).json(result)
      } catch (error) {
        genError(res, error, 'RA008')
      }
      break
    }
    case 'AttendanceRecoverys': {
      try {
        const apiCall: AxiosInstance = axiosCreate(TeacherAttendance)
        const { obj } = req.body
        const URL =
          apiPath.recuperarAdelantarClases.PATH_PostTeacherAttendanceRecoverys
        const { data } = await apiCall.post(URL, obj)
        if (data.errorMessage) {
          res.status(200).json({ message: data.errorMessage, state: false })
        } else {
          res.status(200).json({
            message: 'Se registró correctamente la recuperación de clase.',
            state: true,
          })
        }
      } catch (error) {
        genError(res, error, 'RA009')
      }
      break
    }
    case 'ClassRecuperation': {
      try {
        const apiCall: AxiosInstance = axiosCreate(ClassShedule)
        const URL = apiPath.recuperarAdelantarClases.PATH_GetClassRecuperation(
          params[1]
        )
        const { data } = await apiCall(URL)
        const result = data.detail
        res.status(200).json(result)
      } catch (error) {
        genError(res, error, 'RA010')
      }
      break
    }
    case 'AttendanceRecoverysPUT': {
      try {
        const apiCall: AxiosInstance = axiosCreate(TeacherAttendance)
        const { obj } = req.body
        const URL =
          apiPath.recuperarAdelantarClases.PATH_PostTeacherAttendanceRecoverys
        const { data } = await apiCall.put(URL, obj)
        if (data.errorMessage) {
          res.status(200).json({ message: data.errorMessage, state: false })
        } else {
          res.status(200).json({
            message: 'Se actualizó correctamente la recuperación de clase.',
            state: true,
          })
        }
      } catch (error) {
        genError(res, error, 'RA011')
      }
      break
    }
    case 'DeleteRecovery': {
      try {
        const apiCall: AxiosInstance = axiosCreate(TeacherAttendance)
        const URL = apiPath.recuperarAdelantarClases.PATH_DeleteRecovery
        const { data } = await apiCall.delete(URL, {
          data: { recoveryId: params[1] },
        })
        const result = data.detail
        res.status(200).json(result)
      } catch (error) {
        genError(res, error, 'RA012')
      }
      break
    }
    case 'GetTeacherUser': {
      try {
        const apiCall: AxiosInstance = axiosCreate(Teacher)
        const URL = apiPath.recuperarAdelantarClases.PATH_GetTeacherUser(
          params[1]
        )
        const { data } = await apiCall(URL)
        const result = data.detail
        res.status(200).json(result)
      } catch (error) {
        genError(res, error, 'RA013')
      }
      break
    }
    case 'GetClassTeachers': {
      try {
        const apiCall: AxiosInstance = axiosCreate(ClassShedule)
        const URL = apiPath.recuperarAdelantarClases.PATH_GetClassTeachers(
          params[1]
        )
        const { data } = await apiCall(URL)
        const result = data.detail
        res.status(200).json(result)
      } catch (error) {
        genError(res, error, 'RA014')
      }
      break
    }
    case 'GetTeacher': {
      try {
        const apiCall: AxiosInstance = axiosCreate(Teacher)
        const URL = apiPath.recuperarAdelantarClases.PATH_GetTeacher(params[1])
        const { data } = await apiCall(URL)
        const result = data.detail
        res.status(200).json(result)
      } catch (error) {
        genError(res, error, 'RA015')
      }
      break
    }
    case 'email': {
      const emailJson = req.body
      try {
        const resp = await axiosfetchPrivateEmail.post(`/`, emailJson)

        res.status(200).json(resp.data.Status)
      } catch (error) {
        genError(res, error, 'RA016')
      }

      break
    }
    case 'GetRateCampusCode': {
      try {
        const apiCall: AxiosInstance = axiosCreate(Teacher)
        const URL = apiPath.recuperarAdelantarClases.PATH_GetRateCampusCode(
          params[1],
          params[2]
        )
        const { data } = await apiCall(URL)
        const result = data.detail
        res.status(200).json(result)
      } catch (error) {
        genError(res, error, 'RA017')
      }
      break
    }
    case 'GetProcessUser': {
      try {
        const apiCall: AxiosInstance = axiosCreate(Attendance)
        const URL = apiPath.recuperarAdelantarClases.PATH_GetProcessUser(
          params[1],
          params[2]
        )
        const { data } = await apiCall(URL)
        const result = data.detail
        res.status(200).json(result)
      } catch (error) {
        genError(res, error, 'RA018')
      }
      break
    }
    default:
      break
  }
}

export default handler
