import React from 'react'
import PropTypes from 'prop-types'

const CaretRight = ({ fill = '#fff', ...props }) => (
  <svg width='11' height='16' viewBox='0 0 11 16' fill={fill} {...props}>
    <polygon points='1302.143 617 1299 620.2 1303.714 625 1299 629.8 1302.143 633 1310 625' transform='translate(-1299 -617)' />
  </svg>
)

CaretRight.propTypes = {
  fill: PropTypes.string
}

export default CaretRight
