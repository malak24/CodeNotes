import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './Main.scss';
import { v4 as uuidv4 } from 'uuid';

class Main extends Component {

setNoteTitle = (e) => {
  console.log(e.currentTarget);
}

  render() {
    return (
      <div>
        {this.props.notes.map((note) => (
          <div key = {uuidv4()}>
            <Modal.Dialog className='note'>
              <Modal.Header className='note__header' closeButton>
                <Modal.Title>
                  <span onInput = {this.setNoteTitle} className = 'note__title' contentEditable = 'true'>{note.note_title}</span>
                </Modal.Title>
              </Modal.Header>

              <Modal.Body>
                  <span 
                  role='textbox' 
                  className='note__content' 
                  contentEditable = 'true'
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