import styled from 'styled-components'

export const Image = styled.img`
  display: block;
  width: 100%;
  max-height: 100%;
  object-fit: cover;
`

export const PreloadWrapper = styled.div`
  visibility: hidden;
  width: 0;
  height: 0;
  overflow: hidden;
`
