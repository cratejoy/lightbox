A fullscreen overlay, will freeze the scroll. Can be opted out with escape

```jsx
initialState = { open: false };

<div>
  <Button onClick={() => setState({ open: true })}>Open Modal</Button>

  {state.open &&
    <Overlay dismiss={() => setState({ open: false })}>
      <p>I'm an open overlay</p>
    </Overlay>
    }
</div>
```

```jsx
initialState = { open: false };

<div>
  <Button onClick={() => setState({ open: true })}>No Close Button</Button>

  {state.open &&
    <Overlay noCloseBtn dismiss={() => setState({ open: false })}>
      <p>I'm an open overlay</p>
    </Overlay>
    }
</div>
```
