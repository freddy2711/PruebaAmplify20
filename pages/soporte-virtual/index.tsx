import { useState, useEffect } from 'react'
import styles from '../../components/templates/soporteVirtual/soporteVirtual.module.scss'
import Loader from '../../components/UI/atoms/loader/Loader'
import Label from '../../components/UI/atoms/label/Label'
import Tabla from '../../components/UI/organisms/table/Tabla'
import Thead from '../../components/UI/molecules/table/thead/Thead'
import ConsultaBlock from './../../components/UI/molecules/consultaBlock'
import { apiSoporteVirtual } from '../api'
import dynamic from 'next/dynamic'
import Anchor from '../../components/UI/atoms/anchor/Anchor'
import { get } from 'local-storage'

import { USER_SESSION } from '../../consts/storageConst'

const Tbody = dynamic(
  () => import('../../components/UI/molecules/table/tbody/Tbody'),
  {
    ssr: false,
  }
)

const index = () => {
  const [Loading, setloading] = useState(false)
  const [list, setList] = useState([])

  const teacherCode = get(USER_SESSION)

  useEffect(() => {
    setloading(true)
    const getConsultas = async () => {
      try {
        const resp = await apiSoporteVirtual.consulta(teacherCode)
        // console.log(resp.data)
        setList(resp.data)
        setloading(false)
      } catch (error) {
        console.log(error)
      }
    }

    getConsultas()
  }, [])

  return (
    <div className={styles.contenido}>
      <Loader loading={Loading} />
      <div className={styles.content}>
        <div className={styles.titulo}>
          <Label classname="text-warning h5 mt-3 mb-3 text-center">
            Soporte Virtual UPN
          </Label>
        </div>
        <hr />

        <div className={styles.marco}>
          <div className={styles.contentBtn}>
            <Anchor
              href="/soporte-virtual/consulta"
              // type="button"
              // variant="primary"
              // size="medium"
              classname="m-auto mb-3 btn btn-primary text-white"
              // onclick={(e:any) => console.log(e)}
            >
              Nueva Consulta
            </Anchor>
          </div>

          <div className={`${styles.tabla} table table-responsive`}>
            <Tabla classname="table-bordered">
              <Thead>
                <th
                  scope="col"
                  colSpan={1}
                  className="bg-dark text-white text-start"
                >
                  CONSULTA
                </th>
              </Thead>
              <Tbody>
                {list.length > 0 ? (
                  list.map((item: any, index: number) => (
                    <tr key={index}>
                      <ConsultaBlock item={item} />
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td>
                      <p>Cargando...</p>
                    </td>
                  </tr>
                )}
              </Tbody>
            </Tabla>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index
