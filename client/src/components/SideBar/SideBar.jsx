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
  constructor() {
    super();
  }
  
  render() {
    return (
      <div className='sidebar'>

        <img onClick={this.props.foldersClick}
             src={folders} 
             alt='folder icon'
             title='Display Folders' />

        <img onClick = {this.props.filesClick}
             src={files} 
             alt='files icon' 
             title='Display Files' />

        <img src={tag} alt='image icon' title='Add tag' />
        <img src={search} alt='search icon' title='Search' />
        <img src={customize} alt='customize icon' title='Themes' />
        <ul>
          <li></li>
        </ul>
        <img src={del} alt='delete icon' title='Delete' />

        <img onClick = {this.props.zenClick}
             src={zen} 
             alt='circle icon' 
             title='Zen mode' />
      </div>
    )
  }
}

export default SideBar;