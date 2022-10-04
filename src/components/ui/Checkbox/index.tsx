import React, { FC, ChangeEvent } from 'react'
import { ThemeProvider } from 'styled-components'

import { defaultTheme } from '../../../styles/defaultTheme'

import * as SC from './styled'


type Props = {
  id: string
  name: string
  value: string
  label?: string
  defaultChecked?: boolean
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const Checkbox: FC<Props> = ({ id, label, ...rest }) => (
  <ThemeProvider theme={defaultTheme}>
    <SC.Base>
      <SC.Input id={id} {...rest} />
      <SC.Label htmlFor={id}>{label}</SC.Label>
    </SC.Base>
  </ThemeProvider>
)

export default Checkbox
