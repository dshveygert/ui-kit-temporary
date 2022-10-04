import styled from 'styled-components'

import { Body3, Subtitle } from '../../../components/styled/TextStyles'
import Icons from '../../../constants/icons'


export const JobType = styled.div`
  display: flex;
  align-items: center;

  &:before {
    content: '';
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-right: 14px;
    background-image: url(${Icons.jobType});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }
`

export const JobExperience = styled.div`
  display: flex;
  align-items: center;

  &:before {
    content: '';
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-right: 14px;
    background-image: url(${Icons.jobExperience});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }
`

export const StartWork = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
`

export const StartWorkTitle = styled(Body3)`
  display: flex;
  align-items: center;

  &:before {
    content: '';
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-right: 20px;
    background-image: url(${Icons.calendar});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }
`

export const StartWorkDate = styled(Subtitle)``
