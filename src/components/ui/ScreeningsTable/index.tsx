import React, { FC, useState } from 'react'
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs'

import ForTabletDesktop from '../../styled/ForTabletDesktop'
import ForMobile from '../../styled/ForMobile'
import Loader from '../Loader'

import * as SC from './styled'
import ColumnTitle from './components/ColumnTitle'
import ColumnItem, { ColumnItemType } from './components/ColumnItem'


export enum ScreeningsTableTypes {
  Jobseeker,
  Employer,
  Recruiter,
  Admin
}

type Props = {
  screenings: ColumnItemType[]
  type: ScreeningsTableTypes
  isLoading: boolean
  t: {
    screenings: string
    skills: string
    success: string
    cancelled: string
    waiting: string
    passed: string
    notPassed: string
  }
  onClick: (id: string) => void
  lng: string
}

type ColumnsByStatusType = {
  title: string
  items: ColumnItemType[]
}[]

const ScreeningsTable: FC<Props> = (props) => {
  const { screenings, isLoading, t, type, onClick, lng } = props
  const [selectedMobileTab, setSelectedMobileTab] = useState(0)

  const columnsByStatus: ColumnsByStatusType = screenings.reduce<ColumnsByStatusType>((acc, item) => {
    const column = acc.find(e => e.title === item.status.title)
    if (column) {
       column.items = [...column.items, item]
    } else {
       acc = [...acc, { title: item.status.title, items: [item] }]
    }
    return acc
 }, [])

  return (
    <SC.Base>
      <ForMobile>
        <SC.MobileContainer>
          <SC.MobileComponentTitle>
            {t.screenings}
          </SC.MobileComponentTitle>
          {isLoading ?
            <Loader />
          :
            <>
              <SC.HeaderColumnContainer>
                <SC.MobileColumnTitle>
                  {columnsByStatus[0].title}
                </SC.MobileColumnTitle>
                {columnsByStatus[0].items.map((item, key) => (
                  <SC.ColumnItemContainer key={key} onClick={() => onClick(item.id)}>
                    <ColumnItem key={key} {...item} t={t} type={type} lng={lng} />
                  </SC.ColumnItemContainer>
                ))}
              </SC.HeaderColumnContainer>
              <Tabs selectedIndex={selectedMobileTab} onSelect={setSelectedMobileTab}>
                <TabList>
                  <SC.TabsContainer>
                  {columnsByStatus.slice(1).map((column, key) => (
                    <Tab key={key}>
                      <SC.TabContent>
                        {column.title}
                      </SC.TabContent>
                    </Tab>
                  ))}
                  </SC.TabsContainer>
                </TabList>
                {columnsByStatus.slice(1).map((column, key) => (
                  <TabPanel key={key}>
                    {column.items.map((item, key) => (
                      <SC.ColumnItemContainer key={key} onClick={() => onClick(item.id)}>
                        <ColumnItem {...item} t={t} type={type} lng={lng} />
                      </SC.ColumnItemContainer>
                    ))}  
                  </TabPanel>
                ))}
              </Tabs>
            </>
          }
        </SC.MobileContainer>
      </ForMobile>
      <ForTabletDesktop>
        <SC.DesktopComponentTitle>
          {t.screenings}
        </SC.DesktopComponentTitle>
        {isLoading ?
          <Loader />
        :
          <SC.DesktopContainer columnsCount={columnsByStatus.length}>
            {columnsByStatus.map((column, key) => (
                <SC.Column key={key}>
                  <SC.ColumnTitleContainer>
                    <ColumnTitle title={column.title} count={column.items.length} />
                  </SC.ColumnTitleContainer>
                  {column.items.map((item, key) => (
                    <SC.ColumnItemContainer key={key} onClick={() => onClick(item.id)}>
                      <ColumnItem {...item} t={t} type={type} lng={lng} />
                    </SC.ColumnItemContainer>
                  ))}
                </SC.Column>
              ))
            }
          </SC.DesktopContainer>
        }
      </ForTabletDesktop>
    </SC.Base>
  )
}

export default ScreeningsTable
