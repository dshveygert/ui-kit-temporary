import React, { FC, useRef } from 'react'
import { ThemeProvider } from 'styled-components'

import Button from '../../ui/Button'
import useOnClickOutside from '../../../hooks/common/useOnClickOutside'
import { defaultTheme } from '../../../styles/defaultTheme'

import * as SC from './styled'


type Props = {
  title: string
  description: string
  buttons: {
    text: string
    variant: 'contained' | 'outlined' | undefined
    onClick: () => void
  }[]
  onCloseModal: () => void
}

const Modal: FC<Props> = (props) => {
  const { onCloseModal, title, description, buttons } = props

  const ref = useRef(null)

  useOnClickOutside(ref, onCloseModal)

  return (
    <ThemeProvider theme={defaultTheme}>
      <SC.Base ref={ref}>
        <SC.CloseButton onClick={onCloseModal} />
        <SC.Title>{title}</SC.Title>
        <SC.Description>{description}</SC.Description>
        <SC.ButtonContainer>
          {buttons.map(button => (
            <Button key={button.text} text={button.text} size="s" variant={button.variant} onClick={button.onClick} />
          ))}
        </SC.ButtonContainer>
      </SC.Base>
    </ThemeProvider>
  )
}

export default Modal
