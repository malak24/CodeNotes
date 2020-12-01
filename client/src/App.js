import React, { Component } from 'react';
import axios from 'axios';
import './App.scss';
import Topbar from './components/Topbar/Topbar'
import SideBar from './components/SideBar/SideBar'
import Main from './components/Main/Main'

let inputValueFo;
let inputValueFi;
let searchVal;
let url = 'http://localhost:8080'

class App extends Component {
  constructor() {
    super();

    this.state = {

      folders: [],
      notes: [],

      folderName: '',
      notetitle: '',
      noteContent: '',

      folderId: '',
      noteId: '',

      search: '',
      model: 'Start writing here',
      selectedOption: '',
    };
  }

  componentDidMount() {
    this.getFolders();
  }

  //Get the notes of one folder
  getNotes = (folder_id) => {
    axios
      .get(`${url}/folders/${folder_id}/notes`)
      .then(response => {
        this.setState({ notes: response.data, folderId: folder_id });
      })
      .catch(error => {
        console.log(error)
      })
  }

  //Get folders
  getFolders = () => {
    axios
      .get(`${url}/folders`)
      .then(response => {
        console.log(response.data)
        this.setState({ folders: response.data })
      })
      .catch(error => {
        console.log(error)
      })
  }

  //Create a new folder
  createFolder = () => {
    axios
      .post(`${url}/folders/folderId`, {
        folder_name: this.state.folderName,
      })
      .then(response => {
        console.log(response);
        this.getFolders();
      })
      .catch(error => {
        console.log(error)
      })
  }

  //Save the note's content
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

  //Create a new note
  createNote = (folder_id) => {
    axios
      .post(`${url}/folders/${folder_id}/noteId`, {
        note_name: this.state.notetitle,
      })
      .then(response => {
        console.log(response);
        this.getNotes(folder_id);
      })
      .catch(error => {
        console.log(error)
      })
  }

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

  getInputFolder = (e) => {
    inputValueFo = e.target.value;
    this.setState({ folderName: inputValueFo })
  }

  getInputNote = (e) => {
    inputValueFi = e.target.value;
    this.setState({ noteName: inputValueFi })
  }

  getSearchVal = (e) => {
    searchVal = e.target.value;
    this.setState({ search: searchVal })
    console.log(searchVal)
  }

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

  handleOptionChange = (e) => {
    this.setState({
      selectedOption: e.target.value
    });
    console.log(e.target.value)
  }

  search = () => {
    if (this.state.selectedOption === 'folder name') {
      this.folderSearchFn()
    } else if (this.state.selectedOption === 'note name') {
      this.noteSearchFn()
    } else {
      this.noteSearchFn()
    }
  }

  handleModelChange = (model) => {
    this.setState({
      model: model
    })
    this.saveNote(this.state.folderId, this.state.noteId)
  }

  render() {
    return (
      <>
        <Topbar />
        <div className="app">
          <SideBar
            getSearchVal={this.getSearchVal}
            selectedOption={this.state.selectedOption}
            handleOptionChange={this.handleOptionChange}
            search={this.search}
            folders={this.state.folders}
          />

          {/* <div>
            {this.props.notes.map((note) => (<Main noteTitle={this.state.noteTitle} 
            noteContent={this.state.noteContent} 
            />))}
          </div> */}

        </div>
      </>
    );
  }
}

export default App;
