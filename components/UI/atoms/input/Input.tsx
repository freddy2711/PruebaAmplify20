import classNames from 'classnames'
import { CSSProperties } from 'react'
import { extractClass } from '../../../../helpers/helpers'
import styles from './index.module.scss'

type Props = {
  type: string
  name: string
  id: string
  classname?: string
  onchange?: any
  disabled?: boolean
  placeholder?: string
  defaultValue?:string
  style?:CSSProperties
  min?:any
  max?:any
  value?:any
  readOnly?:any
  onClick?:any
}

const Input = ({
  type,
  name,
  id,
  classname = '',
  onchange,
  disabled = false,
  placeholder = 'placeholder',
  defaultValue,
  style,
  min,
  max,
  value,
  readOnly,
  onClick
}: Props) => {
  const classprops: string = classNames(
    'form-control',
    extractClass(styles, classname)
  )

  return (
    <input
      id={id}
      type={type}
      name={name}
      className={classprops}
      disabled={disabled}
      placeholder={placeholder}
      onChange={onchange}
      defaultValue={defaultValue}
      style={style}
      min={min}
      max={max}
      value={value}
      readOnly={readOnly}
      onClick={onClick}
    />
  )
}

export default Input
