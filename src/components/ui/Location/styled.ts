import styled, { css } from 'styled-components'

import { Heading4 } from '../../../components/styled/TextStyles'
import Icons from '../../../constants/icons'


export const Base = styled.div`
  position: relative;
`

export const Title = styled(Heading4)`
  margin-bottom: 8px;
`

export const LocationContainer = styled.div``

export const LocationPreview = styled.div`
  display: flex;
  align-items: center;

  &:before {
    content: '';
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-right: 14px;
    background-image: url(${Icons.location});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }
`

export const InputContainer = styled.div<{
  multipleLocations?: boolean
}>`
  ${props =>
    props.multipleLocations &&
    css`
      margin-bottom: 24px;
    `}
`

export const Suggestion = styled.div`
  padding: 8px 10px;
  border-radius: 8px;
  box-sizing: border-box;
  cursor: pointer;

  &.suggestion--active {
    background-color: ${props => props.theme.palette.primary.light};
  }
`

export const AutocompleteDropdownContainer = styled.div`
  position: absolute;
  width: 100%;
  margin-top: 5px;
  padding: 10px;
  border-radius: 10px;
  background: ${props => props.theme.palette.background.primary};
  box-sizing: border-box;
  box-shadow: ${props => props.theme.boxShadow.medium};
  z-index: 10;
`
