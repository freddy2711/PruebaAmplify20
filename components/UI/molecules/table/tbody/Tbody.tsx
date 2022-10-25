import React from 'react'

export interface Props {
  children: React.ReactNode
}

const Tbody = ({ children }: Props) => {
  return <tbody>{children}</tbody>
}

export default Tbody
