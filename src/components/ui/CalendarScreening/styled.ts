import styled from 'styled-components'

import { Body3, Heading3, SmallText } from '../../../components/styled/TextStyles'
import Icons from '../../../constants/icons'
import { widthBreakpoints } from '../../../styles/mediaBreakpoints'
import { viewportWidth } from '../../../utils/mixins'


export const Base = styled.div`
  .DayPicker .DayPicker-wrapper {
    padding: 0;

    &:focus {
      outline: none;
    }

    .DayPicker-Month {
      margin: 0 -23px;
    }
  }

  .DayPicker-Months .DayPicker-Month {
    margin: 0;
    border-spacing: 23px 12px;
    border-collapse: separate;

    ${viewportWidth.lowerThan(widthBreakpoints.mobile)} {
      border-spacing: 19px 12px;
    }
  }

  .DayPicker-Weekday {
    padding: 8px;
    font-weight: 700;
    font-size: 14px;
    color: ${props => props.theme.palette.text.primary};
  }

  .DayPicker-Week .DayPicker-Day {
    width: 30px;
    height: 30px;
    box-sizing: border-box;
    padding: 0;
    color: ${props => props.theme.palette.text.disabled};
    cursor: pointer;

    & > div {
      border-radius: 5px;
      background-color: ${props => props.theme.palette.disabled.primary};
    }

    &:focus {
      outline: none;
    }

    &--disabled > div {
      background-color: unset;
    }

    &--selected > div {
      background-color: ${props => props.theme.palette.disabled.primary};
    }
  }

  .DayPicker:not(.DayPicker--interactionDisabled)
    .DayPicker-Body
    .DayPicker-Week
    .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside):not(.DayPicker-Day--selected):hover {
    background-color: unset;
  }

  .DayPicker-Week .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-day--outside) {
    background-color: unset;
    &:hover {
      background-color: unset;
    }

    & > div {
      background-color: ${props => props.theme.palette.primary.main};
      color: ${props => props.theme.palette.primary.contrastText};
      font-weight: bold;
      opacity: 1;
    }
  }
`

export const WeekdayElementBase = styled(SmallText)`
  display: table-cell;
  text-align: center;
  color: ${props => props.theme.palette.text.primary};
`

export const DayPickerCaption = styled.div`
  display: table-caption;
  margin-left: 23px;
`

export const DayPickerNavbar = styled.div.attrs(props => ({
  className: 'DayPicker-NavBar'
}))`
  display: flex;
  align-items: center;
  height: 23px;
  position: absolute;
  right: 0;
`

export const NavbarButton = styled.span<{
  icon: string
}>`
  display: inline-block;
  width: 16px;
  height: 16px;
  background-image: url(${props => props.icon});
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 19px;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
`

export const DayCellBase = styled(Body3)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 30px;
  height: 30px;
`

export const CaptionElementBase = styled.div.attrs(props => ({
  className: 'DayPicker-Caption'
}))`
  margin-left: 23px;
`

export const CaptionElementContainer = styled.div`
  display: flex;
  align-items: center;
`

export const CalendarIcon = styled.div`
  width: 20px;
  height: 20px;
  margin-right: 19px;
  background-image: url(${Icons.jobExperience});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`

export const CaptionTitle = styled(Heading3)``

export const DefaultDayPickerStyles = styled.div`
  .DayPicker {
    display: inline-block;
    font-size: 1rem;
  }

  .DayPicker-wrapper {
    position: relative;

    flex-direction: row;
    padding-bottom: 1em;

    -webkit-user-select: none;

    -moz-user-select: none;

    -ms-user-select: none;

    user-select: none;
  }

  .DayPicker-Months {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .DayPicker-Month {
    display: table;
    margin: 0 1em;
    margin-top: 1em;
    border-spacing: 0;
    border-collapse: collapse;

    -webkit-user-select: none;

    -moz-user-select: none;

    -ms-user-select: none;

    user-select: none;
  }

  .DayPicker-NavBar {
  }

  .DayPicker-NavButton {
    position: absolute;
    top: 1em;
    right: 1.5em;
    left: auto;

    display: inline-block;
    margin-top: 2px;
    width: 1.25em;
    height: 1.25em;
    background-position: center;
    background-size: 50%;
    background-repeat: no-repeat;
    color: #8b9898;
    cursor: pointer;
  }

  .DayPicker-NavButton:hover {
    opacity: 0.8;
  }

  .DayPicker-NavButton--prev {
    margin-right: 1.5em;
    background-color: red;
  }

  .DayPicker-NavButton--next {
    background-color: green;
  }

  .DayPicker-NavButton--interactionDisabled {
    display: none;
  }

  .DayPicker-Caption {
    display: table-caption;
    margin-bottom: 0.5em;
    padding: 0 0.5em;
    text-align: left;
  }

  .DayPicker-Caption > div {
    font-weight: 500;
    font-size: 1.15em;
  }

  .DayPicker-Weekdays {
    display: table-header-group;
    margin-top: 1em;
  }

  .DayPicker-WeekdaysRow {
    display: table-row;
  }

  .DayPicker-Weekday {
    display: table-cell;
    padding: 0.5em;
    color: #8b9898;
    text-align: center;
    font-size: 0.875em;
  }

  .DayPicker-Weekday abbr[title] {
    border-bottom: none;
    text-decoration: none;
  }

  .DayPicker-Body {
    display: table-row-group;
  }

  .DayPicker-Week {
    display: table-row;
  }

  .DayPicker-Day {
    display: table-cell;
    padding: 0.5em;
    border-radius: 50%;
    vertical-align: middle;
    text-align: center;
    cursor: pointer;
  }

  .DayPicker-WeekNumber {
    display: table-cell;
    padding: 0.5em;
    min-width: 1em;
    border-right: 1px solid #eaecec;
    color: #8b9898;
    vertical-align: middle;
    text-align: right;
    font-size: 0.75em;
    cursor: pointer;
  }

  .DayPicker--interactionDisabled .DayPicker-Day {
    cursor: default;
  }

  .DayPicker-Footer {
    padding-top: 0.5em;
  }

  .DayPicker-TodayButton {
    border: none;
    background-color: transparent;
    background-image: none;
    box-shadow: none;
    color: #4a90e2;
    font-size: 0.875em;
    cursor: pointer;
  }

  /* Default modifiers */

  .DayPicker-Day--today {
    color: #d0021b;
    font-weight: 700;
  }

  .DayPicker-Day--outside {
    color: #8b9898;
    cursor: default;
  }

  .DayPicker-Day--disabled {
    color: #dce0e0;
    cursor: default;
    /* background-color: #eff1f1; */
  }

  /* Example modifiers */

  .DayPicker-Day--sunday {
    background-color: #f7f8f8;
  }

  .DayPicker-Day--sunday:not(.DayPicker-Day--today) {
    color: #dce0e0;
  }

  .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside) {
    position: relative;
    background-color: #4a90e2;
    color: #f0f8ff;
  }

  .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside):hover {
    background-color: #51a0fa;
  }

  .DayPicker:not(.DayPicker--interactionDisabled)
    .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover {
    background-color: #f0f8ff;
  }

  /* DayPickerInput */

  .DayPickerInput {
    display: inline-block;
  }

  .DayPickerInput-OverlayWrapper {
    position: relative;
  }

  .DayPickerInput-Overlay {
    position: absolute;
    left: 0;
    z-index: 1;

    background: white;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  }
`
