import { useEffect, useState } from 'react'
import Router from 'next/router'
import Button from '../../components/UI/atoms/button/Button'
import Label from '../../components/UI/atoms/label/Label'
import styles from '../../components/templates/ingresoNotas/IngresoNotas.module.scss'
import dynamic from 'next/dynamic'
import Loader from '../../components/UI/atoms/loader/Loader'
import getAlert from '../../hooks/jspdf/alertify'
import { get, set, remove } from 'local-storage'
import {
  apiNotes,
  apiPreviousSessions,
  apiTokens,
  apiAsistencia,
} from '../api/index'
import {
  TITLE_EMERG,
  MSM_NOTAS_MAIL_ERROR,
  MSM_NOTAS_MAIL_OK,
  SET_DATA_DOCENTE,
  SET_NOTES_SELECT,
  SET_SEMESTERCODE,
  convertStringToDateTime,
  convertStringToDate,
} from '../../consts/storageConst'

const TableDinamic = dynamic(
  () => import('../../components/UI/molecules/tableDinamic/Table'),
  {
    ssr: false,
  }
)
const Alerta = dynamic(() => import('../../components/UI/atoms/alert/Alerts'), {
  ssr: false,
})
const COLUMNS = [
  { label: 'Seleccionar', field: 'Seleccionar', sort: 'asc' },
  { label: 'Semestre', field: 'SemCodigo', sort: 'asc' },
  { label: 'Sede', field: 'SedCodigo', sort: 'asc' },
  { label: 'Clase', field: 'ClaCodigo', sort: 'asc' },
  { label: 'Tipo doc.', field: 'TipoDoc', sort: 'asc' },
  { label: 'Cód. curso', field: 'CurCodigo', sort: 'asc' },
  { label: 'Nombre del curso', field: 'CurNombre', sort: 'asc' },
  { label: 'Carrera', field: 'CarNombre', sort: 'asc' },
  { label: 'Tipo Clase', field: 'ClaTipo', sort: 'asc' },
]
const IngresoNotas = () => {
  const [Loading, setloading] = useState(true)
  const [listCourse, setlistCourse] = useState([])
  const dataUser: any = get(SET_DATA_DOCENTE)
  const dateTimeNow = `${convertStringToDate(
    new Date()
  )} ${convertStringToDateTime(new Date())}`

  useEffect(() => {

    remove(SET_NOTES_SELECT)
    fetchTeacherCurse(dataUser?.code)
    console.log('dataUser', dataUser)
  }, [])

  const fetchTeacherCurse = async (obj: any) => {
    const resp = await apiPreviousSessions.listCoursesByTeacher(obj)
    const rows = resp.map((item: any) => ({
      ...item,
      Seleccionar: LinkButton(item),
    }))
    setlistCourse(rows)
    setloading(false)
  }

  const LinkButton = (row: any) => {
    return (
      <Button
        type="button"
        onclick={() => linkRedirect(row)}
        classname="text-decoration-none text-warning"
      >
        Seleccionar
      </Button>
    )
  }

  const linkRedirect = async (row: any) => {
    set(SET_NOTES_SELECT, row)
    Router.push('./registro-de-notas/ingresoNotas')
  }

  const SendGenerarToken = async () => {
    setloading(true)
    const req = {
      userCode: dataUser?.code,
      Periodo: SET_SEMESTERCODE,
      userName: dataUser?.userName,
      fechaHora: dateTimeNow,
      state: true,
    }

    const result = await fecthTokenAutentica(req)
    console.log('ByTokenAutentica', result)

    const obj = {
      userCode: dataUser?.code,
      semesterCode: SET_SEMESTERCODE,
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
      const msj = `<center><p><img src=' ${result?.setupInfo?.QrCodeSetupImageUrl}'></p> ${result?.setupInfo?.ManualEntryKey}</center>`
      const emailJson = {
        // EmailList: [respEmail],
        EmailList: ['javierdj22@gmail.com'],
        DisplayName: 'UPN Docentes',
        Subject: 'Generación de Token para cambio de Notas!',
        IsHtml: true,
        // ReplyToList: [respEmail.emailUPN],
        ReplyToList: ['javierdj22@gmail.com'],
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

  const fecthTokenAutentica = (obj: any) => {
    return apiTokens.ByTokenAutentica(obj)
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

  return (
    <div className={styles.contenido}>
      <Loader loading={Loading} />
      <div className={styles.content}>
        <div className={styles.titulo}>
          <Label classname="text-warning h5 mt-3 mb-3">Ingreso de Notas</Label>
        </div>
        <hr />

        <div className={styles.alertaContent}>
          <Alerta
            classname="w-100"
            variant="info"
          >
            <p className="mb-0">
              <b>Nota:</b>
              <br />
              <ul>
                <li>
                  Al inicio de cada periodo/semestre usted debe vincular su
                  dispositivo móvil con un <b>nuevo</b> código QR.
                </li>
                <li>
                  Todos los códigos QR generados en periodos anteriores se
                  invalidan automáticamente.
                </li>
                <li>
                  Cada vez que haga click en Generar Token, usted deberá
                  vincular <b>nuevamente</b> su dispositivo móvil con el{' '}
                  <b>nuevo</b> código QR.
                </li>
                <li>
                  Cada vez que genera un código QR, este es enviado a su correo
                  electrónico.
                </li>
              </ul>
            </p>
          </Alerta>
        </div>

        <div className={styles.rowButtons}>
          <Button
            type="button"
            variant="primary"
            onclick={SendGenerarToken}
          >
            {`Generar Token Semestre ${SET_SEMESTERCODE}`}
          </Button>
        </div>

        <hr />

        <div className={styles.tabla}>
          <TableDinamic
            columns={COLUMNS}
            listData={listCourse}
          />
          {/* <Tabla>
            <Thead>
              <th scope="col">Seleccionar</th>
              <th scope="col">Semestre</th>
              <th scope="col">Sede</th>
              <th scope="col">Clase</th>
              <th scope="col">Tipo doc.</th>
              <th scope="col">Cód. curso</th>
              <th scope="col">Nombre del curso</th>
              <th scope="col">Carrera</th>
              <th scope="col">Tipo Clase</th>
            </Thead>
            <Tbody>
              <tr>
                <td>
                  <b>
                    <Anchor
                      href="/"
                      classname="text-decoration-none"
                    >
                      Ingresar notas
                    </Anchor>
                  </b>
                </td>
                <td>222513</td>
                <td>TML</td>
                <td>2225136111</td>
                <td>P</td>
                <td>MAGM1204A</td>
                <td>DISEÑO ORGANIZACIONAL Y PROC.</td>
                <td>Adm. y Gestión Comercial</td>
                <td>RM</td>
              </tr>
            </Tbody>
          </Tabla> */}
        </div>

        <div>
          <small>
            <strong>Tipo docente: (P)</strong> Principal / <strong>(S)</strong>{' '}
            Sustituto / <strong>(A)</strong> Auxiliar
          </small>
          <br />
          <small>
            <strong>Tipo Clase: (PR)</strong> Presencial / <strong>(VT)</strong>{' '}
            Virtual
          </small>
        </div>
      </div>
    </div>
  )
}

export default IngresoNotas
