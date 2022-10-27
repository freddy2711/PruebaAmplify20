import { /* useEffect, */ useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Form from './../../../components/UI/molecules/form/Form'
import Button from './../../../components/UI/atoms/button/Button'
import List from './../../../components/UI/molecules/lista/List'
import ModalEstudios from './../modals/ModalEstudios'

import ItemList from './../../../components/UI/atoms/ItemList/ItemList'
import moment from 'moment'
import Swal from 'sweetalert2'

import { deleteEstudio } from './../../../redux/actions/infoGeneralAction'

import { EditFormEstudio } from './../../../redux/actions/editarActions'

const TabEstudios = () => {
  const dispatch = useDispatch()
  const info = useSelector((state: any) => state?.infoGeneral?.infoGeneral)
  const estu = useSelector(
    (state: any) => state?.infoGeneral?.infoGeneral?.Estudios
  )

  const parseJsonDate = (datein: any) => {
    return moment(datein).format('DD/MM/YYYY')
  }

  const deleteestudio = (datos: any) => dispatch<any>(deleteEstudio(datos))

  const editForm = (datos: any) => dispatch<any>(EditFormEstudio(datos))
  const [modalShowEstudio, setModalShowEstudio] = useState(false)

  const handleModalEstudio = (ok: boolean) => {
    setModalShowEstudio(ok)
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
        const todelete = estu.filter((item: any) => item.idEstudio === id)
        todelete[0].activo = '0'
        todelete[0].IdPersona = info?.idPersona
        await deleteestudio(todelete[0])
      }
    })
  }

  const handleEditar = (id: string) => {
    console.log('__IdEditar__', id)
    const exper = info.Estudios.filter((item: any) => item.idEstudio === id)
    const expe = exper[0]
    console.log(expe)
    editForm(expe)
    setModalShowEstudio(true)
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
              onclick={() => handleModalEstudio(true)}
            >
              Agregar
            </Button>
          </div>
        </div>

        <List classname="mb-3">
          {info.Estudios && info.Estudios.length > 0
            ? info.Estudios.map((item: any, index: number) => {
                return (
                  item.activo && (
                    <ItemList
                      key={index}
                      classname="row d-flex py-3 px-0 mx-0"
                    >
                      <div className="col-12 col-md-6">
                        <p className="mb-1">
                          <b>
                            {item.nombreEstudio
                              ? item.nombreEstudio
                              : '[INCOMPLETO]'}
                          </b>{' '}
                          en {item.Institucion.nombreInstitucion}
                        </p>
                        <p className="mb-1">
                          {item.NivelAcademico.nombre
                            ? item.NivelAcademico.nombre
                            : '[INCOMPLETO]'}
                          <br />
                          Del:{' '}
                          {item.fechaInicio
                            ? parseJsonDate(item.fechaInicio)
                            : '[INCOMPLETO]'}{' '}
                          Al{' '}
                          {item.estudiaActualmente
                            ? 'Actual'
                            : item.fechaFin
                            ? parseJsonDate(item.fechaFin)
                            : '[INCOMPLETO]'}{' '}
                          {item.EstadoEstudio.nombre
                            ? item.EstadoEstudio.nombre
                            : '[INCOMPLETO]'}{' '}
                          {item.Pais.nombre ? item.Pais.nombre : '[INCOMPLETO]'}
                          <br />
                          {item.esValidadoSunedu
                            ? 'Validado en SUNEDU'
                            : 'Pendiente de Validación en SUNEDU'}
                        </p>
                        <span className="d-none"></span>
                      </div>
                      <div className="col-12 col-md-6 text-end">
                        <Button
                          type="button"
                          variant="secondary"
                          classname="btn-sm me-2"
                          onclick={(e: any) => handleEditar(item.idEstudio)}
                        >
                          Editar
                        </Button>
                        <Button
                          type="button"
                          variant="danger"
                          classname="btn-sm"
                          onclick={() => eliminar(item.idEstudio)}
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
      </Form>
      <ModalEstudios
        modalShowEstudio={modalShowEstudio}
        setModalShowEstudio={setModalShowEstudio}
      />
    </>
  )
}

export default TabEstudios
