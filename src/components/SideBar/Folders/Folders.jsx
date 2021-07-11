import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import "./Folders.scss";

class Folders extends Component {
  render() {
    return (
      <div id="folders">
        <div className="folders">
          <div className="title-container">
            <div className="title-subcontainer">
              <p className="title">Folders</p>
              <button
                onClick={this.props.extendFolders}
                className={this.props.showFolders? "arrow-btn-rotate btn" : "arrow-btn btn"}
              >
                ▼
              </button>
            </div>
            <div className="new-title">
              <div>
                <input
                  onChange={this.props.getFolderName}
                  className="input"
                  type="text"
                  placeholder="Folder name ..."
                />
                <button
                  onClick={this.props.createFolder}
                  className="btn new-btn">New
                </button>
              </div>
              <div className="edit-input">
                <input
                  onChange={(e) => {this.props.getFolderName(e)}}
                  className="input"
                  type="text"
                  placeholder="Folder name ..."
                />
                <button
                  onClick={this.props.editFolderName}
                  className="btn new-btn">Edit
                </button>
              </div>
            </div>
          </div>

          <ul
            className={
              this.props.showFolders ? "list-group" : " folders-hidden"}>
            {Object.keys(this.props.folders).map((keyName, keyIndex) => (
              <li key={uuidv4()} className="list-group-item">
                <div className="btns-wrapper">
                  <button
                    onClick={this.props.hideNotes}
                    className="btn name-arrow-btn">▼
                  </button>
                  <button
                    onClick={() => {
                      this.props.deleteFolder(
                        this.props.folders[keyName].folder_id
                      );
                    }}
                    className="delete-btn">x
                  </button>
                </div>

                <div>
                  <p
                    onClick={() => {
                      this.props.getNotes(
                        this.props.folders[keyName].folder_id
                      );
                    }}
                    className="folder-name">
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
