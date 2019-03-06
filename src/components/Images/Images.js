import React, { Fragment } from 'react'
import { srcShape, srcArray } from '../../sharedPropTypes'
// import { Transition } from 'react-transition-group'
import {
  Image
} from './imagesStyles'

const Images = ({ currentImage, images }) => currentImage
  ? (<Image status='entered' src={currentImage.url} />)
  : (
    <Fragment>
      {images && images.map((img, key) => (
        <Image key={key} src={img.url} status='entered' />
      ))}
    </Fragment>
  )

Images.propTypes = {
  currentImage: srcShape,
  images: srcArray
}

export default Images
