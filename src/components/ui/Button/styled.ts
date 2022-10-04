import styled, { css } from 'styled-components'

import { ButtonProps } from '.'


export const Base = styled.button<ButtonProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  outline: none;
  padding: 0;
  border-radius: ${props => props.theme.borderRadius}px;
  border: 1px solid ${props => props.theme.palette.primary.main};
  box-sizing: border-box;
  cursor: pointer;
  transition: 0.2s;
  font-weight: 800;
  font-size: 20px;
  color: ${props => props.theme.palette.primary.main};
  background-color: ${props => props.theme.palette.background.primary};

  ${props =>
    props.size === 'l'
      ? css`
          padding: 10px 22px;
        `
      : css`
          padding: 10px 5px;
        `}

  ${props =>
    props.hint &&
    css`
      flex-direction: column;
      padding: 2px 22px;
    `}

  :hover {
    border: 1px solid ${props => props.theme.palette.primary.light};
  }

  :active {
    opacity: 0.5;
  }

  :disabled {
    border: 1px solid ${props => props.theme.palette.disabled.primary};
    color: ${props => props.theme.palette.text.disabled};

    svg {
      path {
        fill: ${props => props.theme.palette.text.disabled};
      }
    }

    &:hover,
    &:focus,
    &:active {
      color: ${props => props.theme.palette.text.disabled};
      opacity: 1;
    }
  }

  ${(props) => {
    if (props.variant === 'contained') 
      return css`
        color: ${props => props.theme.palette.primary.contrastText};
        background: ${props => props.theme.palette.primary.main};

        :hover {
          background: ${props => props.theme.palette.primary.light};
          color: ${props => props.theme.palette.primary.main};
          border: 1px solid ${props => props.theme.palette.primary.light};
        }

        :disabled {
          border: 1px solid ${props => props.theme.palette.disabled.primary};
          background: ${props => props.theme.palette.disabled.primary};
          cursor: not-allowed;
        }
      `
    else if (props.variant === 'accepted')
      return css`
        border: 1px solid${props => props.theme.palette.success.main};
        background: ${props => props.theme.palette.success.main};
        color: ${props => props.theme.palette.primary.contrastText};

        :hover {
          border: 1px solid${props => props.theme.palette.success.main};
          background: ${props => props.theme.palette.success.main};
          color: ${props => props.theme.palette.primary.contrastText};
        }

        svg {
          path {
            fill: ${props => props.theme.palette.background.primary};
          }
        }
      `
    }}

  ${props =>
    props.loading &&
    css`
      background: ${props => props.theme.palette.primary.light};

      :hover {
      }

      :disabled {
        cursor: wait;
        border: none;
        background: ${props => props.theme.palette.primary.light};
      }
    `}
`

export const Content = styled.span`
  display: flex;
  align-items: center;
`

export const Hint = styled.span`
  font-weight: normal;
  font-size: 12px;
`

export const Icon = styled.span`
  width: 20px;
  height: 20px;
  margin-right: 10px;

  svg {
    display: block;
    width: 100%;
    height: 100%;
  }
`

export const IconLoader = styled.span`
  width: 24px;
  height: 24px;
  transform: rotate(0deg);
  animation: spin 1s infinite ease-in-out;

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`
