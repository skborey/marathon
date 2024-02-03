### Lazy Load

It is the React API, that lets defer loading component’s code until it is rendered for the first time.

#### Example

```js
<>
  <button onClick={showLazyComponent}>Lazy Detail</button>
  {toggle && (
    <Suspense fallback={<div>Loading...</div>}>
      <Detail1 />
    </Suspense>
  )}
  {toggle && <Detail2 />}
</>
```

- In the example code, when application load at the first time, both `Detail1` and `Detail2` are not rendered yet. Both are rendered when user click `Show Detail` button.
- However, the different in the application already loaded is that:
  - `Detail1` code is not in the client side yet. The code is in separated file _src_component_lazy-load_Detail1_jsx.chunk.js_ which is still in the server.
  - `Detail2` code is already in the client side. The code is in _bundle.js_ as we see in the image.
- When user clicks the "Show Detail" button, both components are needed to render. Thus:
  - `Detail1` is downloaded. Meanwhile, the fallback component will be rendered instead, until "Detail1" is completed download and render later on.
  - `Detail2` render immediately.

![Lazy Load example](../../../doc/lazy-load.png)
