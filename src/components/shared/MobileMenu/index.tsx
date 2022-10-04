import React, { FC, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Sidebar from 'react-sidebar'
import { ThemeProvider } from 'styled-components'

import { defaultTheme } from '../../../styles/defaultTheme'
import { CommonHeaderTab } from '../CommonHeader'

import * as SC from './styled'


type Props = {
  sideBarOpen: boolean
  setSideBarOpen: (open: boolean) => void
  tabs: CommonHeaderTab[]
}

const MobileMenu: FC<Props> = ({ children, sideBarOpen, setSideBarOpen, tabs }) => {
  useEffect(() => {
    if (sideBarOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = 'unset'
  }, [sideBarOpen])

  return (
    <ThemeProvider theme={defaultTheme}>
      <SC.Base>
        <Sidebar
          sidebar={
            <SC.Sidebar>
              {tabs.map(({ path, current, value }, i) => {
                return (
                  <SC.SidebarItem selected={current} key={i}>
                    <Link to={path}>{value}</Link>
                  </SC.SidebarItem>
                )
              })}
              <SC.Line />
            </SC.Sidebar>
          }
          open={sideBarOpen}
          onSetOpen={setSideBarOpen}
          shadow={false}
          rootClassName="root"
          sidebarClassName="sidebar"
          overlayClassName="overlay"
        >
          {children}
        </Sidebar>
      </SC.Base>
    </ThemeProvider>
  )
}

export default MobileMenu
