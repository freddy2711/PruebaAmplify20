import Consulta from './index'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Molecules/SoporteVirtualTd',
  component: Consulta,
} as ComponentMeta<typeof Consulta>

const Template: ComponentStory<typeof Consulta> = () => <Consulta />

export const SoporteVirtualTd = Template.bind({})
