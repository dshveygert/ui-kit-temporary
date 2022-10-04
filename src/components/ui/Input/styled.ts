import styled, { css } from 'styled-components'

import { Heading4 } from '../../../components/styled/TextStyles'


export const Base = styled.div<{
  bold?: boolean
}>`
  font-size: 14px;

  ${props =>
    props.bold &&
    css`
      font-weight: 700;
    `}
`

export const InputContainer = styled.div<{
  error?: string
  icon?: boolean
  disabled?: boolean
  iconPosition?: 'left' | 'right'
}>`
  position: relative;
  width: 100%;

  .input {
    padding: 0 20px;
    box-sizing: border-box;
    height: 40px;
    width: 100%;
    background: ${props => props.theme.palette.background.primary};
    box-shadow: ${props => props.theme.boxShadow.medium};
    border-radius: 10px;
    border: 1px solid transparent;
    color: ${props => props.disabled ? props.theme.palette.text.placeholder : props.theme.palette.text.primary};

    &:focus {
      border: 1px solid ${props => props.theme.palette.text.primary};
      outline: none;
    }

    ${props =>
      props.error &&
      css`
        border: 1px solid ${props => props.theme.palette.error.main};
        color: ${props => props.theme.palette.error.main};

        &:focus {
          border: 1px solid ${props => props.theme.palette.error.main};
        }
      `}

    ${props =>
      props.icon &&
      (props.iconPosition === 'right'
        ? css`
            padding-right: 40px;
          `
        : css`
            padding-left: 40px;
          `)}
  }
`

export const Icon = styled.i<{
  iconPosition?: 'left' | 'right'
  icon?: boolean
  onClick?: (event: React.MouseEvent<HTMLElement>) => void
}>`
  position: absolute;
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  user-select: none;

  ${props =>
    props.onClick &&
    css`
      cursor: pointer;
    `}

  ${props =>
    props.iconPosition &&
    (props.iconPosition === 'right'
      ? css`
          right: 0;
        `
      : css`
          left: 10px;
        `)}
`

export const Error = styled.div`
  margin: 5px 20px;
  color: ${props => props.theme.palette.error.main};
`

export const Label = styled(Heading4)`
  margin-bottom: 8px;
`
