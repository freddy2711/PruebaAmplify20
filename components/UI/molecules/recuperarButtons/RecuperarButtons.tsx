import { Form } from 'react-bootstrap'
import Button from '../../atoms/button/Button'

export interface Props {
  btnOnclick?: any
  onChange?: any
  onclickcheck?: any
}

const RecuperarButtons = ({ btnOnclick, onChange, onclickcheck }: Props) => {
  return (
    <>
      <Button
        type="button"
        classname="mb-3"
        variant="primary"
        onclick={btnOnclick}
      >
        Nueva solicitud
      </Button>
      <Form.Check
        type={`checkbox`}
        id={`default-checkbox-check1`}
        label={`Mostrar sólo solicitudes pendientes`}
        name={'session'}
        className="mb-2 d-block"
        onChange={onChange}
        onClick={onclickcheck}
      />
    </>
  )
}

export default RecuperarButtons
