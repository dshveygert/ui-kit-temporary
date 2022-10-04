export { SmallText } from '../../../components/styled/TextStyles'

import styled from 'styled-components'

import ClearButton from '../../../components/styled/ClearedHTMLTags'
import { widthBreakpoints } from '../../../styles/mediaBreakpoints'
import { viewportWidth } from '../../../utils/mixins'


export const ResendButtonContainer = styled(ClearButton)`
  ${viewportWidth.lowerThan(widthBreakpoints.tablet)} {
  }
`

export const Icon = styled.div`
  position: relative;
  width: 20px;
  height: 20px;
  margin-right: 16px;
  ${viewportWidth.lowerThan(widthBreakpoints.tablet)} {
  }
`

export const ResendButtonText = styled.div`
  ${viewportWidth.lowerThan(widthBreakpoints.tablet)} {
  }
`