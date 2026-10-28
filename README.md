# @abmrifat1/js-ui-component-library

A reusable and customizable React Button component library.

## Installation

```bash
npm install @abmrifat1/js-ui-component-library
```

## Usage
---
### Button

```js
import { Button } from '@abmrifat1/js-ui-component-library';

function App() {
  return (
    <Button 
      color="blue" 
      size="small" 
      outline="primary" 
      align="center"
      onClick={() => console.log('Clicked!')}
    >
      Submit
    </Button>
  );
}
```

## Props

| Prop             | Type                        | Default      |  Description             |
| ---------------- | --------------------------- | ------------ | ------------------------ |
| `align`          | 'left', 'center', 'right'	 | 'center'     | Position of the button   |
| `size`           | 'small', 'large', 'full'	   | 'small'      | Size of the button       |
| `color`          | 'blue', 'red', 'white'	     | 'blue'	      | Background color         |
| `outline`        | 'primary', 'default'	       | 'default'	  | Border style             |
| `onClick`        | function	                   | undefined	   | Click handler           |
---
