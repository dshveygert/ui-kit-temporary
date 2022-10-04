import React, { FC, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'

import Calendar from '../../../components/ui/Calendar'
import SelectorGroup from '../../../components/ui/SelectorGroup'
import { defaultTheme } from '../../../styles/defaultTheme'
import { formatDate } from '../../../utils/formatFunctions'

import * as SC from './styled'


const getNextMonth = () => {
  const date = new Date()
  date.setMonth(date.getMonth() + 1)
  return formatDate(date)
}

const getTwoWeeks = () => {
  const date = new Date()
  date.setDate(date.getDate() + 14)
  return formatDate(date)
}

export enum ChooseDateSelectors {
  Immediately,
  InTwoWeeks,
  InMonth
}

const selectors = [
  {
    label: 'Immediately',
    value: formatDate(new Date())
  },
  {
    label: 'In 2 weeks',
    value: getTwoWeeks()
  },
  {
    label: 'In month',
    value: getNextMonth()
  }
]

type Props = {
  id: string
  onChange: (value: string) => void
  value: string
  label?: string
  placeholder?: string
  error?: string
  variant?: 'separated' | 'separated-outlined' | 'combined'
  defaultValue?: ChooseDateSelectors
}

const ChooseDate: FC<Props> = (props) => {
  const { id, onChange, label, value, placeholder, error, variant, defaultValue } = props

  useEffect(() => {
    onChange(selectors[defaultValue || 0].value)
  }, [])

  return (
    <ThemeProvider theme={defaultTheme}>
      <SC.Base>
        {label && <SC.Label>{label}</SC.Label>}
        <SC.SelectorGroupContainer>
          <SelectorGroup
            id={`${id}-choose-date`}
            data={selectors}
            variant={variant || 'separated'}
            onChange={value => onChange(value)}
            value={formatDate(new Date(value))}
          />
        </SC.SelectorGroupContainer>
        <Calendar 
          onChange={day => onChange(formatDate(new Date(day)))} 
          value={new Date(value).toString()}
          placeholder={placeholder}
          error={error}
        />
      </SC.Base>
    </ThemeProvider>
  )
}

export default ChooseDate
