import { useEffect, useState } from 'react'
import styles from '../../components/templates/documentos-manuales/DocumentosManuales.module.scss'
import Label from '../../components/UI/atoms/label/Label'
import Loader from '../../components/UI/atoms/loader/Loader'
import { catchingErrorFront } from '../../helpers/helpers'
import { apiDocumentosManuales } from '../api'

const index = () => {
  const [DocumentData, setDocumentData] = useState<any>([])
  const [ManualsData, setManualsData] = useState<any>([])
  const [Loading, setloading] = useState(false)

  const ApiDocumentsTeacher = async () => {
    const response = await apiDocumentosManuales.listDocumentsTeacher()
    return response
  }

  const ApiManualsTeacher = async () => {
    const response = await apiDocumentosManuales.listManualsTeacher()
    return response
  }

  const ApiDownloadDocuments = async (rutaUrl: any) => {
    try {
      const response = await apiDocumentosManuales.DownloadDocumentsAWSS3(rutaUrl)
      return response
    } catch (error:any) {
      catchingErrorFront(error.message)
        setloading(false)
    }
   
  }

  const FormatedValueDocuments = (Data: any) => {
    const rray = Data[0].split('<li>')
    const getData = []
    const formated = rray.filter((x: any) => x !== '')
    for (const element of formated) {
      const position = element.indexOf(`;">`)
      const formatedText = element.slice(position + 3).trim()
      const TitleText = formatedText.replace('<br />    </a></li>', '')
      const urlposition = element.indexOf(`u=`)
      const urlformated = element.slice(urlposition + 2)
      const urlpositionFormated = urlformated.indexOf(0, 'pdf')
      const urlText = urlformated
        .slice(0, urlpositionFormated + 12)
        .replace("','xClase','height=600,width=800", '')
        .replace("','", '')
      const blockdata = {
        title: TitleText.trim().replace('&#243;', 'ó').replace('&#201;', 'É'),
        url: urlText,
      }
      getData.push(blockdata)

      setDocumentData(getData)
    }
  }

  const FormatedValueManuals = (Data: any) => {
    const rray = Data[0].split('<li>')
    const getData = []
    const formated = rray.filter((x: any) => x !== '')
    for (const element of formated) {
      const position = element.indexOf(`;">`)
      const formatedText = element.slice(position + 3).trim()
      const TitleText = formatedText.replace('<br />    </a></li>', '')
      const urlposition = element.indexOf(`u=`)
      const urlformated = element.slice(urlposition + 2)
      const urlpositionFormated = urlformated.indexOf(0, 'pdf')
      const urlText = urlformated
        .slice(0, urlpositionFormated + 12)
        .replace("','xClase','height=600,width=800", '')
        .replace("','", '')
      const blockdata = {
        title: TitleText.trim(),
        url: urlText,
      }
      getData.push(blockdata)
      setManualsData(getData)
    }
  }

  const handleSelectDocument = async (value: any) => {
    setloading(true)
    const response = await ApiDownloadDocuments(value)
    window.open(response)
    setloading(false)
  }

  useEffect(() => {
    const Load = async () => {
      setloading(true)

      try {
        const response = await ApiDocumentsTeacher()
        if (response !== '') FormatedValueDocuments(response)
        const result = await ApiManualsTeacher()
        if (result !== '') FormatedValueManuals(result)
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
          <Label classname="text-warning h5 mt-3 mb-3">Documentos</Label>
        </div>

        <hr />

        <div>
          <ul style={{ color: '#007bff', fontSize: ' 1.1em' }}>
            {DocumentData.map((x: any) => (
              <li
                style={{ cursor: 'pointer' }}
                onClick={() => handleSelectDocument(x.url)}
                key={Math.random()}
              >
                {x.title}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.titulo}>
          <Label classname="text-warning h5 mt-3 mb-3">Manuales</Label>
        </div>

        <hr />

        <div>
          <ul style={{ color: '#007bff', fontSize: ' 1.1em' }}>
            {ManualsData.map((x: any) => (
              <li
                style={{ cursor: 'pointer' }}
                onClick={() => handleSelectDocument(x.url)}
                key={Math.random()}
              >
                {x.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

index.title = 'Documentos - Portal Docentes'
export default index
