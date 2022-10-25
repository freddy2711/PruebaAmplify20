import axiosfetchPublic from '../../../config/axios'
import axios from 'axios'

const API:any = {
	fileAsesor: async (studentCode: string, assesor: string) => {
    try {  
			const URL = `/soporte-virtual/fileAsesor/${studentCode}/${assesor}`
			const result = await axiosfetchPublic(URL)
      return result
    } catch (error) {
      console.log(error)
    }
	},
	tipocse: async (type: string, action: string) => {
    try {  
			const URL = `/soporte-virtual/tipocse/${type}/${action}`
			const result = await axiosfetchPublic(URL)
      return result
    } catch (error) {
      console.log(error)
    }
	},
	insertConsulta: async (item: any) => {
    try {  
			const URL = `/soporte-virtual/insertConsulta`
			const result = await axiosfetchPublic.post(URL, item)
      return result
    } catch (error) {
      console.log(error)
    }
	},
	consulta: async (teacherCode: string) => {
    try {  
			const URL = `/soporte-virtual/consulta/${teacherCode}`
			const result = await axiosfetchPublic(URL)
      return result
    } catch (error) {
      console.log(error)
    }
	},
	apiAnexos: async (teacherCode: string, studentCode: string) => {
    try {  
			const URL = `/soporte-virtual/apiAnexos/${teacherCode}/${studentCode}`
			const result = await axiosfetchPublic(URL)
      return result
    } catch (error) {
      console.log(error)
    }
	},
	docenteConsulta: async (teacherCode: string, idQuery: string) => {
    try {  
			const URL = `/soporte-virtual/docenteConsulta/${teacherCode}/${idQuery}`
			const result = await axiosfetchPublic(URL)
      return result
    } catch (error) {
      console.log(error)
    }
	},
	requestConsulta: async (teacherCode: string, query: string, idQuery: string,) => {
    try {  
			const obj = {
					teacherCode,
					query: JSON.stringify(query),
					idQuery 
			}

			const URL = `/soporte-virtual/requestConsulta`
			const result = await axiosfetchPublic.post(URL, obj)

			console.log('requestConsulta_', result)
      return result
    } catch (error) {
      console.log(error)
    }
	},
	email: async (emailJson: any) => {
    const URL = `/soporte-virtual/email`
		try {
			const result = await axiosfetchPublic.post(URL, {emailJson})
			return result
		} catch (error) {
			console.log(error)
		}
  },
	upload: async (item: any) => {
    try {
      console.log('FILEE INDEX_:', item.file)
      const URL = `/soporte-virtual/upload`

      const { data } = await axiosfetchPublic.post(URL, item)

      const resp = await axios.put(data, item.file, {
        headers: {
          'Content-Type': item.type,
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        },
      })
			console.log("RESP_PUT_",resp.status)
      return resp.status
    } catch (error) {
      console.log(error)
    }
  },
	download: async (fileName:string) => {
		try {
			const obj = {
				"secretName": "contacto-upn",
				fileName, 
				"path" :"test"
			}

			const URL = `/soporte-virtual/download`
			const { data } = await axiosfetchPublic.post(URL, obj)
			return data
		} catch (error) {
			console.log(error)
		}
	},
	insertImg: async (aluCode:string, nameAws:string, nameOriginal:string, extend:string, weight:string, adviser:string) => {
		try {
			const obj = {
				aluCode,
				nameAws,
				nameOriginal,
				extend,
				weight,
				adviser
			}

			const URL = `/soporte-virtual/insertImg`
			const { data } = await axiosfetchPublic.post(URL, obj)
			return data.detail
		} catch (error) {
			console.log(error)
		}
	},
	cleanAnexo: async (AluCode:string, nameAws:string, Adviser:string) => {
		try {
			const obj = {
				AluCode,
				nameAws,
				Adviser,
			}

			const URL = `/soporte-virtual/cleanAnexo`
			const { data } = await axiosfetchPublic.post(URL, obj)
			return data.detail
		} catch (error) {
			console.log(error)
		}
	},
	deleteImgAws: async (filename: string) => {
		try {
			const obj = {
				filename
			}
			const URL = `/soporte-virtual/deleteImgAws`
			const { data } = await axiosfetchPublic.post(URL, obj)
			return data.detail
		} catch (error) {
			console.log(error)
		}
	}
}

export default API
