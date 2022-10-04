import styled from 'styled-components'

import Icons from '../../../constants/icons'
import { widthBreakpoints } from '../../../styles/mediaBreakpoints'
import { viewportWidth } from '../../../utils/mixins'
import { Heading3, Body2, Heading4 } from '../../styled/TextStyles'


export const Base = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 15;
  width: 880px;
  display: flex;
  height: auto;
  padding: 32px 60px;
  background: ${props => props.theme.palette.background.primary};
  box-sizing: border-box;
  box-shadow: 0px 0px 10px #c0c0c0;
  border-radius: 10px;

  ${viewportWidth.lowerThan(widthBreakpoints.mobile)} {
    position: relative;
    flex-direction: column;
    align-items: center;
    left: 0%;
    top: 0%;
    transform: translate(0%, 0%);
    height: 100vh;
    padding-top: 60px;
    padding: 83px 22px 20px;
    border-radius: 0;
    width: 100%;
    overflow: scroll;
  }
`

export const ModalContent = styled.div`
  width: 100%;

  ${viewportWidth.lowerThan(widthBreakpoints.mobile)} {
    width: 325px;
  }
`

export const BackButtonContainer = styled.div`
  margin-bottom: 25px;
`

export const Header = styled.div`
  margin-bottom: 29px;
`

export const CloseIcon = styled.div`
  position: absolute;
  right: 25px;
  top: 25px;
  display: block;
  width: 20px;
  height: 20px;
  background-image: url(${Icons.menuClose});
  cursor: pointer;
`

export const Title = styled(Heading3)`
  margin-bottom: 6px;
  text-align: center;
  text-transform: uppercase;
`

export const Description = styled(Body2)`
  text-align: center;
`

export const SelectDateContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 33px;

  ${viewportWidth.lowerThan(widthBreakpoints.mobile)} {
    flex-direction: column;
    align-items: center;
    margin-bottom: 40px;
  }
`

export const CalendarScreeningContainer = styled.div`
  margin-bottom: 28px;
`

export const EmptyBlock = styled.div`
  width: 337px;
  height: 310px;
  background-color: aquamarine;
`

export const FieldContainer = styled.div`
  margin-bottom: 28px;

  ${viewportWidth.lowerThan(widthBreakpoints.mobile)} {
    margin-bottom: 24px;
  }
`

export const FieldTitle = styled(Heading4)`
  margin-bottom: 8px;
`

export const ButtonContainer = styled.div`
  width: 340px;
  margin: 0 auto;
`
