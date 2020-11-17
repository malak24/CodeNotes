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
      openFolders: true,
      openFiles: true,

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
      <>
      <TopBar />
      <div className="app">
        <SideBar
          openFolders={this.state.openFolders}
          openFiles={this.state.openFiles}
          foldersClick={this.foldersClick}
          filesClick={this.filesClick}
          zenClick={this.zenClick}
          getSearchVal={this.getSearchVal}
          selectedOption={this.state.selectedOption}
          handleOptionChange={this.handleOptionChange}
          search={this.search}

          yellowFn={this.yellowFn}
          orangeFn={this.orangeFn}
          pinkFn={this.pinkFn}
          purpleFn={this.purpleFn}
          blueFn={this.blueFn}
          tealFn={this.tealFn}
          greenFn={this.greenFn}
          greyFn={this.greyFn}
        />

        <div className='app__right-section'>
          {/* <Editor
            handleModelChange={this.handleModelChange}
            model={this.state.model}
            saveNote={this.saveNote}
            folderId={this.state.folderId}
            fileId={this.state.fileId}
          /> */}
        </div>
      </div>
      </>
    );
  }
}

export default App;
