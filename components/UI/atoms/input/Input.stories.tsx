import Inputs from './Input'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Atomos/Input',
  component: Inputs,
} as ComponentMeta<typeof Inputs>

const Template: ComponentStory<typeof Inputs> = (args) => <Inputs {...args} />

export const Input = Template.bind({})
