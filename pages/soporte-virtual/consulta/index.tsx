import { useState, useEffect, useRef } from 'react'
import styles from './../../../components/templates/soporteVirtual/soporteVirtual.module.scss'
import Loader from '../../../components/UI/atoms/loader/Loader'
import Label from '../../../components/UI/atoms/label/Label'
import Button from '../../../components/UI/atoms/button/Button'
import AsyncSelect from 'react-select'
import { apiSoporteVirtual } from './../../api'
import Swal from 'sweetalert2'
import { get } from 'local-storage'
import FileInputComponent from 'react-file-input-previews-base64'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { USER_SESSION, SET_DATA_DOCENTE } from '../../../consts/storageConst'
import {
  faTimes,
  faFileText,
  faFileZipper,
  faFileVideo,
  faPaperclip,
  faFileImage,
  faFileAudio,
  faFile,
  faFilePdf,
  faFileWord,
  faFileExcel,
  faFilePowerpoint,
} from '@fortawesome/free-solid-svg-icons'
import dynamic from 'next/dynamic'
import { v4 as uuidv4 } from 'uuid'

const QuillRichText = dynamic(
  () => import('../../../components/UI/molecules/quillRichText'),
  {
    ssr: false,
    loading: () => <Loader loading={true} />,
  }
)

const Index = () => {
  const initForm = {
    ddlTipo: '0',
    ddlSubTipo: '0',
    txtDescripcion: '',
  }

  const initFile = {
    name: 'ADJUNTAR ARCHIVOS (tamaño maximo 5mb)',
    type: '',
    size: 0,
    base64: '',
    file: null,
  }

  const [Loading, setloading] = useState(false)
  const [formConsulta, setFormConsulta] = useState(initForm)
  const initTipo = [{ value: '0', label: '-- Seleccionar Tipo --' }]
  const initSubTipo = [{ value: '0', label: '-- Seleccionar subTipo --' }]
  const [tipo, setTipo] = useState(initTipo)
  const [subTipo, setSubtipo] = useState(initSubTipo)
  const [adjunto, setAdjunto] = useState<any>([])
  const [descrip, setDescrip] = useState('')
  const [archivo, setArchivo] = useState<any>(initFile)

  useEffect(() => {
    const loadData = async () => {
      setloading(true)

      try {
        await clearFileLoses()
        const { data } = await apiSoporteVirtual.tipocse(null, 'SEL-TIPO')
        const tipos = data.map((item: any) => ({
          label: item.type,
          value: item.pk,
        }))

        setTipo([...initTipo, ...tipos])
        setloading(false)
      } catch (error) {
        console.log(error)
      }
    }

    loadData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const convertoLink = async (arr: any) => {
    const newArr = await Promise.all(
      arr.map(async (item: any) => {
        const { url } = await download(`${item.state}.${item.asignedTo}`)

        const obj = {
          url,
          name: item.responseArea,
          nameS3: item.state,
          tipo: item.asignedTo,
          AluCode: item.responseCode,
          Adviser: item.responseStudent,
        }

        return obj
      })
    )

    setAdjunto(newArr)
  }

  const handleChange = async (e: any, id: string) => {
    console.log(id)
    switch (id) {
      case 'ddlTipo': {
        const { value } = e
        console.log(value)
        if (parseInt(value) !== 0) {
          setloading(true)
          try {
            const { data } = await apiSoporteVirtual.tipocse(
              value,
              'SEL-SUBTIPO'
            )
            const respSub = data.map((item: any) => ({
              label: item.subType,
              value: item.pk,
            }))
            console.log(respSub)
            setSubtipo([...initSubTipo, ...respSub])
            setFormConsulta({
              ...formConsulta,
              ddlTipo: value,
            })
            setloading(false)
            const DUENO: any = get(SET_DATA_DOCENTE)
            const DUENOSESSION = DUENO?.userName

            const codeteacher = get(USER_SESSION)
            const datos = await apiSoporteVirtual.fileAsesor(
              codeteacher,
              DUENOSESSION
            )
            console.log(datos.data)

            convertoLink(datos.data)
          } catch (error) {
            console.log(error)
          }
        }
        break
      }
      case 'ddlSubTipo': {
        const { value } = e
        console.log(e)
        setFormConsulta({
          ...formConsulta,
          ddlSubTipo: value,
        })
        break
      }
    }
  }

  const defaultValor = (id: string, arr: any) => {
    const ar = arr.filter((item: any) => parseInt(item.value) === parseInt(id))
    return ar.length > 0 ? ar[0] : arr[0]
  }

  const convertFileIcon = (name: string) => {
    const type = name.substring(name.lastIndexOf('.') + 1, name.length)
    let icon: any = faFilePdf
    console.log(name)
    switch (type) {
      case 'docx':
      case 'doc':
        icon = faFileWord
        break
      case 'xls':
      case 'xlsx':
        icon = faFileExcel
        break
      case 'pdf':
        icon = faFilePdf
        break
      case 'ppt':
      case 'pptx':
        icon = faFilePowerpoint
        break
      case 'mp3':
        icon = faFileAudio
        break
      case 'png':
      case 'jpg':
      case 'jpeg':
        icon = faFileImage
        break
      case 'mp4':
      case 'mpeg':
      case 'avi':
        icon = faFileVideo
        break
      case 'zip':
      case 'war':
        icon = faFileZipper
        break
      case 'txt':
      case 'csv':
        icon = faFileText
        break
      default:
        icon = faFile
        break
    }

    return icon
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
      'jpg',
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

  const insertarImagen = async (obj: any) => {
    try {
      const { nameS3, usuario, name, size } = obj
      const extend = name.substring(name.lastIndexOf('.') + 1, name.length)
      // TODO: traer desde storage

      const DUENO: any = get(SET_DATA_DOCENTE)
      const DUENOSESSION = DUENO?.userName

      const adviser = DUENOSESSION
      // const codeteacher = get(USER_SESSION)

      console.log('IMAGEPESO_', obj)

      const resp = await apiSoporteVirtual.insertImg(
        usuario,
        nameS3,
        name,
        extend,
        size,
        adviser
      )
      console.log('INSERT_IMG__', resp)
      return resp
    } catch (error) {
      console.log(error)
    }
  }

  const upload = async (obj: any, editor = false) => {
    // TODO: upload
    const DUENO: any = get('teacherCode')
    const USER: any = get('dueno_session')
    obj.usuario = DUENO
    obj.nameS3 = uuidv4()

    const { name, nameS3 } = obj

    setArchivo(obj)

    try {
      const tipo = name.substring(name.lastIndexOf('.') + 1, name.length)
      obj.tipo = tipo
      const resp = await apiSoporteVirtual.upload(obj)
      console.log('RESPUESTAUPLOAD___', resp)

      if (resp !== 200) {
        throw Error('Ocurrio un error inesperado.')
      }
      console.log('y sigue aqui....', Boolean(editor))
      const foo = Boolean(editor)
      if (!foo) {
        await insertarImagen(obj)
      }
      const { url } = await download(`${obj.nameS3}.${tipo}`)
      console.log('fileUrl', url)
      const AluCode = DUENO
      const Adviser = USER.toUpperCase()
      return { url, nameS3, AluCode, Adviser }
    } catch (error) {
      console.log(error)

      Swal.fire({
        title: 'Portal de Docentes',
        text: `Ocurrio un error inesperado.`,
        icon: 'warning',
        showCancelButton: false,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'OK',
      })
    }
  }

  const printAdjunto = (
    url: string,
    name: string,
    nameS3: string,
    tipo: string,
    AluCode: string,
    Adviser: string
  ) => {
    const link = { url, name, nameS3, tipo, AluCode, Adviser }

    setAdjunto([...adjunto, link])
  }

  const download = async (fileName: string) => {
    try {
      const resp = await apiSoporteVirtual.download(fileName)
      console.log('URL_UPLOAD', resp)
      return resp
    } catch (error) {
      console.log(error)
    }
  }

  const getFile = async (fileObj: any) => {
    setloading(true)

    if (validFile(fileObj)) {
      const newObj = { ...archivo, ...fileObj }

      console.log('NEWWWOBJJ__:', newObj)

      try {
        const { url, nameS3, AluCode, Adviser }: any = await upload(newObj)

        const tipo = fileObj.name.substring(
          fileObj.name.lastIndexOf('.') + 1,
          fileObj.name.length
        )

        printAdjunto(url, newObj.name, nameS3, tipo, AluCode, Adviser)

        setArchivo(initFile)
      } catch (error) {
        setArchivo(initFile)
        console.log(error)
      }
    }

    setloading(false)
  }

  const { ddlTipo, ddlSubTipo } = formConsulta

  const save = async (e: any) => {
    e.preventDefault()

    setFormConsulta({
      ...formConsulta,
      txtDescripcion: descrip,
    })

    if (!descrip.trim() || descrip.length < 20) {
      Swal.fire({
        title: 'Portal de Docentes',
        text: `Debe describir la consulta a derivar.`,
        icon: 'warning',
        showCancelButton: false,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'OK',
      })
      return
    }

    if (ddlTipo === '0') {
      Swal.fire({
        title: 'Portal de Docentes',
        text: `Debe seleccionar el Tipo para la consulta.`,
        icon: 'warning',
        showCancelButton: false,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'OK',
      })
      return
    }

    if (ddlSubTipo === '0') {
      Swal.fire({
        title: 'Portal de Docentes',
        text: `Debe seleccionar el SubTipo para la consulta.`,
        icon: 'warning',
        showCancelButton: false,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'OK',
      })
      return
    }

    try {
      setloading(true)
      const obj = {
        teacherCode: get(USER_SESSION) ,// 'N00011885',
        query: descrip,
        type: ddlTipo,
        subType: ddlSubTipo,
      }
      const { data } = await apiSoporteVirtual.insertConsulta(obj)
      const resp = data[0]

      // TODO: enviar email
      const bodyText = `
			<div>
			<p>Estimado(a) ${resp.teacherName}</p>
			<br/>
			<p>
					Acabas de registrar la siguiente consulta en Soporte Virtual UPN:
					<br/><br/>
					Código de la Consulta: <b>${resp.queryCode}</b>.<br/>
					Tipo: <b>${resp.type}</b>.<br/>
					Subtipo: <b>${resp.subType}</b>.<br/>
			</p>
			<br/>
			<br/>
			Saludos,<br/>Soporte Virtual UPN
			<br/>
			<br/>
			</div>
			`

      const emailJson = {
        EmailList: [resp.teacherEmail],
        DisplayName: 'UPN Docentes',
        Subject: `Registro de Consulta - ${resp.queryCode}`,
        IsHtml: true,
        ReplyToList: [resp.teacherEmail],
        AttachmentB64: null,
        AttachmentName: null,
        NotificationType: 1,
        EmailListCC: null,
        EmailListBCC: null,
        Queue: true,
        Body: bodyText,
      }

      const result: any = await apiSoporteVirtual.email(emailJson)

      console.log('emailResp', result.data)

      const emailResp = result.data

      if (emailResp === 'OK' || emailResp === '200' || emailResp === 'NOK') {
        Swal.fire({
          title: 'Portal de Docentes',
          text: `La consulta fue registrada correctamente.`,
          icon: 'success',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK',
        }).then(async (result) => {
          if (result.isConfirmed) {
            setFormConsulta(initForm)
            setloading(false)
            window.location.href = '/soporte-virtual'
          }
        })
      }
    } catch (error) {
      console.log(error)
    }

    setloading(false)
  }

  const quillObj: any = useRef(null)

  const handleImage = async () => {
    console.log('testHandleImage')

    const input: any = document.createElement('input')

    input.setAttribute('type', 'file')
    input.setAttribute('accept', 'image/*')
    input.click()

    input.onchange = async () => {
      const file: any = input?.files[0]
      const formData = new FormData()

      formData.append('image', file)

      const fileName = file.name
      const type = file.type

      console.log('FILEEEE_', file)

      const obj = {
        file,
        name: fileName,
        type,
        size: file.size,
      }

      console.log('TOUPLOAD__', obj)

      try {
        const uploads: any = await upload(obj, true)
        console.log('RESPUESTAUPLOAD___', uploads)

        const range = quillObj.current.getEditorSelection()
        const res = uploads.url
        quillObj.current.getEditor().insertEmbed(range.index, 'image', res)
      } catch (error) {
        console.log(error)
      }
    }
  }

  const removeImage = async (
    e: any,
    nameS3: string,
    AluCode: string,
    Adviser: string
  ) => {
    e.preventDefault()
    console.log('removeImagen', nameS3)

    try {
      setloading(true)
      const resp: any = await apiSoporteVirtual.deleteImgAws(nameS3)
      console.log('deleteAws', resp.data)

      const respClean: any = await apiSoporteVirtual.cleanAnexo(
        AluCode,
        nameS3,
        Adviser
      )
      console.log('respClean', respClean.data)
      const newAdj = adjunto.filter((item: any) => item.nameS3 !== nameS3)

      setAdjunto(newAdj)
      setloading(false)
    } catch (error) {
      console.log(error)
      setloading(false)
    }
  }

  const clearFileLoses = async () => {
    console.log('Clear File Loses')
    const AluCode: any = get('teacherCode')
    const Adviser: any = get('dueno_session')
    try {
      const datos = await apiSoporteVirtual.fileAsesor(AluCode, Adviser)
      console.log('clearFileLoses', datos.data)

      await Promise.all(
        datos.data.map(async (item: any) => {
          const resp: any = await apiSoporteVirtual.deleteImgAws(item.state)
          console.log('deleteAws', resp.data)

          const respClean: any = await apiSoporteVirtual.cleanAnexo(
            AluCode,
            item.state,
            Adviser
          )
          console.log('respClean', respClean.data)
        })
      )
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form onSubmit={(e: any) => save(e)}>
      <div className={styles.contenido}>
        <Loader loading={Loading} />
        <div className={styles.content}>
          <div className={styles.newConsulta}>
            <div className={styles.titulo}>
              <Label classname="text-warning h5 mt-3 mb-3 text-center">
                Nueva Consulta
              </Label>
            </div>
            <hr />

            <div>
              <div>
                <div>
                  <div className="form-group row mb-3">
                    <label className="col-md-3 text-end">
                      <b>tipo:</b>
                    </label>
                    <div className="col-md-6">
                      <AsyncSelect
                        options={tipo}
                        id="ddlTipo"
                        instanceId="ddlTipo"
                        name="ddlTipo"
                        defaultValue={defaultValor(ddlTipo, tipo)}
                        onChange={(e: any) => handleChange(e, 'ddlTipo')}
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="form-group row mb-3">
                    <label className="col-md-3 text-end">
                      <b>Sub Tipo:</b>
                    </label>
                    <div className="col-md-6">
                      <AsyncSelect
                        options={subTipo}
                        id="ddlSubTipo"
                        instanceId="ddlSubTipo"
                        name="ddlSubTipo"
                        defaultValue={defaultValor(ddlSubTipo, subTipo)}
                        onChange={(e: any) => handleChange(e, 'ddlSubTipo')}
                        isDisabled={ddlTipo === '0'}
                        value={defaultValor(ddlSubTipo, subTipo)}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <label>
                <b>Por favor describa su consulta:</b>
              </label>
              <div>
                <div className="adjuntos">
                  <ul
                    id="cphSite_body_list_load_file"
                    className='body-list-load-file list-unstyled row"'
                  >
                    {adjunto.map((item: any, index: number) => (
                      <li key={index}>
                        <a
                          href="#"
                          className="text-decoration-none"
                          data-names3={item.nameS3}
                          onClick={(e: any) =>
                            removeImage(
                              e,
                              item.nameS3,
                              item.AluCode,
                              item.Adviser
                            )
                          }
                        >
                          <FontAwesomeIcon
                            icon={faTimes}
                            className="fa-sm"
                          />
                          &nbsp;&nbsp;
                        </a>
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FontAwesomeIcon
                            icon={convertFileIcon(`${item.name}.${item.tipo}`)}
                            className="fa-sm me-2"
                          />
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <div>
                    <FileInputComponent
                      labelText={archivo.name}
                      multiple={false}
                      imagePreview={false}
                      callbackFunction={(fileArr: any) => {
                        getFile(fileArr)
                        // console.log(fileArr)
                      }}
                      accept="png"
                      buttonComponent={
                        <label
                          className="btn-default font-weight-normal"
                          style={{
                            fontSize: '12px',
                            maxHeight: '16px',
                            cursor: 'pointer',
                          }}
                        >
                          <small>
                            <FontAwesomeIcon
                              icon={faPaperclip}
                              className="fa-sm"
                            />
                          </small>
                          Adjuntar archivos{' '}
                          <small>(max. 5MB por adjunto)</small>
                        </label>
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
                        width: '70%',
                        display: 'none',
                      }}
                    />
                  </div>
                </div>
              </div>
              <br />
              <QuillRichText
                refe={quillObj}
                value={descrip}
                set={setDescrip}
                handleImage={handleImage}
              />
            </div>

            <div className="d-flex justify-content-center mt-3">
              <Button
                type="button"
                variant="secondary"
                size="medium"
                classname="mb-3"
                onclick={() => history.back()}
              >
                Regresar
              </Button>

              <Button
                type="button"
                variant="primary"
                size="medium"
                classname="mb-3 ms-3"
                onclick={(e: any) => save(e)}
              >
                Registrar mi Consulta
              </Button>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}

export default Index
