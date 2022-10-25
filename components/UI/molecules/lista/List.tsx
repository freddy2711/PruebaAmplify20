import { ReactNode } from 'react'
import classNames from 'classnames'
import { ListGroup } from 'react-bootstrap'
import { extractClass } from '../../../../helpers/helpers'
import styles from './index.module.scss'

interface Props {
  classname?: string
  children?: ReactNode
}

const Lista = ({ children, classname = '' }: Props) => {
  const classprops: string = classNames(extractClass(styles, classname))

  return <ListGroup className={classprops}>{children}</ListGroup>
}

export default Lista
