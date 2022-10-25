import WelcomeBlockMol from './Welcome'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Molecules/WelcomeBlock',
  component: WelcomeBlockMol,
} as ComponentMeta<typeof WelcomeBlockMol>

const Template: ComponentStory<typeof WelcomeBlockMol> = (args) => (
  <WelcomeBlockMol {...args} />
)

export const WelcomeBlock = Template.bind({})

WelcomeBlock.args = {
  labelWelcome: {
    children: 'Bienvenido Profesor(a): VILLAR',
    classname: 'badge bg-light text-dark',
  },
  anchorDatPer: {
    href: '#',
    children: 'Datos Personales',
    classname: 'badge bg-info text-white text-decoration-none me-1',
  },
  anchorLogout: {
    href: '#',
    children: 'Salir del Sistema',
    classname: 'badge bg-danger text-white text-decoration-none',
  },
  classname: 'text-center text-md-end nolies o',
}
