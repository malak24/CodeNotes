import React, { Component } from 'react';

import './Folders.scss';
import folder from '../../assets/folder.png'
import files from '../../assets/files.png'
import search from '../../assets/search.png'
import customize from '../../assets/customize.png'
import zen from '../../assets/zen.png'
import cheatsheet from '../../assets/cheatsheet.png'

class Folders extends Component {
  render() {
    return (
      <div className = 'sideBar'>
        <img src = {folder} alt = 'folder icon'/>
        <img src = {files} alt = 'files icon'/>
        <img src = {search} alt = 'search icon'/>
        <img src = {customize} alt = 'folder icon'/>
        <img src = {cheatsheet} alt = 'folder icon'/>
        <img src = {zen} alt = 'folder icon'/>
      </div>
    )
  }
}

export default Folders;
