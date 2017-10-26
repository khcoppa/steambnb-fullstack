import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';

class ListingMap extends React.Component {
  componentDidMount() {
    const mapOptions = {
      center: { lat: 39.8283, lng: -98.5795 },
      zoom: 3
    };
    this.map = new google.maps.Map(this.mapNode, mapOptions);
  }

  componentDidUpdate() {

  }

  registerListeners() {

  }

  handleMarkerClick() {

  }

  handleClick() {

  }

  render() {
    return (
      <div className="map" ref={map => this.mapNode = map}>
        Map
      </div>
    );
  }
}

export default withRouter(ListingMap);
