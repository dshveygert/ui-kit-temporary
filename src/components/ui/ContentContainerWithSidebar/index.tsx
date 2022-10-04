import React, { FC } from 'react'
import { ThemeProvider } from 'styled-components'

import { defaultTheme } from '../../../styles/defaultTheme'

import * as SC from './styled'


export interface ContentContainerWithSidebarProps {
  sidebar: JSX.Element
  children: JSX.Element
}

const ContentContainerWithSidebar: FC<ContentContainerWithSidebarProps> = (props) => {
  const { sidebar, children } = props

  return (
    <ThemeProvider theme={defaultTheme}>
      <SC.Base>
        <SC.FakeBlockLeft />
        <SC.ContentContainerFlex>
          <SC.Sidebar>{sidebar}</SC.Sidebar>
          <SC.Content>{children}</SC.Content>
        </SC.ContentContainerFlex>
        <SC.FakeBlockRight />
      </SC.Base>
    </ThemeProvider>
  )
}

export default ContentContainerWithSidebar
