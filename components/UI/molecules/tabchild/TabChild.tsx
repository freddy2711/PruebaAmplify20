import React, { ReactNode } from 'react'
import { Tab } from 'react-bootstrap'

export interface Props {
  children?: ReactNode
  title: string
  eventKey: string
}

const TabChild: React.FC<Props> = ({ title, eventKey, children }: Props) => {
  return (
    <Tab
      title={title}
      eventKey={eventKey}
    >
      {children}
    </Tab>
  )
}

export default TabChild
