import React, { Component } from 'react';
import logo from '../../assets/logo.png';
import $ from 'jquery';
import './Topbar.scss';
import Popper from 'popper.js';

class Topbar extends Component {
  constructor() {
    super();

  }

  render() {
    $(function () {
      $('[data-toggle="tooltip"]').tooltip();
    });

    return (
      <div>
        <nav id="name" className="navbar navbar-expand-lg navbar-light">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">

            <p className="topbar__logo">CodeNotes</p>

            <div className="navbar-nav mr-auto mt-2 mt-lg-0">
                <p className="topbar__word btn"> New</p>
            </div>

            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
              <button className="btn btn-secondary my-2 my-sm-0 " type="submit">Search</button>
            </form>
          </div>
        </nav>
      </div>

    )
  }
}

export default Topbar;