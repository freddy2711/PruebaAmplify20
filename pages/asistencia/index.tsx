import { useState, useEffect } from 'react'
import Alerta from './../../components/UI/atoms/alert/Alerts'
import Button from './../../components/UI/atoms/button/Button'
import BotonesAsistencia from './../../components/UI/molecules/asistencia/BotonesAsistencia'
import styles from './../../components/templates/asistencia/ver/VerAsistencia.module.scss'
import Label from './../../components/UI/atoms/label/Label'
import dynamic from 'next/dynamic'
import { get, remove, set } from 'local-storage'
import Loader from './../../components/UI/atoms/loader/Loader'
import Swal from 'sweetalert2'
import Router from 'next/router'
import moment from 'moment'
import {
  CierreDeSesionExitoso,
  enviarSolicitud,
} from './../../helpers/asistenciaHelpers'

import { apiAsistencia } from './../../pages/api'

import {
  CONTROL_CLASE_ID,
  DUENO_SESSION,
  CLASE_ID,
  VALIDAR,
  TIPO_ASISTENCIA,
  REGSOL,
  REGASI,
  VERASI,
  SEMESTERID,
  DESABLEDSESSIONACLOSE,
} from './../../consts/storageConst'

const TableDinamic = dynamic(
  () => import('./../../components/UI/molecules/tableDinamic/Table'),
  {
    ssr: false,
  }
)

const COLUMNS = [
  { label: 'Asistencia', field: 'select', sort: 'asc' },
  { label: 'Cód. alumno', field: 'AluCodigo', sort: 'asc' },
  { label: 'Ap. paterno', field: 'AluPaterno', sort: 'asc' },
  { label: 'Ap. materno', field: 'AluMaterno', sort: 'asc' },
  { label: 'Nombres', field: 'AluNombres', sort: 'asc' },
  { label: 'Carrera', field: 'CarNombre', sort: 'asc' },
  { label: 'Vez', field: 'MadeNroVeces', sort: 'asc' },
  { label: 'Clase', field: 'ClaCodigo', sort: 'asc' },
  { label: 'Faltas', field: 'NroFaltas', sort: 'asc' },
  { label: 'Estado', field: 'MadeEstado', sort: 'asc' },
  { label: 'Tipo Clase', field: 'ClaTipo', sort: 'asc' },
]

const index = () => {
  const [datos, setDatos] = useState([])
  const [datosAsis, setDatosAsis] = useState([])
  const [Loading, setloading] = useState(false)
  const [ctrlClassId, setCtrlClassId] = useState('')
  const [btnDsable, setbtnDsable] = useState({
    btnSave: false,
    btnCancel: false,
  })
  const DUENO = get(DUENO_SESSION)
  const tipoAistencia: any = get(TIPO_ASISTENCIA)

  const btnValidate = () => {
    if (tipoAistencia === VERASI) {
      setbtnDsable({
        btnSave: true,
        btnCancel: false,
      })
      return true
    } else return false
  }

  const addBtns = (datos: any) => {
    const items = datos.map((item: any, index: number) => ({
      ...item,
      select: (
        <BotonesAsistencia
          idAlu={item.AluCodigo}
          key={index}
          datos={datos}
          setDatos={setDatosAsis}
          defaultCheck={item.Asistencia}
          disabledbtn={btnValidate()}
        />
      ),
    }))

    return items
  }

  const cancelOperation = () => {
    // remove(CONTROL_CLASE_ID)
    // remove(TIPO_ASISTENCIA)
    remove(DESABLEDSESSIONACLOSE)
    window.history.go(-2)
  }

  useEffect(() => {
    setloading(true)
    const controlClaseId: string = get(CONTROL_CLASE_ID)
    setCtrlClassId(controlClaseId)
    console.log(controlClaseId)

    if (parseInt(controlClaseId) === 0) {
      window.history.go(-1)
      return
    }

    const listarAsistencia = async (ctrlClassId: string) => {
      try {
        const resp: any = await apiAsistencia.listarAsistencia(ctrlClassId)

				console.log('listarAsistencia__', resp.data)

				if(resp.data.length < 1){
					Swal.fire({
						title: 'Se Produjo un error',
						text: `Esta clase no tiene alumnos asignados.`,
						icon: 'warning',
						showCancelButton: false,
						confirmButtonColor: '#3085d6',
						confirmButtonText: 'OK',
					}).then((result) => {
						window.history.go(-2)
					})
				}

        const items = addBtns(resp.data)

        console.log('respItem__', items)

        setDatos(items)

        setloading(false)
      } catch (error) {
        console.log(error)
      }
    }

    if (controlClaseId === '') {
      switch (tipoAistencia) {
        case REGSOL:
          Router.push('/solicitud-de-marcacion')
          break

        case REGASI:
          Router.push('/sesiones-anteriores')
          break

        case VERASI:
          Router.push('/sesiones-anteriores')
          break

        default:
          Router.push('/')
          break
      }
    } else {
      listarAsistencia(controlClaseId)
    }

    setDatos([])
  }, [])

  const handleBtnGuardar = async () => {
    setloading(true)

    const tipoAistencia: any = get(TIPO_ASISTENCIA)

    const controlClaseId: string = get(CONTROL_CLASE_ID)

    const semesterId: any =
      get(SEMESTERID) && get(SEMESTERID) !== '' ? get(SEMESTERID) : 0

    let validaAsistencia

    switch (tipoAistencia) {
      case REGASI: {
        const afc = await apiAsistencia.AsistenciaEnFechasControl(
          controlClaseId
        )
        if (afc) {
          validaAsistencia = true
        } else {
          validaAsistencia = false
        }
        break
      }
      case REGSOL:
        validaAsistencia = true
        break
      default:
        validaAsistencia = true
        break
    }

    console.log(validaAsistencia)

		console.log('datosAsis___',datosAsis.length)

		if(datosAsis.length > 0){

			const datosAsisCont = datosAsis.length > 0
			console.log('datosAsisCont', datosAsisCont)

			if (validaAsistencia) {
				const getCountN = (arrai: Array<any>) => {
					// return datosAsis.map((item: any) => {
					return arrai.map((item: any) => {
						let countN = 0
						if (item.Asistencia === 'N') {
							countN = 1
							console.log('N')
						}
						return countN
					})
				}

				let AsistenciasNulas = []

				if (!datosAsisCont) {
					setDatosAsis(datos)
					AsistenciasNulas = getCountN(datos)
				} else {
					AsistenciasNulas = getCountN(datosAsis)
				}

				const conteo = AsistenciasNulas.filter((item) => item === 1)

				const contador = conteo.length

				if (contador > 0) {
					Swal.fire({
						title: 'Portal de Docentes',
						text: `Se encontraron registros con asistencia = N Indique A, T o F`,
						icon: 'warning',
						showCancelButton: false,
						confirmButtonColor: '#3085d6',
						confirmButtonText: 'OK',
					})

					setloading(false)
					return
				}
			}

			const xmlConstruct = (arrai: Array<any>) => {
				return arrai.map((item: any) => {
					const xmlAsis = `<asistencia 
						audit_usuario="${DUENO}" 
						s_alas_control="${item.Asistencia}" 
						s_cla_codigo="${item.ClaCodigo}" 
						s_alu_codigo="${item.AluCodigo}" 
						n_control_clase_id="${ctrlClassId}"
					/>
					`
					return xmlAsis
				})
			}

			let xmlFor

			if (!datosAsisCont) {
				xmlFor = xmlConstruct(datos)
			} else {
				xmlFor = xmlConstruct(datosAsis)
			}

			console.log(xmlFor)

			const xmldata = `<registro>${xmlFor.join('')}</registro>`

			console.log(xmldata)

			const xml = xmldata.replace(/ {2} |\r\n|\n|\r/gm, '')

			let respRegis

			switch (tipoAistencia) {
				case REGASI: {
					try {
						const date = moment().format('YYYY-MM-DD')
						const data: any = await apiAsistencia.registraAsistencia(
							ctrlClassId,
							xml,
							date,
							semesterId
						)

						respRegis = data
					} catch (error) {
						console.log(error)
					}

					break
				}
				case REGSOL: {
					try {
						const data: any = await apiAsistencia.registraAsistenciasolicitud(
							ctrlClassId,
							xml
						)
						respRegis = data
					} catch (error) {
						console.log(error)
					}

					break
				}
				default:
					break
			}

			console.log(respRegis)

			if (respRegis === 'OK' || respRegis === true) {
				try {
					if (tipoAistencia === REGSOL) {
						const cierreExito = await CierreDeSesionExitoso()

						if (cierreExito) {
							const sCodClase: string = get(CLASE_ID)
							const controlClaseId: string = get(CONTROL_CLASE_ID)
							await enviarSolicitud(controlClaseId, sCodClase)
						}
						set(VALIDAR, '1')
					}

					setloading(false)

					Swal.fire({
						title: 'Portal de Docentes',
						text: `El Registro de Asistencia se ha guardado con éxito`,
						icon: 'success',
						showCancelButton: false,
						confirmButtonColor: '#3085d6',
						confirmButtonText: 'OK',
					}).then((result) => {
						if (result.isDismissed === true || result.isConfirmed === true) {
							window.history.go(-2)
						}

						console.log(result)
					})
				} catch (error) {
					console.log(error)
				}

				// window.history.go(-2)
			}
			setloading(false)
		}else{
			setloading(false)
			Swal.fire({
				title: 'Se produjo un error',
				text: `No ha realizado ninguna selección de asistencia.`,
				icon: 'warning',
				showCancelButton: false,
				confirmButtonColor: '#3085d6',
				confirmButtonText: 'OK',
			})
		}
  }

  return (
    <div className={styles.contenido}>
      <Loader loading={Loading} />
      <div className={styles.content}>
        <div className={styles.titulo}>
          <Label classname="text-warning h5 mt-3 mb-3">
            Registro de asistencia
          </Label>
        </div>
        <hr />

        <div className={styles.alertaContent}>
          <Alerta
            classname="w-100"
            variant="info"
          >
            <p className="mb-0">
              <b>Nota:</b> &nbsp;Por defecto todos los alumnos no registran
              ningún estado de asistencia <b>(Asistencia = N)</b>. En listados
              grandes, ir grabando cada cierto tiempo.
            </p>
          </Alerta>
        </div>

        <div>
          <small>
            <strong>Indique: (A)</strong> Asistió / <strong>(T)</strong> Tardó /{' '}
            <strong>(F)</strong> Faltó.
          </small>
        </div>

        <hr />

        <div className={styles.tabla}>
          <TableDinamic
            columns={COLUMNS}
            listData={datos}
						pagination={false}
          />
        </div>

        <div className={styles.botones}>
          <div>
            <Button
              type="button"
              variant="primary"
              onclick={handleBtnGuardar}
              disabled={btnDsable.btnSave}
            >
              Guardar Registro
            </Button>
          </div>
          <div>
            <Button
              type="button"
              variant="secondary"
              disabled={btnDsable.btnCancel}
              onclick={cancelOperation}
            >
              Cancelar
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

index.title = 'Asistencia - Portal Docentes'

export default index
