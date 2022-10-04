import styled, { css } from 'styled-components'

import { Subtitle } from '../../styled/TextStyles'


export const Base = styled.div`
  width: 337px;
  display: flex;
  justify-content: space-between;
`

export const Column = styled.div`
  width: 90px;
`

export const ColumnTitle = styled(Subtitle)`
  margin-bottom: 26px;
  text-align: center;
`

export const TimeContainer = styled.div<{
  selected: boolean
  disabled?: boolean
}>`
  padding: 6px 0 5px 0;
  line-height: 14px;
  background: ${props => props.theme.palette.background.primary};
  box-shadow: ${props => props.theme.boxShadow.medium};
  box-sizing: border-box;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;

  &:not(:last-child) {
    margin-bottom: 10px;
  }

  ${props => props.selected && 
    css`
      color: ${props => props.theme.palette.primary.contrastText};
      background: ${props => props.theme.palette.primary.main};
      font-weight: bold;
    `
  }

  ${props => props.disabled &&
    css`
      box-shadow: none;
      color: ${props => props.theme.palette.text.disabled};
    `
  }
`
