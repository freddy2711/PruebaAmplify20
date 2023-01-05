import { useEffect, useState } from 'react'
import AsyncSelect from 'react-select'
import Modals from './../../../components/UI/atoms/modal/Modal'
import Form from './../../../components/UI/molecules/form/Form'
import Input from './../../../components/UI/atoms/input/Input'
import Button from './../../../components/UI/atoms/button/Button'
import FileInputComponent from 'react-file-input-previews-base64'
import Swal from 'sweetalert2'
import { useDispatch, useSelector } from 'react-redux'
import { SET_DATA_DOCENTE } from '../../../consts/storageConst'
import { get } from 'local-storage'

// import dynamic from 'next/dynamic'

import { saveAdjuntoAction } from './../../../redux/actions/infoGeneralAction'

const ModalDocumentos = ({ modalShowDocs, setModalShowDocs }: any) => {
  const dispatch = useDispatch()
  const info = useSelector((state: any) => state?.infoGeneral?.infoGeneral)
  const loadingextraadjunto = useSelector(
    (state: any) => state?.infoExtra?.loadingExtraAdjunto
  )
  const infoextra = useSelector((state: any) => state?.infoExtra?.infoExtra)

  const defaultValor = (id: string, arr: any) => {
    const ar = arr.filter(
      (item: any) => item.value.toLocaleUpperCase() === id.toLocaleUpperCase()
    )
    return ar.length > 0 ? ar[0] : arr[0]
  }

  const saveadjuntoaction = (datos: any) =>
    dispatch<any>(saveAdjuntoAction(datos))

  const cboTipoAdjuntoInit = [
    { label: '-- Seleccionar Tipo Adjunto --', value: '0' },
  ]

  const [cboTipoAdjunto, setcboTipoAdjunto] = useState(cboTipoAdjuntoInit)

  const initForm = {
    ddlTipoAdjunto: '0',
    txtfile: {},
    txtDescripcionDocumento: '',
  }

  const [formAdjunto, setFormAdjunto] = useState<any>(initForm)

  const { ddlTipoAdjunto, txtfile, txtDescripcionDocumento } = formAdjunto

  const handleChange = (e: any, id: string) => {
    switch (id) {
      case 'txtDescripcionDocumento': {
        console.log(e)
        const { value } = e.target
        setFormAdjunto({
          ...formAdjunto,
          [id]: value,
        })
        break
      }
      default: {
        console.log(e)
        const { value } = e
        setFormAdjunto({
          ...formAdjunto,
          [id]: value,
        })
        break
      }
    }
  }

  const validFile = (item: any) => {
    let resp = false
    console.log('VALIDARRRRR___', item)

    const typeValids = [
      'pdf',
      'doc',
      'docx',
      'xlsx',
      'xls',
      'pptx',
      'ppt',
      'jpeg',
      'rar',
      'zip',
      'png',
    ]

    const { size, name } = item.file

    const type = name.substring(name.lastIndexOf('.') + 1, name.length)

    console.log('TYPE__', [typeValids.includes(type), type])

    if (size <= 10000000) {
      if (typeValids.includes(type)) {
        resp = true
      } else {
        Swal.fire({
          title: 'Portal de Docentes',
          text: `Por favor cargue un archivo con extensión: ${typeValids.join(
            ','
          )}`,
          icon: 'warning',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK',
        })
      }
    } else {
      Swal.fire({
        title: 'Portal de Docentes',
        text: `Por favor cargue un archivo que peso como maximo 10MB.		`,
        icon: 'warning',
        showCancelButton: false,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'OK',
      })
    }
    return resp
  }

  const getFile = async (fileObj: any) => {
    if (validFile(fileObj)) {
      // TODO await enviar datos
      console.log(fileObj)
      setFormAdjunto({
        ...formAdjunto,
        txtfile: fileObj,
      })
    }
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    const DUENO: any = get(SET_DATA_DOCENTE)
    const DUENOSESSION = DUENO?.userName

    try {
      const obj = {
        IdPersonaAdjunto: 'null',
        IdPersona: info.idPersona,
        NombreAdjunto: txtfile.name,
        RutaAdjunto: '',
        DescripcionAdjunto: txtDescripcionDocumento,
        ExtensionAdjunto: txtfile.name.substring(
          txtfile.name.lastIndexOf('.') + 1,
          txtfile.name.length
        ),
        Activo: '1',
        audit_usuario_creacion: DUENOSESSION, // 'RVI',
        audit_usuario_actualizacion: '',
        IdTipoAdjunto: ddlTipoAdjunto,
        IdEstudio: 'null',
        IdExperienciaLaboral: 'null',
        filebase64: txtfile.base64.split('base64,')[1],
      }

      await saveadjuntoaction(obj)
      setFormAdjunto(initForm)
      setModalShowDocs(false)
    } catch (error) {
      console.log(error)
    }
  }

  // loadingextraadjunto
  useEffect(() => {
    const getCombos = async () => {
      if (infoextra.paises) {
        const tipoAdjunto = infoextra?.tipoAdjunto.map((item: any) => ({
          label: item?.EnclosureTypeName,
          value: item?.IdAttachmentType,
        }))

        setcboTipoAdjunto([...cboTipoAdjuntoInit, ...tipoAdjunto])
      }
    }

    if (Object.keys(infoextra).length !== 0) {
      if (loadingextraadjunto && loadingextraadjunto === true) {
        getCombos()
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadingextraadjunto])

  return (
    <Modals
      size="lg"
      show={modalShowDocs}
      onHide={() => setModalShowDocs(false)}
      titulo={'Documentos'}
    >
      {loadingextraadjunto === true ? (
        <Form
          id="addDocumentos"
          onsubmit={(e: any) => handleSubmit(e)}
        >
          <div className="form-group row mt-3">
            <div className="col-md-4 col-12">Tipo de documento :</div>
            <div className="col-md-8 col-12">
              <AsyncSelect
                options={cboTipoAdjunto}
                id="ddlTipoAdjunto"
                instanceId="ddlTipoAdjunto"
                name="ddlTipoAdjunto"
                defaultValue={defaultValor(ddlTipoAdjunto, cboTipoAdjunto)}
                onChange={(e: any) => handleChange(e, 'ddlTipoAdjunto')}
                value={defaultValor(ddlTipoAdjunto, cboTipoAdjunto)}
              />
            </div>
          </div>

          <div className="form-group row mt-3">
            <div className="col-md-4 col-12">Seleccionar Archivo</div>
            <div className="col-md-8 col-12">
              <FileInputComponent
                labelText={txtfile.name}
                multiple={false}
                imagePreview={false}
                callbackFunction={(fileArr: any) => {
                  getFile(fileArr)
                  console.log('subio')
                }}
                accept="png"
                buttonComponent={
                  <button
                    type="button"
                    className="btn btn-primary"
                    style={{
                      borderRadius: '0 0.25rem 0.25rem 0',
                    }}
                  >
                    Elegir
                  </button>
                }
                labelStyle={{
                  fontSize: 16,
                  color: 'rgba(0, 0, 0, 0.298039)',
                  padding: '0.375rem 0.75rem',
                  border: '1px solid #dee2e6',
                  borderRadius: '0.25rem 0 0 0.25rem',
                  minHeight: '38px',
                  verticalAlign: 'middle',
                  lineHeight: '1.5',
                  width: '85%',
                }}
              />
            </div>
          </div>

          <div className="form-group row mt-3">
            <div className="col-md-4 col-12">Descripción del Documento</div>
            <div className="col-md-8 col-12">
              <Input
                id="txtDescripcionDocumento"
                type="text"
                name="txtDescripcionDocumento"
                classname="text-center"
                placeholder=""
                value={txtDescripcionDocumento}
                onchange={(e: any) =>
                  handleChange(e, 'txtDescripcionDocumento')
                }
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
      ) : (
        'Cargando...'
      )}
    </Modals>
  )
}

export default ModalDocumentos
