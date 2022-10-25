import { ReactNotifications, Store } from 'react-notifications-component'
import { TITLE_EMERG } from '../../../../consts/storageConst'
import 'react-notifications-component/dist/theme.css'
import { useEffect } from 'react'

export interface Props {
  state?: boolean
  message?: string
}

const Notificar = ({ state, message }: Props) => {
  useEffect(() => {
    if (state) {
      Store.addNotification({
        title: TITLE_EMERG,
        message,
        type: 'success',
        insert: 'top',
        container: 'top-right',
        animationIn: ['animate__animated', 'animate__fadeIn'],
        animationOut: ['animate__animated', 'animate__fadeOut'],
        dismiss: {
          duration: 35000,
          onScreen: true,
        },
      })
    }
  })
  return <ReactNotifications />
}

export default Notificar
