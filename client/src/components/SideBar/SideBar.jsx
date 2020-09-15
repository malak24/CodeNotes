import React, { Component } from 'react';

import './SideBar.scss';
import folders from '../../assets/folders.png';
import files from '../../assets/files.png';
import search from '../../assets/search.png';
import customize from '../../assets/customize.png';
import del from '../../assets/delete.png';
import zen from '../../assets/zen.png';


class SideBar extends Component {
  constructor() {
    super();

    this.changeTheme = this.changeTheme.bind(this);

    this.state = {
      displayColors: false,
    }
  }

  changeTheme() {
    this.setState({
      displayColors: !(this.state.displayColors)
    })
  }

  render() {
    return (
      <div className='sidebar'>

        <img onClick={this.props.foldersClick}
          src={folders}
          alt='folder icon'
          title='Display Folders' />

        <img onClick={this.props.filesClick}
          src={files}
          alt='files icon'
          title='Display Files' />

        <img src={search} alt='search icon' title='Search' />

        <div className = 'sidebar__wrapper'>
          <img
            onClick={this.changeTheme}
            src={customize}
            alt='customize icon'
            title='Themes'
          />

          <ul className={this.state.displayColors ? 'sidebar__cus' : 'sidebar__cus--hide'} >
            <li onClick = {this.state.yellow} className='sidebar__cus-yelw'></li>
            <li onClick = {this.state.orange} className='sidebar__cus-org'></li>
            <li onClick = {this.state.pink} className='sidebar__cus-pnk'></li>
            <li onClick = {this.state.purple} className='sidebar__cus-prpl'></li>
            <li onClick = {this.state.blue} className='sidebar__cus-blu'></li>
            <li onClick = {this.state.teal} className='sidebar__cus-teal'></li>
            <li onClick = {this.state.green} className='sidebar__cus-grn'></li>
            <li onClick = {this.state.grey} className='sidebar__cus-grey'></li>
          </ul>
        </div>

        <img src={del} alt='delete icon' title='Delete' />

        <img onClick={this.props.zenClick}
          src={zen}
          alt='circle icon'
          title='Zen mode' />
      </div>
    )
  }
}

export default SideBar;