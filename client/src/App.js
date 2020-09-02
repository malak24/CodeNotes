import React from 'react';
import './App.scss';
import SideBar from './components/SideBar/SideBar'
import Folders from './components/Folders/Folders'


function App() {
  return (
    <div className="App">
      <SideBar />
      <Folders />
    </div>
  );
}

export default App;
