/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import { get } from 'local-storage'
import { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import styles from '../../components/templates/disponibilidadHorario/DisponibilidadHorario.module.scss'
import Button from '../../components/UI/atoms/button/Button'
import Label from '../../components/UI/atoms/label/Label'
import Loader from '../../components/UI/atoms/loader/Loader'
import Select from '../../components/UI/atoms/select/Select'
import Tbody from '../../components/UI/molecules/table/tbody/Tbody'
import Thead from '../../components/UI/molecules/table/thead/Thead'
import Tabla from '../../components/UI/organisms/table/Tabla'
import { USER_SESSION } from '../../consts/storageConst'
import { catchingErrorFront } from '../../helpers/helpers'
import { apiDisponibilidadHorario } from '../api'

const Index = () => {
  const [HeadquartersBanners, setHeadquartersBanners] = useState<any>([])
  const [SemesterUnitBusinessCode, setSemesterUnitBusinessCode] = useState<any>(
    []
  )
  const [Loading, setloading] = useState(false)

  const [SelectItemMondayA, setSelectItemMondayA] = useState(true)
  const [SelectItemMondayHourB, setSelectItemMondayHourB] = useState(true)
  const [SelectItemMondayHourC, setSelectItemMondayHourC] = useState(true)
  const [SelectItemMondayHourD, setSelectItemMondayHourD] = useState(true)
  const [SelectItemMondayHourE, setSelectItemMondayHourE] = useState(true)
  const [SelectItemMondayHourF, setSelectItemMondayHourF] = useState(true)
  const [SelectItemMondayHourG, setSelectItemMondayHourG] = useState(true)
  const [SelectItemMondayHourH, setSelectItemMondayHourH] = useState(true)
  const [SelectItemMondayHourI, setSelectItemMondayHourI] = useState(true)

  const [SelectItemTuesdayA, setSelectItemTuesdayA] = useState(true)
  const [SelectItemTuesdayHourB, setSelectItemTuesdayHourB] = useState(true)
  const [SelectItemTuesdayHourC, setSelectItemTuesdayHourC] = useState(true)
  const [SelectItemTuesdayHourD, setSelectItemTuesdayHourD] = useState(true)
  const [SelectItemTuesdayHourE, setSelectItemTuesdayHourE] = useState(true)
  const [SelectItemTuesdayHourF, setSelectItemTuesdayHourF] = useState(true)
  const [SelectItemTuesdayHourG, setSelectItemTuesdayHourG] = useState(true)
  const [SelectItemTuesdayHourH, setSelectItemTuesdayHourH] = useState(true)
  const [SelectItemTuesdayHourI, setSelectItemTuesdayHourI] = useState(true)

  const [SelectItemWednesdayA, setSelectItemWednesdayA] = useState(true)
  const [SelectItemWednesdayHourB, setSelectItemWednesdayHourB] = useState(true)
  const [SelectItemWednesdayHourC, setSelectItemWednesdayHourC] = useState(true)
  const [SelectItemWednesdayHourD, setSelectItemWednesdayHourD] = useState(true)
  const [SelectItemWednesdayHourE, setSelectItemWednesdayHourE] = useState(true)
  const [SelectItemWednesdayHourF, setSelectItemWednesdayHourF] = useState(true)
  const [SelectItemWednesdayHourG, setSelectItemWednesdayHourG] = useState(true)
  const [SelectItemWednesdayHourH, setSelectItemWednesdayHourH] = useState(true)
  const [SelectItemWednesdayHourI, setSelectItemWednesdayHourI] = useState(true)

  const [SelectItemThursdayA, setSelectItemThursdayA] = useState(true)
  const [SelectItemThursdayHourB, setSelectItemThursdayHourB] = useState(true)
  const [SelectItemThursdayHourC, setSelectItemThursdayHourC] = useState(true)
  const [SelectItemThursdayHourD, setSelectItemThursdayHourD] = useState(true)
  const [SelectItemThursdayHourE, setSelectItemThursdayHourE] = useState(true)
  const [SelectItemThursdayHourF, setSelectItemThursdayHourF] = useState(true)
  const [SelectItemThursdayHourG, setSelectItemThursdayHourG] = useState(true)
  const [SelectItemThursdayHourH, setSelectItemThursdayHourH] = useState(true)
  const [SelectItemThursdayHourI, setSelectItemThursdayHourI] = useState(true)

  const [SelectItemFridayA, setSelectItemFridayA] = useState(true)
  const [SelectItemFridayHourB, setSelectItemFridayHourB] = useState(true)
  const [SelectItemFridayHourC, setSelectItemFridayHourC] = useState(true)
  const [SelectItemFridayHourD, setSelectItemFridayHourD] = useState(true)
  const [SelectItemFridayHourE, setSelectItemFridayHourE] = useState(true)
  const [SelectItemFridayHourF, setSelectItemFridayHourF] = useState(true)
  const [SelectItemFridayHourG, setSelectItemFridayHourG] = useState(true)
  const [SelectItemFridayHourH, setSelectItemFridayHourH] = useState(true)
  const [SelectItemFridayHourI, setSelectItemFridayHourI] = useState(true)

  const [SelectItemSaturdayA, setSelectItemSaturdayA] = useState(true)
  const [SelectItemSaturdayHourB, setSelectItemSaturdayHourB] = useState(true)
  const [SelectItemSaturdayHourC, setSelectItemSaturdayHourC] = useState(true)
  const [SelectItemSaturdayHourD, setSelectItemSaturdayHourD] = useState(true)
  const [SelectItemSaturdayHourE, setSelectItemSaturdayHourE] = useState(true)
  const [SelectItemSaturdayHourF, setSelectItemSaturdayHourF] = useState(true)
  const [SelectItemSaturdayHourG, setSelectItemSaturdayHourG] = useState(true)
  const [SelectItemSaturdayHourH, setSelectItemSaturdayHourH] = useState(true)
  const [SelectItemSaturdayHourI, setSelectItemSaturdayHourI] = useState(true)

  const [SelectItemSundayA, setSelectItemSundayA] = useState(true)
  const [SelectItemSundayHourB, setSelectItemSundayHourB] = useState(true)
  const [SelectItemSundayHourC, setSelectItemSundayHourC] = useState(true)
  const [SelectItemSundayHourD, setSelectItemSundayHourD] = useState(true)
  const [SelectItemSundayHourE, setSelectItemSundayHourE] = useState(true)
  const [SelectItemSundayHourF, setSelectItemSundayHourF] = useState(true)
  const [SelectItemSundayHourG, setSelectItemSundayHourG] = useState(true)
  const [SelectItemSundayHourH, setSelectItemSundayHourH] = useState(true)
  const [SelectItemSundayHourI, setSelectItemSundayHourI] = useState(true)

  const [BtnDisabled, setBtnDisabled] = useState({
    BtnCarry: false,
    BtnCancel: true,
    CboSede: false,
    CboSemestre: false,
  })
  const [ViewTable, setViewTable] = useState(false)
  const [DataHour, setDataHour] = useState<any>([])
  const [SelectedSede, setSelectedSede] = useState('')
  const [SelectSemester, setSelectSemester] = useState('')
  const teacherCode = get(USER_SESSION)

  const ApiHeadquartersBanners = async () => {
    const result = await apiDisponibilidadHorario.listHeadquartersBanners('')
    return result
  }

  const ApiSemesterUnitBusinessCode = async (item: any) => {
    const result = await apiDisponibilidadHorario.listSemesterUnitBusinessCode(
      item
    )
    return result
  }

  const ApiTeacherAvailability = async (action: any, user: any, day: any) => {
    try {
      const result = await apiDisponibilidadHorario.listTeacherAvailability(
        action,
        user,
        day
      )
      return result
    } catch (error:any) {
      catchingErrorFront(error.message)
      setloading(false)
    }
    
  }

  const ApiCrudAvailability = async (
    action: any,
    SedCode: any,
    SemCode: any,
    UserTeacher: any,
    TimeBlock: any,
    StartTime: any,
    FinishTime: any,
    Monday: any,
    Tuesday: any,
    Wednesday: any,
    Thursday: any,
    Friday: any,
    Saturday: any,
    Sunday: any
  ) => {

    try {
      const item = {
        action,
        SedCode,
        SemCode,
        UserTeacher,
        TimeBlock,
        StartTime,
        FinishTime,
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday,
      }
      const result = await apiDisponibilidadHorario.CrudAvailability(item)
      return result
    } catch (error:any) {
      catchingErrorFront(error.message)
      setloading(false)
    }

    
  }

  // Api

  const SelectConten = async (
    item: any,
    state: any,
    setstate: any,
    key: any,
    Entrada: any
  ) => {
    const element = document.getElementById(item.target.id)

    let dialunes = '0'
    let diamartes = '0'
    let diamiercoles = '0'
    let diajueves = '0'
    let diaviernes = '0'
    let diasabado = '0'
    let diadomingo = '0'

    switch (key) {
      case 'lunes':
        dialunes = '1'
        break
      case 'martes':
        diamartes = '1'
        break
      case 'miercoles':
        diamiercoles = '1'
        break
      case 'jueves':
        diajueves = '1'
        break
      case 'viernes':
        diaviernes = '1'
        break
      case 'sabado':
        diasabado = '1'
        break
      case 'domingo':
        diadomingo = '1'
        break
      default:
        break
    }

    if (state) {
      setloading(true)
      element?.classList.remove(styles.DefaultBlock)
      element?.classList.add(styles.SelectBlock)
      setstate(false)
      const response = await ApiCrudAvailability(
        'INS',
        SelectedSede,
        SelectSemester,
        teacherCode,
        Entrada,
        '',
        '',
        dialunes,
        diamartes,
        diamiercoles,
        diajueves,
        diaviernes,
        diasabado,
        diadomingo
      )
      setloading(false)
      if (response === 'O') ViewMessage(0)
    } else {
      setloading(true)
      element?.classList.remove(styles.SelectBlock)
      element?.classList.add(styles.DefaultBlock)
      setstate(true)
      const response = await ApiCrudAvailability(
        'INS',
        SelectedSede,
        SelectSemester,
        teacherCode,
        Entrada,
        '',
        '',
        dialunes,
        diamartes,
        diamiercoles,
        diajueves,
        diaviernes,
        diasabado,
        diadomingo
      )
      setloading(false)
      if (response === 'O') ViewMessage(1)
    }
  }

  const ViewMessage = (StateMessage: any) => {
    switch (StateMessage) {
      case 0:
        return Swal.fire({
          title: 'Portal de Docentes',
          text: `Se agregó correctamente el bloque horario a su disponibilidad`,
          icon: 'success',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK',
        })
      case 1:
        return Swal.fire({
          title: 'Portal de Docentes',
          text: `Se retiro el bloque horario de su disponibilidad`,
          icon: 'success',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK',
        })
      default:
        break
    }
  }

  const SelectItemSede = async (item: any) => {
    setSelectedSede(item.target.value)
    await ApiSemesterUnitBusinessCode(item.target.value)
  }

  const BtnCarrySelect = async () => {
    setloading(true)
    setBtnDisabled({
      CboSede: true,
      CboSemestre: true,
      BtnCancel: false,
      BtnCarry: true,
    })
    setViewTable(true)
    await cargaTodoLosHorarios()
    setloading(false)
  }

  const cargaTodoLosHorarios = async () => {
    const response = await ApiTeacherAvailability(
      'GET-HORARIO',
      teacherCode,
      ''
    )
    setDataHour(response)
    await setDTsession(response)
  }

  const setDTsession = async (HourData: any) => {
    const response = await ApiTeacherAvailability(
      'GET-HORARIO-VALOR',
      teacherCode,
      SelectedSede
    )
    ValidateActiveHour(HourData, response)
  }

  const ValidateActiveHour = (HourData: any, DataDay: any) => {
    HourData.map((x: any) => {
      selectedDay(DataDay, x?.Monday, 'Monday')
      selectedDay(DataDay, x?.Thursday, 'Thursday')
      selectedDay(DataDay, x?.Wednesday, 'Wednesday')
      selectedDay(DataDay, x?.Tuesday, 'Tuesday')
      selectedDay(DataDay, x?.Friday, 'Friday')
      selectedDay(DataDay, x?.Saturday, 'Saturday')
      selectedDay(DataDay, x?.Sunday, 'Sunday')
    })
  }

  const HandleSemester = (item: any) => {
    setSelectSemester(item.target.value)
  }

  const selectedDay = (Data: any, SbloqueHorario: string, key: any) => {
    if (Data.length > 0) {
      const response = Data.find(
        (x: any) =>
          x.SemCode === SelectSemester && x.TimeBlock === SbloqueHorario
      )
      if (response !== undefined) {
        BloqueHour(key, SbloqueHorario)
      }
    }
  }

  const defaultActive = (item: any, setstate: any) => {
    const element = document.getElementById(item)
    element?.classList.remove(styles.DefaultBlock)
    element?.classList.add(styles.SelectBlock)
    setstate(false)
  }

  const BloqueHour = (HourKey: any, bloqueHorario: any) => {
    switch (HourKey) {
      case 'Monday':
        BlockMonday(bloqueHorario)
        break
      case 'Thursday':
        BlockThursday(bloqueHorario)
        break
      case 'Wednesday':
        BlockWednesday(bloqueHorario)
        break
      case 'Tuesday':
        BlockTuesday(bloqueHorario)
        break
      case 'Friday':
        BlockFriday(bloqueHorario)
        break
      case 'Saturday':
        BlockSaturday(bloqueHorario)
        break
      case 'Sunday':
        BlockSunday(bloqueHorario)
        break
      default:
        break
    }
    setloading(false)
  }

  const BlockMonday = (key: any) => {
    switch (key) {
      case '1A':
        defaultActive('ItemMondayHourA', setSelectItemMondayA)
        break
      case '1B':
        defaultActive('ItemMondayHourB', setSelectItemMondayHourB)
        break
      case '1C':
        defaultActive('ItemMondayHourC', setSelectItemMondayHourC)
        break
      case '1D':
        defaultActive('ItemMondayHourD', setSelectItemMondayHourD)
        break
      case '1E':
        defaultActive('ItemMondayHourE', setSelectItemMondayHourE)
        break
      case '1F':
        defaultActive('ItemMondayHourF', setSelectItemMondayHourF)
        break
      case '1G':
        defaultActive('ItemMondayHourG', setSelectItemMondayHourG)
        break
      case '1H':
        defaultActive('ItemMondayHourH', setSelectItemMondayHourH)
        break
      case '1I':
        defaultActive('ItemMondayHourI', setSelectItemMondayHourI)
        break
      default:
        break
    }
  }

  const BlockTuesday = (key: any) => {
    switch (key) {
      case '2A':
        defaultActive('ItemTuesdayA', setSelectItemTuesdayA)
        break
      case '2B':
        defaultActive('ItemTuesdayB', setSelectItemTuesdayHourB)
        break
      case '2C':
        defaultActive('ItemTuesdayC', setSelectItemTuesdayHourC)
        break
      case '2D':
        defaultActive('ItemTuesdayD', setSelectItemTuesdayHourD)
        break
      case '2E':
        defaultActive('ItemTuesdayE', setSelectItemTuesdayHourE)
        break
      case '2F':
        defaultActive('ItemTuesdayF', setSelectItemTuesdayHourF)
        break
      case '2G':
        defaultActive('ItemTuesdayG', setSelectItemTuesdayHourG)
        break
      case '2H':
        defaultActive('ItemTuesdayH', setSelectItemTuesdayHourH)
        break
      case '2I':
        defaultActive('ItemTuesdayI', setSelectItemTuesdayHourI)
        break
      default:
        break
    }
  }

  const BlockWednesday = (key: any) => {
    switch (key) {
      case '3A':
        defaultActive('ItemWednesdayA', setSelectItemWednesdayA)
        break
      case '3B':
        defaultActive('ItemWednesdayB', setSelectItemWednesdayHourB)
        break
      case '3C':
        defaultActive('ItemWednesdayC', setSelectItemWednesdayHourC)
        break
      case '3D':
        defaultActive('ItemWednesdayD', setSelectItemWednesdayHourD)
        break
      case '3E':
        defaultActive('ItemWednesdayE', setSelectItemWednesdayHourE)
        break
      case '3F':
        defaultActive('ItemWednesdayF', setSelectItemWednesdayHourF)
        break
      case '3G':
        defaultActive('ItemWednesdayG', setSelectItemWednesdayHourG)
        break
      case '3H':
        defaultActive('ItemWednesdayH', setSelectItemWednesdayHourH)
        break
      case '3I':
        defaultActive('ItemWednesdayI', setSelectItemWednesdayHourI)
        break
      default:
        break
    }
  }

  const BlockThursday = (key: any) => {
    switch (key) {
      case '4A':
        defaultActive('ItemThursdayA', setSelectItemThursdayA)
        break
      case '4B':
        defaultActive('ItemThursdayB', setSelectItemThursdayHourB)
        break
      case '4C':
        defaultActive('ItemThursdayC', setSelectItemThursdayHourC)
        break
      case '4D':
        defaultActive('ItemThursdayD', setSelectItemThursdayHourD)
        break
      case '4E':
        defaultActive('ItemThursdayE', setSelectItemThursdayHourE)
        break
      case '4F':
        defaultActive('ItemThursdayF', setSelectItemThursdayHourF)
        break
      case '4G':
        defaultActive('ItemThursdayG', setSelectItemThursdayHourG)
        break
      case '4H':
        defaultActive('ItemThursdayH', setSelectItemThursdayHourH)
        break
      case '4I':
        defaultActive('ItemThursdayI', setSelectItemThursdayHourI)
        break
      default:
        break
    }
  }

  const BlockFriday = (key: any) => {
    switch (key) {
      case '5A':
        defaultActive('ItemFridayA', setSelectItemFridayA)
        break
      case '5B':
        defaultActive('ItemFridayB', setSelectItemFridayHourB)
        break
      case '5C':
        defaultActive('ItemFridayC', setSelectItemFridayHourC)
        break
      case '5D':
        defaultActive('ItemFridayD', setSelectItemFridayHourD)
        break
      case '5E':
        defaultActive('ItemFridayE', setSelectItemFridayHourE)
        break
      case '5F':
        defaultActive('ItemFridayF', setSelectItemFridayHourF)
        break
      case '5G':
        defaultActive('ItemFridayG', setSelectItemFridayHourG)
        break
      case '5H':
        defaultActive('ItemFridayH', setSelectItemFridayHourH)
        break
      case '5I':
        defaultActive('ItemFridayI', setSelectItemFridayHourI)
        break
      default:
        break
    }
  }

  const BlockSaturday = (key: any) => {
    switch (key) {
      case '6A':
        defaultActive('ItemSaturdayA', setSelectItemSaturdayA)
        break
      case '6B':
        defaultActive('ItemSaturdayB', setSelectItemSaturdayHourB)
        break
      case '6C':
        defaultActive('ItemSaturdayC', setSelectItemSaturdayHourC)
        break
      case '6D':
        defaultActive('ItemSaturdayD', setSelectItemSaturdayHourD)
        break
      case '6E':
        defaultActive('ItemSaturdayE', setSelectItemSaturdayHourE)
        break
      case '6F':
        defaultActive('ItemSaturdayF', setSelectItemSaturdayHourF)
        break
      case '6G':
        defaultActive('ItemSaturdayG', setSelectItemSaturdayHourG)
        break
      case '6H':
        defaultActive('ItemSaturdayH', setSelectItemSaturdayHourH)
        break
      case '6I':
        defaultActive('ItemSaturdayI', setSelectItemSaturdayHourI)
        break
      default:
        break
    }
  }

  const BlockSunday = (key: any) => {
    switch (key) {
      case '7A':
        defaultActive('ItemSundayA', setSelectItemSundayA)
        break
      case '7B':
        defaultActive('ItemSundayB', setSelectItemSundayHourB)
        break
      case '7C':
        defaultActive('ItemSundayC', setSelectItemSundayHourC)
        break
      case '7D':
        defaultActive('ItemSundayD', setSelectItemSundayHourD)
        break
      case '7E':
        defaultActive('ItemSundayE', setSelectItemSundayHourE)
        break
      case '7F':
        defaultActive('ItemSundayF', setSelectItemSundayHourF)
        break
      case '7G':
        defaultActive('ItemSundayG', setSelectItemSundayHourG)
        break
      case '7H':
        defaultActive('ItemSundayH', setSelectItemSundayHourH)
        break
      case '7I':
        defaultActive('ItemSundayI', setSelectItemSundayHourI)
        break
      default:
        break
    }
  }

  const BtnCancelSelect = () => {
    setBtnDisabled({
      BtnCarry: false,
      BtnCancel: true,
      CboSede: false,
      CboSemestre: false,
    })
    setViewTable(false)
    
    setSelectItemMondayA(true)
    setSelectItemMondayHourB(true)
    setSelectItemMondayHourC(true)
    setSelectItemMondayHourD(true)
    setSelectItemMondayHourE(true)
    setSelectItemMondayHourF(true)
    setSelectItemMondayHourG(true)
    setSelectItemMondayHourH(true)
    setSelectItemMondayHourI(true)

    setSelectItemTuesdayA(true)
    setSelectItemTuesdayHourB(true)
    setSelectItemTuesdayHourC(true)
    setSelectItemTuesdayHourD(true)
    setSelectItemTuesdayHourE(true)
    setSelectItemTuesdayHourF(true)
    setSelectItemTuesdayHourG(true)
    setSelectItemTuesdayHourH(true)
    setSelectItemTuesdayHourI(true)

    setSelectItemWednesdayA(true)
    setSelectItemWednesdayHourB(true)
    setSelectItemWednesdayHourC(true)
    setSelectItemWednesdayHourD(true)
    setSelectItemWednesdayHourE(true)
    setSelectItemWednesdayHourF(true)
    setSelectItemWednesdayHourG(true)
    setSelectItemWednesdayHourH(true)
    setSelectItemWednesdayHourI(true)

    setSelectItemThursdayA(true)
    setSelectItemThursdayHourB(true)
    setSelectItemThursdayHourC(true)
    setSelectItemThursdayHourD(true)
    setSelectItemThursdayHourE(true)
    setSelectItemThursdayHourF(true)
    setSelectItemThursdayHourG(true)
    setSelectItemThursdayHourH(true)
    setSelectItemThursdayHourI(true)

    setSelectItemFridayA(true)
    setSelectItemFridayHourB(true)
    setSelectItemFridayHourC(true)
    setSelectItemFridayHourD(true)
    setSelectItemFridayHourE(true)
    setSelectItemFridayHourF(true)
    setSelectItemFridayHourG(true)
    setSelectItemFridayHourH(true)
    setSelectItemFridayHourI(true)

    setSelectItemSaturdayA(true)
    setSelectItemSaturdayHourB(true)
    setSelectItemSaturdayHourC(true)
    setSelectItemSaturdayHourD(true)
    setSelectItemSaturdayHourE(true)
    setSelectItemSaturdayHourF(true)
    setSelectItemSaturdayHourG(true)
    setSelectItemSaturdayHourH(true)
    setSelectItemSaturdayHourI(true)

    setSelectItemSundayA(true)
    setSelectItemSundayHourB(true)
    setSelectItemSundayHourC(true)
    setSelectItemSundayHourD(true)
    setSelectItemSundayHourE(true)
    setSelectItemSundayHourF(true)
    setSelectItemSundayHourG(true)
    setSelectItemSundayHourH(true)
    setSelectItemSundayHourI(true)
  }

  useEffect(() => {
    const Load = async () => {
      setloading(true)

      try {
        const resultHeadquartersBanners = await ApiHeadquartersBanners()
        setSelectedSede(resultHeadquartersBanners[0].Descripcion)
        setHeadquartersBanners(resultHeadquartersBanners)
        const resultSemesterUnitBusinessCode = await ApiSemesterUnitBusinessCode(
          'CAJ'
        )
        setSelectSemester(resultSemesterUnitBusinessCode[0].SemCode)
        setSemesterUnitBusinessCode(resultSemesterUnitBusinessCode)
      } catch (error:any) {
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
            Disponibilidad Horario
          </Label>
        </div>
        <hr />
        <div
          className={`${styles.conteSelect}`}
        >
          <div>
            <label>Sede</label>
          </div>
          <div>
            <Select
              disabled={BtnDisabled.CboSede}
              onChange={(e: any) => SelectItemSede(e)}
              id={''}
            >
              {HeadquartersBanners.map((x: any) => (
                <option
                  key={x?.Titulo}
                  value={x?.Descripcion}
                >
                  {x?.RutaImg}
                </option>
              ))}
            </Select>
          </div>
          <div>
            <label>Semestre</label>
          </div>
          <div>
            <Select
              disabled={BtnDisabled.CboSemestre}
              onChange={(e: any) => HandleSemester(e)}
              id={''}
            >
              {SemesterUnitBusinessCode.map((x: any) => (
                <option
                  key={x?.SemesterId}
                  value={x?.SemCode}
                >
                  {x?.SemDescription}
                </option>
              ))}
            </Select>
          </div>
        </div>

        <div className={`${styles.contenBtnres}`}>
          <Button
            onclick={BtnCarrySelect}
            disabled={BtnDisabled.BtnCarry}
            type="button"
            classname="mb-3"
            variant="primary"
          >
            Carga mi Disponibilidad Horaria
          </Button>
          <Button
            onclick={BtnCancelSelect}
            disabled={BtnDisabled.BtnCancel}
            type="button"
            classname="mb-3"
            variant="secondary"
          >
            Cancelar
          </Button>
        </div>

        <br />

        {ViewTable === true ? (
          <div style={{overflowX:'scroll'}}>
            <Tabla>
              <Thead>
                <th style={{ backgroundColor: '#343A40', color: 'white' }}>
                  HORARIO
                </th>

                <th style={{ backgroundColor: '#343A40', color: 'white' }}>
                  LUNES
                </th>

                <th style={{ backgroundColor: '#343A40', color: 'white' }}>
                  MARTES
                </th>

                <th style={{ backgroundColor: '#343A40', color: 'white' }}>
                  MIÉRCOLES
                </th>

                <th style={{ backgroundColor: '#343A40', color: 'white' }}>
                  JUEVES
                </th>

                <th style={{ backgroundColor: '#343A40', color: 'white' }}>
                  VIERNES
                </th>

                <th style={{ backgroundColor: '#343A40', color: 'white' }}>
                  SÁBADO
                </th>

                <th style={{ backgroundColor: '#343A40', color: 'white' }}>
                  DOMINGO
                </th>
              </Thead>
              <Tbody>
                <tr style={{ background: 'white' }}>
                  <td>{DataHour[0]?.Schedule}</td>
                  <td>
                    <div
                      onClick={(x) =>
                        SelectConten(
                          x,
                          SelectItemMondayA,
                          setSelectItemMondayA,
                          'lunes',
                          '1A'
                        )
                      }
                      id="ItemMondayHourA"
                      className={styles.DefaultBlock}
                      style={{
                        height: '30px',
                        cursor: 'pointer',
                        border: 'solid black 1px',
                      }}
                    ></div>
                  </td>
                  <td>
                    <div
                      onClick={(x) =>
                        SelectConten(
                          x,
                          SelectItemTuesdayA,
                          setSelectItemTuesdayA,
                          'martes',
                          '2A'
                        )
                      }
                      id="ItemTuesdayA"
                      className={styles.DefaultBlock}
                      style={{
                        height: '30px',
                        cursor: 'pointer',
                        border: 'solid black 1px',
                      }}
                    ></div>
                  </td>
                  <td>
                    <div
                      onClick={(x) =>
                        SelectConten(
                          x,
                          SelectItemWednesdayA,
                          setSelectItemWednesdayA,
                          'miercoles',
                          '3A'
                        )
                      }
                      id="ItemWednesdayA"
                      className={styles.DefaultBlock}
                      style={{
                        height: '30px',
                        cursor: 'pointer',
                        border: 'solid black 1px',
                      }}
                    ></div>
                  </td>
                  <td>
                    <div
                      onClick={(x) =>
                        SelectConten(
                          x,
                          SelectItemThursdayA,
                          setSelectItemThursdayA,
                          'jueves',
                          '4A'
                        )
                      }
                      id="ItemThursdayA"
                      className={styles.DefaultBlock}
                      style={{
                        height: '30px',
                        cursor: 'pointer',
                        border: 'solid black 1px',
                      }}
                    ></div>
                  </td>
                  <td>
                    <div
                      onClick={(x) =>
                        SelectConten(
                          x,
                          SelectItemFridayA,
                          setSelectItemFridayA,
                          'viernes',
                          '5A'
                        )
                      }
                      id="ItemFridayA"
                      className={styles.DefaultBlock}
                      style={{
                        height: '30px',
                        cursor: 'pointer',
                        border: 'solid black 1px',
                      }}
                    ></div>
                  </td>
                  <td>
                    <div
                      onClick={(x) =>
                        SelectConten(
                          x,
                          SelectItemSaturdayA,
                          setSelectItemSaturdayA,
                          'sabado',
                          '6A'
                        )
                      }
                      id="ItemSaturdayA"
                      className={styles.DefaultBlock}
                      style={{
                        height: '30px',
                        cursor: 'pointer',
                        border: 'solid black 1px',
                      }}
                    ></div>
                  </td>
                  <td>
                    <div
                      onClick={(x) =>
                        SelectConten(
                          x,
                          SelectItemSundayA,
                          setSelectItemSundayA,
                          'domingo',
                          '7A'
                        )
                      }
                      id="ItemSundayA"
                      className={styles.DefaultBlock}
                      style={{
                        height: '30px',
                        cursor: 'pointer',
                        border: 'solid black 1px',
                      }}
                    ></div>
                  </td>
                </tr>
                <tr>
                  <td>{DataHour[1]?.Schedule}</td>
                  <td>
                    <div
                      onClick={(x) =>
                        SelectConten(
                          x,
                          SelectItemMondayHourB,
                          setSelectItemMondayHourB,
                          'lunes',
                          '1B'
                        )
                      }
                      id="ItemMondayHourB"
                      className={styles.DefaultBlock}
                      style={{
                        height: '30px',
                        cursor: 'pointer',
                        border: 'solid black 1px',
                      }}
                    ></div>
                  </td>
                  <td>
                    <div
                      onClick={(x) =>
                        SelectConten(
                          x,
                          SelectItemTuesdayHourB,
                          setSelectItemTuesdayHourB,
                          'martes',
                          '2B'
                        )
                      }
                      id="ItemTuesdayB"
                      className={styles.DefaultBlock}
                      style={{
                        height: '30px',
                        cursor: 'pointer',
                        border: 'solid black 1px',
                      }}
                    ></div>
                  </td>
                  <td>
                    <div
                      onClick={(x) =>
                        SelectConten(
                          x,
                          SelectItemWednesdayHourB,
                          setSelectItemWednesdayHourB,
                          'miercoles',
                          '3B'
                        )
                      }
                      id="ItemWednesdayB"
                      className={styles.DefaultBlock}
                      style={{
                        height: '30px',
                        cursor: 'pointer',
                        border: 'solid black 1px',
                      }}
                    ></div>
                  </td>
                  <td>
                    <div
                      onClick={(x) =>
                        SelectConten(
                          x,
                          SelectItemThursdayHourB,
                          setSelectItemThursdayHourB,
                          'jueves',
                          '4B'
                        )
                      }
                      id="ItemThursdayB"
                      className={styles.DefaultBlock}
                      style={{
                        height: '30px',
                        cursor: 'pointer',
                        border: 'solid black 1px',
                      }}
                    ></div>
                  </td>
                  <td>
                    <div
                      onClick={(x) =>
                        SelectConten(
                          x,
                          SelectItemFridayHourB,
                          setSelectItemFridayHourB,
                          'viernes',
                          '5B'
                        )
                      }
                      id="ItemFridayB"
                      className={styles.DefaultBlock}
                      style={{
                        height: '30px',
                        cursor: 'pointer',
                        border: 'solid black 1px',
                      }}
                    ></div>
                  </td>
                  <td>
                    <div
                      onClick={(x) =>
                        SelectConten(
                          x,
                          SelectItemSaturdayHourB,
                          setSelectItemSaturdayHourB,
                          'sabado',
                          '6B'
                        )
                      }
                      id="ItemSaturdayB"
                      className={styles.DefaultBlock}
                      style={{
                        height: '30px',
                        cursor: 'pointer',
                        border: 'solid black 1px',
                      }}
                    ></div>
                  </td>
                  <td>
                    <div
                      onClick={(x) =>
                        SelectConten(
                          x,
                          SelectItemSundayHourB,
                          setSelectItemSundayHourB,
                          'domingo',
                          '7B'
                        )
                      }
                      id="ItemSundayB"
                      className={styles.DefaultBlock}
                      style={{
                        height: '30px',
                        cursor: 'pointer',
                        border: 'solid black 1px',
                      }}
                    ></div>
                  </td>
                </tr>
                <tr>
                  <td>{DataHour[2]?.Schedule}</td>
                  <td>
                    <div
                      onClick={(x) =>
                        SelectConten(
                          x,
                          SelectItemMondayHourC,
                          setSelectItemMondayHourC,
                          'lunes',
                          '1C'
                        )
                      }
                      id="ItemMondayHourC"
                      className={styles.DefaultBlock}
                      style={{
                        height: '30px',
                        cursor: 'pointer',
                        border: 'solid black 1px',
                      }}
                    ></div>
                  </td>
                  <td>
                    <div
                      onClick={(x) =>
                        SelectConten(
                          x,
                          SelectItemTuesdayHourC,
                          setSelectItemTuesdayHourC,
                          'martes',
                          '2C'
                        )
                      }
                      id="ItemTuesdayC"
                      className={styles.DefaultBlock}
                      style={{
                        height: '30px',
                        cursor: 'pointer',
                        border: 'solid black 1px',
                      }}
                    ></div>
                  </td>
                  <td>
                    <div
                      onClick={(x) =>
                        SelectConten(
                          x,
                          SelectItemWednesdayHourC,
                          setSelectItemWednesdayHourC,
                          'miercoles',
                          '3C'
                        )
                      }
                      id="ItemWednesdayC"
                      className={styles.DefaultBlock}
                      style={{
                        height: '30px',
                        cursor: 'pointer',
                        border: 'solid black 1px',
                      }}
                    ></div>
                  </td>
                  <td>
                    <div
                      onClick={(x) =>
                        SelectConten(
                          x,
                          SelectItemThursdayHourC,
                          setSelectItemThursdayHourC,
                          'jueves',
                          '4C'
                        )
                      }
                      id="ItemThursdayC"
                      className={styles.DefaultBlock}
                      style={{
                        height: '30px',
                        cursor: 'pointer',
                        border: 'solid black 1px',
                      }}
                    ></div>
                  </td>
                  <td>
                    <div
                      onClick={(x) =>
                        SelectConten(
                          x,
                          SelectItemFridayHourC,
                          setSelectItemFridayHourC,
                          'viernes',
                          '5C'
                        )
                      }
                      id="ItemFridayC"
                      className={styles.DefaultBlock}
                      style={{
                        height: '30px',
                        cursor: 'pointer',
                        border: 'solid black 1px',
                      }}
                    ></div>
                  </td>
                  <td>
                    <div
                      onClick={(x) =>
                        SelectConten(
                          x,
                          SelectItemSaturdayHourC,
                          setSelectItemSaturdayHourC,
                          'sabado',
                          '6C'
                        )
                      }
                      id="ItemSaturdayC"
                      className={styles.DefaultBlock}
                      style={{
                        height: '30px',
                        cursor: 'pointer',
                        border: 'solid black 1px',
                      }}
                    ></div>
                  </td>
                  <td>
                    <div
                      onClick={(x) =>
                        SelectConten(
                          x,
                          SelectItemSundayHourC,
                          setSelectItemSundayHourC,
                          'domingo',
                          '7C'
                        )
                      }
                      id="ItemSundayC"
                      className={styles.DefaultBlock}
                      style={{
                        height: '30px',
                        cursor: 'pointer',
                        border: 'solid black 1px',
                      }}
                    ></div>
                  </td>
                </tr>
                <tr>
                  <td>{DataHour[3]?.Schedule}</td>
                  <td>
                    <div
                      onClick={(x) =>
                        SelectConten(
                          x,
                          SelectItemMondayHourD,
                          setSelectItemMondayHourD,
                          'lunes',
                          '1D'
                        )
                      }
                      id="ItemMondayHourD"
                      className={styles.DefaultBlock}
                      style={{
                        height: '30px',
                        cursor: 'pointer',
                        border: 'solid black 1px',
                      }}
                    ></div>
                  </td>
                  <td>
                    <div
                      onClick={(x) =>
                        SelectConten(
                          x,
                          SelectItemTuesdayHourD,
                          setSelectItemTuesdayHourD,
                          'martes',
                          '2D'
                        )
                      }
                      id="ItemTuesdayD"
                      className={styles.DefaultBlock}
                      style={{
                        height: '30px',
                        cursor: 'pointer',
                        border: 'solid black 1px',
                      }}
                    ></div>
                  </td>
                  <td>
                    <div
                      onClick={(x) =>
                        SelectConten(
                          x,
                          SelectItemWednesdayHourD,
                          setSelectItemWednesdayHourD,
                          'miercoles',
                          '3D'
                        )
                      }
                      id="ItemWednesdayD"
                      className={styles.DefaultBlock}
                      style={{
                        height: '30px',
                        cursor: 'pointer',
                        border: 'solid black 1px',
                      }}
                    ></div>
                  </td>
                  <td>
                    <div
                      onClick={(x) =>
                        SelectConten(
                          x,
                          SelectItemThursdayHourD,
                          setSelectItemThursdayHourD,
                          'jueves',
                          '4D'
                        )
                      }
                      id="ItemThursdayD"
                      className={styles.DefaultBlock}
                      style={{
                        height: '30px',
                        cursor: 'pointer',
                        border: 'solid black 1px',
                      }}
                    ></div>
                  </td>
                  <td>
                    <div
                      onClick={(x) =>
                        SelectConten(
                          x,
                          SelectItemFridayHourD,
                          setSelectItemFridayHourD,
                          'viernes',
                          '5D'
                        )
                      }
                      id="ItemFridayD"
                      className={styles.DefaultBlock}
                      style={{
                        height: '30px',
                        cursor: 'pointer',
                        border: 'solid black 1px',
                      }}
                    ></div>
                  </td>
                  <td>
                    <div
                      onClick={(x) =>
                        SelectConten(
                          x,
                          SelectItemSaturdayHourD,
                          setSelectItemSaturdayHourD,
                          'sabado',
                          '6D'
                        )
                      }
                      id="ItemSaturdayD"
                      className={styles.DefaultBlock}
                      style={{
                        height: '30px',
                        cursor: 'pointer',
                        border: 'solid black 1px',
                      }}
                    ></div>
                  </td>
                  <td>
                    <div
                      onClick={(x) =>
                        SelectConten(
                          x,
                          SelectItemSundayHourD,
                          setSelectItemSundayHourD,
                          'domingo',
                          '7D'
                        )
                      }
                      id="ItemSundayD"
                      className={styles.DefaultBlock}
                      style={{
                        height: '30px',
                        cursor: 'pointer',
                        border: 'solid black 1px',
                      }}
                    ></div>
                  </td>
                </tr>
                <tr>
                  <td>{DataHour[4]?.Schedule}</td>
                  <td>
                    <div
                      onClick={(x) =>
                        SelectConten(
                          x,
                          SelectItemMondayHourE,
                          setSelectItemMondayHourE,
                          'lunes',
                          '1E'
                        )
                      }
                      id="ItemMondayHourE"
                      className={styles.DefaultBlock}
                      style={{
                        height: '30px',
                        cursor: 'pointer',
                        border: 'solid black 1px',
                      }}
                    ></div>
                  </td>
                  <td>
                    <div
                      onClick={(x) =>
                        SelectConten(
                          x,
                          SelectItemTuesdayHourE,
                          setSelectItemTuesdayHourE,
                          'martes',
                          '2E'
                        )
                      }
                      id="ItemTuesdayE"
                      className={styles.DefaultBlock}
                      style={{
                        height: '30px',
                        cursor: 'pointer',
                        border: 'solid black 1px',
                      }}
                    ></div>
                  </td>
                  <td>
                    <div
                      onClick={(x) =>
                        SelectConten(
                          x,
                          SelectItemWednesdayHourE,
                          setSelectItemWednesdayHourE,
                          'miercoles',
                          '3E'
                        )
                      }
                      id="ItemWednesdayE"
                      className={styles.DefaultBlock}
                      style={{
                        height: '30px',
                        cursor: 'pointer',
                        border: 'solid black 1px',
                      }}
                    ></div>
                  </td>
                  <td>
                    <div
                      onClick={(x) =>
                        SelectConten(
                          x,
                          SelectItemThursdayHourE,
                          setSelectItemThursdayHourE,
                          'jueves',
                          '4E'
                        )
                      }
                      id="ItemThursdayE"
                      className={styles.DefaultBlock}
                      style={{
                        height: '30px',
                        cursor: 'pointer',
                        border: 'solid black 1px',
                      }}
                    ></div>
                  </td>
                  <td>
                    <div
                      onClick={(x) =>
                        SelectConten(
                          x,
                          SelectItemFridayHourE,
                          setSelectItemFridayHourE,
                          'viernes',
                          '5E'
                        )
                      }
                      id="ItemFridayE"
                      className={styles.DefaultBlock}
                      style={{
                        height: '30px',
                        cursor: 'pointer',
                        border: 'solid black 1px',
                      }}
                    ></div>
                  </td>
                  <td>
                    <div
                      onClick={(x) =>
                        SelectConten(
                          x,
                          SelectItemSaturdayHourE,
                          setSelectItemSaturdayHourE,
                          'sabado',
                          '6E'
                        )
                      }
                      id="ItemSaturdayE"
                      className={styles.DefaultBlock}
                      style={{
                        height: '30px',
                        cursor: 'pointer',
                        border: 'solid black 1px',
                      }}
                    ></div>
                  </td>
                  <td>
                    <div
                      onClick={(x) =>
                        SelectConten(
                          x,
                          SelectItemSundayHourE,
                          setSelectItemSundayHourE,
                          'domingo',
                          '7E'
                        )
                      }
                      id="ItemSundayE"
                      className={styles.DefaultBlock}
                      style={{
                        height: '30px',
                        cursor: 'pointer',
                        border: 'solid black 1px',
                      }}
                    ></div>
                  </td>
                </tr>
                <tr>
                  <td>{DataHour[5]?.Schedule}</td>
                  <td>
                    <div
                      onClick={(x) =>
                        SelectConten(
                          x,
                          SelectItemMondayHourF,
                          setSelectItemMondayHourF,
                          'lunes',
                          '1F'
                        )
                      }
                      id="ItemMondayHourF"
                      className={styles.DefaultBlock}
                      style={{
                        height: '30px',
                        cursor: 'pointer',
                        border: 'solid black 1px',
                      }}
                    ></div>
                  </td>
                  <td>
                    <div
                      onClick={(x) =>
                        SelectConten(
                          x,
                          SelectItemTuesdayHourF,
                          setSelectItemTuesdayHourF,
                          'martes',
                          '2F'
                        )
                      }
                      id="ItemTuesdayF"
                      className={styles.DefaultBlock}
                      style={{
                        height: '30px',
                        cursor: 'pointer',
                        border: 'solid black 1px',
                      }}
                    ></div>
                  </td>
                  <td>
                    <div
                      onClick={(x) =>
                        SelectConten(
                          x,
                          SelectItemWednesdayHourF,
                          setSelectItemWednesdayHourF,
                          'miercoles',
                          '3F'
                        )
                      }
                      id="ItemWednesdayF"
                      className={styles.DefaultBlock}
                      style={{
                        height: '30px',
                        cursor: 'pointer',
                        border: 'solid black 1px',
                      }}
                    ></div>
                  </td>
                  <td>
                    <div
                      onClick={(x) =>
                        SelectConten(
                          x,
                          SelectItemThursdayHourF,
                          setSelectItemThursdayHourF,
                          'jueves',
                          '4F'
                        )
                      }
                      id="ItemThursdayF"
                      className={styles.DefaultBlock}
                      style={{
                        height: '30px',
                        cursor: 'pointer',
                        border: 'solid black 1px',
                      }}
                    ></div>
                  </td>
                  <td>
                    <div
                      onClick={(x) =>
                        SelectConten(
                          x,
                          SelectItemFridayHourF,
                          setSelectItemFridayHourF,
                          'viernes',
                          '5F'
                        )
                      }
                      id="ItemFridayF"
                      className={styles.DefaultBlock}
                      style={{
                        height: '30px',
                        cursor: 'pointer',
                        border: 'solid black 1px',
                      }}
                    ></div>
                  </td>
                  <td>
                    <div
                      onClick={(x) =>
                        SelectConten(
                          x,
                          SelectItemSaturdayHourF,
                          setSelectItemSaturdayHourF,
                          'sabado',
                          '6F'
                        )
                      }
                      id="ItemSaturdayF"
                      className={styles.DefaultBlock}
                      style={{
                        height: '30px',
                        cursor: 'pointer',
                        border: 'solid black 1px',
                      }}
                    ></div>
                  </td>
                  <td>
                    <div
                      onClick={(x) =>
                        SelectConten(
                          x,
                          SelectItemSundayHourF,
                          setSelectItemSundayHourF,
                          'domingo',
                          '7F'
                        )
                      }
                      id="ItemSundayF"
                      className={styles.DefaultBlock}
                      style={{
                        height: '30px',
                        cursor: 'pointer',
                        border: 'solid black 1px',
                      }}
                    ></div>
                  </td>
                </tr>
                <tr>
                  <td>{DataHour[6]?.Schedule}</td>
                  <td>
                    <div
                      onClick={(x) =>
                        SelectConten(
                          x,
                          SelectItemMondayHourG,
                          setSelectItemMondayHourG,
                          'lunes',
                          '1G'
                        )
                      }
                      id="ItemMondayHourG"
                      className={styles.DefaultBlock}
                      style={{
                        height: '30px',
                        cursor: 'pointer',
                        border: 'solid black 1px',
                      }}
                    ></div>
                  </td>
                  <td>
                    <div
                      onClick={(x) =>
                        SelectConten(
                          x,
                          SelectItemTuesdayHourG,
                          setSelectItemTuesdayHourG,
                          'martes',
                          '2G'
                        )
                      }
                      id="ItemTuesdayG"
                      className={styles.DefaultBlock}
                      style={{
                        height: '30px',
                        cursor: 'pointer',
                        border: 'solid black 1px',
                      }}
                    ></div>
                  </td>
                  <td>
                    <div
                      onClick={(x) =>
                        SelectConten(
                          x,
                          SelectItemWednesdayHourG,
                          setSelectItemWednesdayHourG,
                          'miercoles',
                          '3G'
                        )
                      }
                      id="ItemWednesdayG"
                      className={styles.DefaultBlock}
                      style={{
                        height: '30px',
                        cursor: 'pointer',
                        border: 'solid black 1px',
                      }}
                    ></div>
                  </td>
                  <td>
                    <div
                      onClick={(x) =>
                        SelectConten(
                          x,
                          SelectItemThursdayHourG,
                          setSelectItemThursdayHourG,
                          'jueves',
                          '4G'
                        )
                      }
                      id="ItemThursdayG"
                      className={styles.DefaultBlock}
                      style={{
                        height: '30px',
                        cursor: 'pointer',
                        border: 'solid black 1px',
                      }}
                    ></div>
                  </td>
                  <td>
                    <div
                      onClick={(x) =>
                        SelectConten(
                          x,
                          SelectItemFridayHourG,
                          setSelectItemFridayHourG,
                          'viernes',
                          '5G'
                        )
                      }
                      id="ItemFridayG"
                      className={styles.DefaultBlock}
                      style={{
                        height: '30px',
                        cursor: 'pointer',
                        border: 'solid black 1px',
                      }}
                    ></div>
                  </td>
                  <td>
                    <div
                      onClick={(x) =>
                        SelectConten(
                          x,
                          SelectItemSaturdayHourG,
                          setSelectItemSaturdayHourG,
                          'sabado',
                          '6G'
                        )
                      }
                      id="ItemSaturdayG"
                      className={styles.DefaultBlock}
                      style={{
                        height: '30px',
                        cursor: 'pointer',
                        border: 'solid black 1px',
                      }}
                    ></div>
                  </td>
                  <td>
                    <div
                      onClick={(x) =>
                        SelectConten(
                          x,
                          SelectItemSundayHourG,
                          setSelectItemSundayHourG,
                          'domingo',
                          '7G'
                        )
                      }
                      id="ItemSundayG"
                      className={styles.DefaultBlock}
                      style={{
                        height: '30px',
                        cursor: 'pointer',
                        border: 'solid black 1px',
                      }}
                    ></div>
                  </td>
                </tr>
                <tr>
                  <td>{DataHour[7]?.Schedule}</td>
                  <td>
                    <div
                      onClick={(x) =>
                        SelectConten(
                          x,
                          SelectItemMondayHourH,
                          setSelectItemMondayHourH,
                          'lunes',
                          '1H'
                        )
                      }
                      id="ItemMondayHourH"
                      className={styles.DefaultBlock}
                      style={{
                        height: '30px',
                        cursor: 'pointer',
                        border: 'solid black 1px',
                      }}
                    ></div>
                  </td>
                  <td>
                    <div
                      onClick={(x) =>
                        SelectConten(
                          x,
                          SelectItemTuesdayHourH,
                          setSelectItemTuesdayHourH,
                          'martes',
                          '2H'
                        )
                      }
                      id="ItemTuesdayH"
                      className={styles.DefaultBlock}
                      style={{
                        height: '30px',
                        cursor: 'pointer',
                        border: 'solid black 1px',
                      }}
                    ></div>
                  </td>
                  <td>
                    <div
                      onClick={(x) =>
                        SelectConten(
                          x,
                          SelectItemWednesdayHourH,
                          setSelectItemWednesdayHourH,
                          'miercoles',
                          '3H'
                        )
                      }
                      id="ItemWednesdayH"
                      className={styles.DefaultBlock}
                      style={{
                        height: '30px',
                        cursor: 'pointer',
                        border: 'solid black 1px',
                      }}
                    ></div>
                  </td>
                  <td>
                    <div
                      onClick={(x) =>
                        SelectConten(
                          x,
                          SelectItemThursdayHourH,
                          setSelectItemThursdayHourH,
                          'jueves',
                          '4H'
                        )
                      }
                      id="ItemThursdayH"
                      className={styles.DefaultBlock}
                      style={{
                        height: '30px',
                        cursor: 'pointer',
                        border: 'solid black 1px',
                      }}
                    ></div>
                  </td>
                  <td>
                    <div
                      onClick={(x) =>
                        SelectConten(
                          x,
                          SelectItemFridayHourH,
                          setSelectItemFridayHourH,
                          'viernes',
                          '5H'
                        )
                      }
                      id="ItemFridayH"
                      className={styles.DefaultBlock}
                      style={{
                        height: '30px',
                        cursor: 'pointer',
                        border: 'solid black 1px',
                      }}
                    ></div>
                  </td>
                  <td>
                    <div
                      onClick={(x) =>
                        SelectConten(
                          x,
                          SelectItemSaturdayHourH,
                          setSelectItemSaturdayHourH,
                          'sabado',
                          '6H'
                        )
                      }
                      id="ItemSaturdayH"
                      className={styles.DefaultBlock}
                      style={{
                        height: '30px',
                        cursor: 'pointer',
                        border: 'solid black 1px',
                      }}
                    ></div>
                  </td>
                  <td>
                    <div
                      onClick={(x) =>
                        SelectConten(
                          x,
                          SelectItemSundayHourH,
                          setSelectItemSundayHourH,
                          'domingo',
                          '7H'
                        )
                      }
                      id="ItemSundayH"
                      className={styles.DefaultBlock}
                      style={{
                        height: '30px',
                        cursor: 'pointer',
                        border: 'solid black 1px',
                      }}
                    ></div>
                  </td>
                </tr>
                <tr>
                  <td>{DataHour[8]?.Schedule}</td>
                  <td>
                    <div
                      onClick={(x) =>
                        SelectConten(
                          x,
                          SelectItemMondayHourI,
                          setSelectItemMondayHourI,
                          'lunes',
                          '1I'
                        )
                      }
                      id="ItemMondayHourI"
                      className={styles.DefaultBlock}
                      style={{
                        height: '30px',
                        cursor: 'pointer',
                        border: 'solid black 1px',
                      }}
                    ></div>
                  </td>
                  <td>
                    <div
                      onClick={(x) =>
                        SelectConten(
                          x,
                          SelectItemTuesdayHourI,
                          setSelectItemTuesdayHourI,
                          'martes',
                          '2I'
                        )
                      }
                      id="ItemTuesdayI"
                      className={styles.DefaultBlock}
                      style={{
                        height: '30px',
                        cursor: 'pointer',
                        border: 'solid black 1px',
                      }}
                    ></div>
                  </td>
                  <td>
                    <div
                      onClick={(x) =>
                        SelectConten(
                          x,
                          SelectItemWednesdayHourI,
                          setSelectItemWednesdayHourI,
                          'miercoles',
                          '3I'
                        )
                      }
                      id="ItemWednesdayI"
                      className={styles.DefaultBlock}
                      style={{
                        height: '30px',
                        cursor: 'pointer',
                        border: 'solid black 1px',
                      }}
                    ></div>
                  </td>
                  <td>
                    <div
                      onClick={(x) =>
                        SelectConten(
                          x,
                          SelectItemThursdayHourI,
                          setSelectItemThursdayHourI,
                          'jueves',
                          '4I'
                        )
                      }
                      id="ItemThursdayI"
                      className={styles.DefaultBlock}
                      style={{
                        height: '30px',
                        cursor: 'pointer',
                        border: 'solid black 1px',
                      }}
                    ></div>
                  </td>
                  <td>
                    <div
                      onClick={(x) =>
                        SelectConten(
                          x,
                          SelectItemFridayHourI,
                          setSelectItemFridayHourI,
                          'viernes',
                          '5I'
                        )
                      }
                      id="ItemFridayI"
                      className={styles.DefaultBlock}
                      style={{
                        height: '30px',
                        cursor: 'pointer',
                        border: 'solid black 1px',
                      }}
                    ></div>
                  </td>
                  <td>
                    <div
                      onClick={(x) =>
                        SelectConten(
                          x,
                          SelectItemSaturdayHourI,
                          setSelectItemSaturdayHourI,
                          'sabado',
                          '6I'
                        )
                      }
                      id="ItemSaturdayI"
                      className={styles.DefaultBlock}
                      style={{
                        height: '30px',
                        cursor: 'pointer',
                        border: 'solid black 1px',
                      }}
                    ></div>
                  </td>
                  <td>
                    <div
                      onClick={(x) =>
                        SelectConten(
                          x,
                          SelectItemSundayHourI,
                          setSelectItemSundayHourI,
                          'domingo',
                          '7I'
                        )
                      }
                      id="ItemSundayI"
                      className={styles.DefaultBlock}
                      style={{
                        height: '30px',
                        cursor: 'pointer',
                        border: 'solid black 1px',
                      }}
                    ></div>
                  </td>
                </tr>
              </Tbody>
            </Tabla>
          </div>
        ) : null}
      </div>
    </div>
  )
}

Index.title = `UPN Portal Docente | Disponibilidad Horaria - Portal Docentes`
export default Index
