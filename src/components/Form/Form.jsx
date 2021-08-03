import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import "./Form.scss";

class Form extends Component {
  render() {
    return (
      <div id="form">
        <div className="form">
          <div className="bloc-wrapper">
            <div className="input-container form-frame">
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

            <div className='form-frame'>
              <form className ='select-form'>
                <label className="folders-label">Select a folder:</label>
                <select
                  className="folders-select"
                  name="folders"
                  size='2'
                  onChange={this.props.selectFolder}
                >
                  {Object.keys(this.props.folders).map((keyName, keyIndex) => (
                    <option
                      className = 'folders-options'
                      key={uuidv4()}
                      defaultValue={this.props.folders[keyName].folder_id}
                    >
                      {this.props.folders[keyName].folder_name}
                    </option>
                  ))}
                </select>
                <button onClick={this.props.getSelectedFolder} className="btn select-btn">Select</button>
              </form>

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
            </div>

            <div className="input-container form-frame">
              <input
                onChange={this.props.getSearchInp}
                className="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />

              <button onClick={this.props.search} type="submit" className="btn">
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
