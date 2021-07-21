import React, { Component } from "react";
import "./Topbar.scss";
import logo from "../../assets/logo.png";

class Topbar extends Component {
  render() {
    return (
      <div id="topbar">
        <h1 className="topbar">CodeNotes</h1>
      </div>
    );
  }
}

export default Topbar;
