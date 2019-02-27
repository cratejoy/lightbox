import React, { PureComponent } from 'react'
import Portal from 'react-minimalist-portal';

class LightboxMarkup extends PureComponent {
  render () {
    return (
      <Portal>
        <h1>Lightbox in a portal</h1>
      </Portal>
    )
  }
}

export default LightboxMarkup
