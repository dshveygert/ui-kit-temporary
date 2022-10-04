import styled, { css } from 'styled-components'

import { viewportWidth } from '../../../utils/mixins'
import { widthBreakpoints } from '../../../styles/mediaBreakpoints'
import { Subtitle } from '../../../components/styled/TextStyles'
import { FlexCenter } from '../../styled/StyleTemplates'

import { BadgeProps } from './index'


export const Base = styled.div<BadgeProps>`
  position: relative;
  ${props =>
    props.row &&
    css`
      ${FlexCenter}
    `}
`

export const BadgeWrapper = styled(Subtitle)<BadgeProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: max-content;
  min-width: 20px;
  height: 20px;
  padding: 0 5px;
  background: ${props => props.theme.palette.error.main};
  color: ${props => props.theme.palette.error.contrastText};
  border-radius: 5px;
  position: ${props => (props.row ? 'initial' : 'absolute')};
  bottom: 37px;
  left: 37px;
  ${props =>
    props.color === 'yellow'
      ? css`
          background: ${props => props.theme.palette.primary.light};
          color: ${props => props.theme.palette.primary.main};
        `
      : css`
          background: ${props => props.theme.palette.error.main};
          color: ${props => props.theme.palette.error.contrastText};
        `}

  ${viewportWidth.lowerThan(widthBreakpoints.mobile)} {
  }
`
