/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import Button from '../../components/UI/atoms/button/Button'
import Label from '../../components/UI/atoms/label/Label'
import RadioButton from '../../components/UI/atoms/RadioButton/RadioButton'
import Tbody from '../../components/UI/molecules/table/tbody/Tbody'
import Thead from '../../components/UI/molecules/table/thead/Thead'
import ViewInput from '../../components/UI/molecules/recuperarAdelantarClases/viewInput/ViewInput'
import ViewList from '../../components/UI/molecules/recuperarAdelantarClases/viewList/ViewList'
import ViewTable from '../../components/UI/molecules/recuperarAdelantarClases/viewTable/ViewTable'
import { Table } from '../../components/UI/organisms/table/Tabla.stories'
import styles from './../../components/templates/recuperarAdelantar/editar/Editar.module.scss'
import { get, remove } from 'local-storage'
import {
  LST_RECOVERY_SELECTED,
  SET_DATA_DOCENTE,
  USER_SESSION,
} from '../../consts/storageConst'
import { apiRecuperarAdelantar } from '../api'
import moment from 'moment'
import Loader from '../../components/UI/atoms/loader/Loader'
import Swal from 'sweetalert2'
import ViewTexarea from '../../components/UI/molecules/recuperarAdelantarClases/viewTexarea/ViewTexarea'
import { redirectRouter } from '../../helpers/routerRedirect'
import { catchingErrorFront } from '../../helpers/helpers'
import TextArea from '../../components/UI/atoms/TextArea/TextArea'

type RecuperationSelected = {
  aulId: number
  aula: string
  carId: string
  carrer: string
  coruseId: string
  course: string
  dateLost: string
  dateRecuperation: string
  hour: number
  hourIdProgramationEnd: number
  hourIdProgramationIni: number
  nroHours: number
  nroRequest: number
  sede: string
  semester: string
  state: string
}

type Labels = {
  viewtextDate: string
  viewtextHour: string
  viewtextHourList: string
  viewtext: string
}

type ScheduleSessions = {
  AulCodigo: string
  CarCodigo: string
  ClaCodigo: string
  ClaseTipo: string
  CurCodigo: string
  Fecha: string
  HorCodigoFin: number
  HorCodigoInicio: number
  HorDia: number
  HorFin: string
  HorInicio: string
  HorMinutosFin: number
  HorMinutosInicio: number
  HorNroSesion: number
  HoraIdFin: number
  HoraIdInicio: number
  NroHoras: number
  SemestreId: number
  TipoDocente: string
  TraCodigo: string
}

type Btns = {
  btnUpdate: boolean
  btnAnular: boolean
}

const EditarRecupera = () => {
  const [DataRecuperation, setDataRecuperation] =
    useState<RecuperationSelected>({
      aula: '',
      aulId: 0,
      carId: '',
      carrer: '',
      coruseId: '',
      course: '',
      dateLost: '',
      dateRecuperation: '',
      hour: 0,
      hourIdProgramationEnd: 0,
      hourIdProgramationIni: 0,
      nroHours: 0,
      nroRequest: 0,
      sede: '',
      semester: '',
      state: '',
    })
  const [ControlText, setControlText] = useState<Labels>({
    viewtext: '',
    viewtextDate: '',
    viewtextHour: '',
    viewtextHourList: '',
  })
  const [ScheduleSessions, setScheduleSessions] = useState<ScheduleSessions>({
    AulCodigo: '',
    CarCodigo: '',
    ClaCodigo: '',
    ClaseTipo: '',
    CurCodigo: '',
    Fecha: '',
    HoraIdFin: 0,
    HoraIdInicio: 0,
    HorCodigoFin: 0,
    HorCodigoInicio: 0,
    HorDia: 0,
    HorFin: '',
    HorInicio: '',
    HorMinutosFin: 0,
    HorMinutosInicio: 0,
    HorNroSesion: 0,
    NroHoras: 0,
    SemestreId: 0,
    TipoDocente: '',
    TraCodigo: '',
  })
  const [Laboratories, setLaboratories] = useState([''])
  const [Loading, setloading] = useState(false)
  const [LaboratoriesList, setLaboratoriesList] = useState([''])
  const [TextEndTime, setTextEndTime] = useState('')
  const [AcepterCond, setAcepterCond] = useState(false)
  const [DateSelected, setDateSelected] = useState('')
  const [IdUser, setIdUser] = useState('')
  const [Holiday, setHoliday] = useState([])
  const [ClasEnabled, setClasEnabled] = useState([''])
  const [DLaula, setDLaula] = useState([])
  const [ViewPanel, setViewPanel] = useState(false)
  const [ContenPanel, setContenPanel] = useState('')
  const [BtnEnabled, setBtnEnabled] = useState<Btns>({
    btnAnular: false,
    btnUpdate: false,
  })
  const [StatusText, setStatusText] = useState('')
  const [SelectedHour, setSelectedHour] = useState('')
  const [AulaSelected, setAulaSelected] = useState('')
  const [ViewHourInitial, setViewHourInitial] = useState(true)
  const [ViewDateInitial, setViewDateInitial] = useState(true)
  const [HourInitial, setHourInitial] = useState('0')
  const [AulaInitial, setAulaInitial] = useState('0')
  const [DateValidate, setDateValidate] = useState(false)
  const [ValidateOnchageDate, setValidateOnchageDate] = useState(false)
  const [Description, setDescription] = useState('')
  const COLUMNS_VIEWDATA = ['Clase', 'Curso', 'Semestre', 'Sede', 'Carrera']
  const COLUMNS_VIEW_ADELANTAR = ['Hora Inicio', 'Hora Fin', 'Horas']
  const lstSelected = JSON.parse(get(LST_RECOVERY_SELECTED))
  const DUENO: any = get(SET_DATA_DOCENTE)
  const User = DUENO?.userName
  const UserCode = get(USER_SESSION)
  const current = new Date()

  const ApiGetClassRecuperation = async (id: any) => {
    try {
      const ClassRecuperationData =
        await apiRecuperarAdelantar.ClassRecuperation(id)
      setDataRecuperation({
        aula: ClassRecuperationData[0].aula,
        aulId: ClassRecuperationData[0].aulId,
        carId: ClassRecuperationData[0].carId,
        carrer: ClassRecuperationData[0].carrer,
        coruseId: ClassRecuperationData[0].coruseId,
        course: ClassRecuperationData[0].course,
        dateLost: ViewDateFormated(ClassRecuperationData[0].dateLost, 1),
        dateRecuperation: ViewDateFormated(
          ClassRecuperationData[0].dateRecuperation,
          2
        ),
        hour: ClassRecuperationData[0].hour,
        hourIdProgramationEnd: ClassRecuperationData[0].hourIdProgramationEnd,
        hourIdProgramationIni: ClassRecuperationData[0].hourIdProgramationIni,
        nroHours: ClassRecuperationData[0].nroHours,
        nroRequest: ClassRecuperationData[0].nroRequest,
        sede: ClassRecuperationData[0].sede,
        semester: ClassRecuperationData[0].semester,
        state: ClassRecuperationData[0].state,
      })

      if (ClassRecuperationData[0].dateRecuperation !== '') {
        ValidationDateText(
          ClassRecuperationData[0].dateRecuperation,
          new Date(ClassRecuperationData[0].dateLost)
        )
        setDateSelected(ClassRecuperationData[0].dateRecuperation)
        return ClassRecuperationData[0]
      } else {
        return ''
      }
    } catch (error: any) {
      catchingErrorFront(error.message)
      setloading(false)
    }
  }

  const ApiPostScheduleSessions = async (
    classCode: any,
    semesterCode: any,
    date: any,
    teacherCode: any
  ) => {
    try {
      const dataSchedule = {
        action: 'get_horario',
        classCode,
        semesterCode,
        date,
        teacherCode,
      }
      const ScheduleSessionsData = await apiRecuperarAdelantar.ScheduleSessions(
        dataSchedule.action,
        dataSchedule.classCode,
        dataSchedule.semesterCode,
        dataSchedule.date,
        dataSchedule.teacherCode
      )
      return ScheduleSessionsData
    } catch (error: any) {
      catchingErrorFront(error.message)
      setloading(false)
    }
  }

  const GetApiLaboratories = async () => {
    try {
      const dataFormated = []
      const LaboratoriesData: any =
        await apiRecuperarAdelantar.listLaboratories()
      for (const element of LaboratoriesData) {
        dataFormated.push(element.HorInicioDesc)
      }
      setLaboratories(dataFormated)
      setLaboratoriesList(LaboratoriesData)
      return { LaboratoriesData, dataFormated }
    } catch (error: any) {
      catchingErrorFront(error.message)
      setloading(false)
    }
  }

  const GetApiHolyday = async (sedeCode: string) => {
    try {
      const DateHolidayData: any = await apiRecuperarAdelantar.listDateHoliday(
        sedeCode
      )
      setHoliday(DateHolidayData)
      return DateHolidayData
    } catch (error: any) {
      catchingErrorFront(error.message)
      setloading(false)
    }
  }

  const GetApiClasEnabledEdit = async (
    classroom: string,
    sedeCode: string,
    date: any,
    hours: string,
    quantity: string
  ) => {
    try {
      setloading(true)
      const dataFormated = []
      date = date.split('T')
      date = date[0].replace('-', '').replace('-', '')

      const ClasEnabledData: any = await apiRecuperarAdelantar.ClasEnabled(
        date,
        date
      )
      const row = ClasEnabledData.filter((x: any) => x.campusCode === sedeCode)
      for (const element of row) {
        dataFormated.push(element.classroomCode)
      }
      const description = `        * Capacidad : ${row[0]?.capacity} Personas
      * Ubicación : ${row[0]?.classroomCode[1]} Piso, Pab "${row[0]?.classroomCode[0]}"
      * Campus    : ${row[0]?.campusName}
      * Lugar     : ${row[0]?.classroomName}`
      setContenPanel(description)
      setAulaInitial(row[0]?.classroomCode)
      setClasEnabled(dataFormated)
      setDLaula(row)
      setloading(false)
      return row
    } catch (error: any) {
      catchingErrorFront(error.message)
      setloading(false)
    }
  }

  const PostUpdateTeacherAttendanceRecoverys = async (
    recoveryId: any,
    classDate: any,
    dateRequired: any,
    codeHour: any,
    nroHours: any,
    classRoomCode: any,
    user: any,
    host: any,
    type: any,
    path: any
  ) => {
    try {
      setloading(true)
      const dataSchedule = {
        recoveryId,
        classDate,
        dateRequired,
        codeHour,
        nroHours,
        classRoomCode,
        user,
        host,
        type,
        path,
      }
      const ScheduleSessionsData: any =
        await apiRecuperarAdelantar.AttendanceRecoverysPUT(
          dataSchedule.recoveryId,
          dataSchedule.classDate,
          dataSchedule.dateRequired,
          dataSchedule.codeHour,
          dataSchedule.nroHours,
          dataSchedule.classRoomCode,
          dataSchedule.user,
          dataSchedule.host,
          dataSchedule.type,
          dataSchedule.path
        )
      ValidateSave(
        FormatedMessage(ScheduleSessionsData.data.message),
        ScheduleSessionsData.data.state
      )
      EnviaEmailEdicion()
      setloading(false)
      redirectRouter('/recuperar-adelantar', setloading)
    } catch (error: any) {
      catchingErrorFront(error.message)
      setloading(false)
    }
  }

  const PostDeleteRecovery = async (recoveryId: any) => {
    try {
      const DeeleteRecoveryData = await apiRecuperarAdelantar.DeleteRecovery(
        recoveryId
      )
      return DeeleteRecoveryData
    } catch (error: any) {
      catchingErrorFront(error.message)
      setloading(false)
    }
  }

  const GetTeacherUser = async (userName: any) => {
    try {
      const TeacherUserData = await apiRecuperarAdelantar.GetTeacherUser(
        userName
      )
      return TeacherUserData[0]
    } catch (error: any) {
      catchingErrorFront(error.message)
      setloading(false)
    }
  }

  const GetClassTeachers = async (Classcode: any) => {
    try {
      const ClassTeachersData = await apiRecuperarAdelantar.GetClassTeachers(
        Classcode
      )
      return ClassTeachersData[0]
    } catch (error: any) {
      catchingErrorFront(error.message)
      setloading(false)
    }
  }

  const GetTeacher = async (code: any) => {
    try {
      const codeData = await apiRecuperarAdelantar.GetTeacher(code)
      return codeData[0]
    } catch (error: any) {
      catchingErrorFront(error.message)
      setloading(false)
    }
  }

  const SenEmail = async (emailJson: any) => {
    try {
      const status = await apiRecuperarAdelantar.email(emailJson)
      return status
    } catch (error: any) {
      catchingErrorFront(error.message)
      setloading(false)
    }
  }

  const GetRateCampusCode = async (raceCode: any, campusCode: any) => {
    try {
      const RateCampusCode = await apiRecuperarAdelantar.GetRateCampusCode(
        raceCode,
        campusCode
      )
      return RateCampusCode
    } catch (error: any) {
      catchingErrorFront(error.message)
      setloading(false)
    }
  }

  const getUsuariosByProceso = async (carrCode: any, sedeCode: any) => {
    try {
      const status = await apiRecuperarAdelantar.GetProcessUser(
        carrCode,
        sedeCode
      )
      return status
    } catch (error: any) {
      catchingErrorFront(error.message)
      setloading(false)
    }
  }

  const PutClassroomReservation = async (
    ocurrenceId: any,
    classroomIntCode: any
  ) => {
    try {
      const data = {
        teacherIntCode: [UserCode],
        responsibleIntCode: UserCode,
        ocurrenceId,
        userIntCode: UserCode,
        classroomIntCode: [classroomIntCode],
        stationIntCode: [''],
      }
      const ScheduleSessionsData: any =
        await apiRecuperarAdelantar.UpdateClassroomReservation(data)
      return ScheduleSessionsData
    } catch (error: any) {
      catchingErrorFront(error.message)
      setloading(false)
    }
  }

  const GetApiClasEnabledBookingCodeRooms = async (
    date: any,
    bookingCode: any
  ) => {
    try {
      setloading(true)
      const ClasEnabledData: any =
        await apiRecuperarAdelantar.ClasEnabledBookingCodeRooms(
          date,
          date,
          bookingCode
        )
      setloading(false)
      return ClasEnabledData
    } catch (error: any) {
      catchingErrorFront(error.message)
      setloading(false)
    }
  }

  const DeleteBooking = async (OcurrencesId: any) => {
    try {
      const data = {
        userIntCode: UserCode,
        ocurrences: [OcurrencesId],
      }
      const response = await apiRecuperarAdelantar.DeleteBooking(data)
      return response
    } catch (error: any) {
      catchingErrorFront(error.message)
      setloading(false)
    }
  }

  // Fin de apis

  const ValidationDateText = (_fecharecupera: any, _fechaperdida: any) => {
    _fecharecupera = moment(new Date(_fecharecupera)).format('DD/MM/yyyy')
    _fechaperdida = moment(_fechaperdida).format('DD/MM/yyyy')
    if (_fecharecupera < _fechaperdida) {
      setControlText({
        viewtextDate: 'Fecha propuesta para adelanto:',
        viewtextHour: 'Horario a adelantar:',
        viewtextHourList: 'Hora propuesta para adelanto:',
        viewtext: 'Hora fin para adelanto:',
      })
    } else {
      setControlText({
        viewtextDate: 'Fecha propuesta para recuperación:',
        viewtextHour: 'Horario a recuperar:',
        viewtextHourList: 'Hora propuesta para recuperación:',
        viewtext: 'Hora fin para recuperación:',
      })
    }
  }

  const ValidateClassEnabled = async (dataValue: any) => {
    if (dataValue !== undefined) {
      return await GetApiClasEnabledEdit(
        dataValue.aulId,
        dataValue.sede,
        dataValue.dateRecuperation,
        dataValue.hour,
        dataValue.nroHours
      )
    } else {
      return await GetApiClasEnabledEdit(
        dataValue.aula,
        dataValue.sede,
        dataValue.dateRecuperation,
        dataValue.hour,
        dataValue.nroHours
      )
    }
  }

  const ValidateSave = (message: string, status: boolean) => {
    if (status === true) {
      ViewMessage(4, message)
    } else {
      ViewMessage(3, message)
    }
  }

  const ValidaDateOnchangeText = (event: React.FormEvent<HTMLInputElement>) => {
    const DateToRecover = (event.target as HTMLInputElement).value
    setDateSelected(DateToRecover)
    ValidaDate(DateToRecover)
    setValidateOnchageDate(true)
  }

  const onValidate = (e: any) => {
    let caracteristicas: string = ''
    const codigoAula = e
    if (DLaula !== undefined) {
      const filter: any = DLaula.find(
        (x: any) => x.classroomCode === codigoAula
      )
      if (filter !== undefined) {
        const description = `        * Capacidad : ${filter?.capacity} Personas
      * Ubicación : ${filter?.classroomCode[1]} Piso, Pab "${filter?.classroomCode[0]}"
      * Campus    : ${filter?.campusName}
      * Lugar     : ${filter?.classroomName}`
        caracteristicas = description
      }
    }

    return caracteristicas
  }

  const ValidateState = (state: any) => {
    let stateVale: string = ''
    switch (state) {
      case 'I':
        stateVale = 'Pendiente'
        setBtnEnabled({
          btnUpdate: false,
          btnAnular: false,
        })
        break
      case 'P':
        stateVale = 'Programada'
        setBtnEnabled({
          btnUpdate: true,
          btnAnular: true,
        })
        break
      case 'E':
        stateVale = 'Ejecutada'
        setBtnEnabled({
          btnUpdate: true,
          btnAnular: true,
        })
        break
      case 'A':
        stateVale = 'Anulada'
        setBtnEnabled({
          btnUpdate: true,
          btnAnular: true,
        })
        break

      default:
        break
    }

    if (state === 'P') ViewMessage(6)
    setStatusText(stateVale)
  }

  const ValidatePanel = (Data: any) => {
    if (Data !== '') {
      if (Data === 'RM' || Data === 'VT') {
        setViewPanel(false)
      } else {
        setViewPanel(true)
      }
    } else {
      setViewPanel(true)
    }
  }

  const ValidaDate = (e: any) => {
    setAulaInitial('0')
    let result = false
    let DateSelected = ''
    if (Holiday.length > 0) {
      const DateToRecover = e
      DateSelected = FormatDateHoliday(DateToRecover, 1)
      const response = Holiday.find(
        (x: any) => FormatDateHoliday(x.date, 2) === DateSelected
      )
      if (response !== undefined) result = true
    }

    if (result) {
      ViewMessage(0)
      setBtnEnabled({
        btnUpdate: true,
        btnAnular: true,
      })
    } else {
      setBtnEnabled({
        btnUpdate: false,
        btnAnular: true,
      })
      LlenarDDlAula(e)
    }
  }

  const ValidateCodAula = (dataValue: any, dataAula: any) => {
    let expression: string
    let foundRows: any

    if (dataValue !== undefined) {
      expression = dataValue.aula

      foundRows = dataAula.find((x: any) => x.classroomCode === expression)

      if (foundRows !== undefined) {
        const description = `        * Capacidad : ${foundRows?.capacity} Personas
        * Ubicación : ${foundRows?.classroomCode[1]} Piso, Pab "${foundRows?.classroomCode[0]}"
        * Campus    : ${foundRows?.campusName}
        * Lugar     : ${foundRows?.classroomName}`
        setAulaInitial(foundRows?.classroomCode)
        setContenPanel(description)
      }
    }
  }

  const validateUpdateClassroomReservation = (
    res: any,
    RecuperacionId: any,
    fechaclase: any,
    date: any,
    hora: any,
    nroHoras: any,
    codAula: any,
    UserName: any
  ) => {
    if (res.status === true) {
      PostUpdateTeacherAttendanceRecoverys(
        RecuperacionId,
        fechaclase,
        date,
        hora,
        nroHoras,
        codAula,
        UserName,
        '',
        '',
        ''
      )
    } else {
      ViewMessage(3, 'Error al actualizar el aula')
    }
  }
  // Validaciones

  const formatHour = (fecha: string) => {
    const dateSplit = fecha.split('T')
    const date = `${dateSplit[0]} ${dateSplit[1]}`
    const dateConvert = moment(date).format('HH:mm')

    return dateConvert
  }

  const FormatedMessage = (messageFormated: string) => {
    let message: string = ''
    if (messageFormated.indexOf('UPNEXCEPTION:') > -1) {
      message = messageFormated
        .slice(messageFormated.indexOf('UPNEXCEPTION:') + 13)
        .trim()
    } else {
      message = messageFormated
    }
    return message
  }

  const formatDate = (fecha: string) => {
    const dateSplit = fecha.split('T')
    const datetext = `${dateSplit[0]} ${dateSplit[1]}`
    const Value = new Date(datetext)
    const dateConvert = moment(Value).format('YYYY-DD-MM')

    return dateConvert
  }

  const ViewDateFormated = (Date: any, option: number) => {
    let result: any
    const dateSplit = Date.split('T')
    const datetext = `${dateSplit[0]}`
    const ValueText = datetext.split('-')
    if (option === 1) result = `${ValueText[2]}/${ValueText[1]}/${ValueText[0]}`
    else result = `${ValueText[0]}-${ValueText[1]}-${ValueText[2]}`
    return result
  }

  const FormatDateGet = (Date: any, hour: any) => {
    Date = Date.trim().split('-')
    const contenDate = parseInt(Date[2]) + 1
    const formatHour = `${hour[0].trim()}:${hour[1].trim()}:00`
    Date = `${Date[0]}-${Date[1]}-${contenDate}T${formatHour}`
    return Date
  }

  const FormatDateHoliday = (date: string, value: number) => {
    if (value === 1) {
      const forDate = date.split('-')
      const dateAbsolute: string = `${forDate[2]}/${forDate[1]}/${forDate[0]}`
      return dateAbsolute
    } else {
      const DateValue = new Date(date)
      return moment(DateValue).format('DD/MM/YYYY')
    }
  }

  const FormatDateSend = (date: any) => {
    let response: any = date.split('/')
    response = `${response[2]}-${response[1]}-${response[0]}`
    return new Date(response)
  }

  const convertTimeto24 = (time: any) => {
    const response = time.split(':')
    if (time !== '') {
      if (parseInt(response[0]) >= 12) return `${time} PM`
      else return `${time} AM`
    }
    return ''
  }

  // Format

  const cancelOperation = () => {
    redirectRouter('/recuperar-adelantar', setloading)
    remove(LST_RECOVERY_SELECTED)
  }

  const GetEndTime = (DataArray: any, DataRecoveryID: any, value: any) => {
    const DataTotal = DataArray
    const DataId = DataRecoveryID

    if (DataTotal !== undefined) {
      const DataSelected = DataTotal.find((x: any) => x.HorInicioDesc === value)

      if (DataSelected !== undefined) {
        const response =
          parseInt(DataSelected.HorCodigo) + (parseInt(DataId.NroHoras) - 1)
        const HorCodigo: any = DataTotal.find(
          (x: any) => x.HorCodigo === response
        )
        if (HorCodigo !== undefined) {
          const valueDate = new Date(HorCodigo.HorFinal)
          const result = moment(valueDate).format('HH:mm')
          setTextEndTime(result)
        } else {
          setTextEndTime('')
        }
      }
    }
  }

  const OnchangeValidateHoraPropuesta = (e: any) => {
    let TextSelected: string = (e.target as HTMLInputElement).value
    TextSelected = TextSelected.replace(':', '.')
      .replace('PM', '')
      .replace('AM', '')
    setSelectedHour(TextSelected)
    GetEndTime(LaboratoriesList, ScheduleSessions, TextSelected)
    LlenarDDlAula(DateSelected, TextSelected, 1)
  }

  const btnEditar = async () => {
    let aula: string = ' '
    let codAula: string = ' '
    let valor = 0

    if (lstSelected.ClaMetodoEducativo !== '') {
      if (
        lstSelected.ClaMetodoEducativo === 'RM' ||
        lstSelected.ClaMetodoEducativo === 'VT'
      ) {
        aula = ''
        codAula = '0'
      } else {
        const response: any = DLaula.find(
          (x: any) => x.classroomCode === AulaInitial
        )

        if (response !== undefined) {
          aula = response.classroomCode
          codAula = response.classroomId
        }
      }
    } else {
      const response: any = DLaula.find(
        (x: any) => x.classroomCode === AulaInitial
      )
      if (response !== undefined) {
        aula = response.classroomCode
        codAula = response.classroomId
      }
    }

    const fechaclase = FormatDateSend(DataRecuperation.dateLost)
    const DataSelected: any = LaboratoriesList.find(
      (x: any) => x.HorInicioDesc === SelectedHour
    )
    const hora = DataSelected.HorCodigo
    const nroHoras = ScheduleSessions.NroHoras
    const val: any = SelectedHour.split('.')
    const valueDate = FormatDateGet(DateSelected, val)
    const fechacomparativa: Date = new Date(valueDate)
    const now = new Date()

    if (fechacomparativa <= now) {
      ViewMessage(1)
      valor = 1
    }

    if (AcepterCond === false) {
      ViewMessage(2)
      valor = 1
    }

    if (TextEndTime === '') {
      ViewMessage(7)
      valor = 1
    }

    if (ViewDateInitial === false) {
      if (ValidateOnchageDate === false) {
        ViewMessage(8)
        valor = 1
      }
    }

    if (DateSelected === '') {
      ViewMessage(8)
      valor = 1
    }

    const UserName = User

    if (valor === 0) {
      if (ViewPanel === true) {
        let date: any = DateSelected.split('T')
        date = date[0].replace('-', '').replace('-', '')

        const response: any = DLaula.find(
          (x: any) => x.classroomCode === AulaInitial
        )
        const res = await PutClassroomReservation(
          lstSelected.OcurrenceId,
          response.classroomIntCode
        )
        validateUpdateClassroomReservation(
          res,
          lstSelected.RecuperacionId,
          fechaclase,
          DateSelected,
          hora,
          nroHoras,
          aula,
          UserName
        )
      } else {
        return PostUpdateTeacherAttendanceRecoverys(
          lstSelected.RecuperacionId,
          fechaclase,
          DateSelected,
          hora,
          nroHoras,
          aula,
          UserName,
          '',
          '',
          ''
        )
      }
    }
  }

  const OnchangeAulaEdit = (e: any) => {
    const value = e.target.value
    const response = onValidate(value)
    setAulaInitial(value)
    setContenPanel(response)
    setViewPanel(true)
    setAulaSelected(value)
  }

  const LlenarDDlAula = (value: any, hour?: any, index?: any) => {
    if (value !== '') {
      const sede = DataRecuperation.sede
      if (ScheduleSessions !== undefined) {
        const nrHoras = ScheduleSessions.NroHoras
        let itemHour = ''
        if (index === 1) itemHour = hour
        else {
          itemHour = SelectedHour
          value = value + 'T00:00:00'
        }

        const HorCodigo: any = LaboratoriesList.find(
          (x: any) => x.HorInicioDesc === itemHour
        )

        GetApiClasEnabledEdit(
          'null',
          sede,
          value,
          HorCodigo.HorCodigo,
          nrHoras.toString()
        )
      }
    }
  }

  const CancelRequest = async () => {
    setloading(true)

    if (ViewPanel === true) {
      const response = await DeleteBooking(lstSelected.OcurrenceId)
      if (response.status === true) {
        await PostDeleteRecovery(IdUser)
        await EnviaEmailAnulacion()
        ViewMessage(5)
        setloading(false)
        redirectRouter('/recuperar-adelantar', setloading)
      } else {
        ViewMessage(3, 'No se pudo anular la solicitud')
      }
    } else {
      await PostDeleteRecovery(IdUser)
      await EnviaEmailAnulacion()
      ViewMessage(5)
      setloading(false)
      redirectRouter('/recuperar-adelantar', setloading)
    }
  }

  // metodos

  const ViewMessage = (IdMessage: number, contenMessage?: string) => {
    switch (IdMessage) {
      case 0:
        return Swal.fire({
          title: 'Portal de Docentes',
          text: `Ha escogido como fecha requerida un feriado`,
          icon: 'warning',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK',
        })
      case 1:
        return Swal.fire({
          title: 'Portal de Docentes',
          text: `La fecha seleccionada no puede ser inferior a la actual`,
          icon: 'warning',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK',
        })
      case 2:
        return Swal.fire({
          title: 'Portal de Docentes',
          text: `Debe ACEPTAR los TÉRMINOS Y CONDICIONES para continuar!.`,
          icon: 'warning',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK',
        })
      case 3:
        return Swal.fire({
          title: 'Portal de Docentes',
          text: `${contenMessage}`,
          icon: 'error',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK',
        })
      case 4:
        return Swal.fire({
          title: 'Portal de Docentes',
          text: `${contenMessage}`,
          icon: 'success',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK',
        })
      case 5:
        return Swal.fire({
          title: 'Portal de Docentes',
          text: `Se anuló correctamente la recuperación de clase.`,
          icon: 'success',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK',
        })
      case 6:
        return Swal.fire({
          title: 'Portal de Docentes',
          text: `Las solicitudes con estado programado, no se pueden anular`,
          icon: 'warning',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK',
        })
      case 7:
        return Swal.fire({
          title: 'Portal de Docentes',
          text: `No exite una hora final para recuperar la clase, seleccione otra hora propuesta para recuperación`,
          icon: 'warning',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK',
        })
      case 8:
        return Swal.fire({
          title: 'Portal de Docentes',
          text: `Debe seleccionar una fecha para la recuperación`,
          icon: 'warning',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK',
        })
      default:
        break
    }
  }

  const DateMin = () => {
    current.setDate(current.getDate() + 1)
    const DateMin = current.toDateString()
    const dateAbsolutMin = new Date(DateMin)
    const DateMinConvert = moment(dateAbsolutMin).format('YYYY-MM-DD')
    return DateMinConvert
  }

  const DateMax = () => {
    current.setDate(current.getDate() + 60)
    const DateMax = current.toDateString()
    const dateAbsolutMax = new Date(DateMax)
    const DateMaxConvert = moment(dateAbsolutMax).format('YYYY-MM-DD')
    return DateMaxConvert
  }

  const GetValueHour = (Data: any, Hour: any) => {
    const GetHour: any = Data.find((x: any) => x.HorCodigo === Hour.hour)
    setHourInitial(GetHour.HorInicioDesc)
    setSelectedHour(GetHour.HorInicioDesc)
    return GetHour.HorInicioDesc
  }

  const EnviaEmailAnulacion = async () => {
    const drDocente = await GetTeacherUser(User)
    if (drDocente !== undefined) {
      const nombre = `${drDocente.lastName} ${drDocente.middleLastName}, ${drDocente.name}`

      const curso = DataRecuperation.coruseId
      const clase = ScheduleSessions.ClaCodigo
      const carrera = DataRecuperation.carId
      const sede = DataRecuperation.sede

      const fechaclase = new Date(DataRecuperation.dateLost)
      const fecharequerida = new Date(DateSelected)
      let tipo = ''

      if (fecharequerida < fechaclase) {
        tipo = 'A'
      } else {
        tipo = 'R'
      }

      const tipoDescripcion = tipo === 'A' ? 'adelanto' : 'recuperación'

      const msg = `La solicitud de ${tipoDescripcion} de la clase ${curso} - ${clase} ha sido ANULADA`

      const ClassTeachers = await GetClassTeachers(clase)
      const codigoDocprin = ClassTeachers.TeacherCode
      const teacher = await GetTeacher(lstSelected.CodSol)
      const email = teacher.email
      const lstEmailDocente = []
      lstEmailDocente.push(email)
      if (codigoDocprin !== lstSelected.CodSol) {
        const drdocenteprincipal = await GetTeacher(codigoDocprin)
        const emailPri = drdocenteprincipal.email
        lstEmailDocente.push(emailPri)
      }

      const emailJson = {
        ListDestinatarios: lstEmailDocente,
        DisplayName: 'UPN Docentes',
        Asunto: `Portal Docentes - ${tipoDescripcion}  de clase`,
        Body: msg,
        IsHtml: false,
        ListResponderA: lstEmailDocente,
        TipoNotificacion: '1',
        EncolarEnvio: true,
      }

      await SendMail(emailJson)

      const lstEmailDirectores: any = []
      const dtDircar: [] = await GetRateCampusCode(carrera, sede)
      dtDircar.map((x: any) => lstEmailDirectores.push(x.emailUPN))

      const emailJsonDirectores = {
        ListDestinatarios: lstEmailDirectores,
        DisplayName: 'UPN Docentes',
        Asunto: `Portal Docentes - ${tipoDescripcion}  de clase`,
        Body: msg,
        IsHtml: false,
        ListResponderA: email,
        TipoNotificacion: '1',
        EncolarEnvio: true,
      }

      await SendMail(emailJsonDirectores)

      const lstEmailUsuarioAlerta: any = []
      // eslint-disable-next-line camelcase
      const dtUsucfg: any = await getUsuariosByProceso(carrera, sede)
      // eslint-disable-next-line camelcase
      dtUsucfg.map((x: any) => lstEmailUsuarioAlerta.push(x.s_proale_email))
      const emailJsonUsuarios = {
        ListDestinatarios: lstEmailUsuarioAlerta,
        DisplayName: 'UPN Docentes',
        Asunto: `Portal Docentes - ${tipoDescripcion}  de clase`,
        Body: msg,
        IsHtml: false,
        ListResponderA: email,
        TipoNotificacion: '1',
        EncolarEnvio: true,
      }

      await SendMail(emailJsonUsuarios)
    }
  }

  const EnviaEmailEdicion = async () => {
    const drDocente = await GetTeacherUser(User)
    if (drDocente !== undefined) {
      const nombre = `${drDocente.lastName} ${drDocente.middleLastName}, ${drDocente.name}`
      const curso = DataRecuperation.coruseId
      const clase = ScheduleSessions.ClaCodigo
      const carrera = DataRecuperation.carId
      const nroHoras = ScheduleSessions.NroHoras
      const sede = DataRecuperation.sede

      const fechaclase = new Date(DataRecuperation.dateLost)
      const fecharequerida = new Date(DateSelected)
      let tipo = ''

      if (fecharequerida < fechaclase) {
        tipo = 'A'
      } else {
        tipo = 'R'
      }

      const tipoDescripcion = tipo === 'A' ? 'adelanto' : 'recuperación'

      let horaRecuperacion: any
      const DataSelected: any = LaboratoriesList.find(
        (x: any) => x.HorInicioDesc === SelectedHour
      )
      const horcodigo = DataSelected.HorCodigo
      if (LaboratoriesList.length > 0) {
        const foundRows: any = LaboratoriesList.find(
          (x: any) => x.HorCodigo === horcodigo
        )
        if (foundRows.length > 0) {
          const dtTime = new Date(foundRows.HorFinal)
          horaRecuperacion = dtTime
        }
      }

      let msgEnd, msg2End
      if (lstSelected.ClaMetodoEducativo !== '') {
        if (
          lstSelected.ClaMetodoEducativo === 'RM' ||
          lstSelected.ClaMetodoEducativo === 'VT'
        ) {
          msgEnd = `Aula: Remoto/Virtual`
          msg2End = `Aula: Remoto/Virtual`
        } else {
          msgEnd = `Aula: ${AulaSelected}`
          msg2End = `Aula: ${AulaSelected}`
        }
      } else {
        msgEnd = `Aula: ${AulaSelected}`
        msg2End = `Aula: ${AulaSelected}`
      }

      const msg = ` <div>
          <p>Estimado docente: ${nombre}</p>
          <br/>
          <p>Su clase ${curso} - ${clase}  ha sido RE-PROGRAMADA</p>
          <br/>
          <p>Fecha de ${tipoDescripcion}: ${DateSelected}</p>
          <br/>
          <p>Hora de ${tipoDescripcion}: ${horaRecuperacion}</p>
          <br/>
          <p>${msgEnd}</p>
          </div>`

      const msg2 = ` <div>
          <p>El docente: ${nombre}</p>
          <br/>
          <p>Ha RE-PROGRAMADO la clase ${curso} - ${clase}</p>
          <br/>
          <p>Fecha de ${tipoDescripcion}: ${DateSelected}</p>
          <br/>
          <p>Hora de ${tipoDescripcion}: ${horaRecuperacion}</p>
          <br/>
          <p>${msg2End}</p>
          </div>`

      const ClassTeachers = await GetClassTeachers(clase)
      const codigoDocprin = ClassTeachers.TeacherCode
      const teacher = await GetTeacher(lstSelected.CodSol)
      const email = teacher.email

      const lstEmailDocente = []
      lstEmailDocente.push(email)
      if (codigoDocprin !== lstSelected.CodSol) {
        const drdocenteprincipal = await GetTeacher(codigoDocprin)
        const emailPri = drdocenteprincipal.email
        lstEmailDocente.push(emailPri)
      }

      const emailJson = {
        ListDestinatarios: lstEmailDocente,
        DisplayName: 'UPN Docentes',
        Asunto: `Portal Docentes - ${tipoDescripcion}  de clase`,
        Body: msg,
        IsHtml: false,
        ListResponderA: lstEmailDocente,
        TipoNotificacion: '1',
        EncolarEnvio: true,
      }

      await SendMail(emailJson)

      const lstEmailUsuarioAlerta: any = []
      // eslint-disable-next-line camelcase
      const dtUsucfg: any = await getUsuariosByProceso(carrera, sede)
      // eslint-disable-next-line camelcase
      dtUsucfg.map((x: any) => lstEmailUsuarioAlerta.push(x.s_proale_email))

      const emailJsonUsuarios = {
        ListDestinatarios: lstEmailUsuarioAlerta,
        DisplayName: 'UPN Docentes',
        Asunto: `Portal Docentes - ${tipoDescripcion}  de clase`,
        Body: msg2,
        IsHtml: false,
        ListResponderA: email,
        TipoNotificacion: '1',
        EncolarEnvio: true,
      }

      await SendMail(emailJsonUsuarios)
    }
  }

  const SendMail = async (input: any) => {
    const env = process.env.PRODUCCION_EMAIL === 'producción' ? 'prod' : 'dev'
    if (env === 'dev') {
      const emailList = ['david.cotrina@upn.edu.pe']
      input.ListDestinatarios =
        input.ListDestinatarios === '' ? input.ListDestinatarios : emailList
      input.ListResponderA =
        input.ListResponderA === '' ? input.ListResponderA : emailList
      input.ListCC = input.ListCC === '' ? input.ListCC : emailList
      input.ListBCC = input.ListBCC === '' ? input.ListBCC : emailList
    }

    return await SenEmail(input)
  }

  const FillScheduleSessions = (
    LaboratoriesData: any,
    ScheduleSessions: any,
    dataFormated: any
  ) => {
    setScheduleSessions({
      AulCodigo: ScheduleSessions[0].AulCodigo,
      CarCodigo: ScheduleSessions[0].AulCodigo,
      ClaCodigo: ScheduleSessions[0].ClaCodigo,
      ClaseTipo: ScheduleSessions[0].ClaseTipo,
      CurCodigo: ScheduleSessions[0].CurCodigo,
      Fecha: ScheduleSessions[0].Fecha,
      HoraIdFin: ScheduleSessions[0].HoraIdFin,
      HoraIdInicio: ScheduleSessions[0].HoraIdInicio,
      HorCodigoFin: ScheduleSessions[0].HorCodigoFin,
      HorCodigoInicio: ScheduleSessions[0].HorCodigoInicio,
      HorDia: ScheduleSessions[0].HorDia,
      HorFin: formatHour(ScheduleSessions[0].HorFin),
      HorInicio: formatHour(ScheduleSessions[0].HorInicio),
      HorMinutosFin: ScheduleSessions[0].HorMinutosFin,
      HorMinutosInicio: ScheduleSessions[0].HorMinutosInicio,
      HorNroSesion: ScheduleSessions[0].HorNroSesion,
      NroHoras: ScheduleSessions[0].NroHoras,
      SemestreId: ScheduleSessions[0].SemestreId,
      TipoDocente: ScheduleSessions[0].TipoDocente,
      TraCodigo: ScheduleSessions[0].TraCodigo,
    })
    GetEndTime(LaboratoriesData, ScheduleSessions[0], dataFormated)
  }

  // Funciones

  useEffect(() => {
    const Load = async () => {
      setloading(true)
      setIdUser(IdRecperation)

      try {
        const { LaboratoriesData, dataFormated }: any =
          await GetApiLaboratories()
        const ClassRecuperation = await ApiGetClassRecuperation(IdRecperation)
        const { semester, dateLost, sede } = ClassRecuperation
        const ScheduleSessions = await ApiPostScheduleSessions(
          lstSelected.ClaCodigo,
          semester,
          formatDate(dateLost),
          lstSelected.CodSol
        )
        const value = await GetValueHour(LaboratoriesData, ClassRecuperation)
        if (ScheduleSessions.length > 0) {
          const row = ScheduleSessions.filter(
            (x: any) =>
              x?.HoraIdInicio === ClassRecuperation?.hourIdProgramationIni
          )
          FillScheduleSessions(LaboratoriesData, row, value)
        }
        await GetApiHolyday(sede)
        const response = await ValidateClassEnabled(ClassRecuperation)
        ValidateCodAula(ClassRecuperation, response)
        ValidateState(ClassRecuperation.state)
        ValidatePanel(lstSelected.ClaMetodoEducativo)

        let date: any = ClassRecuperation.dateRecuperation
        date = date.split('T')
        date = date[0].replace('-', '').replace('-', '')

        const result = await GetApiClasEnabledBookingCodeRooms(
          date,
          lstSelected.BookingId
        )
        if (result.length > 0)
          setDescription(
            result[0].description === null ||
              result[0].description === undefined
              ? ''
              : result[0].description
          )
      } catch (error: any) {
        catchingErrorFront(error.message)
        setloading(false)
      }
      setloading(false)
    }
    const IdRecperation = lstSelected?.RecuperacionId
    if (lstSelected !== undefined) {
      Load()
    }
  }, [])

  return (
    <div className={styles.contenido}>
      <Loader loading={Loading} />
      <div className={styles.content}>
        <div className={styles.titulo}>
          <Label classname="text-warning h5 mt-3 mb-3">
            Recuperar/Adelantar clases
          </Label>
        </div>

        <div className={styles.titulo}>
          <Label classname="text-black h6 mt-3 mb-3">Editar solicitud</Label>
        </div>

        <div className={`${styles.tabla}`}>
          <Table classname={`${styles.formaterTabla} `}>
            <Thead>
              {COLUMNS_VIEWDATA.map((x, y) => (
                <th key={y}>{x}</th>
              ))}
            </Thead>
            <Tbody>
              <tr>
                <td>{ScheduleSessions.ClaCodigo}</td>
                <td>{DataRecuperation.course}</td>
                <td>{DataRecuperation.semester}</td>
                <td>{DataRecuperation.sede}</td>
                <td>{DataRecuperation.carrer}</td>
              </tr>
            </Tbody>
          </Table>
        </div>

        <div className={styles.blocFormValidateRow}>
          <Label>Número de solicitud: {DataRecuperation.nroRequest}</Label>
          <Label>Estado de la solicitud: {StatusText}</Label>
        </div>
        <br />
        <div className={styles.blocFormValidateRow}>
          <ViewInput
            disabled={true}
            texLabel={'Fecha de clase perdida'}
            typeInput={'text'}
            nameInput={''}
            idInput={''}
            value={DataRecuperation.dateLost}
            index={1}
            readOnly
          />
          {ViewDateInitial === true ? (
            <ViewInput
              texLabel={ControlText.viewtextDate}
              typeInput={'date'}
              nameInput={''}
              idInput={''}
              value={DataRecuperation.dateRecuperation}
              onClick={() => setViewDateInitial(false)}
              index={3}
            />
          ) : (
            <ViewInput
              texLabel={ControlText.viewtextDate}
              typeInput={'date'}
              nameInput={''}
              idInput={''}
              Onchange={ValidaDateOnchangeText}
              min={DateValidate === true ? DateMin() : ''}
              onClick={() => setDateValidate(true)}
              max={DateValidate === true ? DateMax() : ''}
              index={2}
            />
          )}
        </div>
        <br />
        <div className={styles.blocFormValidateRowTable}>
          <ViewTable
            textLabel={ControlText.viewtextHour}
            theadColums={COLUMNS_VIEW_ADELANTAR}
            tbodyRows={[
              convertTimeto24(ScheduleSessions.HorInicio),
              convertTimeto24(ScheduleSessions.HorFin),
              ScheduleSessions.NroHoras,
            ]}
          />
        </div>
        <br />
        <div className={styles.blocFormValidateRow}>
          {ViewHourInitial === true ? (
            <ViewList
              texLabel={ControlText.viewtextHourList}
              optionSelect={Laboratories}
              index={0}
              onChange={() => setViewHourInitial(false)}
              onClick={() => setViewHourInitial(false)}
              value={HourInitial}
              consult={3}
            />
          ) : (
            <ViewList
              texLabel={ControlText.viewtextHourList}
              optionSelect={Laboratories}
              index={0}
              onChange={OnchangeValidateHoraPropuesta}
            />
          )}

          <ViewInput
            texLabel={ControlText.viewtext}
            typeInput={'text'}
            nameInput={''}
            idInput={''}
            value={convertTimeto24(TextEndTime)}
            index={1}
            placeholder={' '}
            readOnly
          />
        </div>

        {ViewPanel === true ? (
          <div>
            <br />
            <div className={styles.blocFormValidateRow}>
              <ViewList
                texLabel={'Aula:'}
                optionSelect={ClasEnabled}
                index={0}
                onChange={OnchangeAulaEdit}
                consult={4}
                value={AulaInitial}
              />

              <ViewTexarea
                texLabel={'Caracteristicas del ambiente:'}
                disabled={true}
                placeholder=" "
                value={ContenPanel}
                style={{ height: '3em', paddingTop: '7px' }}
              />
            </div>
            <div className={styles.TexareaConten}>
              <Label>Descripción</Label>
              <TextArea
                type={'textarea'}
                placeholder={''}
                controlId={''}
                disabled={true}
                classname={''}
                value={Description}
                style={{ paddingTop: '7px' }}
              />
            </div>
            <br />
          </div>
        ) : null}

        <br />
        <div>
          <b>
            <RadioButton
              type={'checkbox'}
              id={'default'}
              name={'check'}
              value={
                'Acepto los términos y condiciones correspondientes al proceso CONTROL DE RECUPERACIÓN Y ADELANTO DE CLASES.'
              }
              disabled={false}
              onclick={() => setAcepterCond(!AcepterCond)}
            />
          </b>
        </div>
        <div className={styles.botonesAlign}>
          <div>
            <Button
              classname={styles.btnresponsive}
              type="button"
              variant="primary"
              onclick={btnEditar}
              disabled={BtnEnabled.btnUpdate}
            >
              Guardar Solicitud
            </Button>
          </div>
          <div>
            <Button
              classname={styles.btnresponsive}
              type="button"
              variant="danger"
              disabled={BtnEnabled.btnAnular}
              onclick={CancelRequest}
            >
              Anular Solicitud
            </Button>
          </div>
          <div>
            <Button
              type="button"
              variant="secondary"
              onclick={cancelOperation}
            >
              Cancelar
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

EditarRecupera.title = 'Recuperar/Adelantar clases'
export default EditarRecupera
