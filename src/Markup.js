import React from 'react'
import PropTypes from 'prop-types'
import Portal from 'react-minimalist-portal'
import { Flipper, Flipped } from 'react-flip-toolkit'
import { srcShape } from './sharedPropTypes'

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

const Markup = ({
  showPortal,
  toggleOpen, index,
  next, previous,
  currentImage,
  manyPics
}) => {
  if (!showPortal) return false
  return (
    <Portal>
      <Flipper flipKey={index}>
        <Overlay dismiss={toggleOpen}>
          <Flipped flipId='show'>
            <ImagesWrapper>
              {manyPics && (
                <Btn left onClick={previous}>
                  <CaretLeft fill='currentColor' />
                </Btn>
              )}
              <Image src={currentImage.url} />

              {manyPics && (
                <Btn onClick={next}>
                  <CaretRight fill='currentColor' />
                </Btn>
              )}
            </ImagesWrapper>
          </Flipped>
        </Overlay>
      </Flipper>
    </Portal>
  )
}

Markup.propTypes = {
  showPortal: PropTypes.bool.isRequired,
  currentImage: srcShape,
  toggleOpen: PropTypes.func,
  index: PropTypes.number,
  previous: PropTypes.func,
  manyPics: PropTypes.bool,
  next: PropTypes.func
}

export default Markup
