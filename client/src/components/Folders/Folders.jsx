import React, { Component } from 'react';
import './Folders.scss';
import addIcon from '../../assets/add.png'

let folder;
let inputValue;

class Folders extends Component {

  constructor(props) {
    super(props);
    this.state = {
      folders: [{ name: '' }],
      folderName : ''
    }

    this.add = this.add.bind(this);
    this.getInput = this.getInput.bind(this);
    this.createFolderName = this.createFolderName.bind(this);
  }


  add(inputValue) {
    console.log(inputValue)
    this.setState({
      folders: this.state.folders.concat({ name: inputValue })
    })
    for (let i = 0; i<= this.state.folders.length; i++) {
      folder = React.createElement('li', {}, `${this.state.folders[i].name}`)
    }
  }

  getInput = (e) => {
    inputValue = e.target.value;
    this.setState({folderName : inputValue})
  }

  createFolderName() {
    this.add(this.state.folderName);
  }

  render() {
    return (
      <div className={this.props.openFolders ? 'folders' : 'folders--hide'}>
        <div className='folders__resizer'></div>
        <div className='folders__input-wrapper'>

          <input
            onChange={this.getInput}
            className='folders__input'
            type='text'
            name='folderName'
            placeholder='Enter folder name'
          />

          <img
            onClick={this.createFolder}
            className='folders__add'
            src={addIcon}
            alt='add'
          />

          <ul className='folders__list'>
            {folder}
          </ul>

        </div>
      </div>
    )
  }
}

export default Folders;