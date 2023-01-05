/* eslint-disable jsx-a11y/alt-text */
import Welcome, { Props as welcomeProps } from '../../molecules/welcome/Welcome'
import Image, { Props as imagePros } from '../../atoms/imagen/Imagen'
import styles from './index.module.scss'
import Reloj from '../../atoms/reloj/Reloj'

export interface Props {
  welcomeProps: welcomeProps
  imagePros: imagePros
}

const Header = ({ imagePros, welcomeProps }: Props) => {
  return (
    <section className={`${styles.headerContent} container`}>
      <div className={`${styles.header} mb-1`}>
        <Image {...imagePros} />
        <div>
          <Reloj />
        </div>
        <Welcome {...welcomeProps} />
      </div>
    </section>
  )
}

export default Header
