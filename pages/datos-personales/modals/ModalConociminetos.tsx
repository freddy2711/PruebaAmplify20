import { useState, useEffect } from 'react'
import AsyncSelect from 'react-select'
import Modals from './../../../components/UI/atoms/modal/Modal'
import Form from './../../../components/UI/molecules/form/Form'
import Input from './../../../components/UI/atoms/input/Input'
import Button from './../../../components/UI/atoms/button/Button'
import { useDispatch, useSelector } from 'react-redux'

import { saveConoAction } from './../../../redux/actions/infoGeneralAction'

const defaultValor = (id: string, arr: any) => {
  const ar = arr.filter(
    (item: any) => item.value.toLocaleUpperCase() === id.toLocaleUpperCase()
  )
  return ar.length > 0 ? ar[0] : arr[0]
}

const ModalConociminetos = ({
  modalShowConocimientos,
  setModalShowConocimientos,
}: any) => {
  const dispatch = useDispatch()
  const info = useSelector((state: any) => state?.infoGeneral?.infoGeneral)
  const infoeditar = useSelector(
    (state: any) => state?.infoEditar?.editConocimientos
  )

  const initialFormCono = {
    txtConocimiento: '',
    ddlOtroNivelConocimiento: '',
    id: null,
  }

  const saveconoaction = (datos: any) => dispatch<any>(saveConoAction(datos))

  const [formCono, setFormCono] = useState<any>(initialFormCono)
  const cboNivel = [
    { value: '0', label: '-- Seleccionar Nivel --' },
    { label: 'Básico', value: 'Básico' },
    { label: 'Intermedio', value: 'Intermedio' },
    { label: 'Avanzado', value: 'Avanzado' },
  ]
  // const [cboNivel, setcboNivel] = useState<any>(initNivel)

  const { txtConocimiento, ddlOtroNivelConocimiento, id } = formCono

  const saveConoHandle = async (e: any) => {
    e.preventDefault()
    console.log('saveNewEL')

    const obj = {
      IdPersonaConocimiento: id,
      IdPersona: info.idPersona,
      NombreConocimiento: txtConocimiento,
      NivelConocimiento: ddlOtroNivelConocimiento,
      Activo: '1',
      audit_usuario_creacion: 'RVI',
      audit_usuario_actualizacion: null,
      EsCertificado: '0',
    }

    await saveconoaction(obj)

    setModalShowConocimientos(false)
    setFormCono(initialFormCono)
  }

  useEffect(() => {
    if (Object.keys(infoeditar).length !== 0) {
      // setedit(true)

      const obj = {
        txtConocimiento: infoeditar?.nombreConocimiento,
        ddlOtroNivelConocimiento: infoeditar?.nivelConocimiento,
        id: infoeditar?.idPersonaConocimiento,
      }

      console.log(obj)

      setFormCono(obj)
    }
  }, [infoeditar])

  const handleChange = async (e: any, id: string) => {
    switch (id) {
      case 'ddlOtroNivelConocimiento': {
        console.log(e)
        const { value } = e
        setFormCono({
          ...formCono,
          [id]: value,
        })
        break
      }
      default: {
        const { name, value } = e.target
        setFormCono({
          ...formCono,
          [name]: value,
        })
        break
      }
    }
  }

  return (
    <Modals
      size="lg"
      show={modalShowConocimientos}
      onHide={() => setModalShowConocimientos(false)}
      titulo={'Conocimientos'}
    >
      <Form
        id="addConocimientos"
        onsubmit={(e: any) => saveConoHandle(e)}
      >
        <div className="form-group row mt-3">
          <div className="col-md-4 col-12">Conocimiento</div>
          <div className="col-md-8 col-12">
            <Input
              id="txtConocimiento"
              type="text"
              name="txtConocimiento"
              classname="text-center"
              placeholder=""
              value={formCono.txtConocimiento}
              onchange={(e: any) => handleChange(e, 'txtConocimiento')}
            />
          </div>
        </div>

        <div className="form-group row mt-3">
          <div className="col-md-4 col-12">Nivel :</div>
          <div className="col-md-8 col-12">
            <AsyncSelect
              options={cboNivel}
              id="ddlOtroNivelConocimiento"
              instanceId="ddlOtroNivelConocimiento"
              name="ddlOtroNivelConocimiento"
              defaultValue={defaultValor(ddlOtroNivelConocimiento, cboNivel)}
              value={defaultValor(ddlOtroNivelConocimiento, cboNivel)}
              onChange={(e: any) => handleChange(e, 'ddlOtroNivelConocimiento')}
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

export default ModalConociminetos
