import styled from 'styled-components'

export const ImagesWrapper = styled.div`
  position: relative;
`

export const Image = styled.img`
  display: block;
`

export const Btn = styled.div`
  position: absolute;
  height: 100%;
  width: 40%;
  top: 0;
  cursor: pointer;
  ${({left}) => left ? 'left' : 'right'}: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.2s;
`
