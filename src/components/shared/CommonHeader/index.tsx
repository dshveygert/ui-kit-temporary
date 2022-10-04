import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import Icons from '../../../constants/icons'
import { defaultTheme } from '../../../styles/defaultTheme'
import ContentContainer from '../../styled/ContentContainer'
import ForDesktop from '../../styled/ForDesktop'
import ForMobileTablet from '../../styled/ForMobileTablet'
import Avatar from '../../ui/Avatar'
import Badge from '../../ui/Badge'

import * as SC from './styled'


export type CommonHeaderTab = {
  current: boolean
  path: string
  value?: string
  badgeCount?: number
  mobileIcon?: string
}

type Props = {
  logoPath: string
  avatarPath: string
  avatarPhoto?: string
  messagesPath: string
  desktopTabs: CommonHeaderTab[]
  mobileTabs: CommonHeaderTab[]
}

const CommonHeader: FC<Props> = (props) => {
  const { desktopTabs, mobileTabs, logoPath, avatarPath, avatarPhoto, messagesPath } = props

  return (
    <ThemeProvider theme={defaultTheme}>
      <SC.Base>
        <ForDesktop>
          <ContentContainer>
            <SC.Row>
              <SC.LogoContainer>
                <Link to={logoPath}>
                  <img src={Icons.svgLogo} alt="logo" width={109} height={30} />
                </Link>
              </SC.LogoContainer>
              <SC.Nav>
                {desktopTabs &&
                  desktopTabs.map((tab, i) => (
                    <SC.NavItem key={i}>
                      <Link to={tab.path}>
                        {tab?.badgeCount && tab?.badgeCount > 0 ? (
                          <Badge count={tab.badgeCount} row={true} color="yellow">
                            <SC.NavItemText selected={tab.current} badge={tab.badgeCount > 0}>
                              {tab.value}
                            </SC.NavItemText>
                          </Badge>
                        ) : (
                          <SC.NavItemText selected={tab.current}>{tab.value}</SC.NavItemText>
                        )}
                      </Link>
                    </SC.NavItem>
                  ))}
              </SC.Nav>
              <SC.NavRight>
                <Link to={messagesPath}>
                  <SC.MessageIconContainer>
                    <img src={Icons.navMessages} alt="logo" width={30} height={30} />
                  </SC.MessageIconContainer>
                </Link>
                <Link to={avatarPath}>
                  <SC.AvatarIconContainer>
                    <Avatar size={60} src={avatarPhoto ? avatarPhoto : Icons.user} />
                  </SC.AvatarIconContainer>
                </Link>
              </SC.NavRight>
            </SC.Row>
          </ContentContainer>
        </ForDesktop>

        <ForMobileTablet>
          <SC.RowMobile>
            <SC.NavItemMobile>
              <Link to={logoPath}>
                <img src={Icons.navLogo} alt="logo" width={30} height={30} />
              </Link>
            </SC.NavItemMobile>

            <SC.NavMobile>
              {mobileTabs &&
                mobileTabs.map((tab, i) => (
                  <SC.NavItemMobile key={i}>
                    <Link to={tab.path}>
                      <img src={tab.mobileIcon} alt="logo" width={30} height={30} />
                    </Link>
                  </SC.NavItemMobile>
                ))}
            </SC.NavMobile>

            <SC.NavItemMobile>
              <Link to={avatarPath}>
                <Avatar size={30} src={avatarPhoto ? avatarPhoto : Icons.user} />
              </Link>
            </SC.NavItemMobile>
          </SC.RowMobile>
        </ForMobileTablet>
      </SC.Base>
    </ThemeProvider>
  )
}

export default CommonHeader
