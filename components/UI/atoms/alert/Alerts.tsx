import { ReactNode } from 'react'
import { Alert } from 'react-bootstrap'
import styles from './index.module.scss'
import { extractClass } from '../../../../helpers/helpers'
import { ThemeColors } from '../../../../consts/theme'

export interface Props {
  variant?: typeof ThemeColors[number]
  children: ReactNode
  classname?: string
}

const Alerta = ({
  variant = 'info',
  children = 'Alerta',
  classname = '',
}: Props) => {
  const classprops: string = extractClass(styles, classname)
  return (
    <Alert
      variant={variant}
      className={classprops}
    >
      {children}
    </Alert>
  )
}

export default Alerta
