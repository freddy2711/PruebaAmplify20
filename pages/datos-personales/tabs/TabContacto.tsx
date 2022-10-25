import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Form from './../../../components/UI/molecules/form/Form'
import Pane from './../../../components/UI/molecules/pane/Pane'
import Button from './../../../components/UI/atoms/button/Button'
import Input from './../../../components/UI/atoms/input/Input'
import Label from './../../../components/UI/atoms/label/Label'
import AsyncSelect from 'react-select'
import Loader from './../../../components/UI/atoms/loader/Loader'
import dynamic from 'next/dynamic'

import { saveContacto } from './../../../redux/actions/infoGeneralAction'

const FormCheck: any = dynamic(() => import('react-bootstrap/FormCheck'), {
  ssr: false,
})

const TabContacto = () => {
  const dispatch = useDispatch()

  const initFormContact: any = {
    ddlDistrito: [],
    txtDireccionUbigeo: '',
    txtTelfFijo: '',
    havetlfijo: false,
    txtTelfCelularSpring: '',
    txtTelfCelular: '',
    chkTelfCelular: false,
    txtCorreoLaboral: '',
    txtCorreoPersonal1: '',
    txtCorreoPersonal: '',
  }

  const [formContact, setFormContact] = useState<any>(initFormContact)
  const [distrito, setDistrito] = useState<any>([])

  const info = useSelector((state: any) => state?.infoGeneral?.infoGeneral)
  const cargando = useSelector((state: any) => state?.infoExtra?.loading)

  const ischeck = (valor: string) => {
    if (valor !== '') {
      return false
    } else {
      return true
    }
  }

  useEffect(() => {
    setDistrito([
      { value: '0', label: '-- Seleccionar Distrito --' },
      {
        value: info.Ubigeo?.distrito ? info.Ubigeo?.distrito : '',
        label: info.Ubigeo?.distrito ? info.Ubigeo?.distrito : '',
      },
    ])

    setFormContact({
      txtDireccionUbigeo: info?.direccion,
      txtTelfFijo: info?.telefonoFijo,
      havetlfijo: ischeck(info?.telefonoFijo),
      txtTelfCelularSpring: info?.celularSpring,
      txtTelfCelular: info?.celular1,
      chkTelfCelular: ischeck(info.celular1),
      txtCorreoLaboral: info?.emailLaboral,
      txtCorreoPersonal1: info?.emailpersonal,
      txtCorreoPersonal: info?.email,
    })
  }, [info?.idPersona])

  const savecontact = (datos: any) => dispatch<any>(saveContacto(datos))

  const saveContactHandler = (e: any) => {
    e.preventDefault()
    const oPersona = {
      idPersona: info.idPersona,
      celular1: formContact.txtTelfCelular,
      email: formContact.txtCorreoPersonal,
    }

    console.log(oPersona)
    savecontact(oPersona)
  }

  const handleChange = (e: any, id: string) => {
    switch (id) {
      case 'chkTelfCelular': {
        const value = e.target.checked
        setFormContact({
          ...formContact,
          chkTelfCelular: value,
          txtTelfCelular: '',
        })
        break
      }
      default: {
        const { name, value } = e.target
        setFormContact({
          ...formContact,
          [name]: value,
        })
        break
      }
    }
  }

  const {
    txtDireccionUbigeo,
    txtTelfFijo,
    havetlfijo,
    txtTelfCelularSpring,
    txtTelfCelular,
    chkTelfCelular,
    txtCorreoLaboral,
    txtCorreoPersonal1,
    txtCorreoPersonal,
  } = formContact

  return (
    <>
      <Loader loading={cargando} />
      <Form
        id="frmContacto"
        classname="px-3 py-3"
        onsubmit={(e: any) => saveContactHandler(e)}
      >
        <Pane classname="row px-2">
          <div className="form-group row mb-3">
            <Label classname="col-12 col-md-4">Distrito:</Label>
            <div className="col-12 col-md-8 text-center">
              <AsyncSelect
                isDisabled={true}
                options={distrito}
                id="ddlDistrito"
                instanceId="ddlDistrito"
                name="ddlDistrito"
                value={distrito[0]}
                onChange={(e: any) => handleChange(e, 'ddlDistrito')}
              />
            </div>
          </div>

          <div className="form-group row mb-3">
            <Label classname="col-12 col-md-4">Dirección:</Label>
            <div className="col-12 col-md-8 text-center">
              <Input
                type="text"
                id="txtDireccionUbigeo"
                name="txtDireccionUbigeo"
                placeholder="Dirección"
                classname="text-center"
                disabled={true}
                value={txtDireccionUbigeo || ''}
                onchange={(e: any) => handleChange(e, 'txtDireccionUbigeo')}
              />
            </div>
          </div>

          <div className="form-group row mb-3">
            <Label classname="col-12 col-md-4">Teléfono Fijo:</Label>
            <div className="col-12 col-md-8 text-center">
              <Input
                type="text"
                id="txtTelfFijo"
                name="txtTelfFijo"
                placeholder="Teléfono Fijo"
                classname="text-center"
                disabled={true}
                value={txtTelfFijo || ''}
                onchange={(e: any) => handleChange(e, 'txtTelfFijo')}
              />
            </div>
            <div className="col-12 col-md-8 offset-md-4 text-start">
              <FormCheck
                inline
                label="No tengo teléfono fijo"
                name="havetlfijo"
                type="checkbox"
                id={`havetlfijo`}
                disabled={true}
                defaultChecked={havetlfijo}
                readOnly
                // onChange={(e: any) => handleChange(e)}
              />
            </div>
          </div>

          <div className="form-group row mb-3">
            <Label classname="col-12 col-md-4">Teléfono Celular 1:</Label>
            <div className="col-12 col-md-8 text-center">
              <Input
                type="text"
                id="txtTelfCelularSpring"
                name="txtTelfCelularSpring"
                placeholder="Teléfono Celular 1"
                disabled={true}
                value={txtTelfCelularSpring || ''}
                readOnly
                classname="text-center"
                // onchange={(e: any) => handleChange(e)}
              />
            </div>
          </div>

          <div className="form-group row mb-3">
            <Label classname="col-12 col-md-4">Teléfono Celular 2:</Label>
            <div className="col-12 col-md-8 text-center">
              <Input
                type="text"
                id="txtTelfCelular"
                name="txtTelfCelular"
                placeholder="Teléfono Celular 2"
                value={txtTelfCelular || ''}
                onchange={(e: any) => handleChange(e, 'txtTelfCelular')}
                classname="text-center"
                disabled={chkTelfCelular}
              />
            </div>
            <div className="col-12 col-md-8 offset-md-4 text-start">
              <FormCheck
                inline
                label="No tengo teléfono celular"
                name="chkTelfCelular"
                type="checkbox"
                id="chkTelfCelular"
                checked={chkTelfCelular}
                onChange={(e: any) => handleChange(e, 'chkTelfCelular')}
              />
            </div>
          </div>

          <div className="form-group row mb-3">
            <Label classname="col-12 col-md-4">Correo Laboral:</Label>
            <div className="col-12 col-md-8 text-center">
              <Input
                type="text"
                id="txtCorreoLaboral"
                name="txtCorreoLaboral"
                placeholder="Correo Laboral"
                disabled={true}
                value={txtCorreoLaboral || ''}
                readOnly
                classname="text-center"
                // onchange={(e: any) => handleChange(e)}
              />
            </div>
          </div>

          <div className="form-group row mb-3">
            <Label classname="col-12 col-md-4">Correo Personal 1:</Label>
            <div className="col-12 col-md-8 text-center">
              <Input
                type="text"
                id="txtCorreoPersonal1"
                name="txtCorreoPersonal1"
                placeholder="Correo Personal 1"
                disabled={true}
                classname="text-center"
                value={txtCorreoPersonal1 || ''}
                onchange={(e: any) => handleChange(e, 'txtCorreoPersonal1')}
              />
            </div>
          </div>

          <div className="form-group row mb-3">
            <Label classname="col-12 col-md-4">Correo Personal 2:</Label>
            <div className="col-12 col-md-8 text-center">
              <Input
                type="text"
                id="txtCorreoPersonal"
                name="txtCorreoPersonal"
                placeholder="Correo Personal 2"
                classname="text-center"
                onchange={(e: any) => handleChange(e, 'txtCorreoPersonal')}
                value={txtCorreoPersonal || ''}
              />
            </div>
          </div>

          <div className="col-12 px-0 text-center">
            <Button
              type="submit"
              variant="primary"
              classname="btn-sm"
            >
              Guardar
            </Button>
          </div>
        </Pane>
      </Form>
    </>
  )
}

export default TabContacto
