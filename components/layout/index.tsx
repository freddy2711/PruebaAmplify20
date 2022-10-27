// import Header from './../UI/organisms/header/Header'
import Footer from './../UI/organisms/footer/Footer'
import Navigation from './../UI/molecules/navigation/Navigation'
import { Fragment, ReactNode, useEffect, useState } from 'react'
import { menuDefault } from './../../consts/menu'
import dynamic from 'next/dynamic'
import Notificar from '../UI/atoms/notificar/Notificar'
import { apiLogin } from '../../pages/api'
import {
  convertStringToDate,
  DUENO_SESSION,
  eventToken,
  options,
  USER_SESSION,
} from '../../consts/storageConst'
import { get, set } from 'local-storage'
import { useCookies } from 'react-cookie'

const Header = dynamic(() => import('./../UI/organisms/header/Header'), {
  ssr: false,
})

interface Props {
  children: ReactNode
}

const index = ({ children }: Props) => {
  const imagePros = {
    src: 'https://upn-repositorio-public.s3.amazonaws.com/logos/png/logo-upn-sin-fondo.png',
    alt: 'test',
    classname: 'logoHeader',
  }

  const welcomeProps = {
    labelWelcome: {
      children: 'Bienvenido Profesor(a): VILLAR',
      classname: 'badge bg-light text-dark mb-2',
    },
    anchorDatPer: {
      href: '/datos-personales',
      children: 'Datos Personales',
      classname: 'badge bg-info text-white text-decoration-none me-1',
    },
    anchorLogout: {
      href: '#',
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
  const cookie = useCookies([''])
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

  const callApiLoginValid = async () => {
    let codeteacher = get(USER_SESSION)
    console.log('codeteacher', codeteacher)
    if (codeteacher === null || codeteacher === undefined) {
      const token: any = await apiLogin.logintokenValid(cookie)
      // const rs = await apiLogin.loginDataUser('RVI')
      const rs = await apiLogin.loginDataUser(token?.user)
      set(DUENO_SESSION, token?.user)
      set(USER_SESSION, rs[0]?.codeUser)
      codeteacher = rs[0]?.codeUser
    }
    return callApiLogin(codeteacher)
  }

  const obj = { keyA: 0 }
  useEffect(() => {
    callApiLoginValid()
  }, [obj.keyA])
  return (
    <Fragment>
      <Header
        imagePros={imagePros}
        welcomeProps={welcomeProps}
      />
      <Navigation menu={menuDefault} />
      <Notificar
        state={objNotificar.state}
        message={objNotificar.message}
      />
      {children}
      <Footer />
    </Fragment>
  )
}

export default index
