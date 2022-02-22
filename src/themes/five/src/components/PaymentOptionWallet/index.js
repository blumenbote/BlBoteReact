import React, { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import { useTheme } from 'styled-components'
import {
  PaymentOptionWallet as PaymentOptionWalletController,
  useLanguage,
  useUtils,
} from 'ordering-components'

import {
  Container,
  SectionLeft,
  SectionWrapper,
  SectionLeftText
} from './styles'

import { Checkbox } from '../../../../../styles/Checkbox'

const PaymentOptionWalletUI = (props) => {
  const {
    cart,
    walletsState,
    selectWallet,
    deletetWalletSelected
  } = props

  const theme = useTheme()
  const [, t] = useLanguage()
  const [{ parsePrice }] = useUtils()

  const [checkedState, setCheckedState] = useState(
    new Array(walletsState.result?.length).fill(false)
  );

  const walletName = {
    cash: {
      name: t('PAY_WITH_CASH_WALLET', 'Pay with Cash Wallet'),
    },
    credit_point: {
      name: t('PAY_WITH_CREDITS_POINTS_WALLET', 'Pay with Credit Points Wallet'),
    }
  }

  const handleOnChange = (position, wallet) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    if (!checkedState[position]) {
      selectWallet(wallet)
    } else {
      deletetWalletSelected(wallet)
    }

    setCheckedState(updatedCheckedState);
  };

  useEffect(() => {
    if (!walletsState.loading) {
      setCheckedState(
        walletsState.result.map(wallet => {
          return !!cart?.wallets?.find(w => w.id === wallet.id)
        })
      )
    }
  }, [walletsState.result?.length])

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {!walletsState.loading &&
        !walletsState.error &&
        walletsState.result?.length > 0 &&
      (
        <>
          {walletsState.result?.map((wallet, idx) => wallet.valid && (
            <Container
              key={wallet.id}
              isBottomBorder={idx === walletsState.result?.length - 1}
            >
              <SectionLeft>
                <Checkbox
                  name={`payment_option_${wallet.type}`}
                  id={`custom-checkbox-${idx}`}
                  disabled={(cart?.balance === 0 && !checkedState[idx]) || wallet.balance === 0 }
                  checked={checkedState[idx]}
                  value={`payment_option_${wallet.type}`}
                  onChange={() => handleOnChange(idx, wallet)}
                />
                <SectionLeftText>
                  <label
                    style={{
                      color: (cart?.balance === 0 && !checkedState[idx]) || wallet.balance === 0 ? theme.colors.darkGray : 'black'
                    }}
                    htmlFor={`custom-checkbox-${idx}`}
                  >
                    {walletName[wallet.type]?.name}
                  </label>
                  {/* {wallet.type === 'cash' && (
                    <span>Click here to add more credits</span>
                  )} */}
                </SectionLeftText>
              </SectionLeft>
              <div>
                {wallet.type === 'cash' && (
                  <span>{parsePrice(wallet?.balance)}</span>
                )}
                {wallet.type === 'credit_point' && (
                  <span>
                    <span style={{ color: theme.colors.primary }}>{`${wallet?.balance} ${t('POINTS', 'Points')}`}</span> {wallet?.balance > 0 &&`= ${parsePrice((wallet?.balance * wallet?.redemption_rate) / 100)}`}
                  </span>
                )}
              </div>
            </Container>
          ))}
        </>
      )}

      {walletsState?.loading && (
        <>
          {[...Array(2).keys()].map(i => (
            <SectionWrapper key={i}>
              <Skeleton height={40} />
            </SectionWrapper>
          ))}
        </>
      )}
    </div>
  )
}

export const PaymentOptionWallet = (props) => {
  const paymentWalletProps = {
    ...props,
    UIComponent: PaymentOptionWalletUI
  }

  return (
    <PaymentOptionWalletController {...paymentWalletProps} />
  )
}