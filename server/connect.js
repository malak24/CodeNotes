const { response } = require("express");
const express = require("express");
const router = express.Router();
const mysql = require("mysql"); //importing mysql module

// const host = process.env.DB_HOST ? process.env.DB_HOST : "localhost"
// const connection = mysql.createConnection({
//   host: host,
//   user: 'root',
//   password: '',
//   database: 'CodeNotes',
//   port : 3306,
//   insecureAuth : true
// });

// connection.connect(function (error) {
//   if (error) throw error;
// });

const host = process.env.DB_HOST ? process.env.DB_HOST : "localhost";
const db_config = {
  host: host,
  user: "root",
  password: "",
  database: "CodeNotes",
  port: 3306,
  insecureAuth: true,
};

let connection;

function handleDisconnect() {
  connection = mysql.createConnection(db_config);

  connection.connect(function (err) {
    if (err) {
      console.log("error when connecting to db:", err);
      setTimeout(handleDisconnect, 2000);
    }
  });

  connection.on("error", function (err) {
    console.log("db error", err);
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      handleDisconnect();
    } else {
      throw err;
    }
  });
}

handleDisconnect();

//GET ALL DATA FROM NOTES TABLE (DATABASE)
router.get("/data", function (req, res) {
  connection.query(
    "SELECT folders.folder_id , folders.folder_name, notes.note_id, notes.note_title, notes.note_content FROM folders LEFT JOIN notes ON folders.folder_id = notes.folder_id;",
    (error, results) => {
      const data = {};
      console.log(results);

      for (let note of results) {
        const note_details = {
          note_id: note.note_id,
          note_title: note.note_title,
          note_content: note.note_content,
        };

        console.log("note : ", note.note_id);
        if (note.folder_id in data) {
          data[note.folder_id].notes.push(note_details);
        } else {
          let item = {
            folder_id: note.folder_id,
            folder_name: note.folder_name,
            notes: [note_details],
          };
          data[note.folder_id] = item;
        }
      }

      if (error) throw error;
      res.status(200).send(data);
    }
  );
});

//CREATE A NEW FOLDER
router.post("/folders", function (req, res) {
  connection.query(
    `INSERT INTO folders (folder_name) 
     VALUES ('${req.body.folder_name}');`,
    (error, results, fields) => {
      if (error) throw error;
      res.status(200).send("Folder created successfully");
    }
  );
});

//UPDATE NOTE TITLE
router.put("/folders/:folderId/:noteId", function (req, res) {
  connection.query(
    `UPDATE notes SET note_title = '${req.body.note_title}' WHERE note_id = '${req.params.noteId}';`,
    (error, results, fields) => {
      if (error) throw error;
      res.status(200).send("Note title updated");
    }
  );
});

// UPDATE NOTE CONTENT OF A SPECIFIC NOTE
router.put("/folders/:folderId/:noteId/note", function (req, res) {
  connection.query(
    `UPDATE notes SET note_content = "${req.body.note_content}" WHERE note_id = ${req.params.noteId}`,
    (error, results, fields) => {
      if (error) throw error;
      res.status(200).send("Note saved !");
    }
  );
});

// OPEN A SPECIFIC NOTE
router.get("/notes/:noteId", function (req, res) {
  connection.query(
    `SELECT * FROM notes WHERE note_id = ${req.params.noteId}`,
    (error, results, fields) => {
      if (error) throw error;
      res.status(200).send(results);
    }
  );
});

//CREATE A NEW NOTE
router.post("/folders/:folderId/:noteId", function (req, res) {
  connection.query(
    `INSERT INTO notes (folder_id, note_title) VALUES ('${req.params.folderId}', '${req.body.note_title}')`,
    (error, results, fields) => {
      if (error) throw error;
      res.status(200).send("Note created !");
    }
  );
});

// GET NOTES OF A SPECIFIC FOLDER
router.get("/folders/:folderId/notes", function (req, res) {
  connection.query(
    `SELECT * FROM notes WHERE folder_id = ${req.params.folderId}`,
    (error, results, fields) => {
      if (error) throw error;
      res.status(200).send(results);
    }
  );
});

// DELETE FOLDER
router.put("/folders/:folderId", function (req, res) {
  connection.query(
    `DELETE FROM folders WHERE folder_id = ${req.params.folderId}`,
    (error, results, fields) => {
      if (error) throw error;
      res.status(200).send("Folder deleted !");
    }
  );
});

// DELETE NOTE
router.put("/notes/:noteId", function (req, res) {
  connection.query(
    `DELETE FROM notes WHERE note_id = ${req.params.noteId}`,
    (error, results, fields) => {
      if (error) throw error;
      res.status(200).send("Note deleted !");
    }
  );
});

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
      return console.log("error:" + err.message);
    }
    console.log("Database connection has ended");
  });
}

module.exports = router;
