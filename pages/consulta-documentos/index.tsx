import Label from '../../components/UI/atoms/label/Label'
import styles from './../../components/templates/default/Default.module.scss'
import Loader from '../../components/UI/atoms/loader/Loader'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import { apiLogin, apiTokens } from '../api'
import {
  convertStringToDate,
  convertStringToDateTime,
  urlGestor,
} from '../../consts/storageConst'
const Alerta = dynamic(() => import('../../components/UI/atoms/alert/Alerts'), {
  ssr: false,
})
const Index = (props: any) => {
  // eslint-disable-next-line no-unused-vars
  const [Loading, setloading] = useState(false)
  const [userKetGestore, setUserKetGestore] = useState('')
  const dateTimeNow = `${convertStringToDate(
    new Date()
  )} ${convertStringToDateTime(new Date())}`

  useEffect(() => {
    callToken()
    // if (props.data === null) {
    //   const codeteacher = get(USER_SESSION)
    //   if (
    //     codeteacher === null ||
    //     codeteacher === undefined ||
    //     codeteacher === ''
    //   ) {
    //     window.location.href = `${process.env.NEXT_PUBLIC_SERVER_URL_ENTIDADES}${process.env.NEXT_PUBLIC_SERVER_URL_REDIRECT}`
    //   }
    // } else {
    //   if (
    //     props.tk !== undefined ||
    //     (props.tk !== null && props.data !== null) ||
    //     props.data !== undefined
    //   ) {
    //     if (
    //       get(TOKEN_IN) === null ||
    //       get(TOKEN_IN) === false ||
    //       get(TOKEN_IN) === undefined
    //     ) {
    //       const obj = {
    //         token: props.tk,
    //         userCode: props.data,
    //         classCode: props.data,
    //       }
    //       InserToken(obj)
    //     }
    //   }
    // }
  }, [])
  const callToken = async () => {
    setloading(true)
    const token: any = await apiLogin.logintokenValid()
    const rs = await apiLogin.loginDataUser(token?.user)
    setloading(false)
    const req = {
      userCode: rs[0].codeUser,
      Periodo: '@Consultas_Documento',
      userName: token.user,
      fechaHora: dateTimeNow,
      state: true,
    }
    const result: any = await apiTokens.ByTokenAutentica(req)
    setUserKetGestore(
      `${urlGestor.consultas}${result.setupInfo.AccountSecretKey}`
    )
  }
  return (
    <div className={styles.contenido}>
      <Loader loading={Loading} />
      <div className={styles.content}>
        <div className={styles.titulo}>
          <Label classname="text-warning h5 mt-3 mb-3">
            Practicas de Campo
          </Label>
        </div>
        <hr />
        <div className={styles.alertContent}>
          <Alerta classname="w-100 h-100">
            <p className="mb-0">
              <iframe
                id="inlineFrameExample"
                style={{ width: '100%', height: '500px' }}
                width="100%"
                height="500px"
                title="Inline Frame Example"
                src={userKetGestore}
              ></iframe>
            </p>
          </Alerta>
        </div>
      </div>
    </div>
  )
}

export default Index
