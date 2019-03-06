import React from 'react'
import PropTypes from 'prop-types'
import Portal from 'react-minimalist-portal'
import { srcShape, srcArray } from './sharedPropTypes'

import {
  Overlay,
  Images
} from './components'

import {
  ImagesWrapper,
  Btn
} from './styles'

import {
  CaretLeft,
  CaretRight
} from './icons'

const Markup = ({
  showPortal,
  showImage,
  toggleOpen, index,
  next, previous,
  currentImage,
  images,
  manyPics
}) => {
  if (!showPortal) return false
  return (
    <Portal>
      <Overlay dismiss={toggleOpen}>
        <ImagesWrapper>
          {manyPics && (
            <Btn left onClick={previous}>
              <CaretLeft fill='currentColor' />
            </Btn>
          )}
          <Images showImage={showImage} currentImage={currentImage} images={images} />
          {manyPics && (
            <Btn onClick={next}>
              <CaretRight fill='currentColor' />
            </Btn>
          )}
        </ImagesWrapper>
      </Overlay>
    </Portal>
  )
}

Markup.propTypes = {
  showPortal: PropTypes.bool.isRequired,
  showImage: PropTypes.bool,
  currentImage: srcShape,
  images: srcArray,
  toggleOpen: PropTypes.func,
  index: PropTypes.number,
  previous: PropTypes.func,
  manyPics: PropTypes.bool,
  next: PropTypes.func
}

export default Markup
