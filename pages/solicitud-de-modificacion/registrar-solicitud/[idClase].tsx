import { useState, useEffect, useReducer } from 'react'
import React from 'react'
import Tabla from '../../../components/UI/organisms/table/Tabla'
import Thead from '../../../components/UI/molecules/table/thead/Thead'
import Tbody from '../../../components/UI/molecules/table/tbody/Tbody'
import Button from '../../../components/UI/atoms/button/Button'
import Loader from '../../../components/UI/atoms/loader/Loader'
import Label from '../../../components/UI/atoms/label/Label'
import styles from '../../../components/templates/solicitud-de-modificacion/modificacion.module.scss'
import dynamic from 'next/dynamic'
import ViewInput from '../../../components/UI/molecules/recuperarAdelantarClases/viewInput/ViewInput'
// import Anchor from '../../../components/UI/atoms/anchor/Anchor'
import Select from '../../../components/UI/atoms/select/Select'
import {
  apiAsistencia,
  apiNotes,
  apiRegistroModificacion,
  apiTokens,
} from './../../api'
import { remove, set, get } from 'local-storage'
import { apiPath } from '../../../consts/path'
import { axiosCreate } from '../../../config/axios'
import { AxiosInstance } from 'axios'
import {
  convertStringToDate,
  convertStringToDateTime,
  MSM_GENERA_TOKEN,
  MSM_NOTAS_MAIL_ERROR,
  MSM_NOTAS_MAIL_OK,
  MSM_TOKEN_NO2,
  objecApi,
  SET_DATA_DOCENTE,
  TITLE_EMERG,
} from '../../../consts/storageConst'
import Swal from 'sweetalert2'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBan } from '@fortawesome/free-solid-svg-icons'

const { Note } = objecApi

import { USER_SESSION, CLASS_SELECTED_SM } from '../../../consts/storageConst'
import getAlert from '../../../hooks/jspdf/alertify'
import Modals from '../../../components/UI/atoms/modal/Modal'

interface detailClass {
  AplicaCompetencia: string
  CarCodigo: string
  CarNombre: string
  ClaCodigo: string
  ClaMetodoEducativo: string
  ClaTipo: string
  ClaTopeFaltas: string
  ClaseFull: string
  CurCodigo: string
  CurNombre: string
  SedCodigo: string
  SemCodigo: string
  TipoDoc: string
}

interface alumns {
  select: any
  CodeAlu: string
  AluPaterno: string
  AluMaterno: string
  AluNames: string
  Career: string
  NroEnrollment: string
  Average: string
  reason: any
  notaMod: any
  observacion: any
}

interface initDataAluSelected {
  studentId: string
  notePrevious: string
  noteChange: string
  teacherObservation: string
  reasonChange: string
}

const TableDinamic = dynamic(
  () => import('../../../components/UI/molecules/tableDinamic/Table'),
  {
    ssr: false,
  }
)

const index = ({ data }: any) => {
  //   console.log('DATA_SSR', data)

  const dataInit: any = []

  const [Loading, setloading] = useState(false)
  const [dataList, setDataList] = useState<alumns[]>(dataInit)
  const [detailClass, setDetailClass] = useState<detailClass>()
  const [combo, setCombo] = useState([])
  const [reasons, setReasons] = useState([])
  const [noteSelected, setNoteSelected] = useState('')

  const initDataAluSelected = {}

  const reducer = (state: any, action: any) => {
    switch (action.type) {
      case 'ADD': {
        return {
          ...state,
          [action.value.studentId]: {
            studentCode: action.value.studentId,
            notePrevious: parseInt(action.value.notePrevious),
            noteChange: null,
            teacherObservation: '',
            reasonChangeId: '',
          },
        }
      }
      case 'REASON': {
        return {
          ...state,
          [action.value.studentId]: {
            ...state[action.value.studentId],
            reasonChangeId: parseInt(action.value.reasonChange),
          },
        }
      }
      case 'NOTE': {
        return {
          ...state,
          [action.value.studentId]: {
            ...state[action.value.studentId],
            noteChange: parseInt(action.value.noteChange),
          },
        }
      }
      case 'OBS': {
        return {
          ...state,
          [action.value.studentId]: {
            ...state[action.value.studentId],
            teacherObservation: action.value.teacherObservation,
          },
        }
      }
    }
    return state
  }

  const reducer2 = (state: any, action: any) => {
    switch (action.type) {
      case 'ADD': {
        return {
          ...state,
          [action.value]: true,
        }
      }
      case 'ACTIVE': {
        return {
          ...state,
          [action.value.id]: action.value.disabled,
        }
      }
    }
  }

  const [state, dispatch] = useReducer(reducer, initDataAluSelected)
  const [habilit, dispatch2] = useReducer(reducer2, {})
  const [modalShowAvance, setModalShowAvance] = useState(false)
  const [tokenDinamic, setTokenDinamic] = useState(0)
  const dataUser: any = get(SET_DATA_DOCENTE)
  const dateTimeNow = `${convertStringToDate(
    new Date()
  )} ${convertStringToDateTime(new Date())}`

  const handleRowClick = (e: any, item: any) => {
    if (e.target.checked) {
      dispatch({
        type: 'ADD',
        value: { studentId: item.CodeAlu, notePrevious: item.Average },
      })
      dispatch2({
        type: 'ACTIVE',
        value: { id: item.CodeAlu, disabled: false },
      })

      const motivo: any = document.querySelector(`#${item.CodeAlu}-motivo`)
      const nota: any = document.querySelector(`#${item.CodeAlu}-nota`)
      const obs: any = document.querySelector(`#${item.CodeAlu}-obs`)

      motivo.disabled = false
      nota.disabled = false
      obs.disabled = false
    } else {
      dispatch2({
        type: 'ACTIVE',
        value: { id: item.CodeAlu, disabled: true },
      })

      const motivo: any = document.querySelector(`#${item.CodeAlu}-motivo`)
      const nota: any = document.querySelector(`#${item.CodeAlu}-nota`)
      const obs: any = document.querySelector(`#${item.CodeAlu}-obs`)

      motivo.disabled = true
      nota.disabled = true
      obs.disabled = true
    }
  }

  const handleChangeSelectMotivo = (e: any, item: any) => {
    dispatch({
      type: 'REASON',
      value: { studentId: item.CodeAlu, reasonChange: e.target.value },
    })
  }

  const handleChangeSelectNote = (e: any, item: any) => {
    if (
      e.target.value < 0 ||
      e.target.value > 20 ||
      !/^(?:[1-9]|0[1-9]|1[0-9]|20)$/.test(e.target.value)
    ) {
      const im: any = document.querySelector(`#${item.CodeAlu}-nota`)
      im.value = ''
    }

    dispatch({
      type: 'NOTE',
      value: { studentId: item.CodeAlu, noteChange: e.target.value },
    })
  }

  const handleChangeSelectObs = (e: any, item: any) => {
    dispatch({
      type: 'OBS',
      value: { studentId: item.CodeAlu, teacherObservation: e.target.value },
    })
  }

  const COLUMNS = [
    { label: 'Seleccionar', field: 'select', sort: 'asc', width: 100 },
    { label: 'Código ', field: 'CodeAlu', sort: 'asc', width: 100 },
    { label: 'Ap. Paterno', field: 'AluPaterno', sort: 'asc', width: 100 },
    { label: 'Ap. Materno', field: 'AluMaterno', sort: 'asc', width: 100 },
    { label: 'Nombres', field: 'AluNames', sort: 'asc', width: 100 },
    { label: 'Carrera', field: 'Career', sort: 'asc', width: 100 },
    // { label: 'Nro. matrícula', field: 'NroEnrollment', sort: 'asc' },
    { label: 'Nota actual', field: 'Average', sort: 'asc', width: 120 },
    { label: 'Nota a modificar(*)', field: 'notaMod', sort: 'asc', width: 100 },
    { label: 'Motivo', field: 'reason', sort: 'asc', width: 120 },
    { label: 'Observación', field: 'observacion', sort: 'asc', width: 120 },
    { label: 'Estado', field: 'RequestSlope', sort: 'asc', width: 120 },
  ]

  const formatAlu = (datos: any, motivo: any) => {
    const alumnsReturn = datos.map((item: any) => {
      const RequestSlope = parseInt(item.RequestSlope) === 1 ? true : false
      dispatch2({
        type: 'ADD',
        value: item.CodeAlu,
      })

      item.select = !RequestSlope ? (
        <input
          type="checkbox"
          onChange={(e: any) => handleRowClick(e, item)}
          disabled={RequestSlope}
          className="form-check-input text-decoration-none text-center d-block m-auto"
        />
      ) : (
        <FontAwesomeIcon
          icon={faBan}
          className="fa-sm text-warning"
        />
      )
      item.reason = (
        <select
          id={`${item.CodeAlu}-motivo`}
          disabled={true}
          onChange={(e: any) => handleChangeSelectMotivo(e, item)}
          defaultValue={item.ParamId}
          className="form-control form-select"
        >
          <option value={0}>Seleccione</option>
          {motivo.map((item: any, index: number) => (
            <option
              key={index}
              value={item.ParamId}
            >
              {item.parValue}
            </option>
          ))}
        </select>
      )

      item.RequestSlope =
        parseInt(item.RequestSlope) === 1 ? (
          <Label classname="badge bg-warning text-white text-decoration-none me-1">
            Pendiente
          </Label>
        ) : (
          ''
        )
      item.notaMod = (
        <input
          id={`${item.CodeAlu}-nota`}
          disabled={true}
          onChange={(e: any) => handleChangeSelectNote(e, item)}
          type="text"
          defaultValue={item.NoteModify}
          className="form-control inputnumber"
        />
      )
      item.observacion = (
        <textarea
          id={`${item.CodeAlu}-obs`}
          disabled={true}
          onChange={(e: any) => handleChangeSelectObs(e, item)}
          defaultValue={item.ObservationTeacher}
          className="form-control"
        />
      )
      return item
    })

    return alumnsReturn
  }

  useEffect(() => {
    // console.log(data)
    if (data.msg) {
      Swal.fire({
        title: 'Se produjo un error.',
        text: `${data.msg}`,
        icon: 'warning',
        showCancelButton: false,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Regresar',
      }).then(function (result) {
        location.href = '/solicitud-de-modificacion'
      })
      return
    }

    const detailClass: any = get(CLASS_SELECTED_SM)
    //   console.log(detailClass)
    setDetailClass(detailClass)
    setCombo(data?.notesClass)
    setReasons(data?.reason)
    setDataList(formatAlu(data?.alumnos, data?.reason))
    const req = {
      userCode: dataUser?.code,
      Periodo: detailClass?.SemCodigo,
      userName: dataUser?.userName,
      state: false,
    }
    ValidaToken(req)
  }, [])

  const ValidaToken = async (req: any) => {
    const token = await fecthTokenAutentica(req)
    const reqst = {
      token,
      userCode: dataUser.code,
      classCode: req.Periodo,
    }
    // console.log("fecthTokenAutentica", reqst);

    fetchTokenInsertState(reqst)
    ValidaEmail(dataUser.code, token)
  }

  const ValidaEmail = async (userCode: any, token: number) => {
    let emailUPN = await fetchTokenEmail(userCode)
    if (emailUPN.includes('@upn.pe') || emailUPN.includes('@upn.edu.pe')) {
      // emailUPN = 'cgarcia@csticorp.biz'
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

  const handleChangeNota = async (e: any) => {
    setloading(true)
    //   console.log(e.target.value)
    const classCode: any = detailClass?.ClaCodigo
    const noteId = e.target.value
    //const tipo = apiPath.registroModificacionNotas.PATH_listStudent(classCode,notCode)
    const AlumnsVstipo = await apiRegistroModificacion.listStudent(
      classCode,
      noteId
    )
    setNoteSelected(noteId)
    setDataList([])
    setTimeout(() => {
      setDataList(formatAlu(AlumnsVstipo, reasons))
    }, 100)
    //   console.log('filtro Notas',AlumnsVstipo)
    setloading(false)

    const checks: any = document.querySelectorAll(
      '#tablaDinamica input[type="checkbox"]'
    )
    const seles: any = document.querySelectorAll('#tablaDinamica select')
    const inputs: any = document.querySelectorAll(
      '#tablaDinamica input[type="text"],#tablaDinamica input[type="number"]'
    )
    const areas: any = document.querySelectorAll('#tablaDinamica textarea')

    //   console.log(seles)
    if (checks.length > 0) {
      seles.forEach((element: any) => {
        //   console.log(element)
        element.checked = false
      })
    }

    if (seles.length > 0) {
      seles.forEach((element: any) => {
        //   console.log(element)
        element.disabled = true
        element.value = 0
      })
    }

    if (inputs.length > 0) {
      inputs.forEach((element: any) => {
        //   console.log(element)
        element.disabled = true
        element.value = ''
        element.defaultValue = ''
      })
    }

    if (areas.length > 0) {
      areas.forEach((element: any) => {
        //   console.log(element)
        element.disabled = true
        element.value = ''
      })
    }

    setTimeout(() => {
      const im = document.querySelectorAll('.inputnumber')

      im.forEach((element: any) => {
        element.type = 'number'
        element.min = 0
        element.max = 20
        element.pattern = '\\d+'
      })
    }, 1000)
  }

  const validationNotes = (items: any) => {
    items.map((item: any) => {
      const codeAlu = item.CodAlu
      const Msj = item.message

      if (Msj !== 'VALIDO') {
        Swal.fire({
          title: 'Alumno(a) no tiene nota valida',
          text: `Por favor omita la selección del alumno(a) ${codeAlu}`,
          icon: 'warning',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK',
        })

        return
      }
    })
  }
  const SaveValid = () => {
    const { flag, msg } = validationState(state)
    if (!flag) {
      Swal.fire({
        title: 'Se produjo un error',
        html: `<ul style="text-align:left;">${msg}</ul>`,
        icon: 'warning',
        showCancelButton: false,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'OK',
      })
      return
    } else {
      console.log({ flag, msg })
    }

    setModalShowAvance(true)
  }

  const validationState = (state: any) => {
    // valido si tienen length mayor a 0
    let flag = true
    let msg = ''
    const count = Object.keys(state)
    if (count.length > 0) {
      // ahora revisamos los valores
      const valores = Object.values(state)
      valores.forEach((item: any) => {
        if (item.noteChange === null && item.reasonChangeId === '') {
          flag = false
          msg += `<li>Debe verificar los datos del alumno ${item.studentCode}, no se admiten campos vacíos.</li>`
          return
        }

        if (
          item.noteChange === null ||
          item.noteChange === '' ||
          isNaN(item.noteChange)
        ) {
          flag = false
          msg += `<li>Debe verificar la nota modificada del alumno ${item.studentCode}, no se admiten campos vacíos.</li>`
        }

        if (
          item.reasonChangeId === null ||
          item.reasonChangeId === '' ||
          item.reasonChangeId === 0
        ) {
          flag = false
          msg += `<li>Debe verificar el motivo de la nota modificada del alumno ${item.studentCode}, no se admiten campos vacíos.</li>`
        }
      })
    } else {
      msg = '<li>Debe seleccionar alumnos.</li>'
      flag = false
    }

    return { flag, msg }
  }

  const handleRegistro = async () => {
    setloading(true)
    const { flag, msg } = validationState(state)
    if (!flag) {
      Swal.fire({
        title: 'Se produjo un error',
        html: `<ul style="text-align:left;">${msg}</ul>`,
        icon: 'success',
        showCancelButton: false,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'OK',
      })
      return
    }

    try {
      const traCode = get(USER_SESSION)

      const ClassCode: any = detailClass?.ClaCodigo
      const carCode: any = detailClass?.CarCodigo
      const SemCode: any = detailClass?.SemCodigo
      const SedCode: any = detailClass?.SedCodigo
      const curCode: any = detailClass?.CurCodigo

      const notesVal = {
        ClassCode: ClassCode,
        SemCode: parseInt(SemCode),
        SedCode: SedCode,
        NoteId: parseInt(noteSelected),
        ContenCodAlu: Object.keys(state).join(','),
      }

      const respValidNotes = await apiRegistroModificacion.validationNotes(
        notesVal
      )

      validationNotes(respValidNotes)

      const respValidPlazo = await apiRegistroModificacion.validationPlazo(
        ClassCode,
        carCode,
        SemCode,
        SedCode,
        noteSelected
      )

      const [codPlazo, msjPlazo] = respValidPlazo.split('|')

      if (parseInt(codPlazo.trim()) === -1) {
        throw new Error(`${msjPlazo}`)
      }

      const obj: any = {
        noteId: parseInt(noteSelected),
        classCode: ClassCode,
        traCode,
        auditDate: null,
        auditUser: null,
        typeFlujoId: parseInt(codPlazo.trim()),
        objlist: Object.values(state),
      }

      const registerResp = await apiRegistroModificacion.register(obj)
      const [code, msj] = registerResp.split('|')
      // console.log('REGISTER_API_', registerResp)

      if (parseInt(code.trim()) === 1 || parseInt(code.trim()) === -5) {
        try {
          // TODO: enviar email
          const bodyText = () => {
            return `<table width='600' border='1' align='center' cellpadding='0' cellspacing='0' bordercolor='#FFFFFF' bgcolor='#FFFFFF'>
						 <tr>
						 <td valign='top'><table width='600' border='0' align='center' cellpadding='0' cellspacing='0' bgcolor='#FFFFFF'>
						 <tr>
						 <td height='100'><img style='padding-left:25px' width='200' height='68' src='https://upn-repositorio-public.s3.amazonaws.com/logos/png/logo-upn-sin-fondo.png' /></td>
						 </tr>
						 <tr>
						 <td valign='top'><table width='100%' border='0' cellpadding='20'>
						 <tr><td>
						 Estimado Docente<br/>
						 <b>Se ha registrado una solicitud de modificación de notas.</b><br/>
						 <br/>
						 <br/>
						 <span style='color: #B7B7B7;'>Este correo es informativo, favor no responder a esta dirección de correo, ya que no se encuentra habilitada para recibir mensajes.</span>
						 </td></tr>
						 </table></td>
						 </tr>
						 </table></td>
						 </tr>
						 </table>`
          }

          const ClassCode: any = detailClass?.ClaCodigo
          const SedCode: any = detailClass?.SedCodigo

          const emailCCresp = await apiRegistroModificacion.emailCC(ClassCode)
          const emailscc = emailCCresp.map(
            (item: any, index: number) => item.email
          )
          // console.log(emailscc)

          const emailDASresp = await apiRegistroModificacion.emailDAS(SedCode)
          const emailDas = emailDASresp.map(
            (item: any, index: number) => item.EmailUPN
          )
          // console.log(emailDas)

          const emailCCDASS = [...emailscc, ...emailDas] // 'cgarcia@csticorp.biz'
          const emailJson = {
            EmailList: [emailCCDASS],
            DisplayName: 'UPN Docentes',
            Subject: 'Registro de solicitud de modificación de notas',
            IsHtml: true,
            ReplyToList: [emailCCDASS],
            AttachmentB64: null,
            AttachmentName: null,
            NotificationType: 1,
            EmailListCC: null,
            EmailListBCC: null,
            Queue: true,
            Body: bodyText(),
          }
          // apiAsistencia.email(emailJson)

          const result: any = await apiRegistroModificacion.email(emailJson)
          // console.log('emailResp', result.data)
          const emailResp = result.data

          // console.log(emailResp)

          if (
            emailResp === 'OK' ||
            emailResp === '200'
            // emailResp === 'NOK'
          ) {
            Swal.fire({
              title: 'Se registró con éxito',
              html: `<p>Atención: &nbsps; ${msjPlazo.trim()}. ${
                parseInt(code.trim()) === -5 ? '<br/><br/>' + msj.trim() : ''
              } </p>`,
              icon: 'success',
              showCancelButton: false,
              confirmButtonColor: '#3085d6',
              confirmButtonText: 'OK',
            }).then(function (result) {
              location.href = '/solicitud-de-modificacion'
            })
          }
        } catch (error) {
          console.log(error)
        }
      } else {
        Swal.fire({
          title: 'Se produjo un error',
          text: `No se completó el registro.`,
          icon: 'warning',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK',
        }).then(function (result) {
          location.href = '/solicitud-de-modificacion'
        })
      }

      setloading(false)
    } catch (error) {
      console.log(error)
    }
  }

  const onclickguardar = async () => {
    setModalShowAvance(false)
    setloading(true)
    const valid = {
      token: tokenDinamic,
      userCode: dataUser?.code,
      classCode: detailClass?.SemCodigo,
    }
    const listToken = []
    const dtValidarToken = await fetchTokenValidate(valid)
    if (dtValidarToken?.tokenId !== undefined) {
      listToken.push(dtValidarToken)
    }
    const req = {
      Periodo: detailClass?.SemCodigo,
      userName: dataUser?.userName,
      userCode: dataUser?.code,
      fechahora: dateTimeNow,
      token: tokenDinamic,
    }
    const pinCorrecto = await fetchTokenGoogleValidate(req)

    if (listToken?.length > 0) handleRegistro()
    else if (pinCorrecto) handleRegistro()
    else {
      //   setDisable(true)
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

  const onChangeToken = async (e: any) => {
    setTokenDinamic(e.target.value)
  }

  const fetchTokenValidate = async (obj: any) => {
    return await apiTokens.ByTokenValidate(obj)
  }

  const fetchTokenGoogleValidate = async (obj: any) => {
    const resp = await apiTokens.ByTokenGoogleValidate(obj)
    setloading(false)
    return resp?.stateToken
  }

  const fecthTokenAutentica = async (obj: any) => {
    const resp = await apiTokens.ByTokenAutentica(obj)
    return resp?.randomID
  }

  const fetchTokenInsertState = async (obj: any) => {
    const resp = await apiTokens.ByTokenInsertState(obj)
    return resp?.result
  }

  const fetchTokenEmail = async (obj: any) => {
    const resp = await apiNotes.notesEmail(obj)
    return resp?.emailUPN
  }

  return (
    <div className={styles.contenido}>
      <Loader loading={Loading} />
      <div className={styles.content}>
        <div className={styles.titulo}>
          <Label classname="text-warning h5 mt-3 mb-3">
            Registro de solicitud de modificación de notas
          </Label>
        </div>

        <hr />

        {/* <div>
          <Button
            type="button"
            classname="mb-3"
            variant="secondary"
            onclick={() => {
              location.href = `/solicitud-de-modificacion/seleccionar-clase/N00011885`
            }}
          >
            Regresar
          </Button>
        </div> */}
        {/* 
				<hr />


				<div className={styles.rowButtons}>
          <ViewInput
            disabled={false}
            texLabel={'Ingresar código :'}
            typeInput={'text'}
            nameInput={'  '}
            idInput={'generateId'}
            placeholder={' '}
            Onchange={(_: any) => {
              //   console.log()
            }}
          />
          <Button
            type="button"
            variant="primary"
            onclick={() => console.log()}
          >
            Validar Token
          </Button>
        </div>

				<hr /> */}

        <div
          className={styles.tablaRA}
          style={{ textAlign: 'left' }}
        >
          <Tabla classname={styles.tabla}>
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
                <td>{detailClass?.SemCodigo}</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold' }}>Sede</td>
                <td>{detailClass?.SedCodigo}</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold' }}>Carrera</td>
                <td>{detailClass?.CarNombre}</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold' }}>Código de curso</td>
                <td>{detailClass?.CurCodigo}</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold' }}>Nombre del curso</td>
                <td>{detailClass?.CurNombre}</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold' }}>Clase</td>
                <td>{detailClass?.ClaCodigo}</td>
              </tr>
              {/* <tr>
                <td style={{ fontWeight: 'bold' }}>Tope faltas</td>
                <td>{detailClass?.ClaTopeFaltas}</td>
              </tr> */}
              <tr>
                <td style={{ fontWeight: 'bold' }}>Tipo de clase</td>
                <td>{detailClass?.ClaTipo}</td>
              </tr>
            </Tbody>
          </Tabla>
        </div>

        <hr />

        <div>
          <label>Seleccione una nota</label>
          <Select
            id="nota"
            onChange={(e: any) => handleChangeNota(e)}
          >
            {combo.map((_: any, index: number) => {
              return (
                <option
                  key={index}
                  value={_.noteId}
                >
                  {_.note}
                </option>
              )
            })}
          </Select>
        </div>

        <hr />

        <div
          className={styles.tabla}
          id="tablaDinamica"
        >
          <TableDinamic
            columns={COLUMNS}
            listData={dataList}
            pagination={false}
          />
        </div>
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
        <div className={styles.botones}>
          <div>
            <Button
              type="button"
              classname=""
              variant="primary"
              disabled={false}
              onclick={() => SaveValid()}
            >
              Registrar
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

export async function getServerSideProps(context: any) {
  const { query } = context

  //   console.log('QUERTY', query)

  const { idClase } = query

  try {
    // const detail: any = await getDetallesResumen(ControlClaseID, recuperationId)
    const apiCall: AxiosInstance = axiosCreate(Note)

    /* const URL4 = apiPath.registroModificacionNotas.PATH_emailsDAS('REM')
    const resp4 = await apiCall(URL4)
    const result4 = resp4.data.detail

		console.log('result4___',result4) */

    const URL = apiPath.Notes.PATH_GetNoteClass(idClase)
    const { data } = await apiCall(URL)
    const result = data.detail
    //   console.log('PARAMS_DETAIL_', result)

    const URL2 = apiPath.registroModificacionNotas.PATH_listStudent(
      idClase,
      '1'
    )

    const student = await apiCall(URL2)
    const result2 = student.data.detail

    //PATH_reason
    const URL3 = apiPath.registroModificacionNotas.PATH_reason
    const reasons = await apiCall(URL3)
    const reason = reasons.data.detail

    const datos = {
      detalleClase: idClase,
      alumnos: [], // result2,
      notesClass: result,
      reason,
    }

    return {
      props: {
        data: datos,
      },
    }
  } catch (error: any) {
    //   console.log(error)
    const msg = error?.response?.data?.message
    const objError = {
      msg,
      status: error.response?.status,
    }
    return {
      props: { data: objError },
    }
  }
}
