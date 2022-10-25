import classNames from 'classnames'
import styles from './index.module.scss'
import { extractClass } from '../../../../helpers/helpers'
import Form from 'react-bootstrap/Form';

export interface Props {
    type: 'checkbox' | 'radio'
    id:string
    name:string
    value: string
    classname?: string
    disabled:boolean
    onclick?: () => void
    checked?:boolean
    readOnly?:boolean
}

const RadioButton = ({
    type ='radio',
    id = '',
    name = '',
    value = 'Default radio',
    classname = '',
    disabled = false,
    onclick,
    checked,
    readOnly,
}:Props) => {

    const classprops: string = classNames(
        'mb-3',
        extractClass(styles, classname)
      )

    return(
        <Form.Check
        disabled={disabled}
        type={type}
        label={value}
        id={id}
        name={name}
        className={classprops}
        onClick={onclick}
        checked={checked}
        readOnly={readOnly}
      />
    )
}

export default RadioButton