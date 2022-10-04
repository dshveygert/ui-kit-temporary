import React, { FC } from 'react'
import { ThemeProvider } from 'styled-components'

import { defaultTheme } from '../../../styles/defaultTheme'

import * as SC from './styled'


type SelectorType = {
  label: string
  value: string
  defaultChecked?: boolean
}

export type SelectorGroupVariantType = 'combined' | 'separated' | 'separated-outlined'

type Props = {
  id: string
  data: SelectorType[]
  onChange: (value: string) => void
  value?: string
  variant?: SelectorGroupVariantType
  size?: 's' | 'l'
}

const SelectorGroup: FC<Props> = (props) => {
  const { id, data, onChange, variant, size, value } = props

  return (
    <ThemeProvider theme={defaultTheme}>
      <SC.Base variant={variant}>
        {data.map((selector, i) => {
          const inputId = `${id}-${selector.value}`

          return (
            <SC.SelectorContainer key={i} size={size} variant={variant}>
              <SC.Input
                id={inputId}
                name={id}
                onChange={() => onChange(selector.value)}
                checked={value === selector.value}
              />
              <SC.SelectorLabel htmlFor={inputId} size={size}>
                {selector.label}
              </SC.SelectorLabel>
            </SC.SelectorContainer>
          )
        })}
      </SC.Base>
    </ThemeProvider>
  )
}

export default SelectorGroup
