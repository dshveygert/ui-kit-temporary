import styled from 'styled-components'

import Icons from '../../../constants/icons'
import { widthBreakpoints } from '../../../styles/mediaBreakpoints'
import { viewportWidth } from '../../../utils/mixins'


export const Base = styled.div``

export const CustomInput = styled.input`
  position: absolute;
  height: 0;
  width: 0;
  opacity: 0;
  cursor: pointer;

  & ~ label {
    display: flex;
    cursor: pointer;
  }

  & ~ label:before {
    content: '';
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-right: 16px;
    border: 2px solid ${props => props.theme.palette.text.disabled};
    border-radius: 4px;
    box-sizing: border-box;
    cursor: pointer;
  }

  &:checked ~ label:before {
    border: none;
    background: ${props => props.theme.palette.primary.main};
    background-image: url(${Icons.checkWhite});
    background-repeat: no-repeat;
    background-position: center;
  }
`

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
`

export const Img = styled.img`
  display: inline;
  width: 25px;
  height: 25px;
  margin-right: 20px;
  border-radius: 50%;
`

export const OptionNameContent = styled.div`
  display: flex;
  align-items: center;
`

export const IconAdd = styled.div<{
  isSelected: boolean
}>`
  width: 15px;
  height: 15px;
  background-image: url(${props => (props.isSelected ? Icons.checkedCirle : Icons.add)});

  ${viewportWidth.lowerThan(widthBreakpoints.tablet)} {
    background-image: url(${props => (props.isSelected ? Icons.checkOrange : Icons.addOrange)});
  }
`

export const Error = styled.div`
  margin: 5px 20px;
  color: ${props => props.theme.palette.error.main};
`
