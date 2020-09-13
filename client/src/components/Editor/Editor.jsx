import React from 'react';
import Froala from '../../froala/lib/FroalaEditor'

class Editor extends React.Component {
  constructor() {
    super();

    this.handleModelChange = this.handleModelChange.bind(this);

    this.state = {
      model: 'Start writing here'
    };
  }

  handleModelChange(model) {
    this.setState({
      model: model
    })

    console.log(model);
  }

  render() {
    return (
      <div className = 'editor'>
        <Froala
          model={this.state.model}
          onModelChange={this.handleModelChange}
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
