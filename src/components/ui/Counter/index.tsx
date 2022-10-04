import React, { FC, useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'

import Input from '../../../components/ui/Input'
import Icons from '../../../constants/icons'
import { defaultTheme } from '../../../styles/defaultTheme'

import * as SC from './styled'


type Props = {
  onChange: (value: number) => void
  value?: number
  label?: string
  maxValue?: number
  minValue?: number
  defaultValue?: number
  fullWidth?: boolean
}

const Counter: FC<Props> = (props) => {
  const { onChange, label, defaultValue, maxValue, minValue, value } = props
  const [valueState, setValueState] = useState(defaultValue || 0)

  const changeValue = (delta: number) => {
    let newValue = Math.max((value || valueState) + delta, minValue || 0)
    if (maxValue) newValue = Math.min(newValue, maxValue)
    if (value !== undefined) onChange(newValue)
    else setValueState(newValue)
  }

  useEffect(() => {
    if (value === undefined) onChange(valueState)
  }, [valueState, onChange])

  return (
    <ThemeProvider theme={defaultTheme}>
      <SC.Base>
        {label && <SC.Label>{label}</SC.Label>}
        <SC.Content>
          <SC.Button icon={Icons.plus} onClick={() => changeValue(1)} />
          <SC.InputContainer fullWidth={props.fullWidth || false}>
            <Input
              value={value || valueState}
              onChange={(e) => {
                const localValue = Number(e.target.value)
                if (!isNaN(localValue)) {
                  if (value !== undefined) onChange(localValue)
                  else setValueState(localValue)
                }
              }}
              // mask={[/\d/, /\d/]}
              // guide={false}
            />
          </SC.InputContainer>
          <SC.Button icon={Icons.minus} onClick={() => changeValue(-1)} />
        </SC.Content>
      </SC.Base>
    </ThemeProvider>
  )
}

export default Counter
