import React, { Component } from "react";
import "./Topbar.scss";
import logo from "../../assets/logo.png";

class Topbar extends Component {
  render() {
    return (
      <div id="topbar">
        <div className="topbar">
          <img className="logo" src={logo} />
        </div>
      </div>
    );
  }
}

export default Topbar;
