import React, { Component } from "react";
import "./Form.scss";

class Form extends Component {
  render() {
    return (
      <div id="form">
        <div className="form">
          <div className="bloc-wrapper">
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
                type="submit"
                className="btn"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
