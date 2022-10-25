import styles from './index.module.scss'

const Footer = () => {
  return (
    <div className="pb-3">
      <div className={`container ${styles.footer}`}>
        <hr />
        <div className="text-center">
          <p className="m-0">
            <small>Versión {process.env.NEXT_PUBLIC_VERSION}</small>
          </p>
          <p className="m-0">
            <small>Universidad Privada del Norte</small>
          </p>
          <p className="m-0">
            <small>
              Copyright © <span id="year">2022</span>. All rights reserved.
            </small>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
