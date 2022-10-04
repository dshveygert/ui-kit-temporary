import styled from 'styled-components'

import { viewportWidth } from '../../../utils/mixins'
import { widthBreakpoints } from '../../../styles/mediaBreakpoints'
import { SmallText } from '../../../components/styled/TextStyles'


export const Base = styled.div`
  display: flex;
  margin: 12px 0;
`

export const ErrorIcon = styled.div`
  margin-right: 8px;
  ${viewportWidth.lowerThan(widthBreakpoints.tablet)} {
  }
`

export const ErrorText = styled(SmallText)`
  color: ${props => props.theme.palette.error.main};
  ${viewportWidth.lowerThan(widthBreakpoints.tablet)} {
  }
`
