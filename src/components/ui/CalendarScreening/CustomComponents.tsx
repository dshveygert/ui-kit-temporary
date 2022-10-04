import React, { FC } from 'react'
import { CaptionElementProps, NavbarElementProps, WeekdayElementProps } from 'react-day-picker'

import Icons from '../../../constants/icons'

import * as SC from './styled'


interface CustomNavbarProps extends NavbarElementProps {
  selectedMonth: Date
  setSelectedMonth: (d: Date) => void
}

export const MONTHS = {
  en: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]
}

export const CustomNavbar: FC<CustomNavbarProps> = (props) => {
  const { setSelectedMonth, selectedMonth, month } = props

  const onChangeMonth = (delta: number) => {
    const newDate = new Date(selectedMonth.getTime())
    newDate.setMonth(newDate.getMonth() + delta)
    setSelectedMonth(newDate)
  }

  return (
    <SC.DayPickerNavbar>
      <SC.NavbarButton icon={Icons.calendarLeft} onClick={() => onChangeMonth(-1)} />
      <SC.NavbarButton icon={Icons.calendarRight} onClick={() => onChangeMonth(1)} />
    </SC.DayPickerNavbar>
  )
}

interface CustomDayCellProps {
  day: Date
}

export const CustomDayCell: FC<CustomDayCellProps> = ({ day }) => <SC.DayCellBase>{day.getDate()}</SC.DayCellBase>

export const CustomCaptionElement: FC<CaptionElementProps> = ({ date }) => (
  <SC.CaptionElementBase>
    <SC.CaptionElementContainer>
      <SC.CalendarIcon />
      <SC.CaptionTitle>{`${MONTHS['en'][date.getMonth()]} ${date?.getFullYear()}`}</SC.CaptionTitle>
    </SC.CaptionElementContainer>
  </SC.CaptionElementBase>
)

export const CustomWeekdayElement: FC<WeekdayElementProps> = ({ weekday, locale, localeUtils }) => (
  <SC.WeekdayElementBase>{localeUtils.formatWeekdayShort(weekday, locale)}</SC.WeekdayElementBase>
)
