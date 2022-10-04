import React, { FC, MouseEvent } from 'react'
import { ThemeProvider } from 'styled-components'

import { defaultTheme } from '../../../styles/defaultTheme'

import * as SC from './styled'


type Props = {
  label: string
  onClick: (e: MouseEvent<HTMLElement>) => void
}

const AddButton: FC<Props> = ({ label, onClick }) => (
  <ThemeProvider theme={defaultTheme}>
    <SC.Base>
      <SC.ButtonContainer onClick={onClick}>
        <SC.Button />
        <SC.Text>{label}</SC.Text>
      </SC.ButtonContainer>
    </SC.Base>
  </ThemeProvider>
)

export default AddButton
