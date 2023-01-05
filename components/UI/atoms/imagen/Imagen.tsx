/* eslint-disable @next/next/no-img-element */
import styles from './index.module.scss'
import classNames from 'classnames'
import { extractClass } from '../../../../helpers/helpers'

export interface Props {
  src: string
  alt: string
  classname?: string
}

const Image = ({
  src = 'https://via.placeholder.com/150',
  alt = 'test',
  classname = 'img-thumbnail',
}: Props) => {
  const classprops: string = classNames(extractClass(styles, classname))

  return (
    <img
      src={src}
      alt={alt}
      className={classprops}
    />
  )
}

export default Image
