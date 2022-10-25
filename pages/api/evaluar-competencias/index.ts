import axiosfetchPublic from '../../../config/axios'
import axios from 'axios'

const API = {
  list: async (teacherCode: string) => {
    try {
      const URL = `/evaluar-competencias/list/${teacherCode}`
      const result = await axiosfetchPublic(URL)
      return result
    } catch (error) {
      console.log(error)
    }
  },
  comp_by_class: async (classCode: string) => {
    try {
      const URL = `/evaluar-competencias/comp_by_class/${classCode}`
      const result = await axiosfetchPublic(URL)
      return result.data
    } catch (error) {
      console.log(error)
    }
  },
  competencePlanilla: async (classCode: string, competenciaId: string) => {
    try {
      const URL = `/evaluar-competencias/competencePlanilla/${classCode}/${competenciaId}`
      const result = await axiosfetchPublic(URL)
      return result.data
    } catch (error) {
      console.log(error)
    }
  },
  conductasList: async (competenciaId: string) => {
    try {
      const URL = `/evaluar-competencias/conductasList/${competenciaId}`
      const result = await axiosfetchPublic(URL)
      return result.data
    } catch (error) {
      console.log(error)
    }
  },
  listTipo: async (classCode: string) => {
    try {
      const URL = `/evaluar-competencias/listTipo/${classCode}`
      const result = await axiosfetchPublic(URL)
      return result.data
    } catch (error) {
      console.log(error)
    }
  },
  guardarConducta: async (CompetenceAtachmentId: string, conductId: string) => {
    try {
      console.log(
        `AtachmentId: ${CompetenceAtachmentId}, - conductId: ${conductId}`
      )
      const URL = `/evaluar-competencias/guardarConducta/${CompetenceAtachmentId}/${conductId}`
      const result = await axiosfetchPublic(URL)
      return result.data
    } catch (error) {
      console.log(error)
    }
  },
  guardarAdjunto: async (item: any) => {
    console.log('ITEMSAVEEEINDEX___', item)
    try {
      const URL = `/evaluar-competencias/guardarAdjunto/`
      const result = await axiosfetchPublic.post(URL, item)
      console.log('SAVEINDEX__', result)
      return result.data
    } catch (error) {
      console.log(error)
    }
  },
  upload: async (item: any) => {
    try {
      console.log('FILEE INDEX_:', item.file)
      const URL = `/evaluar-competencias/upload/`

      const { data } = await axiosfetchPublic.post(URL, item)

      const resp = await axios.put(data, item.file, {
        headers: {
          'Content-Type': item.type,
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        },
      })

      return resp.status
    } catch (error) {
      console.log(error)
    }
  },
  download: async (item: any) => {
    try {
      const URL = `/evaluar-competencias/download/`
      const resp = await axiosfetchPublic.post(URL, item)

      return resp.data
    } catch (error) {
      console.log(error)
    }
	},
	deletes: async (competenciaId: string) => {
    try {
			const URL = `/evaluar-competencias/deletes/${competenciaId}`
			console.log(URL)
      const resp = await axiosfetchPublic(URL)
      return resp.data
    } catch (error) {
      console.log(error)
    }
  },
  listAdjunto: async (competenceid: string, classCode: string) => {
    try {
      const URL = `/evaluar-competencias/listAdjunto/${competenceid}/${classCode}`
      const { data } = await axiosfetchPublic(URL)
      return data
    } catch (error) {
      console.log(error)
    }
  },
  AttachConducts: async (competenceAttachId: string) => {
    try {
      const URL = `/evaluar-competencias/AttachConducts/${competenceAttachId}`
      const { data } = await axiosfetchPublic(URL)
      return data
    } catch (error) {
      console.log(error)
    }
  },
  listCompetences: async (
    Accion: string,
    CompentenceGeneral: string,
    CriterioDesempeno: string = '',
    ClaCode: string,
    AluCode: string
  ) => {
    try {
      const URL = `/evaluar-competencias/listCompetences/${Accion}/${CompentenceGeneral}/${CriterioDesempeno}/${ClaCode}/${AluCode}`
      const { data } = await axiosfetchPublic(URL)
      return data
    } catch (error) {
      console.log(error)
    }
  },
  getEscalaCompetencia: async (competenciaId: string) => {
    try {
      const URL = `/evaluar-competencias/getEscalaCompetencia/${competenciaId}`
      const { data } = await axiosfetchPublic(URL)
      return data
    } catch (error) {
      console.log(error)
    }
  },
  retro: async (AlucompetenciaId: string) => {
    try {
      const URL = `/evaluar-competencias/retro/${AlucompetenciaId}`
      const { data } = await axiosfetchPublic(URL)
      return data
    } catch (error) {
      console.log(error)
    }
  },
  registerNotesCompetence: async (item: any) => {
    try {
      const URL = `/evaluar-competencias/registerNotesCompetence/`
      const { data } = await axiosfetchPublic.post(URL, item)
      return data
    } catch (error) {
      console.log(error)
    }
  },
}

export default API
