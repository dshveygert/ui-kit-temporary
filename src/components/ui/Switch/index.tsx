import React, { FC, ChangeEvent } from 'react'
import { ThemeProvider } from 'styled-components'

import { defaultTheme } from '../../../styles/defaultTheme'

import * as SC from './styled'


type Props = {
  id: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  defaultChecked?: boolean
}

const Switch: FC<Props> = props => (
  <ThemeProvider theme={defaultTheme}>
    <SC.Base>
      <SC.Input type="checkbox" {...props} />
      <SC.Label htmlFor={props.id} />
    </SC.Base>
  </ThemeProvider>
)

export default Switch
