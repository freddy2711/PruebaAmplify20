import { ReactNode } from 'react'
import classNames from 'classnames'
import styles from './index.module.scss'
import { extractClass } from '../../../../helpers/helpers'

export interface Props {
  id: string
  children: ReactNode
  classname?: string
  action?: string
  method?: 'post' | 'get'
  onsubmit?: any
}

const Form = ({
  id,
  children,
  classname = '',
  action = '',
  method = 'post',
  onsubmit,
}: Props) => {
  const classprops: string = classNames(extractClass(styles, classname))

  return (
    <form
      id={id}
      className={classprops}
      action={action}
      method={method}
      onSubmit={onsubmit}
    >
      {children}
    </form>
  )
}

export default Form
