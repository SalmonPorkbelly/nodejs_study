'use strict';

const express = require('express');

// 상수
const PORT = 8080;
const HOST = '0.0.0.0';

// 앱
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.post('/name', (req, res) => {
  const name = req.body.name;
  res.send('my name is ' + name);
})

app.get('/user/:id', (req, res) => {
  const user = req.params.id;
  res.send('my user is ' + user)
})

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});