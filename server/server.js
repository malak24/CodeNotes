const express = require('express');
const PORT = 8080;
const app = express();
const route = require('./connect');

app.use(express.json());

app.use("/", route);

app.listen(PORT, () => {
  console.log('app is running on port 8080')
});


