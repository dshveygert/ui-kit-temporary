import React, { FC } from 'react'
import { ThemeProvider } from 'styled-components'

import Icons from '../../../constants/icons'
import { defaultTheme } from '../../../styles/defaultTheme'

import * as SC from './styled'


export type ErrorResponseToastProps = {
  text: string
}
const ErrorResponseToast: FC<ErrorResponseToastProps> = (props) => {
  const { text } = props
  return (
    <ThemeProvider theme={defaultTheme}>
      <SC.Base>
        <SC.ErrorIcon>
          <img src={Icons.attention} alt="attention icon" width={16} height={16} />
        </SC.ErrorIcon>
        <div>
          <SC.ErrorTitle>Attention</SC.ErrorTitle>
          <SC.ErrorText>{text}</SC.ErrorText>
        </div>
      </SC.Base>
    </ThemeProvider>
  )
}

export default ErrorResponseToast
