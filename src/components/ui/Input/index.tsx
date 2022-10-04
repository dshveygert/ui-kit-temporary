import React, { forwardRef, ForwardRefRenderFunction, InputHTMLAttributes } from 'react'
import { ReactSVG } from 'react-svg'
import { ThemeProvider } from 'styled-components'

import { defaultTheme } from '../../../styles/defaultTheme'

import * as SC from './styled'


export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: string
  iconPosition?: 'left' | 'right'
  onIconClick?: (event: React.MouseEvent<HTMLElement>) => void
  error?: string
  bold?: boolean
  label?: string
}

const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (props, ref) => {
  const { type, icon, iconPosition, onIconClick, error, bold, label, disabled, ...rest } = props

  return (
    <ThemeProvider theme={defaultTheme}>
      <SC.Base bold={bold}>
        {label && <SC.Label>{label}</SC.Label>}
        <SC.InputContainer error={error} icon={!!icon} iconPosition={iconPosition} disabled={disabled}>
          {icon && (
            <SC.Icon iconPosition={iconPosition} onClick={onIconClick}>
              <ReactSVG src={icon} />
            </SC.Icon>
          )}
          <input ref={ref} className="input" type={type || 'text'} disabled={disabled} {...rest} />
        </SC.InputContainer>
        {error && <SC.Error>{error}</SC.Error>}
      </SC.Base>
    </ThemeProvider>
  )
}

export default forwardRef(Input)
