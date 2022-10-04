import styled from 'styled-components'

import ContentContainer from '../../../components/styled/ContentContainer'
import { viewportWidth } from '../../../utils/mixins'
import { widthBreakpoints } from '../../../styles/mediaBreakpoints'


export const Base = styled.div`
  display: flex;
  flex: 1 0 auto;
`

export const Sidebar = styled.aside`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 250px;
  padding: 175px 28px 0 0;
  background: ${props => props.theme.palette.background.secondary};

  ${viewportWidth.lowerThan(widthBreakpoints.tablet)} {
    min-width: 215px;
    padding: 120px 14px 0 34px;
  }

  ${viewportWidth.lowerThan(widthBreakpoints.mobile)} {
    display: none;
  }
`

export const Content = styled.div`
  width: 810px;
  height: 100%;
  box-sizing: border-box;
  padding: 175px 0 65px 90px;

  ${viewportWidth.lowerThan(widthBreakpoints.tablet)} {
    width: 100%;
    padding: 166px 34px 76px 50px;
  }

  ${viewportWidth.lowerThan(widthBreakpoints.mobile)} {
    flex-direction: column;
    padding: 132px 0 42px;
  }
`

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

  ${viewportWidth.lowerThan(widthBreakpoints.tablet)} {
  }

  ${viewportWidth.lowerThan(widthBreakpoints.mobile)} {
    flex-direction: column;
  }
`
