import styled from 'styled-components'

import { Heading1, Heading2, Heading3, SmallText } from '../../styled/TextStyles'


export const Base = styled.div`
  .react-tabs {
    ul {
      margin: 0;
      padding: 0;
    }
  }
`

export const Column = styled.div`
  width: 100%;
`

export const ColumnTitleContainer = styled.div`
  margin-bottom: 16px;
`

export const MobileColumnTitle = styled(Heading3)`
  margin-bottom: 24px;
`

export const MobileContainer = styled.div`
  max-width: 325px;
  margin: 0 auto;
`

export const DesktopContainer = styled.div<{
  columnsCount: number
}>`
  display: grid;
  grid-template-columns: repeat(${props => props.columnsCount}, minmax(0, 1fr));
  column-gap: 20px;
`

export const TabsContainer = styled.div`
  display: flex;
  justify-content: stretch;
  padding: 6px;
  margin-bottom: 16px;
  background: ${props => props.theme.palette.background.primary};
  box-shadow: ${props => props.theme.boxShadow.medium};
  border-radius: 10px;

  .react-tabs__tab {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 37.5px;
    cursor: pointer;

    &:not(:last-child) {
      margin-right: 2px;
    }

    &--selected {
      background-color: ${props => props.theme.palette.primary.light};
      color: ${props => props.theme.palette.primary.main};
      border-radius: 8px;

      & > div {
        font-weight: bold;
      }
    }
  }
`

export const TabContent = styled(SmallText)`
`

export const HeaderColumnContainer = styled.div`
  margin-bottom: 24px;
`

export const MobileComponentTitle = styled(Heading2)`
  margin-bottom: 24px;
  text-transform: uppercase;
`

export const DesktopComponentTitle = styled(Heading1)`
  margin-bottom: 25px;
  text-transform: uppercase;
`

export const ColumnItemContainer = styled.div`
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`
