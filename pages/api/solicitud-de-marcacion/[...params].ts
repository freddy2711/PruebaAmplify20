import { axiosfetchPrivate } from '../../../config/axios'
import type { NextApiRequest, NextApiResponse } from 'next'
import { apiPath } from './../../../consts/path'

type Data = {}

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { params }: any = req.query

  console.log(params)

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

        const noIniciadas = await axiosfetchPrivate.post(URL, obj)

        console.log('noIniciadas', noIniciadas.data)

        const obj2 = {
          action: 'get_docabiertasolicitud',
          teacherCode: `${params[1]}`,
          classId: null,
          dateHour: null,
          classRoomCode: null,
          conClassInitial: null,
          conClassFinal: null,
        }

        const noCerradas = await axiosfetchPrivate.post(URL, obj2)

        const obj3 = {
          action: 'get_docesolicitudpen',
          teacherCode: `${params[1]}`,
          classId: null,
          dateHour: null,
          classRoomCode: null,
          conClassInitial: null,
          conClassFinal: null,
        }

        const pending = await axiosfetchPrivate.post(URL, obj3)

        const data = {
          noinit: noIniciadas.data.detail,
          noClose: noCerradas.data.detail,
          pending: pending.data.detail,
        }

        res.status(200).json(data)
      } catch (error) {
        console.log(error)
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

      console.log(obj)

      try {
        const { data } = await axiosfetchPrivate.post(URL, obj)

        res.status(200).json(data)
      } catch (error: any) {
        console.log(error)
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
        const { data } = await axiosfetchPrivate(URL)

        console.log('response', data)

        res.status(200).json(data.detail.control)
      } catch (error) {
        console.log(error)
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
        const resp = await axiosfetchPrivate.post(URL, { ...obj })

        console.log('RRREESSSPUESSSSS_SOLVAL_', resp)

        res.status(200).json(resp.data.detail)
      } catch (error) {
        console.log(error)
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
        const resp = await axiosfetchPrivate(URL)

        res.status(200).json(resp.data.detail)
      } catch (error) {
        console.log(error)
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

        const resp = await axiosfetchPrivate.post(URL, obj)
        res.status(200).json(resp.data.detail)
      } catch (error) {}
      break
    }
    case 'endSesion': {
      try {
        const resp = await axiosfetchPrivate(
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
        console.log(error)
      }

      break
    }
    case 'insertar': {
      const item = req.body

      console.log('---- ITEM INSERTAR -----', item)

      try {
        const URL = apiPath.solicitudMarcacion.PATH_InsertSessionRequest
        const resp = await axiosfetchPrivate.post(URL, item)

        console.log('resp.data.detail-- ', resp)

        if (resp.data.detail && resp.data.detail === 0) {
          const error = new Error('No se pudo intertar el registro de sesion')
          res.status(404).json({ msg: error.message })
        }

        res.status(200).json(resp.data.detail)
      } catch (error) {
        console.log(error)
      }

      break
    }
  }
}

export default handler
