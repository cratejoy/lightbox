import styled, { css } from 'styled-components'

export const Image = styled.img`
  display: block;

  ${({status}) => status === 'entering' && css`
    opacity: 0.01;
  `}

  ${({status}) => status === 'entered' && css`
    opacity: 1;
    transition: opacity 500ms ease-in;
  `}

  ${({status}) => status === 'exiting' && css`
    opacity: 1;
    transition: opacity 400ms ease-in;
  `}

  ${({status}) => status === 'exited' && css`
    opacity: 0.01;
  `}
`

export const HiddenWrapper = styled.div`
  visibility: hidden;
  width: 0;
  height: 0;
  overflow: hidden;
`
