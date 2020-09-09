import React, { Component } from 'react';

import './SideBar.scss';
import folders from '../../assets/folders.png';
import files from '../../assets/files.png';
import search from '../../assets/search.png';
import customize from '../../assets/customize.png';
import del from '../../assets/delete.png';
import zen from '../../assets/zen-white.png';
import tag from '../../assets/tag.png';


class SideBar extends Component {
  // constructor() {
  //   // super(props);

  //   this.state = {
  //     toggle : false,
  //   };
  // }

  render() {
    return (
      <div className = 'sidebar'>
        <img onClick = {this.foldersClick} src = {folders} alt = 'folder icon' title = 'Display Folders'/>
        <img className = '' src = {files} alt = 'files icon' title = 'Display Files'/>
        <img className = '' src = {tag} alt = 'image icon' title = 'Add tag'/>
        <img className = '' src = {search} alt = 'search icon' title = 'Search'/>
        <img className = '' src = {customize} alt = 'customize icon' title = 'Themes'/>
        <img className = '' src = {del} alt = 'delete icon' title = 'Delete'/>
        <img className = '' src = {zen} alt = 'circle icon' title = 'Zen mode'/>
      </div>
    )
  }
}

export default SideBar;