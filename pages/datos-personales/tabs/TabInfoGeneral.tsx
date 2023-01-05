import { useEffect, useState } from 'react'
import { /* useDispatch */ useSelector } from 'react-redux'
import Form from './../../../components/UI/molecules/form/Form'
import Pane from './../../../components/UI/molecules/pane/Pane'
import Button from './../../../components/UI/atoms/button/Button'
import Image from './../../../components/UI/atoms/imagen/Imagen'
import Input from './../../../components/UI/atoms/input/Input'
import Label from './../../../components/UI/atoms/label/Label'
import AsyncSelect from 'react-select'
import moment from 'moment'
import Loader from './../../../components/UI/atoms/loader/Loader'
import dynamic from 'next/dynamic'

const FormCheck: any = dynamic(() => import('react-bootstrap/FormCheck'), {
  ssr: false,
})

const parseJsonDate = (datein: any) => {
  return moment(datein).format('DD/MM/YYYY')
}

const TabInfoGeneral = () => {
  const info = useSelector((state: any) => state?.infoGeneral?.infoGeneral)
  const infoextra = useSelector((state: any) => state?.infoExtra?.infoExtra)
  const cargando = useSelector((state: any) => state?.infoExtra?.loading)

  const [cboSexo, setcboSexo] = useState([
    { value: '0', label: '-- Seleccionar Sexo --' },
  ])

  const [cboPais, setCboPais] = useState([
    { value: '0', label: '-- Seleccionar País --' },
  ])

  useEffect(() => {
    if (Object.keys(infoextra).length !== 0) {
      const paises = infoextra?.paises.map((item: any) => ({
        label: item?.Name,
        value: item?.IdCountry,
      }))

      setcboSexo([{ value: info.sexo, label: info.sexo }])
      setCboPais([...cboPais, ...paises])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [infoextra])

  return (
    <>
      <Loader loading={cargando} />
      <Form id="form1">
        <Pane classname="row px-2">
          <div className="col-12 col-md-7 mt-3">
            <div className="form-group row mb-3">
              <Label classname="col-12 col-md-4">Apellido Paterno:</Label>
              <div className="col-12 col-md-8">
                <Input
                  type="text"
                  id="txtApellidoPaterno"
                  name="txtApellidoPaterno"
                  placeholder="Apellido Paterno"
                  disabled={true}
                  value={info.apellidoPaterno ? info.apellidoPaterno : ''}
                  readOnly
                />
              </div>
            </div>

            <div className="form-group row mb-3">
              <Label classname="col-12 col-md-4">Apellido Materno:</Label>
              <div className="col-12 col-md-8">
                <Input
                  type="text"
                  id="txtApellidoMaterno"
                  name="txtApellidoMaterno"
                  placeholder="Apellido Materno"
                  disabled={true}
                  value={info.apellidoMaterno ? info.apellidoMaterno : ''}
                  readOnly
                />
              </div>
            </div>

            <div className="form-group row mb-3">
              <Label classname="col-12 col-md-4">Nombres:</Label>
              <div className="col-12 col-md-8">
                <Input
                  type="text"
                  id="txtNombre"
                  name="txtNombre"
                  placeholder="Apellido Paterno"
                  disabled={true}
                  value={info.nombres ? info.nombres : ''}
                  readOnly
                />
              </div>
            </div>

            <div className="form-group row mb-3">
              <Label classname="col-12 col-md-4">Fecha Nacimiento:</Label>
              <div className="col-12 col-md-8">
                <Input
                  type="text"
                  id="txtFechaNacimiento"
                  name="txtFechaNacimiento"
                  placeholder="Fecha Nacimiento"
                  disabled={true}
                  value={
                    info.fechaNacimiento
                      ? parseJsonDate(info.fechaNacimiento)
                      : ''
                  }
                  readOnly
                />
              </div>
            </div>

            <div className="form-group row mb-3">
              <Label classname="col-12 col-md-4">Pais Nacimiento:</Label>
              <div className="col-12 col-md-8">
                <AsyncSelect
                  options={[
                    {
                      value: '0',
                      label: '-- Seleccionar País de Nacimiento --',
                    },
                  ]}
                  isDisabled={true}
                  id="ddlPais"
                  name="ddlPais"
                  instanceId="ddlPais"
                  defaultValue={{
                    value: '0',
                    label: '-- Seleccionar País de Nacimiento --',
                  }}
                />
              </div>
            </div>

            <div className="form-group row mb-3">
              <Label classname="col-12 col-md-4">Tipo Documento:</Label>
              <div className="col-12 col-md-8">
                <AsyncSelect
                  options={[
                    {
                      value: '0',
                      label: '-- Seleccionar Tipo de Documento --',
                    },
                  ]}
                  isDisabled={true}
                  id="ddlTipoDocumento"
                  instanceId="ddlTipoDocumento"
                  name="ddlTipoDocumento"
                  defaultValue={{
                    value: '0',
                    label: '-- Seleccionar Tipo de Documento --',
                  }}
                />
              </div>
            </div>

            <div className="form-group row mb-3">
              <Label classname="col-12 col-md-4">Número Documento:</Label>
              <div className="col-12 col-md-8">
                <Input
                  type="text"
                  id="txtNumeroDocumento"
                  name="txtNumeroDocumento"
                  placeholder="Número Documento"
                  disabled={true}
                  value={info.nroDocumento ? info.nroDocumento : ''}
                  readOnly
                />
              </div>
            </div>

            <div className="form-group row mb-3">
              <Label classname="col-12 col-md-4">Sexo:</Label>
              <div className="col-12 col-md-8">
                <AsyncSelect
                  isDisabled={true}
                  options={cboSexo}
                  id="ddlSexo"
                  instanceId="ddlSexo"
                  name="ddlSexo"
                  // defaultValue={cboSexo[0]}
                  value={cboSexo[0]}
                />
              </div>
            </div>

            <div className="form-group row mb-3">
              <Label classname="col-12 col-md-4">Estado Civil:</Label>
              <div className="col-12 col-md-8">
                <Input
                  type="text"
                  id="ddlEstadoCivil"
                  name="ddlEstadoCivil"
                  placeholder="Estado Civil"
                  disabled={true}
                />
              </div>
            </div>

            <div className="form-group row mb-3">
              <Label classname="col-12 col-md-4">Semestre de Ingreso:</Label>
              <div className="col-12 col-md-8">
                <Input
                  type="text"
                  id="txtSemestreIngreso"
                  name="txtSemestreIngreso"
                  placeholder="Semestre de Ingreso"
                  disabled={true}
                  readOnly
                  value={
                    info.fechaIngreso ? parseJsonDate(info.fechaIngreso) : ''
                  }
                />
              </div>
            </div>

            <div className="form-group row mb-3">
              <Label classname="col-12 col-md-4">¿Tiene Discapacidad?:</Label>
              <div className="col-12 col-md-8">
                <div>
                  <FormCheck
                    inline
                    label="Si"
                    name="discapacidad"
                    type="radio"
                    id={`discapacidadSi`}
                    disabled={true}
                  />
                  <FormCheck
                    inline
                    label="No"
                    name="discapacidad"
                    type="radio"
                    id={`discapacidadNo`}
                    disabled={true}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-5 my-auto">
            <div className="form-group row">
              <Image
                src="https://intranet.upn.edu.pe/wsfoto/foto/18859999-6/Collaborator"
                alt="user"
                classname="user mx-auto d-block border p-0"
              />
            </div>

            <div className="form-group row mt-3">
              <Button
                type="button"
                variant="primary"
                classname="btn-sm mx-auto col-3"
                disabled={true}
              >
                Añadir Foto
              </Button>
            </div>
          </div>
          <div className="col-12 text-center text-danger">
            <strong>
              ESTOS DATOS NO SON EDITABLES Y PROVIENEN DEL SISTEMA DE PLANILLA,
              SI DESEA MODIFICARLO CONTÁCTESE CON EL ÁREA DE RRHH. DE SU SEDE.
            </strong>
          </div>
        </Pane>
      </Form>
    </>
  )
}

export default TabInfoGeneral
