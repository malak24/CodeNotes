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
      toggleFolders : false,
      toggleFiles : false,
    };
  }

  foldersClick() {
    this.setState({
      toggleFolders : !(this.state.toggleFolders)
    });
  };

  filesClick() {
    this.setState({
      toggleFiles : !(this.state.toggleFiles)
    });
  };

  // zenClick(){
  //   if (this.state.toggleFolders) {
  //     this.foldersClick()
  //   } else if (this.state.toggleFiles) {
  //     this.filesClick()
  //   } else if (this.state.toggleFolders && this.state.toggleFiles) {
  //     this.state.foldersClick()
  //     this.state.filesClick()
  //   }

    zenClick() {
      this.foldersClick()
      this.filesClick()
      console.log('button is clicked')
  }


  render() {
    return (
      <div className="app">
        <SideBar 
        toggleFolders = {this.state.toggleFolders} 
        toggleFiles = {this.state.toggleFiles} 
        foldersClick = {this.foldersClick}
        filesClick = {this.filesClick}
        zenClick = {this.zenClick}
        />

        <Folders toggleFolders = {this.state.toggleFolders} foldersClick = {this.foldersClick}/>
        <Files toggleFiles = {this.state.toggleFiles} filesClick = {this.filesClick}/>
        <div className='app__right-section'>
          <Editor />
        </div>
      </div>
    );
  }
}

export default App;
