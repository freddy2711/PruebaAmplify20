// import { axiosfetchPrivate } from '../../../config/axios'
import type { NextApiRequest, NextApiResponse } from 'next'
import { apiPath } from './../../../consts/path'

type Data = {}

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  /* const { params }: any = req.query

  switch (params[0]) {
    case 'open': {
      const URL = apiPath.home.PATH_PostTeacherAttendance(params[1])
      console.log('URL', URL)

      try {
        const { data } = await axiosfetchPrivate(URL)
        const result = data.detail
        res.status(200).json(result)
      } catch (error) {
        console.log(error)
      }
      break
    }
    case 'teacher': {
      const Request = req.body
      const URL = apiPath.home.PATH_PostSeccionOpen
      try {
        const { data } = await axiosfetchPrivate.post(URL, Request)
        const result = data.detail
        res.status(200).json(result)
      } catch (error) {
        console.log(error)
      }
      break
    }
  } */
}

export default handler
