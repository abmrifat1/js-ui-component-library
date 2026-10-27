import React from 'react';
import { Button } from './index';

function App() {
  return (
    <div style={{ padding: '50px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <h2>My Button Library Playground</h2>
      
      <Button color="blue" outline="primary" size="small" align="center">
        Primary Blue
      </Button>
      
      <Button color="red" outline="default" size="large" align="left">
        Large Red
      </Button>
      
      <Button color="white" outline="primary" size="full">
        Full White
      </Button>

      <Button color="white" outline="default" size="small" align="right">
        Cancel
      </Button>
    </div>
  );
}

export default App;