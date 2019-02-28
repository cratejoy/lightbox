import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Portal from 'react-minimalist-portal'

class LightboxMarkup extends PureComponent {
  render () {
    if (!this.props.showPortal) return false

    const { src } = this.props
    return (
      <Portal>
        <h1>Lightbox in a portal</h1>
        {src.map((img, index) => (
          <img key={index} src={img} />
        ))}
      </Portal>
    )
  }

  static propTypes = {
    showPortal: PropTypes.bool.isRequired,
    src: PropTypes.arrayOf(
      PropTypes.string
    ).isRequired
  }
}

export default LightboxMarkup
