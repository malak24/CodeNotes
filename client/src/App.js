import React from 'react';
import './App.scss';
import SideBar from './components/SideBar/SideBar'
import Folders from './components/Folders/Folders'
import Files from './components/Files/Files'
import Main from './components/Main/Main'


function App() {
  return (
    <div className="App">
      <SideBar />
      <Folders />
      <Files />
      <Main />
    </div>
  );
}

export default App;
