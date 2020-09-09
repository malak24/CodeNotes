import React, { Component } from 'react';
import './App.scss';

import SideBar from './components/SideBar/SideBar'
import Folders from './components/Folders/Folders'
import Files from './components/Files/Files'
import Editor from './components/Editor/Editor'
// import Topbar from './components/Topbar/Topbar'
// import Main from './components/Main/Main'

import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import FroalaEditorComponent from './froala/lib/FroalaEditor';
import 'froala-editor/js/plugins.pkgd.min.js';
import 'froala-editor/js/languages/de.js';

import 'froala-editor/js/third_party/image_tui.min.js';
import 'froala-editor/js/third_party/embedly.min.js';
import 'froala-editor/js/third_party/spell_checker.min.js';


// import FroalaEditorView from './froala/lib/FroalaEditorView';
// import FroalaEditorA from './froala/lib/FroalaEditorA';
// import FroalaEditorButton from './froala/lib/FroalaEditorButton';
// import FroalaEditorImg from './froala/lib/FroalaEditorImg';
// import FroalaEditorInput from './froala/lib/FroalaEditorInput';


class App extends Component {
  constructor() {
    super();
    
    this.state = {
      toggle: false,
    };
  }

  render() {
    return (
      <div className="app">
        <SideBar toggle = {this.state.toggle} />
        <Folders toggle = {this.state.toggle}/>
        <Files />
        <div className='app__right-section'>
          <Editor />
        </div>
      </div>
    );
  }
}

export default App;
