import { useEffect, useState } from 'react'
import React from 'react'
import Tabla from '../../../components/UI/organisms/table/Tabla'
import Button from '../../../components/UI/atoms/button/Button'
import Loader from '../../../components/UI/atoms/loader/Loader'
import Label from '../../../components/UI/atoms/label/Label'
import styles from './../../../components/templates/sesiones/anteriores/Anteriores.module.scss'
import dynamic from 'next/dynamic'
import Select from '../../../components/UI/atoms/select/Select'
import Alerta from '../../../components/UI/atoms/alert/Alerts'
import ViewInput from '../../../components/UI/molecules/recuperarAdelantarClases/viewInput/ViewInput'
import getAlert from '../../../hooks/jspdf/alertify'
import {
  convertStringToDate,
  convertStringToDateTime,
  DUENO_SESSION,
  MSM_GENERA_TOKEN,
  MSM_NOTAS_CLASE_VIRTUAL,
  MSM_NOTAS_MAIL_ERROR,
  MSM_NOTAS_MAIL_OK,
  MSM_NOTAS_SELECCIONADA,
  MSM_TOKEN_NO,
  MSM_TOKEN_OK,
  SET_DATA_DOCENTE,
  SET_NOTES_SELECT,
  SET_SEMESTERCODE,
  TITLE_EMERG,
} from '../../../consts/storageConst'
import { apiAsistencia, apiNotes, apiTokens } from '../../api'
import { get } from 'local-storage'

const Thead = dynamic(
  () => import('../../../components/UI/molecules/table/thead/Thead'),
  {
    ssr: false,
  }
)
const Tbody = dynamic(
  () => import('../../../components/UI/molecules/table/tbody/Tbody'),
  {
    ssr: false,
  }
)
const TableDinamic = dynamic(
  () => import('../../../components/UI/molecules/tableDinamic/Table'),
  {
    ssr: false,
  }
)

let enviarTokenPortal: any = 0
let ClassCodigo: any = ''
let selectNote: any = {
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
  CarCodigo: '',
  AplicaCompetencia: '',
  ClaMetodoEducativo: '',
}
const index = () => {
  const dataInit = [
    {
      select: (
        <input
          type="checkbox"
          className="text-decoration-none text-center w-100 d-block"
        />
      ),
      SemCodigo: '219935',
      paterno: 'AGREDA',
      materno: 'REYES',
      nombres: 'JHON DIEGO',
      notaAnt: '16',
      notaMod: '18',
      observacion: 'Cambio de Nota',
    },
  ]

  const [tokenDinamic, setTokenDinamic] = useState(0)
  const [Loading, setloading] = useState(false)
  const [dataList, setDataList] = useState(dataInit)
  const [disable, setDisable] = useState(true)
  const [listStudentNota, setListStudentNota] = useState([])
  const dataUser: any = get(SET_DATA_DOCENTE)
  const dataNotes: any = get(SET_NOTES_SELECT)
  const semesterCode: any = get(SET_SEMESTERCODE)
  selectNote = get(SET_NOTES_SELECT)
  console.log('selectNote', selectNote)

  const dueñoSession: any = get(DUENO_SESSION)
  const dateNow = convertStringToDate(new Date())

  const COLUMNS = [
    { label: 'Seleccionar', field: 'select', sort: 'asc' },
    { label: 'Código', field: 'studentCode', sort: 'asc' },
    { label: 'Ap. Paterno', field: 'studentPaternal', sort: 'asc' },
    { label: 'Ap. Materno', field: 'studentMaternal', sort: 'asc' },
    { label: 'Nombres', field: 'studentName', sort: 'asc' },
    { label: 'Nota Ant(*)', field: 'note', sort: 'asc' },
    { label: 'Nota Mod(*)', field: 'note', sort: 'asc' },
    { label: 'Observacion', field: 'observacion', sort: 'asc' },
  ]
  const ip = '::1'
  useEffect(() => {
    setloading(true)
    const obj = {
      ip,
      user: dueñoSession,
    }
    fetchNotesValidate(obj)
    ClassCodigo = dataNotes?.ClaCodigo
    validNotesExist(ClassCodigo)
    const dtGenerarToken: any = fetchTokenTecher(dataUser.code)
    if (dtGenerarToken.length > 0 || dataUser?.ClaTipo !== 'VT') {
      // eslint-disable-next-line no-unused-vars
      enviarTokenPortal = 1
      const req = {
        userCode: dataUser?.code,
        Periodo: semesterCode,
        userName: ClassCodigo,
        state: false,
      }
      ValidaToken(req)
    }
    const obj2 = {
      classCode: ClassCodigo,
      noteId: 1,
    }
    fecthNotesPostClassGroup(obj2)
  }, [])

  const fecthNotesPostClassGroup = async (obj: any) => {
    setloading(true)
    const resp = await apiNotes.notesPostClassGroup(obj)
    console.log('resp', resp)

    const rows2 = resp?.map((item: any) => ({
      ...item,
      studentCode: item.studentCode,
    }))
    setloading(false)
    setListStudentNota(rows2)
  }

  const ValidaToken = async (req: any) => {
    const token = await fecthTokenAutentica(req)
    const reqst = {
      token,
      userCode: dataUser.code,
      classCode: ClassCodigo,
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
      setloading(false)
      return getAlert({
        title: TITLE_EMERG,
        text: MSM_NOTAS_CLASE_VIRTUAL,
        confirmButtonText: `Ok`,
      })
    }
  }

  const onChangeToken = async (e: any) => {
    setTokenDinamic(e.target.value)
  }

  const SendValidarToken = async () => {
    setloading(true)
    const typeToken = 'TokenPortal'
    const obj = {
      token: tokenDinamic,
      userCode: dataUser?.code,
      classCode: ClassCodigo,
      state: '',
      typeToken,
    }

    if (enviarTokenPortal === 1) {
      const valid = {
        token: tokenDinamic,
        userCode: dataUser?.code,
        classCode: ClassCodigo,
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

    const dateTimeNow = `${convertStringToDate(
      dtParametroValidador[0]?.date
    )} ${convertStringToDateTime(dtParametroValidador[0]?.date)}`
    const req = {
      Periodo: semesterCode,
      userName: dataUser?.userName,
      userCode: dataUser?.code,
      fechahora: dateTimeNow,
      token: tokenDinamic,
    }
    console.log('fetchTokenGoogleValidate', req)

    const pinCorrecto = await fetchTokenGoogleValidate(req)
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

  const fetchTokenInsertState = async (obj: any) => {
    const resp = await apiTokens.ByTokenInsertState(obj)
    return resp?.result
  }

  const fetchTokenEmail = async (obj: any) => {
    const resp = await apiNotes.notesEmail(obj)
    return resp?.emailUPN
  }

  const fecthTokenAutentica = async (obj: any) => {
    const resp = await apiTokens.ByTokenAutentica(obj)
    return resp?.randomID
  }

  const fetchNotesValidate = async (obj: any) => {
    const resp = await apiNotes.notesValidate(obj)
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

  return (
    <div className={styles.contenido}>
      <Loader loading={Loading} />
      <div className={styles.content}>
        <div className={styles.titulo}>
          <Label classname="text-warning h5 mt-3 mb-3">
            Registro de solicitud de confirmación de notas
          </Label>
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
        <div className={styles.rowButtons}>
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
        </div>
        <hr />
        <div
          className={styles.tablaRA}
          style={{ textAlign: 'left' }}
        >
          <Tabla classname={styles.tablaRA}>
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
                <td style={{ fontWeight: 'bold' }}>Sede</td>
                <td>{selectNote?.SedCodigo}</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold' }}>Código de curso</td>
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
                <td style={{ fontWeight: 'bold' }}>
                  Dueño de la sesión de clase
                </td>
                <td>{dueñoSession}</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold' }}>Tipo de docente</td>
                <td>{selectNote?.ClaTipo}</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold' }}>Tope faltas</td>
                <td>{selectNote?.ClaTopeFaltas}</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold' }}>Fecha y hora de inicio</td>
                <td>28/09/2019 08:33</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold' }}>Fecha y hora de término</td>
                <td>28/09/2019 13:00</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold' }}>Tipo de sesión</td>
                <td>N</td>
              </tr>
            </Tbody>
          </Tabla>
        </div>

        <div className={styles.tabla}>
          <TableDinamic
            columns={COLUMNS}
            listData={listStudentNota}
          />
        </div>

        <div className={styles.botones}>
          <div>
            <Button
              type="button"
              classname=""
              variant="primary"
              disabled={disable}
              onclick={() => console.log()}
            >
              Confirmar
            </Button>
          </div>
          <div>
            <Button
              type="button"
              classname=""
              variant="secondary"
              onclick={() => history.back()}
              disabled={false}
            >
              Atras
            </Button>
          </div>
        </div>

        <div>
          <small>
            <strong>Tipo docente: (P)</strong> Principal / <strong>(S)</strong>{' '}
            Sustituto / <strong>(A)</strong> Auxiliar
          </small>
        </div>
      </div>
    </div>
  )
}

export default index
