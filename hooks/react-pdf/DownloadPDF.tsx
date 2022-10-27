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

  const image = new Image()
  image.src = RouteImage
  // const pageWidth = doc.internal.pageSize.getWidth()
  // doc.addImage(image, 'png', 10, 15, 80, 35)
  console.log('img', image)
  doc.text('UPN', _X, _Y)

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

  // PRUEBA

  // console.log(RouteImage)

  // const img = new Image();
  // const RutaImg = 'https://intranet.upn.edu.pe/arturo/images/logo_upn2.png'
  // // img.src = RutaImg

  // doc.addImage(img, 'png', 10, 78, 12, 15)
  // toDataURL(RutaImg, function (dataURL:any){
  //      console.log(dataURL)
  //   })

  // PRUEBA

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

  // RouteImage

  //  const image = new Image();

  // const base64 = Buffer.from("https://intranet.upn.edu.pe/arturo/images/logo_upn2.png").toString('base64');
  // const base64 = btoa("https://intranet.upn.edu.pe/arturo/images/logo_upn2.png");
  // const imgData = "data:image/png;base64," + base64;
  // image.src = imgData

  // const img = getBase64Image('https://uploads.sitepoint.com/wp-content/uploads/2015/12/1450377118cors3.png',doc)
  // doc.addImage(imgData , 'png', 5, 5, 40, 10);

  doc.save(name)
}

// const getBase64Image = (url:any,doc:any) => {
//     const img = new Image();
//     img.setAttribute('crossOrigin', 'anonymous');
//     img.onload = () => {
//       const canvas = document.createElement("canvas");
//       canvas.width = img.width;
//       canvas.height = img.height;
//       const ctx:any = canvas.getContext("2d");
//       ctx.drawImage(img, 0, 0);
//       const dataURL = canvas.toDataURL("image/png");
//       doc.addImage(dataURL , 'png', 5, 5, 40, 10);
//     }
//     img.src = url
//   }

export default GeneratePdf
