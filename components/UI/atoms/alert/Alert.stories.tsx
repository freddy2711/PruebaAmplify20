import Alerts from './Alerts'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ThemeColors } from '../../../../consts/theme'

export default {
  title: 'Atomos/Alert',
  component: Alerts,
  argTypes: {
    variant: {
      control: 'select',
      options: ThemeColors,
    },
  },
} as ComponentMeta<typeof Alerts>

const Template: ComponentStory<typeof Alerts> = (args) => <Alerts {...args} />

export const Alert = Template.bind({})

Alert.args = {
  children: (
    <>
      <b>Nota:</b> (*) Llenar estas pestañas es obligatorio.
    </>
  ),
  variant: 'primary',
  classname: 'mb-0',
}
