import React, { FC } from 'react'

import * as SC from './styled'


type Props = {
  title: string
  count: number
}

const ColumnTitle: FC<Props> = ({ title, count }) => (
  <SC.Base>
    <SC.Title>{title}</SC.Title>
    <SC.Counter>{count}</SC.Counter>
  </SC.Base>
)

export default ColumnTitle
