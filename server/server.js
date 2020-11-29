const express = require('express');
const cors = require('cors');
const PORT = 8080;
const app = express();
const route = require('./connect');

app.use(cors());
app.use(express.json());

app.use("/", route);

app.listen(PORT, () => {
  console.log('app is running on port 8080')
});


