import React, { FC } from 'react'
import Select, {
  components,
  OptionProps,
  MultiValueProps,
  IndicatorProps,
  OptionsType,
  SingleValueProps
} from 'react-select'
import { ThemeProvider } from 'styled-components'

import { defaultTheme } from '../../../styles/defaultTheme'
import Icons from '../../../constants/icons'

import * as SC from './styled'
import { customStyles } from './CustomStyles'


export enum SelectType {
  Default = 'default',
  Tags = 'tags',
  Names = 'names'
}

export type OptionType = {
  value: string
  label: string
  disabled?: boolean
  img?: string
}

interface SelectProps {
  name: string
  options: OptionType[]
  value?: OptionType | OptionsType<OptionType>
  onChange?: (options: OptionType | OptionsType<OptionType> | null) => void
  placeholder?: string
  type?: `${SelectType}`
  error?: string
}

const CustomOptionCheckbox: FC<OptionProps<OptionType, boolean>> = props => (
  <components.Option {...props}>
    <SC.CustomInput type="checkbox" disabled={props.isDisabled} checked={props.isSelected} readOnly />
    <SC.CheckboxLabel>{props.data.label}</SC.CheckboxLabel>
  </components.Option>
)

const CustomOptionName: FC<OptionProps<OptionType, boolean>> = props => (
  <components.Option {...props}>
    <SC.OptionNameContent>
      {props.data.img && <SC.Img src={props.data.img} />}
      {props.data.label}
    </SC.OptionNameContent>
    <SC.IconAdd isSelected={props.isSelected} />
  </components.Option>
)

const CustomSingleValue: FC<SingleValueProps<OptionType>> = (props) => {
  const selectedItems = props.getValue()

  return (
    <components.SingleValue {...props}>
      {selectedItems.length === 0 ? (
        props.children
      ) : (
        <>
          {selectedItems[0].img && <SC.Img src={selectedItems[0].img} />}
          {selectedItems[0].label}
        </>
      )}
    </components.SingleValue>
  )
}

const CustomMultiValue: FC<MultiValueProps<OptionType>> = props => (
  <components.MultiValueRemove {...props}>
    <img src={Icons.deleteIcon} alt="delete" />
  </components.MultiValueRemove>
)

const DropdownIndicator: FC<IndicatorProps<OptionType, boolean>> = props => (
  <components.DropdownIndicator {...props}>
    <img src={Icons.arrowDown} alt="dropdown" />
  </components.DropdownIndicator>
)

const SelectComponent: FC<SelectProps> = ({ type, error, ...rest }) => (
  <ThemeProvider theme={defaultTheme}>
    <SC.Base>
      <Select
        components={{
          Option:
            type === SelectType.Tags
              ? CustomOptionCheckbox
              : type === SelectType.Names
              ? CustomOptionName
              : components.Option,
          MultiValueRemove: CustomMultiValue,
          IndicatorSeparator: () => null,
          DropdownIndicator,
          SingleValue: type === SelectType.Names ? CustomSingleValue : components.SingleValue
        }}
        isMulti={type === SelectType.Tags}
        styles={customStyles(type || SelectType.Default, error)}
        closeMenuOnSelect={type !== SelectType.Tags}
        hideSelectedOptions={false}
        isOptionDisabled={option => !!option.disabled}
        isClearable={false}
        isSearchable={false}
        theme={theme => ({
          ...theme,
          ...defaultTheme
        })}
        {...rest}
      />
      {error && <SC.Error>{error}</SC.Error>}
    </SC.Base>
  </ThemeProvider>
)

export default SelectComponent
