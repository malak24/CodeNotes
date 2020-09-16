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
        <div className='sidebar__wrapper'>
          <img
            onClick={this.displaySearch}
            src={search}
            alt='search icon'
            title='Search'
          />

            <p className='sidebar__search-text' >The search tool works by searching for a letter,
            few letters, a word or sentence. chose one of
            the options below and enter the word you are looking
            for in the search box
            </p>

            <form className = 'sidebar__search-wrapper'>
            <div className='sidebar__search-options'>
              <div className='sidebar__search-option'>
                <input type="radio" id="folderName" name="search" value="Folder name" />
                <label for="male">Folder name</label>
              </div>

              <div className='sidebar__search-option'>
                <input type="radio" id="fileName" name="search" value="File name" />
                <label for="male">File name</label>
              </div>

              <div className='sidebar__search-option'>
                <input type="radio" id="fileContent" name="search" value="File content" />
                <label for="male">File content</label>
              </div>
            </div>

          </form>

          <input
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
            <li onClick={this.props.yellowFn} className='sidebar__cus-yelw'></li>
            <li onClick={this.props.orangeFn} className='sidebar__cus-org'></li>
            <li onClick={this.props.pinkFn} className='sidebar__cus-pnk'></li>
            <li onClick={this.props.purpleFn} className='sidebar__cus-prpl'></li>
            <li onClick={this.props.blueFn} className='sidebar__cus-blu'></li>
            <li onClick={this.props.tealFn} className='sidebar__cus-teal'></li>
            <li onClick={this.props.greenFn} className='sidebar__cus-grn'></li>
            <li onClick={this.props.greyFn} className='sidebar__cus-grey'></li>
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