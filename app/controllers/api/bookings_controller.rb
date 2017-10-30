class Api::BookingsController < ApplicationController
  def create
    @booking = Booking.new(booking_params)
    if @booking.save
      render :show
    else
      render json: @booking.errors.full_messages, status: 422
    end
  end

  private
  def booking_params
    params.require(:booking).permit(:listing_id, :booker_id, :start_date, :end_date)
  end
end
