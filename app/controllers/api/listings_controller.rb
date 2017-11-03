class Api::ListingsController < ApplicationController
  # before_action :require_login, only: [:create]

  def index
    # Google Maps search
    listings = bounds ? Listing.in_bounds(bounds) : Listing.all

    # Available Date search
    if (params[:start_date] != "" && params[:start_date] != nil) && (params[:end_date] != "" && params[:start_date] != nil)
      # check for overlap on the listing's booking's dates
      # listings = Listings.includes(:booking).where("params[:start_date] > booking.end_date OR booking.start_date > params[:end_date]").all
      available_listings = []
      listings.each do |listing|
        overlap = false
        listing.bookings.each do |booking|
          if !(params[:start_date] > booking.end_date.to_s || params[:end_date] < booking.start_date.to_s)
            overlap = true
          end
        end
        available_listings.push(listing) if overlap == false
      end
      listings = available_listings
    end

    # Location search
    if (params[:location] != nil && params[:location] != "")
      listings = listings.near(params[:location], 50)
    end

    @listings = listings
    render :index
  end

  def show
    @listing = Listing.find(params[:id])
  end

  private
  def bounds
    params[:bounds]
  end
end
