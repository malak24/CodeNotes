const express = require('express');
const router = express.Router();
const mysql = require('mysql'); //importing mysql module

const connection = mysql.createConnection({ //create connection between node js and the database
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'CodeNotes'
});

// start connection between nodeJs and the db
connection.connect(function (error) {
  if (error) throw error;
});

// const folder_id;


// Endpoint to get all folders
router.get('/folders', function (req, res) {
  connection.query('SELECT * FROM folders', (error, results, fields) => {
    if (error) throw error;
    console.log('These are all folders ', results); //use results[0].folder_id for specific data
    res.status(200).send(results)
  });
});


//Endpoint to get a specific folder with all its files
router.get('/:folderId', function (req, res) {
  connection.query(`SELECT * FROM files WHERE folder_id = ${folder_id}`, (error, results, fields) => {
    if (error) throw error;
    console.log('The selected folder is : ', results);
    res.status(200).send(results)
  });
});


//Post a new folder with its id and create a default file to it
router.post('/:folderId', function (req, res) {
    console.log(req.body)
    // courses.push(req.body)
    res.status(200).send("Folder created successfully")
})


// Get the note of a certain file on click 
router.get('/:folderId/:fileId', function (req, res) {
  connection.query(`SELECT * FROM files WHERE file_id = ${folder_id}`, (error, results, fields) => {
    if (error) throw error;
    console.log('The selected file is : ', results); //use results[0].folder_id for specific data
    res.status(200).send(results)
  });
});


router.post('/:folderId/:fileId', function (req, res) {
    console.log(req.body)
    courses.push(req.body)
    res.status(200).send("File created successfully")
});


// end the connection betweem nodeJs and db
function endconnection() {
  connection.end(function(error) {
    if (error) {
      return console.log('error:' + err.message);
    }
    console.log('Database connection has ended');
  });
}

module.exports = router;