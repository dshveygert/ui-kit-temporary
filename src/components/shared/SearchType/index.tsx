import React, { FC, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

import { useOnClickOutside } from '../../../hooks'
import { RadioButton } from '../../../main'

import * as SC from './styled'


export type SearchType = {
  text: string
  link: string
}

type Props = {
  options: SearchType[]
  currentOption: SearchType
  onSelect: (option: SearchType) => void
}

const SearchTypePicker: FC<Props> = (props) => {
  const { currentOption, options, onSelect } = props
  const ref = useRef(null)
  const [showDropdown, setShowDropdown] = useState(false)

  useOnClickOutside(ref, () => setShowDropdown(false))

  return (
    <SC.Base ref={ref}>
      <SC.Container onClick={() => setShowDropdown(!showDropdown)}>
        <SC.Text>{currentOption.text}</SC.Text>
        <SC.SortIcon />
      </SC.Container>
      {showDropdown && (
        <SC.DropdownContainer dropdownPosition={'left'}>
          {options.map((option, i) => (
            <Link to={option.link} key={i}>
              <RadioButton
                id={option.text}
                name="searchType"
                label={option.text}
                value={option.text}
                onChange={() => {
                  setShowDropdown(false)
                  onSelect(option)
                }}
                checked={currentOption.text === option.text}
              />
            </Link>
          ))}
        </SC.DropdownContainer>
      )}
    </SC.Base>
  )
}

export default SearchTypePicker
