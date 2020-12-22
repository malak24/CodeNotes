import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './Main.scss';
import { v4 as uuidv4 } from 'uuid';
import ContentEditable from 'react-contenteditable';

class Main extends Component {

  assignRef = (element) => {
    this.target = element;
  }

  render() {
    return (
      <div>
        {this.props.notes.map((note) => (
          <div key = {uuidv4()}>
            <Modal.Dialog className='note'>
              <Modal.Header closeButton>
                <textarea
                ref = {'target'}
                // onClick = {this.props.getTarget}
                onChange = {this.props.autoexpand}
                // onChange = {this.props.setNoteTitle} 
                className = 'note__title note__header'
                defaultValue = {note.note_title}>
                </textarea>
              </Modal.Header>

              <Modal.Body>
                  <span 
                  className='note__content' 
                  onInput = {this.props.setNoteContent}
                  model = {this.props.model}>{note.note_content}</span>
              </Modal.Body>

              <Modal.Footer>
                <Button>Save</Button>
              </Modal.Footer>
            </Modal.Dialog>
          </div>
        ))}
      </div>
    )
  }
}


export default Main;