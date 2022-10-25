import { axiosfetchPrivate, axiosfetchPrivateUpload } from '../../../config/axios'
import type { NextApiRequest, NextApiResponse } from 'next'
import { apiPath } from '../../../consts/path'

type Data = {}

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    const { params } = req.query
  
    switch(params[0]){
      case 'list': {
        try {
          const URL = apiPath.cargaExamenes.PATH_GetTeachersCorses(params[1])
          const { data } = await axiosfetchPrivate(URL)
          const result = data.detail
          res.status(200).json(result)
        } catch (error) {
          console.log(error)
        }
        break
      }
      case 'loadedExams': {
        try {
          const URL = apiPath.cargaExamenes.PATH_GetLoadedExams(params[1],params[2])
          const { data } = await axiosfetchPrivate(URL)
          const result = data.detail
          res.status(200).json(result)
        } catch (error) {
          console.log(error)
        }
        break
      }
      case 'ClassNote': {
        try {
          const URL = apiPath.cargaExamenes.PATH_GetListClassNote(params[1])
          const { data } = await axiosfetchPrivate(URL)
          const result = data.detail
          res.status(200).json(result)
        } catch (error) {
          console.log(error)
        }
        break
      }
      case 'Semester': {
        try {
          const URL = apiPath.cargaExamenes.PATH_GetSemester(params[1])
          const { data } = await axiosfetchPrivate(URL)
          const result = data.detail
          res.status(200).json(result)
        } catch (error) {
          console.log(error)
        }
        break
      }
      case 'AmountStudents': {
        try {
          const URL = apiPath.cargaExamenes.PATH_GetAmountStudents(params[1],params[2],params[3])
          const { data } = await axiosfetchPrivate(URL)
          const result = data.detail
          res.status(200).json(result)
        } catch (error) {
          console.log(error)
        }
        break
      }
      case 'ControlNotes': {
        try {
          const URL = apiPath.cargaExamenes.PATH_GetControlNotes(params[1],params[2],params[3])
          const { data } = await axiosfetchPrivate(URL)
          const result = data.detail
          res.status(200).json(result)
        } catch (error) {
          console.log(error)
        }
        break
      }
      case 'StateExams': {
        try {
          const URL = apiPath.cargaExamenes.PATH_GetStateExams(params[1],params[2],params[3])
          const { data } = await axiosfetchPrivate(URL)
          const result = data.detail
          res.status(200).json(result)
        } catch (error) {
          console.log(error)
        }
        break
      }
      case 'ActiveExam': {
        try {
          const URL = apiPath.cargaExamenes.PATH_GetActiveExam(params[1],params[2],params[3])
          const { data } = await axiosfetchPrivate(URL)
          const result = data.detail
          res.status(200).json(result)
        } catch (error) {
          console.log(error)
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
          const URL_UPLOAD = data.url
          res.status(200).json(URL_UPLOAD)
        } catch (error) {
          console.log(error)
        }
        break
      }
      case 'SaveAdjuntoExam': {
        const item = req.body
        const URL = apiPath.cargaExamenes.PATH_PostTeacherInserExam
        try {
          const { data } = await axiosfetchPrivate.post(URL, item)
          const result = data.detail
          res.status(200).json(result)
        } catch (error) {
          console.log(error)
        }
        break
      }
    }    
  }
  
  export default handler