import styled from 'styled-components'

import Icons from '../../../constants/icons'
import { FlexCenter } from '../../styled/StyleTemplates'
import { Body3, Heading4 } from '../../styled/TextStyles'


export const Base = styled.div`
  display: flex;
  padding: 20px;
  margin-bottom: 39px;
  background: ${props => props.theme.palette.background.primary};
  box-shadow: ${props => props.theme.boxShadow.medium};
  box-sizing: border-box;
  border-radius: 10px;
`

export const WarningContainer = styled.div``

export const WarningTitle = styled(Heading4)`
  ${FlexCenter}
  margin-bottom: 7px;
  color: #dc2323;

  &:before {
    content: '';
    display: inline-block;
    min-width: 20px;
    width: 20px;
    height: 20px;
    margin-right: 15px;
    background-image: url(${Icons.attention});
  }
`

export const WarningDescription = styled(Body3)`
  margin-left: 35px;
`
