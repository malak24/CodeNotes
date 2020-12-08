import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './Folders.scss';
import down from '../../../assets/down.png'


class Folders extends Component {

  render() {
    return (
      <div id="folders">
        <div className='folders'>
          <div className='folders__title-container'>
            <p className='folders__title'>Folders</p>
            <div className='folders__new-folder'>
              <input onChange={this.props.getFolderName} className='folders__input' type='text' placeholder='Folder name ...' />
              <p onClick={this.props.createFolder} className="btn folders__new-btn">New</p>
            </div>
          </div>

          <ul className="list-group">
            {this.props.folders.map((folder) => (
              <li
                key={uuidv4()}
                onClick={() => {
                  this.props.getNotes(folder.folder_id)
                }}
                className="list-group-item">
                <div className = "folders__wrapper">
                  <p className = 'folders__folder-name'>{folder.folder_name}</p>
                  <img src={down} className="folders__name-arrow" alt='arrow' />
                </div>
                <ul className = 'folders__notes-list'>
                  {this.props.notes.map((note) => (
                    <li className = 'folders__notes-item'>{note.note_title}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Folders;