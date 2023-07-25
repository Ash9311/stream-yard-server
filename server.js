const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const app = express();
const port = 3000; // Choose the desired port number
const secretKey = '';

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello, World!');
  });
  
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
  