import { useMemo /* useRef */ } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

const index = ({ value = '', set, handleImage, refe }: any) => {
  const toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'], // toggled buttons
    [{ list: 'ordered' }, { list: 'bullet' }],
    [{ align: [] }],
    [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ font: [] }, 'link', 'image', 'video'], //
  ]

  // const quillObj:any = useRef(null)

  const evento = () => {
    handleImage()
  }

  const modules = useMemo(
    () => ({
      toolbar: {
        handlers: { image: evento },
        container: toolbarOptions,
      },
    }),
    []
  )

  return (
    <ReactQuill
      ref={refe}
      defaultValue={value}
      className="editor"
      style={{ minHeight: '200px' }}
      placeholder="Por favor detalle su consulta, mínimo de 20 caracteres..."
      theme="snow"
      modules={modules}
      value={value}
      onChange={set}
    />
  )
}

export default index
