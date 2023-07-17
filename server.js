const express = require('express');
const app = express();
const port = 3000; // Choose the desired port number

app.get('/', (req, res) => {
    res.send('Hello, World!');
  });
  
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
  