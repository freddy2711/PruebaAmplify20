import { ComponentStory, ComponentMeta } from '@storybook/react'
import Loaders from './Loader'

export default {
  title: 'Atomos/Loader',
  component: Loaders,
} as ComponentMeta<typeof Loaders>

const Template: ComponentStory<typeof Loaders> = (args) => <Loaders {...args} />

export const Loader = Template.bind({})

Loader.args = {
  loading: true,
}
