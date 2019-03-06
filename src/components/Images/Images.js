import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { srcShape, srcArray } from '../../sharedPropTypes'
import {
  Image,
  PreloadWrapper
} from './imagesStyles'

const Images = ({ currentImage, images, showImage }) => (
  <Fragment>
    <Image src={currentImage.url} />
    <PreloadWrapper>
      {images && images.map((i, k) => (
        <Image key={k} src={i.url} />
      ))}
    </PreloadWrapper>
  </Fragment>
)

Images.propTypes = {
  currentImage: srcShape,
  showImage: PropTypes.bool,
  images: srcArray
}

export default Images
