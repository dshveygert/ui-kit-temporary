import styled from 'styled-components'

import { Body2, Heading3 } from '../../styled/TextStyles'
import { widthBreakpoints } from '../../../styles/mediaBreakpoints'
import { viewportWidth } from '../../../utils/mixins'
import Icons from '../../../constants/icons'


export const Base = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 15;
  width: 520px;
  height: auto;
  padding: 35px;
  background: ${props => props.theme.palette.background.primary};
  box-sizing: border-box;
  box-shadow: 0px 0px 10px #c0c0c0;
  border-radius: 10px;

  ${viewportWidth.lowerThan(widthBreakpoints.mobile)} {
    width: 325px;
    padding: 23px 22px 20px;
  }
`

export const CloseButton = styled.div`
  content: '';
  display: block;
  width: 20px;
  height: 20px;
  position: absolute;
  right: 24px;
  top: 24px;
  background-image: url(${Icons.deleteBlack});
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
`

export const Title = styled(Heading3)`
  margin-bottom: 25px;
  line-height: 20px;
  text-transform: uppercase;
  text-align: center;

  ${viewportWidth.lowerThan(widthBreakpoints.mobile)} {
    margin-bottom: 20px;
  }
`

export const Description = styled(Body2)`
  line-height: 20px;
  text-align: center;
  margin-bottom: 30px;
  ${viewportWidth.lowerThan(widthBreakpoints.mobile)} {
    margin-bottom: 20px;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 340px;
  width: 100%;
  button:first-child {
    margin-right: 20px;
  }

  ${viewportWidth.lowerThan(widthBreakpoints.mobile)} {
    flex-direction: column;
    button:first-child {
      margin-right: 0;
      margin-bottom: 10px;
    }
  }
`
