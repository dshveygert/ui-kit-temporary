import React, { ComponentProps, FC, useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'
import ReactPaginate from 'react-paginate'

import { LIMIT } from '../../../constants'
import Icons from '../../../constants/icons'
import Images from '../../../constants/images'
import { useDebounce, useWindowSize } from '../../../hooks'
import {
  BackButton,
  ForDesktop,
  ForMobileTablet,
  Input,
  Loader,
  SelectorGroup,
  SortButton,
  SortTypes,
  widthBreakpoints
} from '../../../main'
import { capitalize } from '../../../utils'
import Recommendations from '../Recommendations'
import SearchTypePicker, { SearchType } from '../SearchType'
import Warning from '../Warning'

import * as SC from './styled'

// TODO: remove
const relatedSearchTest = ['Freelance designer', 'UX / UI designer', 'Web designer', 'Graphic designer']

export const typeGroupsList = ['recommended', 'new'] as const
export type TypeGroups = typeof typeGroupsList[number]

const typeGroups: { label: string; value: TypeGroups }[] = [
  {
    label: 'Recommended',
    value: 'recommended'
  },
  {
    label: 'New',
    value: 'new'
  }
]

export const defaultSearchFields: SearchFields = {
  searchString: '',
  sort: 'date',
  type: 'recommended',
  page: 0
}

export type SearchFields = {
  searchString: string
  sort: SortTypes
  page: number
  type: TypeGroups
}

export type SearchState = {
  isLoading: boolean
  isFilterEmpty: boolean
  itemsCount: number
}

// Тип для возможности поиска по разным сущностям
export type SearchStatePick = SearchState & {
  multipleSearchTypes: {
    availableSearchTypes: SearchType[]
    currentSearchType: SearchType
    onSelect: (option: SearchType) => void
  }
  searchTitle?: never
}

// Тип с единственным поиском по разным сущностям
export type SearchStateTitle = SearchState & {
  multipleSearchTypes?: never
  searchTitle?: string
}

type Props = {
  onFilterIconClick: () => void
  setSkipNextSearchChange?: (value: boolean) => void
  onSearchChange: (searchData: SearchFields) => void
  skipNextSearchChange?: boolean
  lastSubmittedSearchValue?: string
  backеToAllButton?: {
    text: string
    onClick: () => void
  }
  relatedSearch?: string[]
  searchState: SearchStatePick | SearchStateTitle
  searchFields?: SearchFields
  children: JSX.Element
  t: {
    sortButtonT: Pick<ComponentProps<typeof SortButton>, 't'>['t']
    warningT: Pick<ComponentProps<typeof Warning>, 't'>['t']
    recommendationsT: Pick<ComponentProps<typeof Recommendations>, 't'>['t']
    searchPlaceholder: string
    noResults: string
    noResultsDescriptoin: string
  }
}

const SearchContent: FC<Props> = (props) => {
  const { searchState, onSearchChange, relatedSearch, backеToAllButton, searchFields, t } = props
  const { isFilterEmpty, isLoading, itemsCount, multipleSearchTypes, searchTitle } = searchState

  const { control, handleSubmit, reset } = useForm<SearchFields>({
    defaultValues: searchFields
  })

  const windowSize = useWindowSize()

  useEffect(() => {
    reset(searchFields)
  }, [searchFields])

  // const onRecommendationClick = (value: string) => {
  //   props.setValue(searchType === SearchTypeOptions.jobs ? 'filter.jobTitle' : 'filter.companyName', value)
  // }

  return (
    <SC.Base>
      <SC.JobListContainer>
        {!isFilterEmpty && backеToAllButton ? (
          <ForDesktop>
            <SC.BackButtonContainer>
              <BackButton onClick={backеToAllButton.onClick} text={backеToAllButton.text} />
            </SC.BackButtonContainer>
          </ForDesktop>
        ) : (
          <Warning t={t.warningT} />
        )}
        <SC.JobListHeader>
          {multipleSearchTypes && (
            <SearchTypePicker
              options={multipleSearchTypes.availableSearchTypes}
              currentOption={multipleSearchTypes.currentSearchType}
              onSelect={multipleSearchTypes.onSelect}
            />
          )}
          {searchTitle && <SC.SearchHeader>{searchTitle}</SC.SearchHeader>}
          <ForMobileTablet>
            <SC.FilterIcon onClick={props.onFilterIconClick} />
          </ForMobileTablet>
        </SC.JobListHeader>
        <SC.InputsContainer>
          <SC.SearchInputContainer>
            <Controller
              control={control}
              name="searchString"
              render={({ field: { onChange, value } }) => {
                // eslint-disable-next-line react-hooks/rules-of-hooks
                const debouncedSearchValue = useDebounce(value, 500)
                // eslint-disable-next-line react-hooks/rules-of-hooks
                useEffect(() => {
                  handleSubmit(onSearchChange)()
                }, [debouncedSearchValue])

                return (
                  <Input
                    value={value}
                    onChange={e => onChange(e.target.value)}
                    icon={Icons.search}
                    iconPosition="right"
                    placeholder={t.searchPlaceholder}
                  />
                )
              }}
            />
          </SC.SearchInputContainer>
          {windowSize.width > widthBreakpoints.mobile && (
            <Controller
              control={control}
              name="sort"
              render={({ field: { onChange, value } }) => (
                <SortButton
                  onChange={(value) => {
                    onChange(value)
                    handleSubmit(onSearchChange)()
                  }}
                  value={value}
                  dropdownPosition="right"
                  t={t.sortButtonT}
                />
              )}
            />
          )}
        </SC.InputsContainer>
        {((!isFilterEmpty && itemsCount) || windowSize.width < widthBreakpoints.mobile) && (
          <SC.AdditionalInfo>
            <SC.JobsCount>
              {!isFilterEmpty && itemsCount
                ? `${itemsCount} ${searchTitle || multipleSearchTypes?.currentSearchType.text}`
                : windowSize.width < widthBreakpoints.mobile &&
                  capitalize(searchTitle || multipleSearchTypes?.currentSearchType.text || '')}
            </SC.JobsCount>
            {windowSize.width < widthBreakpoints.mobile && (
              <Controller
                control={control}
                name="sort"
                render={({ field: { onChange, value } }) => (
                  <SortButton
                    onChange={(value) => {
                      onChange(value)
                      handleSubmit(onSearchChange)()
                    }}
                    value={value}
                    dropdownPosition="right"
                    variant="empty"
                    t={t.sortButtonT}
                  />
                )}
              />
            )}
          </SC.AdditionalInfo>
        )}
        {isLoading ? (
          <Loader type="list" />
        ) : itemsCount ? (
          <>
            <SC.SelectorGroupContainer show={isFilterEmpty}>
              <Controller
                control={control}
                name="type"
                render={({ field: { onChange, value } }) => (
                  <SelectorGroup
                    value={value}
                    onChange={(value) => {
                      onChange(value)
                      handleSubmit(onSearchChange)()
                    }}
                    id="jobseeker-search-selector"
                    data={typeGroups}
                  />
                )}
              />
            </SC.SelectorGroupContainer>
            <SC.ItemsList>{props.children}</SC.ItemsList>
            {itemsCount > LIMIT && (
              <Controller
                control={control}
                name="page"
                render={({ field: { onChange, value } }) => (
                  <SC.PaginateContainer>
                    <ReactPaginate
                      pageCount={Math.ceil(itemsCount / LIMIT)}
                      pageRangeDisplayed={2}
                      marginPagesDisplayed={1}
                      forcePage={value}
                      onPageChange={(item) => {
                        onChange(item.selected)
                        handleSubmit(onSearchChange)()
                      }}
                      containerClassName="pages"
                      pageClassName="page"
                    />
                  </SC.PaginateContainer>
                )}
              />
            )}
          </>
        ) : (
          <SC.NoResultsContainer>
            <SC.Image404>
              {/* TODO обновить по появлению свг */}
              <img src={Images.noResults} alt={t.noResults} width={225} height={230} />
            </SC.Image404>
            <SC.Title>{t.noResults}</SC.Title>
            <SC.Description>{t.noResultsDescriptoin}</SC.Description>
          </SC.NoResultsContainer>
        )}
        {!isLoading && props.lastSubmittedSearchValue && relatedSearchTest && relatedSearchTest.length !== 0 && (
          <Recommendations
            // onRecommendationClick={onRecommendationClick}
            onRecommendationClick={() => ({})}
            relatedSearch={relatedSearchTest}
            t={t.recommendationsT}
            // TODO: realtedSearchTest -> relatedSearch
          />
        )}
      </SC.JobListContainer>
    </SC.Base>
  )
}

export default SearchContent
