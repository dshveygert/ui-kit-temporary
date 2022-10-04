import React, { FC } from 'react'
import { ThemeProvider } from 'styled-components'

import { defaultTheme } from '../../../styles/defaultTheme'

import * as SC from './styled'


type Props = {
  src?: string
  size?: number
}

const Avatar: FC<Props> = (props) => {
  const { src, size = 40 } = props

  return (
    <ThemeProvider theme={defaultTheme}>
      <SC.Base>
        <SC.Avatar src={src} size={size} {...props} />
      </SC.Base>
    </ThemeProvider>
  )
}

export default Avatar
