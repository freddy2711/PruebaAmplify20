import axiosfetchPublic from '../../../config/axios'

const API = {
  ByTokenlogPut: async (obj: any) => {
    const URL = `/tokens/logPut`
    const result: any = await axiosfetchPublic.put(URL, obj)
    return result.data
  },
  ByTokenlogPost: async (obj: any) => {
    const URL = `/tokens/logPost`
    const result = await axiosfetchPublic.post(URL, obj)
    return result.data
  },
  ByTokenInsertState: async (obj: any) => {
    const URL = `/tokens/state`
    const result: any = await axiosfetchPublic.post(URL, obj)
    return result.data
  },
  ByTokenAutentica: async (obj: any) => {
    const URL = `/tokens/autentica`
    const result: any = await axiosfetchPublic.post(URL, obj)
    return result.data
  },
  ByTokenTecher: async (codeDocente: string) => {
    try {
      const URL = `/tokens/teacher/${codeDocente}`
      const result: any = await axiosfetchPublic(URL)
      if (result?.status === true) {
        console.log('status', result?.status)
      }
      return result.data
    } catch (error) {
      // console.log(error)
    }
  },
  ByTokenCoupling: async (obj: any) => {
    try {
      const URL = `/tokens/coupling/${obj.userCode}/${obj.semesterCode}/${obj.limitState}`
      const result: any = await axiosfetchPublic(URL)
      if (result?.status === true) {
        console.log('status', result?.status)
      }
      return result.data
    } catch (error) {
      // console.log(error)
    }
  },
  ByTokenGoogleValidate: async (obj: any) => {
    const URL = `/tokens/pim`
    const result: any = await axiosfetchPublic.post(URL, obj)
    return result.data
  },
  ByTokenValidate: async (obj: any) => {
    const URL = `/tokens/validate`
    const result: any = await axiosfetchPublic.post(URL, obj)
    return result.data
  },
}

export default API
