import styled, { css } from 'styled-components'

import { SmallText } from '../../../components/styled/TextStyles'
import Icons from '../../../constants/icons'


export const Base = styled.div`
  position: relative;
`

export const Container = styled.div<{
  variant?: 'outlined' | 'empty'
}>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 107px;
  padding: 10px 14px 10px 15px;
  border-radius: 8.53296px;
  box-sizing: border-box;
  background: ${props => props.theme.palette.background.primary};
  box-shadow: ${props => props.theme.boxShadow.medium};
  cursor: pointer;
  user-select: none;

  ${props =>
    props.variant === 'empty' &&
    css`
      width: 80px;
      padding: 5px;
      box-shadow: none;
    `}
`

export const Text = styled(SmallText)``

export const SortIcon = styled.div`
  width: 20px;
  height: 20px;
  background-image: url(${Icons.sort});
  background-repeat: no-repeat;
`

export const DropdownContainer = styled.div<{
  dropdownPosition?: 'left' | 'right'
}>`
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 250px;
  margin-top: 6px;
  padding: 16px 17px;
  background: ${props => props.theme.palette.background.primary};
  box-sizing: border-box;
  box-shadow: ${props => props.theme.boxShadow.medium};
  border-radius: 8.18575px;
  z-index: 5;

  ${props =>
    props.dropdownPosition === 'right' &&
    css`
      right: 0;
    `}
`

export const OptionContainer = styled.div`
  &:not(:last-child) {
    margin-bottom: 16px;
  }
`
