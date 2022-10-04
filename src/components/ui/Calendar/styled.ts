import styled from 'styled-components'

import { Subtitle } from '../../../components/styled/TextStyles'


export const Base = styled.div`
  .DayPickerInput {
    display: block;
  }

  .DayPicker {
    border-bottom: 1px solid ${props => props.theme.palette.disabled.primary};
  }

  .DayPicker-wrapper {
    padding-bottom: 5px;

    &:focus {
      outline: none;
    }
  }

  .DayPicker-NavBar {
    border-bottom: 1px solid ${props => props.theme.palette.disabled.primary};
  }

  .DayPicker-Month {
    margin: 0 19px;
  }

  .DayPicker-Weekday {
    padding: 8px;
    font-weight: 700;
    font-size: 14px;
    color: ${props => props.theme.palette.text.primary};
  }

  .DayPicker-Day {
    color: ${props => props.theme.palette.text.primary};
    opacity: 0.5;
    padding: 6px;
    cursor: pointer;

    &:focus {
      outline: none;
    }
  }

  .DayPicker:not(.DayPicker--interactionDisabled)
    .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside):not(.DayPicker-Day--selected):hover {
    background-color: unset;
  }

  .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-day--outside) {
    background-color: unset;

    & > div {
      background-color: ${props => props.theme.palette.primary.light};
      color: ${props => props.theme.palette.primary.main};
      font-weight: bold;
      opacity: 1;
    }
  }
`

export const OverlayBase = styled.div`
  left: auto;
  margin-top: 5px;
  background: ${props => props.theme.palette.background.primary};
  box-shadow: ${props => props.theme.boxShadow.medium};
  border-radius: 8px;
  z-index: 3;

  &:focus {
    outline: none;
  }
`

export const OverlayButton = styled.button`
  display: block;
  width: 100%;
  border: 0;
  padding: 13px 0px 17px 0px;
  text-align: center;
  font-weight: bold;
  font-size: 14px;
  color: ${props => props.theme.palette.text.primary};
  background: none;
  text-align: center;
  cursor: pointer;
`

export const DayPickerCaption = styled.div`
  display: table-caption;
`

export const DayPickerNavbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
`

export const NavbarButton = styled.span<{
  icon: string
}>`
  display: inline-block;
  width: 15px;
  height: 15px;
  background-image: url(${props => props.icon});
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 6px;
  }
`

export const CaptionTitle = styled(Subtitle)``

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
`

export const DayCell = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 25px;
  height: 25px;
  border-radius: 50%;
`
