import { axiosCreate } from '../../../config/axios'
import type { NextApiRequest, NextApiResponse } from 'next'
import { apiPath } from '../../../consts/path'
import { objecApi } from '../../../consts/storageConst'
import { AxiosInstance } from 'axios'
type Data = {}
const ClassShedule = objecApi.ClassShedule

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { params }: any = req.query

  switch (params[0]) {
    case 'shedule': {
      const apiCall: AxiosInstance = axiosCreate(ClassShedule)
      const URL = apiPath.horario.PATH_GetIfTheClassIsOffCampus(
        params[1],
        params[2]
      )
      console.log('URL', URL)
      try {
        const { data } = await apiCall(URL)
        const result = data.detail
        res.status(200).json(result)
      } catch (error) {
        console.log(error)
      }
      break
    }
    // case 'teacher' : {
    //   const Request = req.body
    //   const URL = `/teacher/seccionOpen`
    //   try {
    //     const { data } = await axiosfetchPrivate.post(URL, Request)
    //     const result = data.detail
    //     res.status(200).json(result)
    //   } catch (error) {
    //     console.log(error)
    //   }
    //   break
    // }
  }
}

export default handler
