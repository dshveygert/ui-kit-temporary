import React, { FC, useEffect, useState } from 'react'
import Select, { components, OptionsType, OptionTypeBase, OptionProps } from 'react-select'
import { ThemeProvider } from 'styled-components'

import { defaultTheme } from '../../../styles/defaultTheme'
import useDebounce from '../../../hooks/common/useDebounce'

import { customStyles } from './CustomStyles'
import * as SC from './styled'


export type SkillsOptionType = OptionTypeBase & {
  value: string
  label: string
}

// // TODO: удалить, когда сделают бэк
// function makeid(length: number) {
//   let result = ''
//   const characters = 'abcdefghijklmnopqrstuvwxyz'
//   const charactersLength = characters.length
//   for (let i = 0; i < length; i++) {
//     result += characters.charAt(Math.floor(Math.random() * charactersLength))
//   }
//   return result
// }

// // TODO: удалить, когда сделают бэк
// const fakeFetch = (z) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(new Array(6).fill('').map(() => z + makeid(Math.floor(Math.random() * (7 - 5 + 1)) + 5)))
//     }, 200)
//   })
// }

type Props = {
  title?: string
  description?: string
  selectedSkills: OptionsType<SkillsOptionType>
}
type PropsInput = {
  availableSkills: OptionsType<SkillsOptionType>
  onChange: (v: OptionsType<SkillsOptionType>) => void
  placeholder?: string
  isCaseSensitive?: boolean
  input: true
  length?: never
} & Props

type PropsPreview = {
  availableSkills?: never
  onChange?: never
  placeholder?: never
  isCaseSensitive?: never
  input?: never
  length: number
} & Props

type CustomOptionProps = OptionProps<SkillsOptionType, boolean> & {
  matchLength: number
}

const Option = (props: CustomOptionProps) => {
  const { matchLength, ...rest } = props
  return (
    <components.Option {...rest}>
      <SC.MatchedOptionPart>{props.data.label.slice(0, matchLength)}</SC.MatchedOptionPart>
      <SC.RestOptionPart>{props.data.label.slice(matchLength)}</SC.RestOptionPart>
    </components.Option>
  )
}

const Skills: FC<PropsInput | PropsPreview> = (props) => {
  const {
    selectedSkills,
    availableSkills,
    onChange,
    placeholder,
    title,
    description,
    isCaseSensitive,
    input,
    length = 3
  } = props

  const selectedValues = new Set(selectedSkills.map(x => x.value))
  const possibleSkills = availableSkills?.filter(x => !selectedValues.has(x.value))

  const [suggestions, setSuggestions] = useState<OptionsType<SkillsOptionType>>([])
  const [inputValue, setInputValue] = useState('')
  const debouncedInputValue = useDebounce(inputValue, 200)

  useEffect(() => {
    if (debouncedInputValue === '') setSuggestions([])
    else {
      setSuggestions(
        possibleSkills?.filter((x) => {
          const possibleValue = isCaseSensitive ? x.value : x.value.toLowerCase()
          const targetValue = isCaseSensitive ? debouncedInputValue : debouncedInputValue.toLowerCase()
          return possibleValue.startsWith(targetValue)
        }) || []
      )
    }
  }, [debouncedInputValue])

  return (
    <ThemeProvider theme={defaultTheme}>
      <SC.Base>
        {title && <SC.Title>{title}</SC.Title>}
        {description && <SC.Description>{description}</SC.Description>}
        {input && onChange ? (
          <>
            <SC.SelectContainer>
              <Select
                components={{
                  MultiValueContainer: () => null,
                  IndicatorSeparator: () => null,
                  DropdownIndicator: () => null,
                  Option(props) {
                    return <Option {...props} matchLength={debouncedInputValue.length} />
                  }
                }}
                controlShouldRenderValue={true}
                filterOption={() => true}
                isClearable={false}
                isMulti
                isSearchable={true}
                menuIsOpen={inputValue !== '' && suggestions.length > 0}
                onChange={v => onChange(v as OptionsType<SkillsOptionType>)}
                onInputChange={v => setInputValue(v)}
                options={suggestions}
                placeholder={placeholder}
                styles={customStyles()}
                theme={theme => ({
                  ...theme,
                  ...defaultTheme
                })}
                value={selectedSkills}
              />
            </SC.SelectContainer>
            <SC.SelectedTags>
              {onChange &&
                selectedSkills.map((tag, i) => (
                  <SC.SelectedTag key={i}>
                    <SC.SelectedTagText>{tag.label}</SC.SelectedTagText>
                    <SC.SelectedTagDelete
                      onClick={() => onChange(selectedSkills.filter(innerTag => innerTag.label !== tag.label))}
                    />
                  </SC.SelectedTag>
                ))}
            </SC.SelectedTags>
          </>
        ) : (
          <SC.SkillsPreview>
            {selectedSkills.slice(0, length).map((skill, i) => (
              <SC.Skill key={i}>{skill.label}</SC.Skill>
            ))}
            {selectedSkills.length > length && (
              <SC.MoreSkillCounter>{selectedSkills.length - length}</SC.MoreSkillCounter>
            )}
          </SC.SkillsPreview>
        )}
      </SC.Base>
    </ThemeProvider>
  )
}

export default Skills
