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
      model: '',

      folderId: '',
      noteId: '',

      search: '',
      openFolders : false
    };
  }

  componentDidMount() {
    this.getData();
  }

  // get = () => {
  //   console.log(this.state.folderId);
  // }

  // GET ALL DATA FROM THE DB
  getData = () => {
    axios
      .get(`${url}/data`)
      .then(response => {
        console.log(response.data);
        this.setState({ folders: response.data });
      })
  }


  //GET THE NOTES OF A SPECIFIC FOLDER
  getNotes = (folder_id) => { //folder_id comes from db to folders array in state to each folder on creation from folders array (using map) passed to onClick function
    console.log(folder_id);
    this.setState({ folderId: folder_id })
    axios
      .get(`${url}/folders/${folder_id}/notes`)
      .then(response => {
        this.setState({ notes: response.data, folderId: folder_id });
      })
      .catch(error => {
        console.log(error)
      })
  }


  //CREATE A NEW FOLDER
  createFolder = () => {
    axios
      .post(`${url}/folders`, {
        folder_name: this.state.folderName,
      })
      .then(response => {
        console.log(response);
        this.getData();
      })
      .catch(error => {
        console.log(error)
      })
  }

  //CREATE A NEW NOTE
  createNote = (folder_id) => {
    console.log(this.state.noteTitle)
    axios
      .post(`${url}/folders/${this.state.folderId}/noteId`, {
        note_title: this.state.noteTitle,
      })
      .then(response => {
        console.log(response);
        this.getNotes(this.state.folderId);
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


  //SAVE THE NOTE'S CONTENT
  saveNote(folder_id, note_id) {
    axios
      .post(`${url}/folders/${folder_id}/${note_id}/note`, {
        noteContent: this.state.model,
      })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error)
      })
  }


  //GET THE FOLDER NAME FROM USER INPUT
  getFolderName = (e) => {
    folderInp = e.target.value;
    this.setState({ folderName: folderInp })
    console.log(folderInp);
  }

  //GET THE NOTE TITLE FROM USER INPUT
  getNoteTitle = (e) => {
    let noteInp;
    noteInp = e.target.value;
    this.setState({ noteTitle: noteInp })
    console.log(noteInp);
  }

  //GET SEARCH WORD (INPUT BY USER)
  getSearchVal = (e) => {
    searchInp = e.target.value;
    this.setState({ search: searchInp })
    console.log(searchInp)
  }

  //SEARCH FOR A FOLDER BY FOLDER NAME
  folderSearchFn = () => {
    console.log('folder search function is working')
    axios
      .post(`${url}/folders`, {
        search: this.state.search
      })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error)
      })
  }

  //SEARCH FOR NOTE BY NOTE TITLE
  noteSearchFn = () => {
    axios
      .post(`${url}/notes`, {
        search: this.state.search
      })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error)
      })
  }

  //SEARCH FOR NOTE BY NOTE CONTENT
  noteSearchFn = () => {
    axios
      .post(`${url}/notes`, {
        search: this.state.search
      })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error)
      })
  }

  //GENERAL SEARCH FUNCTION FOR FOLDERS AND NOTES
  search = () => {
    if (this.state.selectedOption === 'folder name') {
      this.folderSearchFn()
    } else if (this.state.selectedOption === 'note title') {
      this.noteSearchFn()
    } else {
      this.noteSearchFn()
    }
  }

  //GET CHANGES IN NOTE CONTENT TO SAVE IT WITH SAVE FUNCTION
  handleModelChange = (model) => {
    this.setState({
      model: model
    })
    this.saveNote(this.state.folderId, this.state.noteId)
  }

  show = () => {
    console.log('this is working')
    this.setState({
      openFolders : !(this.state.openFolders)
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
            getNotes={this.getNotes}
            getFolderName={this.getFolderName}
            createFolder={this.createFolder}
            getFolderId={this.getFolderId}
            openFolders = {this.state.openFolders}
            show = {this.show}
          />

          <Notes
            notes={this.state.notes}
            onModelChange={this.state.onModelChange}
            model={this.state.model}
            target={this.state.target}
            autoexpand={this.autoexpand}
          />
        </div>
      </div>
    );
  }
}

export default App;
