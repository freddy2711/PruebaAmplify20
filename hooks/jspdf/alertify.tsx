// import alertifyJs from 'alertifyjs'
import Swal from 'sweetalert2'

interface Props {
  title?: string
  text?: any
  html?: any
  confirmButtonText?: string
  cancelButtonText?: string
  showCancelButton?: boolean
}

const getAlert = ({
  title,
  text,
  html,
  confirmButtonText,
  showCancelButton,
  cancelButtonText,
}: Props) => {
  return Swal.fire({
    title,
    text,
    html,
    icon: 'warning',
    // timer: 3000,
    showCancelButton,
    confirmButtonColor: '#3085d6',
    confirmButtonText,
    cancelButtonColor: 'red',
    cancelButtonText,
  }).then((result) => {
    if (result.isConfirmed) {
      return true
    } else if (result.isDenied) {
      return false
    }
  })
}

export default getAlert
