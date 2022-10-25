import styles from './index.module.scss'

export interface Props {
  loading?: boolean
}

const Loader = ({ loading }: Props) => {
  return (
    <div
      id={styles.loader_wrapper}
      className={loading ? styles.Activo : styles.Oculto}
    >
      <div id={styles.loader}></div>
      <div className={`${styles.loader_section} ${styles.section_left}`}></div>
      <div className={`${styles.loader_section} ${styles.section_right}`}></div>
    </div>
  )
}

export default Loader
