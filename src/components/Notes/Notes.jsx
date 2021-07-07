import React, { Component } from "react";
import SunEditor from "suneditor-react";
import 'suneditor/dist/css/suneditor.min.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./Notes.scss";
import { v4 as uuidv4 } from "uuid";

class Notes extends Component {
  render() {
    return (
      <div id="notes">
        <div className="notes">
          <Modal.Dialog className="note">
            <Modal.Header>
              <div className="note__title">Instructions</div>
            </Modal.Header>

            <Modal.Body className="note__content">
              {this.props.hideNote ? (
                <p></p>
              ) : (
                <div>
                  In CodeNotes app you can do the following:
                  <br /> For folders :
                  <ul>
                    <li>
                      Create a new folder by typing the folder's name in the box
                      and clicking on 'New'.
                    </li>
                    <li>Delete a folder by clicking on the 'x' button.</li>
                    <li>
                      Edit the folder's name by clicking on 'Edit'. Folders'
                      names are saved automatically!
                    </li>
                  </ul>
                  For notes :
                  <ul>
                    <li>
                      Create a note inside a folder by selecting the folder
                      first and then entering the note's title in the box and
                      clicking on 'New'.
                    </li>
                    <li>Edit the note's title by clicking on it.</li>
                    <li>Edit the note by typing in it.</li>
                    <li>Delete the note by clicking on the 'Delete' button.</li>
                  </ul>
                  What's more?
                  <ul>
                    <li>Notes shrink automatically to save space.</li>
                    <li>
                      Notes expand automatically when you hover over them.
                    </li>
                    <li>
                      You can hide the folders' list by clicking on the
                      down-arrow right in the 'Folders' section.
                    </li>
                    <li>
                      You can hide the notes list by clicking on the up-arrow
                      next to the folder's name.
                    </li>
                    <li>
                      You can view a note separately from other notes by
                      clicking on it.
                    </li>
                    <li>The search feature is coming soon!</li>
                  </ul>
                </div>
              )}
            </Modal.Body>

            <Modal.Footer>
              <Button
                onClick={this.props.toggleNote}
                className={
                  this.props.rotate ? "footer-btn-rotate" : "footer-btn"
                }
              >
                ▲
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
          {this.props.notes.map((note) => (
            <div key={uuidv4()}>
              <Modal.Dialog className="note">
                <Modal.Header>
                  <textarea
                    className="note__title"
                    onClick={() => this.props.getNoteId(note.note_id)}
                    onTouchStart={() => this.props.getNoteId(note.note_id)}
                    onChange={this.props.saveTitle}
                    defaultValue={note.note_title}
                  ></textarea>
                </Modal.Header>

                <Modal.Body>
                  <SunEditor
                    placeholder="Please type here ..."
                    autoFocus={true}
                    onTouchStart={() => this.props.getNoteId(note.note_id)}
                    onChange={this.props.saveNote}
                    onClick={() => this.props.getNoteId(note.note_id)}
                    defaultValue={note.note_content}
                    // setOptions={{
                    //   height: 200,
                    //   buttonList: [["font", "align"], ["image"]],
                    // }}
                    setContents={note.note_content}
                  />
                </Modal.Body>

                <Modal.Footer>
                  <Button
                    className="footer-btn"
                    onClick={() => {
                      this.props.deleteNote(note.note_id);
                    }}
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
