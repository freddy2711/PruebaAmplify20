import axios from 'axios'
import axiosfetchPublic from '../../../config/axios'
import { ErrorMessageClient } from '../../../consts/storageConst'

const API = {
  ScheduleSession: async (codeTeacher: string, day: any) => {
    try {
      const URL = `/login/session/${codeTeacher}/${day}`
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
  ScheduleRequeperation: async (codeTeacher: string, day: any) => {
    try {
      const URL = `/login/requeperation/${codeTeacher}/${day}`
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
  PendingTeachingCompetence: async (codeTeacher: string) => {
    try {
      const URL = `/login/competence/${codeTeacher}`
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
  DatosUsuario: async (codeTeacher: string) => {
    try {
      const URL = `/login/usuario/${codeTeacher}`
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
  TokenCoupling: async (codeTeacher: string) => {
    try {
      const URL = `/login/coupling/${codeTeacher}`
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
  loginDataUser: async (codeTeacher: string) => {
    try {
      const URL = `/login/valida/${codeTeacher}`
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
  logintokenValid: async () => {
    try {
      const config = {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache'
        }
      }
      const URL: any = process.env.NEXT_PUBLIC_TOKEN_API_INTERNAL
      const result: any = await axios(URL, config)
      if (result.status !== 200) {
        console.log('status', result?.status)
      }
      return result.data.detail
    } catch (err) {
      const error = await ErrorMessageClient(err, false)
      return { error }
    }
  },
  PutLog: async (obj: any) => {
    try {
      const URL = `/login/put`
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
}

export default API
