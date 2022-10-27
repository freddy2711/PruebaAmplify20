import { useState, useEffect, useRef, Fragment } from 'react'
import styles from './../../../components/templates/soporteVirtual/soporteVirtual.module.scss'
import Loader from '../../../components/UI/atoms/loader/Loader'
import Label from '../../../components/UI/atoms/label/Label'
import Button from '../../../components/UI/atoms/button/Button'
import { get } from 'local-storage'
import Swal from 'sweetalert2'
import FileInputComponent from 'react-file-input-previews-base64'
import { apiSoporteVirtual } from './../../api'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { v4 as uuidv4 } from 'uuid'
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
// import Swal from 'sweetalert2'
// import axios from 'axios'
import { CONSULTA_DATA } from './../../../consts/storageConst'
import dynamic from 'next/dynamic'

const QuillRichText = dynamic(
  () => import('../../../components/UI/molecules/quillRichText'),
  {
    ssr: false,
    loading: () => <Loader loading={true} />,
  }
)

const index = () => {
  const initFile = {
    name: 'ADJUNTAR ARCHIVOS (tamaño maximo 5mb)',
    type: '',
    size: 0,
    base64: '',
    file: null,
    nameS3: '',
  }

  const [Loading, setloading] = useState(false)
  const [detalle, setDetalle] = useState<any>([])
  const [respuesta, setRespuesta] = useState(false)
  const [descrip, setDescrip] = useState('')
  const [archivo, setArchivo] = useState<any>(initFile)
  const [adjunto, setAdjunto] = useState<any>([])
  const [anexos, setAnexos] = useState([])

  const quillObj: any = useRef(null)

  useEffect(() => {
    const loadData = async () => {
      setloading(true)
      const dataid: any = get(CONSULTA_DATA)
      const teacherCode: any = get('teacherCode')

      console.log(dataid)

      try {
        const { data } = await apiSoporteVirtual.docenteConsulta(
          teacherCode,
          dataid
        )
        console.log(data)

        const resp = await apiSoporteVirtual.apiAnexos(
          teacherCode,
          data[0].asignedTo
        )
        console.log('ANEXOOSS___', resp.data)
        setAnexos(resp.data)

        if (data[0].responseCode === 'E' && data[0].responseArea === 'S') {
          setRespuesta(true)
        }

        setDetalle(data)
        setloading(false)
      } catch (error) {
        console.log(error)
      }
    }

    loadData()
  }, [])

  const convertFileIcon = (name: string) => {
    const type = name.substring(name.lastIndexOf('.') + 1, name.length)
    let icon: any = faFilePdf
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

  const download = async (fileName: string) => {
    try {
      const resp = await apiSoporteVirtual.download(fileName)
      console.log('URL_UPLOAD', resp)
      return resp
    } catch (error) {
      console.log(error)
    }
  }

  const insertarImagen = async (obj: any) => {
    try {
      const { nameS3, usuario, name, size } = obj
      const extend = name.substring(name.lastIndexOf('.') + 1, name.length)
      // TODO: traer desde storage
      const adviser = 'RVI'

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
    const DUENO = get('teacherCode')
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
      console.log('y sigue aqui....')
      console.log('EDITAR_VALIDATION', editor)
      if (editor === false) {
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

      const obj = {
        file,
        name: fileName,
        type,
      }

      console.log('TOUPLOAD__', obj)

      try {
        const { url, nameS3 }: any = await upload(obj, true)
        console.log('RESPUESTAUPLOAD___', { url, nameS3 })

        const range = quillObj.current.getEditorSelection()
        const res = url
        quillObj.current.getEditor().insertEmbed(range.index, 'image', res)
      } catch (error) {
        console.log(error)
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

  const save = async (e: any) => {
    e.preventDefault()

    if (!descrip.trim() || descrip.length < 20) {
      Swal.fire({
        title: 'Portal de Docentes',
        text: `Debe describir la consulta a derivar.`,
        icon: 'warning',
        showCancelButton: false,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'OK',
      })
      quillObj.current.focus()
      return
    }

    try {
      setloading(true)
      const dataid: any = get(CONSULTA_DATA)

      const { data } = await apiSoporteVirtual.requestConsulta(
        'N00011885',
        descrip,
        dataid
      )
      const resp = data[0]

      // TODO: enviar email
      const bodyText = `
			<div>
			<p>Estimado(a) ${resp.responsable}</p>
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
        EmailList: [resp.emailResponsable],
        DisplayName: 'UPN Docentes',
        Subject: `Registro de Consulta - ${resp.queryCode}`,
        IsHtml: true,
        ReplyToList: [resp.emailResponsable],
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
        })

        setloading(false)
        window.location.href = '/soporte-virtual'
      }
    } catch (error) {
      console.log(error)
    }

    setloading(false)
  }

  const handleDownloadList = async (e: any, nameS3: string) => {
    e.preventDefault()
    const { url } = await download(nameS3)

    const anchor: any = document.createElement('a')
    console.log(url)
    anchor.setAttribute('href', url)
    anchor.setAttribute('target', '_blank')
    anchor.click()
  }

  return (
    <div className={styles.contenido}>
      <Loader loading={Loading} />
      <div className={styles.content}>
        <div className={styles.newConsulta}>
          <div className={styles.titulo}>
            <Label classname="text-warning h5 mt-3 mb-3 text-center">
              Detalle de la Consulta
            </Label>
          </div>
          <hr />

          <div className="chat">
            {detalle.length > 0
              ? detalle.map((item: any, index: number) => (
                  <div
                    key={index}
                    className={`form-group chat-one chat-one-${item.id}`}
                  >
                    <div className="img-chat">
                      <img src="https://intranet.upn.edu.pe/wsfoto/foto/MVdYR2dBdGdTbCsyd0NnaEdsY0NsUT09/Collaborator" />
                      <p
                        style={{
                          lineHeight: '1',
                          fontSize: '11px',
                          marginTop: '8px',
                        }}
                      >
                        <small>{item.state}</small>
                      </p>
                    </div>
                    <div className="msg-chat">
                      <div className="msg-chat-content">
                        <div
                          dangerouslySetInnerHTML={{
                            __html: item.response.replace(/\\"|"/g, ''),
                          }}
                        ></div>

                        <div className="container-attachment">
                          <div className="content-load-file">
                            <ul className="body-list-load-file-msg">
                              {anexos.length > 0
                                ? anexos.map((item: any, index: number) => (
                                    <li key={index}>
                                      {/* <a href='#' className='text-decoration-none' onClick={(e:any) => removeImage(e, `${item.state}.${item.asignedTo}` ,item.AluCode, item.Adviser)}>
																						<FontAwesomeIcon icon={faTimes} className="fa-sm"/>&nbsp;&nbsp;
																					</a> */}
                                      <a
                                        href="#"
                                        style={{ cursor: 'pointer' }}
                                        title="Descargar adjunto"
                                        target="_blank"
                                        rel="noreferrer"
                                        onClick={(e: any) =>
                                          handleDownloadList(
                                            e,
                                            `${item.state}.${item.asignedTo}`
                                          )
                                        }
                                      >
                                        <FontAwesomeIcon
                                          icon={convertFileIcon(
                                            item.responseArea
                                          )}
                                          className="fa-sm me-2"
                                        />
                                        {item.responseArea}
                                      </a>
                                    </li>
                                  ))
                                : null}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              : null}
          </div>

          {respuesta ? (
            <Fragment>
              <form>
                <div className="adjuntos">
                  <ul
                    id="cphSite_body_list_load_file"
                    className='body-list-load-file list-unstyled row"'
                  >
                    {adjunto.map((item: any, index: number) => (
                      <li key={index}>
                        <a
                          href="#"
                          data-names3={item.nameS3}
                          className="text-decoration-none"
                          onClick={(e: any) =>
                            removeImage(
                              e,
                              `${item.nameS3}.${item.tipo}`,
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
                            icon={convertFileIcon(item.name)}
                            className="fa-sm"
                          />
                          &nbsp;&nbsp; {item.name}
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
                <br />
                <QuillRichText
                  refe={quillObj}
                  value={descrip}
                  set={setDescrip}
                  handleImage={handleImage}
                />
              </form>
            </Fragment>
          ) : null}

          <div className="d-flex justify-content-center mt-3">
            <Button
              type="button"
              variant="secondary"
              size="medium"
              classname="mb-3"
              onclick={(e: any) => history.back()}
            >
              Regresar
            </Button>

            {respuesta ? (
              <Button
                type="button"
                variant="primary"
                size="medium"
                classname="mb-3 ms-3"
                onclick={(e: any) => save(e)}
              >
                Registrar mi Consulta
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}

export default index
