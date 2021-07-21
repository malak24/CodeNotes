import React, { Component } from "react";
import "./SideBar.scss";
import Folders from "./Folders/Folders";

class SideBar extends Component {
  render() {
    return (
      <div id="sidebar">
        <div className="sidebar">
          <div className="wrapper">
            <div className="inputs-wrapper">
              <h1 className="title">Form</h1>
              <p className="tip">Click on a folder before creating a note</p>

              <div className="input-container">
                <input
                  onChange={this.props.getFolderName}
                  className="form-control"
                  type="text"
                  placeholder="New folder name"
                />
                <button onClick={this.props.createFolder} className="btn">
                  New
                </button>
              </div>

              <div className="input-container">
                <input
                  onChange={(e) => {
                    this.props.getFolderName(e);
                  }}
                  className="form-control"
                  type="text"
                  placeholder="Edit folder name"
                />

                <button onClick={this.props.editFolderName} className="btn">
                  Edit
                </button>
              </div>

              <div className="input-container">
                <input
                  onChange={this.props.getNoteTitle}
                  className="form-control"
                  type="text"
                  placeholder="Note title"
                />

                <button onClick={this.props.createNote} className="btn">
                  New
                </button>
              </div>

              <div className="input-container">
                <input
                  onChange={this.props.getNoteTitle}
                  className="form-control"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />

                <button
                  onClick={this.props.createNote}
                  type='submit'
                  className="btn">
                  Search
                </button>
              </div>
            </div>

            <Folders
              folders={this.props.folders}
              notes={this.props.notes}
              getNotes={this.props.getNotes}
              getFolderName={this.props.getFolderName}
              editFolderName={this.props.editFolderName}
              createFolder={this.props.createFolder}
              getFolderId={this.props.getFolderId}
              showFolders={this.props.showFolders}
              extendFolders={this.props.extendFolders}
              showNotes={this.props.showNotes}
              openNotes={this.props.openNotes}
              openNote={this.props.openNote}
              getNoteId={this.props.getNoteId}
              folderId={this.props.folderId}
              hideNotes={this.props.hideNotes}
              deleteFolder={this.props.deleteFolder}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default SideBar;
