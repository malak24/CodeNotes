import React, { Component } from 'react';
import './Folders.scss';
import down from '../../../assets/down.png'


class Folders extends Component {

  render() {
    return (
      <div id="folders">
        <div className='folders'>
          <div className='folders__title-container'>
            <p className='folders__title'>Folders</p>
            <div className = 'folders__new-folder'>
              <input onChange = {this.props.getFolderName} className = 'folders__input' type='text' placeholder='Folder name ...' />
              <p onClick={this.props.createFolder} className="btn folders__new-btn">New</p>
            </div>
          </div>

          {this.props.folders.map((folder) => (
            <ul class="list-group">
              <li onClick={() => { 
                this.props.getFolderId(folder.folder_id)
                // this.props.getNotes(folder.folder_id) 
              }} 
              class="list-group-item">
                <p>{folder.folder_name}</p>               
                <img src={down} className="folders__name-arrow"/>
              </li>

              {/* {this.props.notes.map((note) => ( */}
              {/* <ul> */}
              {/* <li>{this.props.note_title}</li> */}
              {/* </ul> */}
              {/* ))} */}
            </ul>
          ))}
        </div>
      </div>
    )
  }
}

export default Folders;