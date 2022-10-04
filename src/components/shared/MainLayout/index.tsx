import React, { FC } from 'react'
import { ThemeProvider } from 'styled-components'

import { defaultTheme } from '../../../styles/defaultTheme'
import Icons from '../../../constants/icons'
import CommonHeader from '../CommonHeader'

import * as SC from './styled'


type Props = {
  children: React.ReactNode
  isZeroPadding?: boolean
  withHeader?: boolean
}

const MainLayout: FC<Props> = (props) => {
  const { children, isZeroPadding = false, withHeader = false } = props

  return (
    <ThemeProvider theme={defaultTheme}>
      <SC.Base>
        <CommonHeader
          logoPath={'PATH_HOME'}
          avatarPath={'PATH_JOBS'}
          avatarPhoto="https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-3-avatar-2754579_120516.png"
          messagesPath={'PATH_JOBS'}
          desktopTabs={[
            {
              value: 'Candidates',
              current: true,
              path: 'PATH_JOBS',
              badgeCount: 2
            },
            {
              value: 'Candidates',
              current: false,
              path: 'PATH_JOBS'
            }
          ]}
          mobileTabs={[
            {
              value: 'Candidates',
              current: false,
              path: 'PATH_JOBS',
              mobileIcon: Icons.navSearch
            }
          ]}
        />
        <SC.MainWrapper isZeroPadding={isZeroPadding} withHeader={withHeader}>
          {children}
        </SC.MainWrapper>
      </SC.Base>
    </ThemeProvider>
  )
}

export default MainLayout
