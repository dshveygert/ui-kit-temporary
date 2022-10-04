import styled from 'styled-components'

import Icons from '../../../constants/icons'
import { widthBreakpoints } from '../../../styles/mediaBreakpoints'
import { viewportWidth } from '../../../utils'
import { FlexCenter } from '../../styled/StyleTemplates'
import { Heading3 } from '../../styled/TextStyles'


export const Base = styled.div`
  margin-top: 40px;

  ${viewportWidth.lowerThan(widthBreakpoints.tablet)} {
  }

  ${viewportWidth.lowerThan(widthBreakpoints.mobile)} {
    margin-top: 32px;
  }
`

export const Label = styled(Heading3)`
  margin-bottom: 24px;
`

export const Links = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 16px;
  grid-column-gap: 20px;

  ${viewportWidth.lowerThan(widthBreakpoints.mobile)} {
    grid-template-columns: 1fr;
    grid-row-gap: 8px;
  }
`

export const Link = styled.div`
  ${FlexCenter}
  position: relative;
  justify-content: space-between;
  padding: 16px 20px 16px 25px;
  background: #ffffff;
  box-shadow: 0px 0px 10px #efefef;
  border-radius: 10px;
  cursor: pointer;

  &:after {
    content: '';
    display: inline-block;
    width: 16px;
    height: 16px;
    background-image: url(${Icons.arrowRight});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
`

export const SidebarHeader = styled.div`
  ${FlexCenter}
  justify-content: space-between;
  margin-bottom: 29px;
`

export const SidebarClose = styled.div`
  width: 20px;
  height: 20px;
  background-image: url(${Icons.deleteBlack});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  cursor: pointer;
`

export const SidebarTitle = styled(Heading3)``
