import React, { Component } from 'react';
import './Topbar.scss';
import { v4 as uuidv4 } from 'uuid';

class Topbar extends Component {

  render() {

    return (
      <div id='topbar'>
        <nav id="name" className="navbar navbar-expand-lg navbar-light">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <div className='topbar__wrapper'>
              <div className="navbar-nav mr-auto mt-2 mt-lg-0">
                <p onClick={this.props.createNote} className="btn"> New</p>
                <input onChange={this.props.getNoteTitle} className='topbar__note-input form-control' type='text' placeholder='Note title ...' />
              </div>
              <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                <button className="btn btn-secondary my-2 my-sm-0 " type="submit">Search</button>
              </form>
            </div>

          </div>
        </nav>
      </div>

    )
  }
}

export default Topbar;