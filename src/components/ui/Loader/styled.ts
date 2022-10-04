import styled, { css } from 'styled-components'

import Icons from '../../../constants/icons'


export const Base = styled.div<{ type?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;

  ${props =>
    props.type === 'page'
      ? css`
          position: absolute;
          left: 0;
          top: 0;
          width: 100vw;
          height: 100vh;
        `
      : css`
          width: 100%;
          padding: 20px;
        `}
`

export const IconLoader = styled.span<{ type?: string }>`
  transform: rotate(0deg);
  animation: spin 1s infinite ease-in-out;

  ${props =>
    props.type === 'page'
      ? css`
          width: 133px;
          height: 133px;
        `
      : css`
          width: 24px;
          height: 24px;
        `}

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`
export const CircleLoader = styled.div<{ width: number; height: number }>`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  background-image: url(${Icons.loader});
  background-repeat: no-repeat;
  background-position: center;
  background-size: ${props => props.width}px ${props => props.height}px;
`
