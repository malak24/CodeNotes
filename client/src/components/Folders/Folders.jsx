import React, { Component } from 'react';
import './Folders.scss';
import addIcon from '../../assets/add.png'
import classnames from 'classnames'

class Folders extends Component {

  render() {
    // let foldersThemes = classNames ({
    //   folders--yellow : this.props.yellow,
    //   folders--orange : this.props.orange,
    //   folders--pink : this.props.pink,
    //   folders--purple : this.props.purple,
    //   folders--blue : this.props.blue,
    //   folders--teal : this.props.teal,
    //   folders--green : this.props.green,
    //   folders--grey : this.props.grey,
    //   folders--hide : this.props.openFolders
    // });

    return (
      <div className= 'folders'>
  {/* <div className= {foldersThemes}> */}
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