import Panel from './Pane'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Molecules/Pane',
  component: Panel,
} as ComponentMeta<typeof Panel>

const Template: ComponentStory<typeof Panel> = (args) => <Panel {...args} />

export const Pane = Template.bind({})

export const PaneInfo = () => (
  <Panel classname="row">
    <div className="col-12 col-md-7 mt-3">inputs aqui</div>
    <div className="col-12 col-md-5 mt-3"> carga imagen</div>
  </Panel>
)
