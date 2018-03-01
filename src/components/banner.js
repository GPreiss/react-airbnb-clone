import React from "react";
import "./banner.css";

class Banner extends React.Component {

  render() {
    const bannerStyle ={
      backgroundImage: "linear-gradient(to left, rgba(193, 66, 66, 0.1), rgba(103, 3, 3, 0.1)), url('https://images.unsplash.com/36/xIsiRLngSRWN02yA2BbK_submission-photo-7.jpg?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a6696d473e304cb159beb53554186c77&auto=format&fit=crop&w=745&q=80')"
    };


    return (
        <div className="landing-banner" style={bannerStyle}>
          <div className="banner-content">
            <h1>A Home Anywhere You Are</h1>
            <p>Rent unique places to stay from local hosts in 190+ countries.</p>
              <a href="#jump" className="btn-green">Start Here</a>
          </div>

        </div>
      );
  }
}

export default Banner;
