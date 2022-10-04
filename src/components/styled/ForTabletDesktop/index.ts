import styled from 'styled-components'

import { widthBreakpoints } from '../../../styles/mediaBreakpoints'
import { viewportWidth } from '../../../utils/mixins'


const ForTabletDesktop = styled.div`
  display: block;

  ${viewportWidth.lowerThan(widthBreakpoints.mobile)} {
    display: none;
  }
`

export default ForTabletDesktop
