/* eslint-disable @next/next/no-img-element */
import { storiesOf } from '@storybook/react'
import styles from './DocumentosManuales.module.scss'

const defaultStyle = {
  outline: '1px solid #bebec2',
  backgroundColor: '#f0f1f5',
  borderRadius: '2px',
}

storiesOf('Templates/documentosManuales', module)
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
  .add('documentosManuales', () => (
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
          Title
        </div>

        <hr />

        <div>conte</div>

        <div
          className={styles.titulo}
          style={defaultStyle}
        >
          Title
        </div>

        <hr />

        <div>conte</div>
      </div>
    </div>
  ))
