import { /* useEffect, */ useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Form from './../../../components/UI/molecules/form/Form'
import Button from './../../../components/UI/atoms/button/Button'
import Input from './../../../components/UI/atoms/input/Input'
import Label from './../../../components/UI/atoms/label/Label'
import List from './../../../components/UI/molecules/lista/List'
import ModalEl from './../modals/ModalEL'
import ItemList from './../../../components/UI/atoms/ItemList/ItemList'
import moment from 'moment'
import Swal from 'sweetalert2'

import { EditForm } from './../../../redux/actions/editarActions'

import { deleteExpLab } from './../../../redux/actions/infoGeneralAction'

const parseJsonDate = (datein: any) => {
  return moment(datein).format('DD/MM/YYYY')
}

const TabExperienciaLaboral = () => {
  const dispatch = useDispatch()
  const info = useSelector((state: any) => state?.infoGeneral?.infoGeneral)
  // const saveexplab = (datos: any) => dispatch<any>(saveExpLab(datos))
  const deleteexplab = (datos: any) => dispatch<any>(deleteExpLab(datos))
  // const clearEdit = () => dispatch<any>(ClearEdit())
  const expes = useSelector(
    (state: any) => state?.infoGeneral?.infoGeneral?.ExperienciasLaborales
  )
  // const infoextra = useSelector((state: any) => state?.infoExtra?.infoExtra)

  const editForm = (datos: any) => dispatch<any>(EditForm(datos))

  const [modalShow, setModalShow] = useState(false)

  const initial: any = {
    rdbExperienciaDocente: '',
    txtEmpresa: '',
    ddlIndustria: '0',
    ddlInstitucionExperiencia: '0',
    ddlTipoDedicacionDocente: '0',
    chkInstitucionExperiencia: false,
    txtInstitucionExperiencia: '',
    ddlAreaPuesto: '0',
    txtCargo: '',
    ddlPaisExperiencia: '0',
    txtFechaInicioExperiencia: '',
    txtFechaFinExperiencia: '',
    chkTrabajaActualmente: false,
    txtDescripcion: '',
    chkGenteACargo: false,
    chkGestionaPresupuesto: false,
    txtFechaFinExperienciaDisabled: false,
    id: null,
  }

  const [formNEL, setFormNEL] = useState(initial)

  let totalExpDocente = 0
  let totalExpProfesional = 0

  const handleModalEL = async (ok: boolean) => {
    setModalShow(ok)
    setFormNEL(initial)
  }

  const handleEditar = (id: string) => {
    console.log('__IdEditar__', id)
    const exper = info.ExperienciasLaborales.filter(
      (item: any) => item.idExperienciaLaboral === id
    )
    const expe = exper[0]
    console.log(expe)
    editForm(expe)
    setModalShow(true)
  }

  function toDate(dateStr: any) {
    const parts = dateStr.split('/')
    return new Date(parts[2], parts[1] - 1, parts[0]).toISOString()
  }

  const tiempo = (
    fechaInicio: any,
    fechaFin: any,
    experienciaDocencia: any
  ) => {
    const sinFecha = 'SIN FECHA'
    const _fechaInicio = !fechaInicio ? sinFecha : parseJsonDate(fechaInicio)
    const _fechaFin = !fechaFin ? sinFecha : parseJsonDate(fechaFin)

    let final
    let duration: any

    if (fechaInicio) {
      if (fechaFin) {
        final = moment(toDate(_fechaFin))
        duration = moment.duration(final.diff(toDate(_fechaInicio)))
      } else {
        final = moment()
        duration = moment.duration(final.diff(toDate(_fechaInicio)))
      }

      if (experienciaDocencia) {
        totalExpDocente = totalExpDocente + duration
      } else {
        totalExpProfesional = totalExpProfesional + duration
      }
    }

    const durationMonths = !duration ? 0 : duration.months()
    const durationYears = !duration ? 0 : duration.years()

    return [durationMonths, durationYears]
  }

  const eliminar = async (id: string) => {
    Swal.fire({
      title: 'Experiencia Laboral',
      text: '¿Está seguro que desea eliminar estos datos?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar',
    }).then(async (result: any) => {
      if (result.isConfirmed) {
        const todelete = expes.filter(
          (item: any) => item.idExperienciaLaboral === id
        )
        todelete[0].activo = '0'
        todelete[0].IdPersona = info?.idPersona
        // info
        await deleteexplab(todelete[0])
      }
    })
  }

  return (
    <>
      <Form id="px-3 py-3">
        <div className="form-group row mb-3">
          <div className="col-sm-3">
            <Button
              type="button"
              variant="secondary"
              classname="btn-sm"
              onclick={() => handleModalEL(true)}
            >
              Agregar
            </Button>
          </div>
        </div>

        <List classname="mb-3">
          {info.ExperienciasLaborales && info.ExperienciasLaborales.length > 0
            ? info.ExperienciasLaborales.map((item: any, index: number) => {
                const [durationMonths, durationYears] = tiempo(
                  item.fechaInicio,
                  item.fechaFin,
                  item.experienciaDocencia
                )
                return (
                  item.activo && (
                    <ItemList
                      classname="row d-flex py-3 px-0 mx-0"
                      key={index}
                    >
                      <div className="col-12 col-md-6">
                        <p className="mb-1">
                          {item.puesto.toUpperCase()} EN{' '}
                          {item.empresa.toUpperCase()}
                        </p>
                        <p className="mb-1">
                          Del: {parseJsonDate(item.fechaInicio)} al{' '}
                          {item.trabajaActualmente === true
                            ? 'Actual'
                            : parseJsonDate(item.fechaFin)}{' '}
                          {`(`}
                          {durationYears} Años - {durationMonths} Meses
                          {`)`}
                          <br />
                          {item.AreaPuesto.nombreAreaPuesto}
                          <label
                            className="text-danger"
                            id="mensajeEXLAB_5565"
                          ></label>
                        </p>
                        <span className="d-none"></span>
                      </div>
                      <div className="col-12 col-md-6 text-end">
                        <Button
                          type="button"
                          variant="secondary"
                          classname="btn-sm me-2"
                          onclick={(e: any) =>
                            handleEditar(item.idExperienciaLaboral)
                          }
                        >
                          Editar
                        </Button>
                        <Button
                          type="button"
                          variant="danger"
                          classname="btn-sm"
                          onclick={() => eliminar(item.idExperienciaLaboral)}
                        >
                          Eliminar
                        </Button>
                      </div>
                    </ItemList>
                  )
                )
              })
            : null}
        </List>

        <hr />

        <div className="form-group row mt-3 mb-3">
          <Label classname="col-sm-4 col-form-label">
            Total de Años Experiencia Profesional :
          </Label>
          <div className="col-sm-2">
            <Input
              id="txtTotalExperienciaProfesional"
              type="text"
              name="txtTotalExperienciaProfesional"
              classname="text-center"
              placeholder="0"
              disabled={true}
              value={Math.floor(totalExpProfesional / 31536000000)}
            />
          </div>
        </div>

        <div className="form-group row mb-3">
          <Label classname="col-sm-4 col-form-label">
            Total de Años Experiencia Docente :
          </Label>
          <div className="col-sm-2">
            <Input
              id="txtTotalExperienciaDocente"
              type="text"
              name="txtTotalExperienciaDocente"
              classname="text-center"
              placeholder="0"
              disabled={true}
              value={Math.floor(totalExpDocente / 31536000000)}
            />
          </div>
        </div>

        <div className="col-12 px-0 text-justify text-muted">
          <strong>
            El total de experiencia profesional y docente se calcula de manera
            automática según datos registrados.
          </strong>
        </div>
      </Form>

      <ModalEl
        modalShow={modalShow}
        setModalShow={setModalShow}
        formNEL={formNEL}
        setFormNEL={setFormNEL}
        initial={initial}
      />
    </>
  )
}

export default TabExperienciaLaboral
