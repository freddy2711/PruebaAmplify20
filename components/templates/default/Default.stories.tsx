import { storiesOf } from '@storybook/react'
import styles from './Default.module.scss'

const defaultStyle = {
  outline: '1px solid #bebec2',
  backgroundColor: '#f0f1f5',
  borderRadius: '2px',
}

storiesOf('Templates/Default', module)
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
  .add('Default', () => (
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
          Página Principal
        </div>
        <hr />

        <div
          className={styles.alertContent}
          style={defaultStyle}
        >
          alert
        </div>

        <div className={styles.contentButonTitle}>
          <div>
            <h2>COMANEI 2018</h2>
            <div>BOTON Ver conferencia en vivo</div>
          </div>
          <div>
            <strong>
              <span>
                Sesiones programadas para HOY: MIÉRCOLES, 22 DE JUNIO DE 2022
              </span>
            </strong>
          </div>
        </div>

        <hr />

        <div className={styles.tablas}>Tabla 1</div>

        <div className={styles.tablas}>Tabla 2</div>

        <div className={styles.comment}>
          <small>
            <span id="cphSite_lblTipoDocente">
              <strong>Tipo docente: (P)</strong> Principal /{' '}
              <strong>(S)</strong> Sustituto / <strong>(A)</strong> Auxiliar
            </span>
          </small>
          <small>
            <div className="mb-2">
              <p className="m-0">
                ¿Tiene sesiones de clase abiertas y necesita finalizarlas?
              </p>
              <a
                className="text-decoration-none"
                href="SesionAb"
              >
                Finalizar mis sesiones de clase abiertas.
              </a>
            </div>
            <div className="mb-2">
              <p className="m-0">
                ¿Ingresó TODAS sus notas y desea ENVIARLAS a Secretaría
                Académica?
              </p>
              <a
                className="text-decoration-none"
                href="EnvNotasSel"
              >
                Enviar mis notas a Secretaría Académica
              </a>
            </div>
            <p className="">
              Mayor información en los manuales de la opción Ayuda del sistema.
            </p>
          </small>
        </div>
      </div>
    </div>
  ))
