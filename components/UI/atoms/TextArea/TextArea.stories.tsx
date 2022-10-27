import TextArea from './TextArea'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Atomos/TextArea',
  component: TextArea,
} as ComponentMeta<typeof TextArea>

const Template: ComponentStory<typeof TextArea> = (args) => (
  <TextArea {...args} />
)

export const Area = Template.bind({})
