import React from 'react'
import styles from './Tabla.module.scss'
import Table from 'react-bootstrap/Table'
import { extractClass } from '../../../../helpers/helpers'

export interface Props {
  classname?: string
  children: React.ReactNode
  stripe?: boolean
}

const Tabla = ({ children, classname = '', stripe = true }: Props) => {
  const classprops: string = extractClass(styles, classname)
  return (
    <Table
      striped={stripe}
      className={`${classprops} ${styles.tablaDefault}`}
    >
      {children}
    </Table>
  )
}

export default Tabla
