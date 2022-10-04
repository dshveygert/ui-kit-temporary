import styled, { css } from 'styled-components'

import { Heading4, SmallText } from '../../../components/styled/TextStyles'
import Icons from '../../../constants/icons'


export const Base = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  background: ${props => props.theme.palette.background.primary};
  box-shadow: ${props => props.theme.boxShadow.medium};
  box-sizing: border-box;
  border-radius: 10px;
  padding: 20px 40px 20px 20px;
  margin-bottom: 32px;

  ${props =>
    props.onClick &&
    css`
      cursor: pointer;

      &:after {
        content: '';
        position: absolute;
        right: 20px;
        display: block;
        width: 20px;
        height: 20px;
        background-image: url(${Icons.arrowRight});
        background-repeat: no-repeat;
        background-size: contain;
      }
    `}
`

export const Avatar = styled.img`
  width: 70px;
  height: 70px;
  margin-right: 30px;
  border-radius: 50%;
`

export const TextContainer = styled.div`
  overflow: hidden;
`

export const CompanyTitle = styled(Heading4)`
  margin-bottom: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
export const WasOnline = styled(SmallText)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const Location = styled(SmallText)`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:before {
    content: '';
    display: inline-block;
    min-width: 10px;
    width: 12px;
    height: 15px;
    margin-right: 10px;
    background-image: url(${Icons.location});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }
`
