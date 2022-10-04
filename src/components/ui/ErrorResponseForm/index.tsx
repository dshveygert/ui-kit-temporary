import React, { FC } from 'react'
import { ThemeProvider } from 'styled-components'

import Icons from '../../../constants/icons'
import { defaultTheme } from '../../../styles/defaultTheme'

import * as SC from './styled'


export type ErrorResponseFormProps = {
  error: string
}

const ErrorResponseForm: FC<ErrorResponseFormProps> = ({ error }) => (
  <ThemeProvider theme={defaultTheme}>
    <SC.Base>
      <SC.ErrorIcon>
        <img src={Icons.attention} alt="attention icon" width={16} height={16} />
      </SC.ErrorIcon>
      <SC.ErrorText>{error}</SC.ErrorText>
    </SC.Base>
  </ThemeProvider>
)

export default ErrorResponseForm
