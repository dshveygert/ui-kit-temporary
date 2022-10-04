import React, { FC } from 'react'

import { ScreeningsTableTypes } from '../..'

import * as SC from './styled'


const monthOptions = {
  month: 'short' as const
}

export enum ScreeningSubStatus {
  Success = 'success',
  Cancelled = 'cancelled',
  Waiting = 'waiting',
  Passed = 'passed',
  NotPassed = 'notPassed'
}

export type ScreeningStatus = {
  title: string
  subStatus?: ScreeningSubStatus
}

export type Appointment = {
  date: string // ???
  time: string
}

export type ColumnItemType = {
  id: string
  status: ScreeningStatus
  appointment?: Appointment
  job: {
    title: string
    companyInfo: {
      companyName: string
    }
  }
  jobseeker: {
    username: string
  }
}

export type ColumnItemProps = ColumnItemType & {
  t: {
    skills: string
    success: string
    cancelled: string
    waiting: string
    passed: string
    notPassed: string
  }
  type: ScreeningsTableTypes
  lng: string
}

const ColumnItem: FC<ColumnItemProps> = (props) => {
  const parsedDate = props.appointment ? new Date(parseInt(props.appointment.date)) : undefined
  const monthFormatter = new Intl.DateTimeFormat(props.lng, monthOptions)

  return (
    <SC.Base>
      <SC.DateContainer>
        {parsedDate &&
          <>
            <SC.DateField>
              {parsedDate.getDate()}<br />{monthFormatter.format(parsedDate)}
            </SC.DateField>
            {props.status?.subStatus && props.status.subStatus !== ScreeningSubStatus.Cancelled &&
              <SC.StatusIcon subStatus={props.status?.subStatus} />
            }
          </>
        }
      </SC.DateContainer>
      <SC.MainInfoContainer>
        <SC.JobTitle>
          {props.job.title}
        </SC.JobTitle>
        <SC.FirstFieldLineContainer>
          {props.type === ScreeningsTableTypes.Employer ?
            <SC.UsernameField>
              {props.jobseeker.username}
            </SC.UsernameField>
          :
            <SC.CompanyField>
              {props.job.companyInfo.companyName}
            </SC.CompanyField>
          }
        </SC.FirstFieldLineContainer>
        {props.appointment && !props.status.subStatus &&
          <SC.TimeField>
            {props.appointment?.time || '-'}
          </SC.TimeField>
        }
        {props.status.subStatus &&
          <SC.StatusField isCancelled={props.status.subStatus === ScreeningSubStatus.Cancelled}>
            {props.t[props.status.subStatus]}
          </SC.StatusField>
        }
      </SC.MainInfoContainer>
    </SC.Base>
  )
}

export default ColumnItem
