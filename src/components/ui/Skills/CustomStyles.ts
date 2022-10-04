import { CSSObject } from '@emotion/serialize'
import { Styles } from 'react-select'

import { defaultTheme } from '../../../styles/defaultTheme'

import { SkillsOptionType } from '.'


export const customStyles = (): Styles<SkillsOptionType, boolean> => ({
  control: (styles: CSSObject, { isFocused, theme }: any) => ({
    ...styles,
    border: isFocused ? `1px solid ${theme.palette.text.primary}` : '1px solid transparent',
    borderRadius: `${theme.borderRadius}px`,
    boxShadow: defaultTheme.boxShadow.medium,
    boxSizing: 'border-box',
    transition: 'border none',
    ':hover': {
      ...styles[':hover'],
      border: isFocused ? `1px solid ${theme.palette.text.primary}` : '1px solid transparent'
    },
    ':focus': {
      ...styles[':focus'],
      outline: `1px solid ${theme.palette.text.primary}`
    }
  }),
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
    padding: '9px',

    '::-webkit-scrollbar': {
      width: '3px',
      height: '3px'
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
  option: (styles: CSSObject, { isFocused, isDisabled, theme }: any) => ({
    ...styles,
    display: 'block',
    alignItems: 'center',
    backgroundColor: isFocused ? theme.palette.primary.light : 'none',
    color: 'rgba(18, 18, 18, 0.3)', // color #121212
    cursor: 'pointer',
    opacity: isDisabled ? '0.3' : '1',
    borderRadius: '8px',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',

    ':active': {
      ...styles[':active'],
      backgroundColor: 'none'
    },

    ':hover': {
      ...styles[':hover'],
      backgroundColor: theme.palette.primary.light
    },

    ':not(:last-child)': {
      marginBottom: '0'
    }
  }),
  placeholder: (styles: CSSObject, { theme }: any) => ({
    ...styles,
    display: 'block',
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
  valueContainer: (styles: CSSObject) => ({
    ...styles,
    minHeight: 'auto',
    padding: '6px 0 6px 15px',
    cursor: 'text'
  })
})
