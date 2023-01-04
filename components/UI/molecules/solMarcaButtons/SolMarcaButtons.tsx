import { Form } from 'react-bootstrap'

const SolMarcaButtons = ({ setOpcion }: any) => {
  const handleCheck = (e: any) => {
    setOpcion(parseInt(e.target.value))
  }

  return (
    <>
		<div className={`col-12 col-md-4 text-center`}>
      <Form.Check
        type={`radio`}
        id={`default-checkbox-radio1`}
        label={`Sesiones NO iniciadas`}
        name={'session'}
        defaultChecked={true}
        onClick={handleCheck}
        value={1}
				className={`w-60 m-auto`}
      />
		</div>

		<div className={`col-12 col-md-4 text-center`}>
      <Form.Check
        type={`radio`}
        id={`default-checkbox-radio2`}
        label={`Sesiones NO cerradas`}
        name={'session'}
        onClick={handleCheck}
        value={2}
				className={`w-60 m-auto`}
      />
		</div>

		<div className={`col-12 col-md-4 text-center`}>
      <Form.Check
        type={`radio`}
        id={`default-checkbox-radio3`}
        label={`Estado de solicitudes`}
        name={'session'}
        onClick={handleCheck}
        value={3}
				className={`w-60 m-auto`}
      />
		</div>

    </>
  )
}

export default SolMarcaButtons
