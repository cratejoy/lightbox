import styled from 'styled-components'
import { resetBtn } from 'styled-manila'

export const ImagesWrapper = styled.div`
  position: relative;
`

export const Image = styled.img`
  display: block;
`

export const Btn = styled.button`
  ${resetBtn}
  position: absolute;
  height: 100%;
  width: 40%;
  outline: none;
  top: 0;
  ${({left}) => left ? 'left' : 'right'}: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.2s;
  opacity: 0;
  background-image: linear-gradient(
    to ${({left}) => left ? 'right' : 'left'},
    rgba(0, 0, 0, 0.7) -20%, rgba(0, 0, 0, 0.01)
  );

  &:hover, &:active, &:focus {
    opacity: 1;
  }

  &:focus {
    outline: auto;
  }
`

export const HiddenWrapper = styled.div`
  visibility: hidden;
  width: 0;
  height: 0;
  overflow: hidden;
`
