import React, { Component } from "react";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
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
          {/* -------- Instructions note -------- */}
          <Modal.Dialog className="note">
            <Modal.Header>
              <div className="note-title note-title-instructions">READ ME</div>
            </Modal.Header>

            <Modal.Body>
              {this.props.hideNote ? (
                <p></p>
              ) : (
                <div>
                  <p>
                    CodeNotes is a note taking app that developers can use to
                    create, edit and delete notes and folders.
                    <br /> In CodeNotes you can format the text, add code
                    snippets, tables, lists, images, links ... etc
                    <br />
                    <br />
                    <b>Everything you type is automatically saved!</b>
                  </p>
                </div>
              )}
            </Modal.Body>

            <Modal.Footer>
              <Button
                onClick={this.props.toggleNote}
                className={this.props.showInstructions ? ".btn" : "footer-btn-rotate"}>▲
              </Button>
            </Modal.Footer>
          </Modal.Dialog>

          
          {/* -------- Note structure --------- */}
          {this.props.notes.map((note) => (
            <div key={uuidv4()}>
              <Modal.Dialog className="note">
                <Modal.Header>
                  <textarea
                    className="note-title"
                    onClick={() => this.props.getNoteId(note.note_id)}
                    onTouchStart={() => this.props.getNoteId(note.note_id)}
                    onChange={this.props.saveTitle}
                    defaultValue={note.note_title}
                  ></textarea>
                </Modal.Header>

                <Modal.Body>
                  <SunEditor
                    placeholder="Please type here ..."
                    autoFocus={false}
                    onTouchStart={() => this.props.getNoteId(note.note_id)}
                    onChange={this.props.saveNote}
                    onClick={() => this.props.getNoteId(note.note_id)}
                    defaultValue={note.note_content}
                    setOptions={{
                      height: 200,
                      buttonList: [
                        ["undo","redo","font","fontSize","fontColor","bold","underline","italic",
                          "strike","hiliteColor","removeFormat","align","list","fullScreen",
                          "horizontalRule","image","link","table","codeView",],
                      ],
                    }}
                    setContents={note.note_content}
                  />
                </Modal.Body>

                <Modal.Footer>
                  <Button
                    className="footer-btn"
                    onClick={() => {this.props.deleteNote(note.note_id);}}>x
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
