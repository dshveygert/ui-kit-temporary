import React, { FC } from 'react'
import { ThemeProvider } from 'styled-components'

import Icons from '../../../constants/icons'
import { defaultTheme } from '../../../styles/defaultTheme'

import * as SC from './styled'


type Props = {
  onResend: () => void
  text: string
  t: {
    resendIconAlt: string
  }
}

const ResendButton: FC<Props> = ({ onResend, text, t }) => (
  <ThemeProvider theme={defaultTheme}>
    <SC.ResendButtonContainer onClick={onResend}>
      <SC.Icon>
        <img src={Icons.resendArrow} alt={t.resendIconAlt} />
      </SC.Icon>
      <SC.ResendButtonText>{text}</SC.ResendButtonText>
    </SC.ResendButtonContainer>
  </ThemeProvider>
)

export default ResendButton
