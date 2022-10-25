import Forms from './Form'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Molecules/Form',
  component: Forms,
} as ComponentMeta<typeof Forms>

const Template: ComponentStory<typeof Forms> = (args) => (
  <Forms {...args}>Agregar botones y inputs aqui.</Forms>
)
export const Form = Template.bind({})
