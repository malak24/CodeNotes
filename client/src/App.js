import React from 'react';
import './App.scss';
import SideBar from './components/SideBar/SideBar'
import Folders from './components/Folders/Folders'
import Files from './components/Files/Files'
import Topbar from './components/Topbar/Topbar'
import Main from './components/Main/Main'


function App() {
  return (
    <div className="app">
      <SideBar />
      <Folders />
      <Files />
      <div className='app__right-section'>
        <Topbar />
        <Main />
      </div>
    </div>
  );
}

export default App;
