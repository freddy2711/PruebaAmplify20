import classNames from 'classnames'
import { ReactNode } from 'react'
import styles from './index.module.scss'

const style: { [key: string]: string } = styles

export interface Props {
  classname?: string
  children: ReactNode
  idFor?: string
}

const Label = ({ classname = '', children = 'label text', idFor }: Props) => {
  const classprops: string = classNames(
    style[classname] ? style[classname] : classname
  )

  return (
    <label
      htmlFor={idFor}
      className={classprops}
    >
      {children}
    </label>
  )
}

export default Label
