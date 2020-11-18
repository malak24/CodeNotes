import React, { Component } from 'react';
import axios from 'axios';
import './App.scss';
import TopBar from './components/TopBar/TopBar'
import SideBar from './components/SideBar/SideBar'


let inputValueFo;
let inputValueFi;
let searchVal;

class App extends Component {
  constructor() {
    super();

    this.state = {

      folders: [],
      files : [],
      allFiles: [],
      allNotes : [],

      folderName: '',
      fileName: '',
      fileContent: '',

      folderId: '',
      fileId: '',

      search: '',
      model: 'Start writing here',
      selectedOption: '',
    };
  }

  componentDidMount() {
    this.getFolders();

    axios
      .get('http://api.kataie.com/files')
      .then(response => {
        console.log(response.data)
        this.setState({ allFiles: response.data })
      })
      .catch(error => {
        console.log(error)
      })

    axios
      .get('http://api.kataie.com/notes')
      .then(response => {
        console.log(response.data)
        this.setState({ allNotes: response.data })
      })
      .catch(error => {
        console.log(error)
      })

  }

  getFolders = () => {
    axios
      .get('http://api.kataie.com/folders')
      .then(response => {
        console.log(response.data)
        this.setState({ folders: response.data })
      })
      .catch(error => {
        console.log(error)
      })
  }

  getFiles = (folder_id) => {
    axios
      .get(`http://api.kataie.com/folders/${folder_id}/files`)
      .then(response => {
        this.setState({ files: response.data, folderId: folder_id });
      })
      .catch(error => {
        console.log(error)
      })
  }

  createOneFolder = () => {
    axios
      .post('http://api.kataie.com/folders/folderId', {
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

  getNote = (folder_id, file_id) => {
    axios
      .get(`http://api.kataie.com/folders/${folder_id}/${file_id}/note`)
      .then(response => {
        this.setState({
          model: response.data[0].file_content,
          fileId: file_id
        });
        console.log(this.state.model)
      })
      .catch(error => {
        console.log(error)
      })
  }

  saveNote(folder_id, file_id) {
    axios
      .post(`http://api.kataie.com/folders/${folder_id}/${file_id}/note`, {
        fileContent: this.state.model,
      })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error)
      })
  }

  createOneFile = (folder_id) => {
    axios
      .post(`http://api.kataie.com/folders/${folder_id}/fileId`, {
        file_name: this.state.fileName,
      })
      .then(response => {
        console.log(response);
        this.getFiles(folder_id);
      })
      .catch(error => {
        console.log(error)
      })
  }

  // deleteFolder = (folder_id) => {
  //   axios
  //   .post(`http://api.kataie.com/folders/${folder_id}`, {
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

  getInputFile = (e) => {
    inputValueFi = e.target.value;
    this.setState({ fileName: inputValueFi })
  }

  getSearchVal = (e) => {
    searchVal = e.target.value;
    this.setState({ search: searchVal })
    console.log(searchVal)
  }

  folderSearchFn = () => {
    console.log('folder search function is working')
    axios
      .post(`http://api.kataie.com/folders`, {
        search: this.state.search
      })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error)
      })
  }

  fileSearchFn = () => {
    axios
      .post(`http://api.kataie.com/files`, {
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
      .post(`http://api.kataie.com/notes`, {
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
    } else if (this.state.selectedOption === 'file name') {
      this.fileSearchFn()
    } else {
      this.noteSearchFn()
    }
  }

  handleModelChange = (model) => {
    this.setState({
      model: model
    })
    this.saveNote(this.state.folderId, this.state.fileId)
  }

  render() {
    return (
      <>
      <TopBar />
      <div className="app">
        <SideBar
          getSearchVal={this.getSearchVal}
          selectedOption={this.state.selectedOption}
          handleOptionChange={this.handleOptionChange}
          search={this.search}
        />
      </div>
      </>
    );
  }
}

export default App;
