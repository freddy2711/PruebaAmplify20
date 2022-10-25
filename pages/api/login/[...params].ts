import { axiosfetchPrivate } from '../../../config/axios'
import type { NextApiRequest, NextApiResponse } from 'next'
import { apiPath } from '../../../consts/path'
import axios from 'axios'

type Data = {}

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { params } = req.query

  switch (params[0]) {
    case 'session': {
      const URL = apiPath.home.PATH_GetScheduleSession(params[1], params[2])
      try {
        const { data } = await axiosfetchPrivate(URL)
        const result = data.detail
        if (result !== undefined) {
          res.status(200).json(result)
        } else {
          res.status(500).json({ error: 'failed to load data' })
        }
      } catch (error) {
        res.status(500).json({ error })
      }
      break
    }
    case 'requeperation': {
      const URL = apiPath.home.PATH_GetScheduleRequeperation(
        params[1],
        params[2]
      )
      try {
        const { data } = await axiosfetchPrivate(URL)
        const result = data.detail
        if (result !== undefined) {
          res.status(200).json(result)
        } else {
          res.status(500).json({ error: 'failed to load data' })
        }
      } catch (error) {
        res.status(500).json({ error })
      }
      break
    }
    case 'competence': {
      const URL = `${apiPath.home.PATH_GetPendingTeachingCompetence}${params[1]}`
      try {
        const { data } = await axiosfetchPrivate(URL)
        const result = data.detail
        if (result !== undefined) {
          res.status(200).json(result)
        } else {
          res.status(500).json({ error: 'failed to load data' })
        }
      } catch (error) {
        res.status(500).json({ error })
      }
      break
    }
    case 'usuario': {
      const URL = `${apiPath.home.PATH_GetDatosUsuario}${params[1]}`
      try {
        const { data } = await axiosfetchPrivate(URL)
        const result = data.detail
        if (result !== undefined) {
          res.status(200).json(result)
        } else {
          res.status(500).json({ error: 'failed to load data' })
        }
      } catch (error) {
        res.status(500).json({ error })
      }
      break
    }
    case 'coupling': {
      const URL = apiPath.home.PATH_GetCouplingSession(params[1])
      try {
        const { data } = await axiosfetchPrivate(URL)
        const result = data.detail
        if (result !== undefined) {
          res.status(200).json(result)
        } else {
          res.status(500).json({ error: 'failed to load data' })
        }
      } catch (error) {
        res.status(500).json({ error })
      }
      break
    }
    case 'valida': {
      const URL = apiPath.home.PATH_GetValidaData(params[1])
      try {
        const { data } = await axiosfetchPrivate(URL)
        const result = data.detail
        if (result !== undefined) {
          res.status(200).json(result)
        } else {
          res.status(500).json({ error: 'failed to load data' })
        }
      } catch (error) {
        res.status(500).json({ error })
      }
      break
    }
    case 'token': {
      const config = {
        withCredentials: true,
        headers: {
          // Cookie:
          //   '_ga=GA1.1.103450739.1658501004; ASP.NET_SessionId=o5ejjass1q3tgz0y2flifxj2; ASPNET_UserId=EA944F081C0E4F555F24D6DC6AF4122E397A223644F9755F526417C008BDABACACC63983C107AA694E96125A192C361BA5599668A113608C331B6B2AC691DD77EFE94AC6CF40F1884F6A12EF5D0941B3D22934DC5F96C863A1F96AB73682BE4919EF88D9C2966B9CD665DF5761F2B1F8EC584D33EE6BC57B582F4C7AC6364C791713BAEDDE049E1D1F98D5025F2D8D7E;',
          // Cookie: params[1],
        },
      }
      const URL: any = process.env.NEXT_PUBLIC_TOKEN_API
      try {
        const { data } = await axios(URL, config)
        console.log('Cookie', JSON.stringify(params[1]))
        const result = data.detail
        console.log('result', data)

        if (result !== undefined) {
          res.status(200).json(result)
        } else {
          res.status(500).json({ error: 'failed to load data' })
        }
      } catch (error) {
        res.status(500).json({ error })
      }
      break
    }
    case 'put': {
      const Request = req.body
      const URL = apiPath.home.PATH_PutLog
      try {
        const { data } = await axiosfetchPrivate.put(URL, Request)
        const result = data.detail
        if (result !== undefined) {
          res.status(200).json(result)
        } else {
          res.status(500).json({ error: 'failed to load data' })
        }
      } catch (error) {
        res.status(500).json({ error })
      }
      break
    }
  }
}

export default handler
