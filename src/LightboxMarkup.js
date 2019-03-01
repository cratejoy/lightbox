import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Portal from 'react-minimalist-portal'

import {
  Overlay,
  Column,
  ArrowBtn,
  CloseBtn,
  Wrapper,
  Image
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
      triggerOpen,
      index
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

          <Wrapper>
            {src.map((img, imgIndex) => (
              <Image key={imgIndex} src={img} open={index === imgIndex} />
            ))}
          </Wrapper>
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
    triggerOpen: PropTypes.func,
    index: PropTypes.number
  }
}

export default LightboxMarkup
