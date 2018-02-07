import React from "react";
import "./footer.css";
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

class Footer extends React.Component {

  render() {
    return (
      <div className="footer">
        <div className="footer-links">
          <a onClick={this.handleClick} style={{cursor: 'pointer'}}>
          <FontAwesomeIcon icon={["fab","facebook"]}/>
          </a>
          <a onClick={this.handleClick} style={{cursor: 'pointer'}}>
          <FontAwesomeIcon icon={["fab","twitter"]}/>
          </a>
          <a onClick={this.handleClick} style={{cursor: 'pointer'}}>
          <FontAwesomeIcon icon={["fab","pinterest"]}/>
          </a>
          <a onClick={this.handleClick} style={{cursor: 'pointer'}}>
          <FontAwesomeIcon icon={["fab","google"]}/>
          </a>
        </div>

        <div className="footer-copyright">
            These components are made with <FontAwesomeIcon icon="heart"/> by Gabi
        </div>
      </div>
      );
  }
}

export default Footer;
