import React from 'react'

import Lightbox from '@cratejoy/lightbox'

const imgs = [
  {
    url: 'https://picsum.photos/400/400?random',
    thumb: 'https://picsum.photos/100/100'
  },
  {
    url: 'https://picsum.photos/500/700?random',
    thumb: 'https://picsum.photos/100/100'
  },
  {
    url: 'https://picsum.photos/500/500?random',
    thumb: 'https://picsum.photos/100/100'
  },
  {
    url: 'https://picsum.photos/800/800?random',
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
