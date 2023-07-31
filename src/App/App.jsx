import React from 'react';
import classes from './style.module.css';
import Box from '../Box';

const App = () => (
  <div className={classes.root}>
    {Array(100)
      .fill()
      .map((_, i) => (
        <Box key={i} n={i}>
          BOX CONTENT {i + 1}
        </Box>
      ))}
  </div>
);

export default App;
