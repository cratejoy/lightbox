import React from 'react'
import PropTypes from 'prop-types'

import {
  Wrapper,
  CloseBtn,
  Background,
  OuterWrapper,
  InnerWrapper,
  StyledClose
} from './overlayStyles'

const Overlay = ({ dismiss, children, noCloseBtn }) => (
  <Wrapper>
    <OuterWrapper>
      <InnerWrapper>
        {children}
      </InnerWrapper>
    </OuterWrapper>

    <Background onClick={dismiss}>
      {!noCloseBtn && (
        <CloseBtn>
          <StyledClose />
        </CloseBtn>
      )}
    </Background>
  </Wrapper>
)

Overlay.propTypes = {
  dismiss: PropTypes.func,
  children: PropTypes.node.isRequired,
  noCloseBtn: PropTypes.bool
}

export default Overlay
