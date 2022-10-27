import Anchor from '../../atoms/anchor/Anchor'
import styles from './index.module.scss'
import { set } from 'local-storage'
import Router from 'next/router'
import { CONSULTA_DATA } from './../../../../consts/storageConst'

interface Props {
  item: any
}

const index = ({ item }: Props) => {
  // console.log(item)

  const getStatus = (state: any) => {
    switch (state) {
      case 'Registrado':
        return styles.Registrado
      case 'En Proceso':
        return styles.EnProceso
      case 'Atendido':
        return styles.Atendido
      default:
        return styles.Registrado
    }
  }

  const handleClick = (e: any, item: string) => {
    e.preventDefault()

    console.log(item)
    set(CONSULTA_DATA, item)
    Router.push('/soporte-virtual/detalle')
  }

  return (
    <td className="p-3">
      <p
        className="m-0 d-flex justify-content-between align-item-center"
        style={{ fontSize: '18px' }}
      >
        <span className="d-flex">
          <b>
            <span
              className="link-detail"
              title="Abrir detalle de la consulta"
            >
              <Anchor
                href="#"
                classname="text-black text-decoration-none"
                onClick={(e: any) => handleClick(e, item.id)}
              >
                {item.responseCode}
              </Anchor>
            </span>
          </b>
          <label
            className={`badge text-white ms-4 me-2 ${styles.estado} ${getStatus(
              item.state
            )}`}
          >
            {item.state}
          </label>
        </span>
        <span className="float-right">{item.registrationDate}</span>
      </p>
      <p className="m-0 mt-2 mb-1 text-start">
        <b>Tipo</b>: {item.Type} &nbsp; &nbsp; &nbsp; &nbsp;
        <b>Sub Tipo</b>: {item.subType}
      </p>
      <p className="m-0 mt-2 text-start">
        <b>Área / Asesor</b>: {item.responseArea} /{' '}
        {/*  Object.keys(item.asignedTo).length > 0 && item.asignedTo */}
      </p>
      <p className="m-0 mt-2 text-start">
        <b>Consulta</b>:
      </p>
      <div
        id="cphSite_dgvConsultas_lblConsultas_0"
        className="element-mb-0 ps-5 text-start"
        dangerouslySetInnerHTML={{ __html: item.response }}
      ></div>
      <br />
    </td>
  )
}

export default index
