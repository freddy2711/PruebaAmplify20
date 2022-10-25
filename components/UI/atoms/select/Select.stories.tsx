import Selects from './Select'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Atomos/Select',
  component: Selects,
} as ComponentMeta<typeof Selects>

const Template: ComponentStory<typeof Selects> = (args) => (
  <Selects {...args}>
    <option>a</option>
    <option>b</option>
    <option>c</option>
    <option>d</option>
  </Selects>
)

export const Select = Template.bind({})
