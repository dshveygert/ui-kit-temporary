import React, { FC } from 'react'
import { ThemeProvider } from 'styled-components'

import { defaultTheme } from '../../../styles/defaultTheme'

import * as SC from './styled'


export type AuthContentContainerProps = {
  sidebar: JSX.Element
  content: JSX.Element
}

const AuthContentContainer: FC<AuthContentContainerProps> = ({ sidebar, content }) => (
  <ThemeProvider theme={defaultTheme}>
    <SC.Base>
      <SC.FakeBlockLeft />
      <SC.ContentContainerFlex>
        <SC.Sidebar>{sidebar}</SC.Sidebar>
        <SC.Content>{content}</SC.Content>
      </SC.ContentContainerFlex>
      <SC.FakeBlockRight />
    </SC.Base>
  </ThemeProvider>
)

export default AuthContentContainer
