import React, { Component } from 'react';
import axios from 'axios';
import './App.scss';
import SideBar from './components/SideBar/SideBar'
import Folders from './components/Folders/Folders'
import Files from './components/Files/Files'
import Editor from './components/Editor/Editor'
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/js/plugins.pkgd.min.js';
import 'froala-editor/js/languages/de.js';
import 'froala-editor/js/third_party/image_tui.min.js';
import 'froala-editor/js/third_party/embedly.min.js';
import 'froala-editor/js/third_party/spell_checker.min.js';

let inputValueFo;
let inputValueFi;
let searchVal;

class App extends Component {
  constructor() {
    super();

    this.state = {
      openFolders: true,
      openFiles: true,

      folders: [],
      files: [],

      folderName: '',
      fileName: '',
      fileContent: '',

      folderId: '',
      fileId: '',

      search: '',
      model: 'Start writing here',
      selectedOption : '',

      yellowFo: false,
      orangeFo: false,
      pinkFo: true,
      purpleFo: false,
      blueFo: false,
      tealFo: false,
      greenFo: false,
      greyFo: false,

      yellowFi: false,
      orangeFi: false,
      pinkFi: true,
      purpleFi: false,
      blueFi: false,
      tealFi: false,
      greenFi: false,
      greyFi: false
    };
  }

  componentDidMount() {
    this.getFolders();
  }

  foldersClick = () => {
    this.setState({
      openFolders: !(this.state.openFolders)
    });
  };

  filesClick = () => {
    this.setState({
      openFiles: !(this.state.openFiles)
    });
  };

  zenClick = () => {
    this.setState({
      openFolders: false,
      openFiles: false,
    })
  }

  getFolders = () => {
    axios
      .get('http://localhost:8080/folders')
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
      .get(`http://localhost:8080/folders/${folder_id}/files`)
      .then(response => {
        this.setState({ files: response.data, folderId: folder_id });
      })
      .catch(error => {
        console.log(error)
      })
  }

  createOneFolder = () => {
    axios
      .post('http://localhost:8080/folders/folderId', {
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
      .get(`http://localhost:8080/folders/${folder_id}/${file_id}/note`)
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
      .post(`http://localhost:8080/folders/${folder_id}/${file_id}/note`, {
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
      .post(`http://localhost:8080/folders/${folder_id}/fileId`, {
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
  //   .post(`http://localhost:8080/folders/${folder_id}`, {
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
      .post(`http://localhost:8080/folders`, {
        search : this.state.search
      })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error)
      })
  }

  fileSearchFn = (folder_id) => {
    axios
      .post(`http://localhost:8080/folders/${folder_id}/files`, {
        search : this.state.search
      })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error)
      })
  }

  noteSearchFn = (folder_id, file_id) => {
    axios
      .post(`http://localhost:8080/folders/${folder_id}/${file_id}/note`, {
        search : this.state.search
      })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error)
      })
  }

  handleOptionChange = (e) => {
    this.setState ({
      selectedOption : e.target.value
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


  yellowFn = () => {
    this.setState({
      orangeFo: false,
      pinkFo: false,
      purpleFo: false,
      blueFo: false,
      tealFo: false,
      greenFo: false,
      greyFo: false,
      yellowFo: !this.state.yellowFo,

      orangeFi: false,
      pinkFi: false,
      purpleFi: false,
      blueFi: false,
      tealFi: false,
      greenFi: false,
      greyFi: false,
      yellowFi: !this.state.yellowFi
    })
  }

  orangeFn = () => {
    this.setState({
      orangeFo: !this.state.orangeFo,
      pinkFo: false,
      purpleFo: false,
      blueFo: false,
      tealFo: false,
      greenFo: false,
      greyFo: false,
      yellowFo: false,

      orangeFi: !this.state.orangeFi,
      pinkFi: false,
      purpleFi: false,
      blueFi: false,
      tealFi: false,
      greenFi: false,
      greyFi: false,
      yellowFi: false
    })
  }

  pinkFn = () => {
    this.setState({
      orangeFo: false,
      pinkFo: !this.state.pinkFo,
      purpleFo: false,
      blueFo: false,
      tealFo: false,
      greenFo: false,
      greyFo: false,
      yellowFo: false,

      orangeFi: false,
      pinkFi: !this.state.pinkFi,
      purpleFi: false,
      blueFi: false,
      tealFi: false,
      greenFi: false,
      greyFi: false,
      yellowFi: false
    })
  }

  purpleFn = () => {
    this.setState({
      orangeFo: false,
      pinkFo: false,
      purpleFo: !this.state.purpleFo,
      blueFo: false,
      tealFo: false,
      greenFo: false,
      greyFo: false,
      yellowFo: false,

      orangeFi: false,
      pinkFi: false,
      purpleFi: !this.state.purpleFi,
      blueFi: false,
      tealFi: false,
      greenFi: false,
      greyFi: false,
      yellowFi: false
    })
  }

  blueFn = () => {
    this.setState({
      orangeFo: false,
      pinkFo: false,
      purpleFo: false,
      blueFo: !this.state.blueFo,
      tealFo: false,
      greenFo: false,
      greyFo: false,
      yellowFo: false,

      orangeFi: false,
      pinkFi: false,
      blueFi: !this.state.blueFi,
      tealFi: false,
      greenFi: false,
      greyFi: false,
      yellowFi: false
    })
  }

  tealFn = () => {
    this.setState({
      orangeFo: false,
      pinkFo: false,
      purpleFo: false,
      blueFo: false,
      tealFo: !this.state.tealFo,
      greenFo: false,
      greyFo: false,
      yellowFo: false,

      orangeFi: false,
      pinkFi: false,
      purpleFi: false,
      blueFi: false,
      tealFi: !this.state.tealFi,
      greenFi: false,
      greyFi: false,
      yellowFi: false
    })
  }

  greenFn = () => {
    this.setState({
      orangeFo: false,
      pinkFo: false,
      purpleFo: false,
      blueFo: false,
      tealFo: false,
      greenFo: !this.state.greenFo,
      greyFo: false,
      yellowFo: false,

      orangeFi: false,
      pinkFi: false,
      purpleFi: false,
      blueFi: false,
      tealFi: false,
      greenFi: !this.state.greenFi,
      greyFi: false,
      yellowFi: false
    })
  }

  greyFn = () => {
    this.setState({
      orangeFo: false,
      pinkFo: false,
      purpleFo: false,
      blueFo: false,
      tealFo: false,
      greenFo: false,
      greyFo: !this.state.greyFo,
      yellowFo: false,

      orangeFi: false,
      pinkFi: false,
      purpleFi: false,
      blueFi: false,
      tealFi: false,
      greenFi: false,
      greyFi: !this.state.greyFi,
      yellowFi: false
    })
  }

  handleModelChange = (model) => {
    this.setState({
      model: model
    })
    this.saveNote(this.state.folderId, this.state.fileId)
  }

  render() {
    return (
      <div className="app">
        <SideBar
          openFolders={this.state.openFolders}
          openFiles={this.state.openFiles}
          foldersClick={this.foldersClick}
          filesClick={this.filesClick}
          zenClick={this.zenClick}
          getSearchVal={this.getSearchVal}
          selectedOption = {this.state.selectedOption}
          handleOptionChange = {this.handleOptionChange}
          search = {this.search}

          yellowFn={this.yellowFn}
          orangeFn={this.orangeFn}
          pinkFn={this.pinkFn}
          purpleFn={this.purpleFn}
          blueFn={this.blueFn}
          tealFn={this.tealFn}
          greenFn={this.greenFn}
          greyFn={this.greyFn}

        />

        <Folders
          getInputFolder={this.getInputFolder}
          createOneFolder={this.createOneFolder}
          folders={this.state.folders}
          openFolders={this.state.openFolders}
          foldersClick={this.foldersClick}
          getFiles={this.getFiles}

          yellowFo={this.state.yellowFo}
          orangeFo={this.state.orangeFo}
          pinkFo={this.state.pinkFo}
          purpleFo={this.state.purpleFo}
          blueFo={this.state.blueFo}
          tealFo={this.state.tealFo}
          greenFo={this.state.greenFo}
          greyFo={this.state.greyFo}
        />

        <Files
          openFiles={this.state.openFiles}
          createOneFile={this.createOneFile}
          filesClick={this.filesClick}
          files={this.state.files}
          getInputFile={this.getInputFile}
          folderId={this.state.folderId}
          fileId={this.state.fileId}

          yellowFi={this.state.yellowFi}
          orangeFi={this.state.orangeFi}
          pinkFi={this.state.pinkFi}
          purpleFi={this.state.purpleFi}
          blueFi={this.state.blueFi}
          tealFi={this.state.tealFi}
          greenFi={this.state.greenFi}
          greyFi={this.state.greyFi}
          getNote={this.getNote}
        />

        <div className='app__right-section'>
          <Editor
            handleModelChange={this.handleModelChange}
            model={this.state.model}
            saveNote={this.saveNote}
            folderId={this.state.folderId}
            fileId={this.state.fileId}
          />
        </div>
      </div>
    );
  }
}

export default App;
