import React from 'react'
import PropTypes from 'prop-types'
import Portal from 'react-minimalist-portal'
import { Flipper, Flipped } from 'react-flip-toolkit'

import {
  Overlay
} from './components'

import {
  Image,
  ImagesWrapper,
  Btn
} from './styles'

import {
  CaretLeft,
  CaretRight
} from './icons'

const LightboxMarkup = ({
  showPortal, src,
  toggleOpen, index,
  next, previous
}) => {
  const currentImg = src[index].url
  return (
    <Portal>
      <Flipper flipKey={index}>
        <Overlay dismiss={toggleOpen}>
          <Flipped flipId='show'>
            <ImagesWrapper>
              <Btn left onClick={previous}>
                <CaretLeft fill='currentColor' />
              </Btn>

              <Image src={currentImg} />

              <Btn onClick={next}>
                <CaretRight fill='currentColor' />
              </Btn>
            </ImagesWrapper>
          </Flipped>
        </Overlay>
      </Flipper>
    </Portal>
  )
}

LightboxMarkup.propTypes = {
  showPortal: PropTypes.bool.isRequired,
  src: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      thumb: PropTypes.string
    })
  ).isRequired,
  toggleOpen: PropTypes.func,
  index: PropTypes.number,
  previous: PropTypes.func,
  next: PropTypes.func
}

export default LightboxMarkup
