import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import "./Folders.scss";

class Folders extends Component {
  render() {
    return (
      // -------- Folders component header --------
      <div id="folders">
        <div className="folders">
          <div className="title-container">
            <p className="title">Folders</p>
            <button
              onClick={this.props.extendFolders}
              className={this.props.shownFolders? "arrow-btn-rotate btn": "arrow-btn btn"}>▼
            </button>
          </div>

          
          {/* -------- Default folder and note -------- */}
          <ul
            className={this.props.shownFolders ? "list-group" : "folders-hidden"}>

            
            {/* -------- Folder buttons -------- */}
            {Object.keys(this.props.folders).map((keyName, keyIndex) => (
              <li key={uuidv4()} className="list-group-item">
                <div className="btns-wrapper">
                  <button
                    onClick={() => {this.props.deleteFolder(this.props.folders[keyName].folder_id);}}
                    className="delete-btn">x
                  </button>
                  <button
                    onClick={this.props.extendNotes}
                    className={this.props.shownNotes ? "name-arrow-btn btn" : "name-arrow-btn-rotate btn"}>▼
                  </button>
                </div>

                
                {/* -------- Folder name -------- */}
                <div>
                  <input
                    className="folder-name"
                    onMouseEnter={() => { this.props.getFolderId(this.props.folders[keyName].folder_id)}}
                    onChange={this.props.editFolderName}
                    defaultValue = {this.props.folders[keyName].folder_name}>
                  </input>

                  
                  {/* -------- Notes list -------- */}
                  <ul className={this.props.shownNotes? "notes-list" : "notes-hidden"}>
                    {this.props.folders[keyName].notes.map((note) => (
                      <li
                        onClick={() => {this.props.openNote(note.note_id);}}
                        className="notes-list-item"
                        key={uuidv4()}>
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