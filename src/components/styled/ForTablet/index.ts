import styled from 'styled-components'

import { viewportWidth } from '../../../utils/mixins'
import { widthBreakpoints } from '../../../styles/mediaBreakpoints'


const ForTablet = styled.div`
  display: none;

  ${viewportWidth.lowerThan(widthBreakpoints.tablet)} {
    display: block;
  }
  ${viewportWidth.lowerThan(widthBreakpoints.mobile)} {
    display: none;
  }
`

export default ForTablet
