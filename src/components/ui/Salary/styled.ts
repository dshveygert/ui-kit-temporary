import styled from 'styled-components'

import { SmallText } from '../../../components/styled/TextStyles'
import Icons from '../../../constants/icons'


export const Base = styled.div`
  width: 100%;
`

export const SalaryTypes = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 10px;
  column-gap: 10px;
  margin-bottom: 16px;
`

export const MarkersContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1px;
`

export const Marker = styled(SmallText)``

export const SalaryPreview = styled.div`
  display: flex;
  align-items: center;

  &:before {
    content: '';
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-right: 14px;
    background-image: url(${Icons.salary});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }
`
