import { ReactNode } from 'react'
import { Tabs } from 'react-bootstrap'

export interface Props {
  children: Array<ReactNode> | ReactNode
  defaultActiveKey: string | number
}

const TabBlock = ({ children, defaultActiveKey }: Props) => {
  return (
    <Tabs
      id="uncontrolled-tab-example"
      className="mb-3"
      defaultActiveKey={defaultActiveKey}
    >
      {children}
    </Tabs>
  )
}

export default TabBlock
