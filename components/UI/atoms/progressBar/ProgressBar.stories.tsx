import ProgressBars from './ProgressBars'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ThemeColors } from '../../../../consts/theme'

export default {
  title: 'Atomos/ProgressBar',
  component: ProgressBars,
  argTypes: {
    variant: {
      control: 'select',
      options: ThemeColors,
    },
    now: {
      control: {
        type: 'range',
        min: 0,
        msx: 100,
      },
    },
  },
} as ComponentMeta<typeof ProgressBars>

const Template: ComponentStory<typeof ProgressBars> = (args) => (
  <ProgressBars {...args} />
)

export const ProgressBar = Template.bind({})

ProgressBar.args = {
  now: 60,
  variant: 'info',
  label: 'Avance',
}
