import React, { Component } from 'react';
import './Topbar.scss';

import undo from '../../assets/undo.png'
import redo from '../../assets/redo.png'
import h1 from '../../assets/h1.png'
import h2 from '../../assets/h2.png'
import h3 from '../../assets/h3.png'
import h4 from '../../assets/h4.png'
import h5 from '../../assets/h5.png'
import h6 from '../../assets/h6.png'
import bold from '../../assets/bold.png'
import italic from '../../assets/italic.png'
import strike from '../../assets/strike.png'
import highlight from '../../assets/highlight.png'
import ol from '../../assets/ol.png'
import ul from '../../assets/ul.png'
import table from '../../assets/table.png'
import quote from '../../assets/quote.png'
import code from '../../assets/code.png'
import date from  '../../assets/date.png'
import link from '../../assets/link.png'


class Topbar extends Component {
  render() {
    return (
      <div className = 'topbar'>
        <img className = 'topbar__arrow' src = {undo}/>
        <img className = 'topbar__arrow'src = {redo}/>

        <img className = 'topbar__header' src = {h1}/>
        <img className = 'topbar__header' src = {h2}/>
        <img className = 'topbar__header' src = {h3}/>
        <img className = 'topbar__header' src = {h4}/>
        <img className = 'topbar__header' src = {h5}/>
        <img className = 'topbar__header' src = {h6}/>

        <img className = 'topbar__bold' src = {bold}/>

        <img className = 'topbar__italic' src = {italic}/>

        <img className = 'topbar__str' src = {strike}/>

        <img className = 'topbar__li' src = {ul}/>
        <img className = 'topbar__li' src = {ol}/>

        <img className = 'topbar__quote' src = {quote}/>
        <img className = 'topbar__hig' src = {highlight}/>
        <img className = 'topbar__tab' src = {table}/>
        <img className = 'topbar__code' src = {code}/>
        <img className = 'topbar__link' src = {link}/>
        <img className = 'topbar__date' src = {date}/>
      </div>
    )
  }
}

export default Topbar;