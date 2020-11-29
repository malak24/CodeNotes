import React, { Component } from 'react';
import './Folders.scss';


class Folders extends Component {

  render() {
    return (
      <div className = 'folders'>
        <p className='folders__title'>Folders</p>
          <ul class="list-group">
            <li class="list-group-item">Folder 1</li>
            <li class="list-group-item">Folder 2</li>
            <li class="list-group-item">Folder 3</li>
            <li class="list-group-item">Folder 4</li>
            <li class="list-group-item">Folder 5</li>
          </ul>
      </div>
    )
    {/* {this.props.folders.map((folder) => (
          <li className='folders__list'
            onClick={() => this.props.getFiles(folder.folder_id)}>
            {folder.folder_name}
          </li>))} */}
  }
}

export default Folders;