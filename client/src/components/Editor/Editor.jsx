import React from 'react';
import Froala from '../../froala/lib/FroalaEditor'

class Editor extends React.Component {
  constructor() {
    super();

    this.handleModelChange = this.handleModelChange.bind(this);

    this.state = {
      model: 'Example text'
    };
  }

  handleModelChange(model) {
    this.setState({ model: model })
    console.log(model);
  }

  render() {
    return <Froala
      model = {this.state.model}
      onModelChange = {this.handleModelChange}
      config= {{
        placeholderText: 'Edit Your Content Here!',
        charCounterCount: false,
        height: 100,
      }}
    />
  }
}

export default Editor;
