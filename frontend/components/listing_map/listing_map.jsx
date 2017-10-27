import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';

import MarkerManager from '../../util/marker_manager';

class ListingMap extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    const mapOptions = {
      center: { lat: 39.8283, lng: -98.5795 },
      zoom: 3
    };
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.listings);
  }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.listings);
  }

  registerListeners() {

  }

  handleMarkerClick() {

  }

  handleClick() {

  }

  render() {
    if (this.props.listings.length === 1) {
      return (
        <div className="single-map" ref={map => this.mapNode = map}>
          Map
        </div>
      );
    } else {
      return (
        <div className="map" ref={map => this.mapNode = map}>
          Map
        </div>
      );
    }
  }
}

export default withRouter(ListingMap);
