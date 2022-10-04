import React, { FC } from 'react'
import { ThemeProvider } from 'styled-components'

import Icons from '../../../constants/icons'
import { defaultTheme } from '../../../styles/defaultTheme'

import * as SC from './styled'


export type AuthRoleCardProps = {
  alt: string
  title: string
  description: string
  link: string
  icon: string
}

const AuthRoleCard: FC<AuthRoleCardProps> = (props) => {
  const { alt, title, description, icon } = props

  return (
    <ThemeProvider theme={defaultTheme}>
      <SC.Base>
        <SC.Icon>
          <img src={icon} alt={alt} />
        </SC.Icon>
        <SC.Wrapper>
          <SC.Title>{title}</SC.Title>
          <SC.Description>{description}</SC.Description>
        </SC.Wrapper>
        <SC.Arrow>
          <img src={Icons.arrowRight} alt="arrow icon" />
        </SC.Arrow>
      </SC.Base>
    </ThemeProvider>
  )
}

export default AuthRoleCard
