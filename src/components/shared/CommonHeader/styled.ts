import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { widthBreakpoints } from '../../../styles/mediaBreakpoints'
import { viewportWidth } from '../../../utils/mixins'
import { FlexCenter } from '../../styled/StyleTemplates'
import { Heading3 } from '../../styled/TextStyles'


export const Base = styled.header`
  padding: 30px 0;
  box-shadow: ${props => props.theme.boxShadow.medium};
  background-color: ${props => props.theme.palette.background.primary};
  border-radius: ${props => props.theme.borderRadius}px;
  position: fixed;
  top: 0;
  width: 100vw;
  max-height: 110px;
  z-index: 100;
  box-sizing: border-box;
  ${viewportWidth.lowerThan(widthBreakpoints.tablet)} {
    padding: 15px 0;
    border-radius: 0;
    height: 90px;
  }
  ${viewportWidth.lowerThan(widthBreakpoints.mobile)} {
    /* padding: 40px 0 0; */
    padding: 0;
    box-shadow: none;
    height: 60px;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`

export const RowMobile = styled.div`
  ${FlexCenter}
  background-color: ${props => props.theme.palette.background.primary};
`

export const NavMobile = styled.div`
  ${FlexCenter}
  justify-content: flex-end;
  width: 100%;
`

export const NavItemMobile = styled.div`
  ${FlexCenter}
  width: calc(100% / 6);
  justify-content: center;
  padding: 20px 10px;

  ${viewportWidth.lowerThan(widthBreakpoints.tablet)} {
    img {
      width: 30px;
      height: 30px;
    }
  }

  ${viewportWidth.lowerThan(widthBreakpoints.mobile)} {
    padding: 18px 10px;
    img {
      width: 20px;
      height: 20px;
    }
  }
`

export const NavRight = styled.div`
  ${FlexCenter}
  justify-content: flex-end;
`

export const MessageIconContainer = styled.div`
  margin-right: 34px;
`

export const AvatarIconContainer = styled.div``
export const LogoContainer = styled.div`
  ${FlexCenter}
`

export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 10px;
  grid-row-gap: 0px;
`

export const Nav = styled.nav`
  ${FlexCenter}
  justify-content: flex-end;
`

export const Logo = styled.div`
  ${FlexCenter}
`
export const CustomLink = styled(Link)`
  text-decoration: none;
`

export const NavItem = styled.div`
  ${FlexCenter}
  flex-basis: 140px;

  &:not(:last-child) {
    margin-right: 10px;
  }

  ::first-letter {
    text-transform: uppercase;
  }
`

export const NavItemText = styled(Heading3)<{ selected?: boolean; badge?: boolean }>`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  line-height: 27px;
  color: ${props => props.theme.palette.text.primary};
  margin-right: ${props => props.badge && 5}px;

  ::first-letter {
    text-transform: capitalize;
  }

  &::after {
    content: '';
    width: 50px;
    height: 2px;
    border-radius: 3px;
    background-color: ${props =>
      props.selected ? props.theme.palette.primary.main : props.theme.palette.background.primary};
  }
`

export const Button = styled.div`
  ${FlexCenter}
  width: 100%;
`

export const MenuButton = styled.div`
  cursor: pointer;

  ${viewportWidth.lowerThan(widthBreakpoints.tablet)} {
    width: 20px;
    height: 20px;
    margin-right: 20px;
  }
`

export const MenuContainer = styled.div`
  ${viewportWidth.lowerThan(widthBreakpoints.tablet)} {
    ${FlexCenter}
    height: 90px;
    padding-left: 34px;
  }

  ${viewportWidth.lowerThan(widthBreakpoints.mobile)} {
    padding-left: 20px;
    height: 60px;
  }
`
