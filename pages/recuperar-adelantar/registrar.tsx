/* eslint-disable spaced-comment */
/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable camelcase */
import Label from '../../components/UI/atoms/label/Label'
import styles from '../../components/templates/recuperarAdelantar/registrar/Registrar.module.scss'
import Button from '../../components/UI/atoms/button/Button'
import dynamic from 'next/dynamic'
import Alerta from '../../components/UI/atoms/alert/Alerts'
import Anchor from '../../components/UI/atoms/anchor/Anchor'
import RadioBtn from '../../components/UI/atoms/RadioButton/RadioButton'
import Form from '../../components/UI/molecules/form/Form'
import ViewList from '../../components/UI/molecules/recuperarAdelantarClases/viewList/ViewList'
import ViewInput from '../../components/UI/molecules/recuperarAdelantarClases/viewInput/ViewInput'
import ViewTable from '../../components/UI/molecules/recuperarAdelantarClases/viewTable/ViewTable'
import ViewTexarea from '../../components/UI/molecules/recuperarAdelantarClases/viewTexarea/ViewTexarea'
import { useEffect, useState } from 'react'
import { apiRecuperarAdelantar } from '../api'
import Loader from '../../components/UI/atoms/loader/Loader'
import Swal from 'sweetalert2'
import Input from '../../components/UI/atoms/input/Input'
import moment from 'moment'
import { SET_DATA_DOCENTE, USER_SESSION } from '../../consts/storageConst'
import { get } from 'local-storage'
import { catchingErrorFront, getIpClient } from '../../helpers/helpers'
import { redirectRouter } from '../../helpers/routerRedirect'
import TextArea from '../../components/UI/atoms/TextArea/TextArea'

const TableDinamic = dynamic(
  () => import('../../components/UI/molecules/tableDinamic/Table'),
  {
    ssr: false,
  }
)

type Selected = {
  ClaCodigo: string
  ClaTipo: string
  SemCodigo: string
  SedCodigo: string
  ClaMetodoEducativo: string
  coruseId: string
  CarCodigo: string
  sede: string
  dateLost: string
  CodSol: string
  CurCodigo: string
}

type LstText = {
  FechaClase: string
  FechaPropuesta: string
  Horario: string
  HoraPropuesta: string
  HoraPropuestaFin: string
}

type btnDesa = {
  btnSave: boolean
}

type TableSecondaryView = {
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

const Resumen = () => {
  const [ip, setip] = useState('')
  const [TeacherCourses, setTeacherCourses] = useState<any>([])
  const [Holyday, setHolyday] = useState([])
  const [TeacherCoursesSelected, setTeacherCoursesSelected] =
    useState<Selected>({
      ClaCodigo: '',
      ClaTipo: '',
      SemCodigo: '',
      SedCodigo: '',
      ClaMetodoEducativo: '',
      coruseId: '',
      CarCodigo: '',
      sede: '',
      dateLost: '',
      CodSol: '',
      CurCodigo: '',
    })
  const [ClassDate, setClassDate] = useState([''])
  const [Laboratories, setLaboratories] = useState([''])
  const [LaboratoriesList, setLaboratoriesList] = useState([''])
  const [Loading, setloading] = useState(false)
  const [ViewRB, setViewRB] = useState(false)
  const [RBactiveViewPanel, setRBactiveViewPanel] = useState(false)
  const [AlterTextView, setAlterTextView] = useState<LstText>({
    FechaClase: '',
    FechaPropuesta: '',
    HoraPropuesta: '',
    HoraPropuestaFin: '',
    Horario: '',
  })
  const [ViewPanel, setViewPanel] = useState(false)
  const [ViewError, setViewError] = useState(false)
  const [DesabledBTN, setDesabledBTN] = useState<btnDesa>({ btnSave: false })
  const [MissedClassDate, setMissedClassDate] = useState('')
  const [SelectedHour, setSelectedHour] = useState('')
  const [ViewTableData, setViewTableData] = useState(false)
  const [TableSecondary, setTableSecondary] = useState<TableSecondaryView>({
    AulCodigo: '',
    CarCodigo: '',
    ClaCodigo: '',
    ClaseTipo: '',
    CurCodigo: '',
    Fecha: '',
    HorCodigoFin: 0,
    HorCodigoInicio: 0,
    HorDia: 0,
    HorFin: '',
    HorInicio: '',
    HorMinutosFin: 0,
    HorMinutosInicio: 0,
    HorNroSesion: 0,
    HoraIdFin: 0,
    HoraIdInicio: 0,
    NroHoras: 0,
    SemestreId: 0,
    TipoDocente: '',
    TraCodigo: '',
  })
  const [BtnSelected, setBtnSelected] = useState(0)
  const [ClasEnabled, setClasEnabled] = useState<any>()
  const [DateSelectedItem, setDateSelectedItem] = useState('')
  const [DLaula, setDLaula] = useState<any>([])
  const [btnActive, setbtnActive] = useState('')
  const [AcepterCond, setAcepterCond] = useState(false)
  const [BtnCheckedR, setBtnCheckedR] = useState(false)
  const [BtnCheckedA, setBtnCheckedA] = useState(false)
  const [viewCalculatedTime, setviewCalculatedTime] = useState('')
  const [InputDateEmty, setInputDateEmty] = useState(false)
  const [ContenPanel, setContenPanel] = useState('')
  const [AulaSelected, setAulaSelected] = useState('')
  const [BtnCheckedAcep, setBtnCheckedAAcep] = useState(false)
  const [DateValidate, setDateValidate] = useState(false)
  const [ActiveTextConten, setActiveTextConten] = useState(false)
  const [WriteDate, setWriteDate] = useState<any>()
  const [CodAulaSelected, setCodAulaSelected] = useState('')
  const [Description, setDescription] = useState('')
  const [ContenInitial, setContenInitial] = useState(false)

  const current = new Date()
  const teacherCodeVal: any = get(USER_SESSION)
  const DUENO: any = get(SET_DATA_DOCENTE)
  const User = DUENO?.userName

  const COLUMNS_RECOVERY = [
    { label: 'Seleccionar', field: 'select', sort: 'asc' },
    { label: 'Clase', field: 'ClaCodigo', sort: 'asc' },
    { label: 'Curso', field: 'CurNombre', sort: 'asc' },
    { label: 'Semestre', field: 'SemCodigo', sort: 'asc' },
    { label: 'Sede', field: 'SedCodigo', sort: 'asc' },
    { label: 'Carrera', field: 'CarNombre', sort: 'asc' },
  ]

  const COLUMNS_SESION = ['Acción', 'Hora Inicio', 'Hora Fin', 'Total Horas']

  const GetApiTeachersCourses = async () => {
    try {
      const TeacherCoursesData: any =
        await apiRecuperarAdelantar.listTeacherCourses(teacherCodeVal)
      return TeacherCoursesData
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
      setHolyday(DateHolidayData)
    } catch (error: any) {
      catchingErrorFront(error.message)
      setloading(false)
    }
  }

  const GetApiClassDate = async (getDate: string) => {
    try {
      const dataFormated = []
      const ClassDateData: any = await apiRecuperarAdelantar.listClassDate(
        TeacherCoursesSelected.ClaCodigo,
        teacherCodeVal,
        getDate
      )
      for (const element of ClassDateData) {
        dataFormated.push(element.FechaDia)
      }
      setClassDate(dataFormated)
      return ClassDateData
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
      setSelectedHour(dataFormated[0])
      return dataFormated[0]
    } catch (error: any) {
      catchingErrorFront(error.message)
      setloading(false)
    }
  }

  const PostApiScheduleSessions = async (dateValue: string, Hour: any) => {
    try {
      const dataSchedule = {
        action: 'get_horario',
        classCode: TeacherCoursesSelected.ClaCodigo,
        semesterCode: TeacherCoursesSelected.SemCodigo,
        date: dateValue,
        teacherCode: teacherCodeVal,
      }
      const ScheduleSessionsData: any =
        await apiRecuperarAdelantar.ScheduleSessions(
          dataSchedule.action,
          dataSchedule.classCode,
          dataSchedule.semesterCode,
          dataSchedule.date,
          dataSchedule.teacherCode
        )
      viewTableData(ScheduleSessionsData)

      ObtenerHoraFin(ScheduleSessionsData[0], 0, Hour)
      setloading(false)
      return ScheduleSessionsData
    } catch (error: any) {
      catchingErrorFront(error.message)
      setloading(false)
    }
  }

  const GetApiClasEnabled = async (
    classroom: string,
    sedeCode: string,
    date: string,
    hours: string,
    quantity: string
  ) => {
    try {
      setloading(true)
      const dataFormated = []
      date = date.replace('-', '').replace('-', '')
      let fordate: any = MissedClassDate.split('-')
      fordate = fordate[0].split('/')
      fordate = fordate[2].trim() + fordate[1].trim() + fordate[0].trim()

      const ClasEnabledData: any = await apiRecuperarAdelantar.ClasEnabled(
        date,
        date
      )
      const row = ClasEnabledData.filter((x: any) => x.campusCode === sedeCode)
      for (const element of row) {
        dataFormated.push(element.classroomCode)
      }

      setClasEnabled(dataFormated)
      setDLaula(row)
      setloading(false)
    } catch (error: any) {
      catchingErrorFront(error.message)
      setloading(false)
    }
  }

  const PostTeacherAttendanceRecoverys = async (
    classCode: any,
    teacherCode: any,
    classDate: any,
    dateRequired: any,
    codeHour: any,
    nroHours: any,
    classRoomCode: any,
    user: any,
    host: any,
    hourIdProgInitial: any,
    hourIdProgFinal: any,
    type: any,
    path: any,
    bookingId: any,
    ocurrenceId: any
  ) => {
    try {
      const dataSchedule = {
        classCode,
        teacherCode,
        classDate,
        dateRequired,
        codeHour,
        nroHours,
        classRoomCode,
        user,
        host,
        hourIdProgInitial,
        hourIdProgFinal,
        type,
        path,
        bookingId,
        ocurrenceId,
      }
      const ScheduleSessionsData: any =
        await apiRecuperarAdelantar.AttendanceRecoverys(
          dataSchedule.classCode,
          dataSchedule.teacherCode,
          dataSchedule.classDate,
          dataSchedule.dateRequired,
          dataSchedule.codeHour,
          dataSchedule.nroHours,
          dataSchedule.classRoomCode,
          dataSchedule.user,
          dataSchedule.host,
          dataSchedule.hourIdProgInitial,
          dataSchedule.hourIdProgFinal,
          dataSchedule.type,
          dataSchedule.path,
          dataSchedule.bookingId,
          dataSchedule.ocurrenceId
        )

      ValidateSave(
        FormatedMessage(ScheduleSessionsData.data.message),
        ScheduleSessionsData.data.state
      )
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

  const PostBookingClassrooms = async (
    classroomsjson: any,
    description: any,
    capacity: any,
    startDate: any,
    campusIntCode: any,
    startTime: any,
    endTime: any,
    endDate: any,
    codClass: any,
    codCourse: any
  ) => {
    try {
      const data = {
        userIntCode: teacherCodeVal,
        isCurricular: 0,
        classrooms: classroomsjson,
        description,
        eventName: `Codigo clase: ${codClass} - Cod. Curso : ${codCourse}`,
        sectionIntCode: '',
        capacity,
        responsiblePersons: [
          {
            responsibleIntCode: teacherCodeVal,
          },
        ],
        startDate,
        campusIntCode,
        recurringType: 1,
        isRecurring: 0,
        startTime,
        endTime,
        endDate,
        activityIntCode: '',
        daysOfWeek: [0],
        dayOfMonth: 0,
        separationCount: 0,
        groupIntCode: 1,
        attendanceList: [],
        extraPermissions: {
          responsible: true,
          assistants: true,
          eventName: true,
          activity: true,
          groupId: false,
        },
        responsibleForTheReservation: true,
        applicant: true,
        attendees: true,
      }
      const status = await apiRecuperarAdelantar.BookingClassrooms(data)
      return status
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
      const ClasEnabledData: any =
        await apiRecuperarAdelantar.ClasEnabledBookingCodeRooms(
          date,
          date,
          bookingCode
        )

      return ClasEnabledData
    } catch (error: any) {
      catchingErrorFront(error.message)
      setloading(false)
    }
  }

  // apis fin

  const formatDate = (fecha: string, key: number) => {
    let dateConvert: any

    switch (key) {
      case 1: {
        const dateSplit = fecha.split('T')
        const date = `${dateSplit[0]} ${dateSplit[1]}`
        dateConvert = moment(date).format('HH:mm')
        break
      }
      case 2: {
        const forDate = fecha.split('-')
        dateConvert = `${forDate[2]}/${forDate[1]}/${forDate[0]}`
        break
      }
      case 3: {
        const DateValue = new Date(fecha)
        dateConvert = moment(DateValue).format('DD/MM/YYYY')
        break
      }
      case 4: {
        if (fecha.indexOf('-') > -1) {
          fecha = fecha.slice(0, fecha.indexOf('-')).trim()
          let DateFormater: any = fecha.split('/')
          DateFormater =
            DateFormater[2] +
            '-' +
            DateFormater[1] +
            '-' +
            DateFormater[0] +
            'T00:00:00'
          dateConvert = new Date(DateFormater)
        }
        break
      }
      case 5: {
        let DateFormater: any = fecha.split('/')
        DateFormater =
          DateFormater[2] +
          '-' +
          DateFormater[1] +
          '-' +
          DateFormater[0] +
          'T00:00:00'
        dateConvert = new Date(DateFormater)
        break
      }
      case 6: {
        if (fecha.indexOf('-') > -1) {
          fecha = fecha.slice(0, fecha.indexOf('-')).trim()
          let DateFormater: any = fecha.split('/')

          const DayForm = parseInt(DateFormater[0]) - 1
          const resultDay = DayForm >= 10 ? DayForm : '0' + DayForm.toString()
          DateFormater =
            DateFormater[2] +
            '-' +
            DateFormater[1] +
            '-' +
            resultDay.toString() +
            'T00:00:00'
          dateConvert = new Date(DateFormater)
        }
        break
      }
      default:
        break
    }

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

  const formatedDataRecovery = (obj: any, setstate: any) => {
    const rows = obj.map((item: any, _index: number) => ({
      ...item,
      select: (
        <label
          className={styles.LinkStyle}
          onClick={(e) => CheckRB(e, item)}
        >
          Seleccionar
        </label>
      ),
    }))
    setstate(rows)
  }

  const SendDate = (date: any) => {
    const response = moment(date).format('DD/MM/YYYY')
    const formated = response.split('/')
    const result =
      formated[2] + '-' + formated[1] + '-' + formated[0] + 'T' + '00:00:00'
    return result
  }

  const convertTimeto24 = (time: any) => {
    const response = time.split(':')
    if (time !== '') {
      if (parseInt(response[0]) >= 12) return `${time} PM`
      else return `${time} AM`
    }
    return ''
  }

  // formated

  const CheckRB = (e: any, item: any) => {
    e.preventDefault()
    setDateValidate(false)
    setRBactiveViewPanel(false)
    ValidateActiveBtnChcked(0)
    GetApiHolyday(item.SedCodigo)
    setTeacherCoursesSelected(item)
    setDesabledBTN({ btnSave: false })
    setViewRB(true)
  }

  const RB_ACTIVE_RETRIEVE = async () => {
    await ValidateRB_SELECTEDACTIVE(1)
  }

  const RB_ACTIVE_ADVANCE = async () => {
    await ValidateRB_SELECTEDACTIVE(2)
  }

  const BTN_Regresar = () => {
    redirectRouter('/recuperar-adelantar', setloading)
  }

  const OnchageValidateLst = async (e: any) => {
    setloading(true)
    if (e.target.value !== '-- Seleccione --') {
      setDescription('')
      setAulaSelected('')
      setDateSelectedItem('')
      setCodAulaSelected('')
      setWriteDate('')
      setInputDateEmty(false)
      setClasEnabled(undefined)
      setContenPanel('')
      setDateValidate(false)
      const response = await GetLstHours()
      setMissedClassDate(e.target.value)
      PostApiScheduleSessions(e.target.value, response)
      setBtnSelected(1)
    } else {
      cleanComponents()

      if (btnActive === 'R') {
        await GetApiClassDate('get_fechasperdidas')
      }

      if (btnActive === 'A') {
        await GetApiClassDate('get_fechasadelantadas')
      }

      ValidatePanel()
      setClasEnabled(undefined)
      setContenPanel('')
      await GetLstHours()

      setloading(false)
    }
  }

  const OnchangeValidateHoraPropuesta = (e: any) => {
    let ValeText = (e.target as HTMLInputElement).value
    ValeText = ValeText.replace(':', '.').replace('PM', '').replace('AM', '')
    if (ClassDate.length > 0) {
      ObtenerHoraFin(TableSecondary, 0, ValeText)
      LlenarDDlAula(DateSelectedItem, 1, ValeText)
    }
    setViewTableData(true)
    setSelectedHour(ValeText)
  }

  const btnSave = async () => {
    let aula: string = ' '
    let codAula: string = ' '
    let valor = 0
    setloading(true)

    if (TeacherCoursesSelected.ClaMetodoEducativo !== '') {
      if (
        TeacherCoursesSelected.ClaMetodoEducativo === 'RM' ||
        TeacherCoursesSelected.ClaMetodoEducativo === 'VT'
      ) {
        aula = ''
        codAula = '0'
      } else {
        const filter: any = DLaula.find(
          (x: any) => x.classroomCode === CodAulaSelected
        )
        aula = filter?.classroomCode
        codAula = filter?.classroomId
      }
    } else {
      const filter: any = DLaula.find(
        (x: any) => x.classroomCode === CodAulaSelected
      )
      aula = filter?.classroomCode
      codAula = filter?.classroomId
    }

    if (ViewPanel === true) {
      if (AulaSelected === '') {
        ViewMessage(9)
        valor = 1
        setloading(false)
      }
    }

    if (TeacherCourses.length === 0) {
      ViewMessage(1)
      valor = 1
      setloading(false)
    }

    if (TableSecondary.HorFin === '') {
      ViewMessage(2)
      valor = 1
      setloading(false)
    }

    const clase = TeacherCoursesSelected.ClaCodigo
    const curCode = TeacherCoursesSelected.CurCodigo
    const fechaclase: Date = formatDate(MissedClassDate, 4)
    const fecharequerida: Date = formatDate(DateSelectedItem, 5)
    const value: any = LaboratoriesList.find(
      (x: any) => x.HorInicioDesc === SelectedHour
    )
    const hora = value.HorCodigo
    const nrohoras = TableSecondary.NroHoras
    const nHoraIdProgInicial = TableSecondary.HoraIdInicio
    const nHoraIdProgFin = TableSecondary.HoraIdFin
    const DUENO: any = get(SET_DATA_DOCENTE)
    const UserName = DUENO?.userName
    const host = ip
    const tipo = btnActive
    const path = ''

    if (btnActive === 'R') {
      if (fecharequerida < fechaclase) {
        ViewMessage(3)
        valor = 1
        setloading(false)
      }
    }

    const fecha = new Date()
    if (btnActive === 'A') {
      if (fecha > fecharequerida || fecharequerida >= fechaclase) {
        ViewMessage(4)
        valor = 1
        setloading(false)
      }
    }

    if (AcepterCond === false) {
      ViewMessage(5)
      valor = 1
      setloading(false)
    }

    if (
      DateSelectedItem === '' ||
      DateSelectedItem === 'undefined/undefined/'
    ) {
      ViewMessage(8)
      valor = 1
      setloading(false)
    }

    if (viewCalculatedTime === '') {
      ViewMessage(10)
      valor = 1
      setloading(false)
    }

    if (valor === 0) {
      if (ViewPanel === true) {
        if (AulaSelected !== '') {
          const filter: any = DLaula.find(
            (x: any) => x.classroomCode === CodAulaSelected
          )
          let date: any = SendDate(fecharequerida)
          date = date.split('T')
          date = date[0].replace('-', '').replace('-', '')
          const startTime = `${SelectedHour.replace('.', ':').trim()}:00`
          const endTime = `${viewCalculatedTime}:00`

          const classroomsjson: any = []
          filter.usageTypes.map((x: any) => {
            const row = {
              classroomIntCode: filter.classroomIntCode,
              resourceTypeIntCode: x.usageTypeIntCode,
            }
            classroomsjson.push(row)
          })

          const response = await PostBookingClassrooms(
            classroomsjson,
            Description,
            filter.capacity,
            date,
            filter.campusIntCode,
            startTime,
            endTime,
            date,
            clase,
            curCode
          )
          await ValidateBookingClassrooms(
            response,
            date,
            clase,
            teacherCodeVal,
            SendDate(fechaclase),
            SendDate(fecharequerida),
            hora,
            nrohoras,
            aula,
            UserName,
            host,
            nHoraIdProgInicial,
            nHoraIdProgFin,
            tipo,
            path
          )
          setloading(false)
        }
      } else {
        await PostTeacherAttendanceRecoverys(
          clase,
          teacherCodeVal,
          SendDate(fechaclase),
          SendDate(fecharequerida),
          hora,
          nrohoras,
          aula,
          UserName,
          host,
          nHoraIdProgInicial,
          nHoraIdProgFin,
          tipo,
          path,
          '',
          ''
        )
        setloading(false)
      }
    }
  }

  const cancelOperation = () => {
    redirectRouter('/recuperar-adelantar', setloading)
  }

  const OnchangeAulaEdit = (e: any) => {
    const value = e.target.value
    const response = onValidate(value)
    setContenPanel(response)
    setActiveTextConten(true)
    setAulaSelected(value)
  }

  const ActiveCheckedAcept = () => {
    setBtnCheckedAAcep(!BtnCheckedAcep)
    setAcepterCond(!AcepterCond)
  }

  const OnchangeDescription = (e: any) => {
    const value = e.target.value
    setDescription(value)
  }

  // metodos

  const ValidatePanel = () => {
    if (TeacherCoursesSelected.ClaMetodoEducativo !== '') {
      // RM-> Remoto or VT-> Virtual
      if (
        TeacherCoursesSelected.ClaMetodoEducativo === 'RM' ||
        TeacherCoursesSelected.ClaMetodoEducativo === 'VT'
      ) {
        setViewPanel(false)
      } else {
        setViewPanel(true)
      }
    } else {
      setViewPanel(true)
    }
  }

  const ValidaDateOnchangeText = (event: React.FormEvent<HTMLInputElement>) => {
    let result = false
    let DateSelected = ''
    setContenInitial(true)
    setInputDateEmty(result)
    if (ClassDate.length > 0) {
      if (Holyday.length > 0) {
        const DateToRecover = (event.target as HTMLInputElement).value
        setWriteDate(DateToRecover)
        DateSelected = formatDate(DateToRecover, 2)
        const response = Holyday.find(
          (x: any) => formatDate(x.date, 3) === DateSelected
        )
        if (response !== undefined) result = true
      }

      if (result) {
        setDesabledBTN({
          btnSave: true,
        })
        ViewMessage(0)
      } else {
        setDesabledBTN({
          btnSave: false,
        })
        setDateSelectedItem(DateSelected)
        setClasEnabled(undefined)
        setContenPanel('')
        LlenarDDlAula(DateSelected)
      }
    } else {
      setViewError(true)
    }

    if ((event.target as HTMLInputElement).value === '') {
      setViewError(false)
    }
    setViewTableData(true)
  }

  const ValidateSave = async (message: string, status: boolean) => {
    if (status === true) {
      EnviaEmail()

      ViewMessage(7, message)
      redirectRouter('/recuperar-adelantar', setloading)
      setloading(false)
    } else {
      setloading(false)
      ViewMessage(6, message)
    }
  }

  const ValidateRB_SELECTEDACTIVE = async (key: number) => {
    setloading(true)
    setDateValidate(false)
    setBtnCheckedAAcep(false)
    cleanComponents()
    setAcepterCond(false)
    setRBactiveViewPanel(true)
    ValidatePanel()
    setViewTableData(false)
    setClasEnabled(undefined)
    setContenPanel('')
    if (key === 1) {
      AlterText(key)
      ValidateActiveBtnChcked(key)
      setbtnActive('R')
      await GetApiClassDate('get_fechasperdidas')
    } else {
      AlterText(key)
      ValidateActiveBtnChcked(key)
      setbtnActive('A')
      await GetApiClassDate('get_fechasadelantadas')
    }

    await GetLstHours()
    setloading(false)
  }

  const viewTableData = (ScheduleSessionsData: any) => {
    setTableSecondary({
      HoraIdFin: ScheduleSessionsData[0].HoraIdFin,
      AulCodigo: ScheduleSessionsData[0].AulCodigo,
      CarCodigo: ScheduleSessionsData[0].CarCodigo,
      ClaCodigo: ScheduleSessionsData[0].ClaCodigo,
      ClaseTipo: ScheduleSessionsData[0].ClaseTipo,
      CurCodigo: ScheduleSessionsData[0].CurCodigo,
      Fecha: ScheduleSessionsData[0].Fecha,
      HoraIdInicio: ScheduleSessionsData[0].HoraIdInicio,
      HorCodigoFin: ScheduleSessionsData[0].HorCodigoFin,
      HorCodigoInicio: ScheduleSessionsData[0].HorCodigoInicio,
      HorDia: ScheduleSessionsData[0].HorDia,
      HorFin: formatDate(ScheduleSessionsData[0].HorFin, 1),
      HorInicio: formatDate(ScheduleSessionsData[0].HorInicio, 1),
      HorMinutosFin: ScheduleSessionsData[0].HorMinutosFin,
      HorMinutosInicio: ScheduleSessionsData[0].HorMinutosInicio,
      HorNroSesion: ScheduleSessionsData[0].HorNroSesion,
      NroHoras: ScheduleSessionsData[0].NroHoras,
      SemestreId: ScheduleSessionsData[0].SemestreId,
      TipoDocente: ScheduleSessionsData[0].TipoDocente,
      TraCodigo: ScheduleSessionsData[0].TraCodigo,
    })
    setViewTableData(true)
  }

  const onValidate = (e: any) => {
    let caracteristicas: string = ''
    const codigoAula = e
    setCodAulaSelected(codigoAula)
    if (DLaula !== undefined) {
      const filter: any = DLaula.find(
        (x: any) => x.classroomCode === codigoAula
      )
      const description = `     * Capacidad : ${filter?.capacity} Personas
      * Ubicación : ${filter?.classroomCode[1]} Piso, Pab "${filter?.classroomCode[0]}"
      * Campus    : ${filter?.campusName}
      * Lugar          : ${filter?.classroomName}`

      if (filter !== undefined) {
        caracteristicas = description
      }
    }
    return caracteristicas
  }

  const ValidateBookingClassrooms = async (
    response: any,
    date: any,
    clase: any,
    teacherCodeVal: any,
    fechaclase: any,
    fecharequerida: any,
    hora: any,
    nrohoras: any,
    codAula: any,
    UserName: any,
    host: any,
    nHoraIdProgInicial: any,
    nHoraIdProgFin: any,
    tipo: any,
    path: any
  ) => {
    if (response.message !== undefined) {
      if (response.data === null || response.data === undefined) {
        ViewMessage(6, `${response.message}`)
      } else {
        ViewMessage(
          6,
          `${response.message}, ocurrenceId: ${response.data[0][0].ocurrenceId}`
        )
      }
    } else {
      const result = await GetApiClasEnabledBookingCodeRooms(
        date,
        response.data[0].bookingCode
      )
      await PostTeacherAttendanceRecoverys(
        clase,
        teacherCodeVal,
        fechaclase,
        fecharequerida,
        hora,
        nrohoras,
        codAula,
        UserName,
        host,
        nHoraIdProgInicial,
        nHoraIdProgFin,
        tipo,
        path,
        response.data[0].bookingCode,
        result[0].ocurrenceId
      )
    }
  }

  // validate

  const cleanComponents = () => {
    setContenInitial(false)
    setDescription('')
    setCodAulaSelected('')
    setWriteDate('')
    setClassDate([])
    setMissedClassDate('')
    setInputDateEmty(false)
    setviewCalculatedTime('')
    setDateSelectedItem('')
    setTableSecondary({
      AulCodigo: '',
      CarCodigo: '',
      ClaCodigo: '',
      ClaseTipo: '',
      CurCodigo: '',
      Fecha: '',
      HorCodigoFin: 0,
      HorCodigoInicio: 0,
      HorDia: 0,
      HorFin: '',
      HorInicio: '',
      HorMinutosFin: 0,
      HorMinutosInicio: 0,
      HorNroSesion: 0,
      HoraIdFin: 0,
      HoraIdInicio: 0,
      NroHoras: 0,
      SemestreId: 0,
      TipoDocente: '',
      TraCodigo: '',
    })
    setViewPanel(false)
    setViewError(false)
  }

  const AlterText = (ActiveName: number) => {
    switch (ActiveName) {
      case 1:
        setAlterTextView({
          FechaClase: 'Fecha de clase perdida:',
          FechaPropuesta: 'Fecha para recuperar:',
          HoraPropuesta: 'Hora inicio para recuperar:',
          HoraPropuestaFin: 'Hora fin para recuperar:',
          Horario: 'Sesión a recuperar:',
        })
        break
      case 2:
        setAlterTextView({
          FechaClase: 'Fecha de clase a adelantar:',
          FechaPropuesta: 'Fecha para adelantar:',
          HoraPropuesta: 'Hora inicio para adelantar:',
          HoraPropuestaFin: 'Hora fin para adelantar:',
          Horario: 'Sesión a adelantar:',
        })
        break
      default:
        break
    }
  }

  const LlenarDDlAula = (DateToRecover: any, key?: any, textHour?: any) => {
    if (MissedClassDate !== '-- Seleccione --' && DateToRecover !== '') {
      if (TableSecondary.HorFin !== '') {
        const hour = key === 1 ? textHour : SelectedHour
        const HorCodigo: any = LaboratoriesList.find(
          (x: any) => x.HorInicioDesc === hour
        )
        DateToRecover = DateToRecover.split('/')
        DateToRecover =
          DateToRecover[2] + '-' + DateToRecover[1] + '-' + DateToRecover[0]
        GetApiClasEnabled(
          'null',
          TeacherCoursesSelected.SedCodigo,
          DateToRecover,
          HorCodigo?.HorCodigo,
          TableSecondary.NroHoras.toString()
        )
      }
    }
  }

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
          text: `Debe seleccionar una clase para continuar.`,
          icon: 'warning',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK',
        })
      case 2:
        return Swal.fire({
          title: 'Portal de Docentes',
          text: `Debe seleccionar un horario de la clase.`,
          icon: 'warning',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK',
        })
      case 3:
        return Swal.fire({
          title: 'Portal de Docentes',
          text: `La fecha seleccionada debe ser mayor a la fecha de la clase a recuperar.`,
          icon: 'warning',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK',
        })
      case 4:
        return Swal.fire({
          title: 'Portal de Docentes',
          text: `La fecha seleccionada debe ser mayor a la fecha actual y menor que la fecha de clase a adelantar.`,
          icon: 'warning',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK',
        })
      case 5:
        return Swal.fire({
          title: 'Portal de Docentes',
          text: `Debe ACEPTAR los TÉRMINOS Y CONDICIONES para continuar!.`,
          icon: 'warning',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK',
        })
      case 6:
        return Swal.fire({
          title: 'Portal de Docentes',
          text: `${contenMessage}`,
          icon: 'error',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK',
        })
      case 7:
        return Swal.fire({
          title: 'Portal de Docentes',
          text: `${contenMessage}`,
          icon: 'success',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK',
        })
      case 8:
        return Swal.fire({
          title: 'Portal de Docentes',
          text: `Ingrese Fecha`,
          icon: 'warning',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK',
        })
      case 9:
        return Swal.fire({
          title: 'Portal de Docentes',
          text: `Debe seleccionar un aula para continuar.`,
          icon: 'warning',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK',
        })
      case 10:
        return Swal.fire({
          title: 'Portal de Docentes',
          text: `Debe seleccionar una hora`,
          icon: 'warning',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK',
        })
      default:
        break
    }
  }

  const ObtenerHoraFin = async (
    Data: any,
    index: number,
    HourSelec?: string
  ) => {
    if (Data.HorFin !== '') {
      let value: any
      if (index !== 0) {
        value = await LaboratoriesList.find(
          (x: any) => x.HorInicioDesc === SelectedHour
        )
      } else {
        value = await LaboratoriesList.find(
          (x: any) => x.HorInicioDesc === HourSelec
        )
      }

      const response: any = parseInt(value.HorCodigo) + (Data.NroHoras - 1)

      if (Laboratories.length > 0) {
        const HorCodigo: any = await LaboratoriesList.find(
          (x: any) => x.HorCodigo === response
        )

        if (HorCodigo !== undefined) {
          const valueDate: any = new Date(HorCodigo.HorFinal)
          const result = moment(valueDate).format('HH:mm')
          setviewCalculatedTime(result)
          return result
        } else {
          setviewCalculatedTime('')
        }
      }
    }
  }

  const SelectedTableSecondary = () => {
    ObtenerHoraFin(TableSecondary, 1)
    LlenarDDlAula(DateSelectedItem)
  }

  const ValidateActiveBtnChcked = (index: number) => {
    if (index === 0) {
      setBtnCheckedR(false)
      setBtnCheckedA(false)
    }

    if (index === 1) {
      setBtnCheckedR(true)
      setBtnCheckedA(false)
    }

    if (index === 2) {
      setBtnCheckedA(true)
      setBtnCheckedR(false)
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

  const GetLstHours = async () => {
    setLaboratories([])
    return await GetApiLaboratories()
  }

  const EnviaEmail = async () => {
    const drDocente = await GetTeacherUser(User)

    if (drDocente !== undefined) {
      const nombre = `${drDocente.lastName} ${drDocente.middleLastName}, ${drDocente.name}`
      const curso = TeacherCoursesSelected.coruseId
      const clase = TeacherCoursesSelected.ClaCodigo
      const carrera = TeacherCoursesSelected.CarCodigo
      const sede = TeacherCoursesSelected.SedCodigo

      const fechaclase = new Date(TeacherCoursesSelected.dateLost)
      const fecharequerida = new Date(DateSelectedItem)
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
      if (TeacherCoursesSelected.ClaTipo !== '') {
        if (
          TeacherCoursesSelected.ClaTipo === 'RM' ||
          TeacherCoursesSelected.ClaMetodoEducativo === 'VT'
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
          <p>Su clase ${curso} - ${clase}  ha sido SOLICITADA</p>
          <br/>
          <p>Fecha de ${tipoDescripcion}: ${DateSelectedItem}</p>
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
          <p>Fecha de ${tipoDescripcion}: ${DateSelectedItem}</p>
          <br/>
          <p>Hora de ${tipoDescripcion}: ${horaRecuperacion}</p>
          <br/>
          <p>${msg2End}</p>
          </div>`

      const ClassTeachers = await GetClassTeachers(clase)
      const codigoDocprin = ClassTeachers.TeacherCode
      const teacher = await GetTeacher(teacherCodeVal)
      const email = teacher.email

      const lstEmailDocente = []
      lstEmailDocente.push(email)
      if (codigoDocprin !== TeacherCoursesSelected.CodSol) {
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
      const dtUsucfg: any = await getUsuariosByProceso(carrera, sede)
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
      const emailList = [process.env.CORREO_USER_DES]
      input.ListDestinatarios =
        input.ListDestinatarios === '' ? input.ListDestinatarios : emailList
      input.ListResponderA =
        input.ListResponderA === '' ? input.ListResponderA : emailList
      input.ListCC = input.ListCC === '' ? input.ListCC : emailList
      input.ListBCC = input.ListBCC === '' ? input.ListBCC : emailList
    }

    return await SenEmail(input)
  }

  const DateTypeActive = () => {
    const fechaclase: Date = formatDate(MissedClassDate, 6)
    const DateMaxConvert = moment(new Date(fechaclase)).format('YYYY-MM-DD')
    return DateMaxConvert
  }

  // funciones

  useEffect(() => {
    const Load = async () => {
      setloading(true)

      try {
        const ip = await getIpClient()
        setip(ip)
        const TeacherCoursesData = await GetApiTeachersCourses()
        formatedDataRecovery(TeacherCoursesData, setTeacherCourses)
      } catch (error: any) {
        catchingErrorFront(error.message)
        setloading(false)
      }

      setloading(false)
    }

    Load()
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
        <hr />

        <div className={styles.botones}>
          <Button
            type="button"
            classname="mb-3"
            variant="secondary"
            onclick={BTN_Regresar}
          >
            Regresar
          </Button>
        </div>

        <hr />

        <div className={styles.alertaContent}>
          <Alerta
            classname="w-100"
            variant="info"
          >
            <b>Nota: </b>
            <ul className="mb-0">
              <li>
                Para reprogramar una sesión de clase, la solicitud debe
                ingresarse como mínimo <strong>24 horas</strong> antes de la
                fecha propuesta para adelanto o recuperación.
              </li>
              <li>
                Las solicitudes de adelanto/recuperación se enviarán a los
                coordinadores de carrera, quienes deberán realizar la{' '}
                <strong>aprobación</strong> de las solicitudes antes del dictado
                de la sesión.
              </li>
              <li>
                Para mayor información puede consultar el procedimiento vigente
                de <strong>Desarrollo de sesiones de clase</strong> ubicado en
                la carpeta de Mis Procesos UPN en la siguiente ruta:
                <b>
                  <Anchor
                    href="https://educorpperu.sharepoint.com/sites/MisProcessesPRD/docsvigentes/?id=/sites/MisProcessesPRD/docsvigentes/COR-P-REC-VAC-04_7.pdf&parent=/sites/MisProcessesPRD/docsvigentes"
                    classname="text-info text-decoration-none"
                    targetBlank
                  >
                    Ver documento
                  </Anchor>
                </b>
              </li>
            </ul>
          </Alerta>
        </div>

        <div className={styles.tabla}>
          <TableDinamic
            columns={COLUMNS_RECOVERY}
            listData={TeacherCourses}
          />
        </div>

        {ViewRB === true ? (
          <div className={styles.blockRadioButton}>
            <RadioBtn
              type={'radio'}
              id={'recuperar'}
              name={'btnradio'}
              value={'Recuperar'}
              disabled={false}
              onclick={RB_ACTIVE_RETRIEVE}
              checked={BtnCheckedR}
              readOnly
            />
            <RadioBtn
              type={'radio'}
              id={'adelantar'}
              name={'btnradio'}
              value={'Adelantar'}
              disabled={false}
              onclick={RB_ACTIVE_ADVANCE}
              checked={BtnCheckedA}
              readOnly
            />
          </div>
        ) : null}

        {RBactiveViewPanel === true ? (
          <Form id={''}>
            <div className={styles.blocFormValidateRow}>
              <ViewList
                texLabel={AlterTextView.FechaClase}
                optionSelect={ClassDate}
                onChange={OnchageValidateLst}
                consult={2}
              />
              {ClassDate.length > 0 ? (
                <div>
                  <ViewInput
                    texLabel={AlterTextView.FechaPropuesta}
                    typeInput={'date'}
                    nameInput={''}
                    idInput={''}
                    Onchange={ValidaDateOnchangeText}
                    min={DateValidate === true ? DateMin() : ''}
                    onClick={() => setDateValidate(true)}
                    max={
                      btnActive === 'A'
                        ? DateTypeActive()
                        : DateValidate === true
                        ? DateMax()
                        : ''
                    }
                    value={WriteDate}
                  />

                  {InputDateEmty === true ? (
                    <div className={styles.ViewError}>
                      <span>*</span>
                    </div>
                  ) : null}
                </div>
              ) : (
                <div>
                  <div className={styles.viewInputConten}>
                    <Label>{AlterTextView.FechaPropuesta}</Label>
                    <Input
                      type={'text'}
                      name={''}
                      id={''}
                      onchange={ValidaDateOnchangeText}
                      placeholder=" "
                    />
                  </div>
                  {ViewError === true ? (
                    <div className={styles.ViewError}>
                      <span>Formato de Fecha incorrecto...</span>
                    </div>
                  ) : null}
                </div>
              )}
            </div>
            <br />
            <div className={styles.blocFormValidateRowTable}>
              {ViewTableData === false ? (
                <ViewTable
                  textLabel={AlterTextView.Horario}
                  theadColums={[]}
                  tbodyRows={[]}
                />
              ) : ViewTableData && TableSecondary.HorFin === '' ? (
                <ViewTable
                  textLabel={AlterTextView.Horario}
                  theadColums={COLUMNS_SESION}
                  tbodyRows={[]}
                />
              ) : (
                <ViewTable
                  textLabel={AlterTextView.Horario}
                  theadColums={COLUMNS_SESION}
                  tbodyRows={[
                    convertTimeto24(TableSecondary.HorInicio),
                    convertTimeto24(TableSecondary.HorFin),
                    TableSecondary.NroHoras,
                  ]}
                  active={0}
                  Onclick={SelectedTableSecondary}
                />
              )}
            </div>
            <br />

            {ContenInitial === true ? (
              <>
                <div className={styles.blocFormValidateRow}>
                  <ViewList
                    texLabel={AlterTextView.HoraPropuesta}
                    optionSelect={Laboratories}
                    onChange={OnchangeValidateHoraPropuesta}
                    index={0}
                  />
                  {BtnSelected !== 0 ? (
                    <ViewInput
                      texLabel={AlterTextView.HoraPropuestaFin}
                      typeInput={'text'}
                      nameInput={''}
                      idInput={''}
                      value={convertTimeto24(viewCalculatedTime)}
                      placeholder=""
                      disabled={true}
                    />
                  ) : (
                    <Input
                      // style={{ width: '50%' }}
                      classname={`md-3 ${styles.InputDefault}`}
                      type="text"
                      disabled={true}
                      name={''}
                      id={''}
                      placeholder=" "
                    />
                  )}
                </div>
                <br />

                {ViewPanel === true ? (
                  <div>
                    <div className={styles.blocFormValidateRow}>
                      <ViewList
                        texLabel={'Aula:'}
                        optionSelect={ClasEnabled}
                        index={ClasEnabled?.length > 1 ? 1 : 2}
                        onChange={OnchangeAulaEdit}
                        consult={2}
                      />

                      {ActiveTextConten === true ? (
                        <ViewTexarea
                          texLabel={'Caracteristicas del ambiente:'}
                          disabled={true}
                          placeholder=" "
                          defaultValue={ContenPanel}
                          style={{ height: '3em', paddingTop: '7px' }}
                        />
                      ) : (
                        <ViewTexarea
                          texLabel={'Caracteristicas del ambiente:'}
                          placeholder=" "
                          disabled={true}
                          onchange={() => setDesabledBTN({ btnSave: false })}
                          style={{ height: '3em', paddingTop: '7px' }}
                        />
                      )}
                    </div>
                    <div className={styles.TexareaConten}>
                      <Label>Descripción</Label>
                      <TextArea
                        type={'textarea'}
                        placeholder={''}
                        controlId={''}
                        disabled={false}
                        classname={''}
                        onChange={OnchangeDescription}
                        value={Description}
                        style={{ paddingTop: '7px' }}
                      />
                    </div>
                    <br />
                  </div>
                ) : null}
              </>
            ) : null}

            <div>
              <b>
                <RadioBtn
                  type={'checkbox'}
                  id={'default'}
                  name={'check'}
                  value={
                    'Acepto los términos y condiciones correspondientes al proceso CONTROL DE RECUPERACIÓN Y ADELANTO DE CLASES.'
                  }
                  disabled={false}
                  onclick={ActiveCheckedAcept}
                  checked={BtnCheckedAcep}
                  readOnly
                />
              </b>
            </div>
            <div className={styles.botonesAlign}>
              <div>
                <Button
                  type="button"
                  variant="primary"
                  onclick={btnSave}
                  disabled={DesabledBTN.btnSave}
                >
                  Guardar
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
          </Form>
        ) : null}
      </div>
    </div>
  )
}

Resumen.title = 'Recuperar/Adelantar clases'
export default Resumen
