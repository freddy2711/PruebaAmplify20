import { useEffect, useState } from 'react'
import JsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'
import Router from 'next/router'
import Label from '../../components/UI/atoms/label/Label'
import Button from '../../components/UI/atoms/button/Button'
import styles from '../../components/templates/ingresoNotas/IngresoNotas.module.scss'
import dynamic from 'next/dynamic'
import Loader from '../../components/UI/atoms/loader/Loader'
import getAlert from '../../hooks/jspdf/alertify'
import Tabla from '../../components/UI/organisms/table/Tabla'
import { get } from 'local-storage'
import { apiNotes, apiAsistencia } from '../api/index'
import {
  TITLE_EMERG,
  // MSM_NOTAS_MAIL_ERROR,
  MSM_ENVIAR_NOTAS,
  SET_DATA_DOCENTE,
  SET_NOTES_SELECT,
  MSM_INFO_NOTAS,
  MSM_VISIBLE_NONE,
  MSM_VISIBLE_BLOCK,
  convertStringToDate,
  convertStringToDateTime,
  MSM_SEND_CLASE,
  MSM_SEND_NOTAS,
  MSM_SEND_EMAIL,
  SET_IMG_BASE64,
  callErrorValid,
  SET_NOTES_CA,
  SET_NOTES_RE,
  SET_NOTES_PDF,
  buttons,
} from '../../consts/storageConst'

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
const COLUMNS = [
  { label: 'Código', field: 'noteCode', sort: 'asc' },
  { label: 'Descripción', field: 'noteDescription', sort: 'asc' },
]
const Alerta = dynamic(() => import('../../components/UI/atoms/alert/Alerts'), {
  ssr: false,
})
// let showTableDinami: any = MSM_VISIBLE_NONE
let showTableStatic: any = MSM_VISIBLE_NONE

const EnviarNotas = (props: any) => {
  const [Loading, setloading] = useState(true)
  const dataUser: any = get(SET_DATA_DOCENTE)
  const dataSelect: any = get(SET_NOTES_SELECT)
  const [listData, setListData] = useState([])
  const [mvEnvio, setMvEnvio] = useState(0)
  const [showTableDinami, setshowTableDinami] = useState(MSM_VISIBLE_NONE)
  const [showTableDinami2, setshowTableDinami2] = useState(MSM_VISIBLE_NONE)
  const [butonStatic, setButonStatic] = useState(MSM_VISIBLE_BLOCK)
  const [butonDinamic, setButonDinamic] = useState(MSM_VISIBLE_NONE)
  const imgBase64: any = get(SET_IMG_BASE64)
  const dateTimeNow = `${convertStringToDate(
    new Date()
  )} ${convertStringToDateTime(new Date())}`
  useEffect(() => {
    console.log('imgBase64', imgBase64)
    console.log('mvEnvio', mvEnvio)
    console.log("dataSelect", dataSelect);
    
    showTableStatic = MSM_VISIBLE_BLOCK
    setshowTableDinami(MSM_VISIBLE_NONE)
    ValidityState()
  }, [])

  const SendCancel = () => {
    Router.push('../enviar-notas')
  }

  const ValidityState = async () => {
    const obj1 = {
      classCode: dataSelect.classCode,
      classEstate: SET_NOTES_RE,
    }
    const rs1: any = await fecthNotesStudent(obj1)
    if (callErrorValid(rs1, setloading) === undefined) return
    const obj2 = {
      classCode: dataSelect.classCode,
      classEstate: SET_NOTES_CA,
    }
    const rs2: any = await fecthNotesStudent(obj2)
    if (callErrorValid(rs2, setloading) === undefined) return
    setloading(false)
    getAlert({
      title: TITLE_EMERG,
      text: MSM_INFO_NOTAS,
      confirmButtonText: buttons.ok,
    })
    if (rs1.noteCode === 0 && rs2.noteCode === 0) {
      setMvEnvio(0)
    } else {
      setMvEnvio(3)
      setButonStatic(MSM_VISIBLE_NONE)
      setshowTableDinami2(MSM_VISIBLE_BLOCK)
    }
  }

  const VerificaPdf = async () => {
    const obj = {
      classCode: dataSelect.classCode,
      codeUser: dataUser.userName,
    }
    const dt = await fecthNotesDetail(obj)
    if (callErrorValid(dt, setloading) === undefined) return false
    if (dt.length === 0) {
      setloading(false)
      getAlert({
        title: TITLE_EMERG,
        text: MSM_SEND_CLASE,
        confirmButtonText: buttons.ok,
      })
      return false
    }
    const dt2 = await fecthNotesAverage(dataSelect.classCode)
    if (callErrorValid(dt2, setloading) === undefined) return false
    if (dt2.length === 0) {
      setloading(false)
      getAlert({
        title: TITLE_EMERG,
        text: MSM_SEND_NOTAS,
        confirmButtonText: buttons.ok,
      })
      return false
    }
    const dataArray: any = dt2.map((_: any, y: number) => {
      return [
        y + 1,
        _.student,
        _.t1,
        _.t2,
        _.t3,
        _.t4,
        _.t5,
        _.average_1,
        _.ep,
        _.ef,
        _.re,
        _.average,
        _.state,
      ]
    })
    const height = 250
    const width = 450
    const doc = new JsPDF()
    doc.setFontSize(12)
    const image = new Image()
    image.height = height
    image.width = width
    image.src = imgBase64
    const pageWidth = doc.internal.pageSize.getWidth()

    doc.addImage(image, 'png', 60, 5, 100, 50)
    doc.setFont('undefined', 'bold')
    let _X = 15
    let _Y = 60
    doc.text(SET_NOTES_PDF.TITLE, pageWidth / 2, _Y, { align: 'center' })
    doc.setFontSize(10)
    _Y = _Y + 10
    doc.text(SET_NOTES_PDF.SUBTITLE, _X, _Y)
    doc.setFont('undefined', 'none')
    _Y = _Y + 10
    doc.text(SET_NOTES_PDF.campus, _X, _Y)
    _X = _X + 40
    doc.text(dt[0].codeSede, _X, _Y)
    _X = _X + 40
    doc.text(SET_NOTES_PDF.semester, _X, _Y)
    _X = _X + 40
    doc.text(dt[0].semCode, _X, _Y)
    _X = 15
    _Y = _Y + 10
    doc.text(SET_NOTES_PDF.race, _X, _Y)
    _X = _X + 50
    doc.text(dt[0].raceName, _X, _Y)
    _X = 15
    _Y = _Y + 10
    doc.text(SET_NOTES_PDF.code, _X, _Y)
    _X = _X + 40
    doc.text(dt[0].curCode, _X, _Y)
    _X = _X + 40
    doc.text(SET_NOTES_PDF.namegrade, _X, _Y)
    _X = _X + 40
    doc.text(dt[0].curName, _X, _Y)
    _X = 15
    _Y = _Y + 10
    doc.text(SET_NOTES_PDF.teacher, _X, _Y)
    _X = _X + 50
    doc.text(dt[0].employe, _X, _Y)
    _X = 15
    _Y = _Y + 10
    doc.text(SET_NOTES_PDF.date, _X, _Y)
    _X = 15
    _X = _X + 50
    doc.text(dateTimeNow, _X, _Y)

    autoTable(doc, {
      head: [SET_NOTES_PDF.titleTable],
      headStyles: { fillColor: [195, 195, 195], textColor: [0, 0, 0] },
      body: dataArray,
      startY: 130,
    })
    const docente = dt[0].employe
    doc.save(`notas_${docente}.pdf`)
    // return
    const base = doc.output('datauristring') // base64 string
    const base64 = base.split(',')

    const sede = dt[0].codeSede
    const semestre = dt[0].semCode
    const sClase = dataSelect.classCode
    const curso = dt[0].curName
    const emailUPN = SET_NOTES_PDF.emailUPN
    const asunto: string = SET_NOTES_PDF.titleEmail(
      sede,
      semestre,
      sClase,
      curso,
      docente
    )

    const emailJson = {
      EmailList: [emailUPN],
      DisplayName: 'UPN Docentes',
      Subject: asunto,
      IsHtml: true,
      ReplyToList: [emailUPN],
      AttachmentB64: [base64[1]],
      AttachmentName: [`notas_${docente}.pdf`],
      NotificationType: 1,
      EmailListCC: null,
      EmailListBCC: null,
      Queue: true,
      Body: setBodyEmail(docente, sClase),
    }
    apiAsistencia.email(emailJson)
    getAlert({
      title: TITLE_EMERG,
      text: MSM_SEND_EMAIL(emailUPN),
      confirmButtonText: buttons.ok,
    })
    setloading(false)
    return true
  }

  const SendGuardar = async () => {
    setMvEnvio(1)
    const data = await getAlert({
      title: TITLE_EMERG,
      text: MSM_ENVIAR_NOTAS(dataSelect.classCode),
      confirmButtonText: buttons.acept,
      showCancelButton: true,
      cancelButtonText: buttons.cancel,
    })
    if (data) {
      setloading(true)
      const result: any = await fecthNotesState(dataSelect.classCode)
      if (callErrorValid(result, setloading) === undefined) return
      setListData(result)
      const count = result.length
      if (count !== 0) {
        setMvEnvio(2)
        const state: any = await VerificaPdf()
        if (!state) return
        setloading(false)
      } else {
        setMvEnvio(3)
        const obj = {
          classCode: dataSelect.classCode,
          classEstate: 'RE',
          auditUser: dataUser.code,
        }
        const resultP = await fecthNotesPutState(obj)
        if (callErrorValid(resultP, setloading) === undefined) return
        setListData(result)
        setloading(true)
        const state: any = await VerificaPdf()
        if (!state) return
        return
      }
      setshowTableDinami(MSM_VISIBLE_BLOCK)
      setButonStatic(MSM_VISIBLE_NONE)
      setButonDinamic(MSM_VISIBLE_BLOCK)
    } else {
      setMvEnvio(0)
      setshowTableDinami(MSM_VISIBLE_NONE)
    }
  }

  const setBodyEmail = (docente: string, sClase: string) => {
    return `<table width='600' border='1' align='center' cellpadding='0' cellspacing='0' bordercolor='#FFFFFF' bgcolor='#FFFFFF'>
    <tr>
    <td valign='top'><table width='600' border='0' align='center' cellpadding='0' cellspacing='0' bgcolor='#FFFFFF'>
    <tr>
    <td height='100'><img style='padding-left:25px' src='https://upn-repositorio-public.s3.amazonaws.com/logos/png/logo-upn-sin-fondo.png' width='198' height='99'/></td>
    </tr>
    <tr>
    <td valign='top'><table width='100%' border='0' cellpadding='20'>
    <tr><td>
    Estimado(a) <br/><br/>
    Mediante el presente correo se formaliza el envío de notas a Secretaría Académica, ingresadas por el docente ${docente} para la clase ${sClase}, las cuales se adjuntan.<br/>
    <br/>Saludos<br/>
    Universidad Privada del Norte<br/><br/>
    <span style=""color: #B7B7B7;"">Este correo es informativo, favor no responder a esta dirección de correo, ya que no se encuentra habilitada para recibir mensajes.</span>
    </td></tr>
    </table></td>
    </tr>
    </table></td>
    </tr>
    </table>`
  }

  const fecthNotesDetail = async (obj: any) => {
    return await apiNotes.notesDetail(obj)
  }

  const fecthNotesAverage = async (classCode: any) => {
    return await apiNotes.notesAverage(classCode)
  }
  const fecthNotesStudent = async (obj: any) => {
    return await apiNotes.notesStudent(obj)
  }

  const fecthNotesState = async (classCode: any) => {
    return await apiNotes.notesState(classCode)
  }

  const fecthNotesPutState = async (obj: any) => {
    return await apiNotes.notesPutState(obj)
  }
  return (
    <div className={styles.contenido}>
      <Loader loading={Loading} />
      <div className={styles.content}>
        <div className={styles.titulo}>
          <Label classname="text-warning h5 mt-3 mb-3">
            Envío de notas a Secretaría Académica
          </Label>
        </div>
        <div>
          <Alerta
            classname="w-100"
            variant="info"
          >
            <div className="mb-0">
              <b>Nota : </b>
              En esta sección envíe sus notas a Secretaría Académica para el
              posterior Registro de Notas de Recuperación y Cierre del Registro
              Académico.
            </div>
          </Alerta>
        </div>

        <div className={styles.tabla}>
          <div
            style={{ display: showTableStatic }}
          >
            <Tabla>
              <Thead>
                <th
                  scope="col"
                  colSpan={2}
                >
                  DATOS DE LA SESIÓN DE CLASE
                </th>
              </Thead>
              {dataSelect?.sedeCode === undefined ? (
                <Tbody>
                  <tr>
                    No se encontro Registro . . .
                  </tr>
                </Tbody>
              ) : (
                <Tbody>
                  <tr>
                    <td style={{ fontWeight: 'bold' }}>Semestre</td>
                    <td>{dataSelect?.semestCode}</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: 'bold' }}>Sede</td>
                    <td>{dataSelect?.sedeCode}</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: 'bold' }}>Carrera</td>
                    <td>{dataSelect?.raceName}</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: 'bold' }}>Código del curso</td>
                    <td>{dataSelect?.curCode}</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: 'bold' }}>Nombre del curso</td>
                    <td>{dataSelect?.curName}</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: 'bold' }}>Clase</td>
                    <td>{dataSelect?.classCode}</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: 'bold' }}>Tope faltas</td>
                    <td>{dataSelect?.stopFaults}</td>
                  </tr>
                </Tbody>
              )}
            </Tabla>
          </div>
          <div
            style={{ display: butonStatic }}
            className="col-12 col-md-12 text-center"
          >
            <Button
              type="button"
              variant="primary"
              onclick={SendGuardar}
            >
              Continuar
            </Button>
            <Button
              type="button"
              variant="secondari"
              onclick={SendCancel}
            >
              Cancelar
            </Button>
          </div>
          <br />
          <div className={styles.tabla}>
            <div style={{ display: showTableDinami }}>
              <Alerta
                classname="w-100"
                variant="info"
              >
                <div className="mb-0">
                  <b>Nota : </b>
                  Las notas han sido enviadas con éxito a Secretaría Académica.
                </div>
              </Alerta>

              <div>
                <TableDinamic
                  columns={COLUMNS}
                  listData={listData}
                />
              </div>
              <div
                style={{ display: butonDinamic }}
                className="col-12 col-md-12 text-center"
              >
                <Button
                  type="button"
                  variant="secondari"
                  onclick={SendCancel}
                >
                  Regresar
                </Button>
              </div>
            </div>
          </div>
          <div className={styles.tabla}>
            <div style={{ display: showTableDinami2 }}>
              <Alerta
                classname="w-100"
                variant="warning"
              >
                <div className="mb-0">
                  <b>Nota : </b>
                  Las notas han sido enviadas con éxito a Secretaría Académica.
                </div>
              </Alerta>
              <div className="col-12 col-md-12 text-center">
                <Button
                  type="button"
                  variant="danger"
                  onclick={SendCancel}
                >
                  Regresar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EnviarNotas
