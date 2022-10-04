import React, { FC, MouseEvent } from 'react'
import { ThemeProvider } from 'styled-components'

import Icons from '../../../constants/icons'
import { defaultTheme } from '../../../styles/defaultTheme'

import * as SC from './styled'


export type BackButtonProps = {
  text: string
  onClick: (event: MouseEvent) => void
}

const BackButton: FC<BackButtonProps> = ({ text, onClick }) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <SC.Base onClick={onClick}>
        <SC.BackButton>
          <img src={Icons.arrowBack} alt="arrow back icon" />
        </SC.BackButton>
        <SC.BackText>{text}</SC.BackText>
      </SC.Base>
    </ThemeProvider>
  )
}

export default BackButton
