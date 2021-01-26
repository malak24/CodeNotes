import React, { Component } from 'react';
import './SideBar.scss';
import Calendar from 'react-calendar';
import Folders from './Folders/Folders';
import 'react-calendar/dist/Calendar.css';


class SideBar extends Component {

  render() {
    return (
      <div className='sidebar'>
        <div className='sidebar__profile'>
          <div className='sidebar__avatar'></div>
          <div className = 'sidebar__info'>
          <p className='sidebar__email'>malakkataie@gmail.com</p>
          <p className='sidebar__name'>Malak Kataie</p>
          </div>
        </div>

        <div className = 'sidebar__wrapper'>
          <Calendar/>

          <Folders
            folders={this.props.folders}
            notes={this.props.notes}
            getNotes={this.props.getNotes}
            getFolderName={this.props.getFolderName}
            createFolder={this.props.createFolder}
            getFolderId={this.props.getFolderId}
            openFolders = {this.props.openFolders}
            showFolders = {this.props.showFolders}
            showNotes = {this.props.showNotes}
            openNotes = {this.props.openNotes}
          />
        </div>

      </div>
    )
  }
}


export default SideBar;