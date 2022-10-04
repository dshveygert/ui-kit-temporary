import styled, { css } from 'styled-components'

import { Heading4, MediumLabel, SmallText } from '../../../../styled/TextStyles'
import { widthBreakpoints } from '../../../../../styles/mediaBreakpoints'
import { viewportWidth } from '../../../../../utils/mixins'
import Icons from '../../../../../constants/icons'

import { ScreeningSubStatus } from '.'


export const Base = styled.div`
  display: flex;
  padding: 10px 12px 10px 14px;
  background: ${props => props.theme.palette.background.primary};
  box-shadow: ${props => props.theme.boxShadow.medium};
  border-radius: 10px;

  ${viewportWidth.lowerThan(widthBreakpoints.mobile)} {
    max-width: 325px;
  }
`

export const MainInfoContainer = styled.div`
  flex: 1 0 auto;
  width: calc(100% - 51px);
  padding-top: 3px;
`

export const JobTitle = styled(Heading4)`
  margin-bottom: 7px;
`

export const DateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex-basis: 51px;
  width: 51px;
  padding: 8px 0 6px 0;
  margin-right: 18px;
  background: ${props => props.theme.palette.background.secondary};
  border-radius: 5px;
`

export const DateField = styled(MediumLabel)`
  margin-bottom: 27px;
  text-align: center;
`

export const StatusIcon = styled.div<{
  subStatus: ScreeningSubStatus
}>`
  width: 20px;
  height: 20px;

  ${(props) => {
    if (props.subStatus === ScreeningSubStatus.Waiting || props.subStatus === ScreeningSubStatus.NotPassed)
      return css`
        background-image: url(${Icons.attention});
      `
    if (props.subStatus === ScreeningSubStatus.Success || props.subStatus === ScreeningSubStatus.Passed)
      return css`
        background-image: url(${Icons.checkedCirle});
      `
  }}

  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`

export const FirstFieldLineContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 9px;
`

export const CompanyField = styled(SmallText)`
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;

  &:before {
    content: '';
    display: inline-block;
    width: 10px;
    height: 10px;
    margin-right: 10px;
    background-image: url(${Icons.company});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }
`

export const UsernameField = styled(SmallText)`
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;

  &:before {
    content: '';
    display: inline-block;
    width: 10px;
    height: 10px;
    margin-right: 10px;
    background-image: url(${Icons.user});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }
`

export const TimeField = styled(SmallText)`
  &:before {
    content: '';
    display: inline-block;
    width: 10px;
    height: 10px;
    margin-right: 10px;
    background-image: url(${Icons.time});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }
`

export const SkillsField = styled(SmallText)`
  &:before {
    content: '';
    display: inline-block;
    width: 10px;
    height: 10px;
    margin-right: 10px;
    background-image: url(${Icons.skills});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }
`

export const StatusField = styled(SmallText)<{
  isCancelled: boolean
}>`
  &:before {
    content: '';
    display: inline-block;
    width: 10px;
    height: 10px;
    margin-right: 10px;
    background-image: url(${props => (props.isCancelled ? Icons.cancel : Icons.results)});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }
`

export const SkillsText = styled(MediumLabel)`
  display: inline;
`
