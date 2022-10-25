import TabBlock from './TabBlock'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import TabChild from '../../molecules/tabchild/TabChild'

export default {
  title: 'Organisms/Tabs',
  component: TabBlock,
} as ComponentMeta<typeof TabBlock>

const Template: ComponentStory<typeof TabBlock> = (args) => (
  <TabBlock {...args} />
)

export const Tabs = Template.bind({})

Tabs.args = {
  children: [
    <TabChild
      title="hola"
      eventKey="hola"
      key={'hola'}
    >
      <p>Bloque de contenido</p>
    </TabChild>,
    <TabChild
      title="holas"
      eventKey="holas"
      key={'holas'}
    >
      <p>Bloque de contenido 2</p>
    </TabChild>,
  ],
  defaultActiveKey: 'hola',
}
