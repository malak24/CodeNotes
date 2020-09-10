import React, { Component } from 'react';
import './Files.scss';
import addIcon from '../../assets/add.png'

class Files extends Component {

  constructor(props) {
    super(props);
    this.state = {
      files: [],
    }

    this.add = this.add.bind(this);
  }

  add(inputValue) {
    if(this.state.files === undefined) {
      this.setState (this.files = inputValue)
    } else {
      this.setState(this.files = this.files.concat(inputValue));
    }
  }

  handleChange(e) {
    let inputValue = null;

      inputValue = e.target.value;
      console.log(e.target.value);
      this.add(inputValue);
  }

  // componentDidMount() {
  //   const files = document.querySelector('.files');
  //   let currMouseX = 0;
  //   let filesW = 0;

  //   /*mousedown on the resizers: Track the current 
  //   position of mouse and dimension of the original element 
  //   it is triggered when the user drags the element*/
  //   const mouseDownHandler = function (e) {
  //     currMouseX = e.clientX;

  //     //calculate the dimensions of the element
  //     const styles = window.getComputedStyle(files);
  //     filesW = parseInt(styles.width, 10);

  //     /*  mousemove on document: Calculate how far the mouse has been 
  //       moved, and adjust the dimension of the element */
  //     document.addEventListener('mousemove', mouseMoveHandler)
  //     document.addEventListener('mouseup', mouseUpHandler);
  //   }

  //   const mouseMoveHandler = function (e) {
  //     // How far the mouse has been moved
  //     const distanceX = e.clientX - currMouseX;

  //     // Adjust the dimension of element
  //     files.style.width = `${filesW + distanceX}px`;
  //   };

  //   const resizer = document.querySelector('.files__resizer')
  //   resizer.addEventListener('mousedown', mouseDownHandler);

  //   const mouseUpHandler = function () {
  //     // Remove the handlers of `mousemove` and `mouseup`
  //     document.removeEventListener('mousemove', mouseMoveHandler);
  //     document.removeEventListener('mouseup', mouseUpHandler);
  //   };
  // }

  render() {
    return (
      <div className={this.props.toggleFiles ? 'files--hide' : 'files'}>
        <div className='files__resizer'></div>
        <div className='files__input-wrapper'>
          <input onChange={this.handleChange}
            className='files__input'
            type='text'
            name='folderName'
            placeholder='Enter file name' />
          <img className='files__add' src={addIcon} alt='add' />
        </div>
        <div className='files__drag'></div>

      </div>
    )
  }
}

export default Files;

