import { useState, useEffect } from 'react'
import AsyncSelect from 'react-select'
import Modals from './../../../components/UI/atoms/modal/Modal'
import Form from './../../../components/UI/molecules/form/Form'
import Input from './../../../components/UI/atoms/input/Input'
import Button from './../../../components/UI/atoms/button/Button'
import { useDispatch, useSelector } from 'react-redux'
import dynamic from 'next/dynamic'
import moment from 'moment'

import { paisInstitucion } from './../../../redux/actions/guardarActions'
import { saveEstudiosAction } from './../../../redux/actions/infoGeneralAction'

const FormCheck: any = dynamic(() => import('react-bootstrap/FormCheck'), {
  ssr: false,
})

const parseJsonDate = (datein: any) => {
  // return moment(datein).format('DD/MM/YYYY')
  return moment(datein).format('yyyy-MM-DD')
}

const defaultValor = (id: string, arr: any) => {
  const ar = arr.filter((item: any) => parseInt(item.value) === parseInt(id))
  return ar[0]
}

const ModalEstudios = ({ modalShowEstudio, setModalShowEstudio }: any) => {
  const dispatch = useDispatch()
  const info = useSelector((state: any) => state?.infoGeneral?.infoGeneral)
  const infoextra = useSelector((state: any) => state?.infoExtra?.infoExtra)
  const infoeditar = useSelector(
    (state: any) => state?.infoEditar?.editEstudio
  )

  const loadingextraestudios = useSelector(
    (state: any) => state?.infoExtra?.loadingExtraEstudios
  )

  const saveestudiosaction = (datos: any) =>
    dispatch<any>(saveEstudiosAction(datos))

  const initPais = [{ value: '0', label: '-- Seleccionar País --' }]
  const [cboPais, setCboPais] = useState(initPais)

  const initNivelAca = [
    { value: '0', label: '-- Seleccionar Nivel Académico --' },
  ]
  const [cboNivelAca, setcboNivelAca] = useState(initNivelAca)

  const initArea = [{ value: '0', label: '-- Seleccionar Área de Estudio --' }]
  const [areasEstudio, setAreasEstudio] = useState(initArea)

  const initEstado = [
    { value: '0', label: '-- Seleccionar Estado de Estudio --' },
  ]
  const [cboEstado, setcboEstado] = useState(initEstado)

  useEffect(() => {
    const getCombos = async () => {
      if (infoextra.paises) {
        const paises = infoextra?.paises.map((item: any) => ({
          label: item?.Name,
          value: item?.IdCountry,
        }))

        const nivelaca = infoextra?.nivelAcademico.map((item: any) => ({
          label: item?.Name,
          value: item?.IdLevelAcademic,
        }))

        const areasestudio = infoextra?.clasificacionCarrera.map(
          (item: any) => ({
            label: item?.CareerName,
            value: item?.CareerClassificationCode,
          })
        )

        const cboestado = infoextra?.estadoEstudio.map((item: any) => ({
          label: item?.Name,
          value: item?.IdStateStudy,
        }))

        setcboEstado([...initEstado, ...cboestado])

        setAreasEstudio([...initArea, ...areasestudio])

        setcboNivelAca([...initNivelAca, ...nivelaca])

        setCboPais([...initPais, ...paises])
      }
    }

    if (Object.keys(infoextra).length !== 0) {
      if (loadingextraestudios && loadingextraestudios === true) {
        getCombos()
      }
    }
  }, [loadingextraestudios])

  useEffect(() => {
    if (Object.keys(infoeditar).length !== 0) {
      // setedit(true)

      const obj = {
				txtNombreEstudio: infoeditar?.nombreEstudio,
				ddlPaisEstudio: infoeditar?.Pais.idPais,
				ddlInstitucion: infoeditar?.Institucion.idInstitucion,
				chkInstitucion: infoeditar?.noSeEncontroInstitucion,
				txtInstitucion: infoeditar?.codigoClasificacionCarrera,
				ddlClasificacionCarrera: infoeditar?.ClasificacionCarrera.codigoClasificacionCarrera,
				ddlNivelAcademico: infoeditar?.NivelAcademico.idNivelAcademico,
				ddlEstadoEstudio: infoeditar?.EstadoEstudio.idEstadoEstudio,
				txtFechaInicio: infoeditar?.fechaInicio,
				txtFechaFin: infoeditar?.fechaFin,
				chkEstudiaActualmente: infoeditar?.estudiaActualmente,
				id: infoeditar?.idEstudio,
      }

			console.log(obj);

      setFormEstudios(obj)
    }
  }, [infoeditar])

  const initialFormEstudios = {
    txtNombreEstudio: '',
    ddlPaisEstudio: '0',
    ddlInstitucion: '0',
    chkInstitucion: false,
    txtInstitucion: '',
    ddlClasificacionCarrera: '0',
    ddlNivelAcademico: '0',
    ddlEstadoEstudio: '0',
    txtFechaInicio: '',
    txtFechaFin: '',
    chkEstudiaActualmente: false,
    id: null,
  }

  const [formEstudios, setFormEstudios] = useState<any>(initialFormEstudios)

  const {
    txtNombreEstudio,
    ddlPaisEstudio,
    ddlInstitucion,
    chkInstitucion,
    txtInstitucion,
    ddlClasificacionCarrera,
    ddlNivelAcademico,
    ddlEstadoEstudio,
    txtFechaInicio,
    txtFechaFin,
    chkEstudiaActualmente,
    id,
  } = formEstudios

  const initCboInsPais = [
    { value: '0', label: '-- Seleccionar Institucion --' },
  ]
  const [cboInstPais, setCboInstPais] = useState(initCboInsPais)
  const [cboLoading, setCboLoading] = useState(false)

  const paisinstitucion = (datos: any) => dispatch<any>(paisInstitucion(datos))

  const handleChange = async (e: any, id: string) => {
    switch (id) {
      case 'ddlPaisEstudio': {
        setCboInstPais([])
        setCboLoading(true)
        console.log(e)
        const { value } = e

        if (value === '0') return

        const resp = await paisinstitucion(value)

        if (resp) {
          const options = resp.map((item: any) => ({
            label: item?.InstitutionName,
            value: item?.IdInstitution,
          }))
          setCboInstPais([...initCboInsPais, ...options])
          setCboLoading(false)
        }

        setFormEstudios({
          ...formEstudios,
          [id]: value,
        })

        break
      }
      case 'ddlInstitucion':
      case 'ddlClasificacionCarrera':
      case 'ddlNivelAcademico':
      case 'ddlEstadoEstudio': {
        console.log(e)
        const { value } = e
        setFormEstudios({
          ...formEstudios,
          [id]: value,
        })
        break
      }

      case 'chkInstitucion': {
        const value = e.target.checked
        setFormEstudios({
          ...formEstudios,
          [id]: value,
          ddlInstitucion: '0',
          txtInstitucion: '',
        })
        break
      }

      case 'chkEstudiaActualmente': {
        const value = e.target.checked
        setFormEstudios({
          ...formEstudios,
          [id]: value,
          txtFechaFin: '',
        })
        break
      }

      default: {
        const { name, value } = e.target
        setFormEstudios({
          ...formEstudios,
          [name]: value,
        })
        break
      }
    }
  }

  const saveEstudiosHandle = async (e: any) => {
    e.preventDefault()
    console.log('saveNewEL')

    const obj = {
      IdEstudio: id,
      IdPersona: info.idPersona,
      NombreEstudio: txtNombreEstudio,
      IdInstitucion:
        parseInt(ddlInstitucion) !== 0 ? parseInt(ddlInstitucion) : '',
      IdPais: parseInt(ddlPaisEstudio) !== 0 ? parseInt(ddlPaisEstudio) : '',
      IdEstadoEstudio:
        parseInt(ddlEstadoEstudio) !== 0 ? parseInt(ddlEstadoEstudio) : '',
      IdNivelAcademico:
        parseInt(ddlNivelAcademico) !== 0 ? parseInt(ddlNivelAcademico) : '',
      FechaInicio: txtFechaInicio,
      FechaFin: txtFechaFin,
      EstudiaActualmente: chkEstudiaActualmente,
      rutaFile: null,
      CodigoClasificacionCarrera: ddlClasificacionCarrera,
      Activo: '1',
      audit_usuario_creacion: 'RVI',
      EsValidadoSunedu: false,
      UsuarioValidaSunedu: null,
      FechaValidaSunedu: null,
      NoSeEncontroInstitucion: chkInstitucion,
      NombreInstitucion: txtInstitucion !== '' ? txtInstitucion : null,
      audit_usuario_actualizacion: null,
    }

    await saveestudiosaction(obj)

    setModalShowEstudio(false)
    setFormEstudios(initialFormEstudios)
  }

  return (
    <Modals
      size="lg"
      show={modalShowEstudio}
      onHide={() => setModalShowEstudio(false)}
      titulo={'Estudios'}
    >
      {loadingextraestudios === true ? (
        <Form
          id="addEstudios"
          onsubmit={(e: any) => saveEstudiosHandle(e)}
        >
          <div className="form-group row mt-3">
            <div className="col-md-4 col-12">
              País de Institución donde estudió :
            </div>
            <div className="col-md-8 col-12">
              <AsyncSelect
                options={cboPais}
                id="ddlPaisEstudio"
                instanceId="ddlPaisEstudio"
                name="ddlPaisEstudio"
                defaultValue={defaultValor(ddlPaisEstudio, cboPais)}
                onChange={(e: any) => handleChange(e, 'ddlPaisEstudio')}
								value={defaultValor(ddlPaisEstudio, cboPais)}
              />
            </div>
          </div>
          <div className="form-group row mt-3">
            <div className="col-md-4 col-12">Institución</div>
            <div className="col-md-8 col-12">
              <AsyncSelect
                options={cboInstPais}
                id="ddlInstitucion"
                instanceId="ddlInstitucion"
                name="ddlInstitucion"
                defaultValue={defaultValor(ddlInstitucion, cboInstPais)}
                isLoading={cboLoading}
                onChange={(e: any) => handleChange(e, 'ddlInstitucion')}
                isDisabled={cboLoading || chkInstitucion}
								value={defaultValor(ddlInstitucion, cboInstPais)}
              />
            </div>
          </div>
          <div className="form-group row mt-3">
            <div className="col-md-4 col-12"></div>
            <div className="col-md-8 col-12">
              <FormCheck
                inline
                label="No Encuentro Institución"
                name="chkInstitucion"
                type="checkbox"
                id="chkInstitucion"
                onChange={(e: any) => handleChange(e, 'chkInstitucion')}
                defaultChecked={chkInstitucion}
              />
            </div>
          </div>
          {chkInstitucion && (
            <div className="form-group row mt-3">
              <div className="col-md-4 col-12">Institución</div>
              <div className="col-md-8 col-12">
                <Input
                  id="txtInstitucion"
                  type="text"
                  name="txtInstitucion"
                  classname="text-center"
                  placeholder=""
                  value={txtInstitucion}
                  onchange={(e: any) => handleChange(e, 'txtInstitucion')}
                />
              </div>
            </div>
          )}

          <div className="form-group row mt-3">
            <div className="col-md-4 col-12">Nombre de Estudio / Carrera</div>
            <div className="col-md-8 col-12">
              <Input
                id="txtNombreEstudio"
                type="text"
                name="txtNombreEstudio"
                classname="text-center"
                placeholder=""
                value={txtNombreEstudio}
                onchange={(e: any) => handleChange(e, 'txtNombreEstudio')}
              />
            </div>
          </div>
          <div className="form-group row mt-3">
            <div className="col-md-4 col-12">Área de Estudio</div>
            <div className="col-md-8 col-12">
              <AsyncSelect
                options={areasEstudio}
                id="ddlClasificacionCarrera"
                instanceId="ddlClasificacionCarrera"
                name="ddlClasificacionCarrera"
                defaultValue={defaultValor(
                  ddlClasificacionCarrera,
                  areasEstudio
                )}
                onChange={(e: any) =>
                  handleChange(e, 'ddlClasificacionCarrera')
                }
								value={defaultValor(
                  ddlClasificacionCarrera,
                  areasEstudio
                )}
              />
            </div>
          </div>
          <div className="form-group row mt-3">
            <div className="col-md-4 col-12">Nivel Académico</div>
            <div className="col-md-8 col-12">
              <AsyncSelect
                options={cboNivelAca}
                id="ddlNivelAcademico"
                instanceId="ddlNivelAcademico"
                name="ddlNivelAcademico"
                defaultValue={defaultValor(ddlNivelAcademico, cboNivelAca)}
                onChange={(e: any) => handleChange(e, 'ddlNivelAcademico')}
								value={defaultValor(ddlNivelAcademico, cboNivelAca)}
              />
            </div>
          </div>
          <div className="form-group row mt-3">
            <div className="col-md-4 col-12">Estado</div>
            <div className="col-md-8 col-12">
              <AsyncSelect
                options={cboEstado}
                id="ddlEstadoEstudio"
                instanceId="ddlEstadoEstudio"
                name="ddlEstadoEstudio"
                defaultValue={defaultValor(ddlEstadoEstudio, cboEstado)}
                onChange={(e: any) => handleChange(e, 'ddlEstadoEstudio')}
								value={defaultValor(ddlEstadoEstudio, cboEstado)}
              />
            </div>
          </div>
          <div className="form-group row mt-3">
            <div className="col-md-4 col-12">Fecha Inicio</div>
            <div className="col-md-8 col-12">
              <Input
                id="txtFechaInicio"
                type="date"
                name="txtFechaInicio"
                classname="text-center"
                placeholder=""
                value={parseJsonDate(txtFechaInicio)}
                onchange={(e: any) => handleChange(e, 'txtFechaInicio')}
              />
            </div>
          </div>
          <div className="form-group row mt-3">
            <div className="col-md-4 col-12">Fecha Fin</div>
            <div className="col-md-8 col-12">
              <Input
                id="txtFechaFin"
                type="date"
                name="txtFechaFin"
                classname="text-center"
                value={parseJsonDate(txtFechaFin)}
                onchange={(e: any) => handleChange(e, 'txtFechaFin')}
                disabled={chkEstudiaActualmente}
              />
            </div>
          </div>
          <div className="form-group row mt-3">
            <div className="col-md-4 col-12"></div>
            <div className="col-md-8 col-12">
              <FormCheck
                inline
                label="¿Estudia Actualmente?"
                name="chkEstudiaActualmente"
                type="checkbox"
                id="chkEstudiaActualmente"
                onChange={(e: any) => handleChange(e, 'chkEstudiaActualmente')}
                defaultChecked={chkEstudiaActualmente}
              />
            </div>
          </div>

          <div className="col-12 mt-3 text-center">
            <Button
              type="submit"
              variant="secondary"
              classname="btn-sm"
            >
              Guardar
            </Button>
          </div>
        </Form>
      ) : (
        'Cargando...'
      )}
    </Modals>
  )
}

export default ModalEstudios
