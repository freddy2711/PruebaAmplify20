// import { axiosfetchPrivate } from '../../../config/axios'
import type { NextApiRequest, NextApiResponse } from 'next'
type Data = {}

export const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  /*   const { params }: any = req.query

  console.log(params)

  const teacher = params[0]
  const date = params[1]

  const result = await axiosfetchPrivate(
    `/ClassSchedule/GetSessionTeacherByDay/${teacher}/${date}`
  )

  res.json(result.data) */
}
