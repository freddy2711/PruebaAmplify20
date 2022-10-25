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
  children?: ReactNode
}

const Table = ({ listData, columns }: Props) => {
  return (
    <MDBDataTable
      noBottomColumns
      striped
      bordered
      hover
      entries={10}
      displayEntries={false}
      entriesLabel={`Total: ${listData?.length} ${
        listData?.length === 1 ? 'Horario' : 'Horarios'
      } cargados. Mostrar`}
      entriesOptions={Array.from(
        new Set([5, 10, 20, 50, 100, listData?.length])
      ).filter((cantidad) => cantidad <= listData?.length)}
      info={false}
      noRecordsFoundLabel={'No se encuentran Registros.'}
      paginationLabel={['<', '>']}
      paging={false}
      searching={true}
      searchLabel="Buscar"
      data={{
        columns,
        rows: listData,
      }}
      responsive={true}
    />
  )
}

export default Table
