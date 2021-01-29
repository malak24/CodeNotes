import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './Notes.scss';
import { v4 as uuidv4 } from 'uuid';

class Notes extends Component {

  // <ul className={this.props.openFolders ? 'list-group' : ' folders__hidden'}>
  // {Object.keys(this.props.folders).map((keyName, keyIndex) => (
  //   <li key={uuidv4()}
  //     className="list-group-item">
  //     <button onClick={this.props.showNotes} className='btn folders__folder-name-arrow'>ᐁ</button>

  //     <div>
  //       <p onClick={() => { this.props.getNotes(this.props.folders[keyName].folder_id) }} className='folders__folder-name'>{this.props.folders[keyName].folder_name}</p>

  //     <ul className={this.props.openNotes ? 'folders__notes-list' : 'folders__notes-hidden'}>
  //       {this.props.folders[keyName].notes.map((note) => (
  //         <li className = 'folders__notes-item' key={uuidv4()} >{note.note_title}</li>
  //       ))}

  render() {
    return (
      <div id = 'notes'>
      <div className = 'notes'>
        {this.props.notes.map((note) => (
          <div key = {uuidv4()}>
            <Modal.Dialog className='note'>
              <Modal.Header closeButton>
                <textarea
                onChange = {this.props.getNoteTitle} 
                className = 'note__title note__header'
                defaultValue = {note.note_title}>
                </textarea>
              </Modal.Header>

              <Modal.Body>
                  <textarea 
                  className='note__content' 
                  onChange = {this.props.autoexpand}
                  // onChange = {this.props.setNoteContent}
                  model = {this.props.model}>{note.note_content}</textarea>
              </Modal.Body>

              <Modal.Footer>
                <Button>Save</Button>
              </Modal.Footer>
            </Modal.Dialog>
          </div>
        ))}
      </div>
      </div>

    )
  }
}


export default Notes;