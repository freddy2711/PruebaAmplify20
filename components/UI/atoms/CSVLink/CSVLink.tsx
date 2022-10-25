import { ReactNode } from 'react'
// import classNames from 'classnames'
// import styles from './index.module.scss'
import { CSVLink } from 'react-csv'

// const style: { [key: string]: string } = styles

export interface Props {
  data?: any
  headers?: any
  filename?: string
  children?: ReactNode
}

const ExportCSV = ({
  children = 'Guardar',
  data = [],
  headers = [],
  filename = 'medium.csv',
}: Props) => {
  return (
    <CSVLink
      data={data}
      headers={headers}
      filename={filename}
      separator=";"
    >
      {children}
    </CSVLink>
  )
}

export default ExportCSV
