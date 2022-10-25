import { Form } from 'react-bootstrap'

const SolMarcaButtons = ({ setOpcion }: any) => {
  const handleCheck = (e: any) => {
    setOpcion(parseInt(e.target.value))
  }

  return (
    <>
      <Form.Check
        type={`radio`}
        id={`default-checkbox-radio1`}
        label={`Sesiones NO iniciadas`}
        name={'session'}
        defaultChecked={true}
        onClick={handleCheck}
        value={1}
      />

      <Form.Check
        type={`radio`}
        id={`default-checkbox-radio2`}
        label={`Sesiones NO cerradas`}
        name={'session'}
        onClick={handleCheck}
        value={2}
      />

      <Form.Check
        type={`radio`}
        id={`default-checkbox-radio3`}
        label={`Estado de solicitudes`}
        name={'session'}
        onClick={handleCheck}
        value={3}
      />
    </>
  )
}

export default SolMarcaButtons
