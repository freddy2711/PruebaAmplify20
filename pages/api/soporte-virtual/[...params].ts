import {
  axiosCreate,
  axiosfetchPrivateEmail,
  axiosfetchPrivateUpload,
} from '../../../config/axios'
import type { NextApiRequest, NextApiResponse } from 'next'
import { apiPath } from './../../../consts/path'
import { objecApi } from '../../../consts/storageConst'
import { AxiosInstance } from 'axios'
import { genError } from '../../../helpers/helpers'

type Data = {}

const { TeacherAttendance, Teacher, Utility } = objecApi

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { params }: any = req.query

  console.log('PARAMS_', params)

  switch (params[0]) {
    case 'fileAsesor': {
      const URL = apiPath.soporteVirtual.PATH_GETFILE(params[1], params[2])
      try {
        const apiCall: AxiosInstance = axiosCreate(TeacherAttendance)
        const { data } = await apiCall(URL)
        console.log('response', data)
        res.status(200).json(data.detail)
      } catch (error) {
        genError(res, error, 'SV001')
      }
      break
    }
    case 'tipocse': {
      const URL = apiPath.soporteVirtual.PATH_tipos(params[1], params[2])
      try {
        const apiCall: AxiosInstance = axiosCreate(TeacherAttendance)
        const { data } = await apiCall(URL)
        console.log('response', data)
        res.status(200).json(data.detail)
      } catch (error) {
        genError(res, error, 'SV002')
      }
      break
    }
    case 'insertConsulta': {
      const item = req.body
      const URL = apiPath.soporteVirtual.PATH_INSERT

      try {
        const apiCall: AxiosInstance = axiosCreate(TeacherAttendance)
        const { data } = await apiCall.post(URL, item)
        console.log('response', data)
        res.status(200).json(data.detail)
      } catch (error) {
        genError(res, error, 'SV003')
      }
      break
    }
    case 'consulta': {
      const URL = apiPath.soporteVirtual.PATH_docenteConsulta(params[1])
      try {
        const apiCall: AxiosInstance = axiosCreate(TeacherAttendance)
        const { data } = await apiCall(URL)
        console.log('response', data)
        res.status(200).json(data.detail)
      } catch (error) {
        genError(res, error, 'SV004')
      }
      break
    }
    case 'apiAnexos': {
      const URL = apiPath.soporteVirtual.PATH_GETANEXOS(params[1], params[2])
      try {
        const apiCall: AxiosInstance = axiosCreate(TeacherAttendance)
        const { data } = await apiCall(URL)
        console.log('historyAnexos', data)
        res.status(200).json(data.detail)
      } catch (error) {
        genError(res, error, 'SV005')
      }
      break
    }
    case 'docenteConsulta': {
      const URL = apiPath.soporteVirtual.PATH_HISTORY(params[1], params[2])
      try {
        const apiCall: AxiosInstance = axiosCreate(TeacherAttendance)
        const { data } = await apiCall(URL)
        console.log('response', data)
        res.status(200).json(data.detail)
      } catch (error) {
        genError(res, error, 'SV006')
      }
      break
    }
    case 'requestConsulta': {
      const item = req.body
      const URL = apiPath.soporteVirtual.PATH_REQUEST

      try {
        const apiCall: AxiosInstance = axiosCreate(TeacherAttendance)
        const { data } = await apiCall.post(URL, item)
        console.log('response', data)
        res.status(200).json(data.detail)
      } catch (error) {
        genError(res, error, 'SV007')
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
        genError(res, error, 'SV008')
      }

      break
    }
    case 'upload': {
      const item = req.body

      const { nameS3, usuario, type, tipo } = item

      const fileObj = {
        idtramite: '0',
        usuario,
        TypeArchivo: type,
        fileName: `${nameS3}.${tipo}`,
        secretName: process.env.SECRET_UPLOAD_SV,
        path: process.env.PATH_UPLOAD_SV,
      }

      const URL = apiPath.competence.PATH_upload

      try {
        const { data } = await axiosfetchPrivateUpload.post(URL, fileObj)
        console.log(data)

        const URL_UPLOAD = data.url

        console.log('UPLOAD_URL', URL_UPLOAD)

        res.status(200).json(URL_UPLOAD)
      } catch (error) {
        genError(res, error, 'SV009')
      }
      break
    }
    case 'download': {
      const item = req.body
      const URL = apiPath.soporteVirtual.PATH_download
      try {
        const resp = await axiosfetchPrivateUpload.post(URL, item)
        console.log(resp.data)
        res.status(200).json(resp.data)
      } catch (error) {
        genError(res, error, 'SV010')
      }
      break
    }
    case 'insertImg': {
      const item = req.body
      const URL = apiPath.soporteVirtual.PATH_INSERT_IMG
      try {
        const apiCall: AxiosInstance = axiosCreate(Teacher)
        const resp = await apiCall.post(URL, item)
        console.log(resp.data)
        res.status(200).json(resp.data)
      } catch (error) {
        genError(res, error, 'SV011')
      }
      break
    }
    case 'cleanAnexo': {
      const item = req.body
      const URL = apiPath.soporteVirtual.PATH_CLEAN
      try {
        const apiCall: AxiosInstance = axiosCreate(Teacher)
        const resp = await apiCall.post(URL, item)
        console.log(resp.data)
        res.status(200).json(resp.data)
      } catch (error) {
        genError(res, error, 'SV012')
      }
      break
    }
    case 'deleteImgAws': {
      const item = req.body
      const URL = apiPath.soporteVirtual.PATH_DELETE_AWS
      try {
        const apiCall: AxiosInstance = axiosCreate(Utility)
        const resp = await apiCall.post(URL, item)
        console.log(resp.data)
        res.status(200).json(resp.data)
      } catch (error) {
        genError(res, error, 'SV013')
      }
      break
    }
  }
}

export default handler
