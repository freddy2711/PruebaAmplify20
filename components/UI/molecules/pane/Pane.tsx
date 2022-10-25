import { ReactNode } from 'react'

export interface Props {
  children?: ReactNode
  classname?: string
}

const Pane = ({ children, classname }: Props) => {
  return <div className={classname}>{children}</div>
}

export default Pane
