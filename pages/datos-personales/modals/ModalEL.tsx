import { useState, useEffect } from 'react'
import AsyncSelect from 'react-select'
import Modals from './../../../components/UI/atoms/modal/Modal'
import Form from './../../../components/UI/molecules/form/Form'
import Input from './../../../components/UI/atoms/input/Input'
import Button from './../../../components/UI/atoms/button/Button'
import { useDispatch, useSelector } from 'react-redux'
import dynamic from 'next/dynamic'
import moment from 'moment'

// ** ACTIONS IMPORTS
import { saveExpLab } from './../../../redux/actions/infoGeneralAction'
// import { ClearEdit } from './../../../redux/actions/editarActions'

const FormCheck: any = dynamic(() => import('react-bootstrap/FormCheck'), {
  ssr: false,
})

const FormControl: any = dynamic(() => import('react-bootstrap/FormControl'), {
  ssr: false,
})

const ModalEL = ({
  modalShow,
  setModalShow,
  formNEL,
  setFormNEL,
  initial,
}: any) => {
  const dispatch = useDispatch()

  const info = useSelector((state: any) => state?.infoGeneral?.infoGeneral)
  const infoeditar = useSelector((state: any) => state?.infoEditar?.editExpLap)
  const infoextra = useSelector((state: any) => state?.infoExtra?.infoExtra)

  /*   const getindustry = () => dispatch<any>(getIndustry())
  const getareapuestoaction = () => dispatch<any>(getAreaPuestoAction())
  const getinstituciones = () => dispatch<any>(getInstituciones()) */

  const saveexplab = (datos: any) => dispatch<any>(saveExpLab(datos))
  // const saveedit = (datos: any) => dispatch<any>(saveEditExpLab(datos))
  // ClearEdit
  // const clearEdit = () => dispatch<any>(ClearEdit())

  const [cboPais, setCboPais] = useState([
    { value: '0', label: '-- Seleccionar País --' },
  ])

  const initCbInstitucion = [
    { value: '0', label: '-- Seleccionar Institucion --' },
  ]

  const [cboInstitucion, setCboInstitucion] = useState(initCbInstitucion)

  const [industrias, setIndustrias] = useState([
    { value: '0', label: '-- Seleccionar Industria --' },
  ])

  const [areasCargo, setAreasCargo] = useState([
    { value: '0', label: '-- Seleccionar Área de Cargo --' },
  ])
  // const [edit, setedit] = useState(false)

  useEffect(() => {
    const getCombos = async () => {
      if (infoextra.paises) {
        const paises = infoextra?.paises.map((item: any) => ({
          label: item?.Name,
          value: item?.IdCountry,
        }))

        setCboPais([...cboPais, ...paises])
      }

      if (infoextra.industria) {
        // await getindustry()
        const options = infoextra?.industria.map((item: any) => ({
          label: item?.IndustryName,
          value: item?.IdIndustry,
        }))

        setIndustrias([...industrias, ...options])
      }

      if (infoextra.areaPuesto) {
        // await getareapuestoaction()
        const areas = infoextra?.areaPuesto.map((item: any) => ({
          label: item?.PostAreaName,
          value: item?.IdAreaPosition,
        }))

        setAreasCargo([...areasCargo, ...areas])
      }

      if (infoextra.institucion) {
        // await getinstituciones()

        const insti = infoextra?.institucion.map((item: any) => ({
          label: item?.InstitutionName,
          value: item?.IdInstitution,
        }))

        setCboInstitucion([...cboInstitucion, ...insti])
      }
    }

    if (
      Object.keys(infoextra).length !== 0 &&
      infoextra.institucion &&
      infoextra.institucion.length > 0 &&
      infoextra.areaPuesto &&
      infoextra.areaPuesto.length > 0 &&
      infoextra.paises &&
      infoextra.paises.length > 0 &&
      infoextra.industria &&
      infoextra.industria.length > 0
    ) {
      getCombos()
    }
  }, [infoextra])

  useEffect(() => {
    if (Object.keys(infoeditar).length !== 0) {
      // setedit(true)

      const obj = {
        rdbExperienciaDocente:
          infoeditar?.experienciaDocencia === true ? '1' : '0',
        txtEmpresa: infoeditar.empresa,
        ddlIndustria: infoeditar.Industria?.idIndustria,
        ddlInstitucionExperiencia: infoeditar?.Institucion?.iDInstitucion,
        ddlTipoDedicacionDocente:
          infoeditar?.TipoDedicacionDocente?.idTipoDedicacionDocente,
        chkInstitucionExperiencia: infoeditar?.noSeEncontroInstitucion,
        txtInstitucionExperiencia: infoeditar?.nombreInstitucion,
        ddlAreaPuesto: infoeditar?.AreaPuesto?.idAreaPuesto,
        txtCargo: infoeditar?.puesto,
        ddlPaisExperiencia: infoeditar?.Pais?.idPais,
        txtFechaInicioExperiencia: infoeditar?.fechaInicio,
        txtFechaFinExperiencia: infoeditar?.fechaFin,
        chkTrabajaActualmente: infoeditar?.trabajaActualmente,
        txtDescripcion: infoeditar?.descripcion,
        chkGenteACargo: infoeditar?.genteACargo,
        chkGestionaPresupuesto: infoeditar?.manejoPresupuesto,
        txtFechaFinExperienciaDisabled: infoeditar?.trabajaActualmente,
        id: infoeditar.idExperienciaLaboral,
      }

      setFormNEL(obj)
    }
  }, [infoeditar])

  const saveNewEL = async (e: any) => {
    e.preventDefault()
    console.log('saveNewEL')

    console.log(formNEL.ddlInstitucionExperiencia)

    const obj = {
      IdExperienciaLaboral: formNEL.id,
      IdPersona: info.idPersona,
      Puesto: formNEL.txtCargo,
      FechaInicio: formNEL.txtFechaInicioExperiencia,
      FechaFin: formNEL.txtFechaFinExperiencia,
      Empresa: formNEL.txtEmpresa,
      IdPais:
        parseInt(formNEL.ddlPaisExperiencia) !== 0
          ? parseInt(formNEL.ddlPaisExperiencia)
          : '',
      IdAreaPuesto:
        parseInt(formNEL.ddlAreaPuesto) !== 0
          ? parseInt(formNEL.ddlAreaPuesto)
          : '',
      IdIndustria:
        parseInt(formNEL.ddlIndustria) !== 0
          ? parseInt(formNEL.ddlIndustria)
          : '',
      Descripcion: formNEL.txtDescripcion,
      GenteACargo: formNEL.chkGenteACargo,
      ManejoPresupuesto: formNEL.chkGestionaPresupuesto,
      ExperienciaDocencia: formNEL.rdbExperienciaDocente,
      TrabajaActualmente: formNEL.chkTrabajaActualmente,
      IdInstitucion:
        parseInt(formNEL.ddlInstitucionExperiencia) !== 0
          ? parseInt(formNEL.ddlInstitucionExperiencia)
          : '',
      IdTipoDedicacionDocente:
        parseInt(formNEL.ddlTipoDedicacionDocente) !== 0
          ? parseInt(formNEL.ddlTipoDedicacionDocente)
          : '',
      NoSeEncontroInstitucion: formNEL.chkInstitucionExperiencia,
      NombreInstitucion: formNEL.txtInstitucionExperiencia,
      Activo: '1',
      audit_usuario_creacion: 'RVI',
      audit_usuario_actualizacion: '',
    }

    await saveexplab(obj)

    setModalShow(false)
    setFormNEL(initial)
  }

  const handleChangedd = (e: any, id: any) => {
    switch (id) {
      case 'rdbExperienciaDocente': {
        const { name, value } = e.target
        console.log({ name, value })
        setFormNEL({
          ...formNEL,
          rdbExperienciaDocente: value,
        })
        break
      }

      case 'ddlIndustria': {
        console.log(e)
        const { value } = e
        setFormNEL({
          ...formNEL,
          ddlIndustria: value,
        })
        break
      }

      case 'txtEmpresa': {
        const { value } = e.target
        setFormNEL({
          ...formNEL,
          txtEmpresa: value,
        })
        break
      }

      case 'ddlAreaPuesto': {
        console.log(e)
        const { value } = e
        setFormNEL({
          ...formNEL,
          ddlAreaPuesto: value,
        })
        break
      }

      case 'txtCargo': {
        console.log(e)
        const { value } = e.target
        setFormNEL({
          ...formNEL,
          txtCargo: value,
        })
        break
      }

      case 'ddlPaisExperiencia': {
        console.log(e)
        const { value } = e
        setFormNEL({
          ...formNEL,
          ddlPaisExperiencia: value,
        })
        break
      }

      case 'ddlInstitucionExperiencia': {
        console.log(e)
        const { value } = e
        setFormNEL({
          ...formNEL,
          ddlInstitucionExperiencia: value,
        })
        break
      }

      case 'ddlTipoDedicacionDocente': {
        console.log(e)
        const { value } = e
        setFormNEL({
          ...formNEL,
          ddlTipoDedicacionDocente: value,
        })
        break
      }

      case 'txtFechaInicioExperiencia': {
        const { value } = e.target
        setFormNEL({
          ...formNEL,
          txtFechaInicioExperiencia: value,
        })
        break
      }

      case 'txtFechaFinExperiencia': {
        const { value } = e.target
        setFormNEL({
          ...formNEL,
          txtFechaFinExperiencia: value,
        })
        break
      }

      case 'chkTrabajaActualmente': {
        const value = e.target.checked
        console.log(value)

        if (value) {
          setFormNEL({
            ...formNEL,
            chkTrabajaActualmente: value,
            txtFechaFinExperiencia: '',
            txtFechaFinExperienciaDisabled: true,
          })
        } else {
          setFormNEL({
            ...formNEL,
            chkTrabajaActualmente: value,
            txtFechaFinExperienciaDisabled: false,
          })
        }

        break
      }

      case 'txtDescripcion': {
        const { value } = e.target
        setFormNEL({
          ...formNEL,
          txtDescripcion: value,
        })
        break
      }

      case 'chkGenteACargo': {
        const value = e.target.checked
        setFormNEL({
          ...formNEL,
          chkGenteACargo: value,
        })
        break
      }

      case 'chkGestionaPresupuesto': {
        const value = e.target.checked
        setFormNEL({
          ...formNEL,
          chkGestionaPresupuesto: value,
        })
        break
      }

      case 'chkInstitucionExperiencia': {
        const value = e.target.checked
        setFormNEL({
          ...formNEL,
          chkInstitucionExperiencia: value,
        })
        break
      }

      case 'txtInstitucionExperiencia': {
        const { value } = e.target
        setFormNEL({
          ...formNEL,
          txtInstitucionExperiencia: value,
        })
        break
      }

      default:
        break
    }
  }

  const defaultValor = (id: string, arr: any) => {
    const ar = arr.filter((item: any) => parseInt(item.value) === parseInt(id))
    return ar[0]
  }

  const parseJsonDate = (datein: any) => {
    // return moment(datein).format('DD/MM/YYYY')
    return moment(datein).format('yyyy-MM-DD')
  }

  const cboTipoDedicacion = [
    { label: 'Independiente', value: '1' },
    { label: 'Medio Tiempo', value: '2' },
    { label: 'Tiempo Completo', value: '3' },
  ]

  return (
    <Modals
      size="lg"
      show={modalShow}
      onHide={() => setModalShow(false)}
      titulo={'Experiencia Laboral'}
    >
      <Form
        id="addEL"
        onsubmit={(e: any) => saveNewEL(e)}
      >
        <div className="form-group row mt-3">
          <div className="col-md-4 col-12">¿Experiencia en Docencia?</div>
          <div className="col-md-8 col-12 d-flex">
            <FormCheck
              label="Si"
              type="radio"
              name="rdbExperienciaDocente"
              id="ExpLabchkSi"
              value="1"
              className="custom-control custom-radio custom-control-inline me-3"
              onChange={(e: any) => handleChangedd(e, 'rdbExperienciaDocente')}
              checked={formNEL.rdbExperienciaDocente === '1'}
            />
            <FormCheck
              label="No"
              type="radio"
              name="rdbExperienciaDocente"
              id="ExpLabchkNo"
              value="0"
              className="custom-control custom-radio custom-control-inline"
              onChange={(e: any) => handleChangedd(e, 'rdbExperienciaDocente')}
              checked={formNEL.rdbExperienciaDocente === '0'}
            />
          </div>
        </div>

        {formNEL.rdbExperienciaDocente === true ||
        formNEL.rdbExperienciaDocente === '1' ? (
          <>
            <div className="form-group row mt-3">
              <div className="col-md-4 col-12">Institución</div>
              <div className="col-md-8 col-12">
                <AsyncSelect
                  filterOption={null}
                  options={cboInstitucion}
                  id="ddlInstitucionExperiencia"
                  instanceId="ddlInstitucionExperiencia"
                  name="ddlInstitucionExperiencia"
                  defaultValue={defaultValor(
                    formNEL.ddlInstitucionExperiencia,
                    cboInstitucion
                  )}
                  onChange={(e: any) =>
                    handleChangedd(e, 'ddlInstitucionExperiencia')
                  }
                  isDisabled={formNEL.chkInstitucionExperiencia}
                />
              </div>
            </div>
            <div className="form-group row mt-3">
              <div className="col-md-4 col-12"></div>
              <div className="col-md-8 col-12">
                <FormCheck
                  inline
                  label="No Encuentro Institución"
                  name="chkInstitucionExperiencia"
                  type="checkbox"
                  id="chkInstitucionExperiencia"
                  onChange={(e: any) =>
                    handleChangedd(e, 'chkInstitucionExperiencia')
                  }
                  defaultChecked={formNEL.chkInstitucionExperiencia}
                />
              </div>
            </div>
            <div className="form-group row mt-3">
              <div className="col-md-4 col-12">Institución</div>
              <div className="col-md-8 col-12">
                <Input
                  id="txtInstitucionExperiencia"
                  type="text"
                  name="txtInstitucionExperiencia"
                  classname="text-center"
                  placeholder=""
                  value={formNEL.txtInstitucionExperiencia}
                  onchange={(e: any) =>
                    handleChangedd(e, 'txtInstitucionExperiencia')
                  }
                />
              </div>
            </div>
            <div className="form-group row mt-3">
              <div className="col-md-4 col-12">Tipo Dedicación Docente</div>
              <div className="col-md-8 col-12">
                <AsyncSelect
                  options={cboTipoDedicacion}
                  id="ddlTipoDedicacionDocente"
                  instanceId="ddlTipoDedicacionDocente"
                  name="ddlTipoDedicacionDocente"
                  defaultValue={defaultValor(
                    formNEL.ddlTipoDedicacionDocente,
                    cboTipoDedicacion
                  )}
                  onChange={(e: any) =>
                    handleChangedd(e, 'ddlTipoDedicacionDocente')
                  }
                  value={defaultValor(
                    formNEL.ddlTipoDedicacionDocente,
                    cboTipoDedicacion
                  )}
                />
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="form-group row mt-3">
              <div className="col-md-4 col-12">Empresa</div>
              <div className="col-md-8 col-12">
                <Input
                  id="txtEmpresa"
                  type="text"
                  name="txtEmpresa"
                  classname="text-center"
                  placeholder=""
                  value={formNEL.txtEmpresa}
                  onchange={(e: any) => handleChangedd(e, 'txtEmpresa')}
                />
              </div>
            </div>
          </>
        )}

        <div className="form-group row mt-3">
          <div className="col-md-4 col-12">Industria</div>
          <div className="col-md-8 col-12">
            <AsyncSelect
              options={industrias}
              id="ddlIndustria"
              instanceId="ddlIndustria"
              name="ddlIndustria"
              defaultValue={defaultValor(formNEL.ddlIndustria, industrias)}
              onChange={(e: any) => handleChangedd(e, 'ddlIndustria')}
              value={defaultValor(formNEL.ddlIndustria, industrias)}
              /* isDisabled={
                formNEL.rdbExperienciaDocente === true ||
                formNEL.rdbExperienciaDocente === '1'
              } */
            />
          </div>
        </div>
        <div className="form-group row mt-3">
          <div className="col-md-4 col-12">Área de Cargo</div>
          <div className="col-md-8 col-12">
            <AsyncSelect
              options={areasCargo}
              id="ddlAreaPuesto"
              instanceId="ddlAreaPuesto"
              name="ddlAreaPuesto"
              defaultValue={defaultValor(formNEL.ddlAreaPuesto, areasCargo)}
              onChange={(e: any) => handleChangedd(e, 'ddlAreaPuesto')}
              value={defaultValor(formNEL.ddlAreaPuesto, areasCargo)}
              /* isDisabled={
                formNEL.rdbExperienciaDocente === true ||
                formNEL.rdbExperienciaDocente === '1'
              } */
            />
          </div>
        </div>
        <div className="form-group row mt-3">
          <div className="col-md-4 col-12">Cargo</div>
          <div className="col-md-8 col-12">
            <Input
              id="txtCargo"
              type="text"
              name="txtCargo"
              classname="text-center"
              placeholder=""
              onchange={(e: any) => handleChangedd(e, 'txtCargo')}
              value={formNEL.txtCargo}
            />
          </div>
        </div>
        <div className="form-group row mt-3">
          <div className="col-md-4 col-12">País</div>
          <div className="col-md-8 col-12">
            <AsyncSelect
              options={cboPais}
              id="ddlPaisExperiencia"
              instanceId="ddlPaisExperiencia"
              name="ddlPaisExperiencia"
              defaultValue={defaultValor(formNEL.ddlPaisExperiencia, cboPais)}
              onChange={(e: any) => handleChangedd(e, 'ddlPaisExperiencia')}
              value={defaultValor(formNEL.ddlPaisExperiencia, cboPais)}
            />
          </div>
        </div>
        <div className="form-group row mt-3">
          <div className="col-md-4 col-12">Fecha Inicio</div>
          <div className="col-md-8 col-12">
            <Input
              id="txtFechaInicioExperiencia"
              type="date"
              name="txtFechaInicioExperiencia"
              classname="text-center"
              value={parseJsonDate(formNEL.txtFechaInicioExperiencia)}
              onchange={(e: any) =>
                handleChangedd(e, 'txtFechaInicioExperiencia')
              }
            />
          </div>
        </div>
        <div className="form-group row mt-3">
          <div className="col-md-4 col-12">Fecha Fin</div>
          <div className="col-md-8 col-12">
            <Input
              id="txtFechaFinExperiencia"
              type="date"
              name="txtFechaFinExperiencia"
              classname="text-center"
              value={parseJsonDate(formNEL.txtFechaFinExperiencia)}
              onchange={(e: any) => handleChangedd(e, 'txtFechaFinExperiencia')}
              disabled={formNEL.txtFechaFinExperienciaDisabled}
            />
          </div>
        </div>
        <div className="form-group row mt-3">
          <div className="col-md-4 col-12"></div>
          <div className="col-md-8 col-12">
            <FormCheck
              inline
              label="¿Trabaja Actualmente?"
              name="chkTrabajaActualmente"
              type="checkbox"
              id="chkTrabajaActualmente"
              onChange={(e: any) => handleChangedd(e, 'chkTrabajaActualmente')}
              checked={formNEL.chkTrabajaActualmente}
            />
          </div>
        </div>
        <div className="form-group row mt-3">
          <div className="col-md-4 col-12">Descripción</div>
          <div className="col-md-8 col-12">
            <FormControl
              as="textarea"
              rows="5"
              id="txtDescripcion"
              name="txtDescripcion"
              placeholder=""
              onChange={(e: any) => handleChangedd(e, 'txtDescripcion')}
              value={formNEL.txtDescripcion}
            />
          </div>
        </div>
        <div className="form-group row mt-3">
          <div className="col-md-4 col-12">¿Tiene gente a Cargo?</div>
          <div className="col-md-8 col-12">
            <FormCheck
              inline
              label=""
              name="chkGenteACargo"
              type="checkbox"
              id="chkGenteACargo"
              onChange={(e: any) => handleChangedd(e, 'chkGenteACargo')}
              defaultChecked={formNEL.chkGenteACargo}
            />
          </div>
        </div>
        <div className="form-group row mt-3">
          <div className="col-md-4 col-12">¿Gestiona Presupuesto?</div>
          <div className="col-md-8 col-12">
            <FormCheck
              inline
              label=""
              name="chkGestionaPresupuesto"
              type="checkbox"
              id="chkGestionaPresupuesto"
              onChange={(e: any) => handleChangedd(e, 'chkGestionaPresupuesto')}
              defaultChecked={formNEL.chkGestionaPresupuesto}
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
    </Modals>
  )
}

export default ModalEL
