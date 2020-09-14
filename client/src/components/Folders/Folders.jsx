import React, { Component } from 'react';
import './Folders.scss';
import addIcon from '../../assets/add.png'

let folder;
let inputValue;

class Folders extends Component {

  constructor(props) {
    super(props);
    this.state = {
      folderName: ''
    }

    this.add = this.add.bind(this);
    this.getInput = this.getInput.bind(this);
    this.createFolderName = this.createFolderName.bind(this);
  }

  componentDidMount() {
    this.renderFolders();
  }

  renderFolders() {
    console.log(this.props.foldersArr);
    // for (let i = 0; i < this.props.foldersArr.length; i++) {
    //   console.log(this.props.foldersArr)
    //   console.log(this.props.foldersArr[i])
    //   folder = React.createElement('li', {}, this.props.foldersArr[i])
    // }
  }

  add(inputValue) {
    console.log('add function');
    console.log(inputValue)
    this.props.foldersArr.concat({ name: inputValue })
  }


  getInput = (e) => {
    inputValue = e.target.value;
    console.log(inputValue);
    this.setState({ folderName: inputValue })
    console.log(this.state.folderName);
    console.log(this.props.folders)
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
            onClick={this.createFolderName}
            className='folders__add'
            src={addIcon}
            alt='add'
          />

          <ul className='folders__list'>
            {this.props.foldersArr.map((folder) => (
              <li>{folder.folder_name}</li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Folders;