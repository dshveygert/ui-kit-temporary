import styled from 'styled-components'


export const Base = styled.div``

export const Label = styled.label`
  position: relative;
  display: block;
  width: 50px;
  height: 25px;
  background: ${props => props.theme.palette.disabled.primary};
  border-radius: 12.5px;
  transition: 0.2s;
  cursor: pointer;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    width: 25px;
    height: 25px;
    background: ${props => props.theme.palette.background.primary};
    border-radius: 50%;
    box-shadow: 0px 0px 6px rgba(43, 40, 66, 0.15);
    transition: 0.2s;
  }
`

export const Input = styled.input`
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;

  &:checked ~ label {
    background: ${props => props.theme.palette.primary.main};

    &:before {
      left: calc(100% - 25px);
    }
  }
`

export const Marker = styled.div`
  position: absolute;
  left: 0;
  width: 25px;
  height: 25px;
  background: ${props => props.theme.palette.background.primary};
  border-radius: 50%;
  box-shadow: 0px 0px 6px rgba(43, 40, 66, 0.15);
  transition: 0.2s;
`
