import styled from 'styled-components'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
  z-index: 9;
  box-sizing: border-box;

  *, *::before, *::after {
    box-sizing: inherit;
  }
`

export const Image = styled.img`
  display: block;
`
