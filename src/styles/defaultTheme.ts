import { DefaultTheme } from 'styled-components'


export const defaultTheme: DefaultTheme = {
  palette: {
    primary: {
      light: '#FDF0CD',
      main: '#F3B405',
      contrastText: '#FFFFFF'
    },
    error: {
      main: '#dc2323',
      contrastText: '#FFFFFF'
    },
    success: {
      main: '#84c783',
      contrastText: '#FFFFFF'
    },
    text: {
      primary: '#121212',
      disabled: '#E0E0E0',
      placeholder: 'rgba(12, 12, 12, 0.3)'
    },
    background: {
      primary: '#FFFFFF',
      secondary: '#FBFBFB'
    },
    disabled: {
      primary: '#F5F5F5'
    }
  },
  borderRadius: 10,
  boxShadow: {
    small: '0px 2px 3px rgba(0,0,0,.3)',
    medium: '0px 0px 10px #efefef',
    large: '0px 6px 3px rgba(0,0,0,.3)'
  }
}
