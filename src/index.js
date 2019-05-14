const express = require('express');

const api = express();
api.use(express.static(__dirname + '/public'));

api.listen(3000, () => {
  console.log('API up and running!');
});

api.post('/add', (req, res) => {
 console.log('Post request received');
});

<<<<<<< HEAD
//api.get('/', (req, res) => {
//   console.log(req);
//   res.send('Hello, world!');
// });

=======
api.post('/add', (req, res) => {
 console.log(req.body);
 res.send('It works!');
});
>>>>>>> api

// const bodyParser = require('body-parser');

// api.use(bodyParser.json());

// api.use((req, res, next) => {
//  console.log('Hello');
//  next();
// });

// api.listen(3000, () => {
//   console.log('API up and running!');
// });

// api.get('/', (req, res) => {
//   console.log(req);
//   res.send('Hello, world!');
//   next();
// });



<<<<<<< HEAD
=======





>>>>>>> api
