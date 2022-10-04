import React, { FC } from 'react'
import { ThemeProvider } from 'styled-components'

import { StyledSlider } from '../../../components/styled/StyledSlider'
import RadioButton from '../../../components/ui/RadioButton'
import { defaultTheme } from '../../../styles/defaultTheme'

import * as SC from './styled'


export const HOURLY_TYPE = 'hourly'
export const ANNUAL_TYPE = 'annual'

export type SalaryTypes = typeof HOURLY_TYPE | typeof ANNUAL_TYPE

export const salaryParams = {
  [HOURLY_TYPE]: {
    defaultValue: [0, 600],
    min: 0,
    max: 600,
    step: 1,
    minDistance: 1
  },
  [ANNUAL_TYPE]: {
    defaultValue: [0, 1248000],
    min: 0,
    max: 1248000,
    step: 12000,
    minDistance: 60000
  }
}

const formatMoney = (str: number, withSpace = false) => {
  return `$${withSpace ? ' ' : ''}${str.toLocaleString('en-US')}`
}

/*
  Calculated with:
    Hours per week: 40
    Days per week: 5
    Holidays per Year: 10
    Vacation Days per Year: 15
*/
const HOURS_PER_WEEK = 40
const WEEKS_PER_YEAR = 52 // Working weeks

const convertMoney = (value: number, oldType: SalaryTypes, newType: SalaryTypes) => {
  if (oldType === HOURLY_TYPE && newType === ANNUAL_TYPE) return value * HOURS_PER_WEEK * WEEKS_PER_YEAR

  if (oldType === ANNUAL_TYPE && newType === HOURLY_TYPE) return value / HOURS_PER_WEEK / WEEKS_PER_YEAR

  return value
}

type SalaryTypeButtonProps = {
  id: string
  label: string
  type: SalaryTypes
  checked: boolean
  onChange: (type: SalaryTypes) => void
}

const SalaryTypeButton: FC<SalaryTypeButtonProps> = (props) => {
  const { id, type, onChange, ...rest } = props
  const inputId = `${id}-${type}`

  return <RadioButton id={inputId} name={id} onChange={() => onChange(type)} value={type} {...rest} />
}

type PropsInput = {
  id: string
  onChange: (type: SalaryTypes, value: number[]) => void
  type: SalaryTypes
  value: number[]
  t: {
    hourly: string
    annual: string
  }
  input: true
}

type PropsPreview = {
  id?: never
  onChange?: never
  type: SalaryTypes
  value: number[]
  t?: {
    hourly: never
    annual: never
  }
  input?: never
}

const Salary: FC<PropsInput | PropsPreview> = (props) => {
  const { id, onChange = () => undefined, type, value, t, input } = props

  const onChangeType = (newType: SalaryTypes) => {
    onChange(
      newType,
      value.map(v => convertMoney(v, type, newType))
    )
  }

  const formattedMarkerValue = value.map(x => formatMoney(Math.floor(x), true))
  const formattedPreviewValue = value.map(x => formatMoney(Math.floor(x)))

  return (
    <ThemeProvider theme={defaultTheme}>
      <SC.Base>
        {input ? (
          <>
            {id && t &&
              <SC.SalaryTypes>
                <SalaryTypeButton
                  id={id}
                  type={ANNUAL_TYPE}
                  label={t.annual}
                  onChange={onChangeType}
                  checked={type === ANNUAL_TYPE}
                />
                <SalaryTypeButton
                  id={id}
                  type={HOURLY_TYPE}
                  label={t.hourly}
                  onChange={onChangeType}
                  checked={type === HOURLY_TYPE}
                />
              </SC.SalaryTypes>
            }
            <SC.MarkersContainer>
              <SC.Marker>{value && formattedMarkerValue[0]}</SC.Marker>
              <SC.Marker>{value && formattedMarkerValue[1]}</SC.Marker>
            </SC.MarkersContainer>
            <StyledSlider
              min={salaryParams[type].min}
              max={salaryParams[type].max}
              minDistance={salaryParams[type].minDistance}
              step={salaryParams[type].step}
              value={value}
              onChange={value => onChange(type, Array.isArray(value) ? value.concat([]) : [1])}
            />
          </>
        ) : (
          <SC.SalaryPreview>
            {value && formattedPreviewValue[0]}k - {value && formattedPreviewValue[1]}k
          </SC.SalaryPreview>
        )}
      </SC.Base>
    </ThemeProvider>
  )
}

export default Salary
