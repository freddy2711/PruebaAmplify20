import axiosfetchPublic from '../../../config/axios'

const API = {
  teachingTime: async (obj: any) => {
    try {
      const URL = `/horario/shedule/${obj.teacherCode}/${obj.isEpec}`
      const result: any = await axiosfetchPublic(URL)
      if (result?.status === true) {
        console.log('status', result?.status)
      }
      return result.data
    } catch (error) {
      // console.log(error)
    }
  }
}

export default API
