import { ProgressBar } from 'react-bootstrap'
import { ThemeColors } from '../../../../consts/theme'

export interface Props {
  now: number
  variant?: typeof ThemeColors[number]
  label?: string
}

const ProgressBars = ({ now = 0, variant = 'primary', label }: Props) => {
  return (
    <ProgressBar
      now={now}
      min={0}
      max={100}
      label={`${label} ${now}%`}
      variant={variant}
    />
  )
}

export default ProgressBars
