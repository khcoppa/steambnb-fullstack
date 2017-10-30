class Booking < ApplicationRecord
  validates :listing_id, :booker_id, :start_date, :end_date, presence: true

  belongs_to :listing
  belongs_to :booker,
    foreign_key: :booker_id,
    class_name: 'User'
end
