import RadioButton from './RadioButton'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Atomos/RadioButton',
  component: RadioButton,
} as ComponentMeta<typeof RadioButton>

const Template: ComponentStory<typeof RadioButton> = (args) => <RadioButton {...args} />

export const Radio = Template.bind({})