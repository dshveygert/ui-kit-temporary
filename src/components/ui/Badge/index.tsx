import React, { FC } from 'react'

import * as SC from './styled'


export type BadgeProps = {
  count: number
  className?: string
  children?: React.ReactNode
  row?: boolean
  color?: string
}

const Badge: FC<BadgeProps> = (props) => {
  const { count, children, row = false } = props

  return (
    <SC.Base {...props}>
      {children}
      <SC.BadgeWrapper {...props} row={row}>
        {count > 99 ? '99+' : count}
      </SC.BadgeWrapper>
    </SC.Base>
  )
}

export default Badge
