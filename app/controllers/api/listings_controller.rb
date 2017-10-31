class Api::ListingsController < ApplicationController
  # before_action :require_login, only: [:create]

  def index
    listings = bounds ? Listing.in_bounds(bounds) : Listing.all

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
