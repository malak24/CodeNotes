import React, { Component } from 'react';

import './SideBar.scss';
import folders from '../../assets/folders.png';
import files from '../../assets/files.png';
import search from '../../assets/search.png';
import customize from '../../assets/customize.png';
import del from '../../assets/delete.png';
import zen from '../../assets/zen.png';
import add from '../../assets/add-white.png';


class SideBar extends Component {
  constructor() {
    super();

    this.changeTheme = this.changeTheme.bind(this);
    this.displaySearch = this.displaySearch.bind(this);


    this.state = {
      displayColors: false,
      displaySearch: false,
      displayText: false,
      displayOptions: false,
      displayAdd : false,
      selectedOption : ''
    }
  }

  changeTheme() {
    this.setState({
      displayColors: !(this.state.displayColors)
    })
  }

  displaySearch() {
    this.setState({
      displaySearch: !(this.state.displaySearch),
      displayText: !(this.state.displayText),
      displayOptions: !(this.state.displayOptions),
      displayAdd : !(this.state.displayAdd),
    })
  }

  input(e) {
    console.log(e)
  }

  handleOptionChange = (e) => {
    this.setState ({
      selectedOption : e.target.value
    });
  }

  render() {
    return (
      <div className='sidebar'>

        <img
          onClick={this.props.foldersClick}
          src={folders}
          alt='folder icon'
          title='Display Folders'
          className = 'sidebar__img'
        />

        <img
          onClick={this.props.filesClick}
          src={files}
          alt='files icon'
          title='Display Files'
          className = 'sidebar__img'
        />

        <img
          onClick={this.displaySearch}
          src={search}
          alt='search icon'
          title='Search'
          className = 'sidebar__img'
        />

        <div className='sidebar__wrapper'>

          <p className={this.state.displayText ? 'sidebar__search-text' : 'sidebar__search-text--hide'} >The search tool works by searching for a letter,
          few letters, a word or sentence. Make sure to select one of
          the options on the left before entering the word that you're are looking
          for in the search box
            </p>

          <form className='sidebar__search-wrapper'>
            <div className={this.state.displayOptions ? 'sidebar__search-options' : 'sidebar__search-options--hide'}>

              <div className='sidebar__search-option'>
                <input 
                type="radio" 
                value="folder name" 
                checked={this.state.selectedOption === 'folder name'}
                onChange = {this.handleOptionChange}
                />
                <label>Folder name</label>
              </div>

              <div className='sidebar__search-option'>
                <input 
                type="radio" 
                value="file name" 
                checked={this.state.selectedOption === 'file name'}
                onChange = {this.handleOptionChange}
                />
                <label>File name</label>
              </div>

              <div className='sidebar__search-option'>
                <input 
                type="radio" 
                value="note" 
                checked={this.state.selectedOption === 'note'} 
                onChange = {this.handleOptionChange}
                />
                <label>Note</label>
              </div>
            </div>

          </form>

          <input
            className={this.state.displaySearch ? 'sidebar__input' : 'sidebar__input--hide'}
            type='text'
            placeholder='Search ...'
            onChange = {this.props.getSearchVal}
          />

          <img className={this.state.displayAdd ? 'sidebar__add' : 'sidebar__add--hide'} src = {add} alt = 'add' />
        </div>

        <div className='sidebar__wrapper'>
          <img
            onClick={this.changeTheme}
            src={customize}
            alt='customize icon'
            title='Themes'
            className = 'sidebar__img'
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

        <img src={del} 
        alt='delete icon' 
        title='Delete' 
        className = 'sidebar__img'
        />

        <img onClick={this.props.zenClick}
          src={zen}
          alt='circle icon'
          title='Zen mode' 
          className = 'sidebar__img'
          />
      </div>
    )
  }
}

export default SideBar;