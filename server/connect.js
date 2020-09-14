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

// Endpoint to get all folders
router.get('/folders', function (req, res) {
  connection.query('SELECT * FROM folders', (error, results, fields) => {
    if (error) throw error;
    console.log('These are all folders ', results); //use results[0].folder_id for specific data
    res.status(200).send(results)
  });
});

router.post('/folders/:folderId', function (req, res) {
  connection.query(`INSERT INTO folders (folder_name) VALUES ('${req.body.folder_name}')`, (error, results, fields) => {
    if (error) throw error;
    res.status(200).send("Folder created successfully")
  })
})

router.get('/folders/:folderId/files', function (req, res) {
  connection.query(`SELECT * FROM files WHERE folder_id = ${req.params.folderId}`, (error, results, fields) => {
    if (error) throw error;
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





router.post('/:folderId/:fileId', function (req, res) {
  console.log(req.body)
  courses.push(req.body)
  res.status(200).send("File created successfully")
});


// end the connection betweem nodeJs and db
function endconnection() {
  connection.end(function (error) {
    if (error) {
      return console.log('error:' + err.message);
    }
    console.log('Database connection has ended');
  });
}

module.exports = router;