import { axiosfetchPrivate } from '../../../config/axios'
import type { NextApiRequest, NextApiResponse } from 'next'
import { apiPath } from '../../../consts/path'

type Data = {}

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { params } = req.query

	switch (params[0]) {
    case 'delegateList': {
      const URL = apiPath.delegado.PATH_delegateList(params[1])
      try {
        const { data } = await axiosfetchPrivate(URL)
        const result = data.detail
        res.status(200).json(result)
      } catch (error) {
        console.log(error)
      }
      break
    }
    case 'list': {
      // const URL = `/TeacherAttendance/Delegate/${params[1]}/class/`
      const URL = apiPath.delegado.Path_Delegate(params[1])
      try {
        const { data } = await axiosfetchPrivate(URL)
        const result = data.detail
        res.status(200).json(result)
      } catch (error) {
        console.log(error)
      }
      break
    }
    case 'create': {
      const { classCode, xmlData } = req.body
      // const URL = `/ClassSchedule/PostRegisterDelegate`
      const URL = apiPath.delegado.Path_PostRegisterDelegate
      try {
        const { data } = await axiosfetchPrivate.post(URL, {
          classCode,
          xmlData,
        })
        const result = data.detail
        res.status(200).json(result)
      } catch (error) {
        console.log(error)
      }
      break
    }
    case 'delete': {
      const { classCode, xmlData } = req.body
      const URL = apiPath.delegado.Path_PostRegisterDelegate
      try {
        const { data } = await axiosfetchPrivate.post(URL, {
          classCode,
          xmlData,
        })
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
