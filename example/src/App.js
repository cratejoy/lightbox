import React from 'react'

import Lightbox from '@cratejoy/lightbox'

const imgs = [
  {
    url: 'https://picsum.photos/1200/1200?random',
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
    {({ toggleOpen, openByIndex }) => (
      <div>
        <button onClick={toggleOpen}>Trigger Lightbox</button>
        <button onClick={openByIndex(2)}>Open the 3rd img</button>
        <button onClick={openByIndex(0)}>Open the first img</button>
      </div>
    )}
  </Lightbox>
)

export default Example
