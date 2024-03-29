import React, { useState, useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form'
import Skeleton from 'react-loading-skeleton'
import { Alert } from '../Confirm'
import { InputPhoneNumber } from '../InputPhoneNumber'
import parsePhoneNumber from 'libphonenumber-js'

import {
  SignupForm as SignUpController,
  useLanguage,
  useConfig,
  useSession,
  ReCaptcha,
  useEvent
} from 'ordering-components'
import {
  SignUpContainer,
  FormSide,
  FormInput,
  SocialButtons,
  RedirectLink,
  SkeletonWrapper,
  SkeletonSocialWrapper,
  WrapperPassword,
  TogglePassword,
  ReCaptchaWrapper,
  LoginDivider,
  DividerLine,
  Title,
  InputWrapper,
  InputBeforeIcon,
  TermsConditionWrapper,
  BussinessAndDriverSignUp,
  CheckboxArea,
  PromotionsWrapper
} from './styles'

import { Input } from '../../styles/Inputs'
import { Button } from '../../styles/Buttons'
import { Checkbox } from '../../../../../styles/Checkbox'
import { sortInputFields } from '../../../../../utils'

import { FacebookLoginButton } from '../FacebookLogin'
import { GoogleLoginButton } from '../GoogleLogin'
import { AppleLogin } from '../AppleLogin'

import {
  Person,
  Envelope,
  Lock,
  Eye,
  EyeSlash
} from 'react-bootstrap-icons'

const notValidationFields = ['coupon', 'driver_tip', 'mobile_phone', 'address', 'address_notes']

const SignUpFormUI = (props) => {
  const {
    handleChangeInput,
    handleButtonSignupClick,
    handleReCaptcha,
    elementLinkToLogin,
    useChekoutFileds,
    validationFields,
    showField,
    isRequiredField,
    formState,
    handleSuccessSignup,
    isPopup,
    externalPhoneNumber,
    saveCustomerUser,
    fieldsNotValid,
    signupData,
    enableReCaptcha,
    closeModal,
    handleChangePromotions
  } = props
  const [, t] = useLanguage()
  const [{ configs }] = useConfig()
  const formMethods = useForm()
  const [events] = useEvent()
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [, { login }] = useSession()
  const emailInput = useRef(null)
  const isFacebookLogin = configs?.facebook_login?.value === 'true'

  const [userPhoneNumber, setUserPhoneNumber] = useState('')
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(null)
  const [passwordSee, setPasswordSee] = useState(false)
  const [fieldNumber, setFieldNumber] = useState(1)

  const showInputPhoneNumber = (validationFields?.fields?.checkout?.cellphone?.enabled ?? false) || configs?.verification_phone_required?.value === '1'

  const initParams = {
    client_id: configs?.google_login_client_id?.value,
    cookiepolicy: 'single_host_origin',
    scope: 'profile'
  }

  const hasSocialLogin = (
    (configs?.facebook_login?.value === 'true' || configs?.facebook_login?.value === '1') && configs?.facebook_id?.value) ||
    configs?.google_login_client_id?.value ||
    configs?.apple_login_client_id?.value

  const handleSuccessFacebook = (user) => {
    login({
      user,
      token: user?.session?.access_token
    })
  }

  const handleSuccessApple = (user) => {
    login({
      user,
      token: user?.session?.access_token
    })
  }

  const handleSuccessGoogle = (user) => {
    login({
      user,
      token: user?.session?.access_token
    })
  }

  const togglePasswordView = () => {
    setPasswordSee(!passwordSee)
  }

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  const handleGoToPage = (data) => {
    events.emit('go_to_page', data)
    closeModal && closeModal()
  }

  const onSubmit = () => {
    const isPhoneNumberValid = userPhoneNumber ? isValidPhoneNumber : true
    if (!userPhoneNumber &&
      ((validationFields?.fields?.checkout?.cellphone?.enabled &&
      validationFields?.fields?.checkout?.cellphone?.required) ||
      configs?.verification_phone_required?.value === '1')
    ) {
      setAlertState({
        open: true,
        content: [t('VALIDATION_ERROR_MOBILE_PHONE_REQUIRED', 'The field Mobile phone is required.')]
      })
      return
    }
    if (!isPhoneNumberValid) {
      setAlertState({
        open: true,
        content: [t('INVALID_ERROR_PHONE_NUMBER', 'The Phone Number field is invalid')]
      })
      return
    }
    handleButtonSignupClick && handleButtonSignupClick()
    if (!formState.loading && formState.result.result && !formState.result.error) {
      handleSuccessSignup(formState.result.result)
    }
  }

  const handleChangePhoneNumber = (number, isValid) => {
    setUserPhoneNumber(number)

    let phoneNumberParser = null
    let phoneNumber = {
      country_phone_code: {
        name: 'country_phone_code',
        value: ''
      },
      cellphone: {
        name: 'cellphone',
        value: ''
      }
    }
    if (isValid) {
      phoneNumberParser = parsePhoneNumber(number)
    }
    if (phoneNumberParser) {
      phoneNumber = {
        country_phone_code: {
          name: 'country_phone_code',
          value: phoneNumberParser.countryCallingCode
        },
        cellphone: {
          name: 'cellphone',
          value: phoneNumberParser.nationalNumber
        }
      }
    }
    handleChangeInput(phoneNumber, true)
  }

  const handleChangeInputEmail = (e) => {
    handleChangeInput({ target: { name: 'email', value: e.target.value.toLowerCase().replace(/[&,()%";:ç?<>{}\\[\]\s]/g, '') } })
    formMethods.setValue('email', e.target.value.toLowerCase().replace(/[&,()%";:ç?<>{}\\[\]\s]/g, ''))
    emailInput.current.value = e.target.value.toLowerCase().replace(/[&,()%";:ç?<>{}\\[\]\s]/g, '')
  }

  useEffect(() => {
    if (!formState.loading && formState.result?.error) {
      setAlertState({
        open: true,
        content: formState.result?.result || [t('ERROR', 'Error')]
      })
    } else if (!formState.loading && !formState.result?.error && formState.result?.result) {
      saveCustomerUser && saveCustomerUser(formState.result?.result)
    }
  }, [formState])

  useEffect(() => {
    if (Object.keys(formMethods.errors).length > 0) {
      setAlertState({
        open: true,
        content: Object.values(formMethods.errors).map(error => error.message)
      })
    }
  }, [formMethods.errors])

  useEffect(() => {
    if (!validationFields.loading) {
      Object.values(validationFields?.fields?.checkout).map(field => !notValidationFields.includes(field.code) && (
        field.code === 'email' ? (
          formMethods.register('email', {
            required: isRequiredField(field.code)
              ? t('VALIDATION_ERROR_EMAIL_REQUIRED', 'The field Email is required').replace('_attribute_', t('EMAIL', 'Email'))
              : null,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: t('INVALID_ERROR_EMAIL', 'Invalid email address').replace('_attribute_', t('EMAIL', 'Email'))
            }
          })
        ) : (
          formMethods.register(field.code, {
            required: isRequiredField(field.code)
              ? t(`VALIDATION_ERROR_${field.code.toUpperCase()}_REQUIRED`, `${field.name} is required`).replace('_attribute_', t(field.name, field.code))
              : null
          })
        )
      ))
    }
  }, [formMethods])

  useEffect(() => {
    Object.keys(signupData).map(fieldName => {
      formMethods.setValue(fieldName, signupData[fieldName])
    })
  }, [signupData])

  useEffect(() => {
    if (externalPhoneNumber) {
      setUserPhoneNumber(externalPhoneNumber)
      handleChangePhoneNumber(externalPhoneNumber, true)
    }
  }, [externalPhoneNumber])

  useEffect(() => {
    if (useChekoutFileds && validationFields?.loading) return
    let fieldnum = 0
    sortInputFields({ values: validationFields?.fields?.checkout }).forEach(field => {
      if (showField && showField(field.code) && field.code !== 'email') fieldnum += 1
    })
    setFieldNumber(fieldnum)
  }, [validationFields])

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <SignUpContainer isPopup={isPopup}>
        <FormSide isPopup={isPopup}>
          <Title>{t('SIGN_UP', 'Sign up')}</Title>
          <FormInput
            noValidate
            isPopup={isPopup}
            onSubmit={formMethods.handleSubmit(onSubmit)}
            isSkeleton={useChekoutFileds && validationFields?.loading}
          >
            {props.beforeMidElements?.map((BeforeMidElements, i) => (
              <React.Fragment key={i}>
                {BeforeMidElements}
              </React.Fragment>))}
            {props.beforeMidComponents?.map((BeforeMidComponents, i) => (
              <BeforeMidComponents key={i} {...props} />))}
            {
              !(useChekoutFileds && validationFields?.loading) ? (
                <>
                  {validationFields?.fields?.checkout &&
                    sortInputFields({ values: validationFields?.fields?.checkout }).map(field =>
                      showField && showField(field.code) && (
                        <React.Fragment key={field.id}>
                          {field.code === 'email' ? (
                            <InputWrapper>
                              <Input
                                type={field.type}
                                name={field.code}
                                aria-label={field.code}
                                className='form'
                                placeholder={t(field.code.toUpperCase(), field.name)}
                                onChange={handleChangeInputEmail}
                                ref={(e) => {
                                  emailInput.current = e
                                }}
                                required={!!field.required}
                                autoComplete='off'
                              />
                              <InputBeforeIcon>
                                <Envelope />
                              </InputBeforeIcon>
                            </InputWrapper>
                          ) : (
                            <InputWrapper isHalf={fieldNumber % 2 === 0}>
                              <Input
                                type={field.type}
                                name={field.code}
                                aria-label={field.code}
                                className='form'
                                placeholder={t(field.code.toUpperCase(), field.name)}
                                onChange={handleChangeInput}
                                required={field.required}
                                autoComplete='off'
                              />
                              <InputBeforeIcon>
                                <Person />
                              </InputBeforeIcon>
                            </InputWrapper>
                          )}
                        </React.Fragment>
                      )
                    )}
                  {!!showInputPhoneNumber && (
                    <InputPhoneNumber
                      value={userPhoneNumber}
                      setValue={handleChangePhoneNumber}
                      handleIsValid={setIsValidPhoneNumber}
                    />
                  )}

                  {(!fieldsNotValid || (fieldsNotValid && !fieldsNotValid.includes('password'))) && (
                    <WrapperPassword>
                      <Input
                        type={!passwordSee ? 'password' : 'text'}
                        name='password'
                        aria-label='password'
                        className='form'
                        placeholder={t('PASSWORD', 'Password')}
                        onChange={handleChangeInput}
                        required
                        ref={formMethods.register({
                          required: isRequiredField('password') ? t('VALIDATION_ERROR_PASSWORD_REQUIRED', 'The field Password is required').replace('_attribute_', t('PASSWORD', 'password')) : null,
                          minLength: {
                            value: 8,
                            message: t('VALIDATION_ERROR_PASSWORD_MIN_STRING', 'The Password must be at least 8 characters.').replace('_attribute_', t('PASSWORD', 'Password')).replace('_min_', 8)
                          }
                        })}
                      />
                      <TogglePassword onClick={togglePasswordView}>
                        {!passwordSee ? <Eye /> : <EyeSlash />}
                      </TogglePassword>
                      <InputBeforeIcon>
                        <Lock />
                      </InputBeforeIcon>
                    </WrapperPassword>
                  )}

                  {props.afterMidElements?.map((MidElement, i) => (
                    <React.Fragment key={i}>
                      {MidElement}
                    </React.Fragment>))}
                  {props.afterMidComponents?.map((MidComponent, i) => (
                    <MidComponent key={i} {...props} />))}
                </>
              ) : (
                <>
                  {[...Array(5)].map((_, i) => (
                    <SkeletonWrapper key={i}>
                      <Skeleton height={43} />
                    </SkeletonWrapper>
                  ))}
                </>
              )
            }
            {props.isRecaptchaEnable && enableReCaptcha && (
              <ReCaptchaWrapper>
                <ReCaptcha handleReCaptcha={handleReCaptcha} />
              </ReCaptchaWrapper>
            )}

            <CheckboxArea>

              <PromotionsWrapper>
                <Checkbox
                  name='promotions'
                  id='promotions'
                  onChange={handleChangePromotions}
                />
                <label
                  htmlFor='promotions'
                >
                  <span>{t('RECEIVE_NEWS_EXCLUSIVE_PROMOTIONS', 'Receive newsletters and exclusive promotions')}</span>
                </label>
              </PromotionsWrapper>

              {configs?.terms_and_conditions?.value === 'true' && (
                <TermsConditionWrapper>
                  <Checkbox
                    name='acceptTerms'
                    ref={formMethods.register({
                      required: t('ERROR_ACCEPT_TERMS', 'You must accept the Terms & Conditions.')
                    })}
                    id='acceptTerms'
                  />
                  <label
                    htmlFor='acceptTerms'
                  >
                    <span>{t('TERMS_AND_CONDITIONS_TEXT', 'I’m agree with')}</span>
                    <a
                      href={configs?.terms_and_conditions_url?.value}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      {t('TERMS_AND_CONDITIONS', 'Terms & Conditions')}
                    </a>
                  </label>
                </TermsConditionWrapper>
              )}
            </CheckboxArea>

            <Button
              color='primary'
              type='submit'
              disabled={formState.loading || validationFields?.loading}
            >
              {formState.loading ? `${t('LOADING', 'Loading')}...` : t('SIGN_UP', 'Sign up')}
            </Button>
          </FormInput>
          {elementLinkToLogin && (
            <RedirectLink register isPopup={isPopup}>
              <span>{t('MOBILE_FRONT_ALREADY_HAVE_AN_ACCOUNT', 'Already have an account?')}</span>
              {elementLinkToLogin}
            </RedirectLink>
          )}
          {Object.keys(configs).length > 0 && (
            configs?.business_signup_allow?.value === '1' || configs?.driver_signup_allow?.value === '1'
          ) &&
            (
              <BussinessAndDriverSignUp>
                {configs?.business_signup_allow?.value === '1' && (
                  <Button
                    color='primaryContrast'
                    onClick={() => handleGoToPage({ page: 'signup_business' })}
                  >
                    {t('SIGNUP_FOR_BUSINESS', 'Sign up for business')}
                  </Button>
                )}
                {/* {configs?.driver_signup_allow?.value === '1' && (
                  <Button
                    color='primaryContrast'
                    onClick={() => handleGoToPage({ page: 'signup_driver' })}
                    disabled
                  >
                    {t('SIGNUP_FOR_DRIVER', 'Sign up for driver')}
                  </Button>
                )} */}
              </BussinessAndDriverSignUp>
            )}
          {hasSocialLogin && (
            <LoginDivider>
              <DividerLine />
              <p>{t('OR', 'or')}</p>
              <DividerLine />
            </LoginDivider>
          )}
          {!externalPhoneNumber && (
            <>
              {Object.keys(configs).length > 0 ? (
                <SocialButtons isPopup={isPopup}>
                  {isFacebookLogin && configs?.facebook_id?.value && (
                    <FacebookLoginButton
                      appId={configs?.facebook_id?.value}
                      handleSuccessFacebookLogin={handleSuccessFacebook}
                    />
                  )}
                  {configs?.apple_login_client_id?.value && (
                    <AppleLogin
                      onSuccess={handleSuccessApple}
                      onFailure={(data) => console.log('onFailure', data)}
                    />
                  )}
                  {configs?.google_login_client_id?.value && (
                    <GoogleLoginButton
                      initParams={initParams}
                      handleSuccessGoogleLogin={handleSuccessGoogle}
                      onFailure={(data) => console.log('onFailure', data)}
                    />
                  )}
                </SocialButtons>
              ) : (
                <SkeletonSocialWrapper>
                  <Skeleton height={43} />
                </SkeletonSocialWrapper>
              )}
            </>
          )}
        </FormSide>
        <Alert
          title={t('SIGN_UP', 'Sign up')}
          content={alertState.content}
          acceptText={t('ACCEPT', 'Accept')}
          open={alertState.open}
          onClose={() => closeAlert()}
          onAccept={() => closeAlert()}
          closeOnBackdrop={false}
        />
      </SignUpContainer>
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
    </>
  )
}

export const SignUpForm = (props) => {
  const loginControllerProps = {
    ...props,
    UIComponent: SignUpFormUI
  }
  return <SignUpController {...loginControllerProps} />
}
