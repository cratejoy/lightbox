import PropTypes from 'prop-types'

export const srcShape = PropTypes.shape({
  url: PropTypes.string.isRequired,
  thumb: PropTypes.string
}).isRequired

export const srcArray = PropTypes.arrayOf(srcShape).isRequired
