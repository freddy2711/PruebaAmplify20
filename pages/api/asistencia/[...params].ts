import {
  axiosfetchPrivate,
  axiosfetchPrivateEmail,
} from '../../../config/axios'
import type { NextApiRequest, NextApiResponse } from 'next'
import { apiPath } from './../../../consts/path'

type Data = {}

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { params }: any = req.query

  switch (params[0]) {
    case 'list': {
      try {
        const URL = apiPath.asistencia.PATH_GetAttendanceSummarySession(
          params[1]
        )
        const { data } = await axiosfetchPrivate(URL)
        const result = data.detail[0]
        res.status(200).json(result)
      } catch (error) {
        console.log(error)
      }
      break
    }
    case 'DetailClass': {
      try {
        const URL = apiPath.asistencia.PATH_ParameterByCodeAndClass(
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
    case 'getClaseDetalle': {
      try {
        const URL = apiPath.asistencia.PATH_ParameterByCodeAndClass(
          params[1],
          params[2]
        )
        const { data } = await axiosfetchPrivate(URL)

        const { detail } = data

        res.status(200).json(detail[0].ParameterState)
      } catch (error) {
        console.log(error)
      }
      break
    }
    case 'listarAsistencia': {
      try {
        const URL = apiPath.asistencia.PATH_GetPayrollAssistance(params[1])
        const resp = await axiosfetchPrivate(URL)
        console.log('listaAsist', resp)
        res.status(200).json(resp.data.detail)
      } catch (error) {
        console.log(error)
      }
      break
    }
    case 'registraAsistenciasolicitud': {
      try {
        const item = req.body

        console.log(item)
        // PATH_InsertRequestAttendance
        const URL = apiPath.asistencia.PATH_InsertRequestAttendance
        const resp: any = await axiosfetchPrivate.post(URL, item)

        res.status(200).json(resp?.data.status)
      } catch (error) {
        console.log(error)
      }

      break
    }
    case 'registraAsistencia': {
      try {
        const item = req.body

        const URL = apiPath.asistencia.PATH_PostRecordAttendance
        const resp: any = await axiosfetchPrivate.post(URL, item)
        console.log('REGISTRA_ASISTENCIA', resp?.data.detail)
        res.status(200).json(resp?.data.detail.Status)
      } catch (error) {
        console.log(error)
      }

      break
    }
    case 'actualizaRecuperacionEstado': {
      try {
        const item = req.body
        const URL = apiPath.asistencia.PATH_UpdateStateRecovery
        const resp = await axiosfetchPrivate.post(URL, item)

        console.log('actualizaRecuperacionEstado__', resp.data.detail)

        res.status(200).json(resp.data.detail)
      } catch (error) {
        console.log(error)
      }

      break
    }
    case 'terminaSesion': {
      try {
        // PATH_EndSession
        const URL = apiPath.asistencia.PATH_EndSession

        const obj = {
          session: params[1],
          username: params[2],
        }

        const resp = await axiosfetchPrivate.post(URL, obj)

        console.log('terminaSesion__', resp.data.detail)

        res.status(200).json(resp.data.detail)
      } catch (error) {
        console.log(error)
      }

      break
    }
    case 'terminaSesionSolicitud': {
      try {
        // PATH_EndSessionRequest
        const URL = apiPath.asistencia.PATH_EndSessionRequest

        const obj = {
          Session: params[1],
          user: params[2],
          observation: params[3],
        }

        const resp = await axiosfetchPrivate.put(URL, obj)

        console.log('terminaSesionSolicitud__', resp.data.detail)

        res.status(200).json(resp.data.detail)
      } catch (error) {
        console.log(error)
      }

      break
    }
    case 'AsistenciaEnFechasControl': {
      try {
        const item = req.body

        const URL = apiPath.asistencia.PATH_PostAttendanceIsOnCheckDate

        const { data } = await axiosfetchPrivate.post(URL, item)

        console.log('AsistenciaEnFechasControl__', data.detail)

        res.status(200).json(data.detail)
      } catch (error) {
        console.log(error)
      }

      break
    }
    case 'puedeCerrar': {
      try {
        const URL = apiPath.asistencia.PATH_cantCloseRequest(params[1])

        const resp = await axiosfetchPrivate(URL)

        console.log('puedeCerrar__', resp.data.detail)

        res.status(200).json(resp.data.detail)
      } catch (error) {
        console.log(error)
      }

      break
    }
    case 'email': {
      const emailJson = req.body
      try {
        const resp = await axiosfetchPrivateEmail.post(`/`, emailJson)

        console.log(resp.data.Status)

        res.status(200).json(resp.data.Status)
      } catch (error) {
        console.log(error)
      }

      break
    }
    case 'listarCorreo_Solicitud': {
      try {
        const URL = apiPath.asistencia.PATH_GetListEmailRequest(
          'get_correo',
          params[1],
          params[2]
        )

        const resp = await axiosfetchPrivate(URL)

        res.status(200).json(resp.data.detail)
      } catch (error) {
        console.log(error)
      }

      break
    }
    case 'trabajador': {
      try {
        // PATH_TeacherLogin
        const URL = apiPath.asistencia.PATH_TeacherLogin(params[1])
        const resp = await axiosfetchPrivate(URL)

        res.status(200).json(resp.data.detail[0])
      } catch (error) {
        console.log(error)
      }

      break
    }
  }
}

export default handler
