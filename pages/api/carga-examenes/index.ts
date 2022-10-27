import axios from 'axios'
import axiosfetchPublic from '../../../config/axios'

const API = {
  listCoursesByTeacher: async (UserID: any) => {
    const URL = `/carga-examenes/list/${UserID}`
    const result: any = await axiosfetchPublic(URL)
    return result.data
  },
  listLoadedExams: async (codeTeacher: any, classCode: any) => {
    const URL = `/carga-examenes/loadedExams/${codeTeacher}/${classCode}`
    const result: any = await axiosfetchPublic(URL)
    return result.data
  },
  listClassNote: async (classCode: any) => {
    const URL = `/carga-examenes/ClassNote/${classCode}`
    const result: any = await axiosfetchPublic(URL)
    return result.data
  },
  listSemester: async (classCode: any) => {
    const URL = `/carga-examenes/Semester/${classCode}`
    const result: any = await axiosfetchPublic(URL)
    return result.data
  },
  listAmountStudents: async (semesterId: any, noteId: any, ClassCode: any) => {
    const URL = `/carga-examenes/AmountStudents/${semesterId}/${noteId}/${ClassCode}`
    const result: any = await axiosfetchPublic(URL)
    return result.data
  },
  listControlNotes: async (
    semesterCode: any,
    notaCode: any,
    classCode: any
  ) => {
    const URL = `/carga-examenes/ControlNotes/${semesterCode}/${notaCode}/${classCode}`
    const result: any = await axiosfetchPublic(URL)
    return result.data
  },
  listStateExams: async (codeTeacher: any, noteId: any, ClassCode: any) => {
    const URL = `/carga-examenes/StateExams/${codeTeacher}/${noteId}/${ClassCode}`
    const result: any = await axiosfetchPublic(URL)
    return result.data
  },
  listActiveExam: async (codeTeacher: any, noteId: any, ClassCode: any) => {
    const URL = `/carga-examenes/ActiveExam/${codeTeacher}/${noteId}/${ClassCode}`
    const result: any = await axiosfetchPublic(URL)
    return result.data
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
      console.log(error)
    }
  },
}

export default API
