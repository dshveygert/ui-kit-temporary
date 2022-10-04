import styled from 'styled-components'

import { Heading4 } from '../../../components/styled/TextStyles'


export const Base = styled.label`
  display: flex;
  align-items: center;
  padding: 25px 30px;
  border-radius: 10px;
  box-sizing: border-box;
  background: ${props => props.theme.palette.background.primary};
  box-shadow: ${props => props.theme.boxShadow.medium};
  cursor: pointer;

  input {
    display: none;
  }
`

export const Icon = styled.div<{
  icon: string
}>`
  position: relative;
  width: 40px;
  height: 40px;
  margin-right: 24px;
  background-image: url(${props => props.icon});
  background-repeat: no-repeat;
  background-position: center;
`

export const Title = styled(Heading4)``
