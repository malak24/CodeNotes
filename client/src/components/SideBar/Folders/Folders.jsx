import React, { Component } from 'react';
import './Folders.scss';


class Folders extends Component {

  render() {
    return (
      <div id="folders">
        <div className='folders'>
          <div className='folders__title-container'>
            <p className='folders__title'>Folders</p>
            <div className = 'folders__buttons'>
              <p onClick={this.props.createFolder} className="btn folders__title-new">New</p>
              <p className="folders__title-arrow">▾</p>
            </div>

          </div>
          <ul class="list-group">
            <li class="list-group-item">Folder 1</li>
            <li class="list-group-item">Folder 2</li>
            <li class="list-group-item">Folder 3</li>
            <li class="list-group-item">Folder 4</li>
          </ul>
        </div></div>
    )
    {/* {this.props.folders.map((folder) => (
          <li className='folders__list'
            onClick={() => this.props.getNotes(folder.folder_id)}>
            {folder.folder_name}
          </li>))} */}
  }
}

export default Folders;