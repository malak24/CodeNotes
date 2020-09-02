import React, { Component } from 'react';

import './SideBar.scss';
import folders from '../../assets/folders.png'
import files from '../../assets/files.png'
import search from '../../assets/search.png'
import customize from '../../assets/customize.png'
import zen from '../../assets/zen.png'
import cheatsheet from '../../assets/cheatsheet.png'

class SideBar extends Component {
  render() {
    return (
      <div className = 'sideBar'>
        <img className = 'sideBar__icon' src = {folders} alt = 'folder icon'/>
        <img className = 'sideBar__icon' src = {files} alt = 'files icon'/>
        <img className = 'sideBar__icon' src = {search} alt = 'search icon'/>
        <img className = 'sideBar__icon' src = {customize} alt = 'folder icon'/>
        <img className = 'sideBar__icon' src = {cheatsheet} alt = 'folder icon'/>
        <img className = 'sideBar__icon' src = {zen} alt = 'folder icon'/>
      </div>
    )
  }
}

export default SideBar;