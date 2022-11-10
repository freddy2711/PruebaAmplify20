import classNames from 'classnames'
import Swal from 'sweetalert2'

export const extractClass = (
  styles: { [key: string]: string },
  classname: string
) => {
  const clasearray: Array<string> = classname.split(' ')

  const keystyles = Object.keys(styles)

  const siIncluye: string[] = []
  const noIncluye: string[] = []

  clasearray.map((item) =>
    keystyles.includes(item) ? siIncluye.push(item) : noIncluye.push(item)
  )

  const estilos = classNames(
    siIncluye.map((item) => `${styles[item]}`),
    noIncluye.map((item) => `${item}`)
  )

  return estilos
}

export const catchingErrorFront = (error: any) =>{
		Swal.fire({
			title: 'Se produjo un error.',
			html: `<p>${error}</p>`,
			icon: 'warning',
			showCancelButton: false,
			confirmButtonColor: '#3085d6',
			confirmButtonText: 'OK',
		})
}

export const catchingErrorApi = (error: any) =>{
	let mensaje
	if (error.response) {
		if(error.response.status && error.response.status >= 400){

			const { msg, code } = error.response.data
			mensaje = `${msg} - Codigo: ${code}`
			Swal.fire({
				title: 'Se produjo un error.',
				html: `<p>${msg}</p><small>Codigo: ${code}</small>`,
				icon: 'warning',
				showCancelButton: false,
				confirmButtonColor: '#3085d6',
				confirmButtonText: 'OK',
			})

		}
	}
	throw new Error(mensaje)
}

export const genError = (res:any, error:any, trackingCode: string) => {

	if (error.response) {
		if(error.response.status){
			const msg = error.response.data.msg ? error.response.data.msg : `Ocurrio un error inesperado`
			console.log(`ERRORMSG: ${msg}`)
			return res.status(error.response.status).json({ msg, code: `${trackingCode}-${error.response.status}` });
		}
	}
}

