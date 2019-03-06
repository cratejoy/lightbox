import styled from 'styled-components'
import { resetBtn } from 'styled-manila'

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  z-index: ${props => props.zOverride ? props.zOverride : '99999'};
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  padding: 40px;
  box-sizing: border-box;

  *, *::before, *::after {
    box-sizing: inherit;
  }
`

export const OuterWrapper = styled.div`
  z-index: 2;
  overflow-y: auto;
`

export const InnerWrapper = styled.div`
  height: 100%;
`

export const Background = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`

export const CloseBtn = styled.button`
  ${resetBtn};
  color: rgb(210, 210, 210);
  background-color: rgb(22, 22, 23);
  height: 40px;
  width: 50px;
  position: absolute;
  top: 0;
  left: 0;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s;
  box-shadow: none;

  &:hover, &:active, &:focus {
    color: white;
  }
`
