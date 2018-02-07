import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import Navbar from './components/navbar';
import Footer from './components/footer';
import Flat from './components/flat';
import Marker from './components/marker';
import './App.css';

import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'
import { faHeart, faPlane} from '@fortawesome/fontawesome-free-solid'

fontawesome.library.add(brands, faHeart)

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      flats: [],
      allFlats: [],
      selectedFlat: null,
      search: ""
    };
  }

  componentDidMount() {
    const url = "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json";
    fetch(url)
    .then(response => response.json())
    .then((data) => {
     this.setState({
      flats: data,
      allFlats: data
     });
    })
  }

selectFlat = (flat) => {
  console.log(flat);
  this.setState({
    selectedFlat: flat
  });
}

handleSearch = (event) => {
  this.setState({
    search: event.target.value,
    flats: this.state.allFlats.filter((flat) => new RegExp(event.target.value, "i").exec(flat.name))
  })
}

  render() {
    let center = {
      lat: 48.8566,
      lng: 2.3522
    };
    if (this.state.selectedFlat) {
      center = {
        lat: this.state.selectedFlat.lat,
        lng: this.state.selectedFlat.lng
      }
    }

    return (
       <div className="landing-pg">
          <div className="navbar">
           <Navbar />
          </div>
        <div className="app">
          <div className="main">
            <div className="search">
            <input
              type="text"
              placeholder="Search..."
              value={this.state.search}
              onChange={this.handleSearch} />
            </div>
            <div className="flats">
              {this.state.flats.map((flat) => {
                return <Flat
                key={flat.name}
                flat={flat}
                selectFlat={this.selectFlat} />
              })}
            </div>
          </div>
          <div className="map">
            <GoogleMapReact
                bootstrapURLKeys= {{
                  key: "AIzaSyCu0bLGXzQIhX6K4T36YjfHovqKvizqhkU"
                }}
                center= { center }
                zoom= { 12 }>
                  {this.state.flats.map((flat) => {
                    return <Marker
                    key={flat.name}
                    lat={flat.lat}
                    lng={flat.lng}
                    text={flat.price+ "€"}
                    selected={flat === this.state.selectedFlat} />
              })}
             </GoogleMapReact>
          </div>
        </div>
        <div className="footer-component">
           <Footer />
        </div>
      </div>
      );
  }
}

export default App;
