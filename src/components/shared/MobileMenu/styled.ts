import styled, { css } from 'styled-components'

import { widthBreakpoints } from '../../../styles/mediaBreakpoints'
import { viewportWidth } from '../../../utils/mixins'


export const Base = styled.div`
  ${viewportWidth.lowerThan(widthBreakpoints.tablet)} {
    .root {
      position: static !important;
    }
    .sidebar {
      position: absolute !important;
      top: 89px !important;
      bottom: auto !important;
      z-index: 2 !important;
      border-radius: 0 0 10px 10px;
      overflow: hidden;
    }
    .overlay {
      position: absolute !important;
      top: 90px !important;
      box-shadow: white 0px 10px 10px -10px inset !important;
      height: 100vh;
    }
  }
  ${viewportWidth.lowerThan(widthBreakpoints.mobile)} {
    .sidebar,
    .overlay {
      top: 60px !important;
    }
  }
`

export const Sidebar = styled.div`
  max-width: 314px;
  width: 100vw;
  box-sizing: border-box;
  background-color: ${props => props.theme.palette.background.primary};
  padding: 20px 36px 40px 34px;

  ${viewportWidth.lowerThan(widthBreakpoints.mobile)} {
    max-width: 100vw;
  }
`

export const SidebarItem = styled.div<{
  selected?: boolean
}>`
  display: block;
  font-size: 20px;
  text-decoration: none;
  color: ${props => props.theme.palette.text.primary};

  ${props =>
    props.selected &&
    css`
      font-weight: bold;
    `}

  &:not(:last-child) {
    margin-bottom: 30px;
  }
`

export const Line = styled.hr`
  width: 110%;
  height: 1px;
  margin: 0 0 30px -14px;
  border: none;
  background-color: ${props => props.theme.palette.disabled.primary};
  color: ${props => props.theme.palette.disabled.primary};
`

export const MenuButton = styled.div`
  cursor: pointer;

  ${viewportWidth.lowerThan(widthBreakpoints.tablet)} {
    width: 20px;
    height: 20px;
    margin-right: 20px;
  }
`
