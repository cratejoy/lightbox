import React from 'react'
import PropTypes from 'prop-types'
import Portal from 'react-minimalist-portal'
import { srcShape, srcArray } from './sharedPropTypes'
import { Transition } from 'react-transition-group'

import {
  Overlay
} from './components'

import {
  Image,
  ImagesWrapper,
  Btn,
  HiddenWrapper
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
  nextImages,
  manyPics,
  showImage
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
          <Transition
            in={showImage}
            timeout={250}
            appear
          >
            {status => (
              <div>
                <Image status={status} src={currentImage.url} />
                <p>{status}</p>
              </div>
            )}
          </Transition>

          {nextImages && (
            <HiddenWrapper>
              {nextImages.map((img, i) => (
                <Image key={i} src={img.url} />
              ))}
            </HiddenWrapper>
          )}

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
  currentImage: srcShape,
  nextImages: srcArray,
  toggleOpen: PropTypes.func,
  index: PropTypes.number,
  previous: PropTypes.func,
  manyPics: PropTypes.bool,
  showImage: PropTypes.bool,
  next: PropTypes.func
}

export default Markup
