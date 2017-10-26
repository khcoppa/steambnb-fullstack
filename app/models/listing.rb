class Listing < ApplicationRecord
  validates :title, :image_url, :price, :location, :guests, :bedrooms,
    :beds, :bath, presence: true
end
