import React, { FC } from 'react'

import * as SC from './styled'


export type LoaderProps = {
  type?: 'list' | 'page'
}

const Loader: FC<LoaderProps> = (props) => {
  const { type = 'list' } = props
  return (
    <SC.Base {...props}>
      <SC.IconLoader {...props}>
        <SC.CircleLoader width={type === 'list' ? 24 : 133} height={type === 'list' ? 24 : 133} />
      </SC.IconLoader>
    </SC.Base>
  )
}

export default Loader
