const express = require('express');
const mysql = require('mysql');

const connection = mysql.createConnection({
  host : localhost,
  user: 'malak',
  password: '5684999',
  database : 'codenotesDB'
});

connection.connect(function(error) {
  if(!!error) {
    console.log('Error');
  } else {
    console.log('Connected');
  }
});

app.get('/', function(req, res) {
  //about mysql
  // connection.query('SELECT * FROM tableName ....') //whenever this query is done, the next function will be called
  if(!!error) {
    console.log('Error in query');
  } else {
    // console.log(data that we want to console from the DB);
    //res.send(the data that we want to get from the db)
  }
})

app.listen(3306);

//node script.js to run the server
/*go to localhost:3306 and this should return the data that was required 
from the db, the db data will be displayed in the cmd teminal when we console.log*/