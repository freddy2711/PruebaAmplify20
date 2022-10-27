import classNames from 'classnames'
import { ReactNode } from 'react'
import { Form } from 'react-bootstrap'
import { extractClass } from '../../../../helpers/helpers'
import styles from './index.module.scss'

export interface Props {
  id: string
  classname?: string
  name?: string
  value?: string
  onChange?: any
  disabled?: boolean
  children: ReactNode
  defaultValue?: any
  onClick?: any
}

const Select = ({
  id,
  classname = '',
  name,
  value,
  disabled = false,
  children,
  onChange,
  defaultValue,
  onClick,
}: Props) => {
  const classprops: string = classNames(
    'form-control',
    extractClass(styles, classname)
  )

  return (
    <Form.Select
      id={id}
      className={classprops}
      name={name}
      disabled={disabled}
      value={value}
      onChange={onChange}
      defaultValue={defaultValue}
      onClick={onClick}
    >
      {children}
    </Form.Select>
  )
}

export default Select
