import React from 'react'
import PropTypes from 'prop-types'
import Portal from 'react-minimalist-portal'

import {
  Image
} from './styles'

import {
  Overlay
} from './components'

const LightboxMarkup = ({
  showPortal, src,
  toggleOpen, index
}) => {
  if (!showPortal) return false
  const currentImg = src[index]
  return (
    <Portal>
      <Overlay dismiss={toggleOpen}>
        <Image src={currentImg} show />
      </Overlay>
    </Portal>
  )
}

LightboxMarkup.propTypes = {
  showPortal: PropTypes.bool.isRequired,
  src: PropTypes.arrayOf(
    PropTypes.string
  ).isRequired,
  // mouseIdle: PropTypes.bool,
  toggleOpen: PropTypes.func,
  index: PropTypes.number
}

export default LightboxMarkup
