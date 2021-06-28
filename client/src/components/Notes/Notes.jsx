import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./Notes.scss";
import { v4 as uuidv4 } from "uuid";
import JoditEditor from "jodit-react";

const config = {
  readonly: false, // all options from https://xdsoft.net/jodit/doc/
};


class Notes extends Component {
  render() {
    return (
      <div id="notes">
        <div className="notes">
          {this.props.notes.map((note) => (
            <div key={uuidv4()}>
              <Modal.Dialog className="note">
                <Modal.Header>
                  <textarea
                    onMouseEnter={() => this.props.getNoteId(note.note_id)}
                    onTouchStart={() => this.props.getNoteId(note.note_id)}
                    onChange={this.props.saveTitle}
                    className="note__title note__header"
                    defaultValue={note.note_title}
                  ></textarea>
                </Modal.Header>

                <Modal.Body>
                  <JoditEditor
                    // ref={editor}
                    // value={content}
                    config={config}
                    tabIndex={1} // tabIndex of textarea
                    // onBlur={(newContent) => setContent(newContent)}
                    // onChange={(newContent) => {}}
                    onMouseOver={() => this.props.getNoteId(note.note_id)}
                    className="note__content"
                    onChange={this.props.saveNote}
                    onClick={this.props.autoexpand}
                    defaultValue={note.note_content}
                  />
                </Modal.Body>

                <Modal.Footer>
                  <Button
                    className="footer-btn"
                    onClick={this.props.deleteNote}
                    onMouseEnter={() => this.props.getNoteId(note.note_id)}
                  >
                    Delete
                  </Button>
                </Modal.Footer>
              </Modal.Dialog>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Notes;
