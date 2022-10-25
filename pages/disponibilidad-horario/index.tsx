/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import styles from '../../components/templates/disponibilidadHorario/DisponibilidadHorario.module.scss'
import Button from '../../components/UI/atoms/button/Button';
import Label from '../../components/UI/atoms/label/Label';
import Loader from '../../components/UI/atoms/loader/Loader';
import Select from '../../components/UI/atoms/select/Select';
import Tbody from '../../components/UI/molecules/table/tbody/Tbody';
import Thead from '../../components/UI/molecules/table/thead/Thead';
import Tabla from '../../components/UI/organisms/table/Tabla';
import { apiDisponibilidadHorario } from '../api';

const index = () => {
    const [HeadquartersBanners,setHeadquartersBanners] = useState<any>([])
    const [SemesterUnitBusinessCode,setSemesterUnitBusinessCode] = useState<any>([])
    const [Loading, setloading] = useState(false)
    const [SelectItemMonday,setSelectItemMonday] = useState(true)
    const [SelectItemMondayHour2,setSelectItemMondayHour2] = useState(true)
    const [SelectItemMondayHour3,setSelectItemMondayHour3] = useState(true)
    const [SelectItemMondayHour4,setSelectItemMondayHour4] = useState(true)
    const [SelectItemMondayHour5,setSelectItemMondayHour5] = useState(true)
    const [SelectItemMondayHour6,setSelectItemMondayHour6] = useState(true)
    const [SelectItemMondayHour7,setSelectItemMondayHour7] = useState(true)
    const [SelectItemMondayHour8,setSelectItemMondayHour8] = useState(true)
    const [SelectItemMondayHour9,setSelectItemMondayHour9] = useState(true)
    const [SelectItemTuesday,setSelectItemTuesday] = useState(true)
    const [SelectItemTuesdayHour2,setSelectItemTuesdayHour2] = useState(true)
    const [SelectItemTuesdayHour3,setSelectItemTuesdayHour3] = useState(true)
    const [SelectItemTuesdayHour4,setSelectItemTuesdayHour4] = useState(true)
    const [SelectItemTuesdayHour5,setSelectItemTuesdayHour5] = useState(true)
    const [SelectItemTuesdayHour6,setSelectItemTuesdayHour6] = useState(true)
    const [SelectItemTuesdayHour7,setSelectItemTuesdayHour7] = useState(true)
    const [SelectItemTuesdayHour8,setSelectItemTuesdayHour8] = useState(true)
    const [SelectItemTuesdayHour9,setSelectItemTuesdayHour9] = useState(true)
    const [SelectItemWednesday,setSelectItemWednesday] = useState(true)
    const [SelectItemWednesdayHour2,setSelectItemWednesdayHour2] = useState(true)
    const [SelectItemWednesdayHour3,setSelectItemWednesdayHour3] = useState(true)
    const [SelectItemWednesdayHour4,setSelectItemWednesdayHour4] = useState(true)
    const [SelectItemWednesdayHour5,setSelectItemWednesdayHour5] = useState(true)
    const [SelectItemWednesdayHour6,setSelectItemWednesdayHour6] = useState(true)
    const [SelectItemWednesdayHour7,setSelectItemWednesdayHour7] = useState(true)
    const [SelectItemWednesdayHour8,setSelectItemWednesdayHour8] = useState(true)
    const [SelectItemWednesdayHour9,setSelectItemWednesdayHour9] = useState(true)
    const [SelectItemThursday,setSelectItemThursday] = useState(true)
    const [SelectItemThursdayHour2,setSelectItemThursdayHour2] = useState(true)
    const [SelectItemThursdayHour3,setSelectItemThursdayHour3] = useState(true)
    const [SelectItemThursdayHour4,setSelectItemThursdayHour4] = useState(true)
    const [SelectItemThursdayHour5,setSelectItemThursdayHour5] = useState(true)
    const [SelectItemThursdayHour6,setSelectItemThursdayHour6] = useState(true)
    const [SelectItemThursdayHour7,setSelectItemThursdayHour7] = useState(true)
    const [SelectItemThursdayHour8,setSelectItemThursdayHour8] = useState(true)
    const [SelectItemThursdayHour9,setSelectItemThursdayHour9] = useState(true)
    const [SelectItemFriday,setSelectItemFriday] = useState(true)
    const [SelectItemFridayHour2,setSelectItemFridayHour2] = useState(true)
    const [SelectItemFridayHour3,setSelectItemFridayHour3] = useState(true)
    const [SelectItemFridayHour4,setSelectItemFridayHour4] = useState(true)
    const [SelectItemFridayHour5,setSelectItemFridayHour5] = useState(true)
    const [SelectItemFridayHour6,setSelectItemFridayHour6] = useState(true)
    const [SelectItemFridayHour7,setSelectItemFridayHour7] = useState(true)
    const [SelectItemFridayHour8,setSelectItemFridayHour8] = useState(true)
    const [SelectItemFridayHour9,setSelectItemFridayHour9] = useState(true)
    const [SelectItemSaturday,setSelectItemSaturday] = useState(true)
    const [SelectItemSaturdayHour2,setSelectItemSaturdayHour2] = useState(true)
    const [SelectItemSaturdayHour3,setSelectItemSaturdayHour3] = useState(true)
    const [SelectItemSaturdayHour4,setSelectItemSaturdayHour4] = useState(true)
    const [SelectItemSaturdayHour5,setSelectItemSaturdayHour5] = useState(true)
    const [SelectItemSaturdayHour6,setSelectItemSaturdayHour6] = useState(true)
    const [SelectItemSaturdayHour7,setSelectItemSaturdayHour7] = useState(true)
    const [SelectItemSaturdayHour8,setSelectItemSaturdayHour8] = useState(true)
    const [SelectItemSaturdayHour9,setSelectItemSaturdayHour9] = useState(true)
    const [SelectItemSunday,setSelectItemSunday] = useState(true)
    const [SelectItemSundayHour2,setSelectItemSundayHour2] = useState(true)
    const [SelectItemSundayHour3,setSelectItemSundayHour3] = useState(true)
    const [SelectItemSundayHour4,setSelectItemSundayHour4] = useState(true)
    const [SelectItemSundayHour5,setSelectItemSundayHour5] = useState(true)
    const [SelectItemSundayHour6,setSelectItemSundayHour6] = useState(true)
    const [SelectItemSundayHour7,setSelectItemSundayHour7] = useState(true)
    const [SelectItemSundayHour8,setSelectItemSundayHour8] = useState(true)
    const [SelectItemSundayHour9,setSelectItemSundayHour9] = useState(true)
    const [BtnDisabled,setBtnDisabled] = useState({
        BtnCarry:  false,
        BtnCancel: true,
        CboSede:   false,
        CboSemestre: false
    })
    const [ViewTable,setViewTable] = useState(false)
    const [DataHour,setDataHour] = useState<any>([])
    const [SelectedSede,setSelectedSede] = useState("")
    const [SelectSemester,setSelectSemester] = useState("")
    const teacherCode = 'N00011885'

    const ApiHeadquartersBanners = async  () => {
        const result = await apiDisponibilidadHorario.listHeadquartersBanners("")
        return result
    }

    const ApiSemesterUnitBusinessCode = async  (item:any) => {
        const result = await apiDisponibilidadHorario.listSemesterUnitBusinessCode(item)
        return result
    }

    const ApiTeacherAvailability = async (action:any,user:any,day:any) => {
        const result = await apiDisponibilidadHorario.listTeacherAvailability(action,user,day)
        return result
    }

    const ApiCrudAvailability = async ( action:any,SedCode:any,SemCode:any,UserTeacher:any,TimeBlock:any,StartTime:any,FinishTime:any,Monday:any,Tuesday:any,Wednesday:any,Thursday:any,Friday:any,Saturday:any,Sunday:any) => {
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
                Sunday
        }
        const result = await apiDisponibilidadHorario.CrudAvailability(item)
        return result
    }

    // Api


    const SelectConten = async (item:any,state:any,setstate:any,key:any,Entrada:any) => {
        const element = document.getElementById(item.target.id);

        let dialunes = "0"
        let diamartes = "0"
        let diamiercoles = "0"
        let diajueves = "0"
        let diaviernes = "0"
        let diasabado = "0"
        let diadomingo = "0"

        switch (key) {
            case "lunes":
                dialunes = "1"
                break;
            case "martes":
                diamartes = "1"
                break;
            case "miercoles":
                diamiercoles = "1"
                break;
            case "jueves":
                diajueves = "1"
                break;
            case "viernes":
                diaviernes = "1"
                break;
            case "sabado":
                diasabado = "1"
                break;
            case "domingo":
                diadomingo = "1"
                break;
            default:
                break;
        }
        
        if(state){
            setloading(true)
            element?.classList.remove(styles.DefaultBlock)
            element?.classList.add(styles.SelectBlock);
            setstate(false)
            const response = await ApiCrudAvailability("INS",SelectedSede,SelectSemester,teacherCode,Entrada,"","",dialunes,diamartes,diamiercoles,diajueves,diaviernes,diasabado,diadomingo)
            setloading(false)
            if(response === "O") ViewMessage(0)
        }else{
            setloading(true)
            element?.classList.remove(styles.SelectBlock)
            element?.classList.add(styles.DefaultBlock);
            setstate(true)
            const response = await ApiCrudAvailability("INS",SelectedSede,SelectSemester,teacherCode,Entrada,"","",dialunes,diamartes,diamiercoles,diajueves,diaviernes,diasabado,diadomingo)
            setloading(false)
            if(response === "O") ViewMessage(1)
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

    const SelectItemSede = async (item:any) => {
        setSelectedSede(item.target.value)
        const response = await ApiSemesterUnitBusinessCode(item.target.value)
        console.log("response",response)
    }



    const BtnCarrySelect = async () => {
        setloading(true)
        setBtnDisabled({
            CboSede:true,
            CboSemestre:true,
            BtnCancel:false,
            BtnCarry:true
        })
        setViewTable(true)
        await cargaTodoLosHorarios()
        setloading(false)
    }

    const cargaTodoLosHorarios = async () => {
        const response  = await ApiTeacherAvailability("GET-HORARIO",teacherCode,"")
        setDataHour(response)
        await setDTsession(response)
    }

    const setDTsession = async (HourData:any) => {
        const response  = await ApiTeacherAvailability("GET-HORARIO-VALOR",teacherCode,SelectedSede)
        ValidateActiveHour(HourData,response)
    }

    const ValidateActiveHour = (HourData:any,DataDay:any) => {

        HourData.map((x:any) => {
            selectedDay(DataDay,x?.Monday,"Monday")
            selectedDay(DataDay,x?.Thursday,"Thursday")
            selectedDay(DataDay,x?.Wednesday,"Wednesday")
            selectedDay(DataDay,x?.Tuesday,"Tuesday")
            selectedDay(DataDay,x?.Friday,"Friday")
            selectedDay(DataDay,x?.Saturday,"Saturday")
            selectedDay(DataDay,x?.Sunday,"Sunday")
        })
        
    }

    const HandleSemester = (item:any) => {
        setSelectSemester(item.target.value)
    }

    const selectedDay = (Data:any,SbloqueHorario:string,key:any) => {
        if(Data.length > 0){
            const response = Data.find((x:any) => x.SemCode === SelectSemester && x.TimeBlock === SbloqueHorario)
            if(response !== undefined){
                BloqueHour(key,SbloqueHorario)
            }
        }
    }

    const defaultActive = (item:any,setstate:any) => {
        const element = document.getElementById(item);
        element?.classList.remove(styles.DefaultBlock)
        element?.classList.add(styles.SelectBlock);
        setstate(false)
    }

    const BloqueHour = (HourKey:any,bloqueHorario:any) => {
        switch (HourKey) {
            case "Monday":
                BlockMonday(bloqueHorario)
                break;
            case "Thursday":
                BlockThursday(bloqueHorario)
                break;
            case "Wednesday":
                BlockWednesday(bloqueHorario)
                break;
            case "Tuesday":
                BlockTuesday(bloqueHorario)
                break;
            case "Friday":
                BlockFriday(bloqueHorario)
                break;
            case "Saturday":
                BlockSaturday(bloqueHorario)
                break;
            case "Sunday":
                BlockSunday(bloqueHorario)
                break;
            default:
                break;
        }
        setloading(false)
    }

    const BlockMonday = (key:any) => {
        switch (key) {
            case "1A":
                defaultActive("ItemMondayHour1",setSelectItemMonday)
                break;
            case "1B":
                defaultActive("ItemMondayHour2",setSelectItemMondayHour2)
                break;
            case "1C":
                defaultActive("ItemMondayHour3",setSelectItemMondayHour3)
                break;
            case "1D":
                defaultActive("ItemMondayHour4",setSelectItemMondayHour4)
                break;
            case "1E":
                defaultActive("ItemMondayHour5",setSelectItemMondayHour5)
                break;
            case "1F":
                defaultActive("ItemMondayHour6",setSelectItemMondayHour6)
                break;
            case "1G":
                defaultActive("ItemMondayHour7",setSelectItemMondayHour7)
                break;
            case "1H":
                defaultActive("ItemMondayHour8",setSelectItemMondayHour8)
                break;
            case "1I":
                defaultActive("ItemMondayHour9",setSelectItemMondayHour9)
                break;
            default:
                break;
        }
    }

    const BlockTuesday = (key:any) => {
        switch (key) {
            case "2A":
                defaultActive("ItemTuesday1",setSelectItemTuesday)
                break;
            case "2B":
                defaultActive("ItemTuesday2",setSelectItemTuesdayHour2)
                break;
            case "2C":
                defaultActive("ItemTuesday3",setSelectItemTuesdayHour3)
                break;
            case "2D":
                defaultActive("ItemTuesday4",setSelectItemTuesdayHour4)
                break;
            case "2E":
                defaultActive("ItemTuesday5",setSelectItemTuesdayHour5)
                break;
            case "2F":
                defaultActive("ItemTuesday6",setSelectItemTuesdayHour6)
                break;
            case "2G":
                defaultActive("ItemTuesday7",setSelectItemTuesdayHour7)
                break;
            case "2H":
                defaultActive("ItemTuesday8",setSelectItemTuesdayHour8)
                break;
            case "2I":
                defaultActive("ItemTuesday9",setSelectItemTuesdayHour9)
                break;
            default:
                break;
        }
    }

    const BlockWednesday = (key:any) => {
        switch (key) {
            case "3A":
                defaultActive("ItemWednesday1",setSelectItemWednesday)
                break;
            case "3B":
                defaultActive("ItemWednesday2",setSelectItemWednesdayHour2)
                break;
            case "3C":
                defaultActive("ItemWednesday3",setSelectItemWednesdayHour3)
                break;
            case "3D":
                defaultActive("ItemWednesday4",setSelectItemWednesdayHour4)
                break;
            case "3E":
                defaultActive("ItemWednesday5",setSelectItemWednesdayHour5)
                break;
            case "3F":
                defaultActive("ItemWednesday6",setSelectItemWednesdayHour6)
                break;
            case "3G":
                defaultActive("ItemWednesday7",setSelectItemWednesdayHour7)
                break;
            case "3H":
                defaultActive("ItemWednesday8",setSelectItemWednesdayHour8)
                break;
            case "3I":
                defaultActive("ItemWednesday9",setSelectItemWednesdayHour9)
                break;
            default:
                break;
        }
    }

    const BlockThursday = (key:any) => {
        switch (key) {
            case "4A":
                defaultActive("ItemThursday1",setSelectItemThursday)
                break;
            case "4B":
                defaultActive("ItemThursday2",setSelectItemThursdayHour2)
                break;
            case "4C":
                defaultActive("ItemThursday3",setSelectItemThursdayHour3)
                break;
            case "4D":
                defaultActive("ItemThursday4",setSelectItemThursdayHour4)
                break;
            case "4E":
                defaultActive("ItemThursday5",setSelectItemThursdayHour5)
                break;
            case "4F":
                defaultActive("ItemThursday6",setSelectItemThursdayHour6)
                break;
            case "4G":
                defaultActive("ItemThursday7",setSelectItemThursdayHour7)
                break;
            case "4H":
                defaultActive("ItemThursday8",setSelectItemThursdayHour8)
                break;
            case "4I":
                defaultActive("ItemThursday9",setSelectItemThursdayHour9)
                break;
            default:
                break;
        }
    }

    const BlockFriday = (key:any) => {
        switch (key) {
            case "5A":
                defaultActive("ItemFriday1",setSelectItemFriday)
                break;
            case "5B":
                defaultActive("ItemFriday2",setSelectItemFridayHour2)
                break;
            case "5C":
                defaultActive("ItemFriday3",setSelectItemFridayHour3)
                break;
            case "5D":
                defaultActive("ItemFriday4",setSelectItemFridayHour4)
                break;
            case "5E":
                defaultActive("ItemFriday5",setSelectItemFridayHour5)
                break;
            case "5F":
                defaultActive("ItemFriday6",setSelectItemFridayHour6)
                break;
            case "5G":
                defaultActive("ItemFriday7",setSelectItemFridayHour7)
                break;
            case "5H":
                defaultActive("ItemFriday8",setSelectItemFridayHour8)
                break;
            case "5I":
                defaultActive("ItemFriday9",setSelectItemFridayHour9)
                break;
            default:
                break;
        }
    }

    const BlockSaturday = (key:any) => {
        switch (key) {
            case "6A":
                defaultActive("ItemSaturday1",setSelectItemSaturday)
                break;
            case "6B":
                defaultActive("ItemSaturday2",setSelectItemSaturdayHour2)
                break;
            case "6C":
                defaultActive("ItemSaturday3",setSelectItemSaturdayHour3)
                break;
            case "6D":
                defaultActive("ItemSaturday4",setSelectItemSaturdayHour4)
                break;
            case "6E":
                defaultActive("ItemSaturday5",setSelectItemSaturdayHour5)
                break;
            case "6F":
                defaultActive("ItemSaturday6",setSelectItemSaturdayHour6)
                break;
            case "6G":
                defaultActive("ItemSaturday7",setSelectItemSaturdayHour7)
                break;
            case "6H":
                defaultActive("ItemSaturday8",setSelectItemSaturdayHour8)
                break;
            case "6I":
                defaultActive("ItemSaturday9",setSelectItemSaturdayHour9)
                break;
            default:
                break;
        }
    }

    const BlockSunday = (key:any) => {
        switch (key) {
            case "7A":
                defaultActive("ItemSunday1",setSelectItemSunday)
                break;
            case "7B":
                defaultActive("ItemSunday2",setSelectItemSundayHour2)
                break;
            case "7C":
                defaultActive("ItemSunday3",setSelectItemSundayHour3)
                break;
            case "7D":
                defaultActive("ItemSunday4",setSelectItemSundayHour4)
                break;
            case "7E":
                defaultActive("ItemSunday5",setSelectItemSundayHour5)
                break;
            case "7F":
                defaultActive("ItemSunday6",setSelectItemSundayHour6)
                break;
            case "7G":
                defaultActive("ItemSunday7",setSelectItemSundayHour7)
                break;
            case "7H":
                defaultActive("ItemSunday8",setSelectItemSundayHour8)
                break;
            case "7I":
                defaultActive("ItemSunday9",setSelectItemSundayHour9)
                break;
            default:
                break;
        }
    }
    

    const BtnCancelSelect = () => {
        setBtnDisabled({
            BtnCarry:  false,
            BtnCancel: true,
            CboSede:   false,
            CboSemestre: false
        })
        setViewTable(false)
        setSelectItemMonday(true)
        setSelectItemMondayHour2(true)
        setSelectItemMondayHour3(true)
        setSelectItemMondayHour4(true)
        setSelectItemMondayHour5(true)
        setSelectItemMondayHour6(true)
        setSelectItemMondayHour7(true)
        setSelectItemMondayHour8(true)
        setSelectItemMondayHour9(true)
        setSelectItemTuesday(true)
        setSelectItemTuesdayHour2(true)
        setSelectItemTuesdayHour3(true)
        setSelectItemTuesdayHour4(true)
        setSelectItemTuesdayHour5(true)
        setSelectItemTuesdayHour6(true)
        setSelectItemTuesdayHour7(true)
        setSelectItemTuesdayHour8(true)
        setSelectItemTuesdayHour9(true)
        setSelectItemWednesday(true)
        setSelectItemWednesdayHour2(true)
        setSelectItemWednesdayHour3(true)
        setSelectItemWednesdayHour4(true)
        setSelectItemWednesdayHour5(true)
        setSelectItemWednesdayHour6(true)
        setSelectItemWednesdayHour7(true)
        setSelectItemWednesdayHour8(true)
        setSelectItemWednesdayHour9(true)
        setSelectItemThursday(true)
        setSelectItemThursdayHour2(true)
        setSelectItemThursdayHour3(true)
        setSelectItemThursdayHour4(true)
        setSelectItemThursdayHour5(true)
        setSelectItemThursdayHour6(true)
        setSelectItemThursdayHour7(true)
        setSelectItemThursdayHour8(true)
        setSelectItemThursdayHour9(true)
        setSelectItemFriday(true)
        setSelectItemFridayHour2(true)
        setSelectItemFridayHour3(true)
        setSelectItemFridayHour4(true)
        setSelectItemFridayHour5(true)
        setSelectItemFridayHour6(true)
        setSelectItemFridayHour7(true)
        setSelectItemFridayHour8(true)
        setSelectItemFridayHour9(true)
        setSelectItemSaturday(true)
        setSelectItemSaturdayHour2(true)
        setSelectItemSaturdayHour3(true)
        setSelectItemSaturdayHour4(true)
        setSelectItemSaturdayHour5(true)
        setSelectItemSaturdayHour6(true)
        setSelectItemSaturdayHour7(true)
        setSelectItemSaturdayHour8(true)
        setSelectItemSaturdayHour9(true)
        setSelectItemSunday(true)
        setSelectItemSundayHour2(true)
        setSelectItemSundayHour3(true)
        setSelectItemSundayHour4(true)
        setSelectItemSundayHour5(true)
        setSelectItemSundayHour6(true)
        setSelectItemSundayHour7(true)
        setSelectItemSundayHour8(true)
        setSelectItemSundayHour9(true)
    }

    useEffect(()=>{
        const Load = async () => {
            setloading(true)
            const resultHeadquartersBanners = await ApiHeadquartersBanners()
            setSelectedSede(resultHeadquartersBanners[0].Descripcion)
            setHeadquartersBanners(resultHeadquartersBanners)
            const resultSemesterUnitBusinessCode = await ApiSemesterUnitBusinessCode("CAJ")
            setSelectSemester(resultSemesterUnitBusinessCode[0].SemCode)
            setSemesterUnitBusinessCode(resultSemesterUnitBusinessCode)
            setloading(false)
        }

        Load()
    },[])


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
                <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gridTemplateRows:'1fr 1fr',maxWidth:'40%',alignItems:'center',rowGap:'5px'}}>
                    <div>
                        <label>Sede</label>
                    </div>
                    <div>
                        <Select disabled={BtnDisabled.CboSede} onChange={(e:any) => SelectItemSede(e)} id={''}>
                            {
                                HeadquartersBanners.map((x:any) => (
                                    <option key={x?.Titulo} value={x?.Descripcion}>{x?.RutaImg}</option>
                                ))
                            }
                            
                        </Select>
                    </div>
                    <div>
                        <label>Semestre</label>
                    </div>
                    <div>
                        <Select disabled={BtnDisabled.CboSemestre} onChange={(e:any) => HandleSemester(e)} id={''}>
                            {
                                SemesterUnitBusinessCode.map((x:any) => (
                                    <option key={x?.SemesterId} value={x?.SemCode}>{x?.SemDescription}</option>
                                ))
                            }
                            
                        </Select>
                    </div>
                </div>

                

                <div style={{display:'flex',padding:'15px',gap:'5px'}}>
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

                {
                    ViewTable === true ? (
                    <>
                        <Tabla>
                        <Thead>
                        
                            <th  style={{backgroundColor:'#343A40',color:'white'}} >HORARIO</th>
                    
                            <th style={{backgroundColor:'#343A40',color:'white'}} >LUNES</th>
                        
                            <th style={{backgroundColor:'#343A40',color:'white'}} >MARTES</th>
                        
                            <th style={{backgroundColor:'#343A40',color:'white'}} >MIÉRCOLES</th>
                        
                            <th style={{backgroundColor:'#343A40',color:'white'}} >JUEVES</th>

                            <th style={{backgroundColor:'#343A40',color:'white'}} >VIERNES</th>

                            <th style={{backgroundColor:'#343A40',color:'white'}} >SÁBADO</th>

                            <th style={{backgroundColor:'#343A40',color:'white'}} >DOMINGO</th>
                        
                        </Thead>
                        <Tbody>
                            <tr style={{background:'white'}}>
                                <td>{DataHour[0]?.Schedule}</td>
                                <td>
                                    <div onClick={(x) => SelectConten(x,SelectItemMonday,setSelectItemMonday,"lunes","1A")} id='ItemMondayHour1' className={styles.DefaultBlock} style={{height:'30px',cursor:'pointer',border:'solid black 1px'}} ></div>
                                </td>
                                <td>
                                    <div onClick={(x) => SelectConten(x,SelectItemTuesday,setSelectItemTuesday,"martes","2A")} id='ItemTuesday1' className={styles.DefaultBlock} style={{height:'30px',cursor:'pointer',border:'solid black 1px'}} ></div>
                                </td>
                                <td>
                                    <div onClick={(x) => SelectConten(x,SelectItemWednesday,setSelectItemWednesday,"miercoles","3A")} id='ItemWednesday1' className={styles.DefaultBlock} style={{height:'30px',cursor:'pointer',border:'solid black 1px'}} ></div>
                                </td>
                                <td>
                                    <div onClick={(x) => SelectConten(x,SelectItemThursday,setSelectItemThursday,"jueves","4A")} id='ItemThursday1' className={styles.DefaultBlock} style={{height:'30px',cursor:'pointer',border:'solid black 1px'}} ></div>
                                </td>
                                <td>
                                    <div onClick={(x) => SelectConten(x,SelectItemFriday,setSelectItemFriday,"viernes","5A")} id='ItemFriday1' className={styles.DefaultBlock} style={{height:'30px',cursor:'pointer',border:'solid black 1px'}} ></div>
                                </td>
                                <td>
                                    <div onClick={(x) => SelectConten(x,SelectItemSaturday,setSelectItemSaturday,"sabado","6A")} id='ItemSaturday1' className={styles.DefaultBlock} style={{height:'30px',cursor:'pointer',border:'solid black 1px'}} ></div>
                                </td>
                                <td>
                                    <div onClick={(x) => SelectConten(x,SelectItemSunday,setSelectItemSunday,"domingo","7A")} id='ItemSunday1' className={styles.DefaultBlock} style={{height:'30px',cursor:'pointer',border:'solid black 1px'}} ></div>
                                </td>
                            </tr>
                            <tr>
                                <td>{DataHour[1]?.Schedule}</td>
                                <td>
                                    <div onClick={(x) => SelectConten(x,SelectItemMondayHour2,setSelectItemMondayHour2,"lunes","1B")} id='ItemMondayHour2' className={styles.DefaultBlock}  style={{height:'30px',cursor:'pointer',border:'solid black 1px'}} ></div>
                                </td>
                                <td>
                                    <div onClick={(x) => SelectConten(x,SelectItemTuesdayHour2,setSelectItemTuesdayHour2,"martes","2B")} id='ItemTuesday2' className={styles.DefaultBlock} style={{height:'30px',cursor:'pointer',border:'solid black 1px'}} ></div>
                                </td>
                                <td>
                                    <div onClick={(x) => SelectConten(x,SelectItemWednesdayHour2,setSelectItemWednesdayHour2,"miercoles","3B")} id='ItemWednesday2' className={styles.DefaultBlock}  style={{height:'30px',cursor:'pointer',border:'solid black 1px'}} ></div>
                                </td>
                                <td>
                                    <div onClick={(x) => SelectConten(x,SelectItemThursdayHour2,setSelectItemThursdayHour2,"jueves","4B")} id='ItemThursday2' className={styles.DefaultBlock} style={{height:'30px',cursor:'pointer',border:'solid black 1px'}} ></div>
                                </td>
                                <td>
                                    <div onClick={(x) => SelectConten(x,SelectItemFridayHour2,setSelectItemFridayHour2,"viernes","5B")} id='ItemFriday2' className={styles.DefaultBlock} style={{height:'30px',cursor:'pointer',border:'solid black 1px'}} ></div>
                                </td>
                                <td>
                                    <div onClick={(x) => SelectConten(x,SelectItemSaturdayHour2,setSelectItemSaturdayHour2,"sabado","6B")} id='ItemSaturday2' className={styles.DefaultBlock} style={{height:'30px',cursor:'pointer',border:'solid black 1px'}} ></div>
                                </td>
                                <td>
                                    <div onClick={(x) => SelectConten(x,SelectItemSundayHour2,setSelectItemSundayHour2,"domingo","7B")} id='ItemSunday2' className={styles.DefaultBlock} style={{height:'30px',cursor:'pointer',border:'solid black 1px'}} ></div>
                                </td>
                            </tr>
                            <tr>
                                <td>{DataHour[2]?.Schedule}</td>
                                <td>
                                    <div onClick={(x) => SelectConten(x,SelectItemMondayHour3,setSelectItemMondayHour3,"lunes","1C")} id='ItemMondayHour3' className={styles.DefaultBlock} style={{height:'30px',cursor:'pointer',border:'solid black 1px'}} ></div>
                                </td>
                                <td>
                                    <div onClick={(x) => SelectConten(x,SelectItemTuesdayHour3,setSelectItemTuesdayHour3,"martes","2C")} id='ItemTuesday3' className={styles.DefaultBlock} style={{height:'30px',cursor:'pointer',border:'solid black 1px'}} ></div>
                                </td>
                                <td>
                                    <div onClick={(x) => SelectConten(x,SelectItemWednesdayHour3,setSelectItemWednesdayHour3,"miercoles","3C")} id='ItemWednesday3' className={styles.DefaultBlock} style={{height:'30px',cursor:'pointer',border:'solid black 1px'}} ></div>
                                </td>
                                <td>
                                    <div onClick={(x) => SelectConten(x,SelectItemThursdayHour3,setSelectItemThursdayHour3,"jueves","4C")} id='ItemThursday3' className={styles.DefaultBlock} style={{height:'30px',cursor:'pointer',border:'solid black 1px'}} ></div>
                                </td>
                                <td>
                                    <div onClick={(x) => SelectConten(x,SelectItemFridayHour3,setSelectItemFridayHour3,"viernes","5C")} id='ItemFriday3' className={styles.DefaultBlock} style={{height:'30px',cursor:'pointer',border:'solid black 1px'}} ></div>
                                </td>
                                <td>
                                    <div onClick={(x) => SelectConten(x,SelectItemSaturdayHour3,setSelectItemSaturdayHour3,"sabado","6C")} id='ItemSaturday3' className={styles.DefaultBlock} style={{height:'30px',cursor:'pointer',border:'solid black 1px'}} ></div>
                                </td>
                                <td>
                                    <div onClick={(x) => SelectConten(x,SelectItemSundayHour3,setSelectItemSundayHour3,"domingo","7C")} id='ItemSunday3' className={styles.DefaultBlock} style={{height:'30px',cursor:'pointer',border:'solid black 1px'}} ></div>
                                </td>
                            </tr>
                            <tr>
                                <td>{DataHour[3]?.Schedule}</td>
                                <td>
                                    <div onClick={(x) => SelectConten(x,SelectItemMondayHour4,setSelectItemMondayHour4,"lunes","1D")} id='ItemMondayHour4' className={styles.DefaultBlock} style={{height:'30px',cursor:'pointer',border:'solid black 1px'}} ></div>
                                </td>
                                <td>
                                    <div onClick={(x) => SelectConten(x,SelectItemTuesdayHour4,setSelectItemTuesdayHour4,"martes","2D")} id='ItemTuesday4' className={styles.DefaultBlock} style={{height:'30px',cursor:'pointer',border:'solid black 1px'}} ></div>
                                </td>
                                <td>
                                    <div onClick={(x) => SelectConten(x,SelectItemWednesdayHour4,setSelectItemWednesdayHour4,"miercoles","3D")} id='ItemWednesday4' className={styles.DefaultBlock} style={{height:'30px',cursor:'pointer',border:'solid black 1px'}} ></div>
                                </td>
                                <td>
                                    <div onClick={(x) => SelectConten(x,SelectItemThursdayHour4,setSelectItemThursdayHour4,"jueves","4D")} id='ItemThursday4' className={styles.DefaultBlock} style={{height:'30px',cursor:'pointer',border:'solid black 1px'}} ></div>
                                </td>
                                <td>
                                    <div onClick={(x) => SelectConten(x,SelectItemFridayHour4,setSelectItemFridayHour4,"viernes","5D")} id='ItemFriday4' className={styles.DefaultBlock} style={{height:'30px',cursor:'pointer',border:'solid black 1px'}} ></div>
                                </td>
                                <td>
                                    <div onClick={(x) => SelectConten(x,SelectItemSaturdayHour4,setSelectItemSaturdayHour4,"sabado","6D")} id='ItemSaturday4' className={styles.DefaultBlock} style={{height:'30px',cursor:'pointer',border:'solid black 1px'}} ></div>
                                </td>
                                <td>
                                    <div onClick={(x) => SelectConten(x,SelectItemSundayHour4,setSelectItemSundayHour4,"domingo","7D")} id='ItemSunday4' className={styles.DefaultBlock} style={{height:'30px',cursor:'pointer',border:'solid black 1px'}} ></div>
                                </td>
                            </tr>
                            <tr>
                                <td>{DataHour[4]?.Schedule}</td>
                                <td>
                                    <div onClick={(x) => SelectConten(x,SelectItemMondayHour5,setSelectItemMondayHour5,"lunes","1E")} id='ItemMondayHour5' className={styles.DefaultBlock} style={{height:'30px',cursor:'pointer',border:'solid black 1px'}} ></div>
                                </td>
                                <td>
                                    <div onClick={(x) => SelectConten(x,SelectItemTuesdayHour5,setSelectItemTuesdayHour5,"martes","2E")} id='ItemTuesday5' className={styles.DefaultBlock} style={{height:'30px',cursor:'pointer',border:'solid black 1px'}} ></div>
                                </td>
                                <td>
                                    <div onClick={(x) => SelectConten(x,SelectItemWednesdayHour5,setSelectItemWednesdayHour5,"miercoles","3E")} id='ItemWednesday5' className={styles.DefaultBlock} style={{height:'30px',cursor:'pointer',border:'solid black 1px'}} ></div>
                                </td>
                                <td>
                                    <div onClick={(x) => SelectConten(x,SelectItemThursdayHour5,setSelectItemThursdayHour5,"jueves","4E")} id='ItemThursday5' className={styles.DefaultBlock} style={{height:'30px',cursor:'pointer',border:'solid black 1px'}} ></div>
                                </td>
                                <td>
                                    <div onClick={(x) => SelectConten(x,SelectItemFridayHour5,setSelectItemFridayHour5,"viernes","5E")} id='ItemFriday5' className={styles.DefaultBlock} style={{height:'30px',cursor:'pointer',border:'solid black 1px'}} ></div>
                                </td>
                                <td>
                                    <div onClick={(x) => SelectConten(x,SelectItemSaturdayHour5,setSelectItemSaturdayHour5,"sabado","6E")} id='ItemSaturday5' className={styles.DefaultBlock} style={{height:'30px',cursor:'pointer',border:'solid black 1px'}} ></div>
                                </td>
                                <td>
                                    <div onClick={(x) => SelectConten(x,SelectItemSundayHour5,setSelectItemSundayHour5,"domingo","7E")} id='ItemSunday5' className={styles.DefaultBlock} style={{height:'30px',cursor:'pointer',border:'solid black 1px'}} ></div>
                                </td>
                            </tr>
                            <tr>
                                <td>{DataHour[5]?.Schedule}</td>
                                <td>
                                    <div onClick={(x) => SelectConten(x,SelectItemMondayHour6,setSelectItemMondayHour6,"lunes","1F")} id='ItemMondayHour6' className={styles.DefaultBlock} style={{height:'30px',cursor:'pointer',border:'solid black 1px'}} ></div>
                                </td>
                                <td>
                                    <div onClick={(x) => SelectConten(x,SelectItemTuesdayHour6,setSelectItemTuesdayHour6,"martes","2F")} id='ItemTuesday6' className={styles.DefaultBlock} style={{height:'30px',cursor:'pointer',border:'solid black 1px'}} ></div>
                                </td>
                                <td>
                                    <div onClick={(x) => SelectConten(x,SelectItemWednesdayHour6,setSelectItemWednesdayHour6,"miercoles","3F")} id='ItemWednesday6' className={styles.DefaultBlock} style={{height:'30px',cursor:'pointer',border:'solid black 1px'}} ></div>
                                </td>
                                <td>
                                    <div onClick={(x) => SelectConten(x,SelectItemThursdayHour6,setSelectItemThursdayHour6,"jueves","4F")} id='ItemThursday6' className={styles.DefaultBlock} style={{height:'30px',cursor:'pointer',border:'solid black 1px'}} ></div>
                                </td>
                                <td>
                                    <div onClick={(x) => SelectConten(x,SelectItemFridayHour6,setSelectItemFridayHour6,"viernes","5F")} id='ItemFriday6' className={styles.DefaultBlock} style={{height:'30px',cursor:'pointer',border:'solid black 1px'}} ></div>
                                </td>
                                <td>
                                    <div onClick={(x) => SelectConten(x,SelectItemSaturdayHour6,setSelectItemSaturdayHour6,"sabado","6F")} id='ItemSaturday6' className={styles.DefaultBlock} style={{height:'30px',cursor:'pointer',border:'solid black 1px'}} ></div>
                                </td>
                                <td>
                                    <div onClick={(x) => SelectConten(x,SelectItemSundayHour6,setSelectItemSundayHour6,"domingo","7F")} id='ItemSunday6' className={styles.DefaultBlock} style={{height:'30px',cursor:'pointer',border:'solid black 1px'}} ></div>
                                </td>
                            </tr>
                            <tr>
                                <td>{DataHour[6]?.Schedule}</td>
                                <td>
                                    <div onClick={(x) => SelectConten(x,SelectItemMondayHour7,setSelectItemMondayHour7,"lunes","1G")} id='ItemMondayHour7' className={styles.DefaultBlock} style={{height:'30px',cursor:'pointer',border:'solid black 1px'}} ></div>
                                </td>
                                <td>
                                    <div onClick={(x) => SelectConten(x,SelectItemTuesdayHour7,setSelectItemTuesdayHour7,"martes","2G")} id='ItemTuesday7' className={styles.DefaultBlock} style={{height:'30px',cursor:'pointer',border:'solid black 1px'}} ></div>
                                </td>
                                <td>
                                    <div onClick={(x) => SelectConten(x,SelectItemWednesdayHour7,setSelectItemWednesdayHour7,"miercoles","3G")} id='ItemWednesday7' className={styles.DefaultBlock} style={{height:'30px',cursor:'pointer',border:'solid black 1px'}} ></div>
                                </td>
                                <td>
                                    <div onClick={(x) => SelectConten(x,SelectItemThursdayHour7,setSelectItemThursdayHour7,"jueves","4G")} id='ItemThursday7' className={styles.DefaultBlock} style={{height:'30px',cursor:'pointer',border:'solid black 1px'}} ></div>
                                </td>
                                <td>
                                    <div onClick={(x) => SelectConten(x,SelectItemFridayHour7,setSelectItemFridayHour7,"viernes","5G")} id='ItemFriday7' className={styles.DefaultBlock} style={{height:'30px',cursor:'pointer',border:'solid black 1px'}} ></div>
                                </td>
                                <td>
                                    <div onClick={(x) => SelectConten(x,SelectItemSaturdayHour7,setSelectItemSaturdayHour7,"sabado","6G")} id='ItemSaturday7' className={styles.DefaultBlock} style={{height:'30px',cursor:'pointer',border:'solid black 1px'}} ></div>
                                </td>
                                <td>
                                    <div onClick={(x) => SelectConten(x,SelectItemSundayHour7,setSelectItemSundayHour7,"domingo","7G")} id='ItemSunday7' className={styles.DefaultBlock} style={{height:'30px',cursor:'pointer',border:'solid black 1px'}} ></div>
                                </td>
                            </tr>
                            <tr>
                                <td>{DataHour[7]?.Schedule}</td>
                                <td>
                                    <div onClick={(x) => SelectConten(x,SelectItemMondayHour8,setSelectItemMondayHour8,"lunes","1H")} id='ItemMondayHour8' className={styles.DefaultBlock} style={{height:'30px',cursor:'pointer',border:'solid black 1px'}} ></div>
                                </td>
                                <td>
                                    <div onClick={(x) => SelectConten(x,SelectItemTuesdayHour8,setSelectItemTuesdayHour8,"martes","2H")} id='ItemTuesday8' className={styles.DefaultBlock} style={{height:'30px',cursor:'pointer',border:'solid black 1px'}} ></div>
                                </td>
                                <td>
                                    <div onClick={(x) => SelectConten(x,SelectItemWednesdayHour8,setSelectItemWednesdayHour8,"miercoles","3H")} id='ItemWednesday8' className={styles.DefaultBlock} style={{height:'30px',cursor:'pointer',border:'solid black 1px'}} ></div>
                                </td>
                                <td>
                                    <div onClick={(x) => SelectConten(x,SelectItemThursdayHour8,setSelectItemThursdayHour8,"jueves","4H")} id='ItemThursday8' className={styles.DefaultBlock} style={{height:'30px',cursor:'pointer',border:'solid black 1px'}} ></div>
                                </td>
                                <td>
                                    <div onClick={(x) => SelectConten(x,SelectItemFridayHour8,setSelectItemFridayHour8,"viernes","5H")} id='ItemFriday8' className={styles.DefaultBlock} style={{height:'30px',cursor:'pointer',border:'solid black 1px'}} ></div>
                                </td>
                                <td>
                                    <div onClick={(x) => SelectConten(x,SelectItemSaturdayHour8,setSelectItemSaturdayHour8,"sabado","6H")} id='ItemSaturday8' className={styles.DefaultBlock} style={{height:'30px',cursor:'pointer',border:'solid black 1px'}} ></div>
                                </td>
                                <td>
                                    <div onClick={(x) => SelectConten(x,SelectItemSundayHour8,setSelectItemSundayHour8,"domingo","7H")} id='ItemSunday8' className={styles.DefaultBlock} style={{height:'30px',cursor:'pointer',border:'solid black 1px'}} ></div>
                                </td>
                            </tr>
                            <tr>
                                <td>{DataHour[8]?.Schedule}</td>
                                <td>
                                    <div onClick={(x) => SelectConten(x,SelectItemMondayHour9,setSelectItemMondayHour9,"lunes","1I")} id='ItemMondayHour9' className={styles.DefaultBlock} style={{height:'30px',cursor:'pointer',border:'solid black 1px'}} ></div>
                                </td>
                                <td>
                                    <div onClick={(x) => SelectConten(x,SelectItemTuesdayHour9,setSelectItemTuesdayHour9,"martes","2I")} id='ItemTuesday9' className={styles.DefaultBlock} style={{height:'30px',cursor:'pointer',border:'solid black 1px'}} ></div>
                                </td>
                                <td>
                                    <div onClick={(x) => SelectConten(x,SelectItemWednesdayHour9,setSelectItemWednesdayHour9,"miercoles","3I")} id='ItemWednesday9' className={styles.DefaultBlock} style={{height:'30px',cursor:'pointer',border:'solid black 1px'}} ></div>
                                </td>
                                <td>
                                    <div onClick={(x) => SelectConten(x,SelectItemThursdayHour9,setSelectItemThursdayHour9,"jueves","4I")} id='ItemThursday9' className={styles.DefaultBlock} style={{height:'30px',cursor:'pointer',border:'solid black 1px'}} ></div>
                                </td>
                                <td>
                                    <div onClick={(x) => SelectConten(x,SelectItemFridayHour9,setSelectItemFridayHour9,"viernes","5I")} id='ItemFriday9' className={styles.DefaultBlock} style={{height:'30px',cursor:'pointer',border:'solid black 1px'}} ></div>
                                </td>
                                <td>
                                    <div onClick={(x) => SelectConten(x,SelectItemSaturdayHour9,setSelectItemSaturdayHour9,"sabado","6I")} id='ItemSaturday9' className={styles.DefaultBlock} style={{height:'30px',cursor:'pointer',border:'solid black 1px'}} ></div>
                                </td>
                                <td>
                                    <div onClick={(x) => SelectConten(x,SelectItemSundayHour9,setSelectItemSundayHour9,"domingo","7I")} id='ItemSunday9' className={styles.DefaultBlock} style={{height:'30px',cursor:'pointer',border:'solid black 1px'}} ></div>
                                </td>
                            </tr>
                        </Tbody>
                        </Tabla>
                    </>
                    ) : null 
                }
            </div>
        </div>
     );
}
 
index.title = `UPN Portal Docente | Disponibilidad Horaria - Portal Docentes`
export default index;