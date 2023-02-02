import classNames from 'classnames'
import styles from './index.module.scss'
import { FloatingLabel, Form } from 'react-bootstrap'
import { extractClass } from '../../../../helpers/helpers'

export interface Props {
  type: 'textarea'
  placeholder: string
  controlId: string
  label?: string
  disabled: boolean
  classname: string
  onChange?: any
  defaultValue?: any
  value?: any
  style?: any
}

const TextArea = ({
  type = 'textarea',
  placeholder = 'Leave a comment here',
  label = ' ',
  disabled = false,
  controlId = 'floatingTextarea2',
  classname = '',
  onChange,
  defaultValue,
  value,
  style,
}: Props) => {
  const classprops: string = classNames('mb-3', extractClass(styles, classname))

  return (
    <FloatingLabel
      controlId={controlId}
      label={label}
    >
      <Form.Control
        as={type}
        placeholder={placeholder}
        disabled={disabled}
        className={classprops}
        onChange={onChange}
        style={style}
        defaultValue={defaultValue}
        value={value}
      />
    </FloatingLabel>
  )
}

export default TextArea
