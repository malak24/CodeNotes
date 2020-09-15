import React, { Component } from 'react';
import './Files.scss';
import addIcon from '../../assets/add.png'

class Files extends Component {

  render() {
    return (
      <div className={this.props.openFiles ? 'files' : 'files--hide'}>
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
              <li>{file.file_name}</li>
            ))}          
          </ul>
        </div>
        <div className='files__drag'></div>

      </div>
    )
  }
}

export default Files;

