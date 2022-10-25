import TabChild from './TabChild'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Tabs } from 'react-bootstrap'

export default {
  title: 'Molecules/Tab',
  component: TabChild,
} as ComponentMeta<typeof TabChild>

const Template: ComponentStory<typeof TabChild> = (args) => (
  <Tabs>
    <TabChild {...args} />
  </Tabs>
)

export const Tab = Template.bind({})

Tab.args = {
  title: 'Contact',
  eventKey: 'Contact',
}
