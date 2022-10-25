import { axiosfetchPrivate, axiosfetchPrivateEmail, axiosfetchPrivateUpload } from '../../../config/axios'
import type { NextApiRequest, NextApiResponse } from 'next'
import { apiPath } from './../../../consts/path'

type Data = {}

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { params }:any = req.query

  console.log('PARAMS_',params)

  switch (params[0]) { 
		case 'fileAsesor' : {
			const URL = apiPath.soporteVirtual.PATH_GETFILE(params[1],params[2])
			try {
				const { data } = await axiosfetchPrivate(URL)
        console.log('response', data)
        res.status(200).json(data.detail)
			} catch (error) {
				console.log(error)
			}
			break
		}
		case 'tipocse' : {
			const URL = apiPath.soporteVirtual.PATH_tipos(params[1],params[2])
			try {
				const { data } = await axiosfetchPrivate(URL)
        console.log('response', data)
        res.status(200).json(data.detail)
			} catch (error) {
				console.log(error)
			}
			break
		}
		case 'insertConsulta' : {
			const item = req.body
			const URL = apiPath.soporteVirtual.PATH_INSERT
			console.log('LOG_INSERT_ITEM__',item)

			try {
				const { data } = await axiosfetchPrivate.post(URL, item)
        console.log('response', data)
        res.status(200).json(data.detail)
			} catch (error) {
				console.log(error)
			}
			break
		}
		case 'consulta' : {
			const URL = apiPath.soporteVirtual.PATH_docenteConsulta(params[1])
			try {
				const { data } = await axiosfetchPrivate(URL)
        console.log('response', data)
        res.status(200).json(data.detail)
			} catch (error) {
				console.log(error)
			}
			break
		}
		case 'apiAnexos' : {
			const URL = apiPath.soporteVirtual.PATH_GETANEXOS(params[1],params[2])
			try {
				const { data } = await axiosfetchPrivate(URL)
        console.log('historyAnexos', data)
        res.status(200).json(data.detail)
			} catch (error) {
				console.log(error)
			}
			break
		}
		case 'docenteConsulta' : {
			const URL = apiPath.soporteVirtual.PATH_HISTORY(params[1],params[2])
			try {
				const { data } = await axiosfetchPrivate(URL)
        console.log('response', data)
        res.status(200).json(data.detail)
			} catch (error) {
				console.log(error)
			}
			break
		}
		case 'requestConsulta' : {
			const item = req.body
			const URL = apiPath.soporteVirtual.PATH_REQUEST
			console.log('ITEEEEM____PARAMS_REQS',item)
			try {
				const { data } = await axiosfetchPrivate.post(URL, item)
        console.log('response', data)
        res.status(200).json(data.detail)
			} catch (error) {
				console.log(error)
			}
			break
		}
		case 'email': {
      const emailJson = req.body
			console.log(req.body)
      try {
        const resp = await axiosfetchPrivateEmail.post(`/`, emailJson)

        console.log(resp.data.Status)

        res.status(200).json(resp.data.Status)
      } catch (error) {
        console.log(error)
      }

      break
    }
		case 'upload': {
      const item = req.body

      const { nameS3, usuario, type, tipo } = item
			console.log('tipo_', type)
      const fileObj = {
        idtramite: '0',
        usuario,
        TypeArchivo: type,
        fileName: `${nameS3}.${tipo}`,
        secretName: process.env.SECRET_UPLOAD_SV,
        path: process.env.PATH_UPLOAD_SV,
      }

      const URL = apiPath.competence.PATH_upload

      try {
        const { data } = await axiosfetchPrivateUpload.post(URL, fileObj)
        console.log(data)

        const URL_UPLOAD = data.url

        console.log('UPLOAD_URL', URL_UPLOAD)

        res.status(200).json(URL_UPLOAD)
      } catch (error) {
        console.log(error)
      }
      break
    }
		case 'download': {
			const item = req.body
			const URL = apiPath.soporteVirtual.PATH_download
			try {
        const resp = await axiosfetchPrivateUpload.post(URL, item)
        console.log(resp.data)
        res.status(200).json(resp.data)
      } catch (error) {
        console.log(error)
      }
			break
		}
		case 'insertImg': {
			const item = req.body
			const URL = apiPath.soporteVirtual.PATH_INSERT_IMG
			try {
        const resp = await axiosfetchPrivate.post(URL, item)
        console.log(resp.data)
        res.status(200).json(resp.data)
      } catch (error) {
        console.log(error)
      }
			break
		}
		case 'cleanAnexo': {
			const item = req.body
			const URL = apiPath.soporteVirtual.PATH_CLEAN
			try {
        const resp = await axiosfetchPrivate.post(URL, item)
        console.log(resp.data)
        res.status(200).json(resp.data)
      } catch (error) {
        console.log(error)
      }
			break
		}
		case 'deleteImgAws': {
			const item = req.body
			const URL = apiPath.soporteVirtual.PATH_DELETE_AWS
			try {
        const resp = await axiosfetchPrivate.post(URL, item)
        console.log(resp.data)
        res.status(200).json(resp.data)
      } catch (error) {
        console.log(error)
      }
			break
		}
	}
}

export default handler
