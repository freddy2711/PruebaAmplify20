import axiosfetchPublic from '../../../config/axios'

const API = {
  personaObtener: async (user: any) => {
    try {
      const URL = `/datos-personales/personaObtener/${user}`
      const result = await axiosfetchPublic(URL)
      return result
    } catch (error) {
      console.log(error)
    }
  },
  pais: async () => {
    try {
      const URL = `/datos-personales/paisObtener`
      const result = await axiosfetchPublic(URL)
      return result
    } catch (error) {
      console.log(error)
    }
  },
  estadoCivil: async () => {
    try {
      const URL = `/datos-personales/estadoCivilObtener`
      const result = await axiosfetchPublic(URL)
      return result
    } catch (error) {
      console.log(error)
    }
  },
  tipoDocumento: async () => {
    try {
      const URL = `/datos-personales/tipoDocumento`
      const result = await axiosfetchPublic(URL)
      return result
    } catch (error) {
      console.log(error)
    }
  },
  Ubigeo: async () => {
    try {
      const URL = `/datos-personales/Ubigeo`
      const result = await axiosfetchPublic(URL)
      return result
    } catch (error) {
      console.log(error)
    }
  },
  EvaluadorEvaluado: async (idPersona: string) => {
    try {
      const URL = `/datos-personales/EvaluadorEvaluado/${idPersona}`
      const result = await axiosfetchPublic(URL)
      return result
    } catch (error) {
      console.log(error)
    }
  },
  personaGuardar: async (Item: any) => {

    try {
      const URL = `/datos-personales/personaGuardar`
      const result = await axiosfetchPublic.post(URL, Item)
      return result
    } catch (error) {
      console.log(error)
    }
  },
  Institucion: async (idPais: any = '0') => {
    try {
      const URL = `/datos-personales/Institucion/${idPais}`
      const result = await axiosfetchPublic(URL)
      return result
    } catch (error) {
      console.log(error)
    }
  },
  Industria: async () => {
    try {
      const URL = `/datos-personales/Industria`
      const result = await axiosfetchPublic(URL)
      return result
    } catch (error) {
      console.log(error)
    }
  },
  AreaPuesto: async () => {
    try {
      const URL = `/datos-personales/AreaPuesto`
      const result = await axiosfetchPublic(URL)
      return result
    } catch (error) {
      console.log(error)
    }
  },
  tipoDedicacionDocente: async () => {
    try {
      const URL = `/datos-personales/tipoDedicacionDocente`
      const result = await axiosfetchPublic(URL)
      return result
    } catch (error) {
      console.log(error)
    }
  },
  experienciaLaboralObtener: async (idPersona: string) => {
    try {
      const URL = `/datos-personales/experienciaLaboralObtener/${idPersona}/True`
      const result = await axiosfetchPublic(URL)
      return result
    } catch (error) {
      console.log(error)
    }
  },
  experienciaLaboralGuardar: async (item: any) => {
    try {
      const URL = `/datos-personales/experienciaLaboralGuardar/Guardar`
      const result = await axiosfetchPublic.post(URL, item)
      return result
    } catch (error) {
      console.log(error)
    }
  },
  clasificacionCarrera: async () => {
    try {
      const URL = `/datos-personales/clasificacionCarrera`
      const result = await axiosfetchPublic(URL)
      return result
    } catch (error) {
      console.log(error)
    }
  },
  nivelAcademico: async () => {
    try {
      const URL = `/datos-personales/nivelAcademico`
      const result = await axiosfetchPublic(URL)
      return result
    } catch (error) {
      console.log(error)
    }
  },
  estadoEstudio: async () => {
    try {
      const URL = `/datos-personales/estadoEstudio`
      const result = await axiosfetchPublic(URL)
      return result
    } catch (error) {
      console.log(error)
    }
  },
  estudio: async (idPersona: string) => {
    try {
      const URL = `/datos-personales/estudio/${idPersona}`
      const result = await axiosfetchPublic(URL)
      return result
    } catch (error) {
      console.log(error)
    }
  },
  estudioGuardar: async (item: any) => {
    try {
      const URL = `/datos-personales/estudioGuardar`
      const result = await axiosfetchPublic.post(URL, item)
      return result
    } catch (error) {
      console.log(error)
    }
  },
  personaConocimientoObtener: async (idPersona: string) => {
    try {
      const URL = `/datos-personales/personaConocimientoObtener/${idPersona}`
      const result = await axiosfetchPublic(URL)
      return result
    } catch (error) {
      console.log(error)
    }
  },
  personaConocimientoGuardar: async (item: any) => {
    try {
      const URL = `/datos-personales/personaConocimientoGuardar`
      const result = await axiosfetchPublic.post(URL, item)
      return result
    } catch (error) {
      console.log(error)
    }
  },
  idioma: async () => {
    try {
      const URL = `/datos-personales/idioma`
      const result = await axiosfetchPublic(URL)
      return result
    } catch (error) {
      console.log(error)
    }
  },
  personaIdioma: async (idPersona: string) => {
    try {
      const URL = `/datos-personales/personaIdioma/${idPersona}`
      const result = await axiosfetchPublic(URL)
      return result
    } catch (error) {
      console.log(error)
    }
  },
  personaIdiomaGuardar: async (item: any) => {
    /*
		{
			"idPersonaIdioma": null,
			"Persona": {
					"idPersona": "5050"
			},
			"Idioma": {
					"idIdioma": "2"
			},
			"nivelIdiomaOral": "Básico",
			"nivelIdiomaEscrito": "Básico",
			"activo": true,
			"audit_usuario_creacion": "RVI",
			"audit_usuario_actualizacion": null
		}
		*/

    try {
      const URL = `/datos-personales/personaIdiomaGuardar`
      const result = await axiosfetchPublic.post(URL, item)
      return result
    } catch (error) {
      console.log(error)
    }
  },
  referenciaLaboral: async (idPersona: string) => {
    try {
      const URL = `/datos-personales/referenciaLaboral/${idPersona}`
      const result = await axiosfetchPublic(URL)
      return result
    } catch (error) {
      console.log(error)
    }
  },
  referenciaLaboralGuardar: async (item: any) => {
    try {
      const URL = `/datos-personales/referenciaLaboralGuardar`
      const result = await axiosfetchPublic.post(URL, item)
      return result
    } catch (error) {
      console.log(error)
    }
  },
  tipoAdjunto: async () => {
    try {
      const URL = `/datos-personales/tipoAdjunto`
      const result = await axiosfetchPublic(URL)
      return result
    } catch (error) {
      console.log(error)
    }
  },
  personaAdjunto: async (idPersona: string) => {
    try {
      const URL = `/datos-personales/personaAdjunto/${idPersona}`
      const result = await axiosfetchPublic(URL)
      return result
    } catch (error) {
      console.log(error)
    }
  },
  personaAdjuntoGuardar: async (item: any) => {
    try {
      const URL = `/datos-personales/personaAdjuntoGuardar`
      const result = await axiosfetchPublic.post(URL, item)
			console.log(result)
      return result
    } catch (error) {
      console.log(error)
    }
  },
  personaAdjuntoDownload: async (idPersona: string, id: string) => {
    try {
      const URL = `/datos-personales/PersonaAdjuntoDownload/${idPersona}/${id}`
      const result = await axiosfetchPublic(URL)
      return result
    } catch (error) {
      console.log(error)
    }
  },
  confirmacionGuardar: async (item: any) => {

    try {
      const URL = `/datos-personales/confirmacionGuardar`
      const result = await axiosfetchPublic.post(URL, item)
      return result
    } catch (error) {
      console.log(error)
    }
  },
	downloadFile: async (name: any) => {
		try {
			const URL = `/datos-personales/downloadFile/${name}`
			const result = await axiosfetchPublic(URL)
      return result
		} catch (error) {
			console.log(error)
		}
	}
  
}

export default API
