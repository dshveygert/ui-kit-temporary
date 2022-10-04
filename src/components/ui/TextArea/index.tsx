import React, { forwardRef, ForwardRefRenderFunction, TextareaHTMLAttributes } from 'react'
import { ThemeProvider } from 'styled-components'

import { defaultTheme } from '../../../styles/defaultTheme'

import * as SC from './styled'


export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string
  bold?: boolean
  label?: string
}

const TextArea: ForwardRefRenderFunction<HTMLTextAreaElement, TextAreaProps> = (props, ref) => {
  const { error, bold, label, disabled, ...rest } = props

  return (
    <ThemeProvider theme={defaultTheme}>
      <SC.Base bold={bold}>
        {label && <SC.Label>{label}</SC.Label>}
        <SC.InputContainer error={error} disabled={disabled}>
          <textarea ref={ref} className="input" disabled={disabled} {...rest} />
        </SC.InputContainer>
        {error && <SC.Error>{error}</SC.Error>}
      </SC.Base>
    </ThemeProvider>
  )
}

export default forwardRef(TextArea)
