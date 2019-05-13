const express = require('express');

// const bodyParser = require('body-parser');

const api = express();
api.use(express.static(__dirname + '/public'));

api.listen(3000, () => {
  console.log('API up and running!');
});

api.get('/', (req, res) => {
  console.log(req);
  res.send('Hello, world!');
});




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


// api.post('/add', (req, res) => {
//  res.send('It works!');
// });




>>>>>>> 2882554bd0dc424a0bdea0496e4165a085a1927c
