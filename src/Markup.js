import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Portal from 'react-minimalist-portal'

import {
  Image
} from './styles'

import {
  Overlay
} from './components'

class LightboxMarkup extends PureComponent {
  render () {
    if (!this.props.showPortal) return false

    const {
      src,
      index
    } = this.props

    const currentImg = src[index]
    return (
      <Portal>
        <Overlay>
          <Image src={currentImg} show />
        </Overlay>
      </Portal>
    )
  }

  static propTypes = {
    showPortal: PropTypes.bool.isRequired,
    src: PropTypes.arrayOf(
      PropTypes.string
    ).isRequired,
    // mouseIdle: PropTypes.bool,
    // triggerOpen: PropTypes.func,
    index: PropTypes.number
  }
}

export default LightboxMarkup
