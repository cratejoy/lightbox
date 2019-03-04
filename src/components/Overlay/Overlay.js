import React from 'react'
import PropTypes from 'prop-types'

import {
  Wrapper,
  CloseBtn,
  Background,
  InnerWrapper
} from './overlayStyles'

import {
  Close
} from '../../icons'

const Overlay = ({ dismiss, children, noCloseBtn }) => (
  <Wrapper>
    <Background onClick={dismiss}>
      {!noCloseBtn && (
        <CloseBtn>
          <Close fill='currentColor' />
        </CloseBtn>
      )}
    </Background>

    <InnerWrapper>
      {children}
    </InnerWrapper>
  </Wrapper>
)

Overlay.propTypes = {
  dismiss: PropTypes.func,
  children: PropTypes.node.isRequired,
  noCloseBtn: PropTypes.bool
}

export default Overlay
