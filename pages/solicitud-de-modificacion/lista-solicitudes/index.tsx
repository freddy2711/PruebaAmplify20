import { useState } from 'react'
import Loader from './../../../components/UI/atoms/loader/Loader'
import Label from './../../../components/UI/atoms/label/Label'
import Anchor from './../../../components/UI/atoms/anchor/Anchor'
import styles from './../../../components/templates/sesiones/anteriores/Anteriores.module.scss'
import dynamic from 'next/dynamic'
// import Select from '../../components/UI/atoms/select/Select'

const TableDinamic = dynamic(
  () => import('../../../components/UI/molecules/tableDinamic/Table'),
  {
    ssr: false,
  }
)

const Alerta = dynamic(() => import('../../../components/UI/atoms/alert/Alerts'), {
  ssr: false,
})

const index = () => {

	const dataInit = [
		{
			id: "219935",
			FechaSolicitud: "28/09/2019 08:33",
			Clase: "2199351035",
			Curso: "SUPPLY CHAIN MANAGEMENT",
			Carrer: "Dip. en Gestión Logística",
			Estado: "Pendiente",
			detalle: "SUPP6101",
		},
	]

	const [Loading, setloading] = useState(false)
	const [dataList, setDataList] = useState(dataInit)

	const COLUMNS = [
    { label: 'ID', field: 'id', sort: 'asc' },
    { label: 'Fecha Solicitud', field: 'FechaSolicitud', sort: 'asc' },
    { label: 'Clase', field: 'Clase', sort: 'asc' },
    { label: 'Curso', field: 'Curso', sort: 'asc' },
    { label: 'Carrer', field: 'Carrer', sort: 'asc' },
    { label: 'Estado', field: 'Estado', sort: 'asc' },
    { label: 'detalle', field: 'detalle', sort: 'asc' },
  ]

	return (
		<div className={styles.contenido}>
      <Loader loading={Loading} />
      <div className={styles.content}>
        <div className={styles.titulo}>
          <Label classname="text-warning h5 mt-3 mb-3">
            Solicitudes de modificación de notas
          </Label>
        </div>
        <hr />

				<div className={styles.tabla}>
					<TableDinamic
						columns={COLUMNS}
						listData={dataList}
					/>
				</div>

				<div>
					<small>
						<strong>Tipo docente: (P)</strong> Principal /{' '}
						<strong>(S)</strong> Sustituto / <strong>(A)</strong> Auxiliar
					</small>
				</div>
      </div>
    </div>
	)
}

export default index