/* eslint-disable @next/next/no-img-element */
import { storiesOf } from '@storybook/react'
import styles from '../registrar/Registrar.module.scss'

const defaultStyle = {
  outline: '1px solid #bebec2',
  backgroundColor: '#f0f1f5',
  borderRadius: '2px',
}

storiesOf('Templates/recuperarAdelantar/registrar', module)
  .addDecorator((Story) => (
    <div style={{ height: '600px' }}>
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
              <img
                alt=""
                src="https://via.placeholder.com/150x76"
              />
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
      <Story />
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
  .add('registrar', () => (
    <div
      className={styles.contenido}
      style={defaultStyle}
    >
      <div
        className={styles.content}
        style={defaultStyle}
      >
        <div
          className={styles.titulo}
          style={defaultStyle}
        >
          Recuperar/Adelantar clases
        </div>

        <hr />

        <div
          className={styles.botones}
          style={defaultStyle}
        >
          Botones
        </div>

        <hr />

        <div className={styles.tabla}> tabla </div>

        <div
          className={styles.alertaContent}
          style={defaultStyle}
        >
          Alerta
        </div>

        <div className={styles.blockRadioButton}>RadioButton</div>

        <div className={styles.blocFormValidateRow}>select / date Picker</div>

        <div className={styles.blocFormValidateRowTable}>Table</div>

        <div className={styles.blocFormValidateRow}>select / text</div>

        <div className={styles.blocFormValidateRow}>select / texarea</div>

        <div>
          <b>checkbox</b>
        </div>

        <div className={styles.botonesAlign}>Buttons</div>
      </div>
    </div>
  ))
