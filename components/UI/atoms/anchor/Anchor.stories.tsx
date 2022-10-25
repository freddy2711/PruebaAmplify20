import Anchor from './Anchor'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Atomos/Anchor',
  component: Anchor,
} as ComponentMeta<typeof Anchor>

const Template: ComponentStory<typeof Anchor> = (args) => <Anchor {...args} />

export const AnchorLink = Template.bind({})

AnchorLink.args = {
  href: '#',
  children: 'Link test',
  targetBlank: false,
  classname: '',
}
