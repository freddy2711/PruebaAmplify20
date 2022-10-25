import JsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'

interface Props {
  head: any
  body: any
  imgBase64: any
  fecha: any
  dataUser: any
  name: string
}

const GeneratePdf = ({
  head,
  body,
  imgBase64,
  fecha,
  dataUser,
  name,
}: Props) => {
  const addFooters = (doc: any) => {
    const pageCount = doc.internal.getNumberOfPages()

    doc.setFont('helvetica', 'italic')
    doc.setFontSize(8)
    for (let i = 1; i <= pageCount; i++) {
      doc.setPage(i)
      doc.text(
        'Page ' + String(i) + ' de ' + String(pageCount),
        doc.internal.pageSize.width / 2,
        287,
        {
          align: 'right',
        }
      )
    }
    return pageCount
  }
  const doc = new JsPDF()
  doc.setFontSize(9)
  doc.setFontSize(14)
  doc.setFont('undefined', 'bold')
  const image = new Image()
  image.src = imgBase64
  const pageWidth = doc.internal.pageSize.getWidth()
  doc.addImage(image, 'png', 10, 15, 80, 35)
  const _X = 15
  let _Y = 15
  doc.text('Horario de Clases del Docente', pageWidth - _X, _Y, {
    align: 'right',
  })
  doc.setFont('undefined', 'none')
  doc.setFontSize(9)
  _Y = _Y + 5
  doc.text(`Fecha de emisión : ${fecha}`, pageWidth - _X, _Y, {
    align: 'right',
  })
  _Y = _Y + 35
  doc.setFontSize(14)
  doc.setFont('undefined', 'bold')
  doc.text(
    `Docente : ${dataUser.lastName} ${dataUser.middleLastName}, ${dataUser.name} `,
    _X,
    _Y
  )
  autoTable(doc, {
    head,
    body,
    didDrawCell: (data) => {},
    headStyles: { fillColor: [195, 195, 195], textColor: [0, 0, 0] },
    startY: 60,
  })
  addFooters(doc)
  doc.save(name)
}

export default GeneratePdf
