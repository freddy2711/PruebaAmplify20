import { storiesOf } from '@storybook/react'
import ViewTable from './ViewTable'

storiesOf('Molecules/viewTable', module).add('view-Table', () => (
  <ViewTable
    textLabel={'demo'}
    theadColums={['index', 'value']}
    tbodyRows={['response', 'response']}
  />
))
