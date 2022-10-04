import React, { FC, MouseEvent } from 'react'
import { ReactSVG } from 'react-svg'
import { ThemeProvider } from 'styled-components'

import Icons from '../../../constants/icons'
import { defaultTheme } from '../../../styles/defaultTheme'

import * as SC from './styled'


export type ButtonProps = {
  size: 's' | 'l'
  text?: string
  variant?: 'contained' | 'outlined' | 'accepted'
  className?: string
  disabled?: boolean
  icon?: string
  hint?: string
  onClick?: (event: MouseEvent) => void
  loading?: boolean
}

const Button: FC<ButtonProps> = (props) => {
  const { text, icon, hint, onClick, loading = false } = props

  return (
    <ThemeProvider theme={defaultTheme}>
      <SC.Base onClick={onClick} {...props}>
        <SC.Content>
          {loading ? (
            <SC.IconLoader>
              <img src={Icons.loader} alt="loader icon" width={24} height={24} />
            </SC.IconLoader>
          ) : (
            icon && (
              <SC.Icon>
                <ReactSVG src={icon} />
              </SC.Icon>
            )
          )}
          {!loading && text}
        </SC.Content>
        {hint && <SC.Hint>{hint}</SC.Hint>}
      </SC.Base>
    </ThemeProvider>
  )
}

export default Button
