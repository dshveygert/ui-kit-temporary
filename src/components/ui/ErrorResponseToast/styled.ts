import styled from 'styled-components'

import { viewportWidth } from '../../../utils/mixins'
import { widthBreakpoints } from '../../../styles/mediaBreakpoints'
import { Heading4, Body3 } from '../../../components/styled/TextStyles'


export const Base = styled.div`
  display: flex;
  align-items: baseline;
`

export const ErrorIcon = styled.div`
  margin-right: 15px;
  ${viewportWidth.lowerThan(widthBreakpoints.tablet)} {
  }
`

export const ErrorTitle = styled(Heading4)`
  color: ${props => props.theme.palette.error.main};
  margin-bottom: 7px;
  ${viewportWidth.lowerThan(widthBreakpoints.tablet)} {
  }
`

export const ErrorText = styled(Body3)`
  color: ${props => props.theme.palette.text.primary};
  ${viewportWidth.lowerThan(widthBreakpoints.tablet)} {
  }
`
