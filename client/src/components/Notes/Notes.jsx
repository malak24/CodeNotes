import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './Notes.scss';
import { v4 as uuidv4 } from 'uuid';

class Notes extends Component {

  render() {
    return (
      <div id='notes'>
        <div className='notes'>
          {this.props.notes.map((note) => (
            <div key={uuidv4()}>
              <Modal.Dialog className='note'>
                <Modal.Header closeButton>
                  <textarea
                    onClick={ () => this.props.getNoteId(note.note_id)}
                    onChange={this.props.getNoteTitle}
                    className='note__title note__header'
                    defaultValue={note.note_id}>
                  </textarea>
                </Modal.Header>

                <Modal.Body>
                  <textarea
                    className='note__content'
                    onChange={this.props.autoexpand}
                    // onChange = {this.props.setNoteContent}
                    model={this.props.model}>{note.note_content}</textarea>
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