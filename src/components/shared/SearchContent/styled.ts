import styled from 'styled-components'

import Icons from '../../../constants/icons'
import { widthBreakpoints } from '../../../styles/mediaBreakpoints'
import { viewportWidth } from '../../../utils'
import { FlexCenter } from '../../styled/StyleTemplates'
import { Body3, Heading1, Heading3 } from '../../styled/TextStyles'


export const SearchHeader = styled(Heading1)`
  text-transform: uppercase;
`

export const Base = styled.div`
  width: calc(100% - 303px);
  flex: 1 0 auto;
  display: flex;
  justify-content: center;
  padding: 150px 0 150px 57px;
  box-sizing: border-box;

  ${viewportWidth.lowerThan(widthBreakpoints.tablet)} {
    padding: 140px 0;
  }

  ${viewportWidth.lowerThan(widthBreakpoints.mobile)} {
    width: 100%;
    padding: 75px 0px;
  }
`

export const JobListHeader = styled.div`
  ${FlexCenter}
  justify-content: space-between;
  margin-bottom: 24px;
`

export const FilterIcon = styled.div<{
  icon?: string
}>`
  width: 20px;
  height: 20px;
  background-image: url(${props => props.icon || Icons.filter});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
`

export const JobListContainer = styled.div`
  width: 100%;
`

export const InputsContainer = styled.div`
  display: flex;
  margin-bottom: 24px;
`

export const SearchInputContainer = styled.div`
  flex: 1 0 auto;
  margin-right: 13px;

  ${viewportWidth.lowerThan(widthBreakpoints.mobile)} {
    margin: 0;
  }
`

export const SelectorGroupContainer = styled.div<{
  show: boolean
}>`
  display: ${props => (props.show ? 'block' : 'none')};
  width: 250px;
  margin-bottom: 16px;

  ${viewportWidth.lowerThan(widthBreakpoints.mobile)} {
    width: 100%;
  }
`

export const ItemsList = styled.div`
  margin-bottom: 47px;
`

export const JobContainer = styled.div`
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`

export const BackButtonContainer = styled.div`
  margin-bottom: 25px;
`

export const JobsCount = styled(Heading3)``

export const NoResultsContainer = styled.div`
  width: 300px;
  margin: 80px auto 0;
`

export const Image404 = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;

  ${viewportWidth.lowerThan(widthBreakpoints.mobile)} {
    margin-bottom: 30px;
  }
`

export const Title = styled(Heading3)`
  margin: 0 auto 30px;
  text-align: center;

  ${viewportWidth.lowerThan(widthBreakpoints.mobile)} {
    margin-bottom: 8px;
  }
`

export const Description = styled(Body3)`
  margin-bottom: 37px;
  text-align: center;
`

export const AdditionalInfo = styled.div`
  ${FlexCenter}
  justify-content: space-between;
  margin-bottom: 24px;
`

export const Pagination = styled.div`
  width: 340px;
  margin-top: 24px;

  ${viewportWidth.lowerThan(widthBreakpoints.tablet)} {
    width: auto;
    margin-bottom: 30px;
  }
`

export const PaginationText = styled(Body3)`
  display: none;
  margin-top: 16px;
  text-align: center;

  ${viewportWidth.lowerThan(widthBreakpoints.tablet)} {
    display: block;
  }
`

export const IconLoader = styled.span`
  width: 24px;
  height: 24px;

  & > img {
    transform: rotate(0deg);
    animation: spin 1s infinite ease-in-out;
  }

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`

export const PaginateContainer = styled.div`
  .pages {
    display: flex;
    padding: 0;
    margin: 0 0 40px 0;
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;

    .previous,
    .next {
      list-style-type: none;

      & > a:focus {
        outline: none;
      }
    }

    .previous {
      margin-right: 25px;
    }

    .next {
      margin-left: 25px;
    }

    .page,
    .break {
      width: 30px;
      margin-right: 10px;
      text-align: center;
      list-style-type: none;
      color: ${props => props.theme.palette.text.disabled};
      cursor: pointer;

      & > a:focus {
        outline: none;
      }
    }

    .page a {
      display: block;
    }

    .page.selected {
      color: ${props => props.theme.palette.text.primary};

      &:after {
        content: '';
        display: block;
        width: 30px;
        height: 1px;
        box-sizing: border-box;
        background-color: ${props => props.theme.palette.primary.main};
        border: 1px solid ${props => props.theme.palette.primary.main};
        border-radius: 100px;
      }
    }
  }
`
