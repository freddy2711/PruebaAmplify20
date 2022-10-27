import { /* useEffect, */ useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Form from './../../../components/UI/molecules/form/Form'
import Button from './../../../components/UI/atoms/button/Button'
import List from './../../../components/UI/molecules/lista/List'
// import ModalEstudio from './../../modals/ModalEstudio'
import ItemList from './../../../components/UI/atoms/ItemList/ItemList'
// import moment from 'moment'
import Swal from 'sweetalert2'
import { deleteRefLab } from './../../../redux/actions/infoGeneralAction'
import ModalRefLab from './../modals/ModalRefLab'

import { EditFormRefLab } from './../../../redux/actions/editarActions'

const TabRefLaboral = () => {
  const dispatch = useDispatch()
  const info = useSelector((state: any) => state?.infoGeneral?.infoGeneral)
  const conos = useSelector(
    (state: any) => state?.infoGeneral?.infoGeneral?.ReferenciasLaborales
  )

  const editForm = (datos: any) => dispatch<any>(EditFormRefLab(datos))
  const deletefefLab = (datos: any) => dispatch<any>(deleteRefLab(datos))
  const [modalShowRefLAb, setModalShowRefLAb] = useState(false)

  const handleModalRefLAb = (ok: boolean) => {
    setModalShowRefLAb(ok)
  }

  const eliminar = async (id: string) => {
    Swal.fire({
      title: 'Referencias Laborales',
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
          (item: any) => item.idReferenciaLaboral === id
        )
        todelete[0].activo = '0'
        todelete[0].IdPersona = info?.idPersona
        await deletefefLab(todelete[0])
      }
    })
  }

  const handleEditar = (id: string) => {
    console.log('__IdEditar__', id)
    const exper = info.ReferenciasLaborales.filter(
      (item: any) => item.idReferenciaLaboral === id
    )
    const expe = exper[0]
    console.log(expe)
    editForm(expe)
    setModalShowRefLAb(true)
  }

  return (
    <>
      <Form id="px-3 py-3  mb-3">
        <div className="form-group row">
          <div className="col-sm-3">
            <Button
              type="button"
              variant="secondary"
              classname="btn-sm"
              onclick={() => handleModalRefLAb(true)}
            >
              Agregar
            </Button>
          </div>
        </div>

        <List classname="mb-3 mt-3">
          {info.ReferenciasLaborales && info.ReferenciasLaborales.length > 0
            ? info.ReferenciasLaborales.map((item: any, index: number) => {
                return item.activo !== '0' && item.activo !== false ? (
                  <ItemList
                    key={index}
                    classname="row d-flex py-3 px-0 mx-0"
                  >
                    <div className="col-12 col-md-6">
                      <p className="mb-1">
                        <b>{item.empresa}</b>
                      </p>
                      <p className="mb-1">{item.relacion}</p>
                      <p className="mb-1">
                        {item.contacto} - {item.cargoreferencia}
                      </p>
                      <p className="mb-1">{item.telefono}</p>
                      <p className="mb-1">{item.celular1}</p>
                      <span className="d-none"></span>
                    </div>
                    <div className="col-12 col-md-6 text-end">
                      <Button
                        type="button"
                        variant="secondary"
                        classname="btn-sm me-2"
                        onclick={(e: any) =>
                          handleEditar(item.idReferenciaLaboral)
                        }
                      >
                        Editar
                      </Button>
                      <Button
                        type="button"
                        variant="danger"
                        classname="btn-sm"
                        onclick={() => eliminar(item.idReferenciaLaboral)}
                      >
                        Eliminar
                      </Button>
                    </div>
                  </ItemList>
                ) : null
              })
            : null}
        </List>
      </Form>
      <ModalRefLab
        modalShowRefLAb={modalShowRefLAb}
        setModalShowRefLAb={setModalShowRefLAb}
      />
    </>
  )
}

export default TabRefLaboral
