import styled from 'styled-components'
import { resetBtn } from 'styled-manila'

export const ImagesWrapper = styled.div`
  position: relative;
  height: 100%;
`

export const Btn = styled.button`
  ${resetBtn}
  position: absolute;
  height: 100%;
  width: 40%;
  top: 0;
  ${({left}) => left ? 'left' : 'right'}: 0;
  display: flex;
  transition: opacity 0.2s;
  box-shadow: none;
  background-image: linear-gradient(
    to ${({left}) => left ? 'right' : 'left'},
    rgba(0, 0, 0, 0.7) -20%, rgba(0, 0, 0, 0.01)
  );

  @media (min-width: 1024px) {
    opacity: 0;
  }

  &:hover {
    opacity: 1;
  }

  svg {
    fill: currentColor;
    margin: auto;
  }
`
