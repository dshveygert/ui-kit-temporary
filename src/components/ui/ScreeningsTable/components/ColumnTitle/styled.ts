import styled from 'styled-components'

import { Heading4, Subtitle } from '../../../../styled/TextStyles'


export const Base = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 21px 20px 21px 21px;
  width: 100%;
  background: ${props => props.theme.palette.background.primary};
  box-shadow: ${props => props.theme.boxShadow.medium};
  border-radius: 10px;
  box-sizing: border-box;
`

export const Title = styled(Heading4)`
`

export const Counter = styled(Subtitle)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  background: ${props => props.theme.palette.primary.light};
  color: ${props => props.theme.palette.primary.main};
  border-radius: 5px;
`
