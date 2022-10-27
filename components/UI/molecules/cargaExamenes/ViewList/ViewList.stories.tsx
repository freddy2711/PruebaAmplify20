/* eslint-disable storybook/prefer-pascal-case */
import ViewList from './ViewList'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Molecules/cargaExamenes/ViewList',
  component: ViewList,
} as ComponentMeta<typeof ViewList>

const Template: ComponentStory<typeof ViewList> = (args) => (
  <ViewList {...args}>
    <option value="0">example 1</option>
    <option value="1">example 2</option>
    <option value="2">example 3</option>
  </ViewList>
)

export const viewList = Template.bind({})
