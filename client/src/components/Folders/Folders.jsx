import React, { Component } from 'react';
import './Folders.scss';


class Folders extends Component {

  render() {
    return (

      <ul className='folders__list'>
        {/* {this.props.folders.map((folder) => (
          <li className='folders__list'
            onClick={() => this.props.getFiles(folder.folder_id)}>
            {folder.folder_name}
          </li>))} */}
        <li>Folders</li>
        <li className='folders__item'>Folder 1</li>
        <li className='folders__item'>Folder 2</li>
        <li className='folders__item'>Folder 3</li>
      </ul>
    )
  };
}

export default Folders;