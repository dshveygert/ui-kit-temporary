import styled from 'styled-components'

import { MediumLabel } from '../../styled/TextStyles'
import { widthBreakpoints } from '../../../styles/mediaBreakpoints'
import { viewportWidth } from '../../../utils/mixins'


export const Base = styled.div`
  display: flex;
  height: 20px;
  cursor: pointer;
  align-items: center;

  ${viewportWidth.lowerThan(widthBreakpoints.tablet)} {
    margin-bottom: 0;
  }
`

export const BackButton = styled.div`
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
