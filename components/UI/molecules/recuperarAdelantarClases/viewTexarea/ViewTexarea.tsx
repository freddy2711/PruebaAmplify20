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
  style?: any
}

const ViewTexarea = ({
  texLabel,
  disabled,
  placeholder,
  defaultValue,
  value,
  style,
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
        style={style}
      />
    </div>
  )
}

export default ViewTexarea
