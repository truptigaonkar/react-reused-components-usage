# React Reused Components Usage

React project created using all the components from React reused components library (https://github.com/truptigaonkar/react-reused-components) 
** npm package: ** https://www.npmjs.com/package/react-reused-components

## Usage

`React Reused Components` are served as an [npm package](https://www.npmjs.com/package/react-reused-components).

How to Install as an NPM module

```
npm install react-reused-components
```

### Example

Button: solid

```jsx
import React from 'react';
import { Button } from 'react-reused-components';

function App() {
  return (
    <Button buttonStyle='btn--primary--solid' buttonSize='block'>
      Solid Button
    </Button>
  );
}

export default App;
```

Button: outline

```jsx
import React from 'react';
import { Button } from 'react-reused-components';

function App() {
  return (
    <Button buttonStyle='btn--secondary--outline' buttonSize='block'>
      Outline Button
    </Button>
  );
}

export default App;
```
