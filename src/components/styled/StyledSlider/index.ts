import ReactSlider from 'react-slider'
import styled from 'styled-components'


export const StyledSlider = styled(ReactSlider)`
  width: 100%;
  height: 17px;
  display: flex;
  align-items: center;

  .track {
    height: 5px;
    background-color: ${props => props.theme.palette.disabled.primary};
    border-radius: 100px;

    &-1 {
      background-color: ${props => props.theme.palette.primary.light};
    }
  }

  .thumb {
    width: 11px;
    height: 11px;
    border-radius: 50%;
    border: 3px solid ${props => props.theme.palette.background.primary};
    background-color: ${props => props.theme.palette.primary.main};
    box-shadow: ${props => props.theme.boxShadow.medium};
    cursor: grab;
    z-index: 0 !important;

    &:focus {
      outline: none;
    }
  }
`
