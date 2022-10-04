import { CSSObject } from '@emotion/serialize'
import { Styles } from 'react-select'

import { defaultTheme } from '../../../styles/defaultTheme'

import { OptionType, SelectType } from '.'


export const customStyles = (type: `${SelectType}`, error?: string): Styles<OptionType, boolean> => ({
  control: (styles: CSSObject, { theme, isFocused }: any) => {
    const borderColor = error ? 
      theme.palette.error.main 
      : 
      isFocused ? theme.palette.text.primary : 'transparent'

    return {
      ...styles,
      border: `1px solid ${borderColor}`,
      borderRadius: `${theme.borderRadius}px`,
      boxShadow: defaultTheme.boxShadow.medium,
      transition: 'none',
      ':focus': {
        ...styles[':focus'],
        outline: '1px solid black',
        borderColor: error ? theme.palette.error.main : theme.palette.text.primary
      },
      ':hover': {
        ...styles[':hover'],
        borderColor
      }
    }
  },
  dropdownIndicator: (styles: CSSObject) => ({
    ...styles,
    cursor: 'pointer'
  }),
  input: (styles: CSSObject) => ({
    ...styles,
    margin: '0',
    padding: '0'
  }),
  menu: (styles: CSSObject, { theme }: any) => ({
    ...styles,
    paddingRight: '9px',
    borderRadius: `${theme.borderRadius}px`,
    background: theme.palette.background.primary,
    boxShadow: defaultTheme.boxShadow.medium
  }),
  menuList: (styles: CSSObject, { theme }: any) => ({
    ...styles,
    maxHeight: '160px',
    padding: type === SelectType.Names ? '9px' : '5px 0',

    '::-webkit-scrollbar': {
      width: '3px'
    },

    '::-webkit-scrollbar-track': {
      width: '3px',
      margin: '11px 0',
      backgroundColor: theme.palette.background.secondary
    },

    '::-webkit-scrollbar-thumb': {
      borderRadius: '10px',
      backgroundColor: theme.palette.primary.main
    }
  }),
  multiValue: (styles: CSSObject, { theme }: any) => ({
    ...styles,
    margin: '2px 8px 2px 0',
    borderRadius: '4px',
    backgroundColor: theme.palette.primary.light
  }),
  multiValueLabel: (styles: CSSObject, { theme }: any) => ({
    ...styles,
    padding: '4px 3px 4px 6px',
    color: theme.palette.primary.main,
    fontWeight: 'bold',
    fontSize: '12px',
    lineHeight: '16px'
  }),
  multiValueRemove: (styles: CSSObject) => ({
    ...styles,

    ':hover': {
      ...styles[':hover'],
      backgroundColor: 'none',
      cursor: 'pointer'
    }
  }),
  option: (styles: CSSObject, { isSelected, isDisabled, theme }: any) => ({
    ...styles,
    display: 'flex',
    alignItems: 'center',
    justifyContent: type === SelectType.Names ? 'space-between' : 'unset',
    padding: type === SelectType.Names ? '5px 11px 5px 6px' : type === SelectType.Tags ? '7px 15px' : '7px 25px',
    borderRadius: type === SelectType.Names ? '8px' : '0',
    boxSizing: 'border-box',
    border: type === SelectType.Names && isSelected ? `1px solid ${theme.palette.primary.light}` : 'none',
    backgroundColor: 'none',
    color: theme.palette.text.primary,
    cursor: 'pointer',
    opacity: isDisabled ? '0.3' : '1',

    ':active': {
      ...styles[':active'],
      backgroundColor: 'none'
    },

    ':hover': {
      ...styles[':hover'],
      backgroundColor: type === SelectType.Names && !isDisabled ? theme.palette.primary.light : 'none'
    },

    ':not(:last-child)': {
      marginBottom: type === SelectType.Names ? '5px' : '0'
    }
  }),
  placeholder: (styles: CSSObject, { theme }: any) => ({
    ...styles,
    color: theme.palette.text.primary,
    opacity: '0.3',
    fontSize: '14px',
    lineHeight: '20px'
  }),
  singleValue: (styles: CSSObject) => ({
    ...styles,
    display: 'flex',
    alignItems: 'center',
    margin: '0'
  }),
  valueContainer: (styles: CSSObject, { hasValue }: any) => ({
    ...styles,
    minHeight: type === SelectType.Names ? '40px' : 'auto',
    padding:
      type === SelectType.Tags && hasValue
        ? '6px 0 6px 15px'
        : type === SelectType.Names && hasValue
        ? '7px 0 8px 15px'
        : '11px 0 11px 25px',
    cursor: 'pointer'
  })
})
