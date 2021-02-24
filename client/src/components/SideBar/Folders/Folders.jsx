import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './Folders.scss';


class Folders extends Component {

  render() {
    return (
      <div id="folders">
        <div className='folders'>
          <div className='folders__title-container'>
            <div className='folders__title-sub-container'>
              <p className='folders__title'>Folders</p>
              <button onClick={this.props.showFolders} className='folders__arrows btn'>ᐁ</button>
            </div>
            <div className='folders__new-folder'>
              <input onChange={this.props.getFolderName} className='folders__input' type='text' placeholder='Folder name ...' />
              <p onClick={this.props.createFolder} className="btn folders__new-btn">New</p>
            </div>
          </div>

          <ul className={this.props.openFolders ? 'list-group' : ' folders__hidden'}>
            {Object.keys(this.props.folders).map((keyName, keyIndex) => (
              <li key={uuidv4()}
                className="list-group-item">
                <div className='folders__btn-wrapper'>
                  <button className='folders__edit'>Edit</button>
                  <button onClick={this.props.showNotes} className='btn folders__folder-name-arrow'>ᐁ</button>
                </div>

                <div className='folders__container'>
                  <p onClick={() => { this.props.getNotes(this.props.folders[keyName].folder_id) }} className='folders__folder-name'>{this.props.folders[keyName].folder_name}</p>

                  <ul className={this.props.openNotes ? 'folders__notes-list' : 'folders__notes-hidden'}>
                    {this.props.folders[keyName].notes.map((note) => (
                      <li
                        // onClick={console.log (`this is note id : ${note.note_id}`)}
                        className='folders__notes-item' key={uuidv4()} >{note.note_title}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Folders;