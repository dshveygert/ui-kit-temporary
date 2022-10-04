import styled from 'styled-components'
import { ToastContainer as ToastContainerStyled } from 'react-toastify'


const ToastContainer = styled(ToastContainerStyled)`
  .Toastify__toast-container {
    padding: 0;
  }
  .Toastify__toast {
    padding: 15px 10px 10px 20px;
    border-radius: ${props => props.theme.borderRadius}px;
    background: ${props => props.theme.palette.background.primary};
  }
  .Toastify__toast-body {
    padding: 0 10px 0 0;
  }
`

export default ToastContainer
