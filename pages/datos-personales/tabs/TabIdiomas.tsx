import { /* useEffect, */ useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Form from './../../../components/UI/molecules/form/Form'
import Button from './../../../components/UI/atoms/button/Button'
import List from './../../../components/UI/molecules/lista/List'
// import ModalEstudio from './../../modals/ModalEstudio'
import ItemList from './../../../components/UI/atoms/ItemList/ItemList'
// import moment from 'moment'
import Swal from 'sweetalert2'

import { deleteIdiomas } from './../../../redux/actions/infoGeneralAction'

import { EditFormIdiomas } from './../../../redux/actions/editarActions'
import ModalIdiomas from '../modals/ModalIdiomas'

const TabIdiomas = () => {
  const dispatch = useDispatch()
  const info = useSelector((state: any) => state?.infoGeneral?.infoGeneral)
  const conos = useSelector(
    (state: any) => state?.infoGeneral?.infoGeneral?.Idiomas
  )

  const editForm = (datos: any) => dispatch<any>(EditFormIdiomas(datos))
  const deleteidiomas = (datos: any) => dispatch<any>(deleteIdiomas(datos))
  const [modalShowIdiomas, setModalShowIdiomas] = useState(false)

  const handleModalIdiomas = (ok: boolean) => {
    setModalShowIdiomas(ok)
  }

  const eliminar = async (id: string) => {
    Swal.fire({
      title: 'Idiomas',
      text: '¿Está seguro que desea eliminar estos datos?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar',
    }).then(async (result: any) => {
      if (result.isConfirmed) {
        const todelete = conos.filter(
          (item: any) => item.idPersonaIdioma === id
        )
        todelete[0].activo = '0'
        todelete[0].IdPersona = info?.idPersona
        await deleteidiomas(todelete[0])
      }
    })
  }

  const handleEditar = (id: string) => {
    console.log('__IdEditar__', id)
    const exper = info.Idiomas.filter(
      (item: any) => item.idPersonaIdioma === id
    )
    const expe = exper[0]
    console.log(expe)
    editForm(expe)
    setModalShowIdiomas(true)
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
              onclick={() => handleModalIdiomas(true)}
            >
              Agregar
            </Button>
          </div>
        </div>

        <List classname="mb-3">
          {info.Idiomas && info.Idiomas.length > 0
            ? info.Idiomas.map((item: any, index: number) => {
                return (
                  item.activo && (
                    <ItemList
                      key={index}
                      classname="row d-flex py-3 px-0 mx-0"
                    >
                      <div className="col-12 col-md-6">
                        <p className="mb-1">
                          <b>{item.Idioma.nombreIdioma}</b>
                        </p>
                        <p className="mb-1">
                          Nivel Oral: {item.nivelIdiomaOral}
                          <br />
                          Nivel Escrito: {item.nivelIdiomaEscrito}
                        </p>
                        <span className="d-none"></span>
                      </div>
                      <div className="col-12 col-md-6 text-end">
                        <Button
                          type="button"
                          variant="secondary"
                          classname="btn-sm me-2"
                          onclick={(e: any) =>
                            handleEditar(item.idPersonaIdioma)
                          }
                        >
                          Editar
                        </Button>
                        <Button
                          type="button"
                          variant="danger"
                          classname="btn-sm"
                          onclick={() => eliminar(item.idPersonaIdioma)}
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
      <ModalIdiomas
        modalShowIdiomas={modalShowIdiomas}
        setModalShowIdiomas={setModalShowIdiomas}
      />
    </>
  )
}

export default TabIdiomas
