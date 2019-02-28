import React from 'react'

import Lightbox from '@cratejoy/lightbox'

const imgs = [
  'https://picsum.photos/400/400',
  'https://picsum.photos/400/400',
  'https://picsum.photos/400/400',
  'https://picsum.photos/400/400'
]

const Example = () => (
  <Lightbox src={imgs} open>
    {({ triggerOpen }) => (
      <button onClick={triggerOpen}>Trigger Lightbox</button>
    )}
  </Lightbox>
);

export default Example;
