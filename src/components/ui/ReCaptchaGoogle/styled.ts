import styled from 'styled-components'

import { viewportWidth } from '../../../utils/mixins'
import { widthBreakpoints } from '../../../styles/mediaBreakpoints'
import { MediumLabel } from '../../../components/styled/TextStyles'


export const Base = styled.div`
  display: flex;
  margin-bottom: 69px;
  cursor: pointer;

  ${viewportWidth.lowerThan(widthBreakpoints.tablet)} {
    margin-bottom: 0;
  }
`

export const BackButton = styled.div`
  width: 19.5px;
  height: 13.11px;
  margin-right: 16px;
  position: relative;

  ${viewportWidth.lowerThan(widthBreakpoints.tablet)} {
  }
`

export const BackText = styled(MediumLabel)`
  text-transform: uppercase;
  font-weight: bold;

  ${viewportWidth.lowerThan(widthBreakpoints.tablet)} {
  }
`
