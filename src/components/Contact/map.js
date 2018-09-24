import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div><i className="fas fa-map-marker-alt pin"></i></div>;
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 40.75,
      lng: -73.9851
    },
    zoom: 12
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '80%', width: '60%', marginRight: '12%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: ''}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >

          <AnyReactComponent
            lat={40.75}
            lng={-73.9851}
            text={'New York City'}
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;