import Label from '../../components/UI/atoms/label/Label'
import styles from './../../components/templates/default/Default.module.scss'
import Loader from '../../components/UI/atoms/loader/Loader'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
const Alerta = dynamic(() => import('../../components/UI/atoms/alert/Alerts'), {
  ssr: false,
})
const Index = (props: any) => {
  // eslint-disable-next-line no-unused-vars
  const [Loading, setloading] = useState(false)
  useEffect(() => {
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
  return (
    <div className={styles.contenido}>
      <Loader loading={Loading} />
      <div className={styles.content}>
        <div className={styles.titulo}>
          <Label classname="text-warning h5 mt-3 mb-3">Página Permisos</Label>
        </div>
        <hr />
        <div className={styles.alertContent}>
          <Alerta
            classname="w-100"
            variant="info"
          >
            <p className="mb-0">
              <b>Nota:</b>
              <br />
              <ul>
                <li>No tiene permisos para visualizar la pagina.</li>
                <li>favor ingresar a otra vista del menu.</li>
              </ul>
            </p>
          </Alerta>
        </div>
      </div>
    </div>
  )
}

export default Index
