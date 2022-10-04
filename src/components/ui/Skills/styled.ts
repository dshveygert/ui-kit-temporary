import styled from 'styled-components'

import Icons from '../../../constants/icons'
import { Heading4, SmallText } from '../../styled/TextStyles'


export const Base = styled.div`
  position: relative;

  /* input {
    caret-color: ${props => props.theme.palette.primary.main};
  } */
`

export const SelectContainer = styled.div`
  margin-bottom: 12px;
`

export const SelectedTags = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const SelectedTag = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 78px;
  margin-bottom: 4px;
  padding: 4px 19px 4px 6px;
  background: ${props => props.theme.palette.primary.light};
  border-radius: 5px;
  box-sizing: border-box;
  color: ${props => props.theme.palette.primary.main};
  font-weight: bold;
  text-align: center;

  &:not(:last-child) {
    margin-right: 13px;
  }
`

export const SelectedTagText = styled(SmallText)`
  text-overflow: ellipsis;
  overflow: hidden;
`

export const SelectedTagDelete = styled.div`
  position: absolute;
  right: 8px;
  display: block;
  width: 10px;
  height: 10px;
  background-image: url(${Icons.deleteIcon});
  cursor: pointer;
`

export const MatchedOptionPart = styled.div`
  display: inline;
  color: ${props => props.theme.palette.text.primary};
`

export const RestOptionPart = styled.div`
  display: inline;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`

export const Title = styled(Heading4)`
  margin-bottom: 8px;
`

export const Description = styled(SmallText)`
  margin-bottom: 17px;
`

export const SkillsPreview = styled.div`
  display: flex;
`

export const Skill = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 60px;
  padding: 0 5px;
  height: 25px;
  background: ${props => props.theme.palette.primary.light};
  color: ${props => props.theme.palette.primary.main};
  border-radius: 5px;
  font-weight: 800;
  font-size: 12px;

  &:not(:last-child) {
    margin-right: 8px;
  }
`

export const MoreSkillCounter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 25px;
  background: ${props => props.theme.palette.disabled.primary};
  border-radius: 5px;
  font-weight: 800;
  font-size: 12px;
  cursor: pointer;

  &:before {
    content: '';
    display: inline-block;
    width: 15px;
    height: 15px;
    background-image: url(${Icons.add});
    background-size: 12px 12px;
    background-repeat: no-repeat;
    background-position: center;
  }
`
