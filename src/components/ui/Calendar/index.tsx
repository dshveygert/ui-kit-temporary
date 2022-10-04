import React, { createRef, FC, useState } from 'react'
import DayPickerInput from 'react-day-picker/DayPickerInput'
// import 'react-day-picker/lib/style.css'
import { ThemeProvider } from 'styled-components'

import { defaultTheme } from '../../../styles/defaultTheme'
import { MONTHS } from '../../../constants/calendar'

import { CustomOverlay, CustomNavbar, CustomDayCell, CustomInput } from './CustomComponents'
import * as SC from './styled'


function formatToString(d: Date) {
  return `${d.getDate()} ${MONTHS['en'][d.getMonth()]}, ${d.getFullYear()}`
}

function parseDate(str?: string): Date {
  if (str === undefined)
    return new Date()
  return new Date(Date.parse(str))
}

function isValidDate(d: Date) {
  return d.getTime() === d.getTime()
}

interface CalendarProps {
  onChange: (day: string) => void
  value?: string
  placeholder?: string
  error?: string
}

const Calendar: FC<CalendarProps> = (props) => {
  const { onChange, placeholder, value, error } = props
  const dayPickerRef = createRef<DayPickerInput>()
  const [selectedMonth, setSelectedMonth] = useState<Date>(new Date())
  const parsedValue = parseDate(value)

  return (
    <ThemeProvider theme={defaultTheme}>
      <SC.Base>
        <DayPickerInput
          ref={dayPickerRef}
          overlayComponent={(props: any) => <CustomOverlay dayPickerRef={dayPickerRef} {...props} />}
          hideOnDayClick={false}
          formatDate={formatToString}
          placeholder={placeholder || 'Choose day'}
          value={isValidDate(parsedValue) ? formatToString(parsedValue) : undefined}
          dayPickerProps={{
            firstDayOfWeek: 0,
            className: 'DayPicker',
            showOutsideDays: true,
            month: selectedMonth,
            selectedDays: parsedValue,
            captionElement: () => null,
            navbarElement: function NavbarElement(props) {
              return <CustomNavbar {...props} selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth} />
            },
            renderDay: function DayElement(day: Date) {
              return <CustomDayCell day={day} />
            },
            onDayClick: (day: Date) => setSelectedMonth(day)
          }}
          parseDate={parseDate}
          keepFocus={true}
          component={(props: any) => <CustomInput error={error} {...props} />}
          onDayChange={day => onChange(formatToString(day))}
          inputProps={{ readOnly: true }}
        />
      </SC.Base>
    </ThemeProvider>
  )
}

export default Calendar
