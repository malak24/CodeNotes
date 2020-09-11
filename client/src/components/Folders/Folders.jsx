import React, { Component } from 'react';
import './Folders.scss';
import addIcon from '../../assets/add.png'

class Folders extends Component {

  constructor(props) {
    super(props);
    this.state = {
      folders: [],
    }

    this.add = this.add.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  add(inputValue) {    
    if(this.state.folders.length === 0) {
      this.setState ({folders : inputValue});
      console.log('if stayment is working');
    } else {
      this.setState({folders : this.state.folders.concat(inputValue)});
    }
  }

  handleChange(e) {
    let inputValue = null;
      inputValue = e.target.value;
      console.log(inputValue)
      this.add(inputValue);
  }

  // componentDidMount() {
  //   const folders = document.querySelector('.folders');
  //   let currMouseX = 0;
  //   let foldersW = 0;

  //   /*mousedown on the resizers: Track the current 
  //   position of mouse and dimension of the original element 
  //   it is triggered when the user drags the element*/
  //   const mouseDownHandler = function (e) {
  //     currMouseX = e.clientX;

  //     //calculate the dimensions of the element
  //     const styles = window.getComputedStyle(folders);
  //     foldersW = parseInt(styles.width, 10);

  //     /*  mousemove on document: Calculate how far the mouse has been 
  //       moved, and adjust the dimension of the element */
  //     document.addEventListener('mousemove', mouseMoveHandler)
  //     document.addEventListener('mouseup', mouseUpHandler);
  //   }


  //   const mouseMoveHandler = function (e) {
  //     // How far the mouse has been moved
  //     const distanceX = e.clientX - currMouseX;

  //     // Adjust the dimension of element
  //     folders.style.width = `${foldersW + distanceX}px`;

  //     console.log('mouse move handler is called')
  //   };

  //   const resizer = document.querySelector('.folders__resizer')
  //   resizer.addEventListener('mousedown', mouseDownHandler);

  //   const mouseUpHandler = function () {
  //     // Remove the handlers of `mousemove` and `mouseup`
  //     document.removeEventListener('mousemove', mouseMoveHandler);
  //     document.removeEventListener('mouseup', mouseUpHandler);
  //   };
  // }

  render() {
    return (
      <div className={this.props.openFolders ? 'folders' : 'folders--hide'}>
        <div
          className='folders__resizer'></div>
        <div className='folders__input-wrapper'>

          <input
            onChange={this.handleChange}
            className='folders__input'
            type='text'
            name='folderName'
            placeholder='Enter folder name'
          />

          <img
            onClick={this.add}
            className='folders__add'
            src={addIcon}
            alt='add'
          />

        </div>
      </div>
    )
  }
}

export default Folders;

// class Post extends Component {
//   constructor (props) {
//     super(props);
//     this.titleWasClicked = this.titleWasClicked.bind(this)
//   }

//   titleWasClicked(e) {
//     alert (this.props);
//     console.log(e);
//     e.preventDefault();  
//   }

//   render () {
//     return (
//       <h1 onClick = {this.titleWasClicked}>this title was clicked</h1>
//     )
//   }
// }