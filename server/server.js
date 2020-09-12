const express = require('express');
const cors = require('cors');
const PORT = 8080;
const app = express();
const route = require('./connect') 

app.use(cors());
app.use(express.json());

app.use("/", route);
// Request to verify if the serevr is working (enter localhost:8080 to get h1)
// app.get ('/', function(req, res) {
//   res.send ('<h1>Server is working</h1>')
// });


app.listen(PORT, () => {
  console.log('app is running on port 8080')
});


