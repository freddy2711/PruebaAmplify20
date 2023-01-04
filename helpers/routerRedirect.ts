import { get, set, remove } from 'local-storage'
import Router from 'next/router'
import {
  APP_CODE,
  callErrorValid,
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

export const ValidateSessionPA_AU = async (loadin: any) => {
  const codeteacher: any = get(USER_SESSION)
  const dataUserTemp = await apiLogin.DatosUsuario(codeteacher)
  if (callErrorValid(dataUserTemp, loadin) === undefined) return
  const seccionGroup: any = get(SET_SECCION_GROUP)
  const valores = window.location
  if (dataUserTemp[0] === undefined) return
  const obj = {
    codeUser: dataUserTemp[0].userName,
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
}
export const ValidateVigenciaGroup = async (rs: any, loadin: any) => {
  const groupSeccion = []
  for (let index = 0; index < rs.length; index++) {
    let element = rs[index].groupName
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
  let token: any = get(TOKEN)

  const obj = {
    token: token,
    userCode: get(USER_SESSION),
    classCode: get(USER_SESSION),
  }

  const response = await apiTokens.ByTokenValidate(obj)
  if (response?.tokenId === undefined) {
    remove(TOKEN)
    remove(USER_SESSION)
    remove(TOKEN_IN)
    const codeteacher = get(USER_SESSION)
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
  const rs0 = await ValidateSessionPA_AU(loadin)
  loadin(false)
  if (vista !== '' && !rs) {
    Router.push(vista)
  }
  return rs
}
