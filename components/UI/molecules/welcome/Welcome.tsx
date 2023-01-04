import Anchor, { Props as anchorProps } from '../../atoms/anchor/Anchor'
import Label, { Props as labelProps } from '../../atoms/label/Label'
import styles from './index.module.scss'
import { extractClass } from '../../../../helpers/helpers'
import { apiTokens } from '../../../../pages/api'
import { get } from 'local-storage'
import { TOKEN, USER_SESSION } from '../../../../consts/storageConst'
import { useState } from 'react'
import Loader from '../../atoms/loader/Loader'
import Button from '../../atoms/button/Button'

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
  const [Loading, setloading] = useState(false)
  const classprops: string = extractClass(styles, classname)

  const CloseSession = async () => {
    setloading(true)
    const obj = {
      "token":get(TOKEN),
      "userCode":get(USER_SESSION),
      "classCode":get(USER_SESSION)
  }
    await apiTokens.ByTokenClose(obj)
    localStorage.clear()
    setloading(false)
    window.location.href = "/";
  }

  return (
    <div className={classprops}>
         <Loader loading={Loading} />
      <Label {...labelWelcome} />
      <div className="d-flex">
        <Anchor {...anchorDatPer} />
           <a
              rel="noreferrer"
              className={anchorLogout.classname}
              onClick={CloseSession}
              style={{cursor:'pointer'}}
            >
              {anchorLogout.children}
            </a>
      </div>
    </div>
  )
}

export default Welcome
