import { lighten } from 'polished'
import styled, { css } from 'styled-components'
export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 0px 10px 10px;
  width: 100%;
  box-sizing: border-box;
  @media (min-width: 768px) {
    height: 100%;
    padding: 0px 30px 10px;
  }
  @media (min-width: 1024px) {
    flex-wrap: nowrap;
    overflow: auto;
    padding: 0;
    height: 83vh;
    overflow-y: scroll;
  }
`

export const ProductTopBar = styled.div`
  width: 100vw; 
  padding: 0px 16px 0px 52px;
  box-sizing: border-box;
  @media (min-width: 1024px) {
    padding: 0px 16px 0px 120px;
  }
  &h1 {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`
export const ProductInfoWrapper = styled.div`
  display: grid;
  grid-template-columns: 100%;
  margin: 20px 48px;
  @media (min-width: 1024px) {
    grid-template-columns: 40% auto;
  }
`

export const WrapperImage = styled.div`
  width: 100%;
  @media (min-width: 1024px) {
    border-width: 0px 1px 0px 0px;
    border-color: #DEE2E6;
    border-style: solid;
  }
`
export const ProductImage = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 310px;
  width: 100%;
  img {
    width: 100%;
    object-fit: cover;
  }
  @media (min-width: 1024px) {
    justify-content: flex-start;
    img {
      width: 76%;
      height: 310px;
      border-radius: 10px;
      box-sizing: border-box;
      padding: 0px 20px;
      background-color: #F8F9FA;
    }
  }
`
export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0px;
  position: relative;
  margin-top: 20px;
  box-sizing: border-box;
  h1 {
    font-size: 20px;
    font-weight: 500;
    text-align: center;
    color: #263238;
    margin-top: 0px;
  }
  p {
    font-size: 14px;
    font-weight: 200;
    margin-top: 0px;
    line-height: 1.5em;
    width: 100%;
    text-align: left;
    ${props => props.theme?.rtl && css`
      text-align: right;
    `}
  }
  @media (min-width: 381px) {
    h1 {
      font-size: 24px;
    }
    p {
      font-size: 16px;
    }
  }
  @media (min-width: 411px) {
    padding: 10px 0px;
  }
  @media (min-width: 1024px) {
    padding: 0px 20px;
    top: 0;
    margin-top: 0px;   
    background-color: ${props => props.theme.colors.secundaryBackground};
    height: fit-content;
    min-height: 100%;
    box-sizing: border-box;
  }
`
export const ProductFormTitle = styled.div`
  overflow-wrap: break-word;
  padding: 0 7px;
  margin-top: 12px;
  @media (min-width: 1024px) {
    width: calc(100% - 25px);
  }
  & span {
    font-size: 18px
  }
`
export const ProductEdition = styled.div``
export const SectionTitle = styled.h3`
  text-transform: capitalize;
  font-size: 18px;
  padding: 15px 0px;
  margin: 0px;
  font-weight: 600;
  color: #333333;
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
  margin-bottom: 20px;
`
export const ProductComment = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
  h3 {
    color: ${props => props.theme.colors.fontSecundary};
  }
  p {
    font-weight: 300;
    margin-bottom: 5px;
  }
  textarea {
    background-color: transparent;
  }
  @media (min-width: 577px) {
    margin-bottom: 62px;
  }
  @media (min-width: 769px) {
    margin-bottom: 0px;
  }
`
export const ProductActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  position: relative;
  bottom: 76px;
  right: 0;
  width: 100%;
  background-color: #FFF;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  box-sizing: border-box;
  &.isIndividualBusinessCart-ProductAction {
    bottom: 0;
    @media (min-width: 1024px) {
      padding: 0;
    }
    
  }
  div.incdec-control {
    width: 11%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    svg {
      width: 25px;
      height: 25px;
      cursor: pointer;
    }
    span {
      font-size: 18px;
      font-weight: 600;
    }
  }
  div:last-child {
    width: 100%;
    display: flex;
    align-items: center;
  }
  button:disabled,
  button.disabled,
  svg.disabled {
    opacity: 0.4;
  }
  svg.disabled {
    pointer-events: none;
  }
  button.add {
    width: 28%;
    padding: 5px 10px;
    margin: 0px 0px;
    position: relative;
    
    &.soldout {
      width: 100%;
      pointer-events: none;
    }
  }

  @media (min-width: 769px) {
    position: relative;
    bottom: initial;
    right: initial;
    background-color: transparent;
    box-shadow: none;
  }
  @media (min-width: 1024px) {
    position: relative;
    justify-content: space-between;
    div.incdec-control {
      svg {
        width: 30px;
        height: 30px;
        cursor: pointer;
      }
    }
    div:last-child {
      width: 70%;
      button {
        width: 100%;
      }
    }
  }
`
export const SkeletonBlock = styled.div`
  width: ${({ width }) => width && `${width}%`};
  border-radius: 16px;
  margin: auto;
  span {
    margin-bottom: 10px;
  }
`
export const WrapperSubOption = styled.div`
  border-radius: 10px;
  /* &.error {
    background-color: ${lighten(0.58, '#A52121')};
  } */
  &.soldout {
    pointer-events: none;
    background-color: hsl(0, 0%, 72%);
  }
`
export const SkuContent = styled.div`
  display: flex;
  flex-direction: column;
  h2 {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 0px;
  }
  p {
    font-size: 14px;
  }
`
export const WrapperIngredients = styled.div`
  ${({ isProductSoldout }) => isProductSoldout && css`
    border-radius: 10px;
    pointer-events: none;
    background: hsl(0, 0%, 72%);
  `}
`

export const ShareWrapper = styled.div`
  position: absolute;
  top: -40px;
  left: -5px;
  ${props => props.theme?.rtl && css`
    right: 10px;
  `}
  width: fit-content;
  height: fit-content;
  z-index: 20;
  cursor: pointer;
  
  .product-share {    
    .a2a_vertical_style {
      top: 36px;
      left: 0;
      display: flex;
      flex-direction: column;
      width: 40px;
      box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    }
  }

  @media (min-width: 768px) {
    left: -8px;
    ${props => props.theme?.rtl && css`
      left: unset; 
      right: 25px;
    `}
  }

  @media (min-width: 1024px) {
    left: -25px;
    top: -8px;
    ${props => props.theme?.rtl && css`
      left: unset; 
      right: -25px;
    `}
  }

`

export const FloatingProductBar = styled.div`
  position: fixed;
  display: flex;
  width: 100vw;
  bottom: 0px;
  background-color: #E8F0ED;
  heigth: 80px;
`

export const ProductPrice = styled.div`
  font-size: 20px;
  font-weight: 600;
  padding-left: 36px;
  width: 100px;
`
