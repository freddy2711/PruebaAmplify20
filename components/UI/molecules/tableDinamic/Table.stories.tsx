import Tables from './Table'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Molecules/TableDinamic',
  component: Tables,
} as ComponentMeta<typeof Tables>

const Template: ComponentStory<typeof Tables> = (args) => <Tables {...args} />

export const TableDinamic = Template.bind({})

TableDinamic.args = {
  columns: [],
  listData: [],
}
