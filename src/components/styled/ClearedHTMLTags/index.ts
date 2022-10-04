import styled from 'styled-components'


const ClearButton = styled.button`
  display: flex;
  outline: none;
  padding: 0;
  cursor: pointer;
  background-color: ${props => props.theme.palette.background.primary};
  border: none;
`

export default ClearButton
