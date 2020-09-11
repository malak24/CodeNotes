const express = require('express');
const cors = require('cors');
const PORT = 8080;
const app = express();
// const courseRoute = require('./courseRoute');
app.use(cors());
app.use(express.json());

//Request to verify if the serevr is working (enter localhost:8080 to get h1)
// app.get ('/', function(req, res) {
//   res.send ('<h1>Server is working</h1>')
// });



// app.use("/courses", courseRoute);

app.listen(PORT, () => {
  console.log('app is running on port 8080')
});


