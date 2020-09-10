const express = require('express');
const PORT = 8080;
const app = express();

app.listen(PORT, () => {
  console.log('app is running on port 8080')
});