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
  USER_SESSION,
  SET_DATA_DOCENTE,
} from '../../consts/storageConst'

import { get } from 'local-storage'
import { redirectRouter } from '../../helpers/routerRedirect'
import UserContext from '../../Context/userContext'
// import { useCookies } from 'react-cookie'

const Header = dynamic(() => import('./../UI/organisms/header/Header'), {
  ssr: false,
})

interface Props {
  children: ReactNode
}

const Index = ({ children }: Props) => {
  const [Loading, setloading] = useState(true)

  const {
    user
} = useContext(UserContext);

  const imagePros = {
    src: 'https://upn-repositorio-public.s3.amazonaws.com/logos/png/logo-upn-sin-fondo.png',
    alt: 'test',
    classname: 'logoHeader',
  }

  const DUENO: any = get(SET_DATA_DOCENTE) === undefined ? user : get(SET_DATA_DOCENTE)
  const DUENOSESSION = DUENO?.lastName 
  
  const welcomeProps = {
    labelWelcome: {
      // eslint-disable-next-line no-unneeded-ternary
      children: `Bienvenido Profesor(a): ${DUENOSESSION ? DUENOSESSION : '...'}`,
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
  // const cookie = useCookies([''])
  const callApiLogin = async (codeUser: any) => {
    const semesterTemp: any = await apiLogin.TokenCoupling(codeUser)
    if (semesterTemp.length !== 0) {
      if (convertStringToDate(semesterTemp[0].date) === dateNow)
        return setobjNotificar({
          state: semesterTemp[0].state,
          message: eventToken(semesterTemp[0].date, options),
        })
    }
  }

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
  //   if (codeteacher === null || codeteacher === "undefined") {
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
    // callApiLoginValid()
      // Router.push('default')
    setTimeout(async () => {
      redirectRouter('', setloading)
    }, 2000)
    const codeteacher = get(USER_SESSION)
    callApiLogin(codeteacher)
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
       <div className='container'>
        {children}
       </div>
      <Footer />
    </Fragment>
  )
}

export default Index
