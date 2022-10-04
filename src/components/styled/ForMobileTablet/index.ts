import styled from 'styled-components'

import { widthBreakpoints } from '../../../styles/mediaBreakpoints'
import { viewportWidth } from '../../../utils/mixins'


const ForMobileTablet = styled.div`
  display: none;

  ${viewportWidth.lowerThan(widthBreakpoints.tablet)} {
    display: block;
  }
`

export default ForMobileTablet
