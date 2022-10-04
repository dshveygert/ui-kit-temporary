import styled from 'styled-components'

import { widthBreakpoints } from '../../../styles/mediaBreakpoints'
import { viewportWidth } from '../../../utils/mixins'


const ForMobileDesktop = styled.div`
  display: block;

  ${viewportWidth.lowerThan(widthBreakpoints.tablet)} {
    display: none;
  }

  ${viewportWidth.lowerThan(widthBreakpoints.mobile)} {
    display: block;
  }
`

export default ForMobileDesktop