import React, { FC, useRef, useState } from 'react'
import { ThemeProvider } from 'styled-components'

import RadioButton from '../../../components/ui/RadioButton'
import useOnClickOutside from '../../../hooks/common/useOnClickOutside'
import { defaultTheme } from '../../../styles/defaultTheme'

import * as SC from './styled'


const sortOptions = ['date', 'request', 'salary-desc', 'salary-asc'] as const

export type SortTypes = typeof sortOptions[number]

type Props = {
  onChange: (value: SortTypes) => void
  value: SortTypes
  variant?: 'outlined' | 'empty'
  dropdownPosition?: 'left' | 'right'
  t: {
    date: string
    request: string
    'salary-desc': string
    'salary-asc': string
  }
}

const SortButton: FC<Props> = (props) => {
  const { onChange, dropdownPosition, variant, value, t } = props
  const ref = useRef(null)
  const [show, setShow] = useState(false)

  useOnClickOutside(ref, () => setShow(false))

  return (
    <ThemeProvider theme={defaultTheme}>
      <SC.Base ref={ref}>
        <SC.Container onClick={() => setShow(!show)} variant={variant}>
          <SC.Text>Sort by</SC.Text>
          <SC.SortIcon />
        </SC.Container>
        {show && (
          <SC.DropdownContainer dropdownPosition={dropdownPosition}>
            {sortOptions.map((option, i) => (
              <SC.OptionContainer key={i}>
                <RadioButton
                  id={option}
                  name="sort"
                  label={t[option]}
                  value={option}
                  onChange={() => {
                    setShow(false)
                    onChange(option)
                  }}
                  checked={value === option}
                />
              </SC.OptionContainer>
            ))}
          </SC.DropdownContainer>
        )}
      </SC.Base>
    </ThemeProvider>
  )
}

export default SortButton
