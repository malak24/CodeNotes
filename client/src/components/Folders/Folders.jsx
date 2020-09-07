import React, { Component } from 'react';
import './Folders.scss';
import add from '../../assets/add.png'
import { findByPlaceholderText } from '@testing-library/react';

class Folders extends Component {

  // state = {
  //   addFolder : false,
  // }

  // constructor(props) {
  //   super(props)
  //   this.addFolder = this.addFolder.bind(this)
  // }

  // addFolder(e) {
  //   console.log(e);
  //   this.setState(addFolder = true)
  // }

  componentDidMount() {
    const folders = document.querySelector('.folders');
    let currMouseX = 0;
    let foldersW = 0;

    /*mousedown on the resizers: Track the current 
    position of mouse and dimension of the original element 
    it is triggered when the user drags the element*/
    const mouseDownHandler = function (e) {
      currMouseX = e.clientX;

      //calculate the dimensions of the element
      const styles = window.getComputedStyle(folders);
      foldersW = parseInt(styles.width, 10);

      /*  mousemove on document: Calculate how far the mouse has been 
        moved, and adjust the dimension of the element */
      document.addEventListener('mousemove', mouseMoveHandler)
      document.addEventListener('mouseup', mouseUpHandler);
    }


    const mouseMoveHandler = function (e) {
      // How far the mouse has been moved
      const distanceX = e.clientX - currMouseX;

      // Adjust the dimension of element
      folders.style.width = `${foldersW + distanceX}px`;

      console.log('mouse move handler is called')
    };

    const resizer = document.querySelector('.folders__resizer')
    resizer.addEventListener('mousedown', mouseDownHandler);

    const mouseUpHandler = function () {
      // Remove the handlers of `mousemove` and `mouseup`
      document.removeEventListener('mousemove', mouseMoveHandler);
      document.removeEventListener('mouseup', mouseUpHandler);
    };

  }

  render() {
    return (
      <div className='folders'>
        <div className='folders__resizer'></div>
        <div className = 'folders__input-wrapper'>
          <input className = 'folders__input' type='text' name='folderName' placeholder='Enter folder name' />
          <img className = 'folders__add' src = {add} alt='add'/>
        </div>
      </div>
    )
  }
}

export default Folders;

