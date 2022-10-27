import {
  axiosfetchPrivate,
  axiosfetchPrivateEmail,
} from '../../../config/axios'
import type { NextApiRequest, NextApiResponse } from 'next'
import { apiPath } from '../../../consts/path'

type Data = {}

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { params }: any = req.query

  switch (params[0]) {
    case 'list': {
      try {
        const URL = apiPath.recuperarAdelantarClases.PATH_GetTeachersRecoverys(
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
    }
    case 'listTeacherCourses': {
      try {
        const URL = apiPath.recuperarAdelantarClases.PATH_GetTeacherCourses(
          params[1]
        )
        const { data } = await axiosfetchPrivate(URL)
        const result = data.detail
        res.status(200).json(result)
      } catch (error) {
        console.log(error)
      }
      break
    }
    case 'listDateHoliday': {
      try {
        const URL = apiPath.recuperarAdelantarClases.PATH_GetHolyday(params[1])
        const { data } = await axiosfetchPrivate(URL)
        const result = data.detail
        res.status(200).json(result)
      } catch (error) {
        console.log(error)
      }
      break
    }
    case 'listClassDate': {
      try {
        const URL = apiPath.recuperarAdelantarClases.PATH_GetClassDate(
          params[1],
          params[2],
          params[3]
        )
        const { data } = await axiosfetchPrivate(URL)
        const result = data.detail
        res.status(200).json(result)
      } catch (error) {
        console.log(error)
      }
      break
    }
    case 'listLaboratories': {
      try {
        const URL = apiPath.recuperarAdelantarClases.PATH_GetLaboratories
        const { data } = await axiosfetchPrivate(URL)
        const result = data.detail
        res.status(200).json(result)
      } catch (error) {
        console.log(error)
      }
      break
    }
    case 'ScheduleSessions': {
      try {
        const { obj } = req.body
        const URL = apiPath.recuperarAdelantarClases.PATH_PostScheduleSessions
        const { data } = await axiosfetchPrivate.post(URL, obj)
        const result = data.detail
        res.status(200).json(result)
      } catch (error) {
        console.log(error)
      }
      break
    }
    case 'ClasEnabled': {
      try {
        const URL = apiPath.recuperarAdelantarClases.PATH_GetClasEnabled(
          params[1],
          params[2],
          params[3],
          params[4],
          params[5]
        )
        const { data } = await axiosfetchPrivate(URL)
        const result = data.detail
        res.status(200).json(result)
      } catch (error) {
        console.log(error)
      }
      break
    }
    case 'AttendanceRecoverys': {
      try {
        const { obj } = req.body
        const URL =
          apiPath.recuperarAdelantarClases.PATH_PostTeacherAttendanceRecoverys
        const { data } = await axiosfetchPrivate.post(URL, obj)
        if (data.errorMessage) {
          res.status(200).json({ message: data.errorMessage, state: false })
        } else {
          res.status(200).json({
            message: 'Se registró correctamente la recuperación de clase.',
            state: true,
          })
        }
      } catch (error) {
        console.log(error)
      }
      break
    }
    case 'ClassRecuperation': {
      try {
        const URL = apiPath.recuperarAdelantarClases.PATH_GetClassRecuperation(
          params[1]
        )
        const { data } = await axiosfetchPrivate(URL)
        const result = data.detail
        res.status(200).json(result)
      } catch (error) {
        console.log(error)
      }
      break
    }
    case 'AttendanceRecoverysPUT': {
      try {
        const { obj } = req.body
        const URL =
          apiPath.recuperarAdelantarClases.PATH_PostTeacherAttendanceRecoverys
        const { data } = await axiosfetchPrivate.put(URL, obj)
        if (data.errorMessage) {
          res.status(200).json({ message: data.errorMessage, state: false })
        } else {
          res.status(200).json({
            message: 'Se actualizó correctamente la recuperación de clase.',
            state: true,
          })
        }
      } catch (error) {
        console.log(error)
      }
      break
    }
    case 'DeleteRecovery': {
      try {
        const URL = apiPath.recuperarAdelantarClases.PATH_DeleteRecovery
        const { data } = await axiosfetchPrivate.delete(URL, {
          data: { recoveryId: params[1] },
        })
        const result = data.detail
        res.status(200).json(result)
      } catch (error) {
        console.log(error)
      }
      break
    }
    case 'GetTeacherUser': {
      try {
        const URL = apiPath.recuperarAdelantarClases.PATH_GetTeacherUser(
          params[1]
        )
        const { data } = await axiosfetchPrivate(URL)
        const result = data.detail
        res.status(200).json(result)
      } catch (error) {
        console.log(error)
      }
      break
    }
    case 'GetClassTeachers': {
      try {
        const URL = apiPath.recuperarAdelantarClases.PATH_GetClassTeachers(
          params[1]
        )
        const { data } = await axiosfetchPrivate(URL)
        const result = data.detail
        res.status(200).json(result)
      } catch (error) {
        console.log(error)
      }
      break
    }
    case 'GetTeacher': {
      try {
        const URL = apiPath.recuperarAdelantarClases.PATH_GetTeacher(params[1])
        const { data } = await axiosfetchPrivate(URL)
        const result = data.detail
        res.status(200).json(result)
      } catch (error) {
        console.log(error)
      }
      break
    }
    case 'email': {
      const emailJson = req.body
      try {
        const resp = await axiosfetchPrivateEmail.post(`/`, emailJson)

        res.status(200).json(resp.data.Status)
      } catch (error) {
        console.log(error)
      }

      break
    }
    case 'GetRateCampusCode': {
      try {
        const URL = apiPath.recuperarAdelantarClases.PATH_GetRateCampusCode(
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
    }
    default:
      break
  }
}

export default handler
