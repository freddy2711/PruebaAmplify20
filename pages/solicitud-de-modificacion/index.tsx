import { useState } from 'react'
import Loader from '../../components/UI/atoms/loader/Loader'
import Label from '../../components/UI/atoms/label/Label'
import Anchor from '../../components/UI/atoms/anchor/Anchor'
import styles from './../../components/templates/sesiones/anteriores/Anteriores.module.scss'
import dynamic from 'next/dynamic'
// import Select from '../../components/UI/atoms/select/Select'

const TableDinamic = dynamic(
  () => import('../../components/UI/molecules/tableDinamic/Table'),
  {
    ssr: false,
  }
)

const Alerta = dynamic(() => import('../../components/UI/atoms/alert/Alerts'), {
  ssr: false,
})

const index = () => {

	const dataInit = [
		{
			select: (<Anchor
			href="/solicitud-de-modificacion/registrar-solicitud"
			onClick={(e) => console.log()}
			classname="text-decoration-none text-center w-100 d-block"
		>
			seleccionar
		</Anchor>),
			SemCodigo: "219935",
			SedCodigo: "LC0",
			ClaCodigo: "2199351035",
			TipoDoc: "P",
			CurCodigo: "SUPP6101",
			CurNombre: "SUPPLY CHAIN MANAGEMENT",
			CarNombre: "Dip. en Gestión Logística",
		},
		{
			select: (<Anchor
			href=""
			onClick={(e) => console.log()}
			classname="text-decoration-none text-center w-100 d-block"
		>
			seleccionar
		</Anchor>),
			SemCodigo: "219935",
			SedCodigo: "LC0",
			ClaCodigo: "2199351035",
			TipoDoc: "P",
			CurCodigo: "SUPP6101",
			CurNombre: "SUPPLY CHAIN MANAGEMENT",
			CarNombre: "Dip. en Gestión Logística",
		},
		{
			select: (<Anchor
			href=""
			onClick={(e) => console.log()}
			classname="text-decoration-none text-center w-100 d-block"
		>
			seleccionar
		</Anchor>),
			SemCodigo: "219935",
			SedCodigo: "LC0",
			ClaCodigo: "2199351035",
			TipoDoc: "P",
			CurCodigo: "SUPP6101",
			CurNombre: "SUPPLY CHAIN MANAGEMENT",
			CarNombre: "Dip. en Gestión Logística",
		},
		{
			select: (<Anchor
			href=""
			onClick={(e) => console.log()}
			classname="text-decoration-none text-center w-100 d-block"
		>
			seleccionar
		</Anchor>),
			SemCodigo: "219935",
			SedCodigo: "LC0",
			ClaCodigo: "2199351035",
			TipoDoc: "P",
			CurCodigo: "SUPP6101",
			CurNombre: "SUPPLY CHAIN MANAGEMENT",
			CarNombre: "Dip. en Gestión Logística",
		},
		{
			select: (<Anchor
			href=""
			onClick={() => console.log()}
			classname="text-decoration-none text-center w-100 d-block"
		>
			seleccionar
		</Anchor>),
			SemCodigo: "219935",
			SedCodigo: "LC0",
			ClaCodigo: "2199351035",
			TipoDoc: "P",
			CurCodigo: "SUPP6101",
			CurNombre: "SUPPLY CHAIN MANAGEMENT",
			CarNombre: "Dip. en Gestión Logística",
		},
	]

	const [Loading, setloading] = useState(false)
	const [dataList, setDataList] = useState(dataInit)

	const COLUMNS = [
    { label: 'Seleccionar clase', field: 'select', sort: 'asc' },
    { label: 'Semestre', field: 'SemCodigo', sort: 'asc' },
    { label: 'Sede', field: 'SedCodigo', sort: 'asc' },
    { label: 'Clase', field: 'ClaCodigo', sort: 'asc' },
    { label: 'Tipo Doc.', field: 'TipoDoc', sort: 'asc' },
    { label: 'Cód. curso', field: 'CurCodigo', sort: 'asc' },
    { label: 'Nombre del curso', field: 'CurNombre', sort: 'asc' },
    { label: 'Carrera', field: 'CarNombre', sort: 'asc' },
  ]

	return (
		<div className={styles.contenido}>
      <Loader loading={Loading} />
      <div className={styles.content}>
        <div className={styles.titulo}>
          <Label classname="text-warning h5 mt-3 mb-3">
            Solicitud de modificación de notas
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