import React, { FC, useRef, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { DateUtils } from 'react-day-picker'

import ForTabletDesktop from '../../styled/ForTabletDesktop'
import ForMobile from '../../styled/ForMobile'
import { defaultTheme } from '../../../styles/defaultTheme'
import CalendarScreening from '../CalendarScreening'
import useOnClickOutside from '../../../hooks/common/useOnClickOutside'
import Input from '../Input'
import Button from '../Button'
import TimePicker, { TimesTableType } from '../TimePicker'
import BackButton from '../BackButton'
import { isTimeEquals } from '../../../utils'
import { defaultTimesJoined } from '../../../constants'

import * as SC from './styled'


const emptyTimesTable: TimesTableType = {
  morning: [],
  afternoon: [],
  evening: []
}

interface ScreeningsModalProps {
  onCloseModal: () => void
  availableDates: AvailableDateType[]
  onChange: (times: Date[], description: string) => void
  isLoading: boolean
  t: {
    title: string
    description: string
    fieldDescriptionTitle: string
    fieldDescriptionPlaceholder: string
    confirmButton: string
    backButton: string
  }
}

export type AvailableDateType = {
  date: Date
  times: TimesTableType
}

export type TimeItemType = {
  disabled?: boolean
  selected: boolean
  date: Date
}

const ScreeningsModal: FC<ScreeningsModalProps> = (props) => {
  const { onCloseModal, t, onChange, isLoading, availableDates } = props

  const [selectedDay, setSelectedDay] = useState<AvailableDateType | undefined>(availableDates[0] || undefined)
  // SelectedTimes have only sequential times
  const [selectedTimes, setSelectedTimes] = useState<Date[]>([])
  const [description, setDescription] = useState('')

  const ref = useRef(null)

  useOnClickOutside(ref, onCloseModal)

  const onChangeDay = (day: Date) => {
    const newSelectedDay = availableDates.find(x => DateUtils.isSameDay(day, x.date)) || 
      availableDates[0] || 
      undefined
    if (selectedDay && newSelectedDay && !DateUtils.isSameDay(selectedDay.date, newSelectedDay.date))
      setSelectedTimes([])
    setSelectedDay(newSelectedDay)
  }

  const onChangeTime = (time: Date) => {
    if (selectedTimes.length === 0) {
      setSelectedTimes([time])
      return
    }

    const selectedTimesCurrentIndex = selectedTimes.findIndex(e => isTimeEquals(e, time))
    if (selectedTimesCurrentIndex !== -1) {
      if (selectedTimesCurrentIndex === 0 || selectedTimesCurrentIndex === selectedTimes.length - 1)
        setSelectedTimes(selectedTimes.filter(e => !isTimeEquals(e, time)))
      return
    }

    const earliestTimeIndex = defaultTimesJoined.findIndex(e => isTimeEquals(e, selectedTimes[0]))
    const currentTimeIndex = defaultTimesJoined.findIndex(e => isTimeEquals(e, time))

    if (earliestTimeIndex === -1 || currentTimeIndex === -1) {
      // Impossible case because selectedTimes[0] and time are from defaultTimes
      return
    }

    if (currentTimeIndex === earliestTimeIndex - 1) {
      setSelectedTimes([time, ...selectedTimes])
      return
    }

    if (currentTimeIndex === earliestTimeIndex + selectedTimes.length) {
      setSelectedTimes([...selectedTimes, time])
      return
    }
  }

  const onConfirm = () => {
    if (selectedTimes.length === 0 || !selectedDay) return
    const resultTimes = [...selectedTimes].map((e) => {
      e.setFullYear(selectedDay.date.getFullYear())
      e.setMonth(selectedDay.date.getMonth())
      e.setDate(selectedDay.date.getDate())
      return e
    })
    onChange(resultTimes, description)
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <SC.Base ref={ref}>
        <SC.ModalContent>
          <ForMobile>
            <SC.BackButtonContainer>
              <BackButton text={t.backButton} onClick={() => onCloseModal()} />
            </SC.BackButtonContainer>
          </ForMobile>
          <ForTabletDesktop>
            <SC.CloseIcon onClick={() => onCloseModal()} />
          </ForTabletDesktop>
          <SC.Header>
            <SC.Title>{t.title}</SC.Title>
            <SC.Description>{t.description}</SC.Description>
          </SC.Header>
          <SC.SelectDateContainer>
            <SC.CalendarScreeningContainer>
              <CalendarScreening 
                availableDates={availableDates.map(x => x.date)}
                selectedDay={selectedDay?.date}
                onChange={onChangeDay}
              />
            </SC.CalendarScreeningContainer>
            <TimePicker
              availableTimes={selectedDay?.times || emptyTimesTable}
              selectedTimes={selectedTimes}
              onChange={onChangeTime} 
            />
          </SC.SelectDateContainer>
          <SC.FieldContainer>
            <SC.FieldTitle>
              {t.fieldDescriptionTitle}
            </SC.FieldTitle>
            <Input 
              placeholder={t.fieldDescriptionPlaceholder}
              value={description} 
              onChange={e => setDescription(e.currentTarget.value)} 
            />
          </SC.FieldContainer>
          <SC.ButtonContainer>
            <Button 
              size="s"
              variant="contained"
              text={t.confirmButton}
              disabled={selectedTimes.length === 0}
              loading={isLoading}
              onClick={onConfirm}
            />
          </SC.ButtonContainer>
        </SC.ModalContent>
      </SC.Base>
    </ThemeProvider>
  )
}

export default ScreeningsModal
