import React, { Component } from 'react';
import './Folders.scss';
import addIcon from '../../assets/add.png'
import classNames from 'classnames'

class Folders extends Component {

  render() {
    let foldersThemes = classNames ({
      'folders folders--yellow' : this.props.yellowFo,
      'folders folders--orange' : this.props.orangeFo,
      'folders folders--pink' : this.props.pinkFo,
      'folders folders--purple' : this.props.purpleFo,
      'folders folders--blue' : this.props.blueFo,
      'folders folders--teal' : this.props.tealFo,
      'folders folders--green' : this.props.greenFo,
      'folders folders--grey' : this.props.greyFo,
      'folders folders--hide' : !this.props.openFolders
    });

    return (
      <div className= {foldersThemes}>
        <div className='folders__resizer'></div>

        <div className='folders__input-wrapper'>
          <input
            onChange = {this.props.getInputFolder}
            className = 'folders__input'
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
              <li onClick = {() => this.props.getFiles(folder.folder_id)}>{folder.folder_name} </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Folders;