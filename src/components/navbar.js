import React from "react";
import "./navbar.css";
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

class Navbar extends React.Component {

  render() {
    return (
      <div className="navbar-wagon">
        <a href="/" className="navbar-wagon-title navbar-wagon-item navbar-wagon-link">
          ˈe(ə)rˌplān <FontAwesomeIcon icon="plane" size="lg" />
        </a>

        <div className="navbar-wagon-right">

          <a href="" className="navbar-wagon-item navbar-wagon-link">Host</a>
          <a href="" className="navbar-wagon-item navbar-wagon-link">Trips</a>
          <a href="" className="navbar-wagon-item navbar-wagon-link">Messages</a>
        </div>
      </div>
      );
  }
}

export default Navbar;
