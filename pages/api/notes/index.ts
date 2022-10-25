import axiosfetchPublic from '../../../config/axios'
import { ErrorMessageClient } from '../../../consts/storageConst'

const API = {
  notesExist: async (classCode: string) => {
    try {
      const URL = `/notes/exist/${classCode}`
      const result: any = await axiosfetchPublic(URL)
      if (result.status === true) {
        console.log('status', result?.status)
      }
      return result.data
    } catch (err) {
      const error = await ErrorMessageClient(err, false)
      return { error }
    }
  },
  notesClass: async (classCode: string) => {
    try {
      const URL = `/notes/class/${classCode}`
      const result: any = await axiosfetchPublic(URL)
      if (result.status === true) {
        console.log('status', result?.status)
      }
      return result.data
    } catch (err) {
      const error = await ErrorMessageClient(err, false)
      return { error }
    }
  },
  notesState: async (classCode: string) => {
    try {
      const URL = `/notes/state/${classCode}`
      const result: any = await axiosfetchPublic(URL)
      if (result.status === true) {
        console.log('status', result?.status)
      }
      return result.data
    } catch (err) {
      const error = await ErrorMessageClient(err, false)
      return { error }
    }
  },
  notesStudent: async (obj: any) => {
    try {
      const URL = `/notes/student/${obj.classCode}/${obj.classEstate}`
      const result: any = await axiosfetchPublic(URL)
      if (result.status === true) {
        console.log('status', result?.status)
      }
      return result.data
    } catch (err) {
      const error = await ErrorMessageClient(err, false)
      return { error }
    }
  },
  notesValidate: async (obj: any) => {
    try {
      const URL = `/notes/validate/${obj.ip}/${obj.user}`
      const result: any = await axiosfetchPublic(URL)
      if (result.status === true) {
        console.log('status', result?.status)
      }
      return result.data
    } catch (err) {
      const error = await ErrorMessageClient(err, false)
      return { error }
    }
  },
  notesControl: async (obj: any) => {
    try {
      const URL = `/notes/control/${obj.semester}/${obj.note}/${obj.class}`
      const result: any = await axiosfetchPublic(URL)
      if (result.status === true) {
        console.log('status', result?.status)
      }
      return result.data
    } catch (err) {
      const error = await ErrorMessageClient(err, false)
      return { error }
    }
  },
  notesEmail: async (codeUser: string) => {
    try {
      const URL = `/notes/email/${codeUser}`
      const result: any = await axiosfetchPublic(URL)
      if (result.status === true) {
        console.log('status', result?.status)
      }
      return result.data
    } catch (err) {
      const error = await ErrorMessageClient(err, false)
      return { error }
    }
  },
  notesSemesterControler: async (obj: any) => {
    try {
      const URL = `/notes/semesterControl/${obj.semesterCode}/${obj.notaCode}/${obj.classCode}`
      const result: any = await axiosfetchPublic(URL)
      if (result.status === true) {
        console.log('status', result?.status)
      }
      return result.data
    } catch (err) {
      const error = await ErrorMessageClient(err, false)
      return { error }
    }
  },
  notesSemester: async (classCode: any) => {
    try {
      const URL = `/notes/semester/${classCode}`
      const result: any = await axiosfetchPublic(URL)
      if (result.status === true) {
        console.log('status', result?.status)
      }
      return result.data
    } catch (err) {
      const error = await ErrorMessageClient(err, false)
      return { error }
    }
  },
  ByNotesSendClass: async (userCode: any) => {
    try {
      const URL = `/notes/send/${userCode}`
      const result: any = await axiosfetchPublic(URL)
      if (result.status === true) {
        console.log('status', result?.status)
      }
      return result.data
    } catch (err) {
      const error = await ErrorMessageClient(err, false)
      return { error }
    }
  },
  notesClassGroup: async (obj: any) => {
    try {
      const URL = `/notes/classGroup`
      const result: any = await axiosfetchPublic.post(URL, obj)
      if (result.status === true) {
        console.log('status', result?.status)
      }
      return result.data
    } catch (err) {
      const error = await ErrorMessageClient(err, false)
      return { error }
    }
  },
  notesDetail: async (obj: any) => {
    try {
      const URL = `/notes/detail/${obj.classCode}/${obj.codeUser}`
      const result: any = await axiosfetchPublic(URL)
      if (result.status === true) {
        console.log('status', result?.status)
      }
      return result.data
    } catch (err) {
      const error = await ErrorMessageClient(err, false)
      return { error }
    }
  },
  notesAverage: async (classCode: any) => {
    try {
      const URL = `/notes/average/${classCode}`
      const result: any = await axiosfetchPublic(URL)
      if (result.status === true) {
        console.log('status', result?.status)
      }
      return result.data
    } catch (err) {
      const error = await ErrorMessageClient(err, false)
      return { error }
    }
  },
  notesPostClassGroup: async (obj: any) => {
    try {
      const URL = `/notes/postclassGroup`
      const result: any = await axiosfetchPublic.post(URL, obj)
      if (result.status === true) {
        console.log('status', result?.status)
      }
      return result.data
    } catch (err) {
      const error = await ErrorMessageClient(err, false)
      return { error }
    }
  },
  notespostState: async (obj: any) => {
    try {
      const URL = `/notes/postState`
      const result: any = await axiosfetchPublic.post(URL, obj)
      if (result.status === true) {
        console.log('status', result?.status)
      }
      return result.data
    } catch (err) {
      const error = await ErrorMessageClient(err, false)
      return { error }
    }
  },
  notesPutState: async (obj: any) => {
    try {
      const URL = `/notes/putState`
      const result: any = await axiosfetchPublic.put(URL, obj)
      if (result.status === true) {
        console.log('status', result?.status)
      }
      return result.data
    } catch (err) {
      const error = await ErrorMessageClient(err, false)
      return { error }
    }
  },
  notespostUpload: async (obj: any) => {
    try {
      const URL = `/notes/postUpload`
      const result: any = await axiosfetchPublic.post(URL, obj)
      if (result.status === true) {
        console.log('status', result?.status)
      }
      return result.data
    } catch (err) {
      const error = await ErrorMessageClient(err, false)
      return { error }
    }
  },
}
export default API
