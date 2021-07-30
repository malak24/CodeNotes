import React, { Component } from "react";
import axios from "axios";
import "./App.scss";
import Topbar from "./components/Topbar/Topbar";
import Form from "./components/Form/Form";
import Notes from "./components/Notes/Notes";
import Folders from "./components/Folders/Folders";
import { get } from "jquery";

// let url = "https://codenotes-app.herokuapp.com";
let url = "http://localhost:8080";

class App extends Component {
  constructor() {
    super();

    this.state = {
      folders: {},
      notes: [],

      folderName: "",
      noteTitle: "",
      noteContent: "",

      folderId: "",
      noteId: "",

      search: "",
      searchTxt: "",
      shownFolders: true,
      shownNotes: true,
      hideNote: false,
    };
  }

  componentDidMount() {
    this.getFolders();
  }

  getFolders = () => {
    axios.get(`${url}/data`).then((response) => {
      this.setState({ folders: response.data });
      console.log(response.data);
    });
  };

  getNotes = (folder_id) => {
    this.setState({ folderId: folder_id });

    axios
      .get(`${url}/folders/${folder_id}/notes`)
      .then((response) => {
        this.setState({ notes: response.data });
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

//==========================================================
  createNote = () => {
    axios
      .post(`${url}/folders/${this.state.folderId}/noteId`, {
        note_title: this.state.noteTitle,
      })
      .then((response) => {
        this.getNotes(this.state.folderId);
        this.getFolders();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  createFolder = () => {
    axios
      .post(`${url}/folders`, {
        folder_name: this.state.folderName,
      })
      .then((response) => {
        // console.log(response);
        this.getFolders();
      })
      .catch((error) => {
        console.log(error);
      });
  };

//==========================================================
  getNoteId = (note_id) => {
    this.state.noteId === note_id
      ? console.log("note has the same id")
      : this.setState({ noteId: note_id });
    console.log(note_id);
  };

  getFolderId = (folder_id) => {
    console.log(folder_id);
    this.setState({ folderId: folder_id });
  };

//==========================================================
  extendFolders = () => {
    this.setState({ shownFolders: !this.state.shownFolders });
  };

  extendNotes = () => {
    this.setState({ shownNotes: !this.state.shownNotes });
  };

//==========================================================
  getNoteTitle = (e) => {
    this.setState({ noteTitle: e.target.value });
  };

  getFolderName = (e) => {
    this.setState({ folderName: e.target.value });
  };

//==========================================================
  deleteFolder = (folder_id) => {
    axios
      .put(`${url}/folders/${folder_id}`)
      .then((response) => {
        this.getFolders();
        this.getNotes(folder_id);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  deleteNote = (note_id) => {
    axios
      .put(`${url}/notes/${note_id}`, {})
      .then((response) => {
        this.getNotes(this.state.folderId);
        this.getFolders();
      })
      .catch((error) => {
        console.log(error);
      });
  };

//==========================================================
  editTitle = (e) => {
    let newTitle = e.target.value;
    console.log(newTitle);

    axios
      .put(`${url}/folders/${this.state.folderId}/${this.state.noteId}`, {
        note_title: newTitle,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  editNote = (e) => {
    let noteContent = e;
    console.log(noteContent);

    axios
      .put(`${url}/folders/${this.state.folderId}/${this.state.noteId}/note`, {
        note_content: noteContent,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  editFolderName = (e) => {
    let newName = e.target.value;
    console.log(newName);

    axios
      .put(`${url}/folders/${this.state.folderId}/folderName`, {
        folder_name: newName,
      })
      .then((response) => {
        this.getFolders();
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
//==========================================================
  getSearchInp = (e) => {
    let searchInp = e.target.value;
    this.setState({ search: searchInp });
    console.log(searchInp);
  };

  search = () => {
    let x;
    let search = this.state.search;
    let content;

    axios
      .get(`${url}/notes`)
      .then((response) => {
        for (const i in response.data) {
          content = response.data[i].note_content;
          let arr = content.split(" ");

          for (x = 0; x < arr.length; x++) {
            if (arr[x] == search) {
              arr.splice(
                x,
                1,
                `<span style = "background-color:#d12b2b96"><b>${search}</b></span>`
              );

              let text = arr.join(" ");
            }
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  highlightSearch = () => { };
  
//==========================================================
  toggleNote = () => {
    this.setState({ hideNote: !this.state.hideNote });
  };

  openNote = (note_id) => {
    axios
      .get(`${url}/notes/${note_id}`)
      .then((response) => {
        this.setState({ notes: response.data });
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="app">
        <div className="app-container">
          <Topbar />

          <div>
            <Form
              getFolderName={this.getFolderName}
              editFolderName={this.editFolderName}
              createFolder={this.createFolder}
              getNoteTitle={this.getNoteTitle}
              createNote={this.createNote}
              getSearchInp={this.getSearchInp}
              search={this.search}
              folderId={this.state.folderId}
            />

            <Folders
              folders={this.state.folders}
              notes={this.state.notes}
              getNotes={this.getNotes}
              getFolderName={this.getFolderName}
              editFolderName={this.editFolderName}
              createFolder={this.createFolder}
              getFolderId={this.getFolderId}
              shownFolders={this.state.shownFolders}
              extendFolders={this.extendFolders}
              extendNotes={this.extendNotes}
              showNotes={this.showNotes}
              openNotes={this.state.openNotes}
              openNote={this.openNote}
              getNoteId={this.getNoteId}
              folderId={this.state.folderId}
              hideNotes={this.hideNotes}
              deleteFolder={this.deleteFolder}
              shownNotes={this.state.shownNotes}
            />
          </div>

          <Notes
            folders={this.state.folders}
            notes={this.state.notes}
            autoexpand={this.autoexpand}
            getNoteId={this.getNoteId}
            editTitle={this.editTitle}
            editNote={this.editNote}
            deleteNote={this.deleteNote}
            noteId={this.state.noteId}
            hideNote={this.state.hideNote}
            toggleNote={this.toggleNote}
          />
        </div>
      </div>
    );
  }
}

export default App;
