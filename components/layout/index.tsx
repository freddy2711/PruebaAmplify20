// import Header from './../UI/organisms/header/Header'
import Footer from './../UI/organisms/footer/Footer'
import Loader from '../../components/UI/atoms/loader/Loader'
import Navigation from './../UI/molecules/navigation/Navigation'
import { Fragment, ReactNode, useContext, useEffect, useState } from 'react'
import { menuDefault } from './../../consts/menu'
import dynamic from 'next/dynamic'
import Notificar from '../UI/atoms/notificar/Notificar'
import { apiLogin } from '../../pages/api'
import {
  convertStringToDate,
  eventToken,
  options,
  SET_DATA_DOCENTE,
  DUENO_SESSION,
  // TITLE_EMERG,
  // MSM_NO_SECCION,
  USER_SESSION,
  // USER_SESSION,
} from '../../consts/storageConst'

import { get, set } from 'local-storage'
// import { redirectRouter } from '../../helpers/routerRedirect'
import UserContext from '../../Context/userContext'
// import getAlert from '../../hooks/jspdf/alertify'
// import { redirectRouter } from '../../helpers/routerRedirect'
// import { useCookies } from 'react-cookie'

const Header = dynamic(() => import('./../UI/organisms/header/Header'), {
  ssr: false,
})

interface Props {
  children: ReactNode
}

const Index = ({ children }: Props) => {
  const [Loading, setloading] = useState(true)

  const { user } = useContext(UserContext)

  const imagePros = {
    src: 'https://upn-repositorio-public.s3.amazonaws.com/logos/png/logo-upn-sin-fondo.png',
    alt: 'test',
    classname: 'logoHeader',
  }

  const DUENO: any =
    get(SET_DATA_DOCENTE) === undefined ? user : get(SET_DATA_DOCENTE)
  const DUENOSESSION = DUENO?.lastName

  const welcomeProps = {
    labelWelcome: {
      // eslint-disable-next-line no-unneeded-ternary
      children: `Bienvenido Profesor(a): ${DUENOSESSION || '...'}`,
      classname: 'badge bg-light text-dark mb-2',
    },
    anchorDatPer: {
      href: '/datos-personales',
      children: 'Datos Personales',
      classname: 'badge bg-info text-white text-decoration-none me-1',
    },
    anchorLogout: {
      href: '',
      children: 'Salir del Sistema',
      classname: 'badge bg-danger text-white text-decoration-none',
    },
    classname: 'text-center text-md-end',
  }
  const [objNotificar, setobjNotificar] = useState({
    state: false,
    message: '',
  })
  const dateNow = convertStringToDate(new Date())

  const callApiLoginCookies = async () => {
    const token: any = await apiLogin.logintokenValid()
    // if (token.user === null || token.user === undefined || token.user === '') {
    //   if (get(DUENO_SESSION) !== '') {
    //     set(DUENO_SESSION, '')
    //     setloading(false)
    //     window.location.href = `${process.env.NEXT_PUBLIC_SERVER_URL_REDIRECT}`
    //   }
    //   getAlert({
    //     title: TITLE_EMERG,
    //     text: MSM_NO_SECCION,
    //     confirmButtonText: `Ok`,
    //   })
    //   setloading(false)
    // }
    const rs = await apiLogin.loginDataUser(token?.user)
    set(DUENO_SESSION, token?.user)
    set(USER_SESSION, rs[0]?.codeUser)
    // codeteacher = rs[0]?.codeUser
    console.log('token codeUser :', rs)
    // token.user
    const semesterTemp: any = await apiLogin.TokenCoupling(rs[0]?.codeUser)
    if (semesterTemp.length !== 0) {
      if (convertStringToDate(semesterTemp[0].date) === dateNow) {
        setloading(false)
        return setobjNotificar({
          state: semesterTemp[0].state,
          message: eventToken(semesterTemp[0].date, options),
        })
      }
    }
    setloading(false)
  }

  // const callApiLogin = async (codeUser: any) => {
  //   const semesterTemp: any = await apiLogin.TokenCoupling(codeUser)
  //   if (semesterTemp.length !== 0) {
  //     if (convertStringToDate(semesterTemp[0].date) === dateNow) {
  //       setloading(false)
  //       return setobjNotificar({
  //         state: semesterTemp[0].state,
  //         message: eventToken(semesterTemp[0].date, options),
  //       })
  //     }
  //   }
  //   setloading(false)
  // }

  // const validateUser = () => {
  //   const codeteacher = get(USER_SESSION)
  //   if (
  //     codeteacher === null ||
  //     codeteacher === undefined ||
  //     codeteacher === ''
  //   ) {
  //     localStorage.clear()
  //     return (window.location.href = `${process.env.NEXT_PUBLIC_SERVER_URL_ENTIDADES}${process.env.NEXT_PUBLIC_SERVER_URL_REDIRECT}`)
  //   }
  // }

  // const ValidateSession = async () => {
  //   let token: any = get(TOKEN)

  //   const obj = {
  //     token: token,
  //     userCode: get(USER_SESSION),
  //     classCode: get(USER_SESSION),
  //   }

  //   const response = await apiTokens.ByTokenValidate(obj)

  //   if (response?.tokenId === undefined) {
  //     remove(TOKEN)
  //     remove(USER_SESSION)
  //     remove(TOKEN_IN)
  //     validateUser()
  //   }
  // }

  // const callApiLoginValid = async () => {
  //   let codeteacher = get(USER_SESSION)
  //   if (codeteacher === null || codeteacher === 'undefined') {
  //     // const token: any = await apiLogin.logintokenValid(cookie)
  //     const rs = await apiLogin.loginDataUser('RVI')
  //     // const rs = await apiLogin.loginDataUser(token?.user)
  //     set(DUENO_SESSION, 'RVI')
  //     set(USER_SESSION, rs[0]?.codeUser)
  //     codeteacher = rs[0]?.codeUser 
  //   }
  //   return callApiLogin(codeteacher)
  // }

  const obj = { keyA: 0 }

  useEffect(() => {
    // Router.push('default')
    // setTimeout(async () => {
    //   redirectRouter('', setloading)
    // }, 2000)
    // callApiLoginValid()
    callApiLoginCookies()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [obj.keyA])

  return (
    <Fragment>
      <Loader loading={Loading} />
      <Header
        imagePros={imagePros}
        welcomeProps={welcomeProps}
      />
      <Navigation menu={menuDefault} />
      <Notificar
        state={objNotificar.state}
        message={objNotificar.message}
      />
      <div className="container">{children}</div>
      <Footer />
    </Fragment>
  )
}

export default Index
