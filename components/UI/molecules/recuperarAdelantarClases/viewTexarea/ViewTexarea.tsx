import Label from '../../../atoms/label/Label'
import TextArea from '../../../atoms/TextArea/TextArea'
import styles from './ViewTexarea.module.scss'

export interface Props {
  texLabel: string
  disabled?: any
  placeholder?: any
  onchange?: any
  defaultValue?: any
  value?: any
}

const ViewTexarea = ({
  texLabel,
  disabled,
  placeholder,
  defaultValue,
  value,
}: Props) => {
  return (
    <div className={styles.viewTexareaConten}>
      <Label>{texLabel}</Label>
      <TextArea
        type={'textarea'}
        placeholder={placeholder}
        controlId={''}
        disabled={disabled}
        classname={''}
        onChange={onchange}
        defaultValue={defaultValue}
        value={value}
      />
    </div>
  )
}

export default ViewTexarea
