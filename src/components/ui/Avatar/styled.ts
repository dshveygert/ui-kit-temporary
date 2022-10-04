import styled from 'styled-components'


export const Base = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`

export const Avatar = styled.img<{ size: number }>`
  width: ${props => `${props.size}px`};
  height: ${props => `${props.size}px`};
  border-radius: 50%;
`
