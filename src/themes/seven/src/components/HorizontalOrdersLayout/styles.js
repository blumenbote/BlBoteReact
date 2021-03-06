import styled, { css } from 'styled-components'

export const OpenOrder = styled.div`
  height: 15%;
  width: 90%;
  margin: auto;
  margin-bottom: 20px;
  button {
    width: 100%;
    font-size: 0.8em;
    height: 36px;
  }

  @media (min-width: 480px){
    button{
      font-size: 1em
    }
  }
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  border-radius: 16px;
  padding: 10px 20px;

`

export const Price = styled.div`
  text-align: end;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 35%;
  h2 {
    font-size: 14px;
    margin-block-end: ${({ isBusinessesPage }) => isBusinessesPage ? '0.1em' : '1em'};
    margin-block-start: 0.1em;
  }
  p {
    margin-block-end: 0.1em;
    margin-block-start: ${({ isBusinessesPage }) => isBusinessesPage ? '0.1em' : '1em'};
    color: #ff9300;
    font-size: 0.8em;
    overflow:hidden;
    text-overflow: ellipsis;
    margin-left: 5px;
  }
  p[name='view-cart']{
    color: ${props => props.theme.colors.primary};
    cursor: pointer;
  }
`

export const Logo = styled.div`
  width: 55px;
  height: 55px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 16px;
  }

  @media (min-width: 480px){
    width: 75px;
    height: 75px;
  }
`

export const Card = styled.div`
  min-width: 300px;
  width: 300px;
  margin: 10px;
  display: inline-block;
  background: white;
  height: ${({ isBusinessesPage }) => isBusinessesPage && '300px'};
  max-height: ${({ isBusinessesPage }) => isBusinessesPage ? '300px' : '220px'};
  border-radius: 16px;
  text-align: left;
  cursor: ${({ isBusinessesPage }) => isBusinessesPage && 'pointer'};

  button.load-orders {
    padding: 10px 30px;
  }

  ${props => props.theme?.rtl && css`
    text-align: right;
  `}

  ${props => (props.nobg || props.isBusinessesPage) && css`
    background: transparent;
  `}

  ${props => props.flex && css`
    display: flex;
    align-items: center;
    justify-content: center;
  `}

  ${props => (
    props.theme.colors.backgroundPage === '#FFF' ||
    props.theme.colors.backgroundPage === '#FFFFFF'
  ) && css`
    box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 24px;
  `}

  @media (min-width: 480px){
    min-width: 400px;
    max-height: ${({ isBusinessesPage }) => isBusinessesPage ? '300px' : '250px'};;
    width: 400px;
  }

  @media(min-width: 993px){
    ${({ isBusinessesPage }) => isBusinessesPage && css`
      margin: 30px 20px;
      width: calc(33% - 40px);
    `}
  }

`

export const Map = styled.div`
  width: 100%;
  height: ${({ isBusinessesPage }) => isBusinessesPage ? '200px' : '88px'};
  min-height: ${({ isBusinessesPage }) => isBusinessesPage && '175px'};
  img{
    width: 100%;
    height: 100%;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    border-radius: ${({ isBusinessesPage }) => isBusinessesPage && '16px'};
    image-rendering: -webkit-optimize-contrast;
    object-fit: cover;
  }
  @media(min-width: 480px){
    height: ${({ isBusinessesPage }) => isBusinessesPage ? '200px' : '100px'};
    min-height: ${({ isBusinessesPage }) => isBusinessesPage && '200px'}
  }
`

export const Reorder = styled.div`
  margin-bottom: 10px;
  button{
    line-height: 0;
    height: 30px;
    font-size: 14px;
  }
`
