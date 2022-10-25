import Navigations from './Navigation'
import { ComponentStory, ComponentMeta } from '@storybook/react'
// import { menuDefault } from '../../../../consts/menu'

export default {
  title: 'Molecules/Navigation',
  component: Navigations,
} as ComponentMeta<typeof Navigations>

const Template: ComponentStory<typeof Navigations> = (args) => (
  <Navigations {...args} />
)

export const Navigation = Template.bind({})

Navigation.args = {
  menu: [
    {
      label: 'Sesiones de clase',
      link: '#',
      child: [
        {
          label: 'Horario',
          link: '#',
          child: [],
        },
        {
          label: 'Para Hoy',
          link: '#',
          child: [],
        },
      ],
    },
    {
      label: 'Registro de notas',
      link: '#',
      child: [],
    },
    {
      label: 'Reportes',
      link: '#',
      child: [],
    },
    {
      label: 'Herramientas',
      link: '#',
      child: [],
    },
    {
      label: 'Documentos',
      link: '#',
      child: [],
    },
  ],
}
