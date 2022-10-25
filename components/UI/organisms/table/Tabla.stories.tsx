import Tabla from './Tabla'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Organisms/Table',
  component: Tabla,
} as ComponentMeta<typeof Tabla>

const Template: ComponentStory<typeof Tabla> = (args) => <Tabla {...args} />

export const Table = Template.bind({})

Table.args = {
  classname: 'm-3',
  children: 'tabla',
}
