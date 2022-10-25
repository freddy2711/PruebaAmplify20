import Editor from './index'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Molecules/EditorRich',
  component: Editor,
} as ComponentMeta<typeof Editor>

const Template: ComponentStory<typeof Editor> = () => <Editor />

export const EditorRich = Template.bind({})
