import { /* useEffect, */ useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Form from './../../../components/UI/molecules/form/Form'
import Button from './../../../components/UI/atoms/button/Button'
import List from './../../../components/UI/molecules/lista/List'
// import ModalEstudio from './../../modals/ModalEstudio'
import ItemList from './../../../components/UI/atoms/ItemList/ItemList'
// import moment from 'moment'
import Swal from 'sweetalert2'

import { deleteConocimiento } from './../../../redux/actions/infoGeneralAction'

import {
  EditFormCono,
} from './../../../redux/actions/editarActions'

import ModalConociminetos from '../modals/ModalConociminetos'

const TabConocimientos = () => {
	const dispatch = useDispatch()
	const info = useSelector((state: any) => state?.infoGeneral?.infoGeneral)
	const conos = useSelector(
    (state: any) => state?.infoGeneral?.infoGeneral?.Conocimientos
  )

	const editForm = (datos: any) => dispatch<any>(EditFormCono(datos))
	const deleteconocimiento = (datos: any) => dispatch<any>(deleteConocimiento(datos))
	const [modalShowConocimientos, setModalShowConocimientos] = useState(false)

	const handleModalConocimientos = (ok: boolean) => {
    setModalShowConocimientos(ok)
  }

	const eliminar = async (id: string) => {
    Swal.fire({
      title: 'Conocicmientos',
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
          (item: any) => item.idPersonaConocimiento === id
        )
        todelete[0].activo = '0'
				todelete[0].IdPersona = info?.idPersona
        await deleteconocimiento(todelete[0])
      }
    })
  }

	const handleEditar = (id: string) => {
    console.log('__IdEditar__', id)
    const exper = info.Conocimientos.filter(
      (item: any) => item.idPersonaConocimiento === id
    )
    const expe = exper[0]
    console.log(expe)
    editForm(expe)
    setModalShowConocimientos(true)
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
                        onclick={() => handleModalConocimientos(true)}
                      >
                        Agregar
                      </Button>
                    </div>
                  </div>

                  <List classname="mb-3">
                    {info.Conocimientos && info.Conocimientos.length > 0
                      ? info.Conocimientos.map((item: any, index: number) => {
                          return (
                            item.activo && (
                              <ItemList
                                key={index}
                                classname="row d-flex py-3 px-0 mx-0"
                              >
                                <div className="col-12 col-md-6">
                                  <p className="mb-1">
                                    <b>{item.nombreConocimiento}</b>
                                  </p>
                                  <p className="mb-1">
                                    {item.nivelConocimiento}
                                  </p>
                                  <span className="d-none"></span>
                                </div>
                                <div className="col-12 col-md-6 text-end">
                                  <Button
                                    type="button"
                                    variant="secondary"
                                    classname="btn-sm me-2"
																		onclick={(e: any) => handleEditar(item.idPersonaConocimiento)}
                                  >
                                    Editar
                                  </Button>
                                  <Button
                                    type="button"
                                    variant="danger"
                                    classname="btn-sm"
																		onclick={() => eliminar(item.idPersonaConocimiento)}
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
								<ModalConociminetos 
									modalShowConocimientos={modalShowConocimientos}
									setModalShowConocimientos={setModalShowConocimientos}
								/>
		</>
	)
}

export default TabConocimientos