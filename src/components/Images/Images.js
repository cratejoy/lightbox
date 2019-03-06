import React, { Fragment } from 'react'
import { srcShape, srcArray } from '../../sharedPropTypes'
import { Transition } from 'react-transition-group'
import {
  Image,
  HiddenWrapper
} from './imagesStyles'

const Images = ({ currentImage, images }) => (
  <Fragment>
    <Transition in timeout={500} appear>
      {status => (
        <Fragment>
          <Image src={currentImage.url} status={status} />
          <p style={{ textAlign: 'center' }}>{status}</p>
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
  images: srcArray
}

export default Images
