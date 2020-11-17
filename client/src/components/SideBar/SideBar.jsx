import React, { Component } from 'react';
import './SideBar.scss';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


class SideBar extends Component {

  render() {
    return (
      <div className='sidebar'>
        <div className = 'sidebar__profile'>
          <p className = 'sidebar__email'>malakkataie@gmail.com</p>
          <p className = 'sidebar__name'>Malak Kataie</p>
        </div>
        <Calendar className = 'sidebar__calendar' />
      </div>
    )
  }
}


export default SideBar;