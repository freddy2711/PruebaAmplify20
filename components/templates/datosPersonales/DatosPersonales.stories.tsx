import { storiesOf } from '@storybook/react'
import styles from './datosPersonales.module.scss'

const defaultStyle = {
  outline: '1px solid #bebec2',
  backgroundColor: '#f0f1f5',
  borderRadius: '2px',
}

storiesOf('Templates/DatosPersonales', module).add('DatosPersonales', () => (
  <div
    className={styles.default}
    style={defaultStyle}
  >
    <div
      className={styles.header}
      style={defaultStyle}
    >
      <div
        className={styles.content}
        style={defaultStyle}
      >
        <div
          className={styles.headerContent}
          style={defaultStyle}
        >
          <div style={defaultStyle}>
            <img src="https://via.placeholder.com/150x76" />
          </div>
          <div style={defaultStyle}>[ HOY 07/06/2022 16:22:33 ]</div>
          <div style={defaultStyle}>Login</div>
        </div>
      </div>

      <div
        className={styles.navbr}
        style={defaultStyle}
      >
        <div
          className={styles.content}
          style={defaultStyle}
        >
          nav
        </div>
      </div>
    </div>

    <div
      className={styles.content}
      style={defaultStyle}
    >
      <div
        className={styles.container}
        style={defaultStyle}
      >
        <div
          className={styles.titulo}
          style={defaultStyle}
        >
          Datos Personales
        </div>

        <hr />

        <div
          className={styles.alertContent}
          style={defaultStyle}
        >
          alert
        </div>

        <div
          className={styles.confirmBtn}
          style={defaultStyle}
        >
          boton
        </div>

        <div className={styles.barContent}>progressbar</div>

        <div
          className={styles.tabsContent}
          style={defaultStyle}
        >
          tabsContent
        </div>
      </div>
    </div>

    <div
      className={styles.footer}
      style={defaultStyle}
    >
      <div
        className={styles.content}
        style={defaultStyle}
      >
        <div className={styles.contentFooter}>texto footer</div>
      </div>
    </div>
  </div>
))
