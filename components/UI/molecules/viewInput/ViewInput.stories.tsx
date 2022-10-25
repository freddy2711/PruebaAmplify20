import { storiesOf } from '@storybook/react'
import ViewInput from './ViewInput'

storiesOf('Molecules/viewInput', module).add('view-Input', () => (
  <ViewInput texLabel={'demo'} typeInput={''} nameInput={''} idInput={''}  />
))