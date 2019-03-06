import styled, { css } from 'styled-components'

const isIn = status => status === 'entering' || status === 'exiting'

export const Image = styled.img`
  display: block;
  transition: opacity 500ms;

  ${({status}) => isIn(status) && css`
    opacity: 0.01;
    transition: opacity 200ms;
  `}

  ${({status}) => !isIn(status) && css`
    opacity: 1;
  `}
`

export const HiddenWrapper = styled.div`
  visibility: hidden;
  width: 0;
  height: 0;
  overflow: hidden;
`
