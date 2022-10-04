import React, { FC, useState, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'

import { defaultTheme } from '../../../styles/defaultTheme'

import * as SC from './styled'


type Props = {
  id: string
  name: string
  onFileSelect: (file: string) => void
  title?: string
  description?: string
  value: string
}

const UploadImage: FC<Props> = (props) => {
  const { id, name, onFileSelect, title, description, value } = props

  const [imagePreviewUrl, setImagePreviewUrl] = useState<string>(value)

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()

    const file = e?.target?.files?.[0]
    if (file) {
      const reader = new FileReader()

      reader.onloadend = () => {
        setImagePreviewUrl(reader.result as string)
        onFileSelect(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }
  useEffect(() => {
    setImagePreviewUrl(value)
  }, [value])

  return (
    <ThemeProvider theme={defaultTheme}>
      <SC.Base imagePreviewUrl={imagePreviewUrl}>
        <input id={id} name={name} type="file" onChange={handleImageChange} accept="image/*" />
        <SC.LabelContainer htmlFor={id}>
          <SC.ImageContainer imagePreviewUrl={imagePreviewUrl}>
            {imagePreviewUrl && (
              <>
                <SC.ImagePreview src={imagePreviewUrl} />
                <SC.EditIcon />
              </>
            )}
          </SC.ImageContainer>
          <SC.TextContainer>
            <SC.Title>{title}</SC.Title>
            <SC.Description>{description}</SC.Description>
          </SC.TextContainer>
        </SC.LabelContainer>
      </SC.Base>
    </ThemeProvider>
  )
}

export default UploadImage
