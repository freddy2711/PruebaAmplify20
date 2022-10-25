import Editor from './index'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Molecules/QuillEditor',
  component: Editor,
} as ComponentMeta<typeof Editor>

const Template: ComponentStory<typeof Editor> = () => <Editor />

export const QuillEditor = Template.bind({})
