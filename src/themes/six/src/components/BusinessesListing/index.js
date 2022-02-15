import React, { useEffect, useState, useCallback } from 'react'
import FiMap from '@meronex/icons/fi/FiMap'
import Skeleton from 'react-loading-skeleton'
import {
  BusinessContainer,
  BusinessList,
  ErrorMessage,
  WrapperSearch,
  BusinessesTitle,
  ListWrapper,
  BusinessContent,
  MapWrapper,
  StartButton
} from './styles'

import { Button } from '../../../../../../src/styles/Buttons'
import { NotFoundSource } from '../../../../../components/NotFoundSource'
import { Alert } from '../../../../../components/Confirm'
// import { BusinessTypeFilter } from '../../../../../components/BusinessTypeFilter'
import { OrdersOption } from '../../../../../components/OrdersOption'
import { useWindowSize } from '../../../../../hooks/useWindowSize'

import { Modal } from '../Modal'
import { BusinessesMap } from '../BusinessesMap'
import { BusinessController } from '../BusinessController'
import { SearchBar } from '../SearchBar'
import { AddressList } from '../AddressList'
import { AddressForm } from '../AddressForm'
import { BusinessInformation } from '../BusinessInformation'

import {
  useOrder,
  useSession,
  useLanguage,
  useConfig,
  useUtils,
  BusinessList as BusinessListController
} from 'ordering-components'

const PIXELS_TO_SCROLL = 500
const BusinessesListingUI = (props) => {
  const {
    businessesList,
    paginationProps,
    searchValue,
    getBusinesses,
    isCustomLayout,
    onRedirectPage,
    handleChangeSearch,
    handleBusinessClick
  } = props

  const [, t] = useLanguage()
  const [orderState] = useOrder()
  const [{ auth }] = useSession()
  const [{ configs }] = useConfig()
  const [modals, setModals] = useState({ listOpen: false, formOpen: false })
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [activeMap, setActiveMap] = useState(false)
  const [mapErrors, setMapErrors] = useState('')
  const [showBusinessInfo, setShowBusinessInfo] = useState(false)
  const [businessInfoById, setBusinessInfoById] = useState({})
  const [closestBusiness, setClosestBusiness] = useState({ isLoaded: false, businessInfo: {} })
  const windowSize = useWindowSize()
  const [{ optimizeImage }] = useUtils()

  const userCustomer = JSON.parse(window.localStorage.getItem('user-customer'))

  const businessesIds = isCustomLayout &&
    businessesList.businesses &&
    businessesList.businesses?.map(business => business.id)

  const handleScroll = useCallback(() => {
    const listWindows = document.querySelector('#list_wrapper')
    const innerHeightScrolltop = listWindows.innerHeight + document.documentElement?.scrollTop + PIXELS_TO_SCROLL
    const badScrollPosition = innerHeightScrolltop < document.documentElement?.offsetHeight
    const hasMore = !(paginationProps.totalPages === paginationProps.currentPage)
    if (badScrollPosition || businessesList.loading || !hasMore) return
    getBusinesses()
  }, [businessesList, paginationProps])

  useEffect(() => {
    if (!businessesList.loading) {
      const _closestBusiness = businessesList?.businesses?.find(business => business.name.toLowerCase().includes('starbucks'))
      if (_closestBusiness && Object.keys(_closestBusiness).length > 0) {
        setClosestBusiness({ isLoaded: true, businessInfo: { ..._closestBusiness } })
      }
    }
  }, [businessesList])
  // useEffect(() => {
  //   if (!showBusinessInfo) {
  //     const listWindows = document.querySelector('#list_wrapper')
  //     listWindows.addEventListener('scroll', handleScroll)
  //     return () => listWindows.removeEventListener('scroll', handleScroll)
  //   }
  // }, [handleScroll, showBusinessInfo])

  const handleClickAddress = (e) => {
    if (auth) {
      setModals({ ...modals, listOpen: true })
    } else {
      setModals({ ...modals, formOpen: true })
    }
  }

  const handleFindBusinesses = () => {
    if (!orderState?.options?.address?.location) {
      setAlertState({ open: true, content: [t('SELECT_AN_ADDRESS_TO_SEARCH', 'Select or add an address to search')] })
      return
    }
    setModals({ listOpen: false, formOpen: false })
  }

  const toggleMap = () => {
    setActiveMap(!activeMap)
  }

  const handleCloseAlerts = () => {
    setAlertState({ open: false, content: [] })
    setMapErrors('')
  }

  const handleMapErrors = (errKey) => {
    setAlertState({
      open: true,
      content: [t(errKey, mapErrors[errKey])]
    })
  }

  useEffect(() => {
    if (mapErrors) {
      handleMapErrors(mapErrors)
      setActiveMap(false)
    }
  }, [mapErrors])

  const getCustomArray = (list) => {
    const isArray = Array.isArray(list)
    return isArray ? list : Object.values(list)
  }

  const handleShowBusinessInfo = (business) => {
    setShowBusinessInfo(true)
    setBusinessInfoById(business)
  }

  const types = ['food', 'laundry', 'alcohol', 'groceries']
  const getBusinessType = () => {
    if (Object.keys(businessInfoById).length <= 0) return t('GENERAL', 'General')
    const _types = []
    types.forEach(type => businessInfoById[type] && _types.push(
      t(`BUSINESS_TYPE_${type?.replace(/\s/g, '_')?.toUpperCase()}`, type)
    ))
    return _types.join(', ')
  }

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      {closestBusiness.isLoaded ? (
        <BusinessController
          key={closestBusiness.businessInfo.id}
          className='card'
          business={closestBusiness.businessInfo}
          handleCustomClick={handleBusinessClick}
          orderType={orderState?.options?.type}
          isButton
          buttonMessage={t('STARBUCKS_KIOSK_HOME_MESSAGE', 'Toca la pantalla para iniciar')}
        />
      ) : (
        <Skeleton width={500} />
      )}
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
    </>
  )
}

export const BusinessesListing = (props) => {
  const businessListingProps = {
    ...props,
    UIComponent: BusinessesListingUI
  }

  return <BusinessListController {...businessListingProps} />
}
