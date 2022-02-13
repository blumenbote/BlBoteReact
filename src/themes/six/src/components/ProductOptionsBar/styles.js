import styled from 'styled-components'

export const OptionsBarContainer = styled.div`
  display: flex;
  overflow-x: auto;
  overflow-y: initial;
  background-color: #F8F9FA;
  border-width: 1px 0px;
  border-style: solid;
  border-color: #DEE2E6;
  @media (min-width: 1024px) {
    padding-left: 35px;
    overflow: initial;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`
export const OptionSelector = styled.div`
  position: relative;
  height: 68px;
  margin: 0 16px;
  display: flex;
  align-items: center;
  font-weight: 500;
  color: #6C757D;
  white-space: nowrap;
  &.selected {
    border-bottom: 4px solid ${props => props.theme.colors.primary};
    color: #000;
  }
  ::after {
    content: " ";
    position: absolute;
    right: -19px;
    top: 9px;
    background-color: ${props => props.theme.colors.primary};
    width: 12px;
    height: 12px;
    border-radius: 50%;
    opacity: 0;
    transition: opacity 0.3s
  }
  &.required::after {
    opacity: 1;
  }
  cursor: pointer;
`
