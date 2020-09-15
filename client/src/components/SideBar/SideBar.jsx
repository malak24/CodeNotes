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
    this.displaySearch = this.displaySearch.bind(this);


    this.state = {
      displayColors: false,
      displaySearch: false,
    }
  }

  changeTheme() {
    this.setState({
      displayColors: !(this.state.displayColors)
    })
  }

  displaySearch() {
    this.setState({
      displaySearch: !(this.state.displaySearch)
    })
  }

  render() {
    return (
      <div className='sidebar'>

        <img
          onClick={this.props.foldersClick}
          src={folders}
          alt='folder icon'
          title='Display Folders'
        />

        <img
          onClick={this.props.filesClick}
          src={files}
          alt='files icon'
          title='Display Files'
        />
        <div className = 'sidebar__wrapper'>
          <img
            onClick={this.displaySearch}
            src={search}
            alt='search icon'
            title='Search'
          />

          <input
          // onChange = {this.props.search}
            className={this.state.displaySearch ? 'sidebar__input' : 'sidebar__input--hide'}
            type='text'
            placeholder='Search ...' 
            />
        </div>

        <div className='sidebar__wrapper'>
          <img
            onClick={this.changeTheme}
            src={customize}
            alt='customize icon'
            title='Themes'
          />

          <ul className={this.state.displayColors ? 'sidebar__cus' : 'sidebar__cus--hide'} >
            <li onClick={this.props.yellow} className='sidebar__cus-yelw'></li>
            <li onClick={this.props.orange} className='sidebar__cus-org'></li>
            <li onClick={this.props.pink} className='sidebar__cus-pnk'></li>
            <li onClick={this.props.purple} className='sidebar__cus-prpl'></li>
            <li onClick={this.props.blue} className='sidebar__cus-blu'></li>
            <li onClick={this.props.teal} className='sidebar__cus-teal'></li>
            <li onClick={this.props.green} className='sidebar__cus-grn'></li>
            <li onClick={this.props.grey} className='sidebar__cus-grey'></li>
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