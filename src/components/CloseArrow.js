import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class CloseArrow extends PureComponent {
  render () {
    const { fill, ...props } = this.props
    return (
      <svg fill={fill} width='24' height='24' viewBox='0 0 24 24' {...props}>
        <path d='M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z' />
      </svg>
    )
  }

  static propTypes = {
    fill: PropTypes.string
  }

  static defaultProps = {
    fill: '#fff'
  }
}

export default CloseArrow
