import JsPDF from 'jspdf'
import moment from 'moment'
import autoTable from 'jspdf-autotable'

interface Props {
  head: any
  body: any
  name: string
  Information: any
  Docente: string
  NameRepote: string
  RouteImage: any
}

const GeneratePdf = async ({
  head,
  body,
  name,
  Information,
  Docente,
  NameRepote,
  RouteImage,
}: Props) => {
  const doc = new JsPDF()

  doc.setFontSize(40)

  let _X = 15

  let _Y = 30

  if (RouteImage !== null) {
    const image = new Image()
    image.src = RouteImage
    doc.addImage(image, 'png', 9, 15, 65, 20)
  }

  doc.setFontSize(14)

  if (NameRepote === 'Asistencia') {
    _Y = _Y - 5

    _X = _X + 108

    doc.text('Reporte de ' + NameRepote + ' por Clase', _X, _Y)
  }

  if (NameRepote === 'Notas') {
    _Y = _Y - 5

    _X = _X + 118

    doc.text('Reporte de ' + NameRepote + ' por Clase', _X, _Y)
  }

  if (NameRepote === 'Clases: Resultados y Estadísticas') {
    _Y = _Y - 5

    _X = _X + 56

    doc.text('Reporte de ' + NameRepote + ' por Clase', _X, _Y)
  }

  if (NameRepote === 'evaluación de competencias') {
    _Y = _Y - 5

    _X = _X + 68

    doc.text('Reporte de ' + NameRepote + ' por Clase', _X, _Y)
  }

  doc.setFontSize(8)

  _Y = _Y + 5

  _X = _X - _X
  _X = 144

  const date = new Date()
  const DateHour = moment(date).format('DD/MM/YYYY HH:mm:ss')
  doc.text('Fecha de emisión: ' + DateHour, _X, _Y)

  _Y = _Y + 5
  _X = _X + 35
  const length = doc.getNumberOfPages()

  doc.text('Pág. ' + length + ' de ' + length, _X, _Y)

  doc.setFontSize(8)

  _Y = _Y + 10
  _X = _X - _X
  _X = 15

  doc.text('Semestre / Sede', _X, _Y)

  doc.setFontSize(6)

  _X = _X + 25

  doc.text(Information.SemCodigo + '     ' + Information.SedCodigo, _X, _Y)

  doc.setFontSize(8)

  _Y = _Y + 5
  _X = _X - 25

  doc.text('Clase', _X, _Y)

  doc.setFontSize(6)

  _X = _X + 25

  doc.text(Information.ClaCodigo, _X, _Y)

  doc.setFontSize(8)

  _X = _X + 20

  if (NameRepote === 'Asistencia') {
    doc.text('Tope de faltas ', _X, _Y)

    doc.setFontSize(6)

    _X = _X + 25

    doc.text(Information.ClaTopeFaltas, _X, _Y)
  } else {
    _X = _X + 25
  }

  doc.setFontSize(8)

  _X = _X - 70

  _Y = _Y + 5

  doc.text('Curso', _X, _Y)

  doc.setFontSize(6)

  _X = _X + 25

  doc.text(Information.CurCodigo + '   ' + Information.CurNombre, _X, _Y)

  doc.setFontSize(8)

  _X = _X - 25

  _Y = _Y + 5

  doc.text('Docente', _X, _Y)

  doc.setFontSize(6)

  _X = _X + 25

  doc.text(Docente, _X, _Y)

  doc.line(15, 65, 195, 65)
  autoTable(doc, {
    head,
    body,
    didDrawCell: (data) => {},
    startY: 65,
    bodyStyles: {
      fontSize: 7,
      halign: 'center',
    },
    headStyles: {
      fillColor: 'white',
      textColor: 'black',
      fontSize: 7,
      halign: 'center',
    },
  })

  doc.save(name)
}

export default GeneratePdf
