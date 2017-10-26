import React from 'react';

export default class MarkerManager {
  constructor(map, handleClick) {
    this.map = map;
    this.markers = {};
    this.handleClick = handleClick;
    this.geocoder = new google.maps.Geocoder();
  }

  updateMarkers(listings) {
    listings
      .filter(listing => !this.markers[listing.id])
      .forEach(listing => this.createMarkerFromListing(listing));
  }

  createMarkerFromListing(listing) {
    const address = listing.location;
    this.geocoder.geocode({ 'address': address }, (results, status) => {
      if (status == 'OK') {
        const marker = new google.maps.Marker({
          position: results[0].geometry.location,
          map: this.map,
          listingId: listing.id
        });
        this.markers[marker.listingId] = listing;
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  }
}
