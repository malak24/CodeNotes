import React, { Component } from 'react';

import './SideBar.scss';
import folders from '../../assets/folders.png'
import files from '../../assets/files.png'
import search from '../../assets/search.png'
import customize from '../../assets/customize.png'
import del from '../../assets/delete.png'
import zen from '../../assets/zen-white.png'
import tag from '../../assets/tag.png'
import img from '../../assets/img.png'


class SideBar extends Component {
  render() {
    return (
      <div className = 'sideBar'>
        <img className = 'sideBar__icon' src = {folders} alt = 'folder icon'/>
        <img className = 'sideBar__icon' src = {files} alt = 'files icon'/>
        <img className = 'sideBar__icon' src = {img} alt = 'tag icon'/>
        <img className = 'sideBar__icon' src = {tag} alt = 'image icon'/>
        <img className = 'sideBar__icon' src = {search} alt = 'search icon'/>
        <img className = 'sideBar__icon' src = {customize} alt = 'customize icon'/>
        <img className = 'sideBar__icon' src = {del} alt = 'delete icon' />
        <img className = 'sideBar__icon' src = {zen} alt = 'circle icon'/>
      </div>
    )
  }
}

export default SideBar;