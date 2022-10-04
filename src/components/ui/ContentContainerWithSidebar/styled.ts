import styled from 'styled-components'

import ContentContainer from '../../../components/styled/ContentContainer'


export const Base = styled.div`
  display: flex;
  flex: 1 0 auto;
`

export const Sidebar = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 30%;
  background: ${props => props.theme.palette.background.secondary};
`

export const Content = styled.div``

export const FakeBlockLeft = styled.div`
  flex: 1;
  z-index: -1;
  background: ${props => props.theme.palette.background.secondary};
`

export const FakeBlockRight = styled.div`
  flex: 1;
  z-index: -1;
  background: ${props => props.theme.palette.background.primary};
`

export const ContentContainerFlex = styled(ContentContainer)`
  display: flex;
  margin: 0;
`
