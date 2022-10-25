import { ComponentStory, ComponentMeta } from '@storybook/react'
import Label from './Label'

export default {
  title: 'Atomos/Label',
  component: Label,
} as ComponentMeta<typeof Label>

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />

export const Labels = Template.bind({})

Labels.args = {
  classname: '',
  children: 'Texto de prueba',
  idFor: '',
}
