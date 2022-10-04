import 'styled-components'


interface PaletteColor {
  light?: string
  main: string
  contrastText: string
}

interface TextColor {
  primary: string
  disabled: string
  placeholder: string
}

interface BackgroundColor {
  primary: string
  secondary: string
}

interface DisabledColor {
  primary: string
}

interface Palette {
  primary: PaletteColor
  error: PaletteColor
  success: PaletteColor
  text: TextColor
  background: BackgroundColor
  disabled: DisabledColor
}

// extension for styled components theme
declare module 'styled-components' {
  export interface DefaultTheme {
    palette: Palette
    borderRadius: number
    boxShadow: {
      small: string
      medium: string
      large: string
    }
  }
}
