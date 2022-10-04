import styled from 'styled-components'

import { widthBreakpoints } from '../../../styles/mediaBreakpoints'
import { viewportWidth } from '../../../utils/mixins'


export const Base = styled.div``

export const MainWrapper = styled.main<{ isZeroPadding: boolean; withHeader: boolean }>`
  padding: ${props => (props.isZeroPadding ? 0 : '40px 0')};
  margin: ${props => (props.withHeader ? '110px 0 0 0' : 0)};

  ${viewportWidth.lowerThan(widthBreakpoints.tablet)} {
    padding: ${props => (props.isZeroPadding ? 0 : '33px 0')};
    margin: ${props => (props.withHeader ? '90px 0 0 0' : 0)};
  }

  ${viewportWidth.lowerThan(widthBreakpoints.mobile)} {
    padding: ${props => (props.isZeroPadding ? 0 : '18px 0')};
    margin: ${props => (props.withHeader ? '60px 0 0 0' : 0)};
  }
`
