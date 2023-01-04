import Label from '../../../atoms/label/Label'
import Tabla from '../../../organisms/table/Tabla'
import Thead from '../../table/thead/Thead'
import Tbody from '../../table/tbody/Tbody'
import styles from './ViewTable.module.scss'

export interface Props {
  textLabel: string
  theadColums: string[]
  tbodyRows: any[]
  active?: number
  Onclick?: any
}

const ViewTable = ({
  textLabel,
  tbodyRows,
  theadColums,
  active,
  Onclick,
}: Props) => {
  return (
    <div className={styles.viewTableConten}>
      <Label>{textLabel}</Label>
      {theadColums.length === 0 ? (
        <div className={styles.FormatedTable}>
          <div className={styles.bloqueLineal}></div>
          <label className={styles.TableNoData}>No se encontraron datos.</label>
        </div>
      ) : (
        <div>
          {tbodyRows.length === 0 ? (
            <Tabla>
              <Thead>
                {theadColums.map((x, y) => (
                  <th
                    key={y}
                    scope="col"
                  >
                    {x}
                  </th>
                ))}
              </Thead>
              <Tbody>
                <tr>
                  <td
                    style={{ background: '#FFFFFF' }}
                    colSpan={4}
                  >
                    No se encontraron datos.
                  </td>
                </tr>
              </Tbody>
            </Tabla>
          ) : (
            <Tabla>
              <Thead>
                {theadColums.map((x, y) => (
                  <th
                    key={y}
                    scope="col"
                  >
                    {x}
                  </th>
                ))}
              </Thead>
              <Tbody>
                {active === 0 ? (
                  <tr>
                    <td
                      onClick={Onclick}
                      key={active}
                    >
                      <label className={styles.LinkStyle}>Seleccionar</label>
                    </td>
                    {tbodyRows.map((x, y) => (
                      <td key={y}>{x}</td>
                    ))}
                  </tr>
                ) : (
                  <tr>
                    {tbodyRows.map((x, y) => (
                      <td key={y}>{x}</td>
                    ))}
                  </tr>
                )}
              </Tbody>
            </Tabla>
          )}
        </div>
      )}
    </div>
  )
}

export default ViewTable
