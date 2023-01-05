import { axiosCreate, axiosfetchPrivateUpload } from '../../../config/axios'
// import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'
import { apiPath } from '../../../consts/path'
import { objecApi } from '../../../consts/storageConst'
import { AxiosInstance } from 'axios'
import { genError } from '../../../helpers/helpers'
// import multiparty from 'multiparty'
// import formidable from 'formidable'
// import fs from 'fs'

type Data = {}

const { Competence, ClassShedule, Note, Utility } = objecApi

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { params }: any = req.query

  switch (params[0]) {
    case 'list': {
      const URL = apiPath.competence.PATH_List(params[1])
      try {
        const apiCall: AxiosInstance = axiosCreate(ClassShedule)
        const { data } = await apiCall(URL)
        const result = data.detail
        res.status(200).json(result)
      } catch (error) {
        genError(res, error, 'EC001')
      }
      break
    }
    case 'comp_by_class': {
      const URL = apiPath.competence.PATH_Competence_by_class(params[1])
      try {
        const apiCall: AxiosInstance = axiosCreate(Competence)
        const { data } = await apiCall(URL)
        const result = data.detail
        res.status(200).json(result)
      } catch (error) {
        genError(res, error, 'EC002')
      }
      break
    }
    case 'competencePlanilla': {
      const URL = apiPath.competence.PATH_CompetencePlanilla(
        params[1],
        params[2]
      )
      try {
        const apiCall: AxiosInstance = axiosCreate(Competence)
        const { data } = await apiCall(URL)
        const result = data.detail
        res.status(200).json(result)
      } catch (error) {
        genError(res, error, 'EC003')
      }
      break
    }
    case 'conductasList': {
      const URL = apiPath.competence.PATH_conductasList(params[1])
      try {
        const apiCall: AxiosInstance = axiosCreate(Competence)
        const { data } = await apiCall(URL)
        const result = data.detail
        res.status(200).json(result)
      } catch (error) {
        genError(res, error, 'EC004')
      }
      break
    }
    case 'listTipo': {
      const URL = apiPath.competence.PATH_listTipo(params[1])
      try {
        const apiCall: AxiosInstance = axiosCreate(Note)
        const { data } = await apiCall(URL)
        const result = data.detail
        res.status(200).json(result)
      } catch (error) {
        genError(res, error, 'EC005')
      }
      break
    }
    case 'guardarConducta': {
      // PATH_saveConduct
      const URL = apiPath.competence.PATH_saveConduct
      const obj = {
        CompetenceAtachmentId: params[1],
        conductId: params[2],
      }
      try {
        const apiCall: AxiosInstance = axiosCreate(Competence)
        const { data } = await apiCall.post(URL, obj)
        const result = data.detail
        console.log(data)
        res.status(200).json(result)
      } catch (error) {
        genError(res, error, 'EC006')
      }
      break
    }
    case 'guardarAdjunto': {
      const item = req.body
      const URL = apiPath.competence.PATH_saveAdjunto
      try {
        const apiCall: AxiosInstance = axiosCreate(Competence)
        const { data } = await apiCall.post(URL, item)
        const result = data.detail
        res.status(200).json(result)
      } catch (error) {
        genError(res, error, 'EC007')
      }
      break
    }
    case 'upload': {
      const item = req.body

      const { name, usuario, type } = item

      const fileObj = {
        idtramite: '001',
        usuario,
        TypeArchivo: type,
        fileName: name,
        secretName: process.env.SECRET_UPLOAD,
        path: process.env.PATH_UPLOAD,
      }

      const URL = apiPath.competence.PATH_upload

      try {
        const { data } = await axiosfetchPrivateUpload.post(URL, fileObj)
        console.log(data)

        const URL_UPLOAD = data.url
        res.status(200).json(URL_UPLOAD)
      } catch (error) {
        genError(res, error, 'EC008')
      }
      break
    }
    case 'listAdjunto': {
      // PATH_listAdjunto
      const URL = apiPath.competence.PATH_listAdjunto(params[1], params[2])
      try {
        const apiCall: AxiosInstance = axiosCreate(Competence)
        const { data } = await apiCall(URL)
        const result = data.detail
        res.status(200).json(result)
      } catch (error) {
        genError(res, error, 'EC009')
      }
      break
    }
    case 'AttachConducts': {
      // PATH_listAdjunto
      const URL = apiPath.competence.PATH_AttachConducts(params[1])
      try {
        const apiCall: AxiosInstance = axiosCreate(Competence)
        const { data } = await apiCall(URL)
        const result = data.detail
        res.status(200).json(result)
      } catch (error) {
        genError(res, error, 'EC010')
      }
      break
    }
    case 'listCompetences': {
      const URL = apiPath.competence.PATH_listCompetences(
        params[1],
        params[2],
        params[3],
        params[4],
        params[5]
      )
      try {
        const apiCall: AxiosInstance = axiosCreate(Competence)
        const { data } = await apiCall(URL)
        const result = data.detail
        res.status(200).json(result)
      } catch (error) {
        genError(res, error, 'EC011')
      }
      break
    }
    case 'getEscalaCompetencia': {
      const URL = apiPath.competence.PATH_generalEscala(params[1])
      console.log('URL', URL)
      try {
        const apiCall: AxiosInstance = axiosCreate(Competence)
        const { data } = await apiCall(URL)
        const result = data.detail
        res.status(200).json(result)
      } catch (error) {
        genError(res, error, 'EC012')
      }
      break
    }
    case 'retro': {
      const URL = apiPath.competence.PATH_alumCompeLog(params[1])
      try {
        const apiCall: AxiosInstance = axiosCreate(Competence)
        const { data } = await apiCall(URL)
        const result = data.detail
        res.status(200).json(result)
      } catch (error) {
        genError(res, error, 'EC013')
      }
      break
    }
    case 'registerNotesCompetence': {
      const item = req.body
      const URL = apiPath.competence.PATH_RegisterNotesCompetence
      try {
        const apiCall: AxiosInstance = axiosCreate(Note)
        const { data } = await apiCall.post(URL, item)
        console.log(data)
        const result = data.detail
        res.status(200).json(result)
      } catch (error) {
        genError(res, error, 'EC014')
      }
      break
    }
    case 'download': {
      const item = req.body

      const { name } = item

      const URL = apiPath.competence.PATH_Download

      const fileObj = {
        rutaUrl: `${process.env.PATH_DOWNLOAD}${name}`,
      }

      try {
        const apiCall: AxiosInstance = axiosCreate(Utility)
        const { data } = await apiCall.post(URL, fileObj)
        const result = data.detail
        res.status(200).json(result)
      } catch (error) {
        genError(res, error, 'EC015')
      }
      break
    }
    case 'deletes': {
      const URL = apiPath.competence.PATH_Delete
      try {
        const obj = {
          competenceId: params[1],
        }

        const apiCall: AxiosInstance = axiosCreate(Competence)
        const { data } = await apiCall.put(URL, obj)
        const result = data.detail

        res.status(200).json(result)
      } catch (error) {
        genError(res, error, 'EC016')
      }
      break
    }
  }
}

export default handler
