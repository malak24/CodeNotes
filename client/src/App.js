import React, { Component } from 'react';
import axios from 'axios';
import './App.scss';
import Topbar from './components/Topbar/Topbar'
import SideBar from './components/SideBar/SideBar'
import Notes from './components/Notes/Notes'
import { get, nodeName } from 'jquery';

let folderInp;
let searchInp;
let url = 'http://localhost:8080'

class App extends Component {
  constructor() {
    super();

    this.state = {

      folders: {},
      notes: [],

      folderName: '',
      noteTitle: '',
      noteContent: '',

      folderId: '',
      noteId: '',

      search: '',
      openFolders: true,
    };
  }

  componentDidMount() {
    this.getData();
  }

  get = () => {
    console.log(this.state.notes);
    console.log(this.state.notes.length == 0)
  }


  // GET ALL DATA FROM THE DB
  getData = () => {
    axios
      .get(`${url}/data`)
      .then(response => {
        // console.log(response.data);
        this.setState({ folders: response.data });
      })
  }


  //NOTES
  //CREATE A NEW NOTE
  createNote = () => {
    axios
      .post(`${url}/folders/${this.state.folderId}/noteId`, {
        note_title: this.state.noteTitle,
      })
      .then(response => {
        // console.log(response);
        this.getNotes(this.state.folderId);
      })
      .catch(error => {
        console.log(error)
      })
  }


  //GET THE NOTES OF A SPECIFIC FOLDER
  getNotes = (folder_id) => {
    this.setState({ folderId: folder_id })
    axios
      .get(`${url}/folders/${folder_id}/notes`)
      .then(response => {
        this.setState({ notes: response.data });
      })
      .catch(error => {
        console.log(error)
      })
  }

  hideNotes = () => {
    this.setState({notes : []})
    console.log('this is at least working')
  }

  openNote = () => {
    axios
      .get(`${url}/notes/${this.state.noteId}`)
      .then(response => {
        this.setState({ notes: response.data });
      })
      .catch(error => {
        console.log(error)
      })
  }


  //GET NOTE ID
  getNoteId = (note_id) => {
    console.log(note_id);
    this.setState({ noteId: note_id })
  }


  //GET THE NOTE TITLE FROM USER INPUT
  getNoteTitle = (e) => {
    console.log(e.target.value)
    this.setState({ noteTitle: e.target.value })
  }


  // SAVE THE NOTE'S TITLE
  saveTitle = (e) => {
    let newTitle = e.target.value;
    console.log(newTitle)

    axios
      .put(`${url}/folders/${this.state.folderId}/${this.state.noteId}`, {
        note_title: newTitle,
      })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error)
      })
  }


  //SAVE THE NOTE'S CONTENT
  saveNote = (e) => {
    let noteContent = e.target.value;
    console.log(noteContent);
    this.autoexpand(e);

    axios
      .put(`${url}/folders/${this.state.folderId}/${this.state.noteId}/note`, {
        note_content: noteContent,
      })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error)
      })
  }


  autoexpand = (event) => {
    let target = event.target
    target.style.height = 'inherit'

    let computed = window.getComputedStyle(target);
    let height = parseInt(computed.getPropertyValue('border-top-width'), 10)
      + parseInt(computed.getPropertyValue('padding-top'), 10)
      + target.scrollHeight
      + parseInt(computed.getPropertyValue('padding-bottom'), 10)
      + parseInt(computed.getPropertyValue('border-bottom-width'), 10);

    target.style.height = height + 'px';
  };


  //FOLDERS
  //CREATE A NEW FOLDER
  createFolder = () => {
    axios
      .post(`${url}/folders`, {
        folder_name: this.state.folderName,
      })
      .then(response => {
        // console.log(response);
        this.getData();
      })
      .catch(error => {
        console.log(error)
      })
  }


  //GET THE FOLDER NAME FROM USER INPUT
  getFolderName = (e) => {
    folderInp = e.target.value;
    this.setState({ folderName: folderInp })
    // console.log(folderInp);
  }




  // // editFolderName = () => {
  // //   new Prompt({
  // //     title: 'Edit folder name',
  // //     content: "Please enter the folder's new name",
  // //     placeholderText: "New name",
  // //     submitText: true,
  // //     onSubmit(component, value) {
  // //       console.log(value)
  // //     }
  // // });
  // // }

  // //GET SEARCH WORD (INPUT BY USER)
  // getSearchVal = (e) => {
  //   searchInp = e.target.value;
  //   this.setState({ search: searchInp })
  //   // console.log(searchInp)
  // }

  // //SEARCH FOR A FOLDER BY FOLDER NAME
  // folderSearchFn = () => {
  //   // console.log('folder search function is working')
  //   axios
  //     .post(`${url}/folders`, {
  //       search: this.state.search
  //     })
  //     .then(response => {
  //       // console.log(response);
  //     })
  //     .catch(error => {
  //       console.log(error)
  //     })
  // }

  // //SEARCH FOR NOTE BY NOTE TITLE
  // noteSearchFn = () => {
  //   axios
  //     .post(`${url}/notes`, {
  //       search: this.state.search
  //     })
  //     .then(response => {
  //       // console.log(response);
  //     })
  //     .catch(error => {
  //       console.log(error)
  //     })
  // }

  // //SEARCH FOR NOTE BY NOTE CONTENT
  // noteSearchFn = () => {
  //   axios
  //     .post(`${url}/notes`, {
  //       search: this.state.search
  //     })
  //     .then(response => {
  //       // console.log(response);
  //     })
  //     .catch(error => {
  //       console.log(error)
  //     })
  // }

  // //GENERAL SEARCH FUNCTION FOR FOLDERS AND NOTES
  // search = () => {
  //   if (this.state.selectedOption === 'folder name') {
  //     this.folderSearchFn()
  //   } else if (this.state.selectedOption === 'note title') {
  //     this.noteSearchFn()
  //   } else {
  //     this.noteSearchFn()
  //   }
  // }


  showFolders = () => {
    this.setState({
      openFolders: !(this.state.openFolders)
    });
  }


  render() {
    return (
      <div className="app">
        <Topbar
          getNoteTitle={this.getNoteTitle}
          createNote={this.createNote}
        />

        <div className='app__container'>
          <SideBar
            folders={this.state.folders}
            notes={this.state.notes}
            getNotes={this.getNotes}
            getFolderName={this.getFolderName}
            createFolder={this.createFolder}
            getFolderId={this.getFolderId}
            openFolders={this.state.openFolders}
            showFolders={this.showFolders}
            showNotes={this.showNotes}
            openNote = {this.openNote}
            getNoteId={this.getNoteId}
            folderId = {this.state.folderId}
            hideNotes = {this.hideNotes}
          />

          <Notes
            folders={this.state.folders}
            notes={this.state.notes}
            autoexpand={this.autoexpand}
            getNoteId={this.getNoteId}
            getNoteTitle={this.getNoteTitle}
            saveTitle={this.saveTitle}
            saveNote={this.saveNote}
          />
        </div>
        {/* <button onClick={this.get}>CLICK HEEEEERE</button> */}
      </div>
    );
  }
}

export default App;
