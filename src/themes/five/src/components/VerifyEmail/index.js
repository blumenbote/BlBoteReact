import React, { useState, useEffect } from 'react'
import OtpInput from 'react-otp-input'
import { useTheme } from 'styled-components'
import { useSession, useLanguage } from 'ordering-components'

import {
  Envelope
} from 'react-bootstrap-icons'

import { VerifyEmail as VerifyEmailController } from './naked'

import { Alert } from '../Confirm'
import { Input } from '../../styles/Inputs'
import { Button } from '../../styles/Buttons'
import { useCountdownTimer } from '../../../../../hooks/useCountdownTimer'
import { formatSeconds } from '../../../../../utils'

import {
  Container,
  SectionHero,
  SectionContent,
  FormInput,
  InputWrapper,
  OtpWrapper,
  CountdownTimer,
  InputBeforeIcon
} from './styles'

const VerifyEmailUI = (props) => {
  const {
    verifyEmailState,
    cleanErrorsState,
    sendVerifyEmailCode,
    checkVerifyEmailCode,
  } = props

  const theme = useTheme()
  const [, t] = useLanguage()
  const [{ user }] = useSession()
  const [otpState, setOtpState] = useState('')
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [emailVerification, setEmailVerification] = useState(false)

  const [otpLeftTime, _, resetOtpLeftTime] = useCountdownTimer(600, emailVerification)

  const numOtpInputs = 6

  const handleSendOtp = () => {
    resetOtpLeftTime()
    sendVerifyEmailCode({ email: user?.email })
  }

  const closeAlert = () => {
    setAlertState({ open: false, content: [] })
    cleanErrorsState()
  }

  useEffect(() => {
    if (otpState?.length === numOtpInputs) {
      if (emailVerification) {
        checkVerifyEmailCode({ code: otpState })
        return
      }
    }
  }, [otpState])

  useEffect(() => {
    if (verifyEmailState?.errorSendCode) {
      setAlertState({
        open: true,
        content: verifyEmailState?.errorSendCode[0] || [t('ERROR', 'Error')]
      })
    } else {
      resetOtpLeftTime()
    }
  }, [verifyEmailState])

  useEffect(() => {
    if (!verifyEmailState?.loadingSendCode) {
      setEmailVerification(!!verifyEmailState?.resultSendCode)
    }
  }, [verifyEmailState])

  return (
    <Container>
      <SectionHero>
        <img src={theme.images.general.homeHero} />
      </SectionHero>
      <SectionContent>
      <FormInput noValidate>
        {!emailVerification ? (
          <>
            <InputWrapper>
              <Input
                readOnly
                type='email'
                name='email'
                aria-label='email'
                placeholder={user?.email}
                autoComplete='off'
              />
              <InputBeforeIcon>
                <Envelope />
              </InputBeforeIcon>
            </InputWrapper>
            <span onClick={handleSendOtp}>
              {t('SEND_CODE', 'Send code')}?
            </span>
          </>
        ) : (
          <>
            <CountdownTimer>
              <span>{formatSeconds(otpLeftTime)}</span>
              <span onClick={handleSendOtp}>
                {t('RESEND_AGAIN', 'Resend again')}?
              </span>
            </CountdownTimer>

            <OtpWrapper>
              <OtpInput
                value={otpState}
                onChange={otp => setOtpState(otp)}
                numInputs={numOtpInputs}
                containerStyle='otp-container'
                inputStyle='otp-input'
                placeholder={new Array(numOtpInputs).fill(0).join('')}
                isInputNum
                shouldAutoFocus
              />
            </OtpWrapper>

            <Button
              type='button'
              color='secundary'
              disabled={verifyEmailState?.loadingSendCode || verifyEmailState?.loadingCheckCode}
              onClick={() => {
                setEmailVerification(false)
              }}
            >
              {t('CANCEL', 'Cancel')}
            </Button>
          </>
        )}
      </FormInput>
      </SectionContent>
      <Alert
        title={t('VERIFY_EMAIL', 'Verify email')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => closeAlert()}
        onAccept={() => closeAlert()}
        closeOnBackdrop={false}
      />
    </Container>
  )
}

export const VerifyEmail = (props) => {
  const verifyProps = {
    ...props,
    UIComponent: VerifyEmailUI
  }
  return (
    <VerifyEmailController {...verifyProps} />
  )
}