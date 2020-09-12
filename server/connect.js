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


// connection.query("DESCRIBE folders; DESCRIBE files" , (error, response)  {
//     if (error) throw error;

//     console.log(response);
// });

router.get('/', function (req, res) {
  connection.query('SELECT * FROM folders', (error, results, fields) => {
    if (error) throw error;
    console.log('Result is : ', results[0]); //use results[0].folder_id for specific data
    res.status(200).send(results)
  });
});



//end the connection betweem nodeJs and db
// connection.end(function(error) {
//   if (error) {
//     return console.log('error:' + err.message);
//   }
//   console.log('Close the database connection.');
// });




//on page render if the data is empty, render a folder and its file by default

//app.get '/'             =>  all folders + all files of each folder
//app get '/folderId'     =>  a specific folder with all its files on folder click
//app.post '/'            =>  creating a folder will create a file and add both to data

//app.get '/files'        =>  all files of a certain folder id
//app.post '/files'       =>  post a file
//app.get '/files/fileId  =>  get the note of a certain file on click 

// app.listen(3306);

// module.exports = router;

// router.get("/:courseId", (req, res) => {
//     console.log(req.params);
//     let obj = courses.find(course => course.name === req.params.courseId);
//     if (!obj) {
//         res.status(404).send("Course not found")
//     }
//     res.status(200).send(obj)
// })

// router.post("/", (req, res) => { 
//     console.log(req.body)
//     courses.push(req.body)
//     res.status(200).send("data posted successfully")
// })

// router.get('/', (req, res) => {
//   console.log(videosData);
//   res.status(200).send(videosData);
// });


// router.get('/:videoId', (req, res) => { //responds with specific video
//   const currVideoId = req.params.videoId;
//   const currVideo = videosData.find(video => video.id === currVideoId);
//   if (!currVideo) {
//     res.status(400).send('Video not found!')
//   }
//   res.status(200).send(currVideo)
// })

module.exports = router;