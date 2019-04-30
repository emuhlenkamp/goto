const express = require('express');

const api = express();
api.listen(3000, () => {
  console.log('API up and running!');
});

api.get('/', (req, res) => {
  console.log(req);
  res.send('Hello, world!');
});