import { axiosCreate } from '../../../config/axios'
import type { NextApiRequest, NextApiResponse } from 'next'
import { apiPath } from './../../../consts/path'
import { objecApi } from '../../../consts/storageConst'
import { AxiosInstance } from 'axios'
import { genError } from '../../../helpers/helpers'

type Data = {}

const { TeacherAttendance, ClassShedule } = objecApi

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { params }: any = req.query

  switch (params[0]) {
    case 'list': {
      const URL = apiPath.solicitudMarcacion.PATH_PostSessionsNotStarted

      try {
        const obj = {
          action: 'get_docesolicitud',
          teacherCode: `${params[1]}`,
          classId: null,
          dateHour: null,
          classRoomCode: null,
          conClassInitial: null,
          conClassFinal: null,
        }
				const apiCall:AxiosInstance = axiosCreate(TeacherAttendance)
        const noIniciadas = await apiCall.post(URL, obj)

        const obj2 = {
          action: 'get_docabiertasolicitud',
          teacherCode: `${params[1]}`,
          classId: null,
          dateHour: null,
          classRoomCode: null,
          conClassInitial: null,
          conClassFinal: null,
        }

				const apiCall2:AxiosInstance = axiosCreate(TeacherAttendance)
        const noCerradas = await apiCall2.post(URL, obj2)

        const obj3 = {
          action: 'get_docesolicitudpen',
          teacherCode: `${params[1]}`,
          classId: null,
          dateHour: null,
          classRoomCode: null,
          conClassInitial: null,
          conClassFinal: null,
        }

				const apiCall3:AxiosInstance = axiosCreate(TeacherAttendance)
        const pending = await apiCall3.post(URL, obj3)

        const data = {
          noinit: noIniciadas.data.detail,
          noClose: noCerradas.data.detail,
          pending: pending.data.detail,
        }

        res.status(200).json(data)
      } catch (error) {
				genError(res,error,'SM001')
      }

      break
    }
    case 'detailClass': {
      const URL = apiPath.solicitudMarcacion.PATH_PostSessionsNotStarted
      const item = req.body

      const obj = {
        action: 'get_clasesolicitud',
        teacherCode: item.teacherCode,
        teacherUser: item.teacherUser,
        dateHour: item.HoursDate,
        classRoomCode: item.ClassRoomCode,
        conClassInitial: item.FechahoursIni,
        conClassFinal: item.FechahoursEnd,
        classCode: item.ClaCode,
      }

      try {
				const apiCall:AxiosInstance = axiosCreate(TeacherAttendance)
        const { data } = await apiCall.post(URL, obj)

        res.status(200).json(data)
      } catch (error: any) {
				genError(res,error, 'SM002')
      }
      break
    }
    case 'chequeAsisAlum': {
      try {
        const URL =
          apiPath.solicitudMarcacion.PATH_VerifyAsistanceStudentSolicitud(
            params[1],
            params[2],
            params[3]
          )

				const apiCall:AxiosInstance = axiosCreate(TeacherAttendance)
        const { data } = await apiCall(URL)

        res.status(200).json(data.detail.control)
      } catch (error) {
        
				genError(res,error, 'SM003')
      }
      break
    }
    case 'getSesionesDocenteSolicitarValidar': {
      const item = req.body

      const obj = {
        action: 'get_validarclaseid',
        teacherCode: item.teacherCode,
        nrodia: item.nrodia,
        date: item.date,
        classCode: item.classCode,
        classroom: item.classroom,
        user: item.user,
        beginning: item.beginning,
        finish: item.finish,
      }

      try {
        const URL = apiPath.solicitudMarcacion.PATH_SessionTacherRequestValidate
				const apiCall:AxiosInstance = axiosCreate(ClassShedule)
        const resp = await apiCall.post(URL, { ...obj })

        res.status(200).json(resp.data.detail)
      } catch (error) {
        
				genError(res,error, 'SM004')
      }
      break
    }
    case 'sesionesAsistenciaSolicitarValidar': {
      try {
        const URL = apiPath.solicitudMarcacion.PATH_SessionAssistanceValidate(
          'get_validarasistclaabierta',
          params[2],
          params[3]
        )

				const apiCall:AxiosInstance = axiosCreate(ClassShedule)
        const resp = await apiCall(URL)

        res.status(200).json(resp.data.detail)
      } catch (error) {
        
				genError(res,error, 'SM005')
      }

      break
    }
    case 'actualizaSesionAbiertaSolicitud': {
      try {
        const item = req.body

        const obj = {
          classId: item.classId,
          nrodia: item.nrodia,
          classroomCode: item.classroomCode,
          updateUser: item.updateUser,
          classBeginning: item.classBeginning,
          classFinish: item.classFinish,
          observations: item.observations,
        }

        const URL = apiPath.solicitudMarcacion.PATH_SessionOpenRequest

				const apiCall:AxiosInstance = axiosCreate(ClassShedule)
        const resp = await apiCall.post(URL, obj)
        res.status(200).json(resp.data.detail)
      } catch (error) {
				genError(res,error, 'SM006')
			}
      break
    }
    case 'endSesion': {
      try {
				const apiCall:AxiosInstance = axiosCreate(ClassShedule)
        const resp = await apiCall(
          `/ClassSchedule/EndSessionRequest/${params[2]}/${params[3]}/${params[4]}`
        )

        // TODO: Habilitar una vez corrijan el api /ClassSchedule/sessions/
        /* const URL = apiPath.solicitudMarcacion.PATH_EndSessionRequest

        const obj = {
          Session: params[2],
          user: params[3],
          observation: params[4],
        }
        const resp = await axiosfetchPrivate.put(URL, obj) */

        res.status(200).json(resp.data.detail)
      } catch (error) {
        
				genError(res,error, 'SM007')
      }

      break
    }
    case 'insertar': {
      const item = req.body

      try {
        const URL = apiPath.solicitudMarcacion.PATH_InsertSessionRequest
				const apiCall:AxiosInstance = axiosCreate(TeacherAttendance)
        const resp = await apiCall.post(URL, item)

        if (resp.data.detail && resp.data.detail === 0) {
          const error = new Error('No se pudo intertar el registro de sesion')
          res.status(404).json({ msg: error.message })
        }

        res.status(200).json(resp.data.detail)
      } catch (error) {
        
				genError(res,error, 'SM008')
      }

      break
    }
  }
}

export default handler
