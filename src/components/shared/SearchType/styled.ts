import styled, { css } from 'styled-components'

import Icons from '../../../constants/icons'
import { widthBreakpoints } from '../../../styles/mediaBreakpoints'
import { viewportWidth } from '../../../utils'
import { FlexCenter } from '../../styled/StyleTemplates'
import { Heading1 } from '../../styled/TextStyles'


export const Base = styled.div`
  position: relative;

  ${viewportWidth.lowerThan(widthBreakpoints.tablet)} {
  }

  ${viewportWidth.lowerThan(widthBreakpoints.mobile)} {
  }
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

  & > a {
    text-decoration: none;

    &:not(:last-child) {
      margin-bottom: 16px;
    }
  }
`

export const OptionContainer = styled.div`
  &:not(:last-child) {
    margin-bottom: 16px;
  }
`

export const Container = styled.div`
  ${FlexCenter}
  cursor: pointer;
  user-select: none;
`

export const Text = styled(Heading1)`
  text-transform: uppercase;
`

export const SortIcon = styled.div`
  width: 20px;
  height: 20px;
  margin-left: 25px;
  background-image: url(${Icons.arrowDown});
  background-repeat: no-repeat;
`
