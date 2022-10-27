import { ReactNode } from 'react'
import Select from '../../../atoms/select/Select'
import styles from './ViewList.module.scss'

export interface Props {
  id: string
  children: ReactNode
  title?: string
  subtitle?: string
  disabled?: boolean
  onChange?: any
  style?: any
  textAlter?: any
}

const ViewList = ({
  id,
  children,
  title,
  subtitle,
  disabled,
  onChange,
  style,
  textAlter,
}: Props) => {
  return (
    <div style={style}>
      <p className={styles.FormText}>{title}</p>
      <Select
        onChange={onChange}
        disabled={disabled}
        classname={styles.list}
        id={id}
      >
        {children}
      </Select>
      <p className={styles.Subtitle}>
        {subtitle} <span style={{ color: 'red' }}>{textAlter}</span>
      </p>
    </div>
  )
}

export default ViewList
