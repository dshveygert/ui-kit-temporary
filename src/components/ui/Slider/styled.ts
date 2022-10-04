import styled from 'styled-components'

import { SmallText, Heading4 } from '../../../components/styled/TextStyles'


export const Base = styled.div`
  width: 100%;
`

export const SalaryTypes = styled.div`
  display: flex;
  margin-bottom: 16px;

  & > *:not(:last-child) {
    margin-right: 29px;
  }
`

export const MarkersContainer = styled.div<{
  hint?: boolean
}>`
  display: grid;
  grid-template-columns: 1fr ${props => props.hint && '110px'} 1fr;
  align-items: end;
  margin-bottom: 1px;
`

export const Marker = styled(SmallText)<{
  textAlign?: 'left' | 'center' | 'right'
}>`
  text-align: ${props => props.textAlign || 'left'};
`

export const Label = styled(Heading4)`
  margin-bottom: 8px;
`
