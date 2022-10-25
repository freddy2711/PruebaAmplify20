import { useEffect, useState } from 'react'
import styles from './index.module.scss'

const Reloj = () => {
  const date = new Date()
  const fechaHora = `HOY ${
    String(date.getDate()).padStart(2, '0') +
    '/' +
    String(date.getMonth() + 1).padStart(2, '0') +
    '/' +
    date.getFullYear()
  } ${date.toLocaleTimeString()}`

  const [hora, setHora] = useState(fechaHora)

  useEffect(() => {
    setInterval((): void => {
      const date = new Date()
      const fechaHora = `
        HOY 
        ${
          String(date.getDate()).padStart(2, '0') +
          '/' +
          String(date.getMonth() + 1).padStart(2, '0') +
          '/' +
          date.getFullYear()
        } 
        ${date.toLocaleTimeString()}
      `

      setHora(fechaHora)
    }, 500)
  }, [])
  return <p className={styles.textReloj}>[ {hora} ]</p>
}

export default Reloj
