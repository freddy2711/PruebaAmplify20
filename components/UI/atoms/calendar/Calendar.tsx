import 'moment/locale/es'
import 'antd/dist/antd.css'
import esES from 'antd/lib/calendar/locale/es_ES'
import { Alert, Calendar } from 'antd'
import { Moment } from 'moment'
import { CalendarMode } from 'antd/lib/calendar/generateCalendar'

export interface Props {
  selectedValue: string
  dateCellRender: (value: Moment) => any
  onSelect: (newValue: Moment) => void
  onPanelChange?: (newValue: Moment, mode: CalendarMode) => void
}

const CalendarNew = ({
  selectedValue,
  dateCellRender,
  onSelect,
  onPanelChange,
}: Props) => {
  return (
    <>
      <Alert message={`Usted seleccionó la fecha: ${selectedValue}`} />
      <Calendar
        locale={esES}
        dateCellRender={dateCellRender}
        onSelect={onSelect}
        onPanelChange={onPanelChange}
      />
    </>
  )
}

export default CalendarNew
