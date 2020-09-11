const express = require('express');
const router = express.Router();
const mysql = require('mysql'); //importing mysql module

const connection = mysql.createConnection({ //create connection between node js and the database
  host : localhost,
  user: 'root',
  password: '',
  database : 'CodeNotes'
});


//start connection between nodeJs and the db
connection.connect(function(error) { //call the connect method
  if(error) {
    return console.error('error : ' + error.message);
  } else {
    console.log('Connected to MySQL server');
  }
});


//end the connection betweem nodeJs and db
connection.end(function(error) {
  if (error) {
    return console.log('error:' + err.message);
  }
  console.log('Close the database connection.');
});


app.get('/', function(req, res) {
    connection.query('DESCRIBE folders; DESCRIBE files');
  if(!!error) {
    console.log('Error in query');
  } else {
    console.log(res); //console database data requested
    //res.send(the data that we want to get from the db)
  }
})

//on page render if the data is empty, render a folder and its file by default

//app.get '/'             =>  all folders + all files of each folder
//app get '/folderId'     =>  a specific folder with all its files on folder click
//app.post '/'            =>  creating a folder will create a file and add both to data

//app.get '/files'        =>  all files of a certain folder id
//app.post '/files'       =>  post a file
//app.get '/files/fileId  =>  get the note of a certain file on click 

app.listen(3306);

module.exports = router;