import styled, { css } from 'styled-components'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
  z-index: ${props => props.zOverride ? props.zOverride : '9'};
`

export const Column = styled.div`
  position: absolute;
  width: 30%;
  top: 0;
  bottom: 0;
  cursor: pointer;
  transition: opacity 200ms ease;
  opacity: 0;

  ${props => props.left && css`
    left: 0;
  `}

  ${props => props.right && css`
    right: 0;
  `}

  &:hover {
    opacity: 1;
  }
`

export const Button = styled.button`
  appearance: none;
  border: none;
  border-radius: 0;
  background: none;
  margin: 0;
  padding: 0;
  font: inherit;
  line-height: inherit;
  color: inherit;
  cursor: pointer;
  outline: none;

  transition: opacity 200ms ease;
  opacity: ${props => props.hide ? '0' : '1'};
  display: flex;
  align-items: center;
  justify-content: center;
`

export const CloseBtn = styled(Button)`
  height: 48px;
  width: 48px;
  position: absolute;
  top: 8;
  left: 14px;
`

export const ArrowBtn = styled(Button)`
  background-color: rgba(66, 66, 66, 0.54);
  border-radius: 28px;
  position: absolute;
  top: 50%;
  margin-top: -28px;
  height: 56px;
  width: 56px;

  ${props => props.left && css`
    left: 28px;
  `}

  ${props => props.right && css`
    right: 28px;
  `}
`
