import styled from 'styled-components'

import { viewportWidth } from '../../../utils/mixins'
import { widthBreakpoints } from '../../../styles/mediaBreakpoints'


const ContentContainer = styled.div`
  width: 100%;
  max-width: 1060px;
  padding: 0;
  margin: auto;
  box-sizing: border-box;

  ${viewportWidth.lowerThan(widthBreakpoints.tablet)} {
    max-width: 768px;
    padding: 0 34px;
  }

  ${viewportWidth.lowerThan(widthBreakpoints.mobile)} {
    max-width: 414px;
    padding: 0 20px;
  }
`

export default ContentContainer
