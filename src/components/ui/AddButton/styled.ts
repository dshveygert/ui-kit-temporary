import styled from 'styled-components'

import { Subtitle } from '../../../components/styled/TextStyles'
import Icons from '../../../constants/icons'


export const Base = styled.div`
  display: flex;
`

export const ButtonContainer = styled.label`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
`

export const Button = styled.div`
  width: 50px;
  height: 50px;
  margin-right: 24px;
  border-radius: 10px;
  background: ${props => props.theme.palette.background.primary};
  background-image: url(${Icons.add});
  background-repeat: no-repeat;
  background-position: center;
  box-shadow: ${props => props.theme.boxShadow.medium};
`

export const Text = styled(Subtitle)``
