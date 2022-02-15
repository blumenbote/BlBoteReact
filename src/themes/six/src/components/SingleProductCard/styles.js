import { lighten } from 'polished'
import React from 'react'
import styled, { css } from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100% - 40px);
  margin: 10px;
  border-radius: 10px;
  cursor: pointer;
  position: relative;

  background: ${({ soldOut }) => soldOut ? '#B8B8B8' : '#FFF'};

  ${props => (
    props.theme.colors.backgroundPage === '#FFF' ||
    props.theme.colors.backgroundPage === '#FFFFFF'
  ) && css`
    box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 24px;
  `}
  
  @media (min-width: 681px) {
    width: 180px;
  }
`

export const SoldOut = styled.span`
  font-weight: bold;
  position: absolute;
  background: #D6D6D6 0% 0% no-repeat padding-box;
  border-radius: 23px;
  padding: 5px 10px;
  top: 8px;
  right: 6px;
  text-transform: uppercase;
  font-size: 14px;
  ${props => props.theme?.rtl && css`
    left: 6px;
    right: initial;
  `}
`

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  > * {
    margin: 5px;
  }

  h1 {
    font-size: 16px;
    font-weight: ${({ soldOut }) => soldOut ? 'bold' : '500'};
    text-align: left;
    color: ${props => props.theme?.colors.fontPrimary};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 275px;
  }

  p {
    font-weight: ${({ soldOut }) => soldOut ? 'bold' : '200'};
    text-align: left;
    ${props => props.theme?.rtl && css`
      text-align: right;
    `}

    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }

  span {
    color: ${({ soldOut, theme }) => soldOut ? lighten(0.05, theme.colors.fontPrimary) : theme.colors.fontPrimary};
    font-weight: bold;
  }

  p, span {
    font-size: 13px;
  }

  @media (min-width: 1024px) {
    h1 {
      font-size: 18px;
    }

    p {
      font-size: 16px;
    }

    span {
      font-size: 15px;
    }
  }
`

export const WrapLogo = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 8px;
  background-color: ${props => props.theme.colors.secundaryBackground};
  margin-right: 5px;
  ${props => props.theme?.rtl && css`
    margin-left: 5px;
    margin-right: 0px;
  `}
`

const CardLogoStyled = styled.div`
  box-sizing: border-box;
  position: relative;
  background-repeat: no-repeat, repeat;
  background-size: cover;
  background-position: center;
  object-fit: cover;
  min-height: 150px;
  min-width: 150px;
  width: 150px;
  height: 150px;
  border-radius: 8px;
  
`
export const CardLogo = (props) => {
  const style = {}
  if (props.bgimage) {
    style.backgroundImage = `url(${props.bgimage})`
  }
  if (props.soldOut) {
    style.filter = 'brightness(70%)'
  }
  return (
    <CardLogoStyled {...props} style={style}>
      {props.children}
    </CardLogoStyled>
  )
}
