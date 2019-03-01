import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class NextArrow extends PureComponent {
  render () {
    const { fill, ...props } = this.props
    return (
      <svg fill={fill} width='36' height='36' viewBox='0 0 24 24' {...props}>
        <path d='M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z' />
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

export default NextArrow
