/* eslint-disable no-control-regex */
import { useEffect, useState } from 'react'
import styles from '../../components/templates/evaluacionDocente/EvaluacionDocente.module.scss'
import Label from '../../components/UI/atoms/label/Label'
import Loader from '../../components/UI/atoms/loader/Loader'
import { catchingErrorFront } from '../../helpers/helpers'
import { apiEvaluacionDocente } from '../api'

const index = () => {
  const [DocumentData, setDocumentData] = useState<any>([])
  const [Loading, setloading] = useState(false)

  const ApiAssessmentTeacher = async () => {
    const response = await apiEvaluacionDocente.listAssessmentTeacher()
    return response
  }

  const ApiDownloadDocuments = async (rutaUrl: any) => {
    try {
      const response = await apiEvaluacionDocente.DownloadDocumentsAWSS3(rutaUrl)
      return response
    } catch (error:any) {
      catchingErrorFront(error.message)
      setloading(false)
    }

  }

  const FormatedValue = (Data: any) => {
    const rray = Data[0].split('</ul>')
    const getData = []
    const formated = rray.filter((x: any) => x !== '')
    for (const element of formated) {
      const positionTextTitle = element.indexOf(`mb-1">`)
      const positionTextFormatedTitle = element.indexOf(`</h6>`)
      const formatedtex = element.slice(positionTextTitle + 6)
      const Titletext = formatedtex.slice(0, positionTextFormatedTitle - 44)
      const getItemsData = []

      const titleUrlData = element.split('<li>')
      const filterdata = titleUrlData.filter((x: any) => x !== titleUrlData[0])
      for (const item of filterdata) {
        const positionItem = item.indexOf(`style="cursor:pointer;"`)
        const formatedTitle = item
          .slice(positionItem)
          .trim()
          .replace(`style="cursor:pointer;"`, '')
          .replace('>', '')
        const formatedTitledata = formatedTitle.replace('</a>	</li>', '').trim()

        const urlposition = item.indexOf(`u=`)
        const formatedURL = item.slice(urlposition + 2)
        const urlpositionFormated = formatedURL.indexOf('xClase')
        const urlData = formatedURL
          .slice(0, urlpositionFormated)
          .replace("','", '')

        const blockdata = {
          title: formatedTitledata.trim(),
          url: urlData,
        }
        getItemsData.push(blockdata)
      }
      getData.push({
        Titletext,
        getItemsData,
      })
    }
    setDocumentData(getData)
  }

  const handleSelectDocument = async (value: any) => {
    setloading(true)
    const response = await ApiDownloadDocuments(value)
    const link = document.createElement('a')
    link.href = response
    link.setAttribute('target', '_blank')
    document.body.appendChild(link)
    link.click()
    setloading(false)
  }

  useEffect(() => {
    const Load = async () => {
      setloading(true)
      try {
        const response = await ApiAssessmentTeacher()
        FormatedValue(response)
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
            Evaluación del desempeño docente
          </Label>
        </div>

        <hr />

        <div>
          {DocumentData.map((x: any) => (
            <div key={Math.random()}>
              <br />
              <h6
                key={Math.random()}
                className="text-dark font-weight-bold mb-1"
              >
                {x.Titletext}
              </h6>
              {x.getItemsData.map((x: any) => (
                <div key={Math.random()}>
                  <ul
                    key={Math.random()}
                    style={{ color: '#007bff', fontSize: ' 1em', margin: '0' }}
                  >
                    <li
                      key={Math.random()}
                      style={{ cursor: 'pointer' }}
                      onClick={() => handleSelectDocument(x.url)}
                    >
                      {x.title}
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

index.title = 'Evaluación del desempeño Docente - Portal Docentes'
export default index
