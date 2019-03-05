import React from 'react'

import Lightbox from '@cratejoy/lightbox'

const imgs = [
  {
    url: 'https://picsum.photos/400/400',
    thumb: 'https://picsum.photos/100/100'
  },
  {
    url: 'https://picsum.photos/500/700',
    thumb: 'https://picsum.photos/100/100'
  },
  {
    url: 'https://picsum.photos/80/100',
    thumb: 'https://picsum.photos/100/100'
  },
  {
    url: 'https://picsum.photos/800/800',
    thumb: 'https://picsum.photos/100/100'
  },
]

const Example = () => (
  <Lightbox src={imgs} open>
    {({ toggleOpen }) => (
      <button onClick={toggleOpen}>Trigger Lightbox</button>
    )}
  </Lightbox>
)

export default Example
