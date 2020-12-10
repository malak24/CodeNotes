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
                <Modal.Title className='note__title'>
                <p>
                  <span role='textbox' className='note__title' contenteditable>{note.note_title}</span>
                </p>
                  {/* <textarea rows='1' cols='66' className='note__title-input'>{note.note_title}</textarea> */}
                </Modal.Title>
              </Modal.Header>

              <Modal.Body>
                <p>
                  <span role='textbox' className='note__content' contenteditable>{note.note_content}</span>
                </p>
              </Modal.Body>

              <Modal.Footer>
                <Button variant="secondary">Close</Button>
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