import React from 'react';
import Froala from '../../froala/lib/FroalaEditor'

class Editor extends React.Component {

  render() {
    return (
      <div className='editor'>
        <Froala
          onModelChange={this.props.handleModelChange}
          // onKeyPress={() => this.props.saveNote(this.props.folderId, this.props.fileId)}
          model={this.props.model}
          config={{
            charCounterCount: false,
            height: 490,
          }}
        />
      </div>
    )
  }
}

export default Editor;
