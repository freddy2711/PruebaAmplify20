/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
import { get } from 'local-storage'
import { useEffect, useState } from 'react'
import styles from '../../components/templates/reportes/Reportes.module.scss'
import Label from '../../components/UI/atoms/label/Label'
import { USER_SESSION } from '../../consts/storageConst'
import { apiReportTeacherEvaluation } from '../api'
import Loader from '../../components/UI/atoms/loader/Loader'
import { catchingErrorFront } from '../../helpers/helpers'

const Index = () => {
  const [Loading, setLoading] = useState(false)
  const [ReportData, setReportData] = useState<any>([])
  const UserCode = get(USER_SESSION)

  const ApiResultTeacherEvaluation = async (UserCode: any) => {
    const response =
      await apiReportTeacherEvaluation.listResultTeacherEvaluation(UserCode)
    return response
  }

  const ApiResultSede = async () => {
    const response = await apiReportTeacherEvaluation.lstSedesUPN()
    return response
  }

  const ApiDocumentAWSS3 = async (periodo: any, name: any) => {
    try {
      const response = await apiReportTeacherEvaluation.lsttDocumentsAWSS3(
        periodo,
        name
      )
      return response
    } catch (error:any) {
      catchingErrorFront(error.message)
      setLoading(false)
    }
   
  }

  const ApiDownloadAWSS3 = async (rutaUrl: any) => {
    try {
      const response = await apiReportTeacherEvaluation.DownloadDocumentsAWSS3(
        rutaUrl
      )
      return response
    } catch (error:any) {
      catchingErrorFront(error.message)
      setLoading(false)
    }
    
  }

  // api

  const DownloadFile = async (url: any) => {
    setLoading(true)
    const response = await ApiDownloadAWSS3(url)
    window.open(response)
    setLoading(false)
  }

  const AsignaValores = (
    periodo: string,
    tipo: number,
    strsede: string,
    dtresultados: []
  ) => {
    let urlTipo = ''
    let txt = ''
    let url = ''

    if (tipo === 0) {
      urlTipo = 'xclase'
      txt = 'reporte por clase '
    } else if (tipo === 1) {
      urlTipo = 'xcurso'
      txt = 'reporte por curso '
    }

    txt = txt + strsede.toUpperCase()

    if (dtresultados.length > 0) {
      const response: any = dtresultados.find(
        (x: any) =>
          x.sPeriodo === periodo &&
          x.sedCode.toUpperCase() === strsede &&
          x.sTipo === urlTipo
      )

      if (response !== undefined) {
        const response: any = dtresultados.find(
          (x: any) =>
            x.sPeriodo === periodo &&
            x.sedCode.toUpperCase() === strsede &&
            x.sTipo === urlTipo
        )
        url = 'esa/' + response.sRuta
      } else {
        txt = txt + ' (No disponible)'
        url = ''
      }
    } else {
      txt = txt + ' (No disponible)'
      url = ''
    }

    return { txt, url }
  }

  const ValidateListData = async (obj: any, sedeData: any) => {
    const DataCenter: any = []
    const periodos: any = []

    obj.map((x: any) => {
      const response = periodos.find((item: any) => item === x.sPeriodo)
      if (response === undefined) {
        periodos.push(x.sPeriodo)
      }
    })

    await Promise.all(
      periodos.map(async (periodo: any) => {
        const anio = periodo.substring(0, 4)
        const titulo = periodo + ': '

        const DataRow = await Promise.all(
          sedeData.map(async (x: any) => {
            const sede = x?.codigoSede.toUpperCase()

            const datav1 = await ApiDocumentAWSS3(periodo, sede.toUpperCase())

            if (datav1) {
              const clase = AsignaValores(periodo, 0, sede, obj)
              const curso = AsignaValores(periodo, 1, sede, obj)

              const GetSede = sedeData.find(
                (item: any) => item.codigoSede === sede
              )

              if (GetSede !== undefined) {
                const sedeFormated = GetSede.nombreSede.replace('BANNER - ', '')
                return { sedeFormated, clase, curso }
              }
            } else {
              const datav2 = await ApiDocumentAWSS3(periodo, sede.toLowerCase())
              if (datav2) {
                const clase = AsignaValores(periodo, 0, sede, obj)
                const curso = AsignaValores(periodo, 1, sede, obj)

                const GetSede = sedeData.find(
                  (item: any) => item.codigoSede === sede
                )

                if (GetSede !== undefined) {
                  const sedeFormated = GetSede.nombreSede.replace(
                    'BANNER - ',
                    ''
                  )
                  return { sedeFormated, clase, curso }
                }
              }
            }
          })
        )
        const filterrow = DataRow.filter((x: any) => x !== undefined)
        DataCenter.push({ titulo, filterrow })
      })
    )
    setReportData(DataCenter)
    return DataCenter
  }



  useEffect(() => {
    const Load = async () => {
      setLoading(true)
      try {
        const result = await ApiResultTeacherEvaluation(UserCode)
        const sedeData = await ApiResultSede()
        await ValidateListData(result, sedeData)
      } catch (error:any) {
        catchingErrorFront(error.message)
        setLoading(false)
      }
    
      setLoading(false)
    }

    Load()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const TargetConten = () => {
    return ReportData.map((y: any) => {
      return (
        <div key={Math.random()}>
          <span
            style={{
              background: '#6C757D',
              padding: '7px',
              color: 'white',
              fontWeight: 'bold',
              borderRadius: '5px',
            }}
          >
            {y.titulo}
          </span>
          <div className="row">
            {y.filterrow.map((x: any) => {
              return (
                <div
                  key={Math.random()}
                  className="col-sm-2"
                  style={{ paddingTop: '10px' }}
                >
                  <p style={{ color: '#17B6DD', fontWeight: 'bold' }}>
                    {x.sedeFormated}
                  </p>
                  <div>
                    {x.clase.url === '' ? (
                      <p>{x.clase.txt}</p>
                    ) : (
                      <p
                        onClick={() => DownloadFile(x.clase.url)}
                        style={{ color: 'red', cursor: 'pointer' }}
                      >
                        {x.clase.txt}
                      </p>
                    )}
                    {x.curso.url === '' ? (
                      <p>{x.curso.txt}</p>
                    ) : (
                      <p
                        onClick={() => DownloadFile(x.curso.url)}
                        style={{ color: 'red', cursor: 'pointer' }}
                      >
                        {x.curso.txt}
                      </p>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )
    })
  }

  return (
    <div className={styles.contenido}>
      <Loader loading={Loading} />
      <div className={styles.content}>
        <div className={styles.titulo}>
          <Label classname="text-warning h5 mt-3 mb-3">
            Reportes de evaluación docente por semestre
          </Label>
        </div>
        <hr />
        {ReportData !== undefined ? TargetConten() : null}
      </div>
    </div>
  )
}

Index.title = 'Reporte Evaluación Docente - Portal Docentes'
export default Index
