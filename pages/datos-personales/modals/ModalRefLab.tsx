
import { useState, useEffect } from 'react'
import AsyncSelect from 'react-select'
import Modals from './../../../components/UI/atoms/modal/Modal'
import Form from './../../../components/UI/molecules/form/Form'
import Button from './../../../components/UI/atoms/button/Button'
import { useDispatch, useSelector } from 'react-redux'
import Input from './../../../components/UI/atoms/input/Input'

import { saveRefLabAction } from './../../../redux/actions/infoGeneralAction'

const defaultValor = (id: string, arr: any) => {
  const ar = arr.filter((item: any) => item.value.toLocaleUpperCase() === id.toLocaleUpperCase())
  return ar.length > 0 ? ar[0] : arr[0]
}

const ModalRefLab = ({modalShowRefLAb, setModalShowRefLAb}:any) => {
	const dispatch = useDispatch()
	const info = useSelector((state: any) => state?.infoGeneral?.infoGeneral)
	const infoeditar = useSelector(
    (state: any) => state?.infoEditar?.editRefLab
  )

	const savereflabaction = (datos: any) =>
	dispatch<any>(saveRefLabAction(datos))

	const initialFormRefLab = {
		txtContacto: '',
		txtCorreo: '',
		txtTelffijoContacto: '',
		txtTelfCelular1Contacto: '',
		txtTelfCelular2Contacto: '',
		ddlRelacion: '',
		txtCargoReferencia: '',
		txtEmpresaReferencia: '',
		id: null
  }
	const [formRefLab, setFormRefLab] = useState<any>(initialFormRefLab)

	const {
		txtContacto,
		txtCorreo,
		txtTelffijoContacto,
		txtTelfCelular1Contacto,
		txtTelfCelular2Contacto,
		ddlRelacion,
		txtCargoReferencia,
		txtEmpresaReferencia,
		id
	} = formRefLab

  const cboRelab = [
		{ value: '0', label: '-- Seleccionar Relación Laboral --' },
		{ label: 'Jefe Inmediato', value: 'Jefe Inmediato' },
		{ label: 'Colaborador A mi Cargo', value: 'Colaborador A mi Cargo' },
		{ label: 'Compañero', value: 'Compañero' },
	]

	const saveRefLabHandle = async (e: any) => {
    e.preventDefault()
    console.log('saveNewEL')

    const obj =  {
		"IdReferenciaLaboral": id,
		"IdPersona" : info.idPersona,
		"Empresa" : txtEmpresaReferencia,
		"CargoReferencia" : txtCargoReferencia,
		"Contacto" : txtContacto,
		"Correo" : txtCorreo,
		"Relacion" : ddlRelacion,
		"Telefono" : txtTelffijoContacto,
		"Celular1" : txtTelfCelular1Contacto,
		"Celular2" : txtTelfCelular2Contacto,
		"Activo" :"1",
		"audit_usuario_creacion" :"RVI",
		"audit_usuario_actualizacion" :""
		
	}

		await savereflabaction(obj)

    setModalShowRefLAb(false)
    setFormRefLab(initialFormRefLab)
	}

	useEffect(() => {
    if (Object.keys(infoeditar).length !== 0) {
      // setedit(true)

      const obj = {
				txtContacto: infoeditar?.contacto,
				txtCorreo: infoeditar?.correo,
				txtTelffijoContacto: infoeditar?.telefono,
				txtTelfCelular1Contacto: infoeditar?.celular1,
				txtTelfCelular2Contacto: infoeditar?.celular2,
				ddlRelacion: infoeditar?.relacion,
				txtCargoReferencia: infoeditar?.cargoreferencia,
				txtEmpresaReferencia: infoeditar?.empresa,
				id: infoeditar?.idReferenciaLaboral
      }

			console.log(obj);

      setFormRefLab(obj)
    }
  }, [infoeditar])

	const handleChangedd = (e: any, id: any) => {
    switch (id) {  
			case 'ddlRelacion': {
        console.log(e)
        const { value } = e
        setFormRefLab({
          ...formRefLab,
          [id]: value,
        })
        break
      }  
			default:{
				const { value } = e.target
				setFormRefLab({
          ...formRefLab,
          [id]: value,
        })
				break
			}
	}
}

	return (
		<Modals
        size="lg"
        show={modalShowRefLAb}
        onHide={() => setModalShowRefLAb(false)}
        titulo={'Referencia Laboral'}
      >
        <Form
          id="addReferenciaLaboral"
          onsubmit={(e: any) => saveRefLabHandle(e)}
        >
          <div className="form-group row mt-3">
            <div className="col-md-4 col-12">Nombre Contacto</div>
            <div className="col-md-8 col-12">
              <Input
                id="txtContacto"
                type="text"
                name="txtContacto"
                classname="text-center"
                placeholder=""
                value={txtContacto}
								onchange={(e: any) => handleChangedd(e, 'txtContacto')}
              />
            </div>
          </div>

          <div className="form-group row mt-3">
            <div className="col-md-4 col-12">Correo</div>
            <div className="col-md-8 col-12">
              <Input
                id="txtCorreo"
                type="text"
                name="txtCorreo"
                classname="text-center"
                placeholder=""
                value={txtCorreo}
                onchange={(e: any) => handleChangedd(e, 'txtCorreo')}
              />
            </div>
          </div>

          <div className="form-group row mt-3">
            <div className="col-md-4 col-12">Teléfono Fijo</div>
            <div className="col-md-8 col-12">
              <Input
                id="txtTelffijoContacto"
                type="text"
                name="txtTelffijoContacto"
                classname="text-center"
                placeholder=""
                value={txtTelffijoContacto}
                onchange={(e: any) => handleChangedd(e, 'txtTelffijoContacto')}
              />
            </div>
          </div>

          <div className="form-group row mt-3">
            <div className="col-md-4 col-12">Celular 1</div>
            <div className="col-md-8 col-12">
              <Input
                id="txtTelfCelular1Contacto"
                type="text"
                name="txtTelfCelular1Contacto"
                classname="text-center"
                placeholder=""
                value={txtTelfCelular1Contacto}
								onchange={(e: any) => handleChangedd(e, 'txtTelfCelular1Contacto')}
              />
            </div>
          </div>

          <div className="form-group row mt-3">
            <div className="col-md-4 col-12">Celular 2</div>
            <div className="col-md-8 col-12">
              <Input
                id="txtTelfCelular2Contacto"
                type="text"
                name="txtTelfCelular2Contacto"
                classname="text-center"
                placeholder=""
                value={txtTelfCelular2Contacto}
                onchange={(e: any) => handleChangedd(e, 'txtTelfCelular2Contacto')}
              />
            </div>
          </div>

          <div className="form-group row mt-3">
            <div className="col-md-4 col-12">Relación :</div>
            <div className="col-md-8 col-12">
              <AsyncSelect
                options={cboRelab}
                id="ddlRelacion"
                instanceId="ddlRelacion"
                name="ddlRelacion"
                defaultValue={defaultValor(ddlRelacion, cboRelab)}
                onChange={(e: any) => handleChangedd(e, 'ddlRelacion')}
								value={defaultValor(ddlRelacion, cboRelab)}
              />
            </div>
          </div>

          <div className="form-group row mt-3">
            <div className="col-md-4 col-12">Cargo de Referencia</div>
            <div className="col-md-8 col-12">
              <Input
                id="txtCargoReferencia"
                type="text"
                name="txtCargoReferencia"
                classname="text-center"
                placeholder=""
                value={txtCargoReferencia}
                onchange={(e: any) => handleChangedd(e, 'txtCargoReferencia')}
              />
            </div>
          </div>

          <div className="form-group row mt-3">
            <div className="col-md-4 col-12">Empresa</div>
            <div className="col-md-8 col-12">
              <Input
                id="txtEmpresaReferencia"
                type="text"
                name="txtEmpresaReferencia"
                classname="text-center"
                placeholder=""
                value={txtEmpresaReferencia}
                onchange={(e: any) => handleChangedd(e, 'txtEmpresaReferencia')}
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

export default ModalRefLab