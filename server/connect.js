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

router.get('/folders/:folder_id/:file_id/note', function (req, res) {
  connection.query(`SELECT file_content FROM files WHERE file_id = ${req.params.file_id}`, (error, results, fields) => {
    if (error) throw error;
    res.status(200).send(results)
  })
})

router.post('/folders/:folderId/:fileId/note', function (req, res) {
  connection.query(`UPDATE files SET file_content = '${req.body.fileContent}' WHERE file_id = ${req.params.fileId}`, (error, results, fields) => {
    if (error) throw error;
    res.status(200).send("Note saved !")
  })
})

router.post('/folders/:folderId/:fileId', function (req, res) {
  console.log(req.params.folderId);
  connection.query(`INSERT INTO files (folder_id, file_name) VALUES ('${req.params.folderId}', '${req.body.file_name}')`, (error, results, fields) => {
    if (error) throw error;
    res.status(200).send("File saved !")
  })
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