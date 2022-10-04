import styled from 'styled-components'

import { viewportWidth } from '../../../utils/mixins'
import { widthBreakpoints } from '../../../styles/mediaBreakpoints'


const ForMobile = styled.div`
  display: none;

  ${viewportWidth.lowerThan(widthBreakpoints.mobile)} {
    display: block;
  }
`

export default ForMobile
