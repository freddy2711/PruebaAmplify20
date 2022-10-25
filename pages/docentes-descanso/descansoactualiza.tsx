/* eslint-disable no-unneeded-ternary */
/* eslint-disable array-callback-return */
/* eslint-disable no-useless-return */
// import Router from 'next/router'
import { useEffect, useState } from 'react'
import Router from 'next/router'
import Label from '../../components/UI/atoms/label/Label'
import Button from '../../components/UI/atoms/button/Button'
import styles from '../../components/templates/docenteDescanso/Descanso.module.scss'
// import { get } from 'local-storage'
import Loader from '../../components/UI/atoms/loader/Loader'
import dynamic from 'next/dynamic'
import type { Moment } from 'moment'
import moment from 'moment'
import {
  buttons,
  callErrorValid,
  convertStringToDate,
  convertStringToDateTime,
  MSM_INFO_DESCANSO,
  // MSM_INFO_DESCANSO,
  MSM_SEND_SOLICITUD,
  SET_DESCANSO_SELECT,
  SET_DESCANSO_SOLICITUD,
  SET_EMAIL_SUPPOT_UPN,
  // SET_EMAIL_SUPPOT_UPN,
  SET_TEACHER_BREAK,
  TITLE_EMERG,
} from '../../consts/storageConst'
import { get } from 'local-storage'
import { apiAsistencia, apiDescanso } from '../api'
import getAlert from '../../hooks/jspdf/alertify'
import Modals from '../../components/UI/atoms/modal/Modal'
import CalendarNew from '../../components/UI/atoms/calendar/Calendar'
const Alerta = dynamic(() => import('../../components/UI/atoms/alert/Alerts'), {
  ssr: false,
})
const DescansoDocente = () => {
  const objGeneric = [
    {
      allDay: '',
      color: '',
      editable: '',
      end: '',
      endTime: '',
      eventOverlap: '',
      id: 0,
      semestreId: 0,
      start: '',
      startTime: '',
      state: '',
      title: '',
      traCodigo: '',
      week: '',
    },
  ]
  const [Loading, setloading] = useState(true)
  const [modalShow, setModalShow] = useState(false)
  const [disableGuardar, setDisableGuardar] = useState(false)
  const [semesterSustitutory, setSemesterSustitutory] = useState(objGeneric)

  const [semesterTuesday, setSemesterTuesday] = useState(objGeneric)
  const [semesterThursday, setSemesterThursday] = useState(objGeneric)
  const dateNow = convertStringToDate(new Date())
  const [value, setValue] = useState(moment(dateNow))
  const [selectedValue, setSelectedValue] = useState(moment(dateNow))
  const dataDescanso: any = get(SET_DESCANSO_SELECT)
  const dataWorker: any = get(SET_DESCANSO_SOLICITUD)
  const teacherBreak: any = get(SET_TEACHER_BREAK)
  const ValidService = async () => {
    const rs = await apiDescanso.SemesterSustitutory(dataDescanso)
    if (callErrorValid(rs, setloading) === undefined) return
    setSemesterSustitutory(rs)
    const rs1 = await apiDescanso.SemesterTuesday(dataDescanso)
    if (callErrorValid(rs1, setloading) === undefined) return
    setSemesterTuesday(rs1)

    const rs2 = await techSemesterThursday(dataDescanso)
    if (callErrorValid(rs2, setloading) === undefined) return
    setSemesterThursday(rs2)
  }

  useEffect(() => {
    ValidService()
    console.log("value", value);
    
  }, [])

  const techSemesterThursday = async (dataDescanso: any) => {
    return await apiDescanso.SemesterThursday(dataDescanso)
  }

  const btnGuardar = async () => {
    setloading(true)
    const rs = await apiDescanso.RegisterRequestsWorkerTeacher(dataDescanso)
    if (callErrorValid(rs, setloading) === undefined) return
    console.log('RegisterRequestsWorkerTeacher', rs)
    console.log('semesterSustitutory', semesterSustitutory)
    console.log('semesterTuesday', semesterTuesday)
    console.log('semesterThursday', semesterThursday)
    let objSolicitud: any = {}
    dataWorker.forEach((worker: any) => {
      objSolicitud = {
        IdDocente: worker.objapprover.IdDocente,
        AprobadorNombre: worker.AprobadorNombre,
      }
    })
    if (rs.registerId === 1) {
      semesterThursday.forEach((thursday) => {
        const obj = { code: thursday.id, newDate: thursday.start }
        apiDescanso.UpdateDateWorker(obj)
      })
      // docenteDescansoBC.ActualizarFecha(jueves.start, jueves.id)
    } else if (rs.registerId === 2) {
      semesterThursday.forEach((thursday) => {
        const obj = { code: thursday.id, newDate: thursday.start }
        apiDescanso.SaveTempTableWorkerTeacher(obj)
      })
      getAlert({
        title: TITLE_EMERG,
        text: MSM_SEND_SOLICITUD,
        confirmButtonText: buttons.ok,
      })
      // dataWorker
      if (objSolicitud.AprobadorNombre !== '') {
        generarPdf(teacherBreak, objSolicitud)
      }
    } else {
      const rs2 = await techSemesterThursday(dataDescanso)
      if (callErrorValid(rs2, setloading) === undefined) return
      setSemesterThursday(rs2)
      getAlert({
        title: TITLE_EMERG,
        text: MSM_INFO_DESCANSO,
        confirmButtonText: buttons.ok,
      })
      setDisableGuardar(true)
      setloading(false)
      return false
    }
    setloading(false)
  }

  const generarPdf = async (teacherBreak: any, objSolicitud: any) => {
    const rs: any = await sendEmail(teacherBreak, objSolicitud.AprobadorNombre)
    if (rs) setModalShow(true)
  }

  const sendEmail = async (teacherBreak: any, userAprobador: any) => {
    const Mensaje = `<table width="600" border="1" align="center" cellpadding="0" cellspacing="0" bordercolor="#FFFFFF" bgcolor="#FFFFFF"><tr><td valign="top"><table width="600" border="0" align="center" cellpadding="0" cellspacing="0" bgcolor="#FFFFFF"></tr><tr><td height="100"><img style="padding-left:25px" src="https://upn-repositorio-public.s3.amazonaws.com/logos/png/logo-upn-sin-fondo.png" width="198" height="99"></td></tr><tr><td valign="top"><table width="100%" border="0" cellpadding="20"></tr><tr><td><p align="justify">Estimado(a) ${userAprobador}<br><br>Se ha registrado una solicitud de actualización de días de descanso a nombre de ${teacherBreak.nameTeacher}.<br>Responda a la solicitud desde la opción Descanso Docente Virtual desde el módulo Académico del Portal Dirección.'</p><br>Atentamente<br>Universidad Privada del Norte<br><br><span style="color:#b7b7b7">Este correo es informativo, favor no responder a esta dirección de correo, ya que no se encuentra habilitada para recibir mensajes.</span></td></tr></table>`
    const asunto = `Solicitud de día de descanso: ${teacherBreak.nameTeacher}`
    const rs3 = await apiDescanso.SendEmail(teacherBreak.userTeacher)
    if (callErrorValid(rs3, setloading) === undefined) return false

    const emailUPN = SET_EMAIL_SUPPOT_UPN
    // const emailUPN = [rs3.userEmail, SET_EMAIL_SUPPOT_UPN]

    const emailJson = {
      EmailList: [emailUPN],
      DisplayName: 'UPN DOCENTEVIRTUAL',
      Subject: asunto,
      IsHtml: true,
      ReplyToList: [emailUPN],
      AttachmentB64: null,
      AttachmentName: null,
      NotificationType: 1,
      EmailListCC: null,
      EmailListBCC: null,
      Queue: true,
      Body: Mensaje,
    }
    apiAsistencia.email(emailJson)
    return true
  }

  const handleRegresar = () => {
    Router.push('./')
  }

  const getListData = (value: Moment) => {
    let listData
    const todate = convertStringToDate(value.toDate())
    if (value.day() === 2) {
      listData = [
        {
          type: 'dark',
          date: value.day(),
          content: (
            <Button
              type="button"
              classname={styles.ButtonMini}
              disabled={true}
            >
              Día Bloqueado
            </Button>
          ),
        },
      ]
    }

    /* BEGIN Thursday */
    // Crea botones jueves x defecto y se actualiza segun lo seleccionado
    semesterThursday
      .filter((_) => convertStringToDate(_.start) === todate)
      .map((_) => {
        listData = [
          {
            type: 'info',
            date: value.day(),
            content: (
              <Button
                type="button"
                variant="info"
                classname={
                  dateNow <= convertStringToDate(_.start)
                    ? styles.Activeclass
                    : styles.InactiveClass
                }
                disabled={
                  dateNow <= convertStringToDate(_.start) ? false : true
                }
              >
                Día Descanso
              </Button>
            ),
          },
        ]
      })
    /* BEGIN Thursday */

    /* BEGIN Sustitutory */
    // Limpia botones fechas superiores al Examen sustitutorio
    semesterSustitutory
      .filter((_) => convertStringToDate(_.start) <= todate)
      .map((_) => {
        listData = undefined
      })
    // Crea botones Examen sustitutorio
    semesterSustitutory
      .filter((_) => convertStringToDate(_.start) === todate)
      .map((_) => {
        listData = [
          {
            type: 'dark',
            date: value.day(),
            content: (
              <Button
                type="button"
                variant="dark"
                disabled={true}
              >
                Sustitutorios
              </Button>
            ),
          },
        ]
      })
    setloading(false)
    /* END Sustitutory */
    return listData || []
  }

  const dateCellRender = (value: Moment) => {
    const listData = getListData(value)
    return listData.map((item) => <div key={item.type}>{item.content}</div>)
  }

  const onSelect = (newValue: Moment) => {
    const todateNew = convertStringToDate(newValue.toDate())
    // console.log('semesterThursday', semesterThursday)
    const newsemesterThursday: any = semesterThursday
      .filter(
        (_) =>
          convertStringToDate(_.startTime) <= todateNew &&
          convertStringToDate(_.endTime) >= todateNew
      )
      .map((item: any) => ({
        ...item,
        start: `${todateNew} ${convertStringToDateTime(item.start)}`,
      }))
    const dataTemp = semesterThursday.map((item: any) => ({
      ...item,
      start: validFecha(item, newsemesterThursday[0], newValue.day()),
    }))
    setSemesterThursday(dataTemp)
    setValue(newValue)
    setSelectedValue(newValue)
  }

  const validFecha = (date1: any, date2: any, day: any) => {
    if (date1?.id === date2?.id && day !== 2) {
      if (convertStringToDate(date1?.end) > dateNow) {
        return date2.start
      } else {
        getAlert({
          title: TITLE_EMERG,
          text: `No puedes cambiar descansos pasados al ${dateNow}`,
          confirmButtonText: buttons.ok,
        })
        return date1.start
      }
    } else {
      return date1.start
    }
  }
  return (
    <div className={styles.contenido}>
      <Loader loading={Loading} />
      <Modals
        show={modalShow}
        size="xl"
        onHide={() => setModalShow(false)}
        titulo="Registro de día de descanso - Docente Virtual"
      >
        <div>
          <Alerta
            classname="w-100"
            variant="success2"
          >
            <div className={styles.centerInput}>
              <div
                className="col-12 row"
                style={{
                  marginTop: '7px',
                  alignItems: 'center',
                  display: 'block',
                }}
              >
                <img
                  src="https://upn-repositorio-public.s3.amazonaws.com/logos/png/logo-upn-sin-fondo.png"
                  title="Universidad Privada del Norte"
                  alt="Universidad Privada del Norte"
                  style={{ height: '90px', width: '198px' }}
                />
              </div>
              <strong>
                ¡ Gracias por utilizar nuestro Sistema de Solicitud de días de
                descanso !
              </strong>
              <br />
              Te responderemos en el menor tiempo posible para mejorar la
              calidad de nuestro servicio.
              <br />
              <div
                className="row"
                style={{ marginTop: '7px' }}
              >
                <label style={{ fontWeight: 400 }}>
                  Se envió el resumen del reembolso al correo :
                </label>
              </div>
              <div className="row">
                <label style={{ fontWeight: 400 }}>
                  Número Solicitud de Reembolso:
                </label>
              </div>
            </div>
          </Alerta>
        </div>
      </Modals>
      <div className={styles.content}>
        <div className={styles.titulo}>
          <Label classname="text-warning h5 mt-3 mb-3">
            Registro de día de descanso - Docente Virtual
          </Label>
        </div>
        <hr />

        <div>
          <Alerta
            classname="w-100"
            variant="info"
          >
            <div className="mb-0">
              <b>Nota : </b>
              <ul>
                <li>
                  Para actualizar el día de descanso, debe arrastrar el bloque
                  azul al día en el que va a requerir su descanso.
                </li>
                <li>Sólo aplica un día de descanso por semana.</li>
                <li>
                  Recuerde que los días martes y la semana de sustitutorios
                  están bloqueados.
                </li>
                <li>
                  Luego de guardar el cambio, su solicitud será evaluada por su
                  jefe inmediato.
                </li>
              </ul>
            </div>
          </Alerta>
        </div>
        <div className={styles.tablaCenter}>
          <CalendarNew
            selectedValue={selectedValue?.format('YYYY-MM-DD')}
            dateCellRender={dateCellRender}
            onSelect={onSelect}
          />
        </div>
        <div className="col-12 row mt-3 mb-3">
          <div className="col-md-9 " />
          <div className={`col-md-2 ${styles.rightButton}`}>
            <Button
              type="button"
              variant="secondary"
              onclick={() => handleRegresar()}
            >
              Regresar
            </Button>
          </div>
          <div className={`col-md-1 ${styles.rightButton}`}>
            <Button
              type="button"
              variant="primary"
              onclick={() => btnGuardar()}
              disabled={disableGuardar}
            >
              Guardar
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

DescansoDocente.title = 'Descanso Docente'

export default DescansoDocente
