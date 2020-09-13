import React, { Component } from 'react';
import './Files.scss';
import addIcon from '../../assets/add.png'

let file;
let inputValue;


class Files extends Component {

  constructor(props) {
    super(props);
    this.state = {
      files : [{ name : ''}],
      file_name : ''
    }

    this.add = this.add.bind(this);
    this.getInput = this.getInput.bind(this);
    this.createFileName = this.createFileName.bind(this);
  }

  add(inputValue) {
    this.setState({
      files: this.state.files.concat({ name: inputValue })
    })
    for (let i = 0; i<= this.state.files.length; i++) {
      file = React.createElement('li', {}, `${this.state.files[i].name}`)
    }
  }

  getInput = (e) => {
    inputValue = e.target.value;
    this.setState({fileName : inputValue})
  }

  createFileName() {
    this.add(this.state.fileName);
  }

  render() {
    return (
      <div className={this.props.openFiles ? 'files' : 'files--hide'}>
        <div className='files__resizer'></div>
        <div className='files__input-wrapper'>

          <input 
            onChange={this.getInput}
            className='files__input'
            type='text'
            name='folderName'
            placeholder='Enter file name' 
            />

          <img
            onClick = {this.createFile} 
            className='files__add' 
            src={addIcon} 
            alt='add' 
          />

          <ul className = 'files__list'>
            {file}
          </ul>
        </div>
        <div className='files__drag'></div>

      </div>
    )
  }
}

export default Files;

