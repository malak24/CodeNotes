import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import "./Folders.scss";

class Folders extends Component {
  render() {
    return (
      <div id="folders">
        <div className="folders">
          <div className="title-container">
            <p className="title">Folders</p>
            <button
              onClick={this.props.extendFolders}
              className={
                this.props.shownFolders
                  ? "arrow-btn-rotate btn"
                  : "arrow-btn btn"
              }
            >
              ▼
            </button>
          </div>

          <ul
            className={
              this.props.shownFolders ? "list-group" : " folders-hidden"
            }
          >
            {Object.keys(this.props.folders).map((keyName, keyIndex) => (
              <li key={uuidv4()} className="list-group-item">
                <div className="btns-wrapper">
                  <button
                    onClick={() => {
                      this.props.deleteFolder(
                        this.props.folders[keyName].folder_id
                      );
                    }}
                    className="delete-btn"
                  >
                    x
                  </button>
                  <button
                    onClick={this.props.hideNotes}
                    className="btn name-arrow-btn"
                  >
                    ▼
                  </button>
                </div>

                <div>
                  <p
                    onClick={() => {
                      this.props.getNotes(
                        this.props.folders[keyName].folder_id
                      );
                    }}
                    className="folder-name"
                  >
                    {this.props.folders[keyName].folder_name}
                  </p>

                  <ul className="notes-list">
                    {/* This logic below prevents folders from getting the notes of the clicked folder */}
                    {this.props.notes.length === 0
                      ? console.log("Folder is empty")
                      : keyName != this.props.folderId
                      ? console.log(
                          "This folder can't have the notes of another folder"
                        )
                      : this.props.notes.map((note) => (
                          <li
                            onClick={() => {
                              this.props.openNote(note.note_id);
                            }}
                            className="notes-list-item"
                            key={uuidv4()}
                          >
                            {note.note_title}
                          </li>
                        ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Folders;
