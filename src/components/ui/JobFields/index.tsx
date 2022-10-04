import React, { FC } from 'react'

import * as SC from './styled'


type StartWorkProps = {
  startDate: string
  t: {
    dateAvailable: string
  }
}

const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

export const StartWork: FC<StartWorkProps> = ({ startDate, t }) => {
  const parsedDate = new Date(startDate)

  return (
    <SC.StartWork>
      <SC.StartWorkTitle>{t.dateAvailable}</SC.StartWorkTitle>
      <SC.StartWorkDate>
        {`${monthNames[parsedDate.getMonth()]} ${parsedDate.getDate()}, ${parsedDate.getFullYear()}`}
      </SC.StartWorkDate>
    </SC.StartWork>
  )
}

type JobTypeProps = {
  type: string
}

export const JobType: FC<JobTypeProps> = ({ type }) => <SC.JobType>{type}</SC.JobType>

type ExperienceProps = {
  experience: number
  t: {
    yearsExperience: string
  }
}

export const JobExperience: FC<ExperienceProps> = ({ experience, t }) => (
  <SC.JobExperience>
    {experience} {t.yearsExperience}
  </SC.JobExperience>
)
