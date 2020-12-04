import React, { Component } from 'react';
import './Folders.scss';


class Folders extends Component {

  render() {
    return (
      <div id="folders">
        <div className='folders'>
          <div className='folders__title-container'>
            <p className='folders__title'>Folders</p>
            <div className='folders__buttons'>
              <p onClick={this.props.createFolder} className="btn folders__title-new">New</p>
              <p className="folders__title-arrow">▾</p>
            </div>
          </div>

          {this.props.folders.map((folder) => (
            <ul class="list-group">
              <li onClick={() => { this.props.getNotes(folder.folder_id) }} class="list-group-item">{folder.folder_name}</li>

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