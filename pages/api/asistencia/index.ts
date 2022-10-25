import axiosfetchPublic from '../../../config/axios'

const API = {
  listAttendanceSessionSummary: async (controlClassId: string) => {
    const URL = `/asistencia/list/${controlClassId}`
    const result: any = await axiosfetchPublic(URL)
    return result.data
  },
  listDetailClass: async (classCode: string, parameterCode: string) => {
    const URL = `/asistencia/DetailClass/${classCode}/${parameterCode}`
    const result: any = await axiosfetchPublic(URL)
    return result.data
  },
  getClaseDetalle: async (classCode: string, parameter: string) => {
    try {
      const URL = `/asistencia/getClaseDetalle/${classCode}/${parameter}`
      const result = await axiosfetchPublic(URL)

      return result
    } catch (error) {
      console.log(error)
    }
  },
  registraAsistencia: async (
    iControlClase: string,
    xmldata: string,
    date: string,
    semesterId: number = 0
  ) => {
    const item = {
      semesterId,
      date,
      controlClassId: iControlClase,
      xmlData: `${xmldata}`,
    }

    console.log(item)

    const URL = `/asistencia/registraAsistencia`
    const result: any = await axiosfetchPublic.post(URL, item)

    return result.data
  },
  registraAsistenciasolicitud: async (
    iControlClase: string,
    xmldata: string
  ) => {
    const item = {
      controlClassId: iControlClase,
      xmlData: `${xmldata}`,
    }

    console.log(item)

    const URL = `/asistencia/registraAsistenciasolicitud`
    const result: any = await axiosfetchPublic.post(URL, item)
    return result.data
  },
  actualizaRecuperacionEstado: async (item: any) => {
    const obj = {
      recoveryId: item.recoveryId,
      states: item.states,
      user: item.user,
    }

    const URL = `/asistencia/actualizaRecuperacionEstado`
    const result = await axiosfetchPublic.post(URL, obj)
    return result
  },
  terminaSesion: async (iControlClase: string, sUserName: string) => {
    const URL = `/asistencia/terminaSesion/${iControlClase}/${sUserName}`
    const result = await axiosfetchPublic.post(URL)
    return result
  },
  terminaSesionSolicitud: async (
    iControlClase: string,
    sUserName: string,
    comentario: string
  ) => {
    const URL = `/asistencia/terminaSesionSolicitud/${iControlClase}/${sUserName}/${comentario}`
    const result = await axiosfetchPublic.post(URL)
    return result
  },
  AsistenciaEnFechasControl: async (clase: any) => {
    const obj: any = {
      classStr: clase,
    }

    const URL = `/asistencia/AsistenciaEnFechasControl`
    const { data } = await axiosfetchPublic.post(URL, obj)
    return data
  },
  puedeCerrar: async (classControlId: string) => {
    const URL = `/asistencia/puedeCerrar/${classControlId}`
    const { data } = await axiosfetchPublic.post(URL)
    return data
  },
  email: async (emailJson: any) => {
    const URL = `/asistencia/email`
    const result = await axiosfetchPublic.post(URL, emailJson)
    return result
  },
  listarAsistencia: async (iControlClase: string) => {
    const URL = `/asistencia/listarAsistencia/${iControlClase}`
    const result = await axiosfetchPublic(URL)
    return result
  },
  listarCorreo_Solicitud: async (iControlClase: string, classId: string) => {
    const URL = `/asistencia/listarCorreo_Solicitud/${iControlClase}/${classId}`
    const result = await axiosfetchPublic(URL)
    return result
  },
  trabajador: async (DUENO: string) => {
    const URL = `/asistencia/trabajador/${DUENO}`
    return await axiosfetchPublic(URL)
  },
  campus: async (classCode: string) => {
    const URL = `/asistencia/campus/${classCode}`
    return await axiosfetchPublic(URL)
  },
}

export default API