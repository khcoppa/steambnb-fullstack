class Api::ListingsController < ApplicationController
  # before_action :require_login, only: [:create]

  def index
    listings = bounds ? Listing.in_bounds(bounds) : Listing.all

    if params[:start_date] != "" && params[:end_date] != ""
      # check for overlap on the listing's booking's dates
      # debugger
      # listings = Listings.includes(:booking).where("params[:start_date] > booking.end_date OR booking.start_date > params[:end_date]").all
      available_listings = []
      listings.each do |listing|
        overlap = false
        listing.bookings.each do |booking|
          if !(params[:start_date] > booking.end_date.to_s || params[:start_date] > booking.end_date.to_s)
            overlap = true
          end
        end
        available_listings.push(listing) if overlap == false
      end
      listings = available_listings
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

  def dates
    (params[:check_in]..params[:check_out])
  end
end
