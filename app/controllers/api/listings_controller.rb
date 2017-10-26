class Api::ListingsController < ApplicationController
  before_action :require_login, only: [:create]

  def index
    @listings = Listing.all
    render :index
  end

  def show
    @listing = Listing.find(params[:id])
  end
end
