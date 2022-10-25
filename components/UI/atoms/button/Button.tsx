import { ReactNode } from 'react'
import classNames from 'classnames'
import styles from './index.module.scss'
import { extractClass } from '../../../../helpers/helpers'
import { ThemeColors, Sizes } from '../../../../consts/theme'

const style: { [key: string]: string } = styles

export interface Props {
  children: ReactNode
  type: 'button' | 'submit'
  variant?: typeof ThemeColors[number]
  classname?: string
  size?: typeof Sizes[number]
  disabled?: boolean
  onclick?: any
  name?: string
}

const Button = ({
  children = 'Guardar',
  type = 'button',
  classname = '',
  variant = 'btn-default',
  size = 'medium',
  disabled = false,
  onclick,
  name,
}: Props) => {
  const typeClass = `btn-${variant}`
  const classprops: string = classNames(
    'btn',
    typeClass,
    extractClass(styles, classname),
    style[size]
  )

  return (
    <button
		  name={name}
      type={type}
      className={classprops}
      onClick={onclick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
