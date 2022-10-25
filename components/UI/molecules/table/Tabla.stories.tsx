import Thead from './thead/Thead'
import Tbody from './tbody/Tbody'
import { storiesOf } from '@storybook/react'

storiesOf('Molecules/Table', module).add('Thead', () => (
  <Thead>
    <tr>
      <th>titulos</th>
      <th>titulos</th>
      <th>titulos</th>
      <th>titulos</th>
      <th>titulos</th>
      <th>titulos</th>
    </tr>
  </Thead>
))

storiesOf('Molecules/Table', module).add('Tbody', () => (
  <Tbody>
    <tr>
      <th>info</th>
      <th>info</th>
      <th>info</th>
      <th>info</th>
      <th>info</th>
      <th>info</th>
    </tr>
    <tr>
      <th>info</th>
      <th>info</th>
      <th>info</th>
      <th>info</th>
      <th>info</th>
      <th>info</th>
    </tr>
  </Tbody>
))
