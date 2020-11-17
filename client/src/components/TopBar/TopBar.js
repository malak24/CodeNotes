import React, { Component } from 'react';
import './TopBar.scss';
import logo  from '../../assets/logo.png';
import save  from '../../assets/save.png';
import del from '../../assets/del.png';

class TopBar extends Component {
  constructor() {
    super();

  }
  render() {
    return (
      <div className = "topBar">
        <img className = "topBar__logo" src = {logo} alt = "logo"/>
        <input className = 'topBar__search' type='text' placeholder='Search ...' value ='' />
        
        <div>
        <img className = 'topBar__save' src={save}/>
        <p className = 'topBar__save-word'>SAVE</p>
        </div>
        
        <div>
        <img className = 'topBar__del' src={del}/>
        <p className = 'topBar__del-word'>DELETE</p>
        </div>
          
      </div>
    )
  }
}

export default TopBar;