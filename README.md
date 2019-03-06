# @cratejoy/lightbox

> styled-components friendly lightbox with portals

[![NPM](https://img.shields.io/npm/v/@cratejoy/lightbox.svg)](https://www.npmjs.com/package/@cratejoy/lightbox) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @cratejoy/lightbox
```

## Usage

```jsx
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
```

## License

MIT © [Cratejoy](https://github.com/cratejoy)
