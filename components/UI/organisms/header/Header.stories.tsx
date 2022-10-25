import Header from './Header'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Organisms/Header',
  component: Header,
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />

export const HeaderOrg = Template.bind({})

HeaderOrg.args = {
  imagePros: {
    src: 'https://via.placeholder.com/150x76',
    alt: 'test',
    classname: '',
  },
  welcomeProps: {
    labelWelcome: {
      children: 'Bienvenido Profesor(a): VILLAR',
      classname: 'badge bg-light text-dark mb-2',
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
    classname: 'text-center text-md-end',
  },
}
