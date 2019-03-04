import styled from 'styled-components'
import { resetBtn } from 'styled-manila'

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: ${props => props.zOverride ? props.zOverride : '99999'};
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
  padding: 20px;
  box-sizing: border-box;

  *, *::before, *::after {
    box-sizing: inherit;
  }
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
`

export const InnerWrapper = styled.div`
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
