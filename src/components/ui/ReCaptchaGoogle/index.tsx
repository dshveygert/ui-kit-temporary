import React, { FC } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { ThemeProvider } from 'styled-components'

import { defaultTheme } from '../../../styles/defaultTheme'

import * as SC from './styled'


export type ReCaptchaGoogleProps = {
  onChange: (token: string | null) => void
}

const ReCaptchaGoogle: FC<ReCaptchaGoogleProps> = (props) => {
  const { onChange } = props

  return (
    <ThemeProvider theme={defaultTheme}>
      <SC.Base>
        <ReCAPTCHA sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" hl="en" onChange={onChange} />
      </SC.Base>
    </ThemeProvider>
  )
}

export default ReCaptchaGoogle
