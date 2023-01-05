import { useState, useEffect } from 'react'
import { Form } from 'react-bootstrap'
import Label from '../../../components/UI/atoms/label/Label'
import Tabla from '../../../components/UI/organisms/table/Tabla'
import Thead from '../../../components/UI/molecules/table/thead/Thead'
import Tbody from '../../../components/UI/molecules/table/tbody/Tbody'
import styles from '../../../components/templates/evaluacionComp/EvaluacionComp.module.scss'
import Button from '../../../components/UI/atoms/button/Button'
import Select from '../../../components/UI/atoms/select/Select'
import { Tabs } from '../../../components/UI/organisms/tabs/TabBlock.stories'
import { Tab } from '../../../components/UI/molecules/tabchild/TabChild.stories'
import Pane from '../../../components/UI/molecules/pane/Pane'
import Modals from '../../../components/UI/atoms/modal/Modal'
import Router from 'next/router'
import dynamic from 'next/dynamic'
import { v4 as uuidv4 } from 'uuid'
import Swal from 'sweetalert2'
import { catchingErrorFront } from './../../../helpers/helpers'
import {
  CLASS_SELECTED_EC,
  CB_COMPETENCE,
  USER_SESSION,
} from '../../../consts/storageConst'
import { get } from 'local-storage'
import Loader from '../../../components/UI/atoms/loader/Loader'
import { apiCompetence } from '../../api'
import FileInputComponent from 'react-file-input-previews-base64'
import Input from '../../../components/UI/atoms/input/Input'

const TableDinamic = dynamic(
  () => import('../../../components/UI/molecules/tableDinamic/Table'),
  {
    ssr: false,
  }
)

const COLUMNS = [
  { label: 'Código', field: 'aluCodigo', sort: 'asc' },
  { label: 'Ap. paterno', field: 'aluPaterno', sort: 'asc' },
  { label: 'Ap. materno', field: 'aluMaterno', sort: 'asc' },
  { label: 'Nombres', field: 'aluNombres', sort: 'asc' },
  { label: 'Carrera', field: 'carNombre', sort: 'asc' },
  { label: 'Nro. matrícula', field: 'matricule', sort: 'asc' },
  { label: 'Est.', field: 'madeEstado', sort: 'asc' },
  { label: 'Acción', field: 'action', sort: 'asc' },
  { label: 'Desarrollo Competencia', field: 'notaPorcentual', sort: 'asc' },
  { label: 'Promedio escala', field: 'promedioPuntaje', sort: 'asc' },
  { label: 'Categorización', field: 'nivelcategorizacion', sort: 'asc' },
]

const COLUMNSRETRO = [
  { label: 'Fecha', field: 'EscalaId', sort: 'asc' },
  { label: 'Usuario', field: 'Description', sort: 'asc' },
  { label: 'Retroalimentación', field: 'Score', sort: 'asc' },
]

/*
 {
	"CompetenceId": "19033",
	"generalId": "740       ",
	"classCode": "2224021206",
	"nameOrigin": "EVIDENCIAS DE T1.pdf",
	"ruta": "competencias/pruebas/3291304c-5d1b-4aa4-b258-9a7680b13097.pdf",
	"dateCreate": "2/22/2022 4:13:20 PM",
	"dateUpdate": "",
	"userCreate": "BBU",
	"active": "True",
	"detailEviden": "TRABAJOS T1",
	"notCode": "T1 - TRABAJO 1"
}
 */

const COLUMNSADJ = [
  { label: '#ID			', field: 'CompetenceId', sort: 'asc' },
  { label: 'Detalle', field: 'detailEviden', sort: 'asc' },
  { label: 'Nombre File', field: 'nameOrigin', sort: 'asc' },
  { label: 'Fecha', field: 'dateCreate', sort: 'asc' },
  { label: 'Tipo evaluación', field: 'notCode', sort: 'asc' },
  { label: 'Acciones', field: 'action', sort: 'asc' },
]

const Index = ({ ip }: any) => {
  const initDetails = {
    CurCodigo: '',
    CurNombre: '',
    ClaCodigo: '',
    CarNombre: '',
    SedCodigo: '',
    SemCodigo: '',
    TipoDoc: '',
    ClaseFull: '',
    ClaTopeFaltas: '',
    ClaTipo: '',
  }

  const initFile = {
    name: 'ADJUNTAR ARCHIVOS (tamaño maximo 10mb)',
    type: '',
    size: 0,
    base64: '',
    file: null,
    tipoEvaluacion: '',
    detalle: '',
    conductas: [],
  }

  const initDataForm = {
    classCode: '',
    user: '',
    comment: '',
    ip: '',
    notas: [],
    s_alu_codigo: '',
    s_cla_codigo: '',
    n_competencia_id: '',
  }

  const [details, setDetails] = useState(initDetails)
  const [cbo, setCbo] = useState([])
  const [compe, setCompe] = useState(false)
  const [Loading, setloading] = useState(false)
  const [planilla, setPlanilla] = useState([])
  const [conductas, setConductas] = useState([])
  const [archivo, setArchivo] = useState<any>(initFile)
  const [cboTipoEva, setCboTipoEva] = useState([])
  const [competenciaId, setCompetenciaId] = useState<any>()
  const [listaAdjunto, setListaAdjunto] = useState<any>([])
  const [modalShow, setModalShow] = useState(false)
  const [modalShow2, setModalShow2] = useState(false)
  const [registerAdjId, setRegisterAdjId] = useState('')
  const [attachConducts, setAttachConducts] = useState([])
  const [datosAlu, setDatosAlu] = useState({})
  const [datosConductasTable, setDatosConductasTable] = useState([])
  const [commentPermisse, setCommentPermisse] = useState(false)
  const [retroList, setRetroList] = useState([])
  const [formData, setFormData] = useState<any>(initDataForm)

  // MODAL DATA Evaluar Compe
  const initModalData = {
    titulo: '',
    definicion: '',
    competenciaSelectedId: '',
    codigoAlumno: '',
    codigoCompetenceId: '',
    aluData: {
      aluCodigo: '',
      aluPaterno: '',
      aluMaterno: '',
      aluNombres: '',
      carNombre: '',
      madeNroVeces: '',
      arEstado: '',
      madeEstado: '',
      notaPorcentual: '',
      notaVigesima: '',
      aluCompetenciaId: '',
      promedioPuntaje: '',
      nivelcategorizacion: '',
      action: null,
    },
  }

  let CompetenciaIdVAR: any

  const [modalData, setModalData] = useState(initModalData)

  let registerAdjIdVAR: any = null

  const DUENO = get(USER_SESSION)

  const handleRadioBtns = (e: any) => {
    const { name, value } = e.target

    const [cumplio, escalaId] = value.split(',')

    // para retroalimentacion
    let seleccionados = 0

    if (parseInt(cumplio) > 0) {
      seleccionados = seleccionados + 1
    }

    console.log('seleccionados', seleccionados)

    const nota = {
      n_escala_id: escalaId,
      n_nota_valor: cumplio,
      n_criterio_desempeno_id: name,
    }

    console.log(nota)

    setFormData({
      ...formData,
      notas: [...formData.notas, nota],
    })
  }

  const renderRadioButtons = (escalas: any, name: string) => {
    return (
      <div>
        {escalas !== null && escalas.length > 0
          ? escalas.map((item: any, index: number) => (
              <div key={index}>
                <input
                  id={item.EscalaId + name}
                  type="radio"
                  value={`${item.Fulfilled === 'True' ? 1 : 0},${
                    item.EscalaId
                  }`}
                  name={name}
                  onChange={(e: any) => handleRadioBtns(e)}
                />{' '}
                <label htmlFor={item.EscalaId + name}>{item.Description}</label>
              </div>
            ))
          : null}
      </div>
    )
  }

  const listaConductaEscala = async (datosAlu: any) => {
    try {
      const escalas = await apiCompetence.getEscalaCompetencia(competenciaId)

      // esto devuelve es un texto que se coloca en el tooltip de escala nada mas, guarda en state y pinta en el tooltip
      console.log('ESCALASSS___', escalas)

      const Accion1 = 'GET-CRI-DES'
      const resp1 = await apiCompetence.listCompetences(
        Accion1,
        competenciaId,
        'null',
        'null',
        'null'
      )

      const newResp1: any = await Promise.all(
        resp1.map(async (item: any) => {
          const Accion1A = 'GET-COND-ESP'
          const resp1A = await apiCompetence.listCompetences(
            Accion1A,
            competenciaId,
            item.CriterioDesmpenoId,
            details.ClaCodigo,
            datosAlu.codigoAlumno
          )

          console.log('resp1Amap_', resp1A)

          const newItem = {
            ...item,
            conductaEsperadaDescripcion: resp1A[0],
            escala: escalas.length > 0 ? escalas : null,
          }
          return newItem
        })
      )

      console.log('despues_', await newResp1)

      setDatosConductasTable(newResp1)

      const Accion2 = 'GET-COMP-COMENT'
      const resp2 = await apiCompetence.listCompetences(
        Accion2,
        competenciaId,
        'null',
        details.ClaCodigo,
        datosAlu.codigoAlumno
      )

      // TODO VALIDAR SI PERMITE COMENTARIO resp2
      const coment = resp2[0]
      if (coment.PermiteComentario === 'True') {
        setCommentPermisse(true)
      }

      // TODO : retroalimentacion
      const retroResp = await apiCompetence.retro(competenciaId)
      console.log(retroResp)
      setRetroList(retroResp)

      setloading(false)
      setModalShow(true)
      console.log('listaConductaEscala___', { resp1, resp2 })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    setModalData({
      ...modalData,
      ...datosAlu,
    })
    if (Object.entries(datosAlu).length !== 0) {
      listaConductaEscala(datosAlu)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [datosAlu])

  useEffect(() => {
    setloading(true)
    const load = async () => {
      const detailsST: any = JSON.parse(get(CLASS_SELECTED_EC))
      // console.log(detailsST)
      setDetails(detailsST)

      const cboLS: any = JSON.parse(get(CB_COMPETENCE))
      // console.log(cboLS)
      setCbo(cboLS)

      try {
        const resp = await apiCompetence.listTipo(detailsST.ClaCodigo)
        console.log('TipoEvaluacion', resp)
        setCboTipoEva(resp)
      } catch (error) {
        console.log(error)
      }
    }

    load()

    setCompe(false)

    setloading(false)
  }, [])

  const gotoback = () => {
    Router.back()
  }

  const gvNotasRowCommand = (item: any, modalData: any) => {
    setloading(true)

    console.log('modalDataVAR____:', modalData)

    setDatosAlu({
      codigoAlumno: item.aluCodigo,
      codigoCompetenceId: item.aluCompetenciaId,
      aluData: item,
    })
  }

  const handleCbo = async (e: any) => {
    const value = e.target.value

    const datosCompeSelect: any = cbo.filter(
      (item: any) => item.CompetenceId === value
    )

    setModalData({
      ...modalData,
      competenciaSelectedId: value,
      titulo: datosCompeSelect[0].CompetenceTitle,
      definicion: datosCompeSelect[0].CompetenceTeacherDescription,
    })

    console.log('modalDataVAR____:', modalData)

    if (parseInt(value) !== 0) {
      // console.log('cboSelected', value)
      setloading(true)
      setCompetenciaId(value)
      CompetenciaIdVAR = value
      try {
        const resp = await apiCompetence.competencePlanilla(
          details.ClaCodigo,
          value
        )
        console.log(resp)
        if (resp.length > 0) {
          setCompe(true)
          resp.forEach((element: any) => {
            element.action = (
              <Button
                type="button"
                variant="secondary"
                classname="mb-3 text-nowrap"
                onclick={() => gvNotasRowCommand(element, modalData)}
              >
                Evaluar Competencia
              </Button>
            )
          })
          setPlanilla(resp)
        }
      } catch (error) {
        console.log(error)
      }

      try {
        const resp = await apiCompetence.conductasList(value)
        // console.log('CONDUCTAS A EVALUAR', resp)
        if (resp.length > 0) {
          setConductas(resp)
        }
      } catch (error) {
        console.log(error)
      }

      // TODO: CARGAR TABLA ADJUNTOS
      await getListAdj(value, details.ClaCodigo)

      setloading(false)
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

  const upload = async (obj: any) => {
    // TODO: upload
    obj.usuario = DUENO

    try {
      const resp = await apiCompetence.upload(obj)
      console.log('URL_UPLOAD', resp)
      return resp
    } catch (error) {
      console.log(error)
    }
  }

  const saveAdjunto = async (data: any) => {
    // TODO adjuntar Aduntos

    const obj = {
      classCode: details.ClaCodigo,
      guid: uuidv4(),
      nameOrigin: data.name,
      bytes: parseInt(data.file.size),
      typeMime: data.file.type,
      route: process.env.NEXT_PUBLIC_ROUTE,
      createUser: DUENO,
      competenceId: parseInt(competenciaId),
      evidenceDetail: data.detalle,
      behaviorDetail: '',
      noteId: parseInt(data.tipoEvaluacion),
    }

    // console.log('SAVEEADJUNTOOO____:', obj)

    try {
      const resp = await apiCompetence.guardarAdjunto(obj)
      // console.log('RESP_SAVEEE___', resp)
      setRegisterAdjId(resp)
      registerAdjIdVAR = resp
    } catch (error) {
      console.log(error)
    }
  }

  const saveConducts = async (data: any) => {
    // console.log(data.conductas)

    const conducts = data.conductas

    const arrayConducts: any = []

    conducts.forEach(async (item: any) => {
      // console.log(item.conductaEsperadaId)
      const resp = await apiCompetence.guardarConducta(
        registerAdjId === '' ? registerAdjIdVAR : registerAdjId,
        item.conductaEsperadaId
      )
      arrayConducts.push(resp)
    })

    // console.log('RESSSPCONDUCTS__:', await arrayConducts)
  }

  const showConductas = async (item: any) => {
    setloading(true)
    const { CompetenceId } = item

    try {
      const resp = await apiCompetence.AttachConducts(CompetenceId)
      // console.log(resp)

      setAttachConducts(resp)
    } catch (error) {
      console.log(error)
    }

    setModalShow2(true)
    setloading(false)
  }

  const download = async (item: any) => {
    setloading(true)

    const { nameOrigin } = item

    try {
      const obj = {
        name: `${nameOrigin}`,
      }
      const resp = await apiCompetence.download(obj)

      console.log(resp)
      window.open(resp, '_ blank')
    } catch (error) {
      console.log(error)
    }

    setloading(false)
  }

  const deletes = async (id: string) => {
    try {
      Swal.fire({
        title: 'Portal de Docentes',
        text: `Estas seguro de eliminar el adjunto?`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Si',
        cancelButtonText: 'No',
      }).then(async (result) => {
        if (result.isConfirmed) {
          setloading(true)
          const resp = await apiCompetence.deletes(id)
          console.log(resp)
          if (resp === 1) {
            await getListAdj(CompetenciaIdVAR, details.ClaCodigo)
          }

          Swal.fire('Eliminado!', 'El adjunto ha sido eliminado.', 'success')

          setloading(false)
        }
      })
    } catch (error) {
      catchingErrorFront(error)
    }

    setloading(false)
  }

  const handleAction = (e: any, item: any) => {
    const { name } = e.target
    switch (name) {
      case 'btn_save':
        console.log(item)
        download(item)
        break
      case 'btn_delete':
        deletes(item.CompetenceId)
        break
      case 'btn_see':
        console.log(name)
        showConductas(item)
        break
      default:
        break
    }
  }

  const addActions = (lista: any) => {
    lista.forEach((item: any) => {
      item.action = (
        <div className="text-nowrap">
          <Button
            type="button"
            name="btn_save"
            variant="primary"
            classname="ms-1"
            onclick={(e: any) => handleAction(e, item)}
          >
            DESCARGAR
          </Button>
          <Button
            type="button"
            name="btn_delete"
            variant="danger"
            classname="ms-1"
            onclick={(e: any) => handleAction(e, item)}
          >
            ELIMINAR
          </Button>
          <Button
            type="button"
            name="btn_see"
            variant="info"
            classname="ms-1"
            onclick={(e: any) => handleAction(e, item)}
          >
            VER CONDUCTAS
          </Button>
        </div>
      )
    })

    return lista
  }

  const getListAdj = async (competenceid: string, classCode: string) => {
    try {
      const lista = await apiCompetence.listAdjunto(competenceid, classCode)
      console.log('LISTAAA___', [lista, competenceid, classCode])
      const btnActions = addActions(lista)
      setListaAdjunto(btnActions)
    } catch (error) {
      console.log(error)
    }
  }

  const getFile = async (fileObj: any) => {
    setloading(true)

    if (validFile(fileObj)) {
      const newObj = { ...archivo, ...fileObj }

      console.log('NEWWWOBJJ__:', newObj)

      setArchivo(newObj)

      const uploads: any = await upload(newObj)

      console.log('RESPUESTAUPLOAD___', uploads)
      if (parseInt(uploads) !== 200) {
        Swal.fire({
          title: 'Portal de Docentes',
          text: `Ocurrio un error inesperado.`,
          icon: 'warning',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK',
        })
      }

      // console.log('UPLOADS___', uploads)

      await saveAdjunto(newObj)

      await saveConducts(newObj)

      setArchivo(initFile)

      setConductas([])

      // TODO: CARGAR TABLA ADJUNTOS
      await getListAdj(competenciaId, details.ClaCodigo)
    }

    setloading(false)
  }

  const handleform = (e: any) => {
    const { name, value } = e.target
    // console.log(`name: ${name}, value: ${value}`)
    setArchivo({
      ...archivo,
      [name]: value,
    })
  }

  const handleCheck = (e: any, item: any) => {
    const { value, checked } = e.target
    // console.log(`valor: ${value}, check: ${checked}`)

    if (checked) {
      setArchivo({
        ...archivo,
        conductas: [...archivo.conductas, item],
      })
    } else {
      setArchivo({
        ...archivo,
        conductas: archivo.conductas.filter(
          (item: any) => item.conductaEsperadaId !== value
        ),
      })
    }
  }

  const xmlConstruct = (arrai: Array<any>, obj: any) => {
    return arrai.map((item: any) => {
      const xmlAsis = `<nota 
					n_escala_id="${item.n_escala_id}" 
					s_alu_codigo="${obj.s_alu_codigo}" 
					s_cla_codigo="${obj.s_cla_codigo}" 
					n_competencia_id="${obj.n_competencia_id}" 
					n_nota_valor="${item.n_nota_valor}" 
					n_criterio_desempeno_id="${item.n_criterio_desempeno_id}"
				/>
			`
      return xmlAsis
    })
  }

  const SaveRegisterNotesCompetence = async (e: any) => {
    e.preventDefault()

    const obj = {
      s_alu_codigo: modalData.codigoAlumno,
      s_cla_codigo: details.ClaCodigo,
      n_competencia_id: competenciaId,
    }

    const datos = formData.notas

    const xmlFor = xmlConstruct(datos, obj)

    const xmldata = `<registro>${xmlFor.join('')}</registro>`

    const xml = xmldata.replace(/ {2} |\r\n|\n|\r/gm, '')

    try {
      const item = {
        classCode: details.ClaCodigo,
        dateXml: xml,
        user: DUENO,
        ip,
        comment: formData.comment,
      }

      const resp = await apiCompetence.registerNotesCompetence(item)

      if (resp === '1') {
        Swal.fire({
          title: 'Portal de Docentes',
          text: `Se registro Correctamente`,
          icon: 'success',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK',
        }).then((result) => {
          console.log(result)
          if (result.isConfirmed) {
            // console.log('confirmed!!!')
            window.location.reload()
          }
        })
      } else {
        Swal.fire({
          title: 'Se produjo un error',
          text: `No se han podido guardar los datos.`,
          icon: 'success',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK',
        })
      }
    } catch (error) {
      console.log(error)
    }
  }

  const dataForm = (e: any) => {
    const { name, value } = e.target

    setFormData({
      ...formData,
      [name]: value,
    })
  }

  return (
    <div className={styles.contenido}>
      <Loader loading={Loading} />
      <div className={styles.content}>
        <div className={styles.titulo}>
          <Label classname="text-warning h5 mt-3 mb-3">
            Evaluación de Competencias - Clase: {details.ClaCodigo}
          </Label>
        </div>
        <hr />
        <Button
          type="button"
          variant="secondary"
          classname="mb-3"
          onclick={gotoback}
        >
          Regresar
        </Button>
        <hr />

        <div className={styles.tablaDetalle}>
          <Tabla classname="tablaRA">
            <Thead>
              <th
                scope="col"
                colSpan={2}
              >
                DATOS DE LA SESIÓN DE CLASE
              </th>
            </Thead>
            <Tbody>
              <tr>
                <td style={{ fontWeight: 'bold' }}>Semestre</td>
                <td>{details.SemCodigo}</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold' }}>Sede</td>
                <td>{details.SedCodigo}</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold' }}>Carrera</td>
                <td>{details.CarNombre}</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold' }}>Código del curso</td>
                <td>{details.CurCodigo}</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold' }}>Nombre del curso</td>
                <td>{details.CurNombre}</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold' }}>Clase</td>
                <td>{details.ClaCodigo}</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold' }}>Tope faltas</td>
                <td>{details.ClaTopeFaltas}</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold' }}>Tipo Clase</td>
                <td>{details.ClaTipo}</td>
              </tr>
            </Tbody>
          </Tabla>
        </div>

        <div className={styles.cbo}>
          <Label>Seleccionar una competencia: </Label>
          <Select
            id="cboCompetencia"
            onChange={handleCbo}
          >
            {cbo.length > 0 &&
              cbo.map((item: any, index: number) => (
                <option
                  key={index}
                  value={item.CompetenceId}
                >
                  {item.CompetenceTitle}
                </option>
              ))}
          </Select>
        </div>

        <div className={styles.tabs}>
          <Tabs defaultActiveKey={'Evaluacion'}>
            <Tab
              title="Evaluación"
              eventKey={'Evaluacion'}
            >
              <Pane>
                <Form>
                  {compe ? (
                    <>
                      <div className={styles.tabla}>
                        <TableDinamic
                          columns={COLUMNS}
                          listData={planilla}
                        />
                      </div>
                      <Modals
                        size="lg"
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                        titulo={'RÚBRICA - ' + modalData.titulo}
                      >
                        <Tabs defaultActiveKey={'EvaluacionModal'}>
                          <Tab
                            title="Evaluación"
                            eventKey={'EvaluacionModal'}
                          >
                            <Pane>
                              <div className="contenidoPaneModalEvaluacion">
                                <div>
                                  <p>
                                    <b>Definición de la competencia:</b>
                                  </p>
                                  <p>{modalData.definicion}</p>
                                </div>

                                <div className="aluName">
                                  <h6 className="text-center text-info">{`${modalData.aluData?.aluNombres} ${modalData.aluData?.aluPaterno} ${modalData.aluData?.aluMaterno}`}</h6>
                                </div>
                                <div className="tablasConductas">
                                  {datosConductasTable.length > 0
                                    ? datosConductasTable.map(
                                        (item: any, index: number) => (
                                          <table
                                            key={index}
                                            cellPadding="0"
                                            cellSpacing="0"
                                            className="table table-sm table-bordered"
                                          >
                                            <tbody>
                                              <tr>
                                                <th>
                                                  Criterio de la competencia
                                                </th>
                                                <th>Conducta a evaluar</th>
                                                <th>
                                                  Escala{' '}
                                                  <a
                                                    href="#"
                                                    data-toggle="tooltip"
                                                    data-html="true"
                                                    title={''}
                                                    data-original-title=""
                                                  >
                                                    (?)
                                                  </a>
                                                </th>
                                              </tr>
                                              <tr>
                                                <td rowSpan={1}>
                                                  <p>
                                                    <b>
                                                      {item.CriterioDescripcion}
                                                    </b>
                                                  </p>
                                                </td>
                                                <td>
                                                  {
                                                    item
                                                      .conductaEsperadaDescripcion
                                                      .ConductaEsperadaDescripcion
                                                  }
                                                </td>
                                                <td className="col-md-2">
                                                  {renderRadioButtons(
                                                    item.escala,
                                                    item
                                                      .conductaEsperadaDescripcion
                                                      .ConductaEsperadaId
                                                  )}
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        )
                                      )
                                    : null}
                                </div>
                                <div>
                                  <textarea
                                    name="comment"
                                    rows={6}
                                    cols={20}
                                    id="comment"
                                    style={{
                                      width: '100%',
                                    }}
                                    disabled={!commentPermisse}
                                    onChange={(e: any) => dataForm(e)}
                                    value={formData.comment}
                                  ></textarea>
                                </div>
                                <div className="buttons flex justify-content-center text-center">
                                  <Button
                                    type="submit"
                                    variant="primary"
                                    classname="me-3"
                                    onclick={SaveRegisterNotesCompetence}
                                  >
                                    Guardar Evaluación
                                  </Button>
                                  <Button
                                    type="button"
                                    variant="secondary"
                                  >
                                    Cancelar
                                  </Button>
                                </div>
                              </div>
                            </Pane>
                          </Tab>

                          <Tab
                            title="Historial Retroalimentación"
                            eventKey={'panel_retro'}
                          >
                            <Pane>
                              <div>
                                <TableDinamic
                                  columns={COLUMNSRETRO}
                                  listData={retroList}
                                />
                              </div>
                            </Pane>
                          </Tab>
                        </Tabs>
                      </Modals>
                    </>
                  ) : null}
                </Form>
              </Pane>
            </Tab>
            <Tab
              title="Evidencias"
              eventKey={'Evidencias'}
            >
              <Pane>
                <div className="contentPanelForm">
                  <Form
                    id="evidencia"
                    onSubmit={gotoback}
                  >
                    <div className="row">
                      <div className="col-lg-6">
                        <Label>Detalle de Evidencia:</Label>
                        <Input
                          id="detalle"
                          name="detalle"
                          type="text"
                          placeholder=""
                          value={archivo.detalle}
                          onchange={(e: any) => handleform(e)}
                        />
                      </div>
                      <div className="col-lg-6">
                        <Label>Seleccionar tipo evaluación:</Label>
                        <Select
                          id="tipoEvaluacion"
                          name="tipoEvaluacion"
                          onChange={(e: any) => handleform(e)}
                          value={archivo.tipoEvaluacion}
                        >
                          {cboTipoEva.length > 0
                            ? cboTipoEva.map((item: any, index: number) => (
                                <option
                                  key={index}
                                  value={item.noteId}
                                >
                                  {item.note}
                                </option>
                              ))
                            : null}
                        </Select>
                      </div>

                      <div className="col-lg-12 mt-3">
                        <Label>
                          ¿Qué conductas le permitió evaluar esta actividad?:
                        </Label>
                        <div className="d-flex flex-column">
                          {conductas.length > 0
                            ? conductas.map((item: any, index: number) => (
                                <Form.Check
                                  key={index}
                                  type={`checkbox`}
                                  id={item.conductaEsperadaId}
                                  label={item.conductaEsperadaDescripcion}
                                  name={item.conductaEsperadaId}
                                  value={item.conductaEsperadaId}
                                  onChange={(e: any) => handleCheck(e, item)}
                                />
                              ))
                            : null}
                        </div>
                      </div>

                      <div className="offset-md-6 col-md-6 col-12 mt-3">
                        <Label>ADJUNTAR ARCHIVOS (tamaño maximo 10mb):</Label>
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
                            <button
                              type="button"
                              className="btn btn-primary"
                              style={{
                                borderRadius: '0 0.25rem 0.25rem 0',
                              }}
                            >
                              Cargar Evidencia
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
                            width: '70%',
                          }}
                        />
                      </div>
                    </div>
                  </Form>
                  <div className="tablaAdjuntos mt-3">
                    {listaAdjunto.length > 0 ? (
                      <TableDinamic
                        columns={COLUMNSADJ}
                        listData={listaAdjunto}
                      />
                    ) : null}
                  </div>
                  <Modals
                    show={modalShow2}
                    onHide={() => setModalShow2(false)}
                    titulo="Conductas Evaluadas"
                  >
                    {attachConducts.length > 0
                      ? attachConducts.map((item: any, index: number) => (
                          <p key={index}>
                            <input
                              type="checkbox"
                              checked={true}
                              disabled={true}
                            />{' '}
                            {item.competenciaid}
                          </p>
                        ))
                      : null}
                  </Modals>
                </div>
              </Pane>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

export default Index

// pdf,doc,docx,xlsx,xls,pptx,ppt,jpeg,rar,zip,
export async function getServerSideProps({ req }: any) {
  console.log(req.headers)
  const ip = req.headers['x-real-ip'] || req.connection.remoteAddress

  return {
    props: {
      ip,
    },
  }
}
