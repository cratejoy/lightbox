import React from 'react'
import PropTypes from 'prop-types'
import Portal from 'react-minimalist-portal'
import { srcShape, srcArray } from './sharedPropTypes'

import { Overlay } from './components'

import {
  ImagesWrapper,
  Btn,
  Image,
  PreloadWrapper
} from './styles'

import { CaretLeft } from './icons'

const Markup = ({
  showPortal,
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
              <CaretLeft />
            </Btn>
          )}
          <Image src={currentImage.url} />
          {manyPics && (
            <Btn onClick={next}>
              <CaretLeft rotated />
            </Btn>
          )}
          {images && (
            <PreloadWrapper>
              {images.map((i, k) => (
                <Image key={k} src={i.url} />
              ))}
            </PreloadWrapper>
          )}
        </ImagesWrapper>
      </Overlay>
    </Portal>
  )
}

Markup.propTypes = {
  showPortal: PropTypes.bool.isRequired,
  currentImage: srcShape,
  images: srcArray,
  toggleOpen: PropTypes.func,
  index: PropTypes.number,
  previous: PropTypes.func,
  manyPics: PropTypes.bool,
  next: PropTypes.func
}

export default Markup
