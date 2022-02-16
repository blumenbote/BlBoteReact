import React, { useState, useRef, useEffect } from 'react'
import { useOrder, useLanguage, useUtils, useEvent } from 'ordering-components'
import { useTheme } from 'styled-components'
import {
  AccordionSection,
  Accordion,
  AccordionContent,
  BusinessTotal,
  BusinessActions
} from './styles'
export const BusinessItemAccordion = (props) => {
  const {
    uuid,
    isCartPending,
    currentCartUuid,
    isCheckout,
    isClosed,
    moment,
    isProducts,
    isForceOpenAccordion,
    isCartOnProductsList,
    handleClearProducts,
    handleCartOpen,
    individualBusinessCart
  } = props
  const [orderState] = useOrder()
  const [, t] = useLanguage()
  const [events] = useEvent()
  const [setActive, setActiveState] = useState('')
  const [setHeight] = useState('0px')
  const [setRotate, setRotateState] = useState('accordion__icon')
  const [cartProductUpdated, setCartProductUpdated] = useState(null)
  const content = useRef(null)
  const businessStore = useRef(null)
  const businessDelete = useRef(null)
  const toggleAccordion = (e) => {
    const isActionsClick = businessStore.current?.contains(e?.target) || businessDelete.current?.contains(e?.target)
    if (isClosed || !isProducts || isActionsClick) return
    setActiveState(setActive === '' ? 'active' : '')
    // setHeightState(
    //   setActive === 'active' ? '0px' : `${content.current.scrollHeight}px`
    // )
    setRotateState(
      setActive === 'active' ? 'accordion__icon' : 'accordion__icon rotate'
    )
  }
  const activeAccordion = (value) => {
    setActiveState(value ? 'active' : '')
    // setHeightState(value ? `${content.current.scrollHeight}px` : '0px')
    setRotateState(value ? 'accordion__icon rotate' : 'accordion__icon')
  }
  const handleCloseCartPopover = () => {
    const cartsLength = Object.values(orderState?.carts).filter(cart => cart.products.length > 0).length ?? 0
    if (cartsLength > 1 && !isCheckout && !isForceOpenAccordion) {
      activeAccordion(false)
    }
  }
  const handleCartProductUpdated = (product, cart) => {
    setCartProductUpdated(cart?.uuid)
  }
  useEffect(() => {
    if (cartProductUpdated === uuid || (currentCartUuid === uuid && (!cartProductUpdated || cartProductUpdated === uuid))) {
      activeAccordion(true)
    } else {
      activeAccordion(false)
    }
  }, [cartProductUpdated, currentCartUuid])
  useEffect(() => {
    const cartsLength = Object.values(orderState?.carts).filter(cart => cart.products.length > 0).length ?? 0
    if ((cartsLength === 1 || isCheckout) && !isClosed) {
      activeAccordion(true)
    }
  }, [orderState?.carts])
  useEffect(() => {
    if (isForceOpenAccordion) {
      activeAccordion(true)
    }
  }, [isForceOpenAccordion])
  useEffect(() => {
    events.on('cart_popover_closed', handleCloseCartPopover)
    events.on('cart_product_updated', handleCartProductUpdated)
    return () => {
      events.off('cart_popover_closed', handleCloseCartPopover)
      events.off('cart_product_updated', handleCartProductUpdated)
    }
  }, [])
  useEffect(() => {
    handleCartOpen && handleCartOpen(!!setActive)
  }, [setActive])
  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <AccordionSection className='businessItemAccordion' isClosed={isClosed} isCartOnProductsList={isCartOnProductsList}>
        {!individualBusinessCart && !isCheckout && (
          <Accordion
            isClosed={isClosed}
            className={`accordion ${setActive}`}
            onClick={(e) => toggleAccordion(e)}
          >
            {isClosed && (
              <BusinessTotal className='closed'>
                <p>{t('CLOSED', 'Closed')} {moment}</p>
              </BusinessTotal>
            )}
            {!isClosed && !isProducts && (
              <BusinessTotal>
                <p>{t('NO_PRODUCTS', 'No products')}</p>
              </BusinessTotal>
            )}
            <BusinessActions>
              {!isClosed && !!isProducts && (
                <>
                  {!isCartPending && (
                    <span
                      ref={businessDelete}
                      onClick={() => handleClearProducts()}
                    >
                      {t('CANCEL_ORDER', 'Cancelar Orden')}
                    </span>
                  )}
                </>
              )}
            </BusinessActions>
          </Accordion>
        )}
        <AccordionContent
          ref={content}
          style={{ minHeight: `${setHeight}`, maxHeight: !setActive && '0px' }}
          className={individualBusinessCart ? 'individualBusinessCart-accordionContent' : 'accordionContent'}
        >
          {props.children}
        </AccordionContent>
      </AccordionSection>
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
    </>
  )
}
