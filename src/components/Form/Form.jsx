import React, { Component } from "react";
import "./Form.scss";

class Form extends Component {
  render() {
    return (
      <div id="form">
        <div className="form">
          <div className="bloc-wrapper">

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
                onChange={this.props.getSearchInp}
                className="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />

              <button
                onClick={this.props.search}
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
