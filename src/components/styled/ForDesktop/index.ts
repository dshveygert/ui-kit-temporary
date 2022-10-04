import styled from 'styled-components'

import { viewportWidth } from '../../../utils/mixins'
import { widthBreakpoints } from '../../../styles/mediaBreakpoints'


const ForDesktop = styled.div`
  display: block;

  ${viewportWidth.lowerThan(widthBreakpoints.tablet)} {
    display: none;
  }
`

export default ForDesktop
