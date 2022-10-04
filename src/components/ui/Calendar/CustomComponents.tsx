import React, { createRef, FC, RefObject } from 'react'
import { NavbarElementProps } from 'react-day-picker'
import DayPickerInput from 'react-day-picker/types/DayPickerInput'

import Input from '../Input'
import { MONTHS } from '../../../constants/calendar'
import Icons from '../../../constants/icons'

import * as SC from './styled'


interface CustomOverlayProps {
  dayPickerRef: RefObject<DayPickerInput>
}

export const CustomOverlay: FC<CustomOverlayProps> = (props) => {
  const { children, dayPickerRef, ...rest } = props

  return (
    <SC.OverlayBase className="DayPickerInput-Overlay" {...rest}>
      {children}
      <SC.OverlayButton onClick={() => dayPickerRef?.current?.hideDayPicker()}>Apply</SC.OverlayButton>
    </SC.OverlayBase>
  )
}

interface CustomNavbarProps extends NavbarElementProps {
  selectedMonth: Date
  setSelectedMonth: (d: Date) => void
}

export const CustomNavbar: FC<CustomNavbarProps> = (props) => {
  const { setSelectedMonth, selectedMonth, month } = props

  const onChangeYear = (delta: number) => {
    const newDate = new Date(selectedMonth.getTime())
    newDate.setFullYear(newDate.getFullYear() + delta)
    setSelectedMonth(newDate)
  }

  const onChangeMonth = (delta: number) => {
    const newDate = new Date(selectedMonth.getTime())
    newDate.setMonth(newDate.getMonth() + delta)
    setSelectedMonth(newDate)
  }

  return (
    <SC.DayPickerNavbar className="DayPicker-NavBar">
      <SC.ButtonsContainer>
        <SC.NavbarButton icon={Icons.calendarDoubleLeft} onClick={() => onChangeYear(-1)} />
        <SC.NavbarButton icon={Icons.calendarLeft} onClick={() => onChangeMonth(-1)} />
      </SC.ButtonsContainer>
      <SC.CaptionTitle>{`${MONTHS['en'][month.getMonth()]}, ${month?.getFullYear()}`}</SC.CaptionTitle>
      <SC.ButtonsContainer>
        <SC.NavbarButton icon={Icons.calendarRight} onClick={() => onChangeMonth(1)} />
        <SC.NavbarButton icon={Icons.calendarDoubleRight} onClick={() => onChangeYear(1)} />
      </SC.ButtonsContainer>
    </SC.DayPickerNavbar>
  )
}

interface CustomDayCellProps {
  day: Date
}

export const CustomDayCell: FC<CustomDayCellProps> = ({ day }) => <SC.DayCell>{day.getDate()}</SC.DayCell>

export class CustomInput extends React.Component {
  innerInputRef: React.RefObject<HTMLInputElement>
  constructor(props: any) {
    super(props)
    this.innerInputRef = createRef()
  }

  focus = () => this.innerInputRef?.current?.focus()

  render() {
    return <Input ref={this.innerInputRef} icon={Icons.calendar} iconPosition="right" {...this.props} />
  }
}
