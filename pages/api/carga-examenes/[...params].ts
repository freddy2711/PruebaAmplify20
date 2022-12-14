/* eslint-disable */
import { axiosCreate, axiosfetchPrivateUpload } from '../../../config/axios'
import type { NextApiRequest, NextApiResponse } from 'next'
import { apiPath } from '../../../consts/path'
import { AxiosInstance } from 'axios'
import { objecApi } from '../../../consts/storageConst'
import { genError } from '../../../helpers/helpers'

type Data = {}
const ClassShedule = objecApi.ClassShedule
const Teacher = objecApi.Teacher
const Note = objecApi.Note

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { params }: any = req.query

  switch (params[0]) {
    case 'list': {
      try {
        const apiCall: AxiosInstance = axiosCreate(ClassShedule)
        const URL = apiPath.cargaExamenes.PATH_GetTeachersCorses(params[1])
        const { data } = await apiCall(URL)
        const result = data?.detail
        res.status(200).json(result)
      } catch (error) {
        genError(res, error, 'CE001')
      }
      break
    }
    case 'loadedExams': {
      try {
        const apiCall: AxiosInstance = axiosCreate(Teacher)
        const URL = apiPath.cargaExamenes.PATH_GetLoadedExams(
          params[1],
          params[2]
        )
        const { data } = await apiCall(URL)
        const result = data?.detail
        res.status(200).json(result)
      } catch (error) {
        genError(res, error, 'CE002')
      }
      break
    }
    case 'ClassNote': {
      try {
        const apiCall: AxiosInstance = axiosCreate(Note)
        const URL = apiPath.cargaExamenes.PATH_GetListClassNote(params[1])
        const { data } = await apiCall(URL)
        const result = data?.detail
        res.status(200).json(result)
      } catch (error) {
        genError(res, error, 'CE003')
      }
      break
    }
    case 'Semester': {
      try {
        const apiCall: AxiosInstance = axiosCreate(Note)
        const URL = apiPath.cargaExamenes.PATH_GetSemester(params[1])
        const { data } = await apiCall(URL)
        const result = data?.detail
        res.status(200).json(result)
      } catch (error) {
        genError(res, error, 'CE004')
      }
      break
    }
    case 'AmountStudents': {
      try {
        const apiCall: AxiosInstance = axiosCreate(Teacher)
        const URL = apiPath.cargaExamenes.PATH_GetAmountStudents(
          params[1],
          params[2],
          params[3]
        )
        const { data } = await apiCall(URL)
        const result = data?.detail
        res.status(200).json(result)
      } catch (error) {
        genError(res, error, 'CE005')
      }
      break
    }
    case 'ControlNotes': {
      try {
        const apiCall: AxiosInstance = axiosCreate(Note)
        const URL = apiPath.cargaExamenes.PATH_GetControlNotes(
          params[1],
          params[2],
          params[3]
        )
        const { data } = await apiCall(URL)
        const result = data?.detail
        res.status(200).json(result)
      } catch (error) {
        genError(res, error, 'CE006')
      }
      break
    }
    case 'StateExams': {
      try {
        const apiCall: AxiosInstance = axiosCreate(Teacher)
        const URL = apiPath.cargaExamenes.PATH_GetStateExams(
          params[1],
          params[2],
          params[3]
        )
        const { data } = await apiCall(URL)
        const result = data?.detail
        res.status(200).json(result)
      } catch (error) {
        genError(res, error, 'CE007')
      }
      break
    }
    case 'ActiveExam': {
      try {
        const apiCall: AxiosInstance = axiosCreate(Teacher)
        const URL = apiPath.cargaExamenes.PATH_GetActiveExam(
          params[1],
          params[2],
          params[3]
        )
        const { data } = await apiCall(URL)
        const result = data?.detail
        res.status(200).json(result)
      } catch (error) {
        genError(res, error, 'CE008')
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
        const URL_UPLOAD = data?.url
        res.status(200).json(URL_UPLOAD)
      } catch (error) {
        genError(res, error, 'CE009')
      }
      break
    }
    case 'SaveAdjuntoExam': {
      const apiCall: AxiosInstance = axiosCreate(Teacher)
      const item = req.body
      const URL = apiPath.cargaExamenes.PATH_PostTeacherInserExam
      try {
        const { data } = await apiCall.post(URL, item)
        const result = data?.detail
        res.status(200).json(result)
      } catch (error) {
        genError(res, error, 'CE010')
      }
      break
    }
  }
}

export default handler
