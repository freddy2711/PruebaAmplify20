/* eslint-disable no-redeclare */
/* eslint-disable no-case-declarations */
/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
/* eslint-disable no-unreachable-loop */
/* eslint-disable no-unneeded-ternary */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-key */
import Loader from '../../../../components/UI/atoms/loader/Loader'
import styles from '../../../../components/templates/cargaExamenes/resumen-examenes/enviar-examenes/EnviarExamenes.module.scss'
import { useState, useEffect } from 'react'
import Label from '../../../../components/UI/atoms/label/Label'
import {
  SET_DATAS_SELEC_COURSES_TEACHER_CE,
  SET_DATA_DOCENTE,
  USER_SESSION,
} from '../../../../consts/storageConst'
import { get } from 'local-storage'
import dynamic from 'next/dynamic'
import Button from '../../../../components/UI/atoms/button/Button'
import ViewList from '../../../../components/UI/molecules/cargaExamenes/ViewList/ViewList'
import { apiCargaExamenes } from '../../../api'
import Swal from 'sweetalert2'
import moment from 'moment'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import FileInputComponent from 'react-file-input-previews-base64'
import { catchingErrorFront } from '../../../../helpers/helpers'

const Alerta = dynamic(
  () => import('../../../../components/UI/atoms/alert/Alerts'),
  {
    ssr: false,
  }
)

const initFile = {
  name: 'A. Seleccionar exámen',
  type: '',
  size: 0,
  base64: '',
  file: null,
}

const initFile2 = {
  name: 'B. Seleccionar exámen',
  type: '',
  size: 0,
  base64: '',
  file: null,
}

const initFile3 = {
  name: 'C. Seleccionar exámen',
  type: '',
  size: 0,
  base64: '',
  file: null,
}

const initFile4 = {
  name: 'D. Seleccionar exámen',
  type: '',
  size: 0,
  base64: '',
  file: null,
}

const initFile5 = {
  name: 'E. Seleccionar exámen',
  type: '',
  size: 0,
  base64: '',
  file: null,
}

const index = () => {
  const [Loading, setloading] = useState(false)
  const [DataCoursesByTeacher, setDataCoursesByTeacher] = useState<any>([])
  const [DataClassNote, setDataClassNote] = useState<any>([])
  const [NumberOfStudents, setNumberOfStudents] = useState(0)
  const [AmountStudents, setAmountStudents] = useState(0)
  const [selectNote, setSelectNote] = useState('')
  const [seleTypeExam, setSeleTypeExam] = useState('1')
  const [printSheets, setPrintSheets] = useState('')
  const [startDate, setStartDate] = useState<any>()
  const [Semester, setSemester] = useState('')
  const [DateLimit, setDateLimit] = useState('')
  const [ValueCalPrint, setValueCalPrint] = useState({
    ValuePrint1: '.',
    ValuePrint2: '.',
    ValuePrint3: '.',
    ValuePrint4: '.',
    ValuePrint5: '.',
  })

  const [archivo, setArchivo] = useState({
    ValueFile: initFile,
    ValueFile2: initFile2,
    ValueFile3: initFile3,
    ValueFile4: initFile4,
    ValueFile5: initFile5,
  })

  const [controlsDisabled, setcontrolsDisabled] = useState({
    lstTypeExam: true,
    quantityPrint: true,
    datePrint: true,
    quantityNumber: true,
    fileUpload: true,
    btnUploadFile: true,
    lstNotes: false,
  })
  const [ViewInputExams, setViewInputExams] = useState(false)
  const DataSelect: any = JSON.parse(get(SET_DATAS_SELEC_COURSES_TEACHER_CE))
  const UserID = get(USER_SESSION)
  let response: any = []

  const ApiClassNote = () => {
    const result = apiCargaExamenes.listClassNote(DataSelect?.ClaCodigo)
    return result
  }

  const ApiSemester = () => {
    const result = apiCargaExamenes.listSemester(DataSelect?.ClaCodigo)
    return result
  }

  const ApiAmountStudents = (semesterId: any, noteId: any, ClassCode: any) => {
    const result = apiCargaExamenes.listAmountStudents(
      semesterId,
      noteId,
      ClassCode
    )
    return result
  }

  const ApiControlNotes = (
    semesterCode: any,
    notaCode: any,
    classCode: any
  ) => {

    try {
      const result = apiCargaExamenes.listControlNotes(
        semesterCode,
        notaCode,
        classCode
      )
      return result
    } catch (error:any) {
      catchingErrorFront(error.message)
      setloading(false)
    }

    
  }

  const ApiStateExams = (codeTeacher: any, noteId: any, ClassCode: any) => {

    try {
      const result = apiCargaExamenes.listStateExams(
        codeTeacher,
        noteId,
        ClassCode
      )
      return result
    } catch (error:any) {
      catchingErrorFront(error.message)
      setloading(false)
    }
  }

  const ApiActiveExams = (codeTeacher: any, noteId: any, ClassCode: any) => {

    try {
      const result = apiCargaExamenes.listActiveExam(
        codeTeacher,
        noteId,
        ClassCode
      )
      return result
    } catch (error:any) {
      catchingErrorFront(error.message)
      setloading(false)
    }
  }

  // apis

  const ddlNotasSelectedHandle = async (
    event: React.FormEvent<HTMLInputElement>
  ) => {
    setloading(true)
    const pCodeClass = DataCoursesByTeacher?.ClaCodigo
    const sem = Semester
    const NoteSelect = (event.target as HTMLInputElement).value
    setSelectNote(NoteSelect)
    const fech = await ApiControlNotes(sem, NoteSelect, pCodeClass)

    if (NoteSelect === '0') {
      setcontrolsDisabled({
        ...controlsDisabled,
      })
    } else {
      const state = await ApiStateExams(UserID, NoteSelect, pCodeClass)
      setcontrolsDisabled({
        ...controlsDisabled,
        lstNotes: true,
      })

      if (state[0]?.s_state === 'A') {
        ViewMessage(0)
      } else {
   
        const date = new Date(fech?.Fecha)
        const forDate = moment(date).format('YYYY-MM-DD')
        if (forDate === '1900-01-01') {
          setDateLimit('No se ha configurado fecha.')
        } else {
          const responseAmountStudents = await ApiAmountStudents(
            Semester,
            1,
            DataSelect?.ClaCodigo
          )
          setAmountStudents(responseAmountStudents)
          setPrintSheets('0')
          setDateLimit(forDate)
          setcontrolsDisabled({
            ...controlsDisabled,
            datePrint: false,
          })
          const ExamActivo: any = await ApiActiveExams(
            UserID,
            NoteSelect,
            pCodeClass
          )
          const ExamActivoResult = ExamActivo.length > 0 ? true : false

          if (ExamActivoResult) {
            ViewMessage(1)
          }

          setcontrolsDisabled({
            fileUpload: false,
            lstTypeExam: false,
            btnUploadFile: false,
            quantityPrint: false,
            datePrint: false,
            lstNotes: true,
            quantityNumber: false,
          })
        }
      }
    }

    setloading(false)
  }

  const SelectTypeExam = async (event: React.FormEvent<HTMLInputElement>) => {
    setloading(true)
    const TypeExamSelect = (event.target as HTMLInputElement).value
    setSeleTypeExam(TypeExamSelect)
    const pCodeClass = DataSelect?.ClaCodigo
    const responseAmountStudents = await ApiAmountStudents(
      Semester,
      TypeExamSelect,
      pCodeClass
    )
    setAmountStudents(responseAmountStudents)
    setValueCalPrint({
      ValuePrint1: '.',
      ValuePrint2: '.',
      ValuePrint3: '.',
      ValuePrint4: '.',
      ValuePrint5: '.',
    })
    setArchivo({
      ValueFile: initFile,
      ValueFile2: initFile2,
      ValueFile3: initFile3,
      ValueFile4: initFile4,
      ValueFile5: initFile5,
    })
    setloading(false)
  }

  const PrintSheets = async (event: React.FormEvent<HTMLInputElement>) => {
    const print = (event.target as HTMLInputElement).value
    setPrintSheets(print)
  }

  const handleChange = (date: any) => {
    setStartDate(date)
    return DateLimit
  }

  // metodos

  const ValiDate = () => {
    const date = new Date()
    const tomorrow = new Date()
    tomorrow.setDate(date.getDate() + 1)
    if (startDate < date) {
      return (
        <DatePicker
          dateFormat={'yyyy-MM-dd'}
          minDate={startDate === undefined ? tomorrow : startDate}
          maxDate={startDate === undefined ? date : startDate}
          className="form-control text-center"
          disabled={controlsDisabled.datePrint}
          onChange={(date) => handleChange(date)}
        />
      )
    } else {
      const today = new Date()
      const tomorrow = new Date()
      tomorrow.setDate(today.getDate() + 1)
      const dateMax = new Date(DateLimit + 'T00:00:00')
      return (
        <DatePicker
          dateFormat={'yyyy-MM-dd'}
          minDate={tomorrow}
          maxDate={DateLimit !== 'Invalid date' ? DateLimit !== '' ? dateMax : today : today}
          className="form-control text-center"
          disabled={controlsDisabled.datePrint}
          selected={startDate}
          onChange={(date) => handleChange(date)}
        />
      )
    }
  }

  const returClick = () => {
    window.location.href = '/carga-examenes/resumen-examenes'
  }

  const handlePrintCal = (conten: any) => {
    setValueCalPrint({
      ...ValueCalPrint,
      ValuePrint1: conten.target.value,
    })
  }

  const handlePrintCal2 = (conten: any) => {
    setValueCalPrint({
      ...ValueCalPrint,
      ValuePrint2: conten.target.value,
    })
  }

  const handlePrintCal3 = (conten: any) => {
    setValueCalPrint({
      ...ValueCalPrint,
      ValuePrint3: conten.target.value,
    })
  }

  const handlePrintCal4 = (conten: any) => {
    setValueCalPrint({
      ...ValueCalPrint,
      ValuePrint4: conten.target.value,
    })
  }

  const handlePrintCal5 = (conten: any) => {
    setValueCalPrint({
      ...ValueCalPrint,
      ValuePrint5: conten.target.value,
    })
  }

  const BlockInputActiveCalculation = () => {
    const cant = AmountStudents === 0 ? '' : AmountStudents
    response = []
    if (cant !== '') {
      let totalTiposExamen: number = parseInt(seleTypeExam)
      let totalAlumnos: number = AmountStudents

      for (let index = 0; index < parseInt(seleTypeExam); index++) {
        const value: number = Math.floor(totalAlumnos / totalTiposExamen)
        totalAlumnos -= value
        totalTiposExamen -= 1
        response.push(value)
      }
    }

    switch (seleTypeExam) {
      case '1':
        return (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              margin: '1%',
              width: '15%',
            }}
          >
            <span>A.</span>
            <input
              min={0}
              className="form-control"
              type="number"
              disabled={controlsDisabled.quantityNumber}
              onChange={(e: any) => handlePrintCal(e)}
              value={
                ValueCalPrint.ValuePrint1 === '.'
                  ? response[0] === undefined
                    ? ''
                    : response[0]
                  : ValueCalPrint.ValuePrint1
              }
              name=""
              id=""
            />
          </div>
        )
      case '2':
        return (
          <>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                margin: '1%',
                width: '15%',
              }}
            >
              <span>A.</span>
              <input
                min={0}
                className="form-control"
                type="number"
                disabled={controlsDisabled.quantityNumber}
                onChange={(e: any) => handlePrintCal(e)}
                value={
                  ValueCalPrint.ValuePrint1 === '.'
                    ? response[0] === undefined
                      ? ''
                      : response[0]
                    : ValueCalPrint.ValuePrint1
                }
                name=""
                id=""
              />
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                margin: '1%',
                width: '15%',
              }}
            >
              <span>B.</span>
              <input
                min={0}
                className="form-control"
                type="number"
                disabled={controlsDisabled.quantityNumber}
                onChange={(e: any) => handlePrintCal2(e)}
                value={
                  ValueCalPrint.ValuePrint2 === '.'
                    ? response[1] === undefined
                      ? ''
                      : response[1]
                    : ValueCalPrint.ValuePrint2
                }
                name=""
                id=""
              />
            </div>
          </>
        )
      case '3':
        return (
          <>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                margin: '1%',
                width: '15%',
              }}
            >
              <span>A.</span>
              <input
                min={0}
                className="form-control"
                type="number"
                disabled={controlsDisabled.quantityNumber}
                onChange={(e: any) => handlePrintCal(e)}
                value={
                  ValueCalPrint.ValuePrint1 === '.'
                    ? response[0] === undefined
                      ? ''
                      : response[0]
                    : ValueCalPrint.ValuePrint1
                }
                name=""
                id=""
              />
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                margin: '1%',
                width: '15%',
              }}
            >
              <span>B.</span>
              <input
                min={0}
                className="form-control"
                type="number"
                disabled={controlsDisabled.quantityNumber}
                onChange={(e: any) => handlePrintCal2(e)}
                value={
                  ValueCalPrint.ValuePrint2 === '.'
                    ? response[1] === undefined
                      ? ''
                      : response[1]
                    : ValueCalPrint.ValuePrint2
                }
                name=""
                id=""
              />
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                margin: '1%',
                width: '15%',
              }}
            >
              <span>C.</span>
              <input
                min={0}
                className="form-control"
                type="number"
                disabled={controlsDisabled.quantityNumber}
                onChange={(e: any) => handlePrintCal3(e)}
                value={
                  ValueCalPrint.ValuePrint3 === '.'
                    ? response[2] === undefined
                      ? ''
                      : response[2]
                    : ValueCalPrint.ValuePrint3
                }
                name=""
                id=""
              />
            </div>
          </>
        )
      case '4':
        return (
          <>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                margin: '1%',
                width: '15%',
              }}
            >
              <span>A.</span>
              <input
                min={0}
                className="form-control"
                type="number"
                disabled={controlsDisabled.quantityNumber}
                onChange={(e: any) => handlePrintCal(e)}
                value={
                  ValueCalPrint.ValuePrint1 === '.'
                    ? response[0] === undefined
                      ? ''
                      : response[0]
                    : ValueCalPrint.ValuePrint1
                }
                name=""
                id=""
              />
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                margin: '1%',
                width: '15%',
              }}
            >
              <span>B.</span>
              <input
                min={0}
                className="form-control"
                type="number"
                disabled={controlsDisabled.quantityNumber}
                onChange={(e: any) => handlePrintCal2(e)}
                value={
                  ValueCalPrint.ValuePrint2 === '.'
                    ? response[1] === undefined
                      ? ''
                      : response[1]
                    : ValueCalPrint.ValuePrint2
                }
                name=""
                id=""
              />
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                margin: '1%',
                width: '15%',
              }}
            >
              <span>C.</span>
              <input
                min={0}
                className="form-control"
                type="number"
                disabled={controlsDisabled.quantityNumber}
                onChange={(e: any) => handlePrintCal3(e)}
                value={
                  ValueCalPrint.ValuePrint3 === '.'
                    ? response[2] === undefined
                      ? ''
                      : response[2]
                    : ValueCalPrint.ValuePrint3
                }
                name=""
                id=""
              />
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                margin: '1%',
                width: '15%',
              }}
            >
              <span>D.</span>
              <input
                min={0}
                className="form-control"
                type="number"
                disabled={controlsDisabled.quantityNumber}
                onChange={(e: any) => handlePrintCal4(e)}
                value={
                  ValueCalPrint.ValuePrint4 === '.'
                    ? response[3] === undefined
                      ? ''
                      : response[3]
                    : ValueCalPrint.ValuePrint4
                }
                name=""
                id=""
              />
            </div>
          </>
        )
      case '5':
        return (
          <>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                margin: '1%',
                width: '15%',
              }}
            >
              <span>A.</span>
              <input
                min={0}
                className="form-control"
                type="number"
                disabled={controlsDisabled.quantityNumber}
                onChange={(e: any) => handlePrintCal(e)}
                value={
                  ValueCalPrint.ValuePrint1 === '.'
                    ? response[0] === undefined
                      ? ''
                      : response[0]
                    : ValueCalPrint.ValuePrint1
                }
                name=""
                id=""
              />
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                margin: '1%',
                width: '15%',
              }}
            >
              <span>B.</span>
              <input
                min={0}
                className="form-control"
                type="number"
                disabled={controlsDisabled.quantityNumber}
                onChange={(e: any) => handlePrintCal2(e)}
                value={
                  ValueCalPrint.ValuePrint2 === '.'
                    ? response[1] === undefined
                      ? ''
                      : response[1]
                    : ValueCalPrint.ValuePrint2
                }
                name=""
                id=""
              />
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                margin: '1%',
                width: '15%',
              }}
            >
              <span>C.</span>
              <input
                min={0}
                className="form-control"
                type="number"
                disabled={controlsDisabled.quantityNumber}
                onChange={(e: any) => handlePrintCal3(e)}
                value={
                  ValueCalPrint.ValuePrint3 === '.'
                    ? response[2] === undefined
                      ? ''
                      : response[2]
                    : ValueCalPrint.ValuePrint3
                }
                name=""
                id=""
              />
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                margin: '1%',
                width: '15%',
              }}
            >
              <span>D.</span>
              <input
                min={0}
                className="form-control"
                type="number"
                disabled={controlsDisabled.quantityNumber}
                onChange={(e: any) => handlePrintCal4(e)}
                value={
                  ValueCalPrint.ValuePrint4 === '.'
                    ? response[3] === undefined
                      ? ''
                      : response[3]
                    : ValueCalPrint.ValuePrint4
                }
                name=""
                id=""
              />
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                margin: '1%',
                width: '15%',
              }}
            >
              <span>E.</span>
              <input
                min={0}
                className="form-control"
                type="number"
                disabled={controlsDisabled.quantityNumber}
                onChange={(e: any) => handlePrintCal5(e)}
                value={
                  ValueCalPrint.ValuePrint5 === '.'
                    ? response[4] === undefined
                      ? ''
                      : response[4]
                    : ValueCalPrint.ValuePrint5
                }
                name=""
                id=""
              />
            </div>
          </>
        )

      default:
        break
    }
  }

  const validFile = (item: any, tipoExamen: any) => {
    let resp = ''

    const typeValids = ['pdf']

    const { size, name } = item

    const type = name.substring(name.lastIndexOf('.') + 1, name.length)

    if (size <= 20000000) {
      if (typeValids.includes(type)) {
        resp = 'OK'
      } else {
        resp = `"Archivo inválido para tipo de exámen ${tipoExamen} .Por favor cargue un archivo con extensión: ${typeValids.join(
          ','
        )}`
      }
    } else {
      resp = `Archivo inválido para tipo de exámen ${tipoExamen} .Por favor cargue un archivo que peso como maximo 2MB.`
    }
    return resp
  }

  const upload = async (obj: any, nameFile: any) => {
    obj.usuario = UserID
    obj.name = nameFile

    try {
      const resp = await apiCargaExamenes.upload(obj)
      return resp
    } catch (error) {
      console.log(error)
    }
  }

  const saveAdjunto = async (
    ClassCode: any,
    noteId: any,
    UserId: any,
    NameFile: any,
    DatePrint: any,
    NameOriginal: any,
    NumberTypeExam: any,
    CantTypeExam: any,
    NameFile2: any,
    NameOriginal2: any,
    CantTypeExam2: any,
    NameFile3: any,
    NameOriginal3: any,
    CantTypeExam3: any,
    NameFile4: any,
    NameOriginal4: any,
    CantTypeExam4: any,
    NameFile5: any,
    NameOriginal5: any,
    CantTypeExam5: any,
    CantAdd: any
  ) => {
    const obj = {
      s_cla_codigo: ClassCode,
      n_nota_id: noteId,
      s_usuario: UserId,
      s_nombre_archivo: NameFile,
      s_ruta: process.env.NEXT_PUBLIC_ROUTE,
      d_fecha_impresion: DatePrint,
      s_name_original_name: NameOriginal,
      s_numero_TipoExamenes: NumberTypeExam,
      s_cantidad_impresion: CantTypeExam,
      s_nombre_archivo2: NameFile2,
      s_name_original_name2: NameOriginal2,
      s_cantidad_impresion2: CantTypeExam2,
      s_nombre_archivo3: NameFile3,
      s_name_original_name3: NameOriginal3,
      s_cantidad_impresion3: CantTypeExam3,
      s_nombre_archivo4: NameFile4,
      s_name_original_name4: NameOriginal4,
      s_cantidad_impresion4: CantTypeExam4,
      s_nombre_archivo5: NameFile5,
      s_name_original_name5: NameOriginal5,
      s_cantidad_impresion5: CantTypeExam5,
      s_cantidad_hojas_adicionales: CantAdd,
    }

    try {
      const resp = await apiCargaExamenes.SaveAdjuntoExam(obj)
      return resp
    } catch (error) {
      console.log(error)
    }
  }

  const BloackInputActiveFile = () => {
    switch (seleTypeExam) {
      case '1':
        return (
          <div>
            <p style={{ margin: '0' }}>Seleccione su(s) archivo(s):</p>
            <FileInputComponent
              labelText={archivo.ValueFile.name}
              multiple={false}
              imagePreview={false}
              callbackFunction={(fileArr: any) => {
                setArchivo({
                  ...archivo,
                  ValueFile: fileArr,
                })
              }}
              buttonComponent={
                <button
                  disabled={controlsDisabled.fileUpload}
                  type="button"
                  className="btn btn-primary"
                  style={{
                    borderRadius: '0 0.25rem 0.25rem 0',
                  }}
                >
                  Elegir
                </button>
              }
              labelStyle={{
                fontSize: 16,
                color: 'rgba(0, 0, 0, 0.298039)',
                padding: '0.375rem 0.75rem',
                border: '1px solid #dee2e6',
                borderRadius: '0.25rem 0 0 0.25rem',
                minHeight: '38px',
                verticalAlign: 'middle',
                lineHeight: '1.5',
                width: '70%',
              }}
            />
          </div>
        )
      case '2':
        return (
          <>
            <div>
              <p style={{ margin: '0' }}>Seleccione su(s) archivo(s):</p>
              <FileInputComponent
                labelText={archivo.ValueFile.name}
                multiple={false}
                imagePreview={false}
                callbackFunction={(fileArr: any) => {
                  setArchivo({
                    ...archivo,
                    ValueFile: fileArr,
                  })
                }}
                buttonComponent={
                  <button
                    disabled={controlsDisabled.fileUpload}
                    type="button"
                    className="btn btn-primary"
                    style={{
                      borderRadius: '0 0.25rem 0.25rem 0',
                    }}
                  >
                    Elegir
                  </button>
                }
                labelStyle={{
                  fontSize: 16,
                  color: 'rgba(0, 0, 0, 0.298039)',
                  padding: '0.375rem 0.75rem',
                  border: '1px solid #dee2e6',
                  borderRadius: '0.25rem 0 0 0.25rem',
                  minHeight: '38px',
                  verticalAlign: 'middle',
                  lineHeight: '1.5',
                  width: '70%',
                }}
              />
            </div>
            <div>
              <p style={{ margin: '5px 0 0 0' }}>
                Seleccione su(s) archivo(s):
              </p>
              <FileInputComponent
                labelText={archivo.ValueFile2.name}
                multiple={false}
                imagePreview={false}
                callbackFunction={(fileArr: any) => {
                  setArchivo({
                    ...archivo,
                    ValueFile2: fileArr,
                  })
                }}
                buttonComponent={
                  <button
                    disabled={controlsDisabled.fileUpload}
                    type="button"
                    className="btn btn-primary"
                    style={{
                      borderRadius: '0 0.25rem 0.25rem 0',
                    }}
                  >
                    Elegir
                  </button>
                }
                labelStyle={{
                  fontSize: 16,
                  color: 'rgba(0, 0, 0, 0.298039)',
                  padding: '0.375rem 0.75rem',
                  border: '1px solid #dee2e6',
                  borderRadius: '0.25rem 0 0 0.25rem',
                  minHeight: '38px',
                  verticalAlign: 'middle',
                  lineHeight: '1.5',
                  width: '70%',
                }}
              />
            </div>
          </>
        )
      case '3':
        return (
          <>
            <div>
              <p style={{ margin: '0' }}>Seleccione su(s) archivo(s):</p>
              <FileInputComponent
                labelText={archivo.ValueFile.name}
                multiple={false}
                imagePreview={false}
                callbackFunction={(fileArr: any) => {
                  setArchivo({
                    ...archivo,
                    ValueFile: fileArr,
                  })
                }}
                buttonComponent={
                  <button
                    disabled={controlsDisabled.fileUpload}
                    type="button"
                    className="btn btn-primary"
                    style={{
                      borderRadius: '0 0.25rem 0.25rem 0',
                    }}
                  >
                    Elegir
                  </button>
                }
                labelStyle={{
                  fontSize: 16,
                  color: 'rgba(0, 0, 0, 0.298039)',
                  padding: '0.375rem 0.75rem',
                  border: '1px solid #dee2e6',
                  borderRadius: '0.25rem 0 0 0.25rem',
                  minHeight: '38px',
                  verticalAlign: 'middle',
                  lineHeight: '1.5',
                  width: '70%',
                }}
              />
            </div>
            <div>
              <p style={{ margin: '5px 0 0 0' }}>
                Seleccione su(s) archivo(s):
              </p>
              <FileInputComponent
                labelText={archivo.ValueFile2.name}
                multiple={false}
                imagePreview={false}
                callbackFunction={(fileArr: any) => {
                  setArchivo({
                    ...archivo,
                    ValueFile2: fileArr,
                  })
                }}
                buttonComponent={
                  <button
                    disabled={controlsDisabled.fileUpload}
                    type="button"
                    className="btn btn-primary"
                    style={{
                      borderRadius: '0 0.25rem 0.25rem 0',
                    }}
                  >
                    Elegir
                  </button>
                }
                labelStyle={{
                  fontSize: 16,
                  color: 'rgba(0, 0, 0, 0.298039)',
                  padding: '0.375rem 0.75rem',
                  border: '1px solid #dee2e6',
                  borderRadius: '0.25rem 0 0 0.25rem',
                  minHeight: '38px',
                  verticalAlign: 'middle',
                  lineHeight: '1.5',
                  width: '70%',
                }}
              />
            </div>
            <div>
              <p style={{ margin: '5px 0 0 0' }}>
                Seleccione su(s) archivo(s):
              </p>
              <FileInputComponent
                labelText={archivo.ValueFile3.name}
                multiple={false}
                imagePreview={false}
                callbackFunction={(fileArr: any) => {
                  setArchivo({
                    ...archivo,
                    ValueFile3: fileArr,
                  })
                }}
                buttonComponent={
                  <button
                    disabled={controlsDisabled.fileUpload}
                    type="button"
                    className="btn btn-primary"
                    style={{
                      borderRadius: '0 0.25rem 0.25rem 0',
                    }}
                  >
                    Elegir
                  </button>
                }
                labelStyle={{
                  fontSize: 16,
                  color: 'rgba(0, 0, 0, 0.298039)',
                  padding: '0.375rem 0.75rem',
                  border: '1px solid #dee2e6',
                  borderRadius: '0.25rem 0 0 0.25rem',
                  minHeight: '38px',
                  verticalAlign: 'middle',
                  lineHeight: '1.5',
                  width: '70%',
                }}
              />
            </div>
          </>
        )
      case '4':
        return (
          <>
            <div>
              <p style={{ margin: '0' }}>Seleccione su(s) archivo(s):</p>
              <FileInputComponent
                labelText={archivo.ValueFile.name}
                multiple={false}
                imagePreview={false}
                callbackFunction={(fileArr: any) => {
                  setArchivo({
                    ...archivo,
                    ValueFile: fileArr,
                  })
                }}
                buttonComponent={
                  <button
                    disabled={controlsDisabled.fileUpload}
                    type="button"
                    className="btn btn-primary"
                    style={{
                      borderRadius: '0 0.25rem 0.25rem 0',
                    }}
                  >
                    Elegir
                  </button>
                }
                labelStyle={{
                  fontSize: 16,
                  color: 'rgba(0, 0, 0, 0.298039)',
                  padding: '0.375rem 0.75rem',
                  border: '1px solid #dee2e6',
                  borderRadius: '0.25rem 0 0 0.25rem',
                  minHeight: '38px',
                  verticalAlign: 'middle',
                  lineHeight: '1.5',
                  width: '70%',
                }}
              />
            </div>
            <div>
              <p style={{ margin: '5px 0 0 0' }}>
                Seleccione su(s) archivo(s):
              </p>
              <FileInputComponent
                labelText={archivo.ValueFile2.name}
                multiple={false}
                imagePreview={false}
                callbackFunction={(fileArr: any) => {
                  setArchivo({
                    ...archivo,
                    ValueFile2: fileArr,
                  })
                }}
                buttonComponent={
                  <button
                    disabled={controlsDisabled.fileUpload}
                    type="button"
                    className="btn btn-primary"
                    style={{
                      borderRadius: '0 0.25rem 0.25rem 0',
                    }}
                  >
                    Elegir
                  </button>
                }
                labelStyle={{
                  fontSize: 16,
                  color: 'rgba(0, 0, 0, 0.298039)',
                  padding: '0.375rem 0.75rem',
                  border: '1px solid #dee2e6',
                  borderRadius: '0.25rem 0 0 0.25rem',
                  minHeight: '38px',
                  verticalAlign: 'middle',
                  lineHeight: '1.5',
                  width: '70%',
                }}
              />
            </div>
            <div>
              <p style={{ margin: '5px 0 0 0' }}>
                Seleccione su(s) archivo(s):
              </p>
              <FileInputComponent
                labelText={archivo.ValueFile3.name}
                multiple={false}
                imagePreview={false}
                callbackFunction={(fileArr: any) => {
                  setArchivo({
                    ...archivo,
                    ValueFile3: fileArr,
                  })
                }}
                buttonComponent={
                  <button
                    disabled={controlsDisabled.fileUpload}
                    type="button"
                    className="btn btn-primary"
                    style={{
                      borderRadius: '0 0.25rem 0.25rem 0',
                    }}
                  >
                    Elegir
                  </button>
                }
                labelStyle={{
                  fontSize: 16,
                  color: 'rgba(0, 0, 0, 0.298039)',
                  padding: '0.375rem 0.75rem',
                  border: '1px solid #dee2e6',
                  borderRadius: '0.25rem 0 0 0.25rem',
                  minHeight: '38px',
                  verticalAlign: 'middle',
                  lineHeight: '1.5',
                  width: '70%',
                }}
              />
            </div>
            <div>
              <p style={{ margin: '5px 0 0 0' }}>
                Seleccione su(s) archivo(s):
              </p>
              <FileInputComponent
                labelText={archivo.ValueFile4.name}
                multiple={false}
                imagePreview={false}
                callbackFunction={(fileArr: any) => {
                  setArchivo({
                    ...archivo,
                    ValueFile4: fileArr,
                  })
                }}
                buttonComponent={
                  <button
                    disabled={controlsDisabled.fileUpload}
                    type="button"
                    className="btn btn-primary"
                    style={{
                      borderRadius: '0 0.25rem 0.25rem 0',
                    }}
                  >
                    Elegir
                  </button>
                }
                labelStyle={{
                  fontSize: 16,
                  color: 'rgba(0, 0, 0, 0.298039)',
                  padding: '0.375rem 0.75rem',
                  border: '1px solid #dee2e6',
                  borderRadius: '0.25rem 0 0 0.25rem',
                  minHeight: '38px',
                  verticalAlign: 'middle',
                  lineHeight: '1.5',
                  width: '70%',
                }}
              />
            </div>
          </>
        )
      case '5':
        return (
          <>
            <div>
              <p style={{ margin: '0' }}>Seleccione su(s) archivo(s):</p>
              <FileInputComponent
                labelText={archivo.ValueFile.name}
                multiple={false}
                imagePreview={false}
                callbackFunction={(fileArr: any) => {
                  setArchivo({
                    ...archivo,
                    ValueFile: fileArr,
                  })
                }}
                buttonComponent={
                  <button
                    disabled={controlsDisabled.fileUpload}
                    type="button"
                    className="btn btn-primary"
                    style={{
                      borderRadius: '0 0.25rem 0.25rem 0',
                    }}
                  >
                    Elegir
                  </button>
                }
                labelStyle={{
                  fontSize: 16,
                  color: 'rgba(0, 0, 0, 0.298039)',
                  padding: '0.375rem 0.75rem',
                  border: '1px solid #dee2e6',
                  borderRadius: '0.25rem 0 0 0.25rem',
                  minHeight: '38px',
                  verticalAlign: 'middle',
                  lineHeight: '1.5',
                  width: '70%',
                }}
              />
            </div>
            <div>
              <p style={{ margin: '0' }}>Seleccione su(s) archivo(s):</p>
              <FileInputComponent
                labelText={archivo.ValueFile2.name}
                multiple={false}
                imagePreview={false}
                callbackFunction={(fileArr: any) => {
                  setArchivo({
                    ...archivo,
                    ValueFile2: fileArr,
                  })
                }}
                buttonComponent={
                  <button
                    disabled={controlsDisabled.fileUpload}
                    type="button"
                    className="btn btn-primary"
                    style={{
                      borderRadius: '0 0.25rem 0.25rem 0',
                    }}
                  >
                    Elegir
                  </button>
                }
                labelStyle={{
                  fontSize: 16,
                  color: 'rgba(0, 0, 0, 0.298039)',
                  padding: '0.375rem 0.75rem',
                  border: '1px solid #dee2e6',
                  borderRadius: '0.25rem 0 0 0.25rem',
                  minHeight: '38px',
                  verticalAlign: 'middle',
                  lineHeight: '1.5',
                  width: '70%',
                }}
              />
            </div>
            <div>
              <p style={{ margin: '5px 0 0 0' }}>
                Seleccione su(s) archivo(s):
              </p>
              <FileInputComponent
                labelText={archivo.ValueFile3.name}
                multiple={false}
                imagePreview={false}
                callbackFunction={(fileArr: any) => {
                  setArchivo({
                    ...archivo,
                    ValueFile3: fileArr,
                  })
                }}
                buttonComponent={
                  <button
                    disabled={controlsDisabled.fileUpload}
                    type="button"
                    className="btn btn-primary"
                    style={{
                      borderRadius: '0 0.25rem 0.25rem 0',
                    }}
                  >
                    Elegir
                  </button>
                }
                labelStyle={{
                  fontSize: 16,
                  color: 'rgba(0, 0, 0, 0.298039)',
                  padding: '0.375rem 0.75rem',
                  border: '1px solid #dee2e6',
                  borderRadius: '0.25rem 0 0 0.25rem',
                  minHeight: '38px',
                  verticalAlign: 'middle',
                  lineHeight: '1.5',
                  width: '70%',
                }}
              />
            </div>
            <div>
              <p style={{ margin: '5px 0 0 0' }}>
                Seleccione su(s) archivo(s):
              </p>
              <FileInputComponent
                labelText={archivo.ValueFile4.name}
                multiple={false}
                imagePreview={false}
                callbackFunction={(fileArr: any) => {
                  setArchivo({
                    ...archivo,
                    ValueFile4: fileArr,
                  })
                }}
                buttonComponent={
                  <button
                    disabled={controlsDisabled.fileUpload}
                    type="button"
                    className="btn btn-primary"
                    style={{
                      borderRadius: '0 0.25rem 0.25rem 0',
                    }}
                  >
                    Elegir
                  </button>
                }
                labelStyle={{
                  fontSize: 16,
                  color: 'rgba(0, 0, 0, 0.298039)',
                  padding: '0.375rem 0.75rem',
                  border: '1px solid #dee2e6',
                  borderRadius: '0.25rem 0 0 0.25rem',
                  minHeight: '38px',
                  verticalAlign: 'middle',
                  lineHeight: '1.5',
                  width: '70%',
                }}
              />
            </div>
            <div>
              <p style={{ margin: '5px 0 0 0' }}>
                Seleccione su(s) archivo(s):
              </p>
              <FileInputComponent
                labelText={archivo.ValueFile5.name}
                multiple={false}
                imagePreview={false}
                callbackFunction={(fileArr: any) => {
                  setArchivo({
                    ...archivo,
                    ValueFile5: fileArr,
                  })
                }}
                buttonComponent={
                  <button
                    disabled={controlsDisabled.fileUpload}
                    type="button"
                    className="btn btn-primary"
                    style={{
                      borderRadius: '0 0.25rem 0.25rem 0',
                    }}
                  >
                    Elegir
                  </button>
                }
                labelStyle={{
                  fontSize: 16,
                  color: 'rgba(0, 0, 0, 0.298039)',
                  padding: '0.375rem 0.75rem',
                  border: '1px solid #dee2e6',
                  borderRadius: '0.25rem 0 0 0.25rem',
                  minHeight: '38px',
                  verticalAlign: 'middle',
                  lineHeight: '1.5',
                  width: '70%',
                }}
              />
            </div>
          </>
        )

      default:
        break
    }
  }

  const LoadExam = async () => {
    setloading(true)
    const nota: string = selectNote
    const sNumeroTipoExamen = seleTypeExam
    const sHojasAdicionales = printSheets
    const dFechaImpresion = startDate
    let sCantidadTipoExamen1 =
      ValueCalPrint.ValuePrint1 === '.'
        ? response[0] === undefined
          ? AmountStudents
          : response[0]
        : ValueCalPrint.ValuePrint1
    let sCantidadTipoExamen2 =
      ValueCalPrint.ValuePrint2 === '.'
        ? response[1] === undefined
          ? ValueCalPrint.ValuePrint2
          : response[1]
        : ValueCalPrint.ValuePrint2
    let sCantidadTipoExamen3 =
      ValueCalPrint.ValuePrint3 === '.'
        ? response[2] === undefined
          ? ValueCalPrint.ValuePrint3
          : response[2]
        : ValueCalPrint.ValuePrint3
    let sCantidadTipoExamen4 =
      ValueCalPrint.ValuePrint4 === '.'
        ? response[3] === undefined
          ? ValueCalPrint.ValuePrint4
          : response[3]
        : ValueCalPrint.ValuePrint4
    let sCantidadTipoExamen5 =
      ValueCalPrint.ValuePrint5 === '.'
        ? response[4] === undefined
          ? ValueCalPrint.ValuePrint5
          : response[4]
        : ValueCalPrint.ValuePrint5
    const SnameOriginalFile1 = archivo.ValueFile
    const SnameOriginalFile2 = archivo.ValueFile2
    const SnameOriginalFile3 = archivo.ValueFile3
    const SnameOriginalFile4 = archivo.ValueFile4
    const SnameOriginalFile5 = archivo.ValueFile5

    if (nota === '0' || nota === '') {
      ViewMessage(4, 'Seleccione la nota para la carga de exámen.')
    } else {
      if (dFechaImpresion === undefined || dFechaImpresion === null) {
        ViewMessage(4, 'Ingrese la fecha a imprimir exámen.')
      } else {
        sCantidadTipoExamen1 =
          sCantidadTipoExamen1 === '.' ? '' : sCantidadTipoExamen1
        sCantidadTipoExamen2 =
          sCantidadTipoExamen2 === '.' ? '' : sCantidadTipoExamen2
        sCantidadTipoExamen3 =
          sCantidadTipoExamen3 === '.' ? '' : sCantidadTipoExamen3
        sCantidadTipoExamen4 =
          sCantidadTipoExamen4 === '.' ? '' : sCantidadTipoExamen4
        sCantidadTipoExamen5 =
          sCantidadTipoExamen5 === '.' ? '' : sCantidadTipoExamen5
        const msgCante = EsIngresoValidoDeExamenesPorTipo(
          sNumeroTipoExamen,
          sCantidadTipoExamen1,
          sCantidadTipoExamen2,
          sCantidadTipoExamen3,
          sCantidadTipoExamen4,
          sCantidadTipoExamen5
        )

        if (msgCante !== 'OK') {
          ViewMessage(4, msgCante)
        } else {
          const cantidadAlumnos = AmountStudents
          const response = EsCantidadValidaDeExamenesPorTipo(
            sNumeroTipoExamen,
            cantidadAlumnos,
            selectNote
          )
          if (!response) {
            ViewMessage(
              4,
              `La sumatoria de los tipos de exámenes no debe exceder de la cantidad de alumnos habilitados, que es de ${cantidadAlumnos}`
            )
          } else {
            let msgInvaliFile = ''

            if (sNumeroTipoExamen === '1') {
              if (SnameOriginalFile1.file !== null) {
                msgInvaliFile = validFile(SnameOriginalFile1, 'A')
              } else {
                msgInvaliFile = 'Importe la evaluación tipo A.'
              }
            } else if (sNumeroTipoExamen === '2') {
              if (
                SnameOriginalFile1.file !== null &&
                SnameOriginalFile2.file !== null
              ) {
                msgInvaliFile = validFile(SnameOriginalFile1, 'A')
                if (msgInvaliFile === 'OK') {
                  msgInvaliFile = validFile(SnameOriginalFile2, 'B')
                }
              } else {
                msgInvaliFile =
                  'Debe importar todos los tipos de exámen: A y B.'
              }
            } else if (sNumeroTipoExamen === '3') {
              if (
                SnameOriginalFile1.file !== null &&
                SnameOriginalFile2.file !== null &&
                SnameOriginalFile3.file !== null
              ) {
                msgInvaliFile = validFile(SnameOriginalFile1, 'A')
                if (msgInvaliFile === 'OK') {
                  msgInvaliFile = validFile(SnameOriginalFile2, 'B')
                  if (msgInvaliFile === 'OK') {
                    msgInvaliFile = validFile(SnameOriginalFile3, 'C')
                  }
                }
              } else {
                msgInvaliFile =
                  'Debe importar todos los tipos de exámen: A, B y C.'
              }
            } else if (sNumeroTipoExamen === '4') {
              if (
                SnameOriginalFile1.file !== null &&
                SnameOriginalFile2.file !== null &&
                SnameOriginalFile3.file !== null &&
                SnameOriginalFile4.file !== null
              ) {
                msgInvaliFile = validFile(SnameOriginalFile1, 'A')
                if (msgInvaliFile === 'OK') {
                  msgInvaliFile = validFile(SnameOriginalFile2, 'B')
                  if (msgInvaliFile === 'OK') {
                    msgInvaliFile = validFile(SnameOriginalFile3, 'C')
                    if (msgInvaliFile === 'OK') {
                      msgInvaliFile = validFile(SnameOriginalFile4, 'D')
                    }
                  }
                }
              } else {
                msgInvaliFile =
                  'Debe importar todos los tipos de exámen: A, B, C y D.'
              }
            } else if (sNumeroTipoExamen === '5') {
              if (
                SnameOriginalFile1.file !== null &&
                SnameOriginalFile2.file !== null &&
                SnameOriginalFile3.file !== null &&
                SnameOriginalFile4.file !== null &&
                SnameOriginalFile5.file !== null
              ) {
                msgInvaliFile = validFile(SnameOriginalFile1, 'A')
                if (msgInvaliFile === 'OK') {
                  msgInvaliFile = validFile(SnameOriginalFile2, 'B')
                  if (msgInvaliFile === 'OK') {
                    msgInvaliFile = validFile(SnameOriginalFile3, 'C')
                    if (msgInvaliFile === 'OK') {
                      msgInvaliFile = validFile(SnameOriginalFile4, 'D')
                      if (msgInvaliFile === 'OK') {
                        msgInvaliFile = validFile(SnameOriginalFile5, 'E')
                      }
                    }
                  }
                }
              } else {
                msgInvaliFile =
                  'Debe importar todos los tipos de exámen: A, B, C y D.'
              }
            }

            if (msgInvaliFile !== 'OK') {
              ViewMessage(4, msgInvaliFile)
            } else {
              const sclase = DataCoursesByTeacher?.ClaCodigo
              const DUENO:any = get(SET_DATA_DOCENTE)
              const sUsuario = DUENO?.userName

              const newNameFile =
                sclase + '_' + nota + '_' + sUsuario + '_A.pdf'
              const newNameFile2 =
                sclase + '_' + nota + '_' + sUsuario + '_B.pdf'
              const newNameFile3 =
                sclase + '_' + nota + '_' + sUsuario + '_C.pdf'
              const newNameFile4 =
                sclase + '_' + nota + '_' + sUsuario + '_D.pdf'
              const newNameFile5 =
                sclase + '_' + nota + '_' + sUsuario + '_E.pdf'

              switch (sNumeroTipoExamen) {
                case '1':
                  await upload(SnameOriginalFile1, newNameFile)
                  break
                case '2':
                  await upload(SnameOriginalFile1, newNameFile)
                  await upload(SnameOriginalFile2, newNameFile2)
                  break
                case '3':
                  await upload(SnameOriginalFile1, newNameFile)
                  await upload(SnameOriginalFile2, newNameFile2)
                  await upload(SnameOriginalFile3, newNameFile3)
                  break
                case '4':
                  await upload(SnameOriginalFile1, newNameFile)
                  await upload(SnameOriginalFile2, newNameFile2)
                  await upload(SnameOriginalFile3, newNameFile3)
                  await upload(SnameOriginalFile4, newNameFile4)
                  break
                case '5':
                  await upload(SnameOriginalFile1, newNameFile)
                  await upload(SnameOriginalFile2, newNameFile2)
                  await upload(SnameOriginalFile3, newNameFile3)
                  await upload(SnameOriginalFile4, newNameFile4)
                  await upload(SnameOriginalFile5, newNameFile5)
                  break
                default:
                  break
              }

              const valiFile =
                SnameOriginalFile1.file === null ? '' : SnameOriginalFile1.name
              const valiFile2 =
                SnameOriginalFile2.file === null ? '' : SnameOriginalFile2.name
              const valiFile3 =
                SnameOriginalFile3.file === null ? '' : SnameOriginalFile3.name
              const valiFile4 =
                SnameOriginalFile4.file === null ? '' : SnameOriginalFile4.name
              const valiFile5 =
                SnameOriginalFile5.file === null ? '' : SnameOriginalFile5.name

              const response = await saveAdjunto(
                sclase,
                nota,
                sUsuario,
                newNameFile,
                dFechaImpresion,
                valiFile,
                parseInt(sNumeroTipoExamen),
                sCantidadTipoExamen1,
                newNameFile2,
                valiFile2,
                sCantidadTipoExamen2,
                newNameFile3,
                valiFile3,
                sCantidadTipoExamen3,
                newNameFile4,
                valiFile4,
                sCantidadTipoExamen4,
                newNameFile5,
                valiFile5,
                sCantidadTipoExamen5,
                sHojasAdicionales
              )
              
              ViewMessage(5)
              ControlsDisabled()
              Cancel()
            }
          }
        }
      }
    }

    setloading(false)
  }

  const EsCantidadValidaDeExamenesPorTipo = (
    sNumeroTipoExamen: any,
    cantidadAlumnos: any,
    tipoNota: any
  ) => {
    let SumCanti = 0
    if (
      ValueCalPrint.ValuePrint1 === '.' &&
      ValueCalPrint.ValuePrint2 === '.' &&
      ValueCalPrint.ValuePrint3 === '.' &&
      ValueCalPrint.ValuePrint4 === '.' &&
      ValueCalPrint.ValuePrint5 === '.'
    ) {
      SumCanti = AmountStudents
    } else {
      const num1 =
        ValueCalPrint.ValuePrint1 === '.'
          ? response[0] === undefined
            ? 0
            : parseInt(response[0])
          : parseInt(ValueCalPrint.ValuePrint1)
      const num2 =
        ValueCalPrint.ValuePrint2 === '.'
          ? response[1] === undefined
            ? 0
            : parseInt(response[1])
          : parseInt(ValueCalPrint.ValuePrint2)
      const num3 =
        ValueCalPrint.ValuePrint3 === '.'
          ? response[2] === undefined
            ? 0
            : parseInt(response[2])
          : parseInt(ValueCalPrint.ValuePrint3)
      const num4 =
        ValueCalPrint.ValuePrint4 === '.'
          ? response[3] === undefined
            ? 0
            : parseInt(response[3])
          : parseInt(ValueCalPrint.ValuePrint4)
      const num5 =
        ValueCalPrint.ValuePrint5 === '.'
          ? response[4] === undefined
            ? 0
            : parseInt(response[4])
          : parseInt(ValueCalPrint.ValuePrint5)
      SumCanti = num1 + num2 + num3 + num4 + num5
    }

    if (parseInt(tipoNota) === 8) {
      return SumCanti <= parseInt(cantidadAlumnos)
    } else {
      return SumCanti === parseInt(cantidadAlumnos)
    }
  }

  const EsIngresoValidoDeExamenesPorTipo = (
    TypeExam: any,
    sCantidadTipoExamen1: any,
    sCantidadTipoExamen2: any,
    sCantidadTipoExamen3: any,
    sCantidadTipoExamen4: any,
    sCantidadTipoExamen5: any
  ) => {
    let msgCanTe = 'OK'
    switch (TypeExam) {
      case '1':
        if (sCantidadTipoExamen1 === '0' || sCantidadTipoExamen1 === '') {
          msgCanTe = 'Debe ingresar la cantidad de exámenes a imprimir.'
        }
        break
      case '2':
        if (sCantidadTipoExamen1 === '0' || sCantidadTipoExamen1 === '') {
          msgCanTe =
            'Debe ingresar la cantidad de exámenes a imprimir del tipo A.'
        }
        if (sCantidadTipoExamen2 === '0' || sCantidadTipoExamen2 === '') {
          msgCanTe =
            'Debe ingresar la cantidad de exámenes a imprimir del tipo B.'
        }
        break
      case '3':
        if (sCantidadTipoExamen1 === '0' || sCantidadTipoExamen1 === '') {
          msgCanTe =
            'Debe ingresar la cantidad de exámenes a imprimir del tipo A.'
        }
        if (sCantidadTipoExamen2 === '0' || sCantidadTipoExamen2 === '') {
          msgCanTe =
            'Debe ingresar la cantidad de exámenes a imprimir del tipo B.'
        }
        if (sCantidadTipoExamen3 === '0' || sCantidadTipoExamen3 === '') {
          msgCanTe =
            'Debe ingresar la cantidad de exámenes a imprimir del tipo C.'
        }
        break
      case '4':
        if (sCantidadTipoExamen1 === '0' || sCantidadTipoExamen1 === '') {
          msgCanTe =
            'Debe ingresar la cantidad de exámenes a imprimir del tipo A.'
        }
        if (sCantidadTipoExamen2 === '0' || sCantidadTipoExamen2 === '') {
          msgCanTe =
            'Debe ingresar la cantidad de exámenes a imprimir del tipo B.'
        }
        if (sCantidadTipoExamen3 === '0' || sCantidadTipoExamen3 === '') {
          msgCanTe =
            'Debe ingresar la cantidad de exámenes a imprimir del tipo C.'
        }
        if (sCantidadTipoExamen4 === '0' || sCantidadTipoExamen4 === '') {
          msgCanTe =
            'Debe ingresar la cantidad de exámenes a imprimir del tipo D.'
        }
        break
      case '5':
        if (sCantidadTipoExamen1 === '0' || sCantidadTipoExamen1 === '') {
          msgCanTe =
            'Debe ingresar la cantidad de exámenes a imprimir del tipo A.'
        }
        if (sCantidadTipoExamen2 === '0' || sCantidadTipoExamen2 === '') {
          msgCanTe =
            'Debe ingresar la cantidad de exámenes a imprimir del tipo B.'
        }
        if (sCantidadTipoExamen3 === '0' || sCantidadTipoExamen3 === '') {
          msgCanTe =
            'Debe ingresar la cantidad de exámenes a imprimir del tipo C.'
        }
        if (sCantidadTipoExamen4 === '0' || sCantidadTipoExamen4 === '') {
          msgCanTe =
            'Debe ingresar la cantidad de exámenes a imprimir del tipo D.'
        }
        if (sCantidadTipoExamen5 === '0' || sCantidadTipoExamen5 === '') {
          msgCanTe =
            'Debe ingresar la cantidad de exámenes a imprimir del tipo E.'
        }
        break
      default:
        break
    }

    return msgCanTe
  }

  const ControlsDisabled = () => {
    setcontrolsDisabled({
      ...controlsDisabled,
    })
  }

  const ViewMessage = (StateMessage: any, conte?: any) => {
    switch (StateMessage) {
      case 0:
        return Swal.fire({
          title: 'Portal de Docentes',
          text: `El exámen cargado para esta calificación ya fue aprobado, no se puede volver a cargar el exámen.`,
          icon: 'warning',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK',
        })
      case 1:
        return Swal.fire({
          title: 'Carga de Exámen',
          text: `¿Ya cuenta con un exámen cargado para esta calificación, desea reemplazarlo ?`,
          icon: 'warning',
          showCancelButton: true,
          cancelButtonText: `Cancelar`,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'Aceptar',
        }).then((result: any) => {
          if (!result.isConfirmed) {
            setloading(true)
            Cancel()
            setloading(false)
          }
        })
      case 2:
        return Swal.fire({
          title: 'Portal de Docentes',
          text: `Seleccione la nota para la carga de exámen.`,
          icon: 'warning',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK',
        })
      case 3:
        return Swal.fire({
          title: 'Portal de Docentes',
          text: `Seleccione la nota para la carga de exámen.`,
          icon: 'warning',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK',
        })
      case 4:
        return Swal.fire({
          title: 'Portal de Docentes',
          text: `${conte}`,
          icon: 'warning',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK',
        })
      case 5:
        return Swal.fire({
          title: 'Carga de Exámen',
          text: `El exámen se cargo correctamente.`,
          icon: 'success',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK',
        })
      case 6:
        return Swal.fire({
          title: 'Carga de Exámen',
          text: `Ha ocurrido un error, porfavor intente nuevamente.`,
          icon: 'error',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK',
        })
      default:
        break
    }
  }

  const Cancel = async () => {
    setloading(true)
    setViewInputExams(false)
    const input: any = document.querySelector("input[type='file']")
    input.value = ''
    setDataClassNote([])
    const result = await ApiClassNote()
    setDataClassNote(result)
    setDateLimit('')
    setViewInputExams(true)
    setStartDate(undefined)
    setSeleTypeExam('1')
    setArchivo({
      ValueFile: initFile,
      ValueFile2: initFile2,
      ValueFile3: initFile3,
      ValueFile4: initFile4,
      ValueFile5: initFile5,
    })
    setcontrolsDisabled({
      lstTypeExam: true,
      quantityPrint: true,
      datePrint: true,
      quantityNumber: true,
      fileUpload: true,
      btnUploadFile: true,
      lstNotes: false,
    })
    setloading(false)
  }

  // functions

  useEffect(() => {
    const Load = async () => {
      setloading(true)
      setViewInputExams(true)
      setDataCoursesByTeacher(DataSelect)

      try {
        const result = await ApiClassNote()
        setDataClassNote(result)
        const responseSemester: any = await ApiSemester()
        setSemester(responseSemester?.semesterCode)
        const responseAmountStudents = await ApiAmountStudents(
          responseSemester?.semesterCode,
          1,
          DataSelect?.ClaCodigo
        )
        setNumberOfStudents(responseAmountStudents)
      } catch (error:any) {
        catchingErrorFront(error.message)
        setloading(false)
      }

      ControlsDisabled()
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
            Cargando exámen para la clase:{' '}
            {DataSelect !== undefined ? DataCoursesByTeacher?.ClaCodigo : ''}
          </Label>
        </div>

        <hr />

        <div className={styles.alertaContent}>
          <Alerta
            classname="w-100"
            variant="info"
          >
            <b>Nota:</b> &nbsp;
            <ul>
              <li>
                Recuerde que esta opción estará habilitada mientras se encuentre
                en la fechas límites de carga.
              </li>
              <li>
                Si no existen fechas de carga, por favor consultar con su
                coordinador de carrera.
              </li>
              <li>
                Para realizar la carga de exámen tiene un plazo establecido de{' '}
                <b>48 horas hábiles (como máximo),</b> antes de la toma de la
                evaluación.
              </li>
              <li>Todos los archivos deben estar en formato PDF.</li>
            </ul>
          </Alerta>
        </div>

        <div className={styles.botones}>
          <Button
            type="button"
            classname={styles.styleBtn}
            variant="secondary"
            onclick={returClick}
          >
            Regresar
          </Button>
        </div>

        <div className={styles.cotenBlock}>
          <ViewList
            style={{ marginBottom: '2%' }}
            disabled={controlsDisabled.lstNotes}
            onChange={ddlNotasSelectedHandle}
            title="Seleccione nota:"
            subtitle={`Fecha máxima para cargar:`}
            textAlter={DateLimit}
            id={''}
          >
            {DataClassNote.map((x: any) => (
              <option
                key={x?.noteId}
                value={x?.notaSequence}
              >
                {x?.note}
              </option>
            ))}
          </ViewList>
          <ViewList
            style={{ marginBottom: '2%' }}
            onChange={SelectTypeExam}
            disabled={controlsDisabled.lstTypeExam}
            title="Seleccione el número de tipos de exámenes"
            subtitle={`Recuerde que la cantidad maxima a imprimir es de: ${NumberOfStudents}`}
            id={''}
          >
            {ViewInputExams === true ? (
              <>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </>
            ) : null}
          </ViewList>
          <ViewList
            style={{ marginBottom: '2%' }}
            onChange={PrintSheets}
            disabled={controlsDisabled.quantityPrint}
            title="Seleccione la cantidad de hojas adicionales en blanco a imprimir:"
            id={''}
          >
            <option value="0">0</option>
            <option value="1">1</option>
          </ViewList>
          <div style={{ marginBottom: '2%' }}>
            <p style={{ marginBottom: '1%' }}>
              Seleccione la fecha requerida de impresión:
            </p>
            {ValiDate()}
          </div>
          <div style={{ marginTop: '1%' }}>
            <div>
              <p style={{ marginBottom: '0' }}>
                Ingrese la cantidad a imprimir por tipo de examen:
              </p>
              <p
                style={{
                  color: '#0066CC',
                  margin: '5px 0 0 5px',
                  fontWeight: 'bold',
                  fontSize: '0.8em',
                }}
              >
                Recuerde que la sumatoria de las cantidades ingresadas por cada
                tipo de exámen debe ser igual a la cantidad de alumnos
                habilitados. Sólo en el caso del exámen de recuperación usted
                puede ingresar la cantidad de exámenes requeridos libremente.
              </p>
              <div style={{ display: 'flex' }}>
                {BlockInputActiveCalculation()}
              </div>
            </div>
          </div>

          <div style={{ marginTop: '1%', marginBottom: '2%' }}>
            {BloackInputActiveFile()}
          </div>
          </div>

        <div className={`${styles.contenbtnAlign}`}>
          <div style={{display:'flex',flexDirection:'row-reverse'}}>
            <Button
              type="button"
              classname={styles.styleBtn}
              variant="primary"
              disabled={controlsDisabled.btnUploadFile}
              onclick={LoadExam}
            >
              Cargar Examen
            </Button>
            </div>
            <div>
              <Button
                type="button"
                classname={styles.styleBtn}
                variant="secondary"
                onclick={Cancel}
              >
                Cancelar
              </Button>
            </div>
          </div>
       
          
        <br />
      </div>
    </div>
  )
}

index.title = 'Carga de Exámen'
export default index
