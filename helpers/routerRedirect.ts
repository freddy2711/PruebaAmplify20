import { get, set, remove } from 'local-storage'
import Router from 'next/router'
import {
  APP_CODE,
  callErrorValid,
  DUENO_SESSION,
  MSM_NO_EXISTE_GROUP,
  MSM_NO_GROUP,
  MSM_NO_SECCION,
  SET_SECCION_GROUP,
  TITLE_EMERG,
  TOKEN,
  TOKEN_IN,
  USER_SESSION,
} from '../consts/storageConst'
import getAlert from '../hooks/jspdf/alertify'
import { apiLogin, apiTokens } from '../pages/api'

// eslint-disable-next-line camelcase
export const ValidateSessionPA_AU = async (loadin: any) => {
  const codeteacher: any = get(USER_SESSION)
  let codeNameUser: any = get(DUENO_SESSION)
  if (codeNameUser === undefined || codeNameUser === null) {
    const dataUserTemp = await apiLogin.DatosUsuario(codeteacher)
    if (callErrorValid(dataUserTemp, loadin) === undefined) return
    codeNameUser = dataUserTemp[0]?.userName
  }
  const seccionGroup: any = get(SET_SECCION_GROUP)
  const valores = window.location
  const obj = {
    codeUser: codeNameUser,
    // sedCode: 'sedCode',
    // paramName: 'paramName',
    codeApp: APP_CODE,
    pageName: valores.pathname.replace('/', ''),
  }
  const rs = await apiTokens.ByPA_AU_User(obj)
  if (callErrorValid(rs, loadin) === undefined) return
  if (rs.length <= 0) {
    const rs = await getAlert({
      title: TITLE_EMERG,
      text: MSM_NO_GROUP,
      confirmButtonText: `Ok`,
    })
    if (rs) {
      window.location.href = `${process.env.NEXT_PUBLIC_SERVER_URL_ENTIDADES}${process.env.NEXT_PUBLIC_SERVER_URL_REDIRECT}`
      return true
    }
  }
  // Es considerado código riesgoso porque el usuario loeguado puede que no esté agregado a ningún grupo
  // Obtener grupos del usuario
  if (seccionGroup === undefined || seccionGroup === null)
    await ValidateVigenciaGroup(rs, loadin)
  if (obj.pageName !== 'permisos') ValidateExisteGroup(obj, loadin)
  // const rs2 = await apiTokens.ByPA_AU_Parameters(obj)
  return false
}
export const ValidateVigenciaGroup = async (rs: any, loadin: any) => {
  const groupSeccion = []
  for (let index = 0; index < rs.length; index++) {
    const element = rs[index].groupName
    const rs0 = await apiTokens.ByPA_AU_Group(element)
    if (callErrorValid(rs0, loadin) === undefined) return
    if (rs0[0] !== undefined) groupSeccion.push(rs0[0])
  }
  set(SET_SECCION_GROUP, groupSeccion)
}
export const ValidateExisteGroup = async (obj: any, loadin: any) => {
  const rs1 = await apiTokens.ByPA_AU_App(obj)
  if (callErrorValid(rs1, loadin) === undefined) return
  if (rs1[0].groupId === '0') {
    loadin(false)
    const rs = await getAlert({
      title: TITLE_EMERG,
      text: MSM_NO_EXISTE_GROUP,
      confirmButtonText: `Ok`,
    })
    if (rs) {
      window.location.href = `${process.env.NEXT_PUBLIC_SERVER_URL_PERMISOS}`
      return true
    }
    return false
  }
}
export const ValidateSession = async (loadin: any) => {
  const token: any = get(TOKEN)

  const obj = {
    token,
    userCode: get(USER_SESSION),
    classCode: get(USER_SESSION),
  }
  console.log("codeteacher", obj);
  const response = await apiTokens.ByTokenValidate(obj)
  if (response?.tokenId === undefined) {
    remove(TOKEN)
    remove(USER_SESSION)
    remove(TOKEN_IN)
    const codeteacher = get(USER_SESSION)
    console.log("codeteacher", codeteacher);
    
    if (
      codeteacher === null ||
      codeteacher === undefined ||
      codeteacher === ''
    ) {
      loadin(false)
      localStorage.clear()
      const rs = await getAlert({
        title: TITLE_EMERG,
        text: MSM_NO_SECCION,
        confirmButtonText: `Ok`,
      })
      if (rs) {
        window.location.href = `${process.env.NEXT_PUBLIC_SERVER_URL_ENTIDADES}${process.env.NEXT_PUBLIC_SERVER_URL_REDIRECT}`
        return true
      }
    }
  } else {
    return false
  }
}

export const redirectRouter = async (vista: any, loadin: any) => {
  loadin(true)
  const rs = await ValidateSession(loadin)
  const rs0: any = await ValidateSessionPA_AU(loadin)
  console.log('rs0', rs0)

  loadin(false)
  if (vista !== '' && !rs) {
    Router.push(vista)
  }
  return rs
}
