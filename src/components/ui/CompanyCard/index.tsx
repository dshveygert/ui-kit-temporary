import React, { FC } from 'react'
import { ThemeProvider } from 'styled-components'

import { defaultTheme } from '../../../styles/defaultTheme'
import { formatDateToTimeAgo } from '../../../utils/formatFunctions'

import * as SC from './styled'


type Props = {
  img: string
  companyName: string
  location: {
    country?: string
    state?: string
    city?: string
    address1?: string
    address2?: string
    zip?: string
  }
  lastSeen: string
  onClick?: () => void
  t: {
    wasOnline: string
  }
}

const CompanyCard: FC<Props> = (props) => {
  const { img, companyName, location, lastSeen, onClick, t } = props

  return (
    <ThemeProvider theme={defaultTheme}>
      <SC.Base onClick={onClick}>
        <SC.Avatar src={img} />
        <SC.TextContainer>
          <SC.CompanyTitle>{companyName}</SC.CompanyTitle>
          {(location?.country || location?.state) && (
            <SC.Location>{`${location.country}, ${location.state}`}</SC.Location>
          )}
          <SC.WasOnline>
            {t.wasOnline} {formatDateToTimeAgo(lastSeen)}
          </SC.WasOnline>
        </SC.TextContainer>
      </SC.Base>
    </ThemeProvider>
  )
}

export default CompanyCard
