import axiosfetchPublic from '../../../config/axios'
import { ErrorMessageClient } from '../../../consts/storageConst'

const API = {
  SemesterSustitutory: async (obj: any) => {
    try {
      const URL = `/descanso/sustitutory/${obj.idSemester}/${obj.codeTeacher}`
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
  SemesterTuesday: async (obj: any) => {
    try {
      const URL = `/descanso/tuesday/${obj.idSemester}/${obj.codeTeacher}`
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
  SemesterThursday: async (obj: any) => {
    try {
      const URL = `/descanso/thursday/${obj.idSemester}/${obj.codeTeacher}/${obj.datetramit}`
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
  TeacherBreak: async (codeteacher: string) => {
    // return {
    //   userTeacher: 'rvi',
    //   codeTeacher: 'N00011885',
    //   nameTeacher: 'ROGER VILLAR MORALES',
    //   quantityVirtualClass: 5,
    //   codeSemester: '218533',
    //   idSemester: '381',
    //   startSemester: '2018-08-18',
    //   endSemester: '2018-12-15',
    // }
    try {
      const URL = `/descanso/break/${codeteacher}`
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
  RequestWorker: async (obj: any) => {
    // return [
    //   {
    //     id: '4786',
    //     numberSolicite: '1',
    //     objteacher: 'N00011885',
    //     dateSolicite: '2022-10-04 17:18:17.537',
    //     state: 'Por defecto',
    //     approverName: '',
    //     objapprover: '',
    //     objsemester: '381',
    //   },
    // ]
    try {
      const URL = `/descanso/worker/${obj.idSemester}/${obj.codeTeacher}`
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
  SendEmail: async (codeteacher: string) => {
    try {
      const URL = `/descanso/email/${codeteacher}`
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
  UpdateDateWorker: async (obj: any) => {
    try {
      const URL = `/descanso/update`
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
  SaveTempTableWorkerTeacher: async (obj: any) => {
    try {
      const URL = `/descanso/save`
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
  RegisterRequestsWorkerTeacher: async (obj: any) => {
    try {
      const URL = `/descanso/register`
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
