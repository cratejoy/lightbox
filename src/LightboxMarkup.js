import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Portal from 'react-minimalist-portal'

import {
  Overlay,
  Column,
  ArrowBtn,
  CloseBtn
} from './styles'

import {
  CloseArrow,
  NextArrow,
  PrevArrow
} from './components'

class LightboxMarkup extends PureComponent {
  render () {
    if (!this.props.showPortal) return false

    const {
      src,
      mouseIdle,
      triggerOpen
    } = this.props
    return (
      <Portal>
        <Overlay>
          <Column left>
            <ArrowBtn left hide={mouseIdle}>
              <PrevArrow />
            </ArrowBtn>
          </Column>

          <Column right>
            <ArrowBtn right hide={mouseIdle}>
              <NextArrow />
            </ArrowBtn>
          </Column>

          <CloseBtn hide={mouseIdle} onClick={triggerOpen}>
            <CloseArrow />
          </CloseBtn>

          <div>
            {src.map((img, index) => (
              <img key={index} src={img} />
            ))}
          </div>
        </Overlay>
      </Portal>
    )
  }

  static propTypes = {
    showPortal: PropTypes.bool.isRequired,
    src: PropTypes.arrayOf(
      PropTypes.string
    ).isRequired,
    mouseIdle: PropTypes.bool,
    triggerOpen: PropTypes.func
  }
}

export default LightboxMarkup
