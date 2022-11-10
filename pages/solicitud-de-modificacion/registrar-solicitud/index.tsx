import { useState } from 'react'
import React from 'react'
import Tabla from './../../../components/UI/organisms/table/Tabla'
import Thead from './../../../components/UI/molecules/table/thead/Thead'
import Tbody from './../../../components/UI/molecules/table/tbody/Tbody'
import Button from './../../../components/UI/atoms/button/Button'
import Loader from './../../../components/UI/atoms/loader/Loader'
import Label from './../../../components/UI/atoms/label/Label'
import styles from './../../../components/templates/sesiones/anteriores/Anteriores.module.scss'
import dynamic from 'next/dynamic'
import Anchor from '../../../components/UI/atoms/anchor/Anchor'
import Select from '../../../components/UI/atoms/select/Select'

const TableDinamic = dynamic(
  () => import('./../../../components/UI/molecules/tableDinamic/Table'),
  {
    ssr: false,
  }
)

const index = () => {

	const dataInit = [
		{
			select: (<input type="checkbox"
			className="text-decoration-none text-center w-100 d-block"
		/>),
			SemCodigo: "219935",
			paterno: "AGREDA",
			materno: "REYES",
			nombres: "JHON DIEGO",
			carrera: "Adm. y Gestión Comercial",
			matricula: "1",
			nota: "16",
			notaMod: <input type="text" value="16"/>,
			observacion: <textarea/>,
		},
		{
			select: (<input type="checkbox"
			className="text-decoration-none text-center w-100 d-block"
		/>),
			SemCodigo: "219935",
			paterno: "AGREDA",
			materno: "REYES",
			nombres: "JHON DIEGO",
			carrera: "Adm. y Gestión Comercial",
			matricula: "1",
			nota: "16",
			notaMod: <input type="text" value="16"/>,
			observacion: <textarea/>,
		},
		{
			select: (<input type="checkbox"
			className="text-decoration-none text-center w-100 d-block"
		/>),
			SemCodigo: "219935",
			paterno: "AGREDA",
			materno: "REYES",
			nombres: "JHON DIEGO",
			carrera: "Adm. y Gestión Comercial",
			matricula: "1",
			nota: "16",
			notaMod: <input type="text" value="16"/>,
			observacion: <textarea/>,
		},
		{
			select: (<input type="checkbox"
			className="text-decoration-none text-center w-100 d-block"
		/>),
			SemCodigo: "219935",
			paterno: "AGREDA",
			materno: "REYES",
			nombres: "JHON DIEGO",
			carrera: "Adm. y Gestión Comercial",
			matricula: "1",
			nota: "16",
			notaMod: <input type="text" value="16"/>,
			observacion: <textarea/>,
		},
		{
			select: (<input type="checkbox"
			className="text-decoration-none text-center w-100 d-block"
		/>),
			SemCodigo: "219935",
			paterno: "AGREDA",
			materno: "REYES",
			nombres: "JHON DIEGO",
			carrera: "Adm. y Gestión Comercial",
			matricula: "1",
			nota: "16",
			notaMod: <input type="text" value="16"/>,
			observacion: <textarea/>,
		},
		{
			select: (<input type="checkbox"
			className="text-decoration-none text-center w-100 d-block"
		/>),
			SemCodigo: "219935",
			paterno: "AGREDA",
			materno: "REYES",
			nombres: "JHON DIEGO",
			carrera: "Adm. y Gestión Comercial",
			matricula: "1",
			nota: "16",
			notaMod: <input type="text" value="16"/>,
			observacion: <textarea/>,
		},
		{
			select: (<input type="checkbox"
			className="text-decoration-none text-center w-100 d-block"
		/>),
			SemCodigo: "219935",
			paterno: "AGREDA",
			materno: "REYES",
			nombres: "JHON DIEGO",
			carrera: "Adm. y Gestión Comercial",
			matricula: "1",
			nota: "16",
			notaMod: <input type="text" value="16"/>,
			observacion: <textarea/>,
		},
		
	]

	const [Loading, setloading] = useState(false)
	const [dataList, setDataList] = useState(dataInit)

	const COLUMNS = [
    { label: 'Seleccionar', field: 'select', sort: 'asc' },
    { label: 'Código', field: 'SemCodigo', sort: 'asc' },
    { label: 'Ap. Paterno', field: 'paterno', sort: 'asc' },
    { label: 'Ap. Materno', field: 'materno', sort: 'asc' },
    { label: 'Nombres', field: 'nombres', sort: 'asc' },
    { label: 'Carrera', field: 'carrera', sort: 'asc' },
    { label: 'Nro. matrícula', field: 'matricula', sort: 'asc' },
    { label: 'Nota(*)', field: 'nota', sort: 'asc' },
    { label: 'Nota a modificar', field: 'notaMod', sort: 'asc' },
    { label: 'Observacion', field: 'observacion', sort: 'asc' },
  ]

	return (
		<div className={styles.contenido}>
      <Loader loading={Loading} />
      <div className={styles.content}>

        <div className={styles.titulo}>
          <Label classname="text-warning h5 mt-3 mb-3">
            Registro de solicitud de modificación de notas
          </Label>
        </div>

        <hr />

				<div>
					<Button
						type="button"
						classname="mb-3"
						variant="secondary"
						onclick={() => {location.href = '/solicitud-de-modificacion'} }
					>
						Regresar
					</Button>
				</div>

				<hr />

				<div
          className={styles.tablaRA}
          style={{ textAlign: 'left' }}
        >
          <Tabla classname={styles.tablaRA}>
            <Thead>
              <th
                scope="col"
                colSpan={2}
              >
                DATOS DE LA SESIÓN DE CLASE
              </th>
            </Thead>
            <Tbody>
              <tr>
                <td style={{ fontWeight: 'bold' }}>Sede</td>
                <td>LC0</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold' }}>Código de curso</td>
                <td>SUPP6101</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold' }}>Nombre del curso</td>
                <td>SUPPLY CHAIN MANAGEMENT</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold' }}>Clase</td>
                <td>2199351035</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold' }}>
                  Dueño de la sesión de clase
                </td>
                <td>RVI</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold' }}>Tipo de docente</td>
                <td>P</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold' }}>Tope faltas</td>
                <td>1</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold' }}>Fecha y hora de inicio</td>
                <td>28/09/2019 08:33</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold' }}>Fecha y hora de término</td>
                <td>28/09/2019 13:00</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold' }}>Tipo de sesión</td>
                <td>N</td>
              </tr>
            </Tbody>
          </Tabla>
        </div>

				<hr />

				<div>
					<label>Seleccione una nota</label>
					<Select id='nota'>
						<option>Seleccione</option>
						<option>T1 - TRABAJO 1</option>
						<option>T2 - TRABAJO 2</option>
						<option>T3 - TRABAJO 3</option>
					</Select>
				</div>

				<hr />

				<div className={styles.tabla}>
					<TableDinamic
						columns={COLUMNS}
						listData={dataList}
					/>
				</div>

				<div className={styles.botones}>
          <div>
            <Button
              type="button"
              classname=""
              variant="primary"
              disabled={false}
              onclick={() => console.log()}
            >
              Registrar
            </Button>
          </div>
          <div>
            <Button
              type="button"
              classname=""
              variant="secondary"
              onclick={() => console.log()}
              disabled={false}
            >
              Cancelar
            </Button>
          </div>
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