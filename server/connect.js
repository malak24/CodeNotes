const { response } = require('express');
const express = require('express');
const router = express.Router();
const mysql = require('mysql'); //importing mysql module
const data = [];

const connection = mysql.createConnection({ //create connection between node js and the database
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'CodeNotes'
});

connection.connect(function (error) {
  if (error) throw error;
});


//GET ALL DATA FROM NOTES TABLE (DATABASE)
router.get('/data', function (req, res) {
  connection.query('SELECT * FROM notes', (error, results) => {

    for (let i = 0; i < results.length; i++) {

      item = {
        folder_id: results[i].folder_id,
        folder_name: `${results[i].folder_name}`,
        notes: [
          {
            note_id: results[i].note_id,
            note_title: `${results[i].note_title}`,
            note_content: `${results[i].note_content}`
          }
        ]
      }

      data.push(item);
    }

    console.log(data[0].notes);

    if (error) throw error;
    res.status(200).send(results)
  });
});



// SEARCH FOR A FOLDER BY FOLDER NAME
// router.post('/folders', function (req, res) {
//   connection.query(`SELECT LOCATE('${req.body.search}', folder_name) FROM folders;`, (error, results, fields) => {
//       if (error) throw error;
//       res.status(200).send(results)
//     })
// })



//CREATE A NEW FOLDER
router.post('/folders/:folderId', function (req, res) {
  connection.query(
    `INSERT INTO folders (folder_name) 
     VALUES ('${req.body.folder_name}')`, (error, results, fields) => {
    if (error) throw error;
    res.status(200).send("Folder created successfully")
  })
})



// GET NOTES OF A SPECIFIC FOLDER
router.get('/folders/:folderId/notes', function (req, res) {
  connection.query(`SELECT * FROM notes WHERE folder_id = ${req.params.folderId}`, (error, results, fields) => {
    if (error) throw error;
    res.status(200).send(results)
  });
});



// GET NOTE CONTENT OF A SPECIFIC NOTE
router.get('/folders/:folder_id/:note_id/note', function (req, res) {
  connection.query(`SELECT note_content FROM notes WHERE note_id = ${req.params.note_id}`, (error, results, fields) => {
    if (error) throw error;
    res.status(200).send(results)
  })
})



// ADD CONTENT TO A SPECIFIC NOTE
router.post('/folders/:folderId/:noteId/note', function (req, res) {
  connection.query(`UPDATE notes SET note_content = '${req.body.noteContent}' WHERE note_id = ${req.params.noteId}`, (error, results, fields) => {
    if (error) throw error;
    res.status(200).send("Note saved !")
  })
})



//CREATE A NEW NOTE
router.post('/folders/:folderId/:noteId', function (req, res) {
  connection.query(`INSERT INTO notes (folder_id, note_title) VALUES ('${req.params.folderId}', '${req.body.note_title}')`, (error, results, fields) => {
    if (error) throw error;
    res.status(200).send("Note created !")
  })
});



//GET LIST OF GENERAL NOTES TITLES
router.get('/notes', function (req, res) {
  connection.query(`SELECT note_title FROM notes;`, (error, results, fields) => {

    if (error) throw error;
    res.status(200).send(results)
  })
})



//GET ALL GENERAL NOTES CONTENTS
router.get('/notes', function (req, res) {
  connection.query(`SELECT note_content FROM notes;`, (error, results, fields) => {
    if (error) throw error;
    res.status(200).send(results)
  })
})



// SEARCH FOR A NOTE BY TITLE
// router.post('/notes', function(req, res) {
//   connection.query(`SELECT LOCATE('${req.body.search}', note_title) FROM notes;` , (error, results, fields) => {
//     if (error) throw error;
//     res.status(200).send(results)
//   })
// })



// SEARCH FOR A NOTE BY NOTE CONTENT
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