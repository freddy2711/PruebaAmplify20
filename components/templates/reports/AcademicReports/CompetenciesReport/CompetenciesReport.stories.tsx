import { storiesOf } from '@storybook/react'
import styles from './CompetenciesReport.module.scss'

const defaultStyle = {
  outline: '1px solid #bebec2',
  backgroundColor: '#f0f1f5',
  borderRadius: '2px',
}

storiesOf(
  'Templates/reports/AcademicReports/CompetenciesReport/CompetenciesReport',
  module
)
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
  .add('competenciesReport', () => (
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
          Reporte de Evaluación de competencias por clase
        </div>

        <hr />

        <div className={styles.tabla}> tabla</div>

        <div className={styles.viewContenListBtns}>
          <div className={styles.botones}> botones </div>
          <div className={styles.viewListConten}>
            <div>label</div>
            <div>list</div>
          </div>
        </div>

        <div className={styles.tabla}> tabla dinamica </div>

        <div>
          <small>
            <strong>Tipo docente: (P)</strong> Principal / <strong>(S)</strong>{' '}
            Sustituto / <strong>(A)</strong> Auxiliar
          </small>
        </div>
      </div>
    </div>
  ))
