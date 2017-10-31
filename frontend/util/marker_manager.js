import React from 'react';

export default class MarkerManager {
  constructor(map, handleClick) {
    this.map = map;
    this.markers = {};
    this.handleClick = handleClick;
    this.removeMarker = this.removeMarker.bind(this);
  }

  updateMarkers(listings) {
    const listingsHash = {};
    listings.forEach(listing => listingsHash[listing.id] = listing);

    listings
      .filter(listing => !this.markers[listing.id])
      .forEach(listing => this.createMarkerFromListing(listing, this.handleClick))

    // const keys = Object.keys(this.markers).map(key => parseInt(key));
    Object.keys(this.markers)
      .filter(id => !listingsHash[id])
      .forEach((id) => this.removeMarker(this.markers[id]))
  }

  createMarkerFromListing(listing) {
    const position = new google.maps.LatLng(listing.lat, listing.lng)
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      listingId: listing.id
    });
    marker.addListener('click', () => this.handleClick(listing));
    this.markers[marker.listingId] = marker;
  }

  removeMarker(marker) {
    debugger
    this.markers[marker.listingId].setMap(null);
    delete this.markers[marker.listingId];
  }
}
