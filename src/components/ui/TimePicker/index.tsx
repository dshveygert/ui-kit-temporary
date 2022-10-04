import React, { FC } from 'react'
import { ThemeProvider } from 'styled-components'

import { defaultTimes } from '../../../constants/times'
import { defaultTheme } from '../../../styles/defaultTheme'
import { isTimeEquals } from '../../../utils/dateFunctions'
import { capitalize } from '../../../utils/textTransformations'

import * as SC from './styled'


export type TimesTableType = {
  morning: Date[]
  afternoon: Date[]
  evening: Date[]
}

interface Props {
  availableTimes: TimesTableType
  selectedTimes: Date[]
  onChange: (day: Date) => void
}

const TimePicker: FC<Props> = ({ availableTimes, onChange, selectedTimes }) => (
  <ThemeProvider theme={defaultTheme}>
    <SC.Base>
      {Object.keys(defaultTimes).map((column, key) => (
        <SC.Column key={key}>
          <SC.ColumnTitle>{capitalize(column)}</SC.ColumnTitle>
          {defaultTimes[column as keyof TimesTableType].map((time, key) => {
            const isAvailable = availableTimes[column as keyof TimesTableType].some(availableTime => 
              isTimeEquals(availableTime, time)
            )
            return (
              <SC.TimeContainer 
                key={key} 
                disabled={!isAvailable}
                selected={selectedTimes.some(e => isTimeEquals(e, time))}
                onClick={() => isAvailable && onChange(time)}
              >
                {time.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}
              </SC.TimeContainer>
            )
          })}
        </SC.Column>
      ))}
    </SC.Base>
  </ThemeProvider>
)

export default TimePicker
