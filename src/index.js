const express = require('express');
<<<<<<< HEAD

// const bodyParser = require('body-parser');

const api = express();
api.use(express.static(__dirname + '/public'));

=======
// const bodyParser = require('body-parser');

const api = express();
// api.use(express.static(__dirname + '/public'));
>>>>>>> api
// api.use(bodyParser.json());

// api.use((req, res, next) => {
//  console.log('Hello');
//  next();
// });

// api.listen(3000, () => {
//   console.log('API up and running!');
// });

api.get('/', (req, res) => {
  console.log(req);
  res.send('Hello, world!');
});

<<<<<<< HEAD
api.post('/add', (req, res) => {
 res.send('It works!');
});
=======
// api.post('/add', (req, res) => {
//  res.send('It works!');
// });
>>>>>>> api



