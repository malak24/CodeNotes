//in app.js
// SEARCH FOR A FOLDER BY FOLDER NAME
// router.post('/folders', function (req, res) {
//   connection.query(`SELECT LOCATE('${req.body.search}', folder_name) FROM folders;`, (error, results, fields) => {
//       if (error) throw error;
//       res.status(200).send(results)
//     })
// })

//DELETE A SPECIFIC FOLDER
// deleteFolder = (folder_id) => {
//   axios
//   .post(`${url}/folders/${folder_id}`, {
//     folderId: folder_id 
//   })
//   .then(response => {
//     console.log(response);
//     this.getFolders(folder_id);
//   })
//   .catch(error => {
//     console.log(error)
//   })
// }

//SET STATE NOTETITLE FROM NOTE TITLE INPUT 
// setNoteTitle = (e) => {
//   noteTit = e.target.textContent;
//   this.setState({noteTitle : noteTit});
//   e.preventDefault();
//   console.log(noteTit);
// }

// //SET STATE NOTECONTENT FROM NOTE CONTENT INPUT 
// setNoteContent = (e) => {
//   noteCont = e.target.textContent;
//   this.setState({noteContent : noteCont});
//   e.preventDefault();
//   console.log(noteCont);
// }