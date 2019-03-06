import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { srcShape, srcArray } from '../../sharedPropTypes'
import { Transition } from 'react-transition-group'
import {
  Image,
  HiddenWrapper
} from './imagesStyles'

const Images = ({ currentImage, images, showImage }) => (
  <Fragment>
    <Transition in={showImage} timeout={500}>
      {status => (
        <Fragment>
          <Image src={currentImage.url} status={status} />
          <p style={{ textAlign: 'center' }}>{currentImage.url} - {status}</p>
        </Fragment>
      )}
    </Transition>
    <HiddenWrapper>
      {images && images.map((i, k) => (
        <Image key={k} src={i.url} />
      ))}
    </HiddenWrapper>
  </Fragment>
)

Images.propTypes = {
  currentImage: srcShape,
  showImage: PropTypes.bool,
  images: srcArray
}

export default Images
