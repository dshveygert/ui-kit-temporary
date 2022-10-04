import styled, { css } from 'styled-components'

import { Body3, Heading4 } from '../../../components/styled/TextStyles'
import { widthBreakpoints } from '../../../styles/mediaBreakpoints'
import { viewportWidth } from '../../../utils/mixins'
import Icons from '../../../constants/icons'


export const Base = styled.div<{
  imagePreviewUrl?: string
}>`
  display: flex;
  align-items: center;
  box-sizing: border-box;

  ${viewportWidth.lowerThan(widthBreakpoints.tablet)} {
    padding: 0 0 10px 0;
  }

  ${props =>
    props.imagePreviewUrl &&
    css`
      padding: 0;

      ${viewportWidth.lowerThan(widthBreakpoints.tablet)} {
        padding-bottom: 10px;
      }
    `}

  input {
    display: none;
  }
`

export const LabelContainer = styled.label`
  display: flex;
  cursor: pointer;
`

export const ImageContainer = styled.div<{
  imagePreviewUrl?: string
}>`
  position: relative;
  width: 50px;
  height: 50px;
  margin-right: 15px;
  border-radius: 50%;
  box-shadow: ${props => props.theme.boxShadow.medium};
  background-image: ${props => !props.imagePreviewUrl && `url(${Icons.upload})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: 20px;

  ${props =>
    props.imagePreviewUrl &&
    css`
      width: 100px;
      height: 100px;
      margin-right: 27px;

      ${viewportWidth.lowerThan(widthBreakpoints.mobile)} {
        width: 50px;
        height: 50px;
        margin-right: 15px;
      }
    `}
`

export const ImagePreview = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`

export const EditIcon = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  box-shadow: ${props => props.theme.boxShadow.medium};
  background-color: ${props => props.theme.palette.background.primary};
  background-image: url(${Icons.edit});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 15px;

  ${viewportWidth.lowerThan(widthBreakpoints.mobile)} {
    width: 20px;
    height: 20px;
    background-size: 10px;
    bottom: -10px;
  }
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Title = styled(Heading4)``

export const Description = styled(Body3)``
