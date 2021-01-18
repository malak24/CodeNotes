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
          <p className='sidebar__email'>malakkataie@gmail.com</p>
          <p className='sidebar__name'>Malak Kataie</p>
        </div>

        <Calendar className='sidebar__calendar' />

        <Folders
          folders={this.props.folders}
          notes={this.props.notes}
          getNotes={this.props.getNotes}
          getFolderName={this.props.getFolderName}
          createFolder={this.props.createFolder}
          getFolderId={this.props.getFolderId}
          openFolders = {this.props.openFolders}
          show = {this.props.show}
        />
      </div>
    )
  }
}


export default SideBar;