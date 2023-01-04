import { useEffect, useState } from 'react'

import { json2xml } from 'xml-js'

import Router from 'next/router'
import Inputs from '../../components/UI/atoms/input/Input'
import Button from '../../components/UI/atoms/button/Button'
import Label from '../../components/UI/atoms/label/Label'
import styles from '../../components/templates/ingresoNotas/IngresoNotas.module.scss'
import Tabla from '../../components/UI/organisms/table/Tabla'
import dynamic from 'next/dynamic'
import Loader from '../../components/UI/atoms/loader/Loader'
import getAlert from '../../hooks/jspdf/alertify'
import ViewInput from '../../components/UI/molecules/recuperarAdelantarClases/viewInput/ViewInput'
import { get } from 'local-storage'
import { apiNotes, apiTokens, apiAsistencia } from '../api/index'
import Select from '../../components/UI/atoms/select/Select'
import {
  TITLE_EMERG,
  MSM_NOTAS_MAIL_ERROR,
  MSM_NOTAS_MAIL_OK,
  SET_DATA_DOCENTE,
  MSM_NOTAS_SELECCIONADA,
  SET_NOTES_SELECT,
  MSM_NOTAS_CLASE_VIRTUAL,
  SET_SEMESTERCODE,
  SET_SEMESTERCRONOLOGICO,
  MSM_SE_ACTIVA_REGISTRO,
  changeRegExp,
  MSM_GENERA_TOKEN,
  MSM_TOKEN_OK,
  MSM_TOKEN_NO,
  MSM_VISIBLE_NONE,
  MSM_VISIBLE_BLOCK,
  convertStringToDate,
  MSM_SELECCIONADO_VIRTUAL,
  MSM_REGISTRO_OK,
  convertStringToDateTime,
  DUENO_SESSION,
  MSM_TOKEN_NO2,
  SET_NOTES_CA,
  SET_NOTES_RE,
  callErrorValid,
} from '../../consts/storageConst'
import { faL } from '@fortawesome/free-solid-svg-icons'
import { redirectRouter } from '../../helpers/routerRedirect'

const Modals = dynamic(() => import('../../components/UI/atoms/modal/Modal'), {
  ssr: false,
})
const Thead = dynamic(
  () => import('../../components/UI/molecules/table/thead/Thead'),
  {
    ssr: false,
  }
)
const Tbody = dynamic(
  () => import('../../components/UI/molecules/table/tbody/Tbody'),
  {
    ssr: false,
  }
)

const TableDinamic = dynamic(
  () => import('../../components/UI/molecules/tableDinamic/Table'),
  {
    ssr: false,
  }
)

const Alerta = dynamic(() => import('../../components/UI/atoms/alert/Alerts'), {
  ssr: false,
})
let ClaCodigo: any = ''
let selectNote: any = ''
let enviarTokenPortal: any = 0
const listTempoNota: any = []
let showTableDinami: any = MSM_VISIBLE_NONE
let showTableStatic: any = MSM_VISIBLE_BLOCK
let selectOption = '0'

const COLUMNS = [
  { label: 'Código', field: 'studentCode', sort: 'asc' },
  { label: 'Ap. paterno', field: 'studentPaternal', sort: 'asc' },
  { label: 'Ap. materno', field: 'studentMaternal', sort: 'asc' },
  { label: 'Nombres', field: 'studentName', sort: 'asc' },
  { label: 'Carrera', field: 'raceName', sort: 'asc' },
  { label: 'Nro. matrícula', field: 'nroTimes', sort: 'asc' },
  { label: 'Nota(*)', field: 'notekey', sort: 'asc' },
  { label: 'Est.', field: 'madeEstate', sort: 'asc' },
]
let dateTimeNow = ''
const IngresoNotas = () => {
  const [Loading, setloading] = useState(true)
  const [stateMail, setStateMail] = useState(true)
  const [disable, setDisable] = useState(false)
  const [listOption, setListOption] = useState([])
  const [listStudentNota, setListStudentNota] = useState([])
  const [tokenDinamic, setTokenDinamic] = useState(0)
  const [guardarDisable, setGuardarDisable] = useState(true)
  const [progress, setprogress] = useState(0)
  const [modalShowAvance, setModalShowAvance] = useState(false)
  const [requestTableDinamic, setRequestTableDinamic] = useState({})

  const dataUser: any = get(SET_DATA_DOCENTE)
  const dataNotes: any = get(SET_NOTES_SELECT)
  const semesterCode: any = get(SET_SEMESTERCODE)
  const semesterCrono: any = get(SET_SEMESTERCRONOLOGICO)
  const dueñoSession: any = get(DUENO_SESSION)
  const dateNow = convertStringToDate(new Date())
  // const dateTimeNow = `${convertStringToDate(
  //   new Date()
  // )} ${convertStringToDateTime(new Date())}`
  selectNote = get(SET_NOTES_SELECT)
  const ip = '::1'
  useEffect(() => {
    const obj = {
      ip,
      user: dueñoSession,
    }
    // if (dataUser?.code !== undefined) {
    //   return
    // }
    ClaCodigo = dataNotes?.ClaCodigo
    fetchTokenClass(ClaCodigo)
    fetchNotesValidate(obj)
    // if (ClaCodigo === undefined && ClaCodigo === null) {
    //   Router.push('./registro-de-notas')
    // }
    validNotesExist(ClaCodigo)
    const dtGenerarToken: any = fetchTokenTecher(dataUser.code)
    // console.log('fetchTokenTecher', dtGenerarToken)
    if (dtGenerarToken.length > 0 || dataUser?.ClaTipo !== 'VT') {
      // eslint-disable-next-line no-unused-vars
      enviarTokenPortal = 1
      const req = {
        userCode: dataUser?.code,
        Periodo: semesterCode,
        userName: ClaCodigo,
        state: false,
      }
      ValidaToken(req)
    }
  }, [])

  const ValidaToken = async (req: any) => {
    const token = await fecthTokenAutentica(req)
    const reqst = {
      token,
      userCode: dataUser.code,
      classCode: ClaCodigo,
    }
    fetchTokenInsertState(reqst)
    ValidaEmail(dataUser.code, token)
  }

  const ValidaEmail = async (userCode: any, token: number) => {
    let emailUPN = await fetchTokenEmail(userCode)
    if (emailUPN.includes('@upn.pe') || emailUPN.includes('@upn.edu.pe')) {
      // emailUPN = 'javierdj22@gmail.com'
      const msj = `<center><p>${token}</p></center>`
      const emailJson = {
        EmailList: [emailUPN],
        DisplayName: 'UPN Docentes',
        Subject: MSM_GENERA_TOKEN,
        IsHtml: true,
        ReplyToList: [emailUPN],
        AttachmentB64: null,
        AttachmentName: null,
        NotificationType: 1,
        EmailListCC: null,
        EmailListBCC: null,
        Queue: true,
        Body: setBodyEmail(msj),
      }
      apiAsistencia.email(emailJson)
      setloading(false)
      return getAlert({
        title: TITLE_EMERG,
        text: MSM_NOTAS_MAIL_OK(emailUPN),
        confirmButtonText: `Ok`,
      })
    } else {
      setloading(false)
      return getAlert({
        title: TITLE_EMERG,
        text: MSM_NOTAS_MAIL_ERROR,
        confirmButtonText: `Ok`,
      })
    }
  }

  const validNotesExist = async (classCode: any) => {
    const obj1 = { classCode, classEstate: 'RE' }
    const obj2 = { classCode, classEstate: 'CA' }
    const resp1: any = fetchNotesStudent(obj1)
    const resp2: any = fetchNotesStudent(obj2)
    const resp: any = fetchNotesExist(classCode)
    let gvNotas: boolean = false
    if (resp === 0) {
      gvNotas = resp1 === 0 || resp2 === 0
      if (!gvNotas) {
        setloading(false)
        return getAlert({
          title: TITLE_EMERG,
          text: MSM_NOTAS_SELECCIONADA,
          confirmButtonText: `Ok`,
        })
      }
    } else {
      gvNotas = true
    }
    if (dataUser?.TipoDoc === 'A') {
      gvNotas = false
    }
    if (dataUser?.ClaTipo === 'VT') {
      return getAlert({
        title: TITLE_EMERG,
        text: MSM_NOTAS_CLASE_VIRTUAL,
        confirmButtonText: `Ok`,
      })
    }
  }

  const SendValidarToken = async () => {
    setloading(true)
    const typeToken = 'TokenPortal'
    const obj = {
      token: tokenDinamic,
      userCode: dataUser?.code,
      classCode: ClaCodigo,
      state: '',
      typeToken,
    }
    if (enviarTokenPortal === 1) {
      const valid = {
        token: tokenDinamic,
        userCode: dataUser?.code,
        classCode: ClaCodigo,
      }
      const listToken = []
      const dtValidarToken = await fetchTokenValidate(valid)
      if (dtValidarToken?.tokenId !== undefined) {
        listToken.push(dtValidarToken)
      }
      setloading(false)
      if (listToken?.length > 0) {
        obj.state = MSM_TOKEN_OK
        apiTokens.ByTokenlogPost(obj)
        setDisable(false)
        return getAlert({
          title: TITLE_EMERG,
          text: `${MSM_TOKEN_OK} !!`,
          confirmButtonText: `Ok`,
        })
      } else {
        obj.state = MSM_TOKEN_NO
        apiTokens.ByTokenlogPost(obj)
        setDisable(true)
        return getAlert({
          title: TITLE_EMERG,
          text: `${MSM_TOKEN_NO} !!`,
          confirmButtonText: `Ok`,
        })
      }
    }

    const reqCoup = {
      semesterCode,
      userCode: dataUser?.code,
      limitState: 1,
    }
    const dtParametroValidador = await fetchTokenCoupling(reqCoup)
    if (dtParametroValidador?.length <= 0) {
      return getAlert({
        title: TITLE_EMERG,
        text: `Genere token para el semestre {0}`,
        confirmButtonText: `Ok`,
      })
    }

    dateTimeNow = `${convertStringToDate(
      dtParametroValidador[0]?.date
    )} ${convertStringToDateTime(dtParametroValidador[0]?.date)}`
    const req = {
      Periodo: semesterCode,
      userName: dataUser?.userName,
      userCode: dataUser?.code,
      fechaHora: dateTimeNow,
      token: tokenDinamic,
    }
    console.log('fetchTokenGoogleValidate', req)

    const pinCorrecto = await fetchTokenGoogleValidate(req)
    console.log('pinCorrecto', pinCorrecto)

    setloading(false)
    if (pinCorrecto) {
      obj.state = MSM_TOKEN_OK
      apiTokens.ByTokenlogPost(obj)
      setDisable(false)
      getAlert({
        title: TITLE_EMERG,
        text: `${MSM_TOKEN_OK} !!`,
        confirmButtonText: `Ok`,
      })
    } else {
      obj.state = MSM_TOKEN_NO
      apiTokens.ByTokenlogPost(obj)
      setDisable(true)
      getAlert({
        title: TITLE_EMERG,
        text: `${MSM_TOKEN_NO} !!`,
        confirmButtonText: `Ok`,
      })
    }
  }

  const setBodyEmail = (message: any) => {
    return `<table width='600' border='1' align='center' cellpadding='0' cellspacing='0' bordercolor='#FFFFFF' bgcolor='#FFFFFF'>
     <tr>
     <td valign='top'><table width='600' border='0' align='center' cellpadding='0' cellspacing='0' bgcolor='#FFFFFF'>
     <tr>
     <td height='100'><img style='padding-left:25px' width='200' height='68' src='https://upn-repositorio-public.s3.amazonaws.com/logos/png/logo-upn-sin-fondo.png' /></td>
     </tr>
     <tr>
     <td valign='top'><table width='100%' border='0' cellpadding='20'>
     <tr><td>
     <b>Creación de TOKEN - Ingreso de Notas Portal Docentes</b><br/><br/>
     Estimado Docente<br/>
     Se creó correctamente su Token para el ingreso de Notas en el Portal Docente.<br/><br/>
     ${message}
     <br/>
     <br/><br/>
     <span style='color: #B7B7B7;'>Este correo es informativo, favor no responder a esta dirección de correo, ya que no se encuentra habilitada para recibir mensajes.</span>
     </td></tr>
     </table></td>
     </tr>
     </table></td>
     </tr>
     </table>`
  }

  const handleSelectedChange = async (e: any) => {
    setDisable(false)
    setloading(true)
    selectOption = e.target.value
    if (e.target.value === '0') {
      showTableDinami = MSM_VISIBLE_NONE
      showTableStatic = MSM_VISIBLE_BLOCK
      setDisable(true)
      setloading(false)
      return
    }
    const obj = {
      classCode: ClaCodigo,
      noteId: e?.target?.value,
    }
    setRequestTableDinamic(obj)
    const row: any = await ControlarNota(ClaCodigo, e?.target?.value)
    if (row === 2) {
      showTableDinami = MSM_VISIBLE_NONE
      showTableStatic = MSM_VISIBLE_BLOCK
      setloading(false)
      return getAlert({
        title: TITLE_EMERG,
        text: MSM_SE_ACTIVA_REGISTRO,
        confirmButtonText: `Ok`,
      })
    } else {
      fecthNotesPostClassGroup(obj)
      showTableDinami = MSM_VISIBLE_BLOCK
      showTableStatic = MSM_VISIBLE_NONE
    }
    if (selectNote?.ClaTipo === 'VT') {
      getAlert({
        title: TITLE_EMERG,
        text: MSM_SELECCIONADO_VIRTUAL,
        confirmButtonText: `Ok`,
      })
      setGuardarDisable(true)
    } else {
      setGuardarDisable(false)
    }
  }

  const ControlarNota = async (classCode: any, notaCode: any) => {
    const sem = await fecthSemestre(classCode)
    const obj = {
      semesterCode: sem,
      notaCode,
      classCode,
    }
    const fech = await fecthSemestreControler(obj)
    if (fech <= '1900-01-01' && convertStringToDate(fech) < dateNow) {
      return 2
    } else {
      return 3
    }
  }

  const onChangeToken = async (e: any) => {
    setTokenDinamic(e.target.value)
  }

  const fecthNotesPostClassGroup = async (obj: any) => {
    setloading(true)
    const resp = await apiNotes.notesPostClassGroup(obj)

    const rows2 = resp?.map((item: any) => ({
      ...item,
      studentCode: item.studentCode,
      noteId: 0,
      notekey: inputNote(item),
    }))
    console.log('rows2', rows2)

    setloading(false)
    setListStudentNota(rows2)
  }

  const inputNote = (row: any) => {
    return (
      <Inputs
        type="text"
        style={{ width: '50px' }}
        id={`id_${row.studentCode}`}
        name="txtCode"
        // placeholder="0"
        placeholder={row.note === '' ? '0' : row.note}
        onchange={(_: any) => {
          changeNote(row.studentCode, _)
        }}
      />
    )
  }

  const changeNote = (key: any, e: any) => {
    const sp: any = document.querySelector(`#id_${key}`)
    const result = changeRegExp(sp?.value)
    if (sp?.value > 20 || !result) {
      sp.value = ''
    }
    if (
      listTempoNota.filter((__: any) => __.studentCode === key).length !== 0
    ) {
      listTempoNota
        .filter((__: any) => __.studentCode === key)
        .map((_: any) => (_.noteValue = sp.value))
    } else {
      listTempoNota.push({
        noteValue: sp?.value,
        studentCode: key,
      })
    }
  }

  const SendCancel = () => {
    const e = { target: { value: 0 } }
    handleSelectedChange(e)
    showTableDinami = MSM_VISIBLE_NONE
    showTableStatic = MSM_VISIBLE_BLOCK
    Router.push('../registro-de-notas')
  }

  const SendGuardar = async () => {
    const rs = await redirectRouter('', setloading)
    if (!rs) setModalShowAvance(true)
  }

  const fecthSemestreControler = async (obj: any) => {
    const resp = await apiNotes.notesSemesterControler(obj)
    return resp.Fecha
  }

  const fecthSemestre = async (classCode: any) => {
    const resp = await apiNotes.notesSemester(classCode)
    return resp?.semesterCode
  }

  const fecthNotespostState = async (obj: any) => {
    const resp = await apiNotes.notespostState(obj)
    getAlert({
      title: TITLE_EMERG,
      text: MSM_REGISTRO_OK,
      confirmButtonText: `Ok`,
    })
    setloading(false)
  }

  const fecthTokenAutentica = async (obj: any) => {
    const resp = await apiTokens.ByTokenAutentica(obj)
    return resp?.randomID
  }

  const fetchTokenEmail = async (obj: any) => {
    const resp = await apiNotes.notesEmail(obj)
    return resp?.emailUPN
  }

  const fetchTokenClass = async (classCode: any) => {
    const resp = await apiNotes.notesClass(classCode)
    setloading(false)
    setListOption(resp)
  }

  const fetchTokenInsertState = async (obj: any) => {
    const resp = await apiTokens.ByTokenInsertState(obj)
    return resp?.result
  }

  const fetchTokenTecher = async (classCode: any) => {
    const resp = await apiTokens.ByTokenTecher(classCode)
    return resp?.result
  }

  const fetchNotesExist = async (classCode: any) => {
    const resp = await apiNotes.notesExist(classCode)
    setloading(false)
    return resp?.result
  }

  const fetchNotesStudent = async (obj: any) => {
    const resp = await apiNotes.notesStudent(obj)
    if (resp?.result === 0) {
      // Router.push('./Logout')
    }
    setloading(false)
    return resp
  }

  const fetchNotesValidate = async (obj: any) => {
    const resp = await apiNotes.notesValidate(obj)

    // if (resp?.result === 0) {
    //   Router.push('./Logout')
    // }
  }

  const fetchTokenValidate = async (obj: any) => {
    return await apiTokens.ByTokenValidate(obj)
  }

  const fetchTokenCoupling = async (obj: any) => {
    const resp = await apiTokens.ByTokenCoupling(obj)
    return resp
  }

  const fetchTokenGoogleValidate = async (obj: any) => {
    const resp = await apiTokens.ByTokenGoogleValidate(obj)
    setloading(false)
    return resp?.stateToken
  }

  const onclickguardar = async () => {
    setModalShowAvance(false)
    setloading(true)
    const valid = {
      token: tokenDinamic,
      userCode: dataUser?.code,
      classCode: ClaCodigo,
    }
    const listToken = []
    const dtValidarToken = await fetchTokenValidate(valid)
    if (dtValidarToken?.tokenId !== undefined) {
      listToken.push(dtValidarToken)
    }
    /* BEGIN VALIDA QUE EL REGISTRO SI FUE ENVIADO */
    const obj1 = {
      classCode: ClaCodigo,
      classEstate: SET_NOTES_RE,
    }
    const rs1: any = await fecthNotesStudent(obj1)
    if (callErrorValid(rs1, setloading) === undefined) return
    const obj2 = {
      classCode: ClaCodigo,
      classEstate: SET_NOTES_CA,
    }
    const rs2: any = await fecthNotesStudent(obj2)
    if (rs1.noteCode !== 0 && rs2.noteCode !== 0) {
      return getAlert({
        title: TITLE_EMERG,
        text: `El registro ya fue enviado`,
        confirmButtonText: `Ok`,
      })
    }
    /* EBD VALIDA QUE EL REGISTRO SI FUE ENVIADO */
    const reqCoup = {
      semesterCode,
      userCode: dataUser?.code,
      limitState: 1,
    }
    const dtParametroValidador = await fetchTokenCoupling(reqCoup)
    console.log('dtParametroValidador', dtParametroValidador)

    if (dtParametroValidador?.length <= 0) {
      setloading(false)
      return getAlert({
        title: TITLE_EMERG,
        text: `Genere token para el semestre ${semesterCrono}`,
        confirmButtonText: `Ok`,
      })
    }

    dateTimeNow = `${convertStringToDate(
      dtParametroValidador[0]?.date
    )} ${convertStringToDateTime(dtParametroValidador[0]?.date)}`
    const req = {
      Periodo: semesterCode,
      userName: dataUser?.userName,
      userCode: dataUser?.code,
      fechahora: dateTimeNow,
      token: tokenDinamic,
    }
    const pinCorrecto = await fetchTokenGoogleValidate(req)

    if (listToken?.length > 0) onclickSendData()
    else if (pinCorrecto) onclickSendData()
    else {
      setDisable(true)
      setloading(false)
      const alertstat = await getAlert({
        title: TITLE_EMERG,
        text: `${MSM_TOKEN_NO2} !!`,
        confirmButtonText: `Ok`,
      })

      if (alertstat) {
        setModalShowAvance(true)
      }
      return
    }
  }
  const onclickSendData = async () => {
    setloading(true)
    const nota = listTempoNota.map((_: any) => {
      return {
        s_cla_codigo: ClaCodigo,
        s_alu_codigo: _.studentCode,
        n_nota_id: selectOption,
        n_alnode_valor: _.noteValue,
        audit_usuario: dataUser?.code,
      }
    })
    const input: any = {
      registro: {
        nota,
      },
    }
    const xml = json2xml(input, {
      compact: true,
    })
    const obj = {
      classCode: ClaCodigo,
      dateXml: xml,
      ip,
    }
    await fecthNotespostState(obj)
    setStateMail(false)
    selectOption = '0'
    fetchTokenClass(ClaCodigo)
    setListStudentNota([])
    // window.location.reload()
  }
  const fecthNotesStudent = async (obj: any) => {
    const rs = await apiNotes.notesStudent(obj)
    return rs
  }
  return (
    <div className={styles.contenido}>
      <Modals
        size="lg"
        show={modalShowAvance}
        onHide={() => setModalShowAvance(false)}
        titulo={'Código de Verificación'}
        onGuardar={true}
        onclickguardar={onclickguardar}
        children={
          <div className="form-group row mt-3">
            <ViewInput
              disabled={false}
              texLabel={'Ingresar código :'}
              typeInput={'text'}
              nameInput={'  '}
              idInput={'generateId'}
              placeholder={' '}
              Onchange={(_: any) => {
                onChangeToken(_)
              }}
            />
          </div>
        }
      />
      <Loader loading={Loading} />
      <div className={styles.content}>
        <div className={styles.titulo}>
          <Label classname="text-warning h5 mt-1 mb-1">{`Ingreso de Notas clase : ${ClaCodigo}`}</Label>
        </div>
        <div className={styles.alertaContent}>
          <Alerta
            classname="w-100"
            variant="info"
          >
            <div className="mb-0">
              <b>Nota : </b>
              Para habilitar el registro de notas, ingrese su código de
              verificación .
            </div>
          </Alerta>
        </div>
        {/* <div className={styles.rowButtons}>
          <ViewInput
            disabled={false}
            texLabel={'Ingresar código :'}
            typeInput={'text'}
            nameInput={'  '}
            idInput={'generateId'}
            placeholder={' '}
            Onchange={(_: any) => {
              onChangeToken(_)
            }}
          />
          <Button
            type="button"
            variant="primary"
            onclick={SendValidarToken}
          >
            Validar Token
          </Button>
        </div> */}
        <div className={styles.rowButtons}>
          Seleccionar nota :
          <Select
            disabled={disable}
            id="formato"
            classname="primary"
            name="formato"
            value={selectOption}
            onChange={handleSelectedChange}
          >
            {listOption.map((_: any, i) => {
              return (
                <option
                  key={i}
                  value={_.noteId}
                >
                  {_.note}
                </option>
              )
            })}
          </Select>
        </div>
        <hr />
        <div style={{ display: showTableStatic }}>
          <Tabla>
            <Thead>
              <th
                scope="col"
                colSpan={2}
              >
                DATOS DE LA SESIÓN DE CLASE
              </th>
            </Thead>
            {selectNote?.SedCodigo === undefined ? (
              <Tbody>
                <tr>No se encontro Registro . . .</tr>
              </Tbody>
            ) : (
              <Tbody>
                <tr>
                  <td style={{ fontWeight: 'bold' }}>Semestre</td>
                  <td>{selectNote?.SemCodigo}</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 'bold' }}>Sede</td>
                  <td>{selectNote?.SedCodigo}</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 'bold' }}>Carrera</td>
                  <td>{selectNote?.CarNombre}</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 'bold' }}>Código del curso</td>
                  <td>{selectNote?.CurCodigo}</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 'bold' }}>Nombre del curso</td>
                  <td>{selectNote?.CurNombre}</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 'bold' }}>Clase</td>
                  <td>{selectNote?.ClaCodigo}</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 'bold' }}>Tope faltas</td>
                  <td>{selectNote?.ClaTopeFaltas}</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 'bold' }}>Tipo Clase</td>
                  <td>{selectNote?.ClaTipo}</td>
                </tr>
              </Tbody>
            )}
          </Tabla>
        </div>
        <div style={{ display: showTableDinami }}>
          <TableDinamic
            columns={COLUMNS}
            listData={listStudentNota}
          />
          <div className="col-12 col-md-12 text-center">
            <Button
              type="button"
              variant="primary"
              onclick={SendGuardar}
              disabled={guardarDisable}
            >
              Guardar
            </Button>
            <Button
              type="button"
              variant="secondari"
              onclick={SendCancel}
            >
              Cancelar
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IngresoNotas
