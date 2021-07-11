import React, { Component } from 'react';
import './SideBar.scss';
import Folders from './Folders/Folders';
import logo from '../../assets/logo.png';

class SideBar extends Component {

  render() {
    return (
      <div className='sidebar'>
        <img className='logo' src={logo} alt='logo' />

        <div className='wrapper'>
          <Folders
            folders={this.props.folders}
            notes={this.props.notes}
            getNotes={this.props.getNotes}
            getFolderName={this.props.getFolderName}
            editFolderName={this.props.editFolderName}
            createFolder={this.props.createFolder}
            getFolderId={this.props.getFolderId}
            showFolders={this.props.showFolders}
            extendFolders={this.props.extendFolders}
            showNotes={this.props.showNotes}
            openNotes={this.props.openNotes}
            openNote={this.props.openNote}
            getNoteId={this.props.getNoteId}
            folderId = {this.props.folderId}
            hideNotes = {this.props.hideNotes}
            deleteFolder={this.props.deleteFolder}
          />
        </div>
      </div>
    )
  }
}



export default SideBar;