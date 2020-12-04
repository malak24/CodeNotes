const express = require('express');
const router = express.Router();
const mysql = require('mysql'); //importing mysql module

const connection = mysql.createConnection({ //create connection between node js and the database
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'CodeNotes'
});

connection.connect(function (error) {
  if (error) throw error;
});

//FOLDERS
router.get('/folders', function (req, res) {
  connection.query('SELECT * FROM folders', (error, results, fields) => {
    if (error) throw error;
    console.log('Folders : ', results); //use results[0].folder_id for specific data
    res.status(200).send(results)
  });
});

// router.post('/folders', function (req, res) {
//   connection.query(`SELECT LOCATE('${req.body.search}', folder_name) FROM folders;`, (error, results, fields) => {
//       if (error) throw error;
//       res.status(200).send(results)
//     })
// })

router.post('/folders/:folderId', function (req, res) {
  connection.query(
    `INSERT INTO folders (folder_name) 
     VALUES ('${req.body.folder_name}')`, (error, results, fields) => {
    if (error) throw error;
    res.status(200).send("Folder created successfully")
  })
})

router.get('/folders/:folderId/notes', function (req, res) {
  connection.query(`SELECT * FROM notes WHERE folder_id = ${req.params.folderId}`, (error, results, fields) => {
    if (error) throw error;
    res.status(200).send(results)
  });
});

router.get('/folders/:folder_id/:note_id/note', function (req, res) {
  connection.query(`SELECT note_content FROM notes WHERE note_id = ${req.params.note_id}`, (error, results, fields) => {
    if (error) throw error;
    res.status(200).send(results)
  })
})

router.post('/folders/:folderId/:noteId/note', function (req, res) {
  connection.query(`UPDATE notes SET note_content = '${req.body.noteContent}' WHERE note_id = ${req.params.noteId}`, (error, results, fields) => {
    if (error) throw error;
    res.status(200).send("Note saved !")
  })
})

router.post('/folders/:folderId/:noteId', function (req, res) {
  console.log(req.params.folderId);
  connection.query(`INSERT INTO notes (folder_id, note_title) VALUES ('${req.params.folderId}', '${req.body.note_title}')`, (error, results, fields) => {
    if (error) throw error;
    res.status(200).send("Note saved !")
  })
});

router.get('/notes', function(req, res) {
  connection.query(`SELECT note_name FROM notes;` , (error, results, fields) => {
    if (error) throw error;
    res.status(200).send(results)
  })
})

router.get('/notes', function(req, res) {
  connection.query(`SELECT note_content FROM notes;` , (error, results, fields) => {
    if (error) throw error;
    res.status(200).send(results)
  })
})

// router.post('/notes', function(req, res) {
//   connection.query(`SELECT LOCATE('${req.body.search}', note_name) FROM notes;` , (error, results, fields) => {
//     if (error) throw error;
//     res.status(200).send(results)
//   })
// })

// router.post('/notes', function(req, res) {
//   console.log(req.body)
//   connection.query(`SELECT LOCATE('${req.body.search}', note_content) FROM notes;` , (error, results, fields) => {
//     if (error) throw error;
//     res.status(200).send(results)
//   })
// })

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