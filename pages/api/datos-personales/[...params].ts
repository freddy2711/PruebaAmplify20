import { axiosfetchPrivateWSCV } from '../../../config/axios'
import type { NextApiRequest, NextApiResponse } from 'next'
import { apiPath } from './../../../consts/path'
import { genError } from '../../../helpers/helpers'

type Data = {}

const translateExpLAb = (datos: any) => {
  const arr = datos.map((item: any) => ({
    idExperienciaLaboral: item.WorkExperienceId,
    puesto: item.Post,
    fechaInicio: item.StartDate,
    fechaFin: item.EndDate && item.EndDate,
    empresa: item.Company,
    Pais: {
      idPais: parseInt(item.CountryId) !== 0 ? parseInt(item.CountryId) : '',
      nombre: item.Name,
    },
    AreaPuesto: {
      idAreaPuesto:
        parseInt(item.IdAreaPosition) !== 0
          ? parseInt(item.IdAreaPosition)
          : '',
      nombreAreaPuesto: item.PostAreaName,
    },
    Industria: {
      idIndustria:
        parseInt(item.IndustryID) !== 0 ? parseInt(item.IndustryID) : '',
      nombreIndustria: item.IndustryName,
    },
    descripcion: item.Description,
    genteACargo: item.PeopleToCharge === 'True',
    manejoPresupuesto: item.BudgetManagement === 'True',
    experienciaDocencia: item.TeachingExperience === 'True',
    trabajaActualmente: item.CurrentlyWorking === 'True',
    activo: item.Active === 'True',
    noSeEncontroInstitucion: item.NoInstitutionFound === 'True',
    audit_usuario_creacion: item.AuditUserCreation,
    audit_usuario_actualizacion: item.AuditUserUpdate,
    Institucion: {
      idInstitucion:
        parseInt(item.InstitutionId) !== 0 ? parseInt(item.InstitutionId) : '',
    },
    TipoDedicacionDocente: {
      idTipoDedicacionDocente:
        parseInt(item.IdTypeTeachingDedication) !== 0
          ? parseInt(item.IdTypeTeachingDedication)
          : '',
      nombreInstitucion: item.InstitutionNameNotFound,
    },
  }))

  return arr
}

const translateEstudy = (datos: any) => {
  const arr = datos.map((item: any) => ({
    idEstudio: item.StudyId,
    nombreEstudio: item.StudyName,
    Institucion: {
      audit_fecha_creacion: '0001-01-01T00:00:00',
      idInstitucion: item.InstitutionId,
      nombreInstitucion: item.InstitutionName,
    },
    Pais: {
      idPais: item.CountryId,
      nombre: item.CountryName,
    },
    EstadoEstudio: {
      idEstadoEstudio: item.StudyStatusId,
      nombre: item.StudyStatusName,
    },
    NivelAcademico: {
      idNivelAcademico: item.IdLevelAcademico,
      nombre: item.AcademicLevelName,
    },
    fechaInicio: item.StartDate,
    fechaFin: item.EndDate,
    estudiaActualmente: item.CurrentlyStudying === 'True',
    ClasificacionCarrera: {
      codigoClasificacionCarrera: item.CareerClassificationCode,
      nombreClasificacionCarrera: item.CareerClassificationName,
    },
    activo: item.Active === 'True',
    esValidadoSunedu: item.IsValidatedSunedu === 'True',
    noSeEncontroInstitucion: item.NoInstitutionFound === 'True',
    audit_usuario_creacion: item.audit_user_creation,
    audit_fecha_creacion: item.audit_date_creation,
    audit_usuario_actualizacion: item.audit_user_update,
    audit_fecha_actualizacion: item.audit_update_date,
  }))

  return arr
}

const translateConos = (datos: any) => {
  const arr = datos.map((item: any) => ({
    idPersonaConocimiento: item.KnowledgePersonId,
    nombreConocimiento: item.KnowledgeName,
    nivelConocimiento: item.KnowledgeLevel,
    activo: item.Active === 'True',
    audit_usuario_creacion: item.audit_user_creation,
    audit_fecha_creacion: item.audit_date_creation,
    esCertificado: item.IsCertificate === 'True',
  }))

  return arr
}

const translateIdiomas = (datos: any) => {
  const arr = datos.map((item: any) => ({
    idPersonaIdioma: item.IdPersoneLanguage,
    Idioma: {
      idIdioma: item.IdLanguage,
      nombreIdioma: item.NameLanguage,
      audit_fecha_creacion: '0001-01-01T00:00:00',
    },
    nivelIdiomaOral: item.LevelLanguageOral,
    nivelIdiomaEscrito: item.LevelLanguageWritten,
    activo: item.Active === 'True',
    audit_usuario_creacion: item.AuditUserCreate,
    audit_fecha_creacion: item.AuditDateCreate,
    esCertificado: item.sCertified === 'True',
    noSeEncontroIdioma: item.NoseIFindLanguage === 'True',
  }))

  return arr
}

const translateRefLab = (datos: any) => {
  const arr = datos.map((item: any) => ({
    idReferenciaLaboral: item.JobReferenceId,
    empresa: item.Company,
    cargoreferencia: item.ReferenceCharge,
    contacto: item.Contact,
    correo: item.Mail,
    relacion: item.Relationship,
    telefono: item.Phone,
    celular1: item.Cell1,
    celular2: item.Cell2,
    activo: item.Active === 'True',
    audit_usuario_creacion: item.auditUserCreation,
    audit_fecha_creacion: item.auditDateCreation,
  }))

  return arr
}

const translateAdjuntos = (datos: any) => {
  const arr = datos.map((item: any) => ({
    idPersonaAdjunto: item.IdPersonAttach,
    nombreAdjunto: item.NameAttach,
    extensionAdjunto: item.ExtenAttach,
    descripcionAdjunto: item.DescriptionAttach,
    activo: item.Active === 'True',
    audit_usuario_creacion: item.UsuarioCreate,
    audit_fecha_creacion: item.DateCreate,
    audit_usuario_actualizacion: item.UsuarioCreate,
    audit_fecha_actualizacion: item.DateUpdate,
  }))
  return arr
}

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { params }: any = req.query

  console.log('PARAMS_', params)

  switch (params[0]) {
    case 'personaObtener': {
      const URL = apiPath.datosPersonales.PATH_persona(params[1].toUpperCase())
      console.log(URL)

      try {
        const { data } = await axiosfetchPrivateWSCV(URL)
        console.log(data.detail)
        res.status(200).json(data.detail)
      } catch (error: any) {
        genError(res,error,'DP001')
      }
      break
    }

    case 'personaGuardar': {
      const item = req.body
      const URL = apiPath.datosPersonales.PATH_PersonaGuardar
      console.log(URL)
      try {
        const { data } = await axiosfetchPrivateWSCV.post(URL, item)
        console.log(data.detail)
        res.status(200).json(data.detail)
      } catch (error: any) {
        genError(res,error,'DP002')
      }
      break
    }

    case 'paisObtener': {
      const URL = apiPath.datosPersonales.PATH_pais
      console.log(URL)

      try {
        const { data } = await axiosfetchPrivateWSCV(URL)
        console.log(data.detail)
        res.status(200).json(data.detail)
      } catch (error: any) {
        genError(res,error,'DP003')
      }
      break
    }

    case 'estadoCivilObtener': {
      const URL = apiPath.datosPersonales.PATH_estadoCivil
      console.log(URL)

      try {
        const { data } = await axiosfetchPrivateWSCV(URL)
        console.log(data.detail)
        res.status(200).json(data.detail)
      } catch (error: any) {
        genError(res,error,'DP004')
      }
      break
    }

    case 'tipoDocumento': {
      const URL = apiPath.datosPersonales.PATH_tipoDocument
      console.log(URL)

      try {
        const { data } = await axiosfetchPrivateWSCV(URL)
        console.log(data.detail)
        res.status(200).json(data.detail)
      } catch (error: any) {
        genError(res,error,'DP005')
      }
      break
    }

    case 'Ubigeo': {
      const URL = apiPath.datosPersonales.PATH_Ubigeo
      console.log(URL)

      try {
        const { data } = await axiosfetchPrivateWSCV(URL)
        console.log(data.detail)
        res.status(200).json(data.detail)
      } catch (error: any) {
        genError(res,error,'DP006')
      }
      break
    }

    case 'EvaluadorEvaluado': {
      const URL = apiPath.datosPersonales.PATH_EvaluadorEvaluado(params[1])
      console.log(URL)

      try {
        const { data } = await axiosfetchPrivateWSCV(URL)
        console.log(data.detail)
        res.status(200).json(data.detail)
      } catch (error: any) {
        genError(res,error,'DP007')
      }
      break
    }

    case 'Institucion': {
      const URL = apiPath.datosPersonales.PATH_Institucion(params[1])
      console.log(URL)

      try {
        const { data } = await axiosfetchPrivateWSCV(URL)
        console.log(data.detail)
        res.status(200).json(data.detail)
      } catch (error: any) {
        genError(res,error,'DP008')
      }
      break
    }

    case 'Industria': {
      const URL = apiPath.datosPersonales.PATH_Industria
      console.log(URL)

      try {
        const { data } = await axiosfetchPrivateWSCV(URL)
        console.log(data.detail)
        res.status(200).json(data.detail)
      } catch (error: any) {
        genError(res,error,'DP009')
      }
      break
    }

    case 'AreaPuesto': {
      const URL = apiPath.datosPersonales.PATH_AreaPuesto
      console.log(URL)

      try {
        const { data } = await axiosfetchPrivateWSCV(URL)
        console.log(data.detail)
        res.status(200).json(data.detail)
      } catch (error: any) {
        genError(res,error,'DP010')
      }
      break
    }

    case 'tipoDedicacionDocente': {
      const URL = apiPath.datosPersonales.PATH_TipoDedicacionDocente
      console.log(URL)

      try {
        const { data } = await axiosfetchPrivateWSCV(URL)
        console.log(data.detail)
        res.status(200).json(data.detail)
      } catch (error: any) {
        genError(res,error,'DP011')
      }
      break
    }

    case 'experienciaLaboralObtener': {
      const URL = apiPath.datosPersonales.PATH_ExperienciaLaboral(params[1])
      console.log(URL)

      try {
        const { data } = await axiosfetchPrivateWSCV(URL)
        const lista = translateExpLAb(data.detail)
        console.log(lista)
        res.status(200).json(lista)
      } catch (error: any) {
        genError(res,error,'DP012')
      }
      break
    }

    case 'experienciaLaboralGuardar': {
      const item = req.body
      const URL = apiPath.datosPersonales.PATH_ExperienciaLaboralGuardar
      console.log(URL)

      try {
        const { data } = await axiosfetchPrivateWSCV.post(URL, item)
        console.log(data)
        res.status(200).json(data)
      } catch (error: any) {
        genError(res,error,'DP013')
      }
      break
    }

    // clasificacionCarrera
    case 'clasificacionCarrera': {
      const URL = apiPath.datosPersonales.PATH_ClasificacionCarrera
      console.log(URL)

      try {
        const { data } = await axiosfetchPrivateWSCV(URL)
        console.log(data.detail)
        res.status(200).json(data.detail)
      } catch (error: any) {
        genError(res,error,'DP014')
      }
      break
    }

    case 'nivelAcademico': {
      const URL = apiPath.datosPersonales.PATH_NivelAcademico
      console.log(URL)

      try {
        const { data } = await axiosfetchPrivateWSCV(URL)
        console.log(data.detail)
        res.status(200).json(data.detail)
      } catch (error: any) {
        genError(res,error,'DP015')
      }
      break
    }

    case 'estadoEstudio': {
      const URL = apiPath.datosPersonales.PATH_EstadoEstudio
      console.log(URL)

      try {
        const { data } = await axiosfetchPrivateWSCV(URL)
        console.log(data.detail)
        res.status(200).json(data.detail)
      } catch (error: any) {
        genError(res,error,'DP016')
      }
      break
    }

    case 'estudio': {
      const URL = apiPath.datosPersonales.PATH_Estudio(params[1])
      console.log(URL)

      try {
        const { data } = await axiosfetchPrivateWSCV(URL)
        console.log(translateEstudy(data.detail))
        res.status(200).json(translateEstudy(data.detail))
      } catch (error: any) {
        genError(res,error,'DP017')
      }
      break
    }

    case 'estudioGuardar': {
      const item = req.body
      const URL = apiPath.datosPersonales.PATH_EstudioGuardar
      console.log(URL)

      try {
        const { data } = await axiosfetchPrivateWSCV.post(URL, item)
        console.log(data)
        res.status(200).json(data)
      } catch (error: any) {
        genError(res,error,'DP018')
      }
      break
    }

    case 'personaConocimientoObtener': {
      const URL = apiPath.datosPersonales.PATH_PersonaConocimientoObtener(
        params[1]
      )
      console.log(URL)

      try {
        const { data } = await axiosfetchPrivateWSCV(URL)
        console.log(translateConos(data.detail))
        res.status(200).json(translateConos(data.detail))
      } catch (error: any) {
        genError(res,error,'DP019')
      }
      break
    }

    case 'personaConocimientoGuardar': {
      const item = req.body
      const URL = apiPath.datosPersonales.PATH_PersonaConocimiento
      console.log(URL)

      try {
        const { data } = await axiosfetchPrivateWSCV.post(URL, item)
        console.log(data.detail)
        res.status(200).json(data.detail)
      } catch (error: any) {
        genError(res,error,'DP020')
      }
      break
    }

    case 'idioma': {
      const URL = apiPath.datosPersonales.PATH_Idioma
      console.log(URL)

      try {
        const { data } = await axiosfetchPrivateWSCV(URL)
        console.log(data.detail)
        res.status(200).json(data.detail)
      } catch (error: any) {
        genError(res,error,'DP021')
      }
      break
    }

    case 'personaIdioma': {
      const URL = apiPath.datosPersonales.PATH_PersonaIdioma(params[1])
      console.log(URL)

      try {
        const { data } = await axiosfetchPrivateWSCV(URL)
        console.log(translateIdiomas(data.detail))
        res.status(200).json(translateIdiomas(data.detail))
      } catch (error: any) {
        genError(res,error,'DP022')
      }
      break
    }

    case 'personaIdiomaGuardar': {
      const item = req.body
      const URL = apiPath.datosPersonales.PATH_PersonaIdiomaGuardar
      console.log(URL)

      try {
        const { data } = await axiosfetchPrivateWSCV.post(URL, item)
        console.log(data.detail)
        res.status(200).json(data.detail)
      } catch (error: any) {
        genError(res,error,'DP023')
      }
      break
    }

    case 'referenciaLaboral': {
      const URL = apiPath.datosPersonales.PATH_ReferenciaLaboral(params[1])
      console.log(URL)

      try {
        const { data } = await axiosfetchPrivateWSCV(URL)
        console.log(translateRefLab(data.detail))
        res.status(200).json(translateRefLab(data.detail))
      } catch (error: any) {
        genError(res,error,'DP024')
      }
      break
    }

    case 'referenciaLaboralGuardar': {
      const item = req.body
      const URL = apiPath.datosPersonales.PATH_ReferenciaLaboralGuardar
      console.log(URL)

      try {
        const { data } = await axiosfetchPrivateWSCV.post(URL, item)
        console.log(data.detail)
        res.status(200).json(data.detail)
      } catch (error: any) {
        genError(res,error,'DP025')
      }
      break
    }

    case 'tipoAdjunto': {
      const URL = apiPath.datosPersonales.PATH_TipoAdjunto
      console.log(URL)

      try {
        const { data } = await axiosfetchPrivateWSCV(URL)
        console.log(data.detail)
        res.status(200).json(data.detail)
      } catch (error: any) {
        genError(res,error,'DP026')
      }
      break
    }

    case 'personaAdjunto': {
      const URL = apiPath.datosPersonales.PATH_PersonaAdjunto(params[1])
      console.log(URL)

      try {
        const { data } = await axiosfetchPrivateWSCV(URL)
        console.log(data.detail)
        res.status(200).json(translateAdjuntos(data.detail))
      } catch (error: any) {
        genError(res,error,'DP027')
      }
      break
    }

    case 'personaAdjuntoGuardar': {
      const item = req.body
      const URL = apiPath.datosPersonales.PATH_PersonaAdjuntoGuardar
      console.log(URL)

      try {
        const { data } = await axiosfetchPrivateWSCV.post(URL, item)
        console.log('personaAdjuntoGuardar____', data.detail)
        res.status(200).json(data.detail)
      } catch (error: any) {
        genError(res,error,'DP028')
      }
      break
    }

    case 'personaAdjuntoDownload': {
      const URL = apiPath.datosPersonales.PATH_PersonaAdjuntoDescargar(
        params[1],
        params[2]
      )
      console.log(URL)

      try {
        const { data } = await axiosfetchPrivateWSCV(URL)
        console.log(data.detail)
        res.status(200).json(data.detail)
      } catch (error: any) {
        genError(res,error,'DP029')
      }
      break
    }
    case 'downloadFile': {
      try {
        const URL = apiPath.datosPersonales.PATH_Download
        const { data } = await axiosfetchPrivateWSCV.post(URL, {
          nameFile: params[1],
        })
        console.log(data.detail)
        res.status(200).json(data.detail)
      } catch (error) {
        genError(res,error,'DP030')
      }

      break
    }
    case 'confirmacionGuardar': {
      const item = req.body
      const URL = apiPath.datosPersonales.PATH_Confirmacion
      console.log(URL)

      try {
        const { data } = await axiosfetchPrivateWSCV.post(URL, item)
        console.log(data.detail)
        res.status(200).json(data.detail)
      } catch (error: any) {
        genError(res,error,'DP031')
      }
      break
    }
  }
}

export default handler
