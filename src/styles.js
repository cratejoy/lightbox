import styled from 'styled-components'
import { resetBtn } from 'styled-manila'

export const ImagesWrapper = styled.div`
  position: relative;
`

const statusSolver = ({ status }) => {
  switch (status) {
    case 'entered':
    case 'entering':
      return '1'
    default:
      return '0'
  }
}

export const Image = styled.img`
  display: block;
  transition: 250ms;
  opacity: ${statusSolver};
`

export const Btn = styled.button`
  ${resetBtn}
  position: absolute;
  height: 100%;
  width: 40%;
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
  box-shadow: none;

  &:hover {
    opacity: 1;
  }

  &:focus-visible {
    opacity: 1;
    box-shadow: 0 0 0 2px #FFFFFF, 0 0 2px 4px rgba(56,191,195,0.4);
  }
`

export const HiddenWrapper = styled.div`
  visibility: hidden;
  width: 0;
  height: 0;
  overflow: hidden;
`
