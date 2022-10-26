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
					target: false,
        },
        {
          label: 'Para Hoy',
          link: '#',
          child: [],
					target: false,
        },
      ],
			target: false,
    },
    {
      label: 'Registro de notas',
      link: '#',
      child: [],
			target: false,
    },
    {
      label: 'Reportes',
      link: '#',
      child: [],
			target: false,
    },
    {
      label: 'Herramientas',
      link: '#',
      child: [],
			target: false,
    },
    {
      label: 'Documentos',
      link: '#',
      child: [],
			target: false,
    },
  ],
}
