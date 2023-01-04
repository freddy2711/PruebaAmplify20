import { useState, useEffect } from 'react'
import Loader from '../../components/UI/atoms/loader/Loader'
import Label from '../../components/UI/atoms/label/Label'
import Anchor from '../../components/UI/atoms/anchor/Anchor'
import styles from './../../components/templates/sesiones/anteriores/Anteriores.module.scss'
import dynamic from 'next/dynamic'
import Button from '../../components/UI/atoms/button/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { get } from 'local-storage'
import { axiosCreate } from '../../config/axios'
import { AxiosInstance } from 'axios'
import {
  convertStringToDate,
  convertStringToDateTime,
  MSM_NOTAS_MAIL_ERROR,
  MSM_NOTAS_MAIL_OK,
  MSM_TOKEN_NO2,
  objecApi,
  SET_DATA_DOCENTE,
  TITLE_EMERG,
  MSM_GENERA_TOKEN,
} from '../../consts/storageConst'
import { apiPath } from '../../consts/path'
import Swal from 'sweetalert2'
import { redirectRouter } from '../../helpers/routerRedirect'
// import Select from '../../components/UI/atoms/select/Select'
import {
  faPencilSquare,
  faTrash,
  faEye,
  faInfoCircle,
} from '@fortawesome/free-solid-svg-icons'

import { SET_TEACHERCODE, USER_SESSION } from '../../consts/storageConst'
import React from 'react'
import {
  apiAsistencia,
  apiNotes,
  apiRegistroModificacion,
  apiTokens,
} from '../api'
import getAlert from '../../hooks/jspdf/alertify'
import Modals from '../../components/UI/atoms/modal/Modal'
import ViewInput from '../../components/UI/molecules/recuperarAdelantarClases/viewInput/ViewInput'

const TableDinamic = dynamic(
  () => import('../../components/UI/molecules/tableDinamic/Table'),
  {
    ssr: false,
  }
)

const Alerta = dynamic(() => import('../../components/UI/atoms/alert/Alerts'), {
  ssr: false,
})

const estados = (estado: string) => {
  switch (estado.toUpperCase()) {
    case 'PEN':
      return (
        <Label classname="badge bg-warning text-white text-decoration-none me-1">
          Pendiente
        </Label>
      )
      break
    case 'APR':
      return (
        <Label classname="badge bg-success text-white text-decoration-none me-1">
          Aprobado
        </Label>
      )
      break
    case 'CAN':
      return (
        <Label classname="badge bg-secondary text-white text-decoration-none me-1">
          Cancelado
        </Label>
      )
      break
    case 'DES':
      return (
        <Label classname="badge bg-danger text-white text-decoration-none me-1">
          Desaprobado
        </Label>
      )
      break
    case 'NOAP':
      return (
        <Label classname="badge bg-default text-dark text-decoration-none me-1">
          No Aplica
        </Label>
      )
      break
    default:
      return (
        <Label classname="badge bg-warning text-white text-decoration-none me-1">
          Pendiente
        </Label>
      )
      break
  }
}

let itemSelect = { SemCode: '', ClassCode: '' }
// let UserID:any = SET_TEACHERCODE

const index = ({ data }: any) => {
  const dataInit = [
    {
      id: '219935',
      FechaSolicitud: '28/09/2019 08:33',
      Clase: '2199351035',
      SemCode: '',
      Curso: 'SUPPLY CHAIN MANAGEMENT',
      Carrera: 'Dip. en Gestión Logística',
      tipoNota: 'T1',
      EstadoCC: 'Aprobado',
      EstadoDAS: 'NA',
      EstadoSolicitud: 'Pendiente',
      detalle: (
        <Button
          type="button"
          classname=""
          variant="default"
        >
          <FontAwesomeIcon
            icon={faInfoCircle}
            className="fa-2x"
          />
        </Button>
      ),
      actualizar: (
        <Button
          type="button"
          classname=""
          variant="default"
        >
          <FontAwesomeIcon
            icon={faPencilSquare}
            className="fa-2x"
          />
        </Button>
      ),
      cancelar: (
        <Button
          type="button"
          classname=""
          variant="default"
        >
          <FontAwesomeIcon
            icon={faTrash}
            className="fa-2x"
          />
        </Button>
      ),
    },
  ]

  const [Loading, setloading] = useState(false)
  const [dataList, setDataList] = useState(dataInit)
  const [modalShowAvance, setModalShowAvance] = useState(false)
  const [tokenDinamic, setTokenDinamic] = useState(0)
  const [UserID, setUserID] = useState('')

  const COLUMNS = [
    { label: 'ID', field: 'RequestId', sort: 'desc' },
    { label: 'Fecha Solicitud', field: 'RequestDate' },
    { label: 'Fecha límite Plazo', field: 'DateExpiration' },
    { label: 'Clase', field: 'ClassCode' },
    { label: 'Curso', field: 'CurCode' },
    { label: 'Carrera', field: 'CarName' },
    { label: 'Tipo Nota', field: 'description' },
    { label: 'Estado CC', field: 'StateApprovalCC' },
    { label: 'Estado DAS', field: 'StateApprovalDAS' },
    { label: 'Estado Solicitud', field: 'StateApproval' },
    // { label: 'Estado Solicitud', field: 'EstadoSolicitud', },
    { label: 'Ver detalle', field: 'detalle' },
    // { label: 'Actualizar', field: 'actualizar', },
    { label: 'Cancelar', field: 'cancelar' },
  ]

  console.log(data)
  const dataUser: any = get(SET_DATA_DOCENTE)
  const dateTimeNow = `${convertStringToDate(
    new Date()
  )} ${convertStringToDateTime(new Date())}`

  const onclickguardar = async () => {
    setModalShowAvance(false)
    setloading(true)
    const valid = {
      token: tokenDinamic,
      userCode: dataUser?.code,
      classCode: itemSelect.SemCode,
    }
    const listToken = []
    const dtValidarToken = await fetchTokenValidate(valid)
    if (dtValidarToken?.tokenId !== undefined) {
      listToken.push(dtValidarToken)
    }
    const reqCoup = {
      semesterCode: itemSelect.SemCode,
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

    const dateTimeNow2 = `${convertStringToDate(
      dtParametroValidador[0]?.date
    )} ${convertStringToDateTime(dtParametroValidador[0]?.date)}`
    const req = {
      Periodo: itemSelect.SemCode,
      userName: dataUser?.userName,
      userCode: dataUser?.code,
      fechaHora: dateTimeNow2,
      token: tokenDinamic,
    }
    const pinCorrecto = await fetchTokenGoogleValidate(req)

    if (listToken?.length > 0) cancelar(itemSelect)
    else if (pinCorrecto) cancelar(itemSelect)
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

  const fetchTokenCoupling = async (obj: any) => {
    const resp = await apiTokens.ByTokenCoupling(obj)
    return resp
  }

  const cancelarValid = (_: any, item: any) => {
    itemSelect = item
    setModalShowAvance(true)
    const req = {
      userCode: dataUser?.code,
      Periodo: item?.SemCode,
      userName: dataUser?.userName,
      state: false,
    }
    console.log('item___', item)
    console.log('req___', req)
    ValidaToken(req)
  }

  const ValidaToken = async (req: any) => {
    const token = await fecthTokenAutentica(req)
    const reqst = {
      token,
      userCode: dataUser.code,
      classCode: req.Periodo,
    }
    console.log('fecthTokenAutentica', reqst)

    fetchTokenInsertState(reqst)
    ValidaEmail(dataUser.code, token)
  }

  const fetchTokenInsertState = async (obj: any) => {
    const resp = await apiTokens.ByTokenInsertState(obj)
    console.log('fetchTokenInsertState__', resp)
    return resp?.result
  }

  const fetchTokenEmail = async (obj: any) => {
    const resp = await apiNotes.notesEmail(obj)
    return resp?.emailUPN
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

  const cancelar = (item: any) => {
    console.log('item', item)

    if (item.statusCancelar === 'PEN') {
      Swal.fire({
        title: '¿Desea cancelar la solicitud?',
        text: `Esta seguro que desea cancelar la solicitud nro: ${item.RequestId}.`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d24726',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'SI',
        cancelButtonText: 'NO',
      }).then(async (result) => {
        if (result.isConfirmed) {
          const cancel = await apiRegistroModificacion.cancelar(item.RequestId)
          console.log(cancel)

          if (parseInt(cancel) === 1) {
            Swal.fire({
              title: 'Solicitud Cancelada!',
              icon: 'success',
              confirmButtonColor: '#3085d6',
              confirmButtonText: 'OK',
            }).then((result) => {
              location.href = '/solicitud-de-modificacion'
            })
          } else {
            Swal.fire({
              title: 'Se produjo un error',
              text: 'No pudimos cancelar la solicitud',
              icon: 'success',
              confirmButtonColor: '#3085d6',
              confirmButtonText: 'OK',
            })
          }
        }
      })
    }
  }

  useEffect(() => {
    console.log('TESTTT___', SET_TEACHERCODE)
    const UserIDst: any = get(USER_SESSION)

    setUserID(UserIDst)

    const format = data.map((item: any, index: number) => {
      const disableCancel =
        item.StateApproval == 'CAN' ||
        item.StateApproval == 'APR' ||
        item.StateApproval == 'DES'

      if (parseInt(item.TypeFlujoId) === 2) {
        item.StateApprovalCC = estados(item.StateApprovalCC)
        item.StateApprovalDAS = estados(item.StateApprovalDAS)
      } else {
        item.StateApprovalCC = estados(item.StateApprovalCC)
        item.StateApprovalDAS = estados('NOAP')
      }
      item.statusCancelar = item.StateApproval
      item.StateApproval = estados(item.StateApproval)
      item.detalle = (
        <Button
          onclick={() => handleDetalle(item)}
          type="button"
          classname=""
          variant="default"
        >
          <FontAwesomeIcon
            icon={faInfoCircle}
            className="fa-2x"
          />
        </Button>
      )
      item.actualizar = (
        <Button
          type="button"
          classname=""
          variant="default"
        >
          <FontAwesomeIcon
            icon={faPencilSquare}
            className="fa-2x"
          />
        </Button>
      )

      item.cancelar = (
        <Button
          disabled={disableCancel}
          type="button"
          onclick={(_: any) => cancelarValid(_, item)}
          classname="border-0"
          variant="default"
        >
          <FontAwesomeIcon
            icon={faTrash}
            className="fa-2x"
          />
        </Button>
      )
      return item
    })
    // console.log('reverse', )
    setDataList(data.reverse())
  }, [])

  const handleDetalle = (item: any) => {
    console.log(item.RequestId)
    location.href = `/solicitud-de-modificacion/detalle-solicitud/${item.RequestId}/${item.TraCode}/${item.ClassCode}`
  }

  const SendGenerarToken = async () => {
    setloading(true)
    const req = {
      userCode: dataUser?.code,
      Periodo: dataList[0]?.SemCode,
      userName: dataUser?.userName,
      fechaHora: dateTimeNow,
      state: true,
    }

    const result = await fecthTokenAutentica(req)
    console.log('result', result)

    const obj = {
      userCode: dataUser?.code,
      semesterCode: dataList[0]?.SemCode,
      token: result?.setupInfo?.ManualEntryKey,
      fechaHora: dateTimeNow,
    }
    const respLog = await apiTokens.ByTokenlogPut(obj)
    console.log('ByTokenlog', respLog)
    const respState = await apiTokens.ByTokenInsertState(obj)
    console.log('ByTokenlog', respState)
    const respEmail = await apiNotes.notesEmail(dataUser.code)
    console.log('notesEmail', respEmail.emailUPN)

    if (
      respEmail.emailUPN.includes('@upn.pe') ||
      respEmail.emailUPN.includes('@upn.edu.pe')
    ) {
      console.log()
      const msj = `<center><p><img src=' ${result?.setupInfo?.QrCodeSetupImageUrl}'></p> ${result?.setupInfo?.ManualEntryKey}</center>`
      const emailJson = {
        EmailList: [respEmail.emailUPN],
        // EmailList: ['flindrs.ortiz@upn.edu.pe', 'javierdj22@gmail.com'],
        DisplayName: 'UPN Docentes',
        Subject: 'Generación de Token para cambio de Notas!',
        IsHtml: true,
        ReplyToList: [respEmail.emailUPN],
        // ReplyToList: ['flindrs.ortiz@upn.edu.pe', 'javierdj22@gmail.com'],
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
        text: MSM_NOTAS_MAIL_OK(respEmail.emailUPN),
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
     Se creó correctamente su Token para el ingreso de Notas en el Portal Docente. Por favor escanear el codigo QR para enlazar su dispositivo movil desde la aplicación Google Authenticathor o Microsoft Authenticathor.<br/><br/>
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

  const onChangeToken = async (e: any) => {
    setTokenDinamic(e.target.value)
  }

  const fecthTokenAutentica = async (obj: any) => {
    const resp = await apiTokens.ByTokenAutentica(obj)
    return resp?.randomID
  }

  const fetchTokenValidate = async (obj: any) => {
    return await apiTokens.ByTokenValidate(obj)
  }

  const fetchTokenGoogleValidate = async (obj: any) => {
    const resp = await apiTokens.ByTokenGoogleValidate(obj)
    setloading(false)
    return resp?.stateToken
  }

	const handleRegister = (e:any, url:string) => {
		e.preventDefault()
		redirectRouter(url, setloading)
	}

  return (
    <div className={styles.contenido}>
      <Loader loading={Loading} />
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
      <div className={styles.content}>
        <div className={styles.titulo}>
          <Label classname="text-warning h5 mt-3 mb-3">
            Solicitudes de modificación de notas
          </Label>
        </div>
        {/* <div className={styles.rowButtons}>
          <Button
            type="button"
            variant="primary"
            onclick={SendGenerarToken}
          >
            {`Generar Token Semestre "${dataList[0]?.SemCode}"`}
          </Button>
        </div> */}

        <div className={styles.alertaContent}>
          <Alerta
            classname="w-100"
            variant="info"
          >
            <div className="mb-0">
              <b>Nota:</b> &nbsp; <br />
              <small>
                <ul>
                  <li>
                    Las solicitudes que se encuentran dentro del plazo de la
                    fecha de registro de la nota no requieren aprobación del
                    Director Académico.
                  </li>
                  <li>
                    Las solicitudes que se registren fuera del plazo de la fecha
                    de registro de la nota requieren aprobación del Coordinador
                    de Carrera y el Director Académico.
                  </li>
                </ul>
              </small>
            </div>
          </Alerta>
        </div>

        <div className={styles.botones}>
          <div>
            <Anchor
              classname=""
              //href={`/solicitud-de-modificacion/seleccionar-clase/${UserID}`}
							href='!#'
							onClick={(e:any) => handleRegister(e,`/solicitud-de-modificacion/seleccionar-clase/${UserID}`)}
            >
              <Button
                type="button"
                classname=""
                variant="primary"
                disabled={false}
                // onclick={() => handleRegister(`/solicitud-de-modificacion/seleccionar-clase/${UserID}`)}
              >
                Registrar nueva solicitud
              </Button>
            </Anchor>
          </div>
        </div>

        <div className={styles.tabla}>
          <TableDinamic
            columns={COLUMNS}
            listData={dataList}
            order={['ID', 'desc']}
          />
        </div>
      </div>
    </div>
  )
}

export default index

export async function getServerSideProps(context: any) {
  const { query } = context

  console.log('QUERTY', query)

  const { idTeacher } = query

  const { Note } = objecApi

  try {
    const apiCall: AxiosInstance = axiosCreate(Note)
    const URL = apiPath.registroModificacionNotas.PATH_listado(idTeacher)
    const { data } = await apiCall(URL)
    console.log(data)
    const result = data.detail

    return {
      props: {
        data: result,
      },
    }
  } catch (error: any) {
    console.log(error)
    const msg = error?.response?.data?.message
    return {
      props: { data: JSON.stringify({ msg, status: error.response?.status }) },
    }
  }
}
