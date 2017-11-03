<a href="https://steambnb-clone.herokuapp.com/#/">
  <img src="https://vignette1.wikia.nocookie.net/clubpenguin/images/a/a7/Water_Droplet_Pin.PNG/revision/latest?cb=20150314141114" title="logo" align="right" height="90" />
</a>

Steambnb
========
Steambnb is a webapp inspired by airbnb that allows users to search, book and review luxurious spas around the world.

## Live site
Here is a link to the live site : https://steambnb-clone.herokuapp.com/#/

## Built with
  * Backend : Ruby on Rails
  * Frontend: React/Redux
  * Database: PostgreSQL
  * jQuery - Ajax
  * Google Maps API

## Features
  * User Authentication
  * Listings
  * Bookings
  * Reviews
    * Users can review Listings that they have successfully booked.
  * Search listings by Location, Availability, and Google Maps

    * Users can search for Listings by location.

        * Using the gem 'geocoder', the location searched is converted from a string address to the latitude and longitude. These coordinates are then compared with each Listing's coordinates, and the Listings that are within a 50 miles radius are returned.
    ```ruby
      geocoded_by :location, :latitude=>:lat, :longitude=>:lng
      after_validation :geocode
      # Location search
      if (params[:location] != nil && params[:location] != "")
        listings = listings.near(params[:location], 50)
      end
    ```
    * Users can search for Listings by Availability.

      * In order to filter Listings by the dates that are available to book, I used the bookings association on the Listing model. I filter out Listings that have overlapping bookings by comparing the user's prospective start_date and end_date to each booking's date.
    ```ruby
      # Availability search
      listing.bookings.each do |booking|
          if !(params[:start_date] > booking.end_date.to_s ||
               params[:end_date] < booking.start_date.to_s)
            overlap = true
          end
      end
    ```

    * Users can search for Listings by changing the position of the Google Map.

      * As the bounds of the map change, I update the bounds filter that filters out Listings with coordinates not in the bounds of the map.
    ```ruby
    # Google Maps search
    listings = bounds ? Listing.in_bounds(bounds) : Listing.all
    @listings = listings
    render :index
    ```

## Future Features
  * Messaging
