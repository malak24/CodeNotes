import React, { Component } from 'react';
import './Folders.scss';
import addIcon from '../../assets/add.png'

class Folders extends Component {

  render() {
    return (
      <div className={this.props.openFolders ? 'folders' : 'folders--hide'}>
        <div className='folders__resizer'></div>
        <div className='folders__input-wrapper'>

          <input
            onChange={this.props.getInput}
            className='folders__input'
            type='text'
            name='folderName'
            placeholder='Enter folder name'
          />

          <img
            onClick={this.props.createOneFolder}
            className='folders__add'
            src={addIcon}
            alt='add'
          />

          <ul className='folders__list'>
            {this.props.folders.map((folder) => (
              <li>{folder.folder_name}</li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Folders;