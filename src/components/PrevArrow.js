import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class PrevArrow extends PureComponent {
  render () {
    const { fill, ...props } = this.props
    return (
      <svg fill={fill} width='36' height='36' viewBox='0 0 36 36' {...props}>
        <path d='M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z' />
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

export default PrevArrow
