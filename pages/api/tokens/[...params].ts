import { axiosCreate } from '../../../config/axios'
import type { NextApiRequest, NextApiResponse } from 'next'
import { apiPath } from '../../../consts/path'
import { objecApi } from '../../../consts/storageConst'
import { AxiosInstance } from 'axios'
type Data = {}
const Token = objecApi.Token

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { params }: any = req.query

  switch (params[0]) {
    case 'control': {
      const apiCall: AxiosInstance = axiosCreate(Token)
      const URL = `${apiPath.register.PATH_GetControlClass}${params[1]}/${params[2]}`
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
    case 'teacher': {
      const apiCall: AxiosInstance = axiosCreate(Token)
      const URL = apiPath.tokens.PATH_PostTokenTeacher(params[1])

      try {
        const { data } = await apiCall(URL)
        const result = data.detail
        res.status(200).json(result)
      } catch (error) {
        console.log(error)
      }
      break
    }
    case 'coupling': {
      const apiCall: AxiosInstance = axiosCreate(Token)
      const URL = apiPath.tokens.PATH_PostTokenCoupling(
        params[1],
        params[2],
        params[3]
      )

      try {
        const { data } = await apiCall(URL)
        const result = data.detail
        res.status(200).json(result)
      } catch (error) {
        console.log(error)
      }
      break
    }
    case 'logPut': {
      const apiCall: AxiosInstance = axiosCreate(Token)
      const Request = req.body
      const URL = apiPath.home.PATH_PutLog
      try {
        const { data } = await apiCall.put(URL, Request)
        const result = data.detail
        res.status(200).json(result)
      } catch (error) {
        console.log(error)
      }
      break
    }
    case 'pim': {
      const apiCall: AxiosInstance = axiosCreate(Token)
      const Request = req.body
      const URL = apiPath.tokens.PATH_PostTokenValidateToken
      console.log("PATH_PostTokenValidateToken", URL);
      try {
        const { data } = await apiCall.post(URL, Request)
        const result = data.detail
        res.status(200).json(result)
      } catch (error) {
        console.log(error)
      }
      break
    }
    case 'logPost': {
      const apiCall: AxiosInstance = axiosCreate(Token)
      const Request = req.body
      const URL = apiPath.tokens.PATH_PostTokenLog
      try {
        const { data } = await apiCall.post(URL, Request)
        const result = data.detail
        res.status(200).json(result)
      } catch (error) {
        console.log(error)
      }
      break
    }
    case 'state': {
      const apiCall: AxiosInstance = axiosCreate(Token)
      const Request = req.body
      const URL = apiPath.tokens.PATH_PostTokenState
      try {
        const { data } = await apiCall.post(URL, Request)
        const result = data.detail
        res.status(200).json(result)
      } catch (error) {
        console.log(error)
      }
      break
    }
    case 'autentica': {
      const apiCall: AxiosInstance = axiosCreate(Token)
      const Request = req.body
      const URL = apiPath.tokens.PATH_PostTokenAutentication
      try {
        const { data } = await apiCall.post(URL, Request)
        const result = data.detail
        res.status(200).json(result)
      } catch (error) {
        console.log(error)
      }
      break
    }
    case 'validate': {
      const apiCall: AxiosInstance = axiosCreate(Token)
      const Request = req.body
      const URL = apiPath.tokens.PATH_PostTokenValidateState
      try {
        const { data } = await apiCall.post(URL, Request)
        const result = data.detail
        res.status(200).json(result)
      } catch (error) {
        console.log(error)
      }
      break
    }
    // case 'delete' : {
    //   const { classCode, xmlData } = req.body
    //   const URL = `/ClassSchedule/PostRegisterDelegate`
    //   try {
    //     const { data } = await apiCall.post(URL, { classCode, xmlData })
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
