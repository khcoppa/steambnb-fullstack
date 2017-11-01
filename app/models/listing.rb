class Listing < ApplicationRecord
  validates :title, :image_url, :price, :location, :guests, :bedrooms,
    :beds, :bath, :lat, :lng, presence: true

  has_many :reviews
  has_many :bookings

  geocoded_by :location, :latitude=>:lat, :longitude=>:lng 
  after_validation :geocode

  def self.in_bounds(bounds)
    self.where("lat < ?", bounds[:northEast][:lat])
      .where("lat > ?", bounds[:southWest][:lat])
      .where("lng > ?", bounds[:southWest][:lng])
      .where("lng < ?", bounds[:northEast][:lng])
  end
end
