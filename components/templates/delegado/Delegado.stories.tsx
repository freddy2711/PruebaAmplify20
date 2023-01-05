/* eslint-disable @next/next/no-img-element */
import { storiesOf } from '@storybook/react'
import styles from './Delegado.module.scss'

const defaultStyle = {
  outline: '1px solid #bebec2',
  backgroundColor: '#f0f1f5',
  borderRadius: '2px',
}

storiesOf('Templates/Delegado', module)
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
              <img  alt=""  src="https://via.placeholder.com/150x76" />
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
  .add('Delegado', () => (
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
          Registrar Delegado
        </div>
        <hr />

        <div
          className={styles.alertaContent}
          style={defaultStyle}
        >
          alerta
        </div>

        <hr />

        <div className={styles.tabla}> tabla </div>

        <div>
          <small>
            <span>
              <strong>Tipo docente: (P)</strong> Principal /{' '}
              <strong>(S)</strong> Sustituto / <strong>(A)</strong> Auxiliar
            </span>
          </small>
          <br />
          <small>
            <span id="cphSite_lblTipoClase">
              <strong>Tipo Clase: (PR)</strong> Presencial /{' '}
              <strong>(VT)</strong> Virtual
            </span>
          </small>
        </div>
      </div>
    </div>
  ))
