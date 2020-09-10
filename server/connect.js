const express = require('express');
const mysql = require('mysql'); //importing mysql module

const connection = mysql.createConnection({ //create connection between node js and the database
  host : localhost,
  user: 'root',
  password: '',
  database : 'CodeNotes'
});

connection.connect(function(error) { //call the connect method
  if(error) {
    return console.error('error : ' + error.message);
  } else {
    console.log('Connected to MySQL server');
  }
});

connection.end(function(error) {
  if (error) {
    return console.log('error:' + err.message);
  }
  console.log('Close the database connection.');
});


app.get('/', function(req, res) {
  // connection.query('SELECT * FROM tableName ....') //whenever this query is done, the next function will be called
  if(!!error) {
    console.log('Error in query');
  } else {
    console.log(res);
    // console.log(data that we want to console from the DB);
    //res.send(the data that we want to get from the db)
  }
})

app.listen(3306);

/*go to localhost:3306 and this should return the data that was required 
from the db, the db data will be displayed in the cmd teminal when we console.log*/