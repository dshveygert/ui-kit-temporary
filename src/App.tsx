/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState } from 'react'
import { OptionsType } from 'react-select'
// import { Icons, Images } from 'jp-portal-components'

import MainLayout from './components/shared/MainLayout'
import Location, { LocationFieldType } from './components/ui/Location'
import BackButton from './components/ui/BackButton'
import SelectComponent, { OptionType } from './components/ui/Select'
import { useModal } from './hooks/common/useModal'
import Modal from './components/shared/Modal'
import Skills from './components/ui/Skills'
import Calendar from './components/ui/Calendar'
import RadioButton from './components/ui/RadioButton'
import ChooseDate, { ChooseDateSelectors } from './components/ui/ChooseDate'
import Select from './components/ui/Select'
import UploadImage from './components/ui/UploadImage'
import ScreeningsTable, { ScreeningsTableTypes } from './components/ui/ScreeningsTable'
import ScreeningsModal, { AvailableDateType } from './components/ui/ScreeningsModal'
import Button from './components/ui/Button'
import { defaultTimes } from './constants/times'
import { ScreeningSubStatus } from './components/ui/ScreeningsTable/components/ColumnItem'


export const Categories = ['engineering', 'analysis'] as const

const selectedSkillsTest = [
  {
    value: 'js',
    label: 'js'
  },
  {
    value: 'dafasd',
    label: 'dafasd'
  },
  {
    value: 'js',
    label: 'js'
  },
  {
    value: 'dafasd',
    label: 'dafasd'
  },
  {
    value: 'js',
    label: 'js'
  },
  {
    value: 'dafasd',
    label: 'dafasd'
  }
]

const availableSkills = [
  {
    value: 'qwerty',
    label: 'qwerty'
  },
  {
    value: 'qwertyyyy',
    label: 'qwertyyyy'
  },
  {
    value: 'qwedfd',
    label: 'qwedfd'
  }
]

const testData = [
  {
    id: '1',
    status: {
      title: 'Requested'
    },
    appointment: {
      date: '1625063634356',
      time: '9am'
    },
    job: {
      title: 'Android Developer',
      companyInfo: {
        companyName: 'Apple'
      }
    },
    jobseeker: {
      username: 'user1'
    }
  },
  {
    id: '2',
    status: {
      title: 'Requested'
    },
    appointment: {
      date: '1625063634356',
      time: '9am'
    },
    job: {
      title: 'Android Developer',
      companyInfo: {
        companyName: 'Apple'
      }
    },
    jobseeker: {
      username: 'user1'
    }
  },
  {
    id: '3',
    status: {
      title: 'Scheduled'
    },
    appointment: {
      date: '1625063634356',
      time: '9am'
    },
    job: {
      title: 'Android Developer',
      companyInfo: {
        companyName: 'Apple'
      }
    },
    jobseeker: {
      username: 'user1'
    }
  },
  {
    id: '4',
    status: {
      title: 'Completed',
      subStatus: 'waiting' as ScreeningSubStatus
    },
    appointment: {
      date: '1625063634356',
      time: '11am'
    },
    job: {
      title: 'Android Developer',
      companyInfo: {
        companyName: 'Apple'
      }
    },
    jobseeker: {
      username: 'user1'
    }
  },
  {
    id: '6',
    status: {
      title: 'Completed',
      subStatus: 'passed' as ScreeningSubStatus
    },
    appointment: {
      date: '1625063634356',
      time: '11am'
    },
    job: {
      title: 'Android Developer',
      companyInfo: {
        companyName: 'Apple'
      }
    },
    jobseeker: {
      username: 'user1'
    }
  },
  {
    id: '7',
    status: {
      title: 'Completed',
      subStatus: 'notPassed' as ScreeningSubStatus
    },
    appointment: {
      date: '1625063634356',
      time: '11am'
    },
    job: {
      title: 'Android Developer',
      companyInfo: {
        companyName: 'Apple'
      }
    },
    jobseeker: {
      username: 'user1'
    }
  },
  {
    id: '5',
    status: {
      title: 'Cancelled',
      subStatus: 'cancelled' as ScreeningSubStatus
    },
    appointment: {
      date: '1625063634356',
      time: '11am'
    },
    job: {
      title: 'Android Developer',
      companyInfo: {
        companyName: 'Apple'
      }
    },
    jobseeker: {
      username: 'user1'
    }
  }
]

const availableDates: AvailableDateType[] = [
  {
    date: new Date(2021, 5, 14),
    times: {
      morning: defaultTimes.morning,
      afternoon: defaultTimes.afternoon,
      evening: [
        new Date(2021, 6, 9, 17),
        new Date(2021, 6, 9, 17, 30),
        new Date(2021, 6, 9, 19, 30),
        new Date(2021, 6, 9, 20)
      ]
    }
  },
  {
    date: new Date(2021, 5, 18),
    times: {
      morning: defaultTimes.morning,
      afternoon: [new Date(2021, 6, 9, 14, 30)],
      evening: [new Date(2021, 6, 9, 17), new Date(2021, 6, 9, 19, 30), new Date(2021, 6, 9, 20)]
    }
  }
]

function App() {
  const [select, setSelect] = useState<typeof Categories[number]>(Categories[0])

  const { showModal, closeModal } = useModal()
  const [locations, setLocations] = useState<LocationFieldType[]>([])
  const [calendarDate, setCalendarDate] = useState('')
  const [selectedSkills, setSelectedSkills] = useState<OptionsType<OptionType>>(selectedSkillsTest)
  const [selectValue, setSelectValue] = useState<OptionType>(availableSkills[0])

  const onActivateJob = () => {
    showModal(
      <Modal
        onCloseModal={() => closeModal()}
        title="dsfsd"
        description="sdfsdfsdf sdfsd fs"
        buttons={[
          {
            text: 'dsds',
            variant: 'contained',
            onClick: () => {
              return
            }
          },
          {
            text: 'aaa',
            variant: 'contained',
            onClick: () => {
              return
            }
          }
        ]}
      />
    )
  }

  const onShowScreeningsModal = () => {
    showModal(
      <ScreeningsModal
        onCloseModal={() => closeModal()}
        onChange={(date, description) => console.info(date, description)}
        isLoading={false}
        availableDates={availableDates}
        t={{
          title: 'Set screening',
          description: 'Select a date and Time',
          fieldDescriptionTitle: 'More information',
          fieldDescriptionPlaceholder: 'Description',
          confirmButton: 'Confirm',
          backButton: 'Back to screening'
        }}
      />
    )
  }

  const [isScreeningsTableIsLoading, setIsScreeningsTableIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsScreeningsTableIsLoading(false)
    }, 1000)
  }, [])

  return (
    <MainLayout withHeader>
      <Button onClick={onShowScreeningsModal} size="s" />
      <div style={{ padding: '30px' }}>
        <ScreeningsTable
          screenings={testData}
          isLoading={isScreeningsTableIsLoading}
          t={{
            screenings: 'Screenings',
            skills: 'Skills',
            success: 'Success',
            waiting: 'Waiting for result',
            cancelled: 'Cancelled by you',
            passed: 'Passed',
            notPassed: 'Not passed'
          }}
          type={ScreeningsTableTypes.Employer}
          onClick={(id: string) => console.info(id)}
          lng={'en-US'}
        />
      </div>
      <BackButton text="Back to my jobs" onClick={() => alert('going back')} />
      <SelectComponent
        name="jobCategory"
        options={Categories.map(category => ({ value: category, label: category }))}
        value={{ value: select, label: select }}
        onChange={(option) => {
          const category = Categories.find(category => category === (option as OptionType).value);
          return !!category ? setSelect(category) : null;
        }}
      />

      <div onClick={onActivateJob} style={{ width: 100, height: 100, border: '1px solid' }} />
      {/* <img src={Icons.attention} alt="" />
      <img src={Images.error404} alt="" /> */}
      <Location
        onChange={value => !!value ? setLocations(value) : null}
        value={locations}
        t={{ locationTitle: 'Locations', addLocationPlaceholder: 'Country, State, City', addLocation: 'Add location' }}
        errors={['asdf', 'asddddd']}
        multipleLocations
        removable
        input
      />

      <Skills selectedSkills={selectedSkills} availableSkills={availableSkills} onChange={setSelectedSkills} input />

      <Select
        name="select1"
        options={availableSkills}
        value={selectValue}
        onChange={v => setSelectValue(v as OptionType)}
      />

      <Skills selectedSkills={selectedSkills} length={5} />

      <Location value={locations} />

      <Calendar onChange={setCalendarDate} value={calendarDate} error={calendarDate === '' ? 'required' : undefined} />
      <UploadImage
        id="upload1"
        name="upload11"
        onFileSelect={(value: string) => console.info(value)}
        title="Change photo"
        description="500x500"
        value=""
      />
      <ChooseDate
        id="test0"
        onChange={setCalendarDate}
        value={calendarDate}
        error={'asf'}
        variant={'separated-outlined'}
        defaultValue={ChooseDateSelectors.InMonth}
      />
      <RadioButton
        id="test1"
        label="Active"
        value="active"
        checked
        name="status2"
        onChange={() => console.info('active')}
        description="I’m lookig for a job now. Employers can see my resume."
      />
      <RadioButton
        id="test2"
        label="Inactive"
        value="inactive"
        checked={false}
        name="status2"
        onChange={() => console.info('active')}
        description="I'm not looking for a job right now. My resume will be hidden from others."
      />
      <RadioButton
        id="test1"
        label="Active"
        value="active"
        checked
        name="status"
        onChange={() => console.info('active')}
        description="I’m lookig for a job now. Employers can see my resume."
        disableOpacity
      />
      <RadioButton
        id="test2"
        label="Inactive"
        value="inactive"
        checked={false}
        name="status"
        onChange={() => console.info('active')}
        description="I'm not looking for a job right now. My resume will be hidden from others."
        disableOpacity
      />
      <RadioButton
        id="test1"
        label="Active"
        value="active"
        checked
        name="status3"
        onChange={() => console.info('active')}
        error="You cannot activate the profile until the required information is filled"
        description="I’m lookig for a job now. Employers can see my resume."
        disableOpacity
      />
      <RadioButton
        id="test2"
        label="Inactive"
        value="inactive"
        checked={false}
        name="status3"
        onChange={() => console.info('active')}
        description="I'm not looking for a job right now. My resume will be hidden from others."
        disableOpacity
      />
    </MainLayout>
  )
}

export default App
