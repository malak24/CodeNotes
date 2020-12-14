import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './Main.scss';


class Main extends Component {

  render() {
    return (
      <div>
        {this.props.notes.map((note) => (
          <div>
            <Modal.Dialog className='note'>
              <Modal.Header className='note__header' closeButton>
                <Modal.Title>
                  <span className = 'note__title' role='textbox' contenteditable = 'true'>{note.note_title}</span>
                </Modal.Title>
              </Modal.Header>

              <Modal.Body>
                  <span role='textbox' className='note__content' contenteditable = 'true'>{note.note_content}</span>
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