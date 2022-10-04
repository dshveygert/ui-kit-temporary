import styled from 'styled-components'

import Icons from '../../../constants/icons'


export const Base = styled.div`
  position: relative;
`

export const Input = styled.input.attrs({
  type: 'checkbox'
})`
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;

  &:checked ~ label:before {
    border-color: ${props => props.theme.palette.primary.main};
    background: ${props => props.theme.palette.primary.main};
    background-image: url(${Icons.checkWhite});
    background-repeat: no-repeat;
    background-position: center;
  }
`

export const Label = styled.label`
  display: flex;
  align-items: center;
  margin-right: 29px;
  cursor: pointer;
  color: ${props => props.theme.palette.text.primary};
  font-size: 14px;

  &:before {
    content: '';
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-right: 8px;
    border: 2px solid ${props => props.theme.palette.text.disabled};
    border-radius: 4px;
    box-sizing: border-box;
    cursor: pointer;
  }

  &:hover:before {
    border: 2px solid ${props => props.theme.palette.text.primary};
  }
`
