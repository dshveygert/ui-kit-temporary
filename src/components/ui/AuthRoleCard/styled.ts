import styled from 'styled-components'

import { viewportWidth } from '../../../utils/mixins'
import { widthBreakpoints } from '../../../styles/mediaBreakpoints'
import { Heading3, Body3 } from '../../../components/styled/TextStyles'


export const Base = styled.a`
  display: flex;
  align-items: center;
  padding: 30px 20px 30px 43px;
  background: ${props => props.theme.palette.background.primary};
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin-bottom: 25px;
  cursor: pointer;
  color: ${props => props.theme.palette.text.primary};
  text-decoration: none;

  &:last-child {
    margin-bottom: 0;
  }
  ${viewportWidth.lowerThan(widthBreakpoints.tablet)} {
    padding: 30px 13px 30px 30px;
  }
`

export const Icon = styled.div`
  position: relative;
  width: 60px;
  height: 60px;
  margin-right: 39px;
  ${viewportWidth.lowerThan(widthBreakpoints.tablet)} {
    margin-right: 30px;
  }
  ${viewportWidth.lowerThan(widthBreakpoints.mobile)} {
    margin-right: 24px;
  }
`

export const Wrapper = styled.div`
  flex: 1;
  ${viewportWidth.lowerThan(widthBreakpoints.tablet)} {
  }
`

export const Title = styled(Heading3)`
  margin-bottom: 8px;
  text-transform: uppercase;
  ${viewportWidth.lowerThan(widthBreakpoints.tablet)} {
    margin-right: 7px;
  }
`

export const Description = styled(Body3)`
  ${viewportWidth.lowerThan(widthBreakpoints.tablet)} {
  }
`

export const Arrow = styled.div`
  position: relative;
  width: 30px;
  height: 30px;
  ${viewportWidth.lowerThan(widthBreakpoints.mobile)} {
    display: none;
  }
`
