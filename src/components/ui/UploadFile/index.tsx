import React, { FC } from 'react'
import { ThemeProvider } from 'styled-components'

import Icons from '../../../constants/icons'
import { defaultTheme } from '../../../styles/defaultTheme'

import * as SC from './styled'


type Props = {
  icon?: string
  title?: string
  onFileSelect: (file: File) => void
}

const UploadFile: FC<Props> = ({ onFileSelect, title, icon }) => {
  const onChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const file = e?.target?.files?.[0]
    if (file) onFileSelect(file)
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <SC.Base>
        <input type="file" onChange={onChangeFile} accept="application/pdf" />
        <SC.Icon icon={icon || Icons.uploadResume} />
        <SC.Title>{title}</SC.Title>
      </SC.Base>
    </ThemeProvider>
  )
}

export default UploadFile
