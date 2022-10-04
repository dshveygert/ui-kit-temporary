import styled, { css } from 'styled-components'

import { SelectorGroupVariantType } from '.'


export const Base = styled.div<{
  variant?: SelectorGroupVariantType
}>`
  position: relative;
  display: flex;
  padding: 5px;
  border-radius: 10px;
  background: ${props => props.theme.palette.background.primary};
  box-shadow: ${props => props.theme.boxShadow.medium};

  ${props => (props.variant === 'separated' || props.variant === 'separated-outlined') &&
    css`
      padding: 0;
      background: none;
      box-shadow: none;
    `
  }
`

export const SelectorContainer = styled.div<{
  variant?: SelectorGroupVariantType
  size?: 's' | 'l'
}>`
  flex-basis: 100%;

  input:checked ~ label {
    color: ${props => props.theme.palette.primary.main};
    background: ${props => props.theme.palette.primary.light};

    ${props =>
      props.size === 'l' &&
      css`
        font-weight: bold;
      `}
  }

  ${props => props.variant === 'separated' &&
    css`
      &:not(:last-child) {
        margin-right: 5px;
      }
    `
  }

  ${props => props.variant === 'separated-outlined' &&
    css`
      border-radius: 10px;
      background: ${props => props.theme.palette.background.primary};
      box-shadow: ${props => props.theme.boxShadow.medium};

      &:not(:last-child) {
        margin-right: 19px;
      }
    `
  }
`

export const SelectorLabel = styled.label<{
  size?: 's' | 'l'
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 6px 0;
  border-radius: 8px;
  cursor: pointer;
  color: ${props => props.theme.palette.text.primary};
  transition: 0.2s;
  font-weight: normal;
  font-size: 12px;

  ${props =>
    props.size === 'l' &&
    css`
      padding: 5px 0;
      font-size: 14px;
    `}
`

export const Input = styled.input.attrs({
  type: 'radio'
})`
  display: none;
`
