import styled from 'styled-components'

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

export const HiddenWrapper = styled.div`
  visibility: hidden;
  width: 0;
  height: 0;
  overflow: hidden;
`
