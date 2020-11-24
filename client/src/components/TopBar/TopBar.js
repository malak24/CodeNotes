import React, { Component } from 'react';
import logo from '../../assets/logo.png';
import save from '../../assets/save.png';
import del from '../../assets/del.png';
import add from '../../assets/add.png';
import $ from 'jquery';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './TopBar.scss';
import Popper from 'popper.js';

class TopBar extends Component {
  constructor() {
    super();

  }

  render() {
    $(function () {
      $('[data-toggle="tooltip"]').tooltip();
    });

    return (
      <div className="topBar">
        <img className="topBar__logo" src={logo} alt="logo" />
        <input className='topBar__search' type='text' placeholder='Search ...' value='' />
        <button className='topBar__button'>Search</button>

        {/* <div className = 'btn btn-secondary' data-toggle='tooltip'
        data-placement='bottom' title='Save note' > */}
        <div className = 'topBar__container topBar__container--save'>
          <img className='topBar__imgs' src={save} />
          <p className='topBar__words'>SAVE</p>
        </div>

        {/* <div className = 'btn btn-secondary' data-toggle='tooltip'
        data-placement='bottom' title='Delete note' > */}
        <div className = 'topBar__container topBar__container--del'>
          <img className='topBar__imgs' src={del} />
          <p className='topBar__words'>DELETE</p>
        </div >
        {/* 
        <div className='btn btn-secondary' data-toggle='tooltip'
          data-placement='bottom' title='Create note'> */}
        <div className = 'topBar__container topBar__container--new'>
          <img className='topBar__imgs' src={add} />
          <p className='topBar__words'>NEW</p>
        </div>
      </div >
    )
  }
}

export default TopBar;