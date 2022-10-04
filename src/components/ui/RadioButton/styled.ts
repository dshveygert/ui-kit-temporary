import styled, { css } from 'styled-components'

import { SmallText } from '../../styled/TextStyles'


export const Base = styled.div`
  position: relative;
  cursor: pointer;
`

export const Input = styled.input.attrs({
  type: 'radio'
})<{
  error?: string
}>`
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;

  &:checked ~ * {
    opacity: 1;
  }

  &:checked ~ label {
    font-weight: bold;
  }

  &:checked ~ label:before {
    border: 1.63715px solid ${props => props.error ? 
      props.theme.palette.error.main 
      : 
      props.theme.palette.primary.light
    };
  }

  &:checked ~ label:after {
    content: '';
    position: absolute;
    left: 4px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${props => props.error ?
      props.theme.palette.error.main
      :
      props.theme.palette.primary.main
    };
  }
`

export const Label = styled.label<{
  description?: string
  disableOpacity?: boolean
}>`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${props => props.theme.palette.text.primary};
  font-size: 14px;

  ${props => props.description && css`
    margin-bottom: 6px;
  `}

  ${props => props.disableOpacity ? css`
    font-weight: bold;
  ` : css`
    opacity: 0.3;
  `}

  &:before {
    content: '';
    display: inline-block;
    min-width: 20px;
    width: 20px;
    height: 20px;
    margin-right: 13px;
    border: 1.63715px solid ${props => props.theme.palette.text.disabled};
    border-radius: 50%;
    box-sizing: border-box;
  }
`

export const Description = styled(SmallText)<{
  disableOpacity?: boolean
}>`
  margin-left: 33px;

  ${props => !props.disableOpacity && css`
    opacity: 0.3;
  `}
`

export const Error = styled(SmallText)`
  margin-left: 33px;
  color: ${props => props.theme.palette.error.main};
`