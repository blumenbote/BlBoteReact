import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ zx }) => zx && css`
    .popup {
      z-index: ${zx} !important;
    }
  `}
`

export const ModalDialog = styled.div`
  position: relative;
  background-color: ${({ isTransparent }) => isTransparent ? 'transparent' : '#FFF'};
  padding: ${({ padding }) => padding || '20px'};
  width: ${({ width }) => width || '50%'};
  border-radius: 10px;
  box-sizing: border-box;
  margin-top: auto;
  margin-bottom: auto;
  max-height: 90vh;
  overflow: auto;
  @media (max-width: 860px) {
    width: 80%;
  }
  @media (max-width: 480px) {
    width: 100vw;
    height: 100vh;
    max-height: 100vh;
    border-radius: 0px;
  }
`

export const ModalActions = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 0px 0px;
  button {
    width: 100%;
    border-radius: 32px;
    opacity: 1;
    height: 45px;
    &:nth-child(1) {
      margin-right: 25px;
    }
  }
`
export const ModalHeader = styled.div`
  display: flex;

`

export const ModalTitle = styled.h2`
  text-align: left;
  font-size: 30px;
  letter-spacing: 0px;
  color: #010300;
  opacity: 1;
  margin: 0px 0px;
  margin-bottom: 20px;
  padding-left: 10px;
  text-transform: capitalize;
  flex: 1;
`

export const ModalOrderTypes = styled.div`
  margin-right: 15px;
`

export const ModalIcon = styled.span`
  position: absolute;
  right: 5px;
  top: 6px;
  font-size: 30px;
  cursor: pointer;
  z-index: 1;
`
