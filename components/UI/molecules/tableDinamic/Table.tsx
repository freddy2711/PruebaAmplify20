import { ReactNode } from 'react'
import { MDBDataTable } from 'mdbreact'

export interface Props {
  listData: {
    [rest: string]: any
    clickEvent?: (() => void) | undefined
  }[]
  columns: {
    [rest: string]: any
    label?: string | undefined
    field?: string | undefined
    sort?: string | undefined
    width?: number | undefined
    searchable?: boolean | undefined
  }[]
  pagination?: boolean
  entries?: number
  scrollX?: boolean
  children?: ReactNode
  order?: any
}

const Table = ({
  listData,
  columns,
  pagination = false,
  entries = 10,
  scrollX = false,
  order = [],
}: Props) => {
  return (
    <MDBDataTable
      noBottomColumns
      striped
      bordered
      hover
      order={order}
      entries={entries}
      displayEntries={false}
      /*       entriesLabel={`Total: ${listData?.length} ${
        listData?.length === 1 ? 'Horario' : 'Horarios'
      } cargados. Mostrar`} */
      /*   entriesOptions={Array.from(
        new Set([5, 10, 20, 50, 100, listData?.length])
      ).filter((cantidad) => cantidad <= listData?.length)} */
      info={false}
      noRecordsFoundLabel={'No se encuentran Registros.'}
      paginationLabel={['<', '>']}
      paging={pagination}
      searching={true}
      searchLabel="Buscar"
      responsiveXl={true}
      scrollX={scrollX}
      data={{
        columns,
        rows: listData,
      }}
      responsive={false}
    />
  )
}

export default Table
