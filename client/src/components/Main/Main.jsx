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
            <Modal.Dialog className='main'>
              <Modal.Header className='main__header' closeButton>
                <Modal.Title className='main__title'>{note.note_title}</Modal.Title>
              </Modal.Header>

              <Modal.Body>
                <p>{note.note_content}</p>
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