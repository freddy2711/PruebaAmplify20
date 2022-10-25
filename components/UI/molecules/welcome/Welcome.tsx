import Anchor, { Props as anchorProps } from '../../atoms/anchor/Anchor'
import Label, { Props as labelProps } from '../../atoms/label/Label'
import styles from './index.module.scss'
import { extractClass } from '../../../../helpers/helpers'

export interface Props {
  labelWelcome: labelProps
  anchorDatPer: anchorProps
  anchorLogout: anchorProps
  classname?: string
}

const Welcome = ({
  labelWelcome,
  anchorDatPer,
  anchorLogout,
  classname = '',
}: Props) => {
  const classprops: string = extractClass(styles, classname)

  return (
    <div className={classprops}>
      <Label {...labelWelcome} />
      <div className="d-flex">
        <Anchor {...anchorDatPer} />
        <Anchor {...anchorLogout} />
      </div>
    </div>
  )
}

export default Welcome
