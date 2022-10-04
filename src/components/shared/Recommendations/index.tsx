import React, { FC } from 'react'

import * as SC from './styled'


type Props = {
  onRecommendationClick: (value: string) => void
  relatedSearch: string[]
  t: {
    peopleAlsoSearched: string
  }
}

const Recommendations: FC<Props> = (props) => {
  const { onRecommendationClick, relatedSearch, t } = props

  return (
    <SC.Base>
      <SC.Label>{t.peopleAlsoSearched}</SC.Label>
      <SC.Links>
        {relatedSearch.map((item, index) => (
          <SC.Link key={index} onClick={() => onRecommendationClick(item)}>
            {item}
          </SC.Link>
        ))}
      </SC.Links>
    </SC.Base>
  )
}

export default Recommendations
