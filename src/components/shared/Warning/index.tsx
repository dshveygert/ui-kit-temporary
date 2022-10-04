import React, { FC } from 'react'

import * as SC from './styled'


const Warning: FC<{ t: { warningTitle: string; warningDescription: string } }> = ({ t }) => (
  <SC.Base>
    <SC.WarningContainer>
      <SC.WarningTitle>{t.warningTitle}</SC.WarningTitle>
      <SC.WarningDescription>{t.warningDescription}</SC.WarningDescription>
    </SC.WarningContainer>
  </SC.Base>
)

export default Warning
