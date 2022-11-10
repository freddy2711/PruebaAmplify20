import axiosfetchPublic from '../../../config/axios'
import axios from 'axios'
import { catchingErrorApi } from '../../../helpers/helpers'

const API = {
  list: async (teacherCode: string) => {
    try {
      const URL = `/evaluar-competencias/list/${teacherCode}`
      const result = await axiosfetchPublic(URL)
      return result
    } catch (error) {
      catchingErrorApi(error)
    }
  },
  comp_by_class: async (classCode: string) => {
    try {
      const URL = `/evaluar-competencias/comp_by_class/${classCode}`
      const result = await axiosfetchPublic(URL)
      return result.data
    } catch (error) {
      catchingErrorApi(error)
    }
  },
  competencePlanilla: async (classCode: string, competenciaId: string) => {
    try {
      const URL = `/evaluar-competencias/competencePlanilla/${classCode}/${competenciaId}`
      const result = await axiosfetchPublic(URL)
      return result.data
    } catch (error) {
      catchingErrorApi(error)
    }
  },
  conductasList: async (competenciaId: string) => {
    try {
      const URL = `/evaluar-competencias/conductasList/${competenciaId}`
      const result = await axiosfetchPublic(URL)
      return result.data
    } catch (error) {
      catchingErrorApi(error)
    }
  },
  listTipo: async (classCode: string) => {
    try {
      const URL = `/evaluar-competencias/listTipo/${classCode}`
      const result = await axiosfetchPublic(URL)
      return result.data
    } catch (error) {
      catchingErrorApi(error)
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
      catchingErrorApi(error)
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
      catchingErrorApi(error)
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
      catchingErrorApi(error)
    }
  },
  download: async (item: any) => {
    try {
      const URL = `/evaluar-competencias/download/`
      const resp = await axiosfetchPublic.post(URL, item)

      return resp.data
    } catch (error) {
      catchingErrorApi(error)
    }
  },
  deletes: async (competenciaId: string) => {
    try {
      const URL = `/evaluar-competencias/deletes/${competenciaId}`
      console.log(URL)
      const resp = await axiosfetchPublic(URL)
      return resp.data
    } catch (error) {
      catchingErrorApi(error)
    }
  },
  listAdjunto: async (competenceid: string, classCode: string) => {
    try {
      const URL = `/evaluar-competencias/listAdjunto/${competenceid}/${classCode}`
      const { data } = await axiosfetchPublic(URL)
      return data
    } catch (error) {
      catchingErrorApi(error)
    }
  },
  AttachConducts: async (competenceAttachId: string) => {
    try {
      const URL = `/evaluar-competencias/AttachConducts/${competenceAttachId}`
      const { data } = await axiosfetchPublic(URL)
      return data
    } catch (error) {
      catchingErrorApi(error)
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
      catchingErrorApi(error)
    }
  },
  getEscalaCompetencia: async (competenciaId: string) => {
    try {
      const URL = `/evaluar-competencias/getEscalaCompetencia/${competenciaId}`
      const { data } = await axiosfetchPublic(URL)
      return data
    } catch (error) {
      catchingErrorApi(error)
    }
  },
  retro: async (AlucompetenciaId: string) => {
    try {
      const URL = `/evaluar-competencias/retro/${AlucompetenciaId}`
      const { data } = await axiosfetchPublic(URL)
      return data
    } catch (error) {
      catchingErrorApi(error)
    }
  },
  registerNotesCompetence: async (item: any) => {
    try {
      const URL = `/evaluar-competencias/registerNotesCompetence`
      const { data } = await axiosfetchPublic.post(URL, item)
      return data
    } catch (error) {
      catchingErrorApi(error)
    }
  },
}

export default API
