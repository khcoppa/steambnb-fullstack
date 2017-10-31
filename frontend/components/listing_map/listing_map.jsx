import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';

import MarkerManager from '../../util/marker_manager';

const mapOptions = {
  center: { lat: 39.8283, lng: -98.5795 },
  zoom: 3
};

class ListingMap extends React.Component {
  componentDidMount() {
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));
    this.registerListeners();
    this.MarkerManager.updateMarkers(this.props.listings);
  }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.listings);
  }

  registerListeners() {
    google.maps.event.addListener(this.map, 'idle', () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat:north, lng: east },
        southWest: { lat: south, lng: west } };
      this.props.updateFilter('bounds', bounds);
    });
  }

  handleMarkerClick(listing) {
    this.props.history.push(`listings/${listing.id}`);
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
