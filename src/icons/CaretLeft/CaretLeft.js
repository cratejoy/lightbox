import React from 'react'
import styled, {css} from 'styled-components'
import PropTypes from 'prop-types'

const Caret = ({ className }) => (
  <svg width='15' height='20' viewBox='0 0 15 20' className={className}>
    <defs>
      <path id='b' d='M5 12l7.9 8 3.1-3.2-4.7-4.8L16 7.2 12.9 4z' />
      <filter id='a' width='154.5%' height='137.5%' x='-27.3%' y='-18.8%' filterUnits='objectBoundingBox'>
        <feOffset in='SourceAlpha' result='shadowOffsetOuter1' />
        <feGaussianBlur in='shadowOffsetOuter1' result='shadowBlurOuter1' stdDeviation='1' />
        <feColorMatrix in='shadowBlurOuter1' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.86175153 0' />
      </filter>
    </defs>
    <g fill='none' transform='translate(-3 -2)'>
      <use fill='#000' filter='url(#a)' xlinkHref='#b' />
      <use fill='#FFF' xlinkHref='#b' />
    </g>
  </svg>
)

Caret.propTypes = {
  className: PropTypes.string
}

const CaretLeft = styled(Caret)`
  ${({rotated}) => rotated && css`
    transform: rotate(180deg);
  `}
`

export default CaretLeft
