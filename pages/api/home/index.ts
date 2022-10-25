// import { get } from 'local-storage'
import axiosfetchPublic from '../../../config/axios'
import { ErrorMessageClient } from '../../../consts/storageConst'

const API = {
  ByClassShedule: async (classCode: any) => {
    try {
      const URL = `/home/shedule/${classCode}`
      const result: any = await axiosfetchPublic(URL)
      if (result?.status === true) {
        console.log('status', result?.status)
      }
      return result.data
    } catch (err) {
      const error = await ErrorMessageClient(err, false)
      return { error }
      // console.log('error', error)
    }
  },
  ByDocenteBiometrico: async (codeUser: any, state: any) => {
    try {
      const URL = `/home/biometrico/${codeUser}/${state}`
      const result: any = await axiosfetchPublic(URL)
      if (result?.status === true) {
        console.log('status', result?.status)
      }
      return result.data
    } catch (err) {
      const error = await ErrorMessageClient(err, false)
      return { error }
    }
  },
  ByDocenteBiometric: async (parCode: any, classCode: any) => {
    try {
      const URL = `/home/Without/${parCode}/${classCode}`
      const result: any = await axiosfetchPublic(URL)
      if (result?.status === true) {
        console.log('status', result?.status)
      }
      return result.data
    } catch (err) {
      const error = await ErrorMessageClient(err, false)
      return { error }
    }
  },
  ByLogoutWithoutStudent: async (classCode: any, parameter: any) => {
    try {
      const URL = `/home/classCode/${classCode}/${parameter}`
      const result: any = await axiosfetchPublic(URL)
      if (result?.status === true) {
        console.log('status', result?.status)
      }
      return result.data
    } catch (err) {
      const error = await ErrorMessageClient(err, false)
      return { error }
    }
  },
  ByVerificaIP: async (Ip: any, Extension: any) => {
    try {
      const URL = `/home/ip/${Ip}/${Extension}`
      const result: any = await axiosfetchPublic(URL)
      if (result?.status === true) {
        console.log('status', result?.status)
      }
      return result.data
    } catch (err) {
      const error = await ErrorMessageClient(err, false)
      return { error }
    }
  },
  ByVerificaClass: async (codeClass: any) => {
    try {
      const URL = `/home/verficar/${codeClass}`
      const result: any = await axiosfetchPublic(URL)
      if (result?.status === true) {
        console.log('status', result?.status)
      }
      return result.data
    } catch (err) {
      const error = await ErrorMessageClient(err, false)
      return { error }
    }
  },
  BySessionExists: async (Data: string) => {
    try {
      const URL = `/home/exists`
      const result = await axiosfetchPublic.post(URL, Data)
      return result.data
    } catch (err) {
      const error = await ErrorMessageClient(err, false)
      return { error }
    }
  },
  ByClassCheckPerson: async (Data: string) => {
    try {
      const URL = `/home/person`
      const result = await axiosfetchPublic.post(URL, Data)
      return result.data
    } catch (err) {
      const error = await ErrorMessageClient(err, false)
      return { error }
    }
  },
  ByClassCheckPersonTime: async (Data: any) => {
    try {
      const URL = `/home/time`
      const result = await axiosfetchPublic.post(URL, Data)
      return result.data
    } catch (err) {
      const error = await ErrorMessageClient(err, false)
      return { error }
    }
  },
  ByClassCheckSeccion: async (Data: string) => {
    try {
      const URL = `/home/seccion`
      const result = await axiosfetchPublic.post(URL, Data)
      return result.data
    } catch (err) {
      const error = await ErrorMessageClient(err, false)
      return { error }
    }
  },
}

export default API
