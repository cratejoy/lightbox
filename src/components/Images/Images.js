import React, { Fragment } from 'react'
import { srcShape, srcArray } from '../../sharedPropTypes'
import { Transition } from 'react-transition-group'
import {
  Image,
  HiddenWrapper
} from './imagesStyles'

const Images = ({ currentImage, images }) => currentImage
  ? (<Image status='entered' src={currentImage.url} />)
  : (
    <Fragment>
      {images && images.map((img, key) => (
        <Transition key={key} in={img.currentImage} timeout={500} appear unmountOnExit>
          {status => (
            <Fragment>
              <Image src={img.url} status={status} />
              <p style={{ textAlign: 'center' }}>{img.url} - {status}</p>
            </Fragment>
          )}
        </Transition>
      ))}
      <HiddenWrapper>
        {images && images.filter(i => !i.currentImage).map((i, k) => (
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
