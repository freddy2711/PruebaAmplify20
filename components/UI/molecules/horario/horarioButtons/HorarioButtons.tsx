import { useState } from 'react'
import { Form } from 'react-bootstrap'
import Button from '../../../atoms/button/Button'
import Select from '../../../atoms/select/Select'
import ExportCSV from '../../../atoms/CSVLink/CSVLink'
const HorarioButtons = (props: any) => {
  const [disable, setDisable] = useState(true)
  const [selectOption, setSelectOption] = useState('0')
  const handleSelectedChange = async (e: any) => {
    setDisable(false)
    if (e.target.value === '0') {
      setDisable(true)
    }
    setSelectOption(e.target.value)
  }
  return (
    <div>
      <Form>
        <div className="row mx-0 mb-2">
          <div className="col-sm-12 col-md-2 p-0">
            <Form.Check
              type={`radio`}
              id={`default_1`}
              label={`Horario UG - WA`}
              name={'horario'}
              checked={props.radioSelect.r1}
              onChange={props.radioActive}
            />
          </div>
          <div className="col-sm-12 col-md-3 p-0">
            <Form.Check
              type={`radio`}
              id={`default_2`}
              label={`Horario Inglés - EPEC`}
              name={'horario'}
              checked={props.radioSelect.r2}
              onChange={props.radioActive}
            />
          </div>
        </div>
        <div className="row col-12 mb-2">
          <div className="custom-control custom-checkbox">
            <Form.Check
              type={`checkbox`}
              id={`default-checkbox`}
              label={`Mostrar horas EAVU/WA`}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-3">
            <Select
              id="formato"
              classname="primary"
              name="formato"
              onChange={handleSelectedChange}
            >
              <option value={0}>Seleccione Formato</option>
              <option value={1}>Microsoft Excel</option>
              <option value={2}>Adobe Reader (PDF)</option>
            </Select>
          </div>
          <div className="col-sm-12 col-md-2">
            {selectOption === '1' ? (
              <ExportCSV
                data={props.horarios}
                headers={props.COLUMNS}
                filename={props.nameXLS}
              >
                <Button
                  type="button"
                  variant="primary"
                  disabled={disable}
                >
                  Exportar
                </Button>
              </ExportCSV>
            ) : (
              <Button
                type="button"
                variant="primary"
                disabled={disable}
                onclick={() => props.callReportPDF()}
              >
                Exportar
              </Button>
            )}
          </div>
        </div>
      </Form>
    </div>
  )
}

export default HorarioButtons
