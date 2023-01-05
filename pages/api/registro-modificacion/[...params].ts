import { axiosCreate, axiosfetchPrivateEmail } from '../../../config/axios'
import { AxiosInstance } from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'
import { apiPath } from '../../../consts/path'
import { objecApi } from '../../../consts/storageConst'
import { genError } from '../../../helpers/helpers'

type Data = {}
const { ClassShedule, Note } = objecApi

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { params }: any = req.query

  switch (params[0]) {
    case 'listSolicitud': {
      try {
        const apiCall: AxiosInstance = axiosCreate(Note)
        const URL = apiPath.registroModificacionNotas.PATH_listado(params[1])
        const { data } = await apiCall(URL)
        console.log(data)
        const result = data.detail
        res.status(200).json(result)
      } catch (error) {
        genError(res, error, 'RM001')
      }
      break
    }
    case 'list': {
      try {
        const apiCall: AxiosInstance = axiosCreate(ClassShedule)
        const URL = apiPath.registroModificacionNotas.PATH_GetTeachersCorses(
          params[1]
        )
        const { data } = await apiCall(URL)
        const result = data.detail
        res.status(200).json(result)
      } catch (error) {
        genError(res, error, 'RM001')
      }
      break
    }
    case 'notesClass': {
      const apiCall: AxiosInstance = axiosCreate(Note)
      const URL = apiPath.Notes.PATH_GetNoteClass(params[1])
      try {
        const { data } = await apiCall(URL)
        const result = data.detail

        console.log('PARAMS_DETAIL_', result)
        if (result !== undefined) {
          res.status(200).json(result)
        } else {
          throw new Error('Error: no hay datos')
        }
      } catch (error) {
        genError(res, error, 'RM002')
      }
      break
    }
    case 'listStudent': {
      const apiCall: AxiosInstance = axiosCreate(Note)
      const URL = apiPath.registroModificacionNotas.PATH_listStudent(
        params[1],
        params[2]
      )
      try {
        const { data } = await apiCall(URL)
        const result = data.detail

        console.log('PARAMS_DETAIL_STUDENT', result)
        if (result !== undefined) {
          res.status(200).json(result)
        } else {
          throw new Error('Error: no hay datos')
        }
      } catch (error) {
        genError(res, error, 'RM003')
      }
      break
    }
    case 'cancelar': {
      const apiCall: AxiosInstance = axiosCreate(Note)
      const URL = apiPath.registroModificacionNotas.PATH_cancel
      try {
        const { data } = await apiCall.put(URL, { requestId: params[1] })
        const result = data.detail

        console.log('PARAMS_CANCELAR', result)
        if (result !== undefined) {
          res.status(200).json(result)
        } else {
          throw new Error('Error: no hay datos')
        }
      } catch (error) {
        genError(res, error, 'RM003')
      }
      break
    }
    case 'register': {
      try {
        const item = req.body
        console.log(item)
        const apiCall: AxiosInstance = axiosCreate(Note)
        const URL = apiPath.registroModificacionNotas.PATH_register
        const { data } = await apiCall.post(URL, item)
        const result = data.detail
        res.status(200).json(result)
      } catch (error) {
        console.log(error)
        genError(res, error, 'RM004')
      }
      break
    }
    case 'validationNotes': {
      try {
        const item = req.body
        console.log(item)
        const apiCall: AxiosInstance = axiosCreate(Note)
        const URL = apiPath.registroModificacionNotas.PATH_validationNotes
        console.log(URL)
        const { data } = await apiCall.post(URL, item)
        const result = data.detail
        res.status(200).json(result)
      } catch (error) {
        genError(res, error, 'RM005')
      }
      break
    }
    case 'validationPlazo': {
      try {
        const apiCall: AxiosInstance = axiosCreate(Note)
        const URL = apiPath.registroModificacionNotas.PATH_validationPlazo(
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
        genError(res, error, 'RM006')
      }
      break
    }
    case 'email': {
      const emailJson = req.body
      console.log(req.body)
      try {
        const resp = await axiosfetchPrivateEmail.post(`/`, emailJson)

        console.log(resp.data.Status)

        res.status(200).json(resp.data.Status)
      } catch (error) {
        genError(res, error, 'RM007')
      }

      break
    }
    case 'detalles': {
      const apiCall: AxiosInstance = axiosCreate(Note)
      const URL = apiPath.registroModificacionNotas.PATH_detail(params[1])
      try {
        const { data } = await apiCall(URL)
        const result = data.detail

        console.log('PARAMS_Detalles', result)
        if (result !== undefined) {
          res.status(200).json(result)
        } else {
          throw new Error('Error: no hay datos')
        }
      } catch (error) {
        genError(res, error, 'RM008')
      }
      break
    }
    case 'emailDAS': {
      // sedCode
      const apiCall: AxiosInstance = axiosCreate(Note)
      const URL = apiPath.registroModificacionNotas.PATH_emailsDAS(params[1])
      try {
        const { data } = await apiCall(URL)
        const result = data.detail

        console.log('emailDAS', result)
        if (result !== undefined) {
          res.status(200).json(result)
        } else {
          throw new Error('Error: no hay datos')
        }
      } catch (error) {
        genError(res, error, 'RM008')
      }
      break
    }
    case 'emailCC': {
      // classCode
      const apiCall: AxiosInstance = axiosCreate(Note)
      const URL = apiPath.registroModificacionNotas.PATH_emailsCC(params[1])
      try {
        const { data } = await apiCall(URL)
        const result = data.detail

        console.log('emailCC', result)
        if (result !== undefined) {
          res.status(200).json(result)
        } else {
          throw new Error('Error: no hay datos')
        }
      } catch (error) {
        genError(res, error, 'RM008')
      }
      break
    }
  }
}

export default handler
