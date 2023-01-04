import { ReactNode } from 'react'
import styles from './index.module.scss'
import classNames from 'classnames'

const style: { [key: string]: string } = styles

export interface Props {
  href: string
  children: ReactNode
  classname?: string
  targetBlank?: boolean
  onClick?: (e: any) => any
}

const Anchor = ({
  href,
  children,
  targetBlank = false,
  classname = '',
  onClick,
}: Props) => {
  const classprops: string = classNames(
    style[classname] ? style[classname] : classname
  )

  return (
    <a
      href={href}
      target={targetBlank ? '_blank' : ''}
      rel="noreferrer"
      className={classprops}
      onClick={onClick}
    >
      {children}
    </a>
  )
}

export default Anchor
