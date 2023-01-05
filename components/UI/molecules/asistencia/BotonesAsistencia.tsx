import { Form } from 'react-bootstrap'
import styles from './BotonesAsistencia.module.scss'
import useDatosAsis from './../../../../hooks/useDatosAsis'

const BotonesAsistencia = ({
  idAlu,
  datos,
  setDatos,
  defaultCheck,
  disabledbtn,
}: any) => {
  const onChecked = (e: any) => {
    const valor = e.target.value
    console.log(valor)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const datosModificados = useDatosAsis(datos, valor, idAlu)
    setDatos(datosModificados)
  }

  return (
    <div className={styles.btnAsistencia}>
      <Form.Check
        type={`radio`}
        id={`default-checkbox-radio1_${idAlu}`}
        label={`A`}
        name={idAlu}
        value={'A'}
        onChange={(e) => onChecked(e)}
        defaultChecked={defaultCheck === 'A'}
        disabled={disabledbtn}
      />

      <Form.Check
        type={`radio`}
        id={`default-checkbox-radio2_${idAlu}`}
        label={`T`}
        name={idAlu}
        value={'T'}
        onChange={(e) => onChecked(e)}
        defaultChecked={defaultCheck === 'T'}
        disabled={disabledbtn}
      />

      <Form.Check
        type={`radio`}
        id={`default-checkbox-radio3_${idAlu}`}
        label={`F`}
        name={idAlu}
        value={'F'}
        onChange={(e) => onChecked(e)}
        defaultChecked={defaultCheck === 'F'}
        disabled={disabledbtn}
      />
      <Form.Check
        type={`radio`}
        id={`default-checkbox-radio4_${idAlu}`}
        label={`N`}
        name={idAlu}
        value={'N'}
        onChange={(e) => onChecked(e)}
        defaultChecked={defaultCheck === 'N'}
        disabled={disabledbtn}
      />
    </div>
  )
}

export default BotonesAsistencia
