import { storiesOf } from '@storybook/react'
import ViewList from './ViewList'

storiesOf('Molecules/viewList', module).add('view-List', () => (
  <ViewList
    texLabel={'demo'}
    optionSelect={[]}
  />
))
