/* eslint-disable @next/next/no-img-element */
import { storiesOf } from '@storybook/react'
import styles from './solMarcacion.module.scss'

const defaultStyle = {
  outline: '1px solid #bebec2',
  backgroundColor: '#f0f1f5',
  borderRadius: '2px',
}

storiesOf('Templates/SolicitudMarcacion', module)
  .addDecorator((Story: any) => (
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
  .add('SolicitudMarcacion', () => (
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
          Solicitud de Marcación
        </div>
        <hr />

        <div
          className={styles.alertaContent}
          style={defaultStyle}
        >
          alerta
        </div>

        <div className={styles.rowButtons}>
          <div>Sesiones NO iniciadas</div>
          <div>Sesiones NO cerradas</div>
          <div>Estado de solicitudes</div>
        </div>

        <hr />

        <div className={styles.tabla}> tabla </div>
      </div>
    </div>
  ))
