import axios from 'axios'
import axiosfetchPublic from '../../../config/axios'
import { catchingErrorApi } from '../../../helpers/helpers'

const API = {
  listCoursesByTeacher: async (UserID: any) => {
    try {
      const URL = `/carga-examenes/list/${UserID}`
      const result: any = await axiosfetchPublic(URL)
      return result.data
    } catch (error) {
      catchingErrorApi(error)
    }
  },
  listLoadedExams: async (codeTeacher: any, classCode: any) => {
    try {
      const URL = `/carga-examenes/loadedExams/${codeTeacher}/${classCode}`
      const result: any = await axiosfetchPublic(URL)
      return result.data
    } catch (error) {
      catchingErrorApi(error)
    }
  },
  listClassNote: async (classCode: any) => {
    try {
      const URL = `/carga-examenes/ClassNote/${classCode}`
      const result: any = await axiosfetchPublic(URL)
      return result.data
    } catch (error) {
      catchingErrorApi(error)
    }
  },
  listSemester: async (classCode: any) => {
    try {
      const URL = `/carga-examenes/Semester/${classCode}`
      const result: any = await axiosfetchPublic(URL)
      return result.data
    } catch (error) {
      catchingErrorApi(error)
    }
  },
  listAmountStudents: async (semesterId: any, noteId: any, ClassCode: any) => {
    try {
      const URL = `/carga-examenes/AmountStudents/${semesterId}/${noteId}/${ClassCode}`
      const result: any = await axiosfetchPublic(URL)
      return result.data
    } catch (error) {
      catchingErrorApi(error)
    }
  },
  listControlNotes: async (
    semesterCode: any,
    notaCode: any,
    classCode: any
  ) => {
    try {
      const URL = `/carga-examenes/ControlNotes/${semesterCode}/${notaCode}/${classCode}`
      const result: any = await axiosfetchPublic(URL)
      return result.data
    } catch (error) {
      catchingErrorApi(error)
    }
  },
  listStateExams: async (codeTeacher: any, noteId: any, ClassCode: any) => {
    try {
      const URL = `/carga-examenes/StateExams/${codeTeacher}/${noteId}/${ClassCode}`
      const result: any = await axiosfetchPublic(URL)
      return result.data
    } catch (error) {
      catchingErrorApi(error)
    }
  },
  listActiveExam: async (codeTeacher: any, noteId: any, ClassCode: any) => {
    try {
      const URL = `/carga-examenes/ActiveExam/${codeTeacher}/${noteId}/${ClassCode}`
      const result: any = await axiosfetchPublic(URL)
      return result.data
    } catch (error) {
      catchingErrorApi(error)
    }
  },
  upload: async (item: any) => {
    try {
      const URL = `/carga-examenes/upload/`

      const { data } = await axiosfetchPublic.post(URL, item)

      const resp = await axios.put(data, item.file, {
        headers: {
          'Content-Type': item.type,
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        },
      })

      return resp.status
    } catch (error) {
      console.log(error)
    }
  },
  SaveAdjuntoExam: async (item: any) => {
    try {
      const URL = `/carga-examenes/SaveAdjuntoExam/`
      const result = await axiosfetchPublic.post(URL, item)
      return result.data
    } catch (error) {
      catchingErrorApi(error)
    }
  },
}

export default API
