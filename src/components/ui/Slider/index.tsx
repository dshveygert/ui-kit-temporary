import React, { FC } from 'react'
import { ThemeProvider } from 'styled-components'

import { StyledSlider } from '../../../components/styled/StyledSlider'
import { defaultTheme } from '../../../styles/defaultTheme'

import * as SC from './styled'


type Props = {
  onChange: (value: number[]) => void
  params: {
    defaultValue: number[]
    min: number
    max: number
    step: number
    minDistance: number
  }
  value?: number[]
  hint?: string
  formatMarker?: (value: number) => string
  label?: string
}

const Slider: FC<Props> = (props) => {
  const { onChange, params, formatMarker, hint, label, value } = props

  const markerValues = value || params.defaultValue

  return (
    <ThemeProvider theme={defaultTheme}>
      <SC.Base>
        {label && <SC.Label>{label}</SC.Label>}
        <SC.MarkersContainer hint={!!hint}>
          <SC.Marker>{formatMarker?.(markerValues[0]) || markerValues[0]}</SC.Marker>
          {hint && <SC.Marker textAlign="center">{hint}</SC.Marker>}
          <SC.Marker textAlign="right">{formatMarker?.(markerValues[1]) || markerValues[1]}</SC.Marker>
        </SC.MarkersContainer>
        <StyledSlider
          min={params.min}
          max={params.max}
          minDistance={params.minDistance}
          step={params.step}
          value={value}
          onChange={val => onChange(val as number[])}
        />
      </SC.Base>
    </ThemeProvider>
  )
}

export default Slider
