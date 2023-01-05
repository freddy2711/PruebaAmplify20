import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../../components/UI/atoms/button/Button'
import Label from '../../components/UI/atoms/label/Label'
import ProgressBars from '../../components/UI/atoms/progressBar/ProgressBars'
import TabChild from '../../components/UI/molecules/tabchild/TabChild'
import TabBlock from '../../components/UI/organisms/tabs/TabBlock'
import styles from './../../components/templates/datosPersonales/datosPersonales.module.scss'
import Loader from '../../components/UI/atoms/loader/Loader'
import TabInfoGeneral from './tabs/TabInfoGeneral'
import Swal from 'sweetalert2'
import { get } from 'local-storage'
import { apiDatosPersonales } from '../api/index'
import { loadInfoGeneral } from './../../redux/actions/infoGeneralAction'

import {
  loadInfoExtra,
  getIndustry,
  getAreaPuestoAction,
  getInstituciones,
  loadInfoExtraEstudios,
  loadInfoExtraIdiomas,
  loadInfoExtraAdjunto,
} from './../../redux/actions/infoExtraActions'

import Alerta from '../../components/UI/atoms/alert/Alerts'
import TabContacto from './tabs/TabContacto'
import TabExperienciaLaboral from './tabs/TabExperienciaLaboral'
import TabEstudios from './tabs/TabEstudios'
import TabConocimientos from './tabs/TabConocimientos'
import TabIdiomas from './tabs/TabIdiomas'
import TabRefLaboral from './tabs/TabRefLaboral'
import TabDocs from './tabs/TabDocs'
import ModalAvance from './modals/ModalAvance'
import { SET_DATA_DOCENTE } from '../../consts/storageConst'

const DatosPersonales = () => {
  const cargando1 = useSelector((state: any) => state?.infoGeneral?.loading)
  const progresoData = useSelector((state: any) => state?.infoGeneral?.progress)
  const info = useSelector((state: any) => state?.infoGeneral?.infoGeneral)

  let cargando = true

  if (!cargando1) {
    cargando = false
  }

  const dispatch = useDispatch()
  const loadData = (datos: any) => dispatch<any>(loadInfoGeneral(datos))

  const getindustry = () => dispatch<any>(getIndustry())
  const getareapuestoaction = () => dispatch<any>(getAreaPuestoAction())
  const getinstituciones = () => dispatch<any>(getInstituciones())
  const loadinfoextraestudios = () => dispatch<any>(loadInfoExtraEstudios())
  const loadinfoextraidiomas = () => dispatch<any>(loadInfoExtraIdiomas())
  const loadinfoextraadjunto = () => dispatch<any>(loadInfoExtraAdjunto())
  const loadinfoextra = () => dispatch<any>(loadInfoExtra())

  useEffect(() => {
    const init = async () => {
      const DUENO: any = get(SET_DATA_DOCENTE)
      const DUENOSESSION = DUENO?.userName

			console.log(DUENOSESSION)
			
      await loadData({
        user: DUENOSESSION, // 'RVI',
      })

      await loadinfoextra()
      await getindustry()
      await getareapuestoaction()
      await getinstituciones()
      await loadinfoextraestudios()
      await loadinfoextraidiomas()
      await loadinfoextraadjunto()
    }

    init()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const [progress, setprogress] = useState(0)
  const [modalShowAvance, setModalShowAvance] = useState(false)

  useEffect(() => {
    if (Object.keys(progresoData).length !== 0) {
      setprogress(parseInt(progresoData.ValueEvaluation))

      if (
        parseInt(progresoData.ValueEvaluation) > 0 &&
        parseInt(progresoData.ValueEvaluation) < 100
      ) {
        setModalShowAvance(true)
      }
    }
  }, [progresoData])

  const GuardarConfirmacion = async () => {
    console.log('CONFIRMAR DATOS')

    const DUENO: any = get(SET_DATA_DOCENTE)
    const DUENOSESSION = DUENO?.userName

    const obj = {
      IdConfirmacion: null,
      IdPersona: info.idPersona,
      Activo: '1',
      audit_usuario_creacion: DUENOSESSION, // 'RVI',
      audit_usuario_actualizacion: '0',
    }

    try {
      const resp = await apiDatosPersonales.confirmacionGuardar(obj)
      console.log(resp?.data.detail)
      const confirm = resp?.data.detail

      if (confirm.status) {
        Swal.fire({
          title: 'Confirmación de Datos',
          text: `${confirm.msg}`,
          icon: 'success',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK',
        })
      } else {
        Swal.fire({
          title: 'Confirmación de Datos',
          text: `${confirm.msg}`,
          icon: 'warning',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK',
        })
      }
    } catch (error) {
      console.log(error)
    }
  }

  function FormatDate(dateStr: any) {
    if (!dateStr || dateStr === '') {
      return ''
    }

    const date = dateStr.substring(0, 10)
    const parts = date.split('-')
    return parts[2] + '/' + parts[1] + '/' + parts[0]
  }

  const confirmHandle = () => {
    const avance = progress

    if (avance !== 0 && avance !== 100) {
      Swal.fire({
        title: 'Datos Personales',
        text: `Debe completar el 100% del cv, por favor revise todas las pestañas y que no tenga errores.`,
        icon: 'warning',
        showCancelButton: false,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'OK',
      })
    } else {
      const d = new Date()

      Swal.fire({
        title: 'Datos Personales',
        html:
          'Declaro haber completado y/o validado la información de mis datos personales al día de hoy <b>' +
          FormatDate(d.toISOString()) +
          '</b>',
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar',
      }).then(function (result) {
        if (result.value) {
          GuardarConfirmacion()
        }
      })
    }
  }

  return (
    <div className={styles.default}>
      <ModalAvance
        avance={progress}
        modalShowAvance={modalShowAvance}
        setModalShowAvance={setModalShowAvance}
      />
      <Loader loading={cargando} />
      <div className={`${styles.content} container`}>
        <div className={styles.container}>
          <div className={styles.titulo}>
            <Label classname="text-warning h5 mt-3 mb-3">
              Datos Personales
            </Label>
          </div>

          <hr />

          <div className={styles.alertContent}>
            <Alerta
              classname="w-100"
              variant="primary"
            >
              <p className="mb-0">
                <b>Nota:</b> (*) Llenar estas pestañas es obligatorio.
              </p>
            </Alerta>
          </div>

          <div className={styles.confirmBtn}>
            <Button
              type="button"
              variant="primary"
              size="medium"
              classname="m-auto mb-3"
              onclick={() => confirmHandle()}
            >
              CONFIRMACIÓN DE DATOS
            </Button>
          </div>

          <div className={styles.barContent}>
            <ProgressBars
              now={progress}
              variant="info"
              label="Avance"
            />
          </div>

          <div className={styles.tabsContent}>
            <TabBlock defaultActiveKey="Información General">
              <TabChild
                eventKey="Información General"
                title="Información General"
              >
                <TabInfoGeneral />
              </TabChild>

              <TabChild
                eventKey="Contacto"
                title="Contacto"
              >
                <TabContacto />
              </TabChild>

              <TabChild
                eventKey="Experiencia Laboral"
                title="Experiencia Laboral"
              >
                <TabExperienciaLaboral />
              </TabChild>

              <TabChild
                eventKey="Estudios"
                title="Estudios"
              >
                <TabEstudios />
              </TabChild>

              <TabChild
                eventKey="Conocimientos"
                title="Conocimientos"
              >
                <TabConocimientos />
              </TabChild>

              <TabChild
                eventKey="Idiomas"
                title="Idiomas"
              >
                <TabIdiomas />
              </TabChild>

              <TabChild
                eventKey="Referencia Laboral"
                title="Referencia Laboral"
              >
                <TabRefLaboral />
              </TabChild>

              <TabChild
                eventKey="Documentos"
                title="Documentos"
              >
                <TabDocs />
              </TabChild>
            </TabBlock>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DatosPersonales
