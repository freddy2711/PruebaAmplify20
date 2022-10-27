import { /* useEffect, */ useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Form from './../../../components/UI/molecules/form/Form'
import Button from './../../../components/UI/atoms/button/Button'
import List from './../../../components/UI/molecules/lista/List'
import ItemList from './../../../components/UI/atoms/ItemList/ItemList'
import Swal from 'sweetalert2'
import Loader from './../../../components/UI/atoms/loader/Loader'
import { deleteDocs } from './../../../redux/actions/infoGeneralAction'
import ModalDocumentos from '../modals/ModalDocumentos'
import { apiDatosPersonales } from '../../api'

const TabDocs = () => {
  const dispatch = useDispatch()
  const info = useSelector((state: any) => state?.infoGeneral?.infoGeneral)
  const conos = useSelector(
    (state: any) => state?.infoGeneral?.infoGeneral?.Adjuntos
  )

  const deletedocs = (datos: any) => dispatch<any>(deleteDocs(datos))
  const [modalShowDocs, setModalShowDocs] = useState(false)
  const [Loading, setloading] = useState(false)

  const handleModalDocs = (ok: boolean) => {
    setModalShowDocs(ok)
  }

  const eliminar = async (id: string) => {
    Swal.fire({
      title: 'Adjuntos',
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
          (item: any) => item.idPersonaAdjunto === id
        )
        todelete[0].activo = '0'
        todelete[0].IdPersona = info?.idPersona
        todelete[0].IdEstudio = 'null'
        todelete[0].IdExperienciaLaboral = 'null'

        await deletedocs(todelete[0])
      }
    })
  }

  const handleDownload = async (nameItem: any) => {
    console.log(nameItem)
    setloading(true)
    try {
      const urla: any = await apiDatosPersonales.downloadFile(nameItem)
      console.log(urla.data)
      window.open(urla.data)
    } catch (error) {
      console.log(error)
    }
    setloading(false)
  }

  return (
    <>
      <Loader loading={Loading} />
      <Form id="px-3 py-3">
        <div className="form-group row">
          <div className="col-sm-3">
            <Button
              type="button"
              variant="secondary"
              classname="btn-sm"
              onclick={() => handleModalDocs(true)}
            >
              Agregar
            </Button>
          </div>
        </div>

        <List classname="mb-3 mt-3">
          {info.Adjuntos && info.Adjuntos.length > 0
            ? info.Adjuntos.map((item: any, index: number) => {
                return item.activo !== '0' && item.activo !== false ? (
                  <ItemList
                    key={index}
                    classname="row d-flex py-3 px-0 mx-0"
                  >
                    <div className="col-12 col-md-6">
                      <p className="mb-1">
                        <b>{item.nombreAdjunto}</b>
                      </p>
                      <p className="mb-1">{item.descripcionAdjunto}</p>
                      <span className="d-none"></span>
                    </div>
                    <div className="col-12 col-md-6 text-end">
                      <Button
                        type="button"
                        variant="secondary"
                        classname="btn-sm me-2"
                        onclick={() => handleDownload(item.nombreAdjunto)}
                      >
                        Descargar
                      </Button>
                      <Button
                        type="button"
                        variant="danger"
                        classname="btn-sm"
                        onclick={() => eliminar(item.idPersonaAdjunto)}
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
      <ModalDocumentos
        modalShowDocs={modalShowDocs}
        setModalShowDocs={setModalShowDocs}
      />
    </>
  )
}

export default TabDocs
