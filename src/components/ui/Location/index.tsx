import React, { FC } from 'react'
import PlacesAutocomplete from 'react-places-autocomplete'
import { ThemeProvider } from 'styled-components'

import AddButton from '../../../components/ui/AddButton'
import Input from '../../../components/ui/Input'
import Icons from '../../../constants/icons'
import { defaultTheme } from '../../../styles/defaultTheme'

import * as SC from './styled'


export type LocationFieldType = {
  country?: string
  state?: string
  city: string
  address1?: string
  address2?: string
  zip?: string
}

type Props = {
  onChange: (locations: LocationFieldType[]) => void
  value: LocationFieldType[]
  multipleLocations?: boolean
  t: {
    addLocation: string
    addLocationPlaceholder: string
    locationTitle: string
  }
  withoutLabel?: boolean
  errors?: string[]
  removable?: boolean
  input?: boolean
}

type PropsInput = {
  onChange: (locations: LocationFieldType[]) => void
  value: LocationFieldType[]
  multipleLocations?: boolean
  t: {
    addLocation: string
    addLocationPlaceholder: string
    locationTitle: string
  }
  withoutLabel?: boolean
  errors?: string[]
  removable?: boolean
  input: true
}

type PropsPreview = {
  value: LocationFieldType[]
  onChange?: never
  multipleLocations?: never
  t?: {
    addLocation: never
    addLocationPlaceholder: never
    locationTitle: never
  }
  withoutLabel?: never
  errors?: never
  removable?: never
  input?: never
}

const stringToLocationFields = (value: string): LocationFieldType => {
  const splittedValue = value.split(', ')

  return {
    city: splittedValue[0] || '',
    state: splittedValue.length > 2 ? splittedValue[1] : '',
    country: splittedValue.length > 2 ? splittedValue[2] : splittedValue[1] || ''
  }
}

const Location: FC<PropsInput | PropsPreview> = (props) => {
  const {
    onChange = () => undefined,
    multipleLocations,
    value,
    t,
    errors,
    removable,
    withoutLabel = false,
    input
  } = props
  const formattedValue = value.map(item => [item.city, item.state, item.country].filter(item => item).join(', '))
  if (value.length === 0) formattedValue.push('')

  const onAddLocation = () => {
    const result = [...value, { state: '', city: '', country: '' }]
    if (value.length === 0) result.push({ state: '', city: '', country: '' })
    onChange(result)
  }

  const onChangeField = (location: string, i: number) => {
    const newLocations = value.slice()
    if (value.length <= i) newLocations.push({ state: '', city: '', country: '' })
    newLocations[i] = stringToLocationFields(location)
    onChange(newLocations)
  }

  const removeProps = (i: number) => {
    if (i === 0 || !removable) return {}
    return {
      icon: Icons.deleteBlack,
      iconPosition: 'right' as const,
      onIconClick: () => onChange([...value.slice(0, i), ...value.slice(i + 1)])
    }
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <SC.Base>
        {input ? (
          <>
            {formattedValue.map((location, i) => (
              <SC.LocationContainer key={i}>
                {!withoutLabel && <SC.Title>{t?.locationTitle}</SC.Title>}
                <SC.InputContainer multipleLocations={multipleLocations}>
                  <PlacesAutocomplete
                    value={location}
                    onChange={(item: string) => onChangeField(item, i)}
                    onSelect={(item: string) => onChangeField(item, i)}
                    searchOptions={{
                      types: ['(cities)']
                    }}
                  >
                    {({ getInputProps, suggestions, getSuggestionItemProps }) => (
                      <>
                        <Input
                          {...getInputProps({ placeholder: t?.addLocationPlaceholder })}
                          error={errors?.[i]}
                          {...removeProps(i)}
                        />
                        {suggestions.length > 0 && (
                          <SC.AutocompleteDropdownContainer>
                            {suggestions.map((suggestion, i) => (
                              <SC.Suggestion
                                className={`suggestion${suggestion.active ? '--active' : ''}`}
                                {...getSuggestionItemProps(suggestion)}
                                key={i}
                              >
                                {suggestion.description}
                              </SC.Suggestion>
                            ))}
                          </SC.AutocompleteDropdownContainer>
                        )}
                      </>
                    )}
                  </PlacesAutocomplete>
                </SC.InputContainer>
              </SC.LocationContainer>
            ))}
            {multipleLocations && t && <AddButton label={t?.addLocation} onClick={onAddLocation} />}
          </>
        ) : (
          <>
            {value.map(item => (
              <SC.LocationPreview key={`${item.state}-${item.city}`}>
                {item.state && `${item.state},`} {item.city}
              </SC.LocationPreview>
            ))}
          </>
        )}
      </SC.Base>
    </ThemeProvider>
  )
}

export default Location
