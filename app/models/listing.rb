class Listing < ApplicationRecord
  validates :title, :image_url, :price, :location, :guests, :bedrooms,
    :beds, :bath, :lat, :lng, presence: true

  has_many :reviews
  has_many :bookings
end
