import { ReactNode } from 'react'
import classNames from 'classnames'
import { ListGroup } from 'react-bootstrap'
import { extractClass } from '../../../../helpers/helpers'
import styles from './index.module.scss'

interface Props {
  children?: ReactNode
  classname?: string
}

const ItemList = ({ classname = '', children }: Props) => {
  const classprops: string = classNames(extractClass(styles, classname))
  return <ListGroup.Item className={classprops}>{children}</ListGroup.Item>
}

export default ItemList
