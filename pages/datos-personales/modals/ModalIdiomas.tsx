import { useState, useEffect } from 'react'
import AsyncSelect from 'react-select'
import Modals from './../../../components/UI/atoms/modal/Modal'
import Form from './../../../components/UI/molecules/form/Form'
import Button from './../../../components/UI/atoms/button/Button'
import { useDispatch, useSelector } from 'react-redux'
import { SET_DATA_DOCENTE } from '../../../consts/storageConst'
import { get } from 'local-storage'

import { saveIdiomasAction } from './../../../redux/actions/infoGeneralAction'

const defaultValor = (id: string, arr: any) => {
  const ar = arr.filter(
    (item: any) => item.value.toLocaleUpperCase() === id.toLocaleUpperCase()
  )
  return ar.length > 0 ? ar[0] : arr[0]
}

const ModalIdiomas = ({ modalShowIdiomas, setModalShowIdiomas }: any) => {
  const dispatch = useDispatch()
  const info = useSelector((state: any) => state?.infoGeneral?.infoGeneral)
  const infoextra = useSelector((state: any) => state?.infoExtra?.infoExtra)
  const infoeditar = useSelector((state: any) => state?.infoEditar?.editIdioma)
  const loadingextraidiomas = useSelector(
    (state: any) => state?.infoExtra?.loadingExtraIdiomas
  )

  useEffect(() => {
    const getCombos = async () => {
      if (infoextra.paises) {
        const idiomas = infoextra?.idiomas.map((item: any) => ({
          label: item?.LanguageName,
          value: item?.LanguageId,
        }))

        setCboddlIdioma([...initIdiomas, ...idiomas])
      }
    }

    if (Object.keys(infoextra).length !== 0) {
      if (loadingextraidiomas && loadingextraidiomas === true) {
        getCombos()
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadingextraidiomas])

  const saveidiomasaction = (datos: any) =>
    dispatch<any>(saveIdiomasAction(datos))

  const initialFormIdioma = {
    ddlNivelOral: '0',
    ddlNivelEscrito: '0',
    ddlIdioma: '0',
    id: null,
  }
  const [formIdioma, setFormIdioma] = useState<any>(initialFormIdioma)

  const { ddlNivelOral, ddlNivelEscrito, ddlIdioma, id } = formIdioma

  const initIdiomas = [{ value: '0', label: '-- Seleccionar Idioma --' }]
  const [CboddlIdioma, setCboddlIdioma] = useState(initIdiomas)

  const CboddlNivelOral = [
    { label: 'Básico', value: 'Básico' },
    { label: 'Intermedio', value: 'Intermedio' },
    { label: 'Avanzado', value: 'Avanzado' },
    { label: 'Nativo', value: 'Nativo' },
  ]

  const CboddlNivelEscrito = [
    { label: 'Básico', value: 'Básico' },
    { label: 'Intermedio', value: 'Intermedio' },
    { label: 'Avanzado', value: 'Avanzado' },
    { label: 'Nativo', value: 'Nativo' },
  ]

  const saveIdiomaHandle = async (e: any) => {
    e.preventDefault()
    console.log('saveNewEL')

    const DUENO: any = get(SET_DATA_DOCENTE)
    const DUENOSESSION = DUENO?.userName

    const obj = {
      IdPersonaIdioma: id,
      IdPersona: info.idPersona,
      IdIdioma: ddlIdioma,
      NivelIdiomaOral: ddlNivelOral,
      NivelIdiomaEscrito: ddlNivelEscrito,
      Activo: '1',
      EsCertificado: '0',
      NoSeEncontroIdioma: '0',
      NombreIdioma: '',
      audit_usuario_creacion: DUENOSESSION,
      audit_usuario_actualizacion: '',
    }

    await saveidiomasaction(obj)

    setModalShowIdiomas(false)
    setFormIdioma(initialFormIdioma)
  }

  useEffect(() => {
    if (Object.keys(infoeditar).length !== 0) {
      // setedit(true)

      const obj = {
        ddlNivelOral: infoeditar?.nivelIdiomaOral,
        ddlNivelEscrito: infoeditar?.nivelIdiomaEscrito,
        ddlIdioma: infoeditar?.Idioma.idIdioma,
        id: infoeditar?.idPersonaIdioma,
      }

      console.log(obj)

      setFormIdioma(obj)
    }
  }, [infoeditar])

  const handleChange = async (e: any, id: string) => {
    switch (id) {
      default: {
        console.log(e)
        const { value } = e
        setFormIdioma({
          ...formIdioma,
          [id]: value,
        })
        break
      }
    }
  }

  return (
    <Modals
      size="lg"
      show={modalShowIdiomas}
      onHide={() => setModalShowIdiomas(false)}
      titulo={'Idiomas'}
    >
      {loadingextraidiomas === true ? (
        <Form
          id="addIdiomas"
          onsubmit={(e: any) => saveIdiomaHandle(e)}
        >
          <div className="form-group row mt-3">
            <div className="col-md-4 col-12">Idioma :</div>
            <div className="col-md-8 col-12">
              <AsyncSelect
                options={CboddlIdioma}
                id="ddlIdioma"
                instanceId="ddlIdioma"
                name="ddlIdioma"
                defaultValue={defaultValor(ddlIdioma, CboddlIdioma)}
                value={defaultValor(ddlIdioma, CboddlIdioma)}
                onChange={(e: any) => handleChange(e, 'ddlIdioma')}
              />
            </div>
          </div>

          <div className="form-group row mt-3">
            <div className="col-md-4 col-12">Nivel Escrito :</div>
            <div className="col-md-8 col-12">
              <AsyncSelect
                options={CboddlNivelEscrito}
                id="ddlNivelEscrito"
                instanceId="ddlNivelEscrito"
                name="ddlNivelEscrito"
                defaultValue={defaultValor(ddlNivelEscrito, CboddlNivelEscrito)}
                value={defaultValor(ddlNivelEscrito, CboddlNivelEscrito)}
                onChange={(e: any) => handleChange(e, 'ddlNivelEscrito')}
              />
            </div>
          </div>

          <div className="form-group row mt-3">
            <div className="col-md-4 col-12">Nivel Oral :</div>
            <div className="col-md-8 col-12">
              <AsyncSelect
                options={CboddlNivelOral}
                id="ddlNivelOral"
                instanceId="ddlNivelOral"
                name="ddlNivelOral"
                defaultValue={defaultValor(ddlNivelOral, CboddlNivelOral)}
                value={defaultValor(ddlNivelOral, CboddlNivelOral)}
                onChange={(e: any) => handleChange(e, 'ddlNivelOral')}
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

export default ModalIdiomas
