import React, { FC, useState } from 'react'
import DayPicker, { DateUtils, DayModifiers } from 'react-day-picker'
import { ThemeProvider } from 'styled-components'

import { defaultTheme } from '../../../styles/defaultTheme'

import { CustomNavbar, CustomDayCell, CustomCaptionElement, CustomWeekdayElement } from './CustomComponents'
import * as SC from './styled'


interface CalendarProps {
  selectedDay?: Date
  onChange: (day: Date) => void
  availableDates: Date[]
}

const isDayDisabled = (day: Date, availableDates: Date[]) => {
  if (!availableDates) return true
  return !availableDates.some(availableDate =>
    DateUtils.isSameDay(day, availableDate)  
  )
}

const CalendarScreening: FC<CalendarProps> = (props) => {
  const { availableDates, onChange, selectedDay } = props
  const [selectedMonth, setSelectedMonth] = useState<Date>(availableDates[0] || new Date())

  const onDayClick = (day: Date, modifiers: DayModifiers) => {
    if (!modifiers.disabled) onChange(day)
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <SC.Base>
        <SC.DefaultDayPickerStyles>
        <DayPicker
          captionElement={CustomCaptionElement}
          navbarElement={function NavbarElement(props) {
            return <CustomNavbar {...props} selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth} />
          }}
          weekdayElement={CustomWeekdayElement}
          renderDay={function DayElement(day: Date) {
            return <CustomDayCell day={day} />
          }}
          disabledDays={(day: Date) => isDayDisabled(day, availableDates)}
          month={selectedMonth}
          onDayClick={onDayClick}
          selectedDays={selectedDay}
          showOutsideDays
        />
        </SC.DefaultDayPickerStyles>
      </SC.Base>
    </ThemeProvider>
  )
}

export default CalendarScreening
