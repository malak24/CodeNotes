import React, { Component } from 'react';
import './Files.scss';
import addIcon from '../../assets/add.png'
import classNames from 'classnames'

class Files extends Component {

  render() {
    let filesThemes = classNames ({
      'files files--yellow' : this.props.yellowFi,
      'files files--orange' : this.props.orangeFi,
      'files files--pink' : this.props.pinkFi,
      'files files--purple' : this.props.purpleFi,
      'files files--blue' : this.props.blueFi,
      'files files--teal' : this.props.tealFi,
      'files files--green' : this.props.greenFi,
      'files files--grey' : this.props.greyFi,
      'files files--hide' : !this.props.openFiles
    });    
    
    return (
      <div className={filesThemes}>
        <div className='files__resizer'></div>
        <div className='files__input-wrapper'>

          <input 
            onChange={this.props.getInputFile}
            className='files__input'
            type='text'
            name='folderName'
            placeholder='Enter file name' 
            />

          <img
            onClick = {() => this.props.createOneFile(this.props.folderId)} 
            className='files__add' 
            src={addIcon} 
            alt='add' 
          />
          
          <ul className = 'files__list'>
          {this.props.files.map((file) => (
              <li onClick = {() => this.props.getNote(file.folder_id, file.file_id)}>{file.file_name}</li>
            ))}          
          </ul>
        </div>
        <div className='files__drag'></div>

      </div>
    )
  }
}

export default Files;

