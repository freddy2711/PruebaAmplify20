import axiosfetchPublic from '../../../config/axios'

const API = {
  listTokenActive: async (
    userCode: any,
    semesterCode: any,
    limitState: any
  ) => {
    const URL = `/logs-creacion/listTokenActive/${userCode}/${semesterCode}/${limitState}`
    const result: any = await axiosfetchPublic(URL)
    return result.data
  },
  listTokenGenerate: async (userCode: any, semesterCode: any) => {
    const URL = `/logs-creacion/listTokenGenerate/${userCode}/${semesterCode}`
    const result: any = await axiosfetchPublic(URL)
    return result.data
  },
}

export default API
