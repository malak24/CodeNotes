import React, { Component } from 'react';
import './App.scss';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

import SideBar from './components/SideBar/SideBar'
import Folders from './components/Folders/Folders'
import Files from './components/Files/Files'
import Editor from './components/Editor/Editor'

import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import FroalaEditorComponent from './froala/lib/FroalaEditor';
import 'froala-editor/js/plugins.pkgd.min.js';
import 'froala-editor/js/languages/de.js';

import 'froala-editor/js/third_party/image_tui.min.js';
import 'froala-editor/js/third_party/embedly.min.js';
import 'froala-editor/js/third_party/spell_checker.min.js';


class App extends Component {
  constructor() {
    super();

    this.foldersClick = this.foldersClick.bind(this);
    this.filesClick = this.filesClick.bind(this);
    this.zenClick = this.zenClick.bind(this);

    this.state = {
      openFolders : true,
      openFiles : true,
    };
  }

  foldersClick() {
    this.setState({
      openFolders : !(this.state.openFolders)
    });
  };

  filesClick() {
    this.setState({
      openFiles : !(this.state.openFiles)
    });
  };

  zenClick(){
    this.setState ({
      openFolders : false,
      openFiles : false,
    })
  }

  render() {
    return (
      <div className="app">
        <SideBar 
        openFolders = {this.state.openFolders} 
        openFiles = {this.state.openFiles} 
        foldersClick = {this.foldersClick}
        filesClick = {this.filesClick}
        zenClick = {this.zenClick}
        />

        <Folders openFolders = {this.state.openFolders} foldersClick = {this.foldersClick}/>
        <Files openFiles = {this.state.openFiles} filesClick = {this.filesClick}/>
        <div className='app__right-section'>
          <Editor />
        </div>
      </div>
    );
  }
}

export default App;
