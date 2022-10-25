import React from 'react'
import styles from './Thead.module.scss'

export interface Props {
  children: React.ReactNode
}

const Thead = ({ children }: Props) => {
  return (
    <thead className={styles.thead}>
      <tr>{children}</tr>
    </thead>
  )
}

export default Thead
