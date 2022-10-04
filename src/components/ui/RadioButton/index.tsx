import React, { FC, ChangeEvent } from 'react'
import { ThemeProvider } from 'styled-components'

import { defaultTheme } from '../../../styles/defaultTheme'

import * as SC from './styled'


type Props = {
  id: string
  name: string
  label: string
  value: string
  checked: boolean
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  description?: string
  disableOpacity?: boolean
  error?: string
}

const RadioButton: FC<Props> = (props) => {
  const { id, label, description, disableOpacity, error, ...rest } = props
  return (
    <ThemeProvider theme={defaultTheme}>
      <SC.Base>
        <SC.Input id={id} error={error} {...rest} />
        <SC.Label 
          htmlFor={id} 
          description={description}
          disableOpacity={disableOpacity}
        >
          {label}
        </SC.Label>
        {!error && description &&
          <SC.Description
            disableOpacity={disableOpacity}
          >
            {description}
          </SC.Description>
        }
        {error &&
          <SC.Error>
            {error}
          </SC.Error>
        }
      </SC.Base>
    </ThemeProvider>
  )
}

export default RadioButton
