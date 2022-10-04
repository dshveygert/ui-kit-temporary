import styled from 'styled-components'

import { Heading4 } from '../../../components/styled/TextStyles'


export const Base = styled.div`
  width: 100%;
`

export const Content = styled.div`
  display: flex;
`

export const InputContainer = styled.div`
  margin: 0 10px;
`

export const Button = styled.div<{
  icon: string
}>`
  display: block;
  width: 40px;
  min-width: 40px;
  height: 40px;
  background: ${props => props.theme.palette.background.primary};
  background-image: url(${props => props.icon});
  background-repeat: no-repeat;
  background-position: center;
  box-shadow: ${props => props.theme.boxShadow.medium};
  border-radius: 8.18575px;
  cursor: pointer;
`

export const Label = styled(Heading4)`
  margin-bottom: 16px;
`

export const SelectorGroupContainer = styled.div`
  margin-bottom: 8px;
`
