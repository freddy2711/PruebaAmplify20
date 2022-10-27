import { useState } from 'react'
import { Form } from 'react-bootstrap'
import Button from '../../../../atoms/button/Button'
import Select from '../../../../atoms/select/Select'
import ExportCSV from '../../../../atoms/CSVLink/CSVLink'

const reportButtons = (props: any) => {
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
        <div className="row">
          <div
            style={props.width !== null ? { width: props.width } : undefined}
            className="col-sm-12 col-md-2"
          >
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

          <div
            className="col-sm-12 col-md-2"
            style={{ display: 'flex', gap: '10%' }}
          >
            {selectOption === '1' ? (
              <ExportCSV
                data={props.data}
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

            <Button
              type="button"
              variant="primary"
              disabled={false}
              onclick={() => props.callReportToReturn()}
            >
              Regresar
            </Button>
          </div>
        </div>
      </Form>
    </div>
  )
}

export default reportButtons
