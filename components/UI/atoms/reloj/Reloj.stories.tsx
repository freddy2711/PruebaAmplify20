import Relojs from './Reloj'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Atomos/Reloj',
  component: Relojs,
} as ComponentMeta<typeof Relojs>

const Template: ComponentStory<typeof Relojs> = () => <Relojs />

export const Reloj = Template.bind({})
