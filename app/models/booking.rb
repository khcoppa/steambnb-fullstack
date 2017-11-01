class Booking < ApplicationRecord
  validates :listing_id, :booker_id, :start_date, :end_date, presence: true
  validates_uniqueness_of :listing_id, :scope => [:start_date, :end_date]

  belongs_to :listing

  belongs_to :booker,
    foreign_key: :booker_id,
    class_name: 'User'

  # def overlapping_requests
  #   Booking
  #     .where.not(id: self.id)
  #     .where(listing_id: listing_id)
  #     .where.not('start_date > :end_date OR end_date < :start_date', start_date: start_date, end_date: end_date)
  # end
end
