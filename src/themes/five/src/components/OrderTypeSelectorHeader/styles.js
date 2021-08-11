import styled from 'styled-components'

export const HeaderItem = styled.div`
  cursor: pointer;
  font-size: 14px;
  color: #909BA9;
  display: flex;
  align-items: center;
`

export const PopoverBody = styled.div`
  background-color: #FFF;
  color: #333;
  padding: 15px;
  border-radius: 10px;
  max-width: 500px;
  z-index: 1001;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 24px;
`

export const PopoverArrow = styled.div`
  width: 0; 
  height: 0; 
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  border-bottom: 8px solid #FFF;
  top: -8px;
`
export const CloseBtn = styled.div`
  user-select: none;
  position: absolute;
  cursor: pointer;
  top: 30px;
  left: 20px;

  svg {
    font-size: 15px;
    color: #748194;
  }
`